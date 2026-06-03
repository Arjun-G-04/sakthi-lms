import {
	type ChapterField,
	cycleValue,
	PROGRESS_STATES,
	type ProgressState,
	STATUS_STATES,
	type StatusState,
} from "#/lib/chapter-catalog";
import type { ChapterBoardSection } from "#/lib/chapter-progress.functions";

// Light school-themed field styles
const FIELD_STYLES: Record<ProgressState | StatusState, string> = {
	"Yet to begin":
		"border-[#1a2840]/14 bg-[#f5eedc]/70 text-[#1a2840]/65 hover:border-[#1a2840]/22 hover:bg-[#f0e9d8]/80",
	"In Progress": "border-amber-600/35 bg-amber-50 text-amber-900",
	Done: "border-emerald-600/35 bg-emerald-50 text-emerald-900",
	Weak: "border-rose-500/35 bg-rose-50 text-rose-900",
	Medium: "border-amber-600/35 bg-amber-50 text-amber-900",
	Strong: "border-emerald-600/35 bg-emerald-50 text-emerald-900",
};

const FIELD_BADGES: Record<ProgressState | StatusState, string> = {
	"Yet to begin": "bg-[#1a2840]/15",
	"In Progress": "bg-amber-500",
	Done: "bg-emerald-500",
	Weak: "bg-rose-500",
	Medium: "bg-amber-500",
	Strong: "bg-emerald-500",
};

type ChapterRowProps = {
	chapter: ChapterBoardSection["chapters"][number];
	accent: string;
	saving: string | null;
	onChange: (
		chapterKey: string,
		field: ChapterField,
		value: ProgressState | StatusState,
	) => Promise<void>;
};

export function ChapterRow({
	chapter,
	accent,
	saving,
	onChange,
}: ChapterRowProps) {
	const nextNotes = cycleValue(chapter.notes, PROGRESS_STATES);
	const nextExercise = cycleValue(chapter.exercise, PROGRESS_STATES);
	const nextLevel1 = cycleValue(chapter.level1, PROGRESS_STATES);
	const nextLevel2 = cycleValue(chapter.level2, PROGRESS_STATES);
	const nextMb = cycleValue(chapter.mb, PROGRESS_STATES);
	const nextStatus = cycleValue(chapter.status, STATUS_STATES);

	return (
		<div className="grid grid-cols-[minmax(220px,1.35fr)_repeat(6,minmax(88px,0.78fr))] gap-1.5 rounded-[16px] border border-[#1a2840]/10 bg-[#faf6ee]/70 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1a2840]/16 hover:bg-[#fdfaf4]/80 hover:shadow-[0_4px_12px_rgba(26,40,64,0.06)]">
			<div className="flex min-w-0 items-center rounded-[14px] border border-[#1a2840]/8 bg-[#fdfaf4] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
				<div className="flex w-full items-center justify-between gap-2">
					<div className="min-w-0">
						<p className="break-words text-sm leading-5 font-semibold text-[#1a2840]">
							{chapter.chapterTitle}
						</p>
					</div>
				</div>
			</div>

			<ToggleCell
				value={chapter.notes}
				nextValue={nextNotes}
				accent={accent}
				loading={saving === `${chapter.chapterKey}:notes`}
				onClick={() => onChange(chapter.chapterKey, "notes", nextNotes)}
			/>
			<ToggleCell
				value={chapter.exercise}
				nextValue={nextExercise}
				accent={accent}
				loading={saving === `${chapter.chapterKey}:exercise`}
				onClick={() => onChange(chapter.chapterKey, "exercise", nextExercise)}
			/>
			<ToggleCell
				value={chapter.level1}
				nextValue={nextLevel1}
				accent={accent}
				loading={saving === `${chapter.chapterKey}:level1`}
				onClick={() => onChange(chapter.chapterKey, "level1", nextLevel1)}
			/>
			<ToggleCell
				value={chapter.level2}
				nextValue={nextLevel2}
				accent={accent}
				loading={saving === `${chapter.chapterKey}:level2`}
				onClick={() => onChange(chapter.chapterKey, "level2", nextLevel2)}
			/>
			<ToggleCell
				value={chapter.mb}
				nextValue={nextMb}
				accent={accent}
				loading={saving === `${chapter.chapterKey}:mb`}
				onClick={() => onChange(chapter.chapterKey, "mb", nextMb)}
			/>
			<ToggleCell
				value={chapter.status}
				nextValue={nextStatus}
				accent={accent}
				loading={saving === `${chapter.chapterKey}:status`}
				onClick={() => onChange(chapter.chapterKey, "status", nextStatus)}
			/>
		</div>
	);
}

type ToggleCellProps = {
	value: ProgressState | StatusState;
	nextValue: ProgressState | StatusState;
	accent: string;
	loading: boolean;
	onClick: () => void;
};

function ToggleCell({
	value,
	nextValue,
	accent,
	loading,
	onClick,
}: ToggleCellProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={loading}
			className={`flex min-h-[62px] items-center justify-between rounded-[14px] border px-2.5 py-2 text-left transition duration-200 ${FIELD_STYLES[value]} ${loading ? "cursor-wait opacity-60" : "hover:-translate-y-0.5"}`}
			style={{ boxShadow: `0 0 0 1px ${accent}12 inset` }}
			aria-label={`${value}. Click to cycle to ${nextValue}.`}
		>
			<span className="text-xs font-semibold">{value}</span>
			<span className={`h-2 w-2 rounded-full ${FIELD_BADGES[value]}`} />
		</button>
	);
}
