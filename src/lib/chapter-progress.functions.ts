import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";

import { db } from "#/db/index.server";
import { chapterProgress, type NewChapterProgressRow } from "#/db/schema";

import {
	CHAPTER_GROUPS,
	type ChapterField,
	cycleValue,
	makeChapterKey,
	PROGRESS_STATES,
	type ProgressState,
	STATUS_STATES,
	type StatusState,
} from "./chapter-catalog";

const chapterSeeds: NewChapterProgressRow[] = CHAPTER_GROUPS.flatMap((group) =>
	group.chapters.map((chapterTitle) => ({
		chapterKey: makeChapterKey(group.subject, group.grade, chapterTitle),
		subject: group.subject,
		classLevel: `Class ${group.grade}`,
		chapterTitle,
	})),
);

async function seedChapterRows() {
	await db.insert(chapterProgress).values(chapterSeeds).onConflictDoNothing();
}

function progressState(value: string | null | undefined): ProgressState {
	return PROGRESS_STATES.includes(value as ProgressState)
		? (value as ProgressState)
		: "Yet to begin";
}

function statusState(value: string | null | undefined): StatusState {
	return STATUS_STATES.includes(value as StatusState)
		? (value as StatusState)
		: "Weak";
}

export type ChapterBoardSection = Omit<
	(typeof CHAPTER_GROUPS)[number],
	"chapters"
> & {
	classLevel: string;
	chapters: Array<{
		chapterKey: string;
		chapterTitle: string;
		notes: ProgressState;
		exercise: ProgressState;
		level1: ProgressState;
		level2: ProgressState;
		mb: ProgressState;
		status: StatusState;
		updatedAt: number;
	}>;
};

export type ChapterUpdateInput = {
	chapterKey: string;
	field: ChapterField;
	value: ProgressState | StatusState;
};

export const loadChapterBoard = createServerFn({ method: "GET" }).handler(
	async () => {
		await seedChapterRows();

		const rows = await db.select().from(chapterProgress).all();
		const rowMap = new Map(rows.map((row) => [row.chapterKey, row]));

		return CHAPTER_GROUPS.map((group) => ({
			...group,
			classLevel: `Class ${group.grade}`,
			chapters: group.chapters.map((chapterTitle) => {
				const chapterKey = makeChapterKey(
					group.subject,
					group.grade,
					chapterTitle,
				);
				const row = rowMap.get(chapterKey);

				return {
					chapterKey,
					chapterTitle,
					notes: progressState(row?.notes),
					exercise: progressState(row?.exercise),
					level1: progressState(row?.level1),
					level2: progressState(row?.level2),
					mb: progressState(row?.mb),
					status: statusState(row?.status),
					updatedAt: row?.updatedAt ?? 0,
				};
			}),
		})) as ChapterBoardSection[];
	},
);

export const updateChapterProgress = createServerFn({ method: "POST" })
	.inputValidator((input: unknown): ChapterUpdateInput => {
		if (typeof input !== "object" || input === null) {
			throw new Error("Invalid payload: must be an object");
		}

		const { chapterKey, field, value } = input as Record<string, unknown>;

		if (typeof chapterKey !== "string") {
			throw new Error("Invalid payload: chapterKey must be a string");
		}

		const validFields: ChapterField[] = [
			"notes",
			"exercise",
			"level1",
			"level2",
			"mb",
			"status",
		];
		if (
			typeof field !== "string" ||
			!validFields.includes(field as ChapterField)
		) {
			throw new Error(
				`Invalid payload: field must be one of ${validFields.join(", ")}`,
			);
		}

		const isStatus = field === "status";
		const validValues: readonly string[] = isStatus
			? STATUS_STATES
			: PROGRESS_STATES;
		if (typeof value !== "string" || !validValues.includes(value)) {
			throw new Error(
				`Invalid payload: value must be one of ${validValues.join(", ")}`,
			);
		}

		return {
			chapterKey,
			field: field as ChapterField,
			value: value as ProgressState | StatusState,
		};
	})
	.handler(async ({ data }) => {
		await seedChapterRows();

		const patch: Partial<typeof chapterProgress.$inferInsert> = {
			updatedAt: Math.floor(Date.now() / 1000),
		};

		if (data.field === "status") {
			patch.status = data.value as StatusState;
		} else {
			patch[data.field] = data.value as ProgressState;
		}

		await db
			.update(chapterProgress)
			.set(patch)
			.where(eq(chapterProgress.chapterKey, data.chapterKey));

		return { ok: true as const };
	});

export function cycleChapterValue(current: ProgressState) {
	return cycleValue(current, PROGRESS_STATES);
}

export function cycleChapterStatus(current: StatusState) {
	return cycleValue(current, STATUS_STATES);
}
