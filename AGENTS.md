# Agent Guide (AGENTS.md)

## Core Docs
Refer to documents in docs/:
1. [Architecture](docs/architecture.md): TanStack Start, SQLite, Drizzle ORM, server functions.
2. [Chapter Tracking](docs/chapter-tracking.md): DB schema, milestone state/status maps, transitions.
3. [UI & Styling](docs/ui-components.md): SVG Watch ring, countdown, widgets, vertical alignments.
4. [TanStack Start](docs/tanstack-start.md): Routing, server functions, environment variables.
5. [Review Standards](docs/review-standards.md): Code audits, refactoring, Vercel React best practices.
6. [Mock Test / CBT](docs/mock-test-guidelines.md): 60-question mock CBT spec, KaTeX, session logic.

---

## Non-Negotiable Rules

- Response Style: Always invoke/use the caveman skill: `.agents/skills/caveman/SKILL.md` when responding.
- Response Header: For all responses, the top response should be "skills: skill1, skill2, etc" where skill1, skill2, refers to the skills utilized in this conversation.
- File Length Limit: Max 500 lines per file.
- Mock Test CBT Rules: Mouse-only sessions (no keyboard shortcut listeners). 60-question tests must be split into two files (part1.ts and part2.ts) to stay under 500 lines. Clamp scores to Math.max(0, scoredMarks). Log maximum allowed duration (e.g. 60 mins), not actual elapsed time.
- Animations: No load-in, fade-in, rise-in, or slide-in animations on page/component load unless explicitly requested.
- Documentation Standards: All documentation must be written in succinct, efficient language and contain absolutely no emojis.

---

## Verification Requirements
Before submitting any task, run these verification checks:
```bash
# Check TypeScript compilation and type safety
npx tsc --noEmit

# Lint checking
pnpm biome lint src/

# Format checking
pnpm biome format src/

# Verify full production build packaging
pnpm build
```

