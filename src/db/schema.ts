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
