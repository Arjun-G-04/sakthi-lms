# Sakthi LMS — NEET 2027 Tracking App

Welcome to **Sakthi LMS**, a high-density, custom-built learning tracker designed specifically for tracking study milestones and chapter strengths for the **NEET 2027** exam. 

This application features an OLED-optimized dark aesthetic tailored for intense focus sessions, interactive progress boards, and live widgets.

---

## Features & Architecture

### 1. Segmented Progress Ring (`RingMeter`)
- **Precise Math**: Renders an Apple Watch-style continuous segmented circular ring in an SVG viewBox (`0 0 100 100`, radius `38`, stroke-width `9`).
- **Dynamic Angles**: Offsets each category (`Weak`, `Medium`, `Strong`) chronologically using sequential negative `strokeDashoffset` shifts starting from 12 o'clock, with smooth ambient drop shadows.
- **Real-Time Distribution**: Visually isolates outstanding chapters (grey/empty) from in-progress/completed segments.

### 2. NEET 2027 Countdown Widget (`NeetCountdown`)
- **Live Tracking**: Displays remaining Days, Hours, Minutes, and Seconds until **May 2, 2027, at 2:00 PM IST** (the traditional NEET exam slot).
- **Premium Design**: Styled with a glowing top-border linear gradient transitioning from warm coral-red through sunset amber to icy blue, featuring a pulsating colon separator (`animate-pulse`).

### 3. Dynamic Quote Widget (`HeroQuote`)
- **Dual Retrieval**: Fetches inspiring quotes on-demand from a public CORS-enabled API (`https://dummyjson.com/quotes/random`).
- **Offline Resiliency**: Seamlessly falls back to a curated local array of premium NEET/student motivation quotes if offline or rate-limited.
- **Micro-Interactions**: Features shimmering skeleton loaders (`animate-pulse`) and custom spin animations (`animate-spin`) during active retrieval.

### 4. High-Density Milestone Grid
- **Interactive State Cycling**: Cell clicks seamlessly cycle status types with responsive local state updates.
  - **Progress Categories (`notes`, `exercise`, `level1`, `level2`, `mb`)**: `Yet to begin` ➔ `In Progress` ➔ `Done` ➔ `Yet to begin`
  - **Subject Strength (`status`)**: `Weak` ➔ `Medium` ➔ `Strong` ➔ `Weak`
- **Symmetrical Design**: Organized in a robust, multi-lane grid with vertical alignment balancing and text-overflow protection.

---

## Technical Stack

- **Framework**: [TanStack Start](https://tanstack.com/router/latest/docs/start/overview) (Server-side rendering, routing, and isomorphic data boundaries).
- **Core Library**: [React 19](https://react.dev/) (Modern hook utilities and state management).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom vanilla CSS utilities.
- **Database**: [SQLite](https://sqlite.org/) (WAL mode enabled local file-based database).
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) (Type-safe SQL queries and schema modelling).
- **Development Tooling**: [Biome](https://biomejs.dev/) (Sub-millisecond formatting, linting, and import organization).
- **Git Hooks**: [Husky](https://typicode.github.io/husky/) (Pre-commit hook enforcement).

---

## Project Structure

```bash
sakthi-lms/
├── .agents/             # Agent tools and skill configurations
├── .husky/              # Git hooks (pre-commit quality controls)
├── docs/                # Comprehensive architecture and standards docs
│   ├── architecture.md       # High-level architecture and data flow
│   ├── chapter-tracking.md   # Schema modeling and state transitions
│   ├── ui-components.md      # SVG math, styling, and widgets
│   ├── tanstack-start.md     # SSR, env safety, and Server Functions
│   └── review-standards.md   # Standard audit procedures and guidelines
├── src/
│   ├── db/
│   │   └── schema.ts         # SQLite/Drizzle schema models
│   ├── lib/
│   │   ├── chapter-catalog.ts# Static subject catalog and state maps
│   │   ├── chapter-progress.ts# DB operations and Server Functions
│   │   └── db.ts             # SQLite connection instance (better-sqlite3)
│   ├── routes/
│   │   ├── __root.tsx        # HTML wrapper layout and providers
│   │   └── index.tsx         # Dashboard landing page & main UI grid
│   ├── entry-client.tsx      # Hydration entry
│   ├── entry-server.tsx      # SSR entry
│   ├── routeTree.gen.ts      # Auto-generated route tree
│   └── styles.css            # Root stylesheet & design system tokens
├── biome.json           # Biome linter/formatter config
├── drizzle.config.ts    # Drizzle migrations configuration
├── package.json         # Project scripts and dependencies
└── tsconfig.json        # TypeScript configuration
```

---

## Commands & Development Scripts

Ensure you run these inside the root directory using `pnpm` (which maps to the existing `pnpm-lock.yaml` file):

```bash
# 1. Start local development server (port 3000)
pnpm dev

# 2. Verify full production build compilation
pnpm build

# 3. Preview production build locally
pnpm preview

# 4. Lint and check formatting with Biome
pnpm check

# 5. Fix Biome linting and formatting violations automatically
npx biome check --write

# 6. Check TypeScript type-safety
npx tsc --noEmit

# 7. Database Migrations
pnpm db:generate   # Generate schema migration files
pnpm db:push       # Push schema changes to SQLite dev database
pnpm db:studio     # Launch Drizzle Studio DB explorer
```

---

## Pre-Commit Safeguards

A **Husky** pre-commit hook is active. It runs before every git commit to ensure that only fully functional, clean, and building code enters the repository:

```bash
pnpm check && pnpm build
```

- **Step 1 (Linting/Formatting)**: Performs a non-interactive `biome check` to guarantee standard styling, import ordering, and lack of code smells.
- **Step 2 (Compilation/SSR safety)**: Compiles the full application using `vite build` (client-side, server-side, and Nitro server compilation stages). If there are any hydration mismatches, TS errors, or broken imports, the commit will abort.

---

## Learn More

To expand or build on this LMS, review the developer documentation files in `/docs`.
