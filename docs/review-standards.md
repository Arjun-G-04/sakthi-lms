# Codebase Review & Refactoring Standards

This document establishes the official review and automated refactoring workflow for agents working on this codebase.

When the **Review & Audit Section** of `AGENTS.md` is invoked or this file is referenced as an instruction target in developer requests, the following comprehensive four-phase review process must be executed:

---

## Phase 1: Architectural & Security Audit (`docs/tanstack-start.md`)
Audit all routing, API endpoints, server-side modules, and database structures against the principles in **[TanStack Start Architecture](file:///Users/arjun/Documents/Code/sakthi-lms/docs/tanstack-start.md)**:
- **Server Boundaries**: Verify that native Node/sqlite modules are restricted to `.server.ts` or enclosed strictly within `createServerFn` to prevent client compilation leakage.
- **Input Security**: Verify that every `createServerFn` enforces explicit `.inputValidator` checks and rejects type or structure anomalies.
- **Credential Isolation**: Confirm no sensitive environment variables (e.g. `DATABASE_URL`) have a `VITE_` prefix, preventing browser visibility.
- **SSR & Hydration Integrity**: Audit components for dangerous browser API uses (like raw `window` or local storage access during initial render) that could trigger hydration mismatches.
- **File Length Modularity**: Verify that no source file exceeds 500 lines. Flag any files exceeding this limit for immediate refactoring into smaller, modular sub-files.


---

## Phase 2: React Performance Audit (`vercel-react-best-practices`)
Audit all frontend and component code against the performance rules in the **[Vercel React Best Practices](file:///Users/arjun/Documents/Code/sakthi-lms/.agents/skills/vercel-react-best-practices/SKILL.md)** catalog:
- **Critical Waterfalls**: Ensure loaders do not block needlessly, and dynamic components are rendered asynchronously using streaming `<Suspense>` and `<Await>` blocks if appropriate.
- **Re-render Bloat**: Identify state subscriptions inside callbacks that can be deferred or converted to refs, check that non-primitive default props are hoisted, and ensure callbacks are wrapped in `useCallback` or `useMemo` where appropriate to maintain reference equality.
- **JS & DOM Efficiency**: Verify that O(1) lookups are used for intensive iteration loops, and that RegExp or mapping setups are hoisted outside execution cycles.

---

## Phase 3: High-Density Feedback Generation (`caveman-review`)
Synthesize findings into high-density code review comments following the **[Caveman Review Style Guide](file:///Users/arjun/Documents/Code/sakthi-lms/.agents/skills/caveman-review/SKILL.md)**:
- Terse and actionable format: `<file>:L<line>: <severity>: <problem>. <fix>.`
- Severity prefixes must be applied:
  - `🔴 bug:` — broken logic or security flaw (e.g., missing parameter validation).
  - `🟡 risk:` — fragile state, potential race condition, or hydration mismatch hazard.
  - `🔵 nit:` — code formatting, unused import, or micro-optimization.
- No general commentary or conversational fluff. Every comment must pinpoint a single actionable change.

---

## Phase 4: Automated Refactoring & Sanity Verification
After generating the review comments, execute the following remediation cycle:
1. **Refactor & Apply**: Systematically rewrite the codebase to repair all identified `🔴 bug` and `🟡 risk` issues, and as many `🔵 nit` issues as possible.
2. **TypeScript Validation**: Execute `npx tsc --noEmit` to verify 100% compilation correctness.
3. **Lint & Style Alignment**: Run `npx biome check --write` to enforce uniform formatting.
4. **Production Build**: Execute `pnpm build` to compile client, server, and Nitro targets.

---

## Phase 5: Developer Notification Report
Once complete, notify the user in smart caveman format with:
- **Review Summary**: Which components and rules were reviewed.
- **Audit Findings**: The high-density caveman-review feedback log.
- **Remediation Report**: What specific files were refactored and how they were fixed.
- **Sanity Verification Status**: The outcome of compilation, linting, and build commands.
