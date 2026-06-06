import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";

import { db } from "#/db/index.server";
import { todos } from "#/db/schema";

export const loadTodos = createServerFn({ method: "GET" })
	.inputValidator((input: unknown): string => {
		if (typeof input !== "string") {
			throw new Error("Invalid payload: input must be a weekStartDate string");
		}
		if (!/^\d{4}-\d{2}-\d{2}$/.test(input)) {
			throw new Error("Invalid payload: input must be in YYYY-MM-DD format");
		}
		return input;
	})
	.handler(async ({ data: weekStartDate }) => {
		const rows = await db
			.select()
			.from(todos)
			.where(eq(todos.weekStartDate, weekStartDate))
			.all();

		// Sort chronologically by createdAt
		return rows.sort((a, b) => a.createdAt - b.createdAt);
	});

export type CreateTodoInput = {
	content: string;
	weekStartDate: string;
	chapterKey?: string;
};

export const createTodo = createServerFn({ method: "POST" })
	.inputValidator((input: unknown): CreateTodoInput => {
		if (typeof input !== "object" || input === null) {
			throw new Error("Invalid payload: must be an object");
		}
		const { content, weekStartDate, chapterKey } = input as Record<
			string,
			unknown
		>;

		if (typeof content !== "string" || content.trim() === "") {
			throw new Error("Invalid payload: content must be a non-empty string");
		}
		if (
			typeof weekStartDate !== "string" ||
			!/^\d{4}-\d{2}-\d{2}$/.test(weekStartDate)
		) {
			throw new Error(
				"Invalid payload: weekStartDate must be in YYYY-MM-DD format",
			);
		}
		if (
			chapterKey !== undefined &&
			chapterKey !== null &&
			typeof chapterKey !== "string"
		) {
			throw new Error("Invalid payload: chapterKey must be a string");
		}

		return {
			content: content.trim(),
			weekStartDate,
			chapterKey: chapterKey || undefined,
		};
	})
	.handler(async ({ data }) => {
		await db.insert(todos).values({
			content: data.content,
			weekStartDate: data.weekStartDate,
			chapterKey: data.chapterKey,
			completed: false,
		});
		return { ok: true as const };
	});

export type ToggleTodoInput = {
	id: number;
	completed: boolean;
};

export const toggleTodo = createServerFn({ method: "POST" })
	.inputValidator((input: unknown): ToggleTodoInput => {
		if (typeof input !== "object" || input === null) {
			throw new Error("Invalid payload: must be an object");
		}
		const { id, completed } = input as Record<string, unknown>;

		if (typeof id !== "number" || !Number.isInteger(id)) {
			throw new Error("Invalid payload: id must be an integer");
		}
		if (typeof completed !== "boolean") {
			throw new Error("Invalid payload: completed must be a boolean");
		}

		return { id, completed };
	})
	.handler(async ({ data }) => {
		await db
			.update(todos)
			.set({ completed: data.completed })
			.where(eq(todos.id, data.id));
		return { ok: true as const };
	});

export const deleteTodo = createServerFn({ method: "POST" })
	.inputValidator((input: unknown): number => {
		if (typeof input !== "number" || !Number.isInteger(input)) {
			throw new Error("Invalid payload: input must be an integer ID");
		}
		return input;
	})
	.handler(async ({ data: id }) => {
		await db.delete(todos).where(eq(todos.id, id));
		return { ok: true as const };
	});
