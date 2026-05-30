# Chapter Tracking & State Model

The core value proposition of this LMS is tracking study stages for all 80+ chapters across Physics, Chemistry, and Biology (Class 11 & Class 12).

## Database Schema (`src/db/schema.ts`)

Data is stored in the `chapter_progress` table:

```typescript
export const chapterProgress = sqliteTable('chapter_progress', {
  chapterKey: text('chapter_key').primaryKey(), // Structured unique key
  subject: text('subject').notNull(),           // Physics, Chemistry, Biology
  classLevel: text('class_level').notNull(),    // Class 11, Class 12
  chapterTitle: text('chapter_title').notNull(),// Nominal title
  notes: text('notes').notNull().default('Yet to begin'),
  exercise: text('exercise').notNull().default('Yet to begin'),
  level1: text('level1').notNull().default('Yet to begin'),
  level2: text('level2').notNull().default('Yet to begin'),
  mb: text('mb').notNull().default('Yet to begin'),
  status: text('status').notNull().default('Weak'),
  updatedAt: integer('updated_at').notNull().default(sql`(unixepoch())`),
})
```

---

## State Transitions & Values

All progress categories use strict state sets defined in `src/lib/chapter-catalog.ts`.

### Progress States (`notes`, `exercise`, `level1`, `level2`, `mb`)
Used to track specific milestones (reading notes, solving standard exercises, completing level 1/2 MCQs, etc.):
- `Yet to begin` (Default - Grey status badge)
- `In Progress` (Amber status badge)
- `Done` (Green status badge)

### Subject Status State (`status`)
Used to track how strong the student feels in that specific chapter:
- `Weak` (Red status badge)
- `Medium` (Amber status badge)
- `Strong` (Green status badge)

---

## State Cycling Logic
When a user clicks on any cell, the value cycles to the next state inside the array. This cycling wraps around when reaching the end:

```typescript
export function cycleValue<T extends string>(current: T, states: readonly T[]) {
  const index = states.indexOf(current)
  return states[(index + 1) % states.length]
}
```
- Progress States cycle: `Yet to begin` ➔ `In Progress` ➔ `Done` ➔ `Yet to begin`
- Status States cycle: `Weak` ➔ `Medium` ➔ `Strong` ➔ `Weak`
