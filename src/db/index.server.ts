import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema";

const isTurso = !!process.env.TURSO_CONNECTION_URL;

const connectionUrl = isTurso
	? (process.env.TURSO_CONNECTION_URL ?? "")
	: `file:${process.env.DATABASE_URL || "dev.db"}`;

const client = createClient({
	url: connectionUrl,
	authToken: process.env.TURSO_AUTH_TOKEN,
});

// Seed table locally on import to guarantee local SQLite DB exists
if (!isTurso) {
	const dbUrl = process.env.DATABASE_URL || "dev.db";
	if (dbUrl.includes("/") || dbUrl.includes("\\")) {
		const fullPath = resolve(process.cwd(), dbUrl);
		mkdirSync(dirname(fullPath), { recursive: true });
	}

	client
		.execute(`
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
	`)
		.catch((err) => {
			console.error("Failed to seed local SQLite table:", err);
		});
}

export const db = drizzle(client, { schema });
