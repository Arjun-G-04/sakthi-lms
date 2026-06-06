import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const chapterProgress = sqliteTable("chapter_progress", {
	chapterKey: text("chapter_key").primaryKey(),
	subject: text("subject").notNull(),
	classLevel: text("class_level").notNull(),
	chapterTitle: text("chapter_title").notNull(),
	notes: text("notes").notNull().default("Yet to begin"),
	exercise: text("exercise").notNull().default("Yet to begin"),
	level1: text("level1").notNull().default("Yet to begin"),
	level2: text("level2").notNull().default("Yet to begin"),
	mb: text("mb").notNull().default("Yet to begin"),
	status: text("status").notNull().default("Weak"),
	updatedAt: integer("updated_at", { mode: "number" })
		.notNull()
		.default(sql`(unixepoch())`),
});

export type ChapterProgressRow = typeof chapterProgress.$inferSelect;
export type NewChapterProgressRow = typeof chapterProgress.$inferInsert;

export const testPerformances = sqliteTable("test_performances", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	testDate: text("test_date").notNull(),
	testName: text("test_name").notNull(),
	chaptersCovered: text("chapters_covered").notNull(), // JSON string array of chapter titles or keys
	durationMinutes: integer("duration_minutes").notNull(),
	totalMarks: integer("total_marks").notNull(),
	scoredMarks: integer("scored_marks").notNull(),
	testType: text("test_type").notNull(),
	createdAt: integer("created_at").notNull().default(sql`(unixepoch())`),
});

export type TestPerformanceRow = typeof testPerformances.$inferSelect;
export type NewTestPerformanceRow = typeof testPerformances.$inferInsert;

export const todos = sqliteTable("todos", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	content: text("content").notNull(),
	completed: integer("completed", { mode: "boolean" }).notNull().default(false),
	weekStartDate: text("week_start_date").notNull(), // 'YYYY-MM-DD' representing Sunday of that week
	chapterKey: text("chapter_key"), // optional, links to a chapter
	createdAt: integer("created_at").notNull().default(sql`(unixepoch())`),
});

export type TodoRow = typeof todos.$inferSelect;
export type NewTodoRow = typeof todos.$inferInsert;
