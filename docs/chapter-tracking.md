# Chapter Tracking & State Model

Tracks 80+ chapters across Physics, Chemistry, Biology (Class 11 & 12).

## Database Schema (src/db/schema.ts)
Table `chapter_progress`:
```typescript
export const chapterProgress = sqliteTable('chapter_progress', {
  chapterKey: text('chapter_key').primaryKey(),
  subject: text('subject').notNull(),
  classLevel: text('class_level').notNull(),
  chapterTitle: text('chapter_title').notNull(),
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
Defined in src/lib/chapter-catalog.ts.

### Progress States (notes, exercise, level1, level2, mb)
- `Yet to begin` (Grey badge)
- `In Progress` (Amber badge)
- `Done` (Green badge)

### Subject Status (status)
- `Weak` (Red badge)
- `Medium` (Amber badge)
- `Strong` (Green badge)

---

## State Cycling Logic
Clicks cycle cell value in index order, wrapping at boundary:
```typescript
export function cycleValue<T extends string>(current: T, states: readonly T[]) {
  const index = states.indexOf(current)
  return states[(index + 1) % states.length]
}
```
- Progress: `Yet to begin` -> `In Progress` -> `Done` -> `Yet to begin`
- Status: `Weak` -> `Medium` -> `Strong` -> `Weak`
