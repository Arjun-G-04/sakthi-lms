import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";

import { db } from "#/db/index.server";
import { type NewTestPerformanceRow, testPerformances } from "#/db/schema";

export type TestPerformanceInput = {
	testDate: string;
	testName: string;
	chaptersCovered: string[];
	durationMinutes: number;
	totalMarks: number;
	scoredMarks: number;
	testType: string;
};

export const loadTestPerformances = createServerFn({ method: "GET" }).handler(
	async () => {
		const rows = await db.select().from(testPerformances).all();

		// Return chronologically sorted rows
		return rows.sort((a, b) => {
			const dateA = new Date(a.testDate).getTime();
			const dateB = new Date(b.testDate).getTime();
			if (dateA !== dateB) return dateA - dateB;
			return a.id - b.id;
		});
	},
);

export const addTestPerformance = createServerFn({ method: "POST" })
	.inputValidator((input: unknown): TestPerformanceInput => {
		if (typeof input !== "object" || input === null) {
			throw new Error("Invalid payload: must be an object");
		}

		const {
			testDate,
			testName,
			chaptersCovered,
			durationMinutes,
			totalMarks,
			scoredMarks,
			testType,
		} = input as Record<string, unknown>;

		if (typeof testDate !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(testDate)) {
			throw new Error("Invalid testDate: must be in YYYY-MM-DD format");
		}

		if (typeof testName !== "string" || testName.trim() === "") {
			throw new Error("Invalid testName: must be a non-empty string");
		}

		if (!Array.isArray(chaptersCovered)) {
			throw new Error("Invalid chaptersCovered: must be an array of strings");
		}
		for (const ch of chaptersCovered) {
			if (typeof ch !== "string") {
				throw new Error("Invalid chapter item: must be a string");
			}
		}

		const dur = Number(durationMinutes);
		if (Number.isNaN(dur) || dur <= 0 || !Number.isInteger(dur)) {
			throw new Error("Invalid durationMinutes: must be a positive integer");
		}

		const total = Number(totalMarks);
		if (Number.isNaN(total) || total <= 0 || !Number.isInteger(total)) {
			throw new Error("Invalid totalMarks: must be a positive integer");
		}

		const scored = Number(scoredMarks);
		if (
			Number.isNaN(scored) ||
			scored < 0 ||
			!Number.isInteger(scored) ||
			scored > total
		) {
			throw new Error(
				"Invalid scoredMarks: must be an integer between 0 and totalMarks",
			);
		}

		if (typeof testType !== "string" || testType.trim() === "") {
			throw new Error("Invalid testType: must be a non-empty string");
		}

		return {
			testDate,
			testName,
			chaptersCovered,
			durationMinutes: dur,
			totalMarks: total,
			scoredMarks: scored,
			testType: testType.trim(),
		};
	})
	.handler(async ({ data }) => {
		const newRow: NewTestPerformanceRow = {
			testDate: data.testDate,
			testName: data.testName,
			chaptersCovered: JSON.stringify(data.chaptersCovered),
			durationMinutes: data.durationMinutes,
			totalMarks: data.totalMarks,
			scoredMarks: data.scoredMarks,
			testType: data.testType,
		};

		await db.insert(testPerformances).values(newRow);
		return { ok: true as const };
	});

export const deleteTestPerformance = createServerFn({ method: "POST" })
	.inputValidator((input: unknown): number => {
		if (typeof input !== "number" || !Number.isInteger(input)) {
			throw new Error("Invalid payload: must be an integer ID");
		}
		return input;
	})
	.handler(async ({ data: id }) => {
		await db.delete(testPerformances).where(eq(testPerformances.id, id));
		return { ok: true as const };
	});
