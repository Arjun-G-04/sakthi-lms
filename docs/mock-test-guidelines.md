# Mock Test & CBT Simulator Development Guide

This document defines the architecture, standard patterns, and implementation checklist for creating new Computer-Based Test (CBT) mock simulators in the Sakthi LMS. Any subsequent agent session tasked with building a new mock test (e.g. "Waves" under `/rt-waves-1`) must consult and follow this guide.

---

## 📐 1. Architecture & File Splitting (500-Line Limit)
To strictly adhere to the codebase rule that **no source file exceeds 500 lines**, all mock tests with exactly 60 questions must split their data and layout components. 

For a new test (e.g., "Waves"), create a dedicated folder under `src/components/` (e.g., `src/components/WavesSimulator/`):

```
src/components/WavesSimulator/
├── MathText.tsx          # Copy from TcsIonSimulator (KaTeX text parser)
├── Simulator.tsx         # Active exam dashboard layout (< 500 lines)
├── Scorecard.tsx         # NEET score calculator & reviews (< 500 lines)
└── questions/            # Split question bank
    ├── part1.ts          # Questions 1–30 (exports wavesQuestionsPart1)
    ├── part2.ts          # Questions 31–60 (exports wavesQuestionsPart2)
    └── index.ts          # Exports consolidated wavesQuestions array
```

### Data Interface for Questions:
```typescript
export interface Question {
	id: number;
	text: string;
	options: string[]; // Exactly 4 options
	correctOption: number; // 0-indexed: 0=A, 1=B, 2=C, 3=D
	explanation: string;
	svgDiagram?: string; // Optional raw SVG string for inline drawings
}
```

---

## 🧮 2. LaTeX Math Rendering
* **Parser Component**: Always use the `<MathText text={...} />` component. It parses inline `$ ... $` and display `$$ ... $$` math blocks and renders them using `katex.renderToString`. This avoids hydration drift and ensures fast client-side rendering.
* **Biome Suppression**: Inside `MathText.tsx`, suppress biome lint rules for `dangerouslySetInnerHTML` and `noArrayIndexKey` using a single space-separated comment line preceding the element:
  ```tsx
  // biome-ignore lint/suspicious/noArrayIndexKey lint/security/noDangerouslySetInnerHtml: KaTeX static rendering is safe
  <span dangerouslySetInnerHTML={{ __html: html }} />
  ```
* **KaTeX Stylesheet**: In the page route definition file (e.g., `src/routes/rt-waves-1.tsx`), inject the official KaTeX CDN stylesheet in the head block to load symbol styling:
  ```typescript
  head: () => ({
      links: [
          {
              rel: "stylesheet",
              href: "https://cdn.jsdelivr.net/npm/katex@0.17.0/dist/katex.min.css",
          },
      ],
  }),
  ```

---

## 🔒 3. Session Locking & Timer Rules
Mock tests must run as isolated **Sessions**:
1. **Start Screen**: If `isStarted` state is false, render an initialization page displaying instructions, parameters, and a "Start Test Session" button. The timer does not tick here.
2. **Countdown Timer**: The countdown timer (60 minutes for 60 questions) ticks in seconds and only runs when `isStarted === true` and `isSubmitted === false`.
3. **Auto-Submit**: When the timer reaches 0, the simulator must automatically submit the test, logging the outcomes and rendering the scorecard.
4. **Tab Closure Protection**: Warn users against accidental tab closure/reload by attaching a `beforeunload` listener while a test session is active:
  ```typescript
  useEffect(() => {
      if (!isStarted || isSubmitted) return;
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
          e.preventDefault();
          e.returnValue = "You have an active test session. Closing the tab will end your session.";
          return e.returnValue;
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isStarted, isSubmitted]);
  ```
5. **Navigation Restrictions**: Do not provide "Leave Simulator" links or back buttons once the active testing console renders. The user must either submit the test or close the window.
6. **No Keyboard Mode**: Restrict interaction strictly to the mouse. Remove keyboard shortcut bindings/shortcuts to emulate the real TCS iON exam environment.

---

## 📝 4. Database Logging & Scoring
* **Scoring Rules**: Compute scores using the NEET marking scheme: `+4` for correct choice, `-1` for incorrect choice, and `0` for unattempted questions.
* **Database Clamping**: SQLite schemas require score fields to be non-negative. Clamp scores to `0` using `Math.max(0, scoredMarks)` when submitting to prevent SQLite schema errors.
* **Duration Logging**: Always log the **maximum allowed duration** (60 minutes) in `durationMinutes`, rather than the utilized/elapsed time.
* **Save Payload**: Wrap the server function invocation payload in `{ data: { ... } }`:
  ```typescript
  await addTestPerformance({
      data: {
          testDate: today,
          testName: "Waves", // Assessment Title
          chaptersCovered: ["Waves"],
          durationMinutes: 60, // Hardcoded maximum time limit
          totalMarks: 240,
          scoredMarks: Math.max(0, scoredMarks), // NEET score clamped to >= 0
          testType: "Subject Test",
      },
  });
  ```

---

## 🎨 5. UI & Styling Best Practices
* **Focus Ring Clipping**: To prevent focus rings (`ring-2 ring-offset-2`) on boundary items from clipping inside scrollable grids, always add at least `p-1.5` padding to the `overflow-y-auto` container:
  ```tsx
  <div className="grid grid-cols-5 gap-2 max-h-[300px] overflow-y-auto p-1.5">
  ```
* **Status Legend Colors**: Maintain the exact color mapping (Answered = Emerald, Not Answered = Rose, Marked = Indigo, Not Visited = White/Grey).
* **Vertical Centering**: Align chapter details in rows using flexboxes (`flex items-center`) to stay symmetrical.

---

## 🚀 6. Page Route & Mount Guard (Hydration Boundary Safety)
To prevent hydration mismatches from browser-only timers and API hooks, route components (e.g., `src/routes/rt-waves-1.tsx`) must wrap the simulator inside a client-side mount check:

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Simulator } from "#/components/WavesSimulator/Simulator";

export const Route = createFileRoute("/rt-waves-1")({
	head: () => ({
		links: [
			{
				rel: "stylesheet",
				href: "https://cdn.jsdelivr.net/npm/katex@0.17.0/dist/katex.min.css",
			},
		],
	}),
	component: TestPage,
});

function TestPage() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<main className="relative min-h-screen text-[#1a2840] py-6 px-4">
			<div className="mx-auto max-w-[1440px] space-y-4 relative z-10">
				{isMounted ? (
					<Simulator />
				) : (
					<div className="min-h-[400px] flex flex-col items-center justify-center rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-8 text-center">
						<div className="h-8 w-8 animate-spin rounded-full border-4 border-[#b8872a] border-t-transparent" />
						<p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#1a2840]/60">
							Initialising CBT Exam Terminal...
						</p>
					</div>
				)}
			</div>
		</main>
	);
}
```

---

## 🛠️ 7. Verification Checklist
Before submitting the task, run these validation checks inside the root workspace folder:
```bash
# Check TypeScript compilation and type safety
npx tsc --noEmit

# Format & Lint checking
npx biome check src/

# Verify full production build packaging
pnpm build
```
