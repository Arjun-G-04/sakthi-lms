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

export const db = drizzle(client, { schema });
