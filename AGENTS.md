# Agent Development Guide (AGENTS.md)

Welcome! This file acts as the primary developer documentation and entry point for LLM agents working on the **Sakthi LMS - NEET 2027 Tracking App**.

---

## 🧭 Project Blueprint & Core Docs

To keep this guide concise, specialized sections are split into independent documents inside the `/docs` folder. Always refer to these specific directories when working on features:

1. **[System Architecture](file:///Users/arjun/Documents/Code/sakthi-lms/docs/architecture.md)**
   - Tech stack details (TanStack Start, SQLite, Drizzle ORM, Tailwind CSS).
   - Data flow charts and server functions (`loadChapterBoard`, `updateChapterProgress`).
2. **[Chapter Tracking & State Model](file:///Users/arjun/Documents/Code/sakthi-lms/docs/chapter-tracking.md)**
   - Database schema modeling and constraints.
   - Milestone state maps (Progress States & Status States).
   - State transition cycling helper rules.
3. **[UI Components & Premium Styling](file:///Users/arjun/Documents/Code/sakthi-lms/docs/ui-components.md)**
   - SVG geometry for the Apple Watch segmented progress ring.
   - Dynamic real-time widgets (`NeetCountdown` timer, `HeroQuote` fetch loader).
   - Symmetrical vertical centering alignments in table rows.
4. **[TanStack Start Architecture](file:///Users/arjun/Documents/Code/sakthi-lms/docs/tanstack-start.md)**
   - Unified routing layouts and isomorphic execution boundaries.
   - Server Function (`createServerFn`) design patterns and middleware.
   - Strict client vs server environment variable safety rules.
5. **[Codebase Review Standards](file:///Users/arjun/Documents/Code/sakthi-lms/docs/review-standards.md)**
   - Standards for logical, functional, and security audits.
   - Performance and optimization checking via Vercel React Best Practices.
   - High-density caveman-review feedback and auto-refactoring flow.

---

## 🚀 Quick Start for LLM Agents

### 1. Key Working Files
- **App Routes / Core UI**: [src/routes/index.tsx](file:///Users/arjun/Documents/Code/sakthi-lms/src/routes/index.tsx)
- **DB Queries / Actions**: [src/lib/chapter-progress.ts](file:///Users/arjun/Documents/Code/sakthi-lms/src/lib/chapter-progress.ts)
- **Static Schema Model**: [src/db/schema.ts](file:///Users/arjun/Documents/Code/sakthi-lms/src/db/schema.ts)
- **Static Definitions**: [src/lib/chapter-catalog.ts](file:///Users/arjun/Documents/Code/sakthi-lms/src/lib/chapter-catalog.ts)

### 2. Standard CLI Scripts
Always run these scripts inside the root workspace folder to verify code safety and styling sanity:

```bash
# Check TypeScript type safety (pre-flight checks)
npx tsc --noEmit

# Format & Lint checking with Biome
npx biome check src/routes/index.tsx

# Auto-apply Biome format and lint repairs
npx biome check --write src/routes/index.tsx

# Verify full production build compilation
pnpm build
```

---

## ⚠️ Important Rules for Future Agent Iterations

- **Accessibility Standards**: Any new SVG markup must include accessible definitions: `role="img"`, a detailed `aria-label`, and a `<title>` tag to comply with modern lint engines.
- **Hook Closure Arrays**: Always wrap custom actions inside `useCallback` when referencing them in `useEffect` arrays to prevent unnecessary rendering or infinite loops.
- **Type Compatibility**: Keep database updates safe by strictly validating fields (`notes`, `exercise`, etc.) against `PROGRESS_STATES` and `STATUS_STATES` type enums before executing update transactions in SQLite.
- **Server Function Validation**: Always implement explicit, safe parameter validation inside the `.inputValidator` definition of `createServerFn` to sanitize all client RPC payloads before processing.
- **Environment Variable Isolation**: Keep confidential credentials secure by keeping them prefix-less (`process.env.SECRET`) and accessing them exclusively on the server. Never prefix sensitive database configs with `VITE_`.
- **Hydration Boundary Safety**: Guard against browser-only APIs (like `window` or `localStorage`) during initial render. Restrict dynamic dates or random utilities to `useEffect` or static formats to prevent hydration mismatches.
- **Automated Codebase Auditing**: When a codebase review or audit is requested, strictly execute the four-phase standard defined in [docs/review-standards.md](file:///Users/arjun/Documents/Code/sakthi-lms/docs/review-standards.md), combining TanStack Start logic/security, Vercel React Best Practices, high-density caveman-review feedback, and immediate refactoring remediation.
