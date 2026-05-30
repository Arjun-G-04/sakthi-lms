import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

import * as schema from "./schema";

const databasePath =
	process.env.DATABASE_URL ??
	resolve(process.cwd(), "data", "sakthi-lms.sqlite");

mkdirSync(dirname(databasePath), { recursive: true });

const sqlite = new Database(databasePath);

sqlite.pragma("journal_mode = WAL");
sqlite.pragma("foreign_keys = ON");
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS chapter_progress (
    chapter_key TEXT PRIMARY KEY,
    subject TEXT NOT NULL,
    class_level TEXT NOT NULL,
    chapter_title TEXT NOT NULL,
    notes TEXT NOT NULL DEFAULT 'Yet to begin',
    exercise TEXT NOT NULL DEFAULT 'Yet to begin',
    level1 TEXT NOT NULL DEFAULT 'Yet to begin',
    level2 TEXT NOT NULL DEFAULT 'Yet to begin',
    mb TEXT NOT NULL DEFAULT 'Yet to begin',
    status TEXT NOT NULL DEFAULT 'Weak',
    updated_at INTEGER NOT NULL DEFAULT (unixepoch())
  )
`);

export const db = drizzle(sqlite, { schema });
