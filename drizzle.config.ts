import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: ['.env.local', '.env'] })

const isTurso = !!process.env.TURSO_CONNECTION_URL;

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: isTurso ? 'turso' : 'sqlite',
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL || process.env.DATABASE_URL || 'dev.db',
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
})

