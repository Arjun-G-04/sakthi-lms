# Codebase Review & Refactoring Standards

Official review and automated refactoring workflow.

## Review Policies
- **Code Reviews**: Always use `.agents/skills/thermo-nuclear-code-quality-review` skill (relative path only) when performing or asking for code reviews.
- **Frontend Code Reviews**: Always use `.agents/skills/vercel-react-best-practices` skill (relative path only) for frontend code reviews.
- **Accessibility**: SVGs must have role="img", aria-label, and <title> tag.
- **React Hooks**: Wrap custom actions in useCallback when referenced in useEffect dependency arrays.
- **DB Type Safety**: Validate fields (notes, exercise) against PROGRESS_STATES and STATUS_STATES before SQLite updates.
- **Server Functions**: Implement explicit parameter validation using .inputValidator in createServerFn.
- **Environment Sec**: Keep secrets prefix-less (process.env.SECRET) and server-only. Never prefix DB configs with VITE_.
- **Hydration Boundary**: Guard browser-only APIs (window, localStorage) in initial render. No dynamic dates during hydration.

When code review is requested, execute this six-phase process:

---

## Phase 1: Architectural & Security Audit (docs/tanstack-start.md)
Audit code against docs/tanstack-start.md:
- **Server Boundaries**: Native Node/sqlite modules must reside in `.server.ts` or inside `createServerFn`.
- **Input Security**: Verify every `createServerFn` enforces `.inputValidator`.
- **Credential Isolation**: DB secrets must not have a `VITE_` prefix.
- **SSR Safety**: No raw browser API (window, localStorage) during initial render.
- **File Length**: Max 500 lines per file. Split if exceeded.

---

## Phase 2: React Performance Audit (vercel-react-best-practices)
Audit frontend against `.agents/skills/vercel-react-best-practices/SKILL.md`:
- **Waterfalls**: Avoid blocking loaders; stream via Suspense/Await.
- **Re-render Bloat**: Defer state reads in callbacks, hoist non-primitive default props, wrap stable callbacks in `useCallback`.
- **DOM Efficiency**: Ensure O(1) lookups in loops, hoist RegExp/maps.

---

## Phase 3: Code Quality & Maintainability Audit (thermo-nuclear-code-quality-review)
Audit codebase with and proceed with `.agents/skills/thermo-nuclear-code-quality-review/SKILL.md`:

---

## Phase 4: High-Density Feedback Generation (caveman)
Synthesize findings into high-density comments using `.agents/skills/caveman/SKILL.md`:
- Format: `<file>:L<line>: <severity>: <problem>. <fix>.`
- Severities:
  - `bug:` broken logic / security flaw.
  - `risk:` fragile state / hydration mismatch / maintainability smell.
  - `nit:` formatting / micro-optimization.
- No conversational fluff. Actionable points only.

---

## Phase 5: Refactoring & Verification
1. **Apply Fixes**: Rewrite code to resolve bugs, risks, and nits.
2. **Type Check**: Run `npx tsc --noEmit`.
3. **Lint**: Run `pnpm biome lint src/`.
4. **Format**: Run `pnpm biome format src/`.
5. **Build**: Run `pnpm build`.

---

## Phase 6: Audit Report
Notify user in caveman format:
- **Summary**: Components and rules reviewed.
- **Findings**: The high-density review log.
- **Remediation**: Actions taken.
- **Status**: Results of typecheck, linting, formatting, and build.
