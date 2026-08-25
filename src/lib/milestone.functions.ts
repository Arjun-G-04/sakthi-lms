import { createServerFn } from "@tanstack/react-start";
import { asc, eq } from "drizzle-orm";

import { db } from "#/db/index.server";
import { milestones } from "#/db/schema";

export type MilestoneCategory = "test" | "revision";
export type MilestoneStatus = "upcoming" | "completed";

export type Milestone = {
	id: number;
	title: string;
	targetDate: string; // YYYY-MM-DD
	category: MilestoneCategory;
	description: string | null;
	status: MilestoneStatus;
	createdAt: number;
};

export const loadMilestones = createServerFn({ method: "GET" }).handler(
	async (): Promise<Milestone[]> => {
		const rows = await db
			.select()
			.from(milestones)
			.orderBy(asc(milestones.targetDate))
			.all();

		return rows.map((r) => ({
			id: r.id,
			title: r.title,
			targetDate: r.targetDate,
			category: (r.category as MilestoneCategory) || "test",
			description: r.description ?? null,
			status: (r.status as MilestoneStatus) || "upcoming",
			createdAt: r.createdAt,
		}));
	},
);

export type CreateMilestoneInput = {
	title: string;
	targetDate: string;
	category?: MilestoneCategory;
	description?: string;
};

export const createMilestone = createServerFn({ method: "POST" })
	.inputValidator((input: unknown): CreateMilestoneInput => {
		if (typeof input !== "object" || input === null) {
			throw new Error("Invalid payload: must be an object");
		}
		const { title, targetDate, category, description } = input as Record<
			string,
			unknown
		>;

		if (typeof title !== "string" || title.trim() === "") {
			throw new Error("Invalid payload: title must be a non-empty string");
		}
		if (
			typeof targetDate !== "string" ||
			!/^\d{4}-\d{2}-\d{2}$/.test(targetDate)
		) {
			throw new Error("Invalid payload: targetDate must be YYYY-MM-DD");
		}

		const validCategories: MilestoneCategory[] = ["test", "revision"];
		const parsedCategory =
			typeof category === "string" &&
			validCategories.includes(category as MilestoneCategory)
				? (category as MilestoneCategory)
				: "test";

		return {
			title: title.trim(),
			targetDate,
			category: parsedCategory,
			description:
				typeof description === "string" ? description.trim() : undefined,
		};
	})
	.handler(async ({ data }) => {
		const [created] = await db
			.insert(milestones)
			.values({
				title: data.title,
				targetDate: data.targetDate,
				category: data.category ?? "test",
				description: data.description || null,
				status: "upcoming",
			})
			.returning();

		return {
			ok: true as const,
			milestone: created,
		};
	});

export type UpdateMilestoneInput = {
	id: number;
	title: string;
	targetDate: string;
	category: MilestoneCategory;
	description?: string | null;
	status: MilestoneStatus;
};

export const updateMilestone = createServerFn({ method: "POST" })
	.inputValidator((input: unknown): UpdateMilestoneInput => {
		if (typeof input !== "object" || input === null) {
			throw new Error("Invalid payload: must be an object");
		}
		const { id, title, targetDate, category, description, status } =
			input as Record<string, unknown>;

		if (typeof id !== "number" || !Number.isInteger(id)) {
			throw new Error("Invalid payload: id must be an integer");
		}
		if (typeof title !== "string" || title.trim() === "") {
			throw new Error("Invalid payload: title must be a non-empty string");
		}
		if (
			typeof targetDate !== "string" ||
			!/^\d{4}-\d{2}-\d{2}$/.test(targetDate)
		) {
			throw new Error("Invalid payload: targetDate must be YYYY-MM-DD");
		}

		return {
			id,
			title: title.trim(),
			targetDate,
			category: (category as MilestoneCategory) || "test",
			description: typeof description === "string" ? description.trim() : null,
			status: status === "completed" ? "completed" : "upcoming",
		};
	})
	.handler(async ({ data }) => {
		await db
			.update(milestones)
			.set({
				title: data.title,
				targetDate: data.targetDate,
				category: data.category,
				description: data.description,
				status: data.status,
			})
			.where(eq(milestones.id, data.id));

		return { ok: true as const };
	});

export type ToggleStatusInput = {
	id: number;
	status: MilestoneStatus;
};

export const toggleStatusMilestone = createServerFn({ method: "POST" })
	.inputValidator((input: unknown): ToggleStatusInput => {
		if (typeof input !== "object" || input === null) {
			throw new Error("Invalid payload: must be an object");
		}
		const { id, status } = input as Record<string, unknown>;
		if (typeof id !== "number" || !Number.isInteger(id)) {
			throw new Error("Invalid payload: id must be an integer");
		}
		const validStatus: MilestoneStatus =
			status === "completed" ? "completed" : "upcoming";
		return { id, status: validStatus };
	})
	.handler(async ({ data }) => {
		await db
			.update(milestones)
			.set({ status: data.status })
			.where(eq(milestones.id, data.id));

		return { ok: true as const };
	});

export const deleteMilestone = createServerFn({ method: "POST" })
	.inputValidator((input: unknown): number => {
		if (typeof input !== "number" || !Number.isInteger(input)) {
			throw new Error("Invalid payload: input must be an integer ID");
		}
		return input;
	})
	.handler(async ({ data: id }) => {
		await db.delete(milestones).where(eq(milestones.id, id));
		return { ok: true as const };
	});
