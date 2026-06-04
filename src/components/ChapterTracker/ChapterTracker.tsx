import { Atom, Calculator, FlaskConical, Leaf } from "lucide-react";
import { ChapterRow } from "#/components/ChapterTracker/ChapterRow";
import { SectionBadge } from "#/components/MetricCard";
import type {
	ChapterField,
	ProgressState,
	StatusState,
} from "#/lib/chapter-catalog";
import type { ChapterBoardSection } from "#/lib/chapter-progress.functions";

type ToggleField = Exclude<ChapterField, "status">;
type ToggleMeta = { key: ToggleField; label: string };

export const TRACKED_FIELDS: readonly ToggleMeta[] = [
	{ key: "notes", label: "Notes" },
	{ key: "exercise", label: "Exercise" },
	{ key: "level1", label: "Level 1" },
	{ key: "level2", label: "Level 2" },
	{ key: "mb", label: "MB" },
] as const;

export const SUBJECT_ICON = {
	Physics: Atom,
	Chemistry: FlaskConical,
	Biology: Leaf,
	Maths: Calculator,
} as const;

export function sectionKey(section: ChapterBoardSection | undefined) {
	return section ? `${section.subject}-${section.classLevel}` : "";
}

export function sectionIcon(
	subject: ChapterBoardSection["subject"],
	accent: string,
) {
	const Icon = SUBJECT_ICON[subject];
	return <Icon className="h-6 w-6" style={{ color: accent }} />;
}

export function countStatus(section: ChapterBoardSection, status: StatusState) {
	return section.chapters.filter((chapter) => chapter.status === status).length;
}

export function sectionDoneCount(section: ChapterBoardSection) {
	return section.chapters.reduce(
		(count, chapter) =>
			count +
			TRACKED_FIELDS.reduce(
				(done, field) => done + Number(chapter[field.key] === "Done"),
				0,
			),
		0,
	);
}

type ChapterTrackerProps = {
	board: ChapterBoardSection[];
	selectedSectionKey: string;
	setSelectedSectionKey: (key: string) => void;
	savingKey: string | null;
	onChange: (
		chapterKey: string,
		field: ChapterField,
		value: ProgressState | StatusState,
	) => Promise<void>;
};

export function ChapterTracker({
	board,
	selectedSectionKey,
	setSelectedSectionKey,
	savingKey,
	onChange,
}: ChapterTrackerProps) {
	const selectedSection =
		board.find((section) => sectionKey(section) === selectedSectionKey) ??
		board[0];

	return (
		<section className="space-y-4">
			{/* Section label */}
			<div className="flex items-center gap-3">
				<div className="h-px flex-1 bg-[#1a2840]/10" />
				<p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#b8872a]">
					Chapter Atlas
				</p>
				<div className="h-px flex-1 bg-[#1a2840]/10" />
			</div>

			{/* Section pill buttons */}
			<div className="flex flex-wrap gap-2">
				{board.map((section) => {
					const key = sectionKey(section);
					const active = key === selectedSectionKey;
					const Icon = SUBJECT_ICON[section.subject];

					return (
						<button
							key={key}
							type="button"
							onClick={() => setSelectedSectionKey(key)}
							className={`flex min-w-[180px] items-center gap-3 rounded-[18px] border px-4 py-3 text-left transition-all duration-200 ${
								active
									? "border-[#1a2840]/25 bg-[#1a2840] text-[#fdfaf4] shadow-[0_4px_12px_rgba(26,40,64,0.2)]"
									: "border-[#1a2840]/12 bg-[#fdfaf4]/80 text-[#1a2840]/80 hover:border-[#1a2840]/20 hover:bg-[#fdfaf4] hover:text-[#1a2840]"
							}`}
						>
							<Icon
								className="h-4 w-4 shrink-0"
								style={{
									color: active ? section.accent : `${section.accent}aa`,
								}}
							/>
							<div className="min-w-0">
								<p
									className={`text-sm font-semibold leading-5 ${active ? "text-[#fdfaf4]" : "text-[#1a2840]"}`}
								>
									{section.subject}
								</p>
								<span
									className={`mt-0.5 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] ${
										active
											? "border-white/20 bg-white/15 text-white/85"
											: "border-[#1a2840]/12 bg-[#1a2840]/7 text-[#1a2840]/60"
									}`}
								>
									Class {section.grade}
								</span>
							</div>
						</button>
					);
				})}
			</div>

			{selectedSection ? (
				<article className="overflow-hidden rounded-[28px] border-2 border-[#1a2840]/10 bg-[#fdfaf4]/90 shadow-[0_4px_6px_rgba(26,40,64,0.05),0_12px_32px_rgba(26,40,64,0.08),inset_0_1px_0_rgba(255,255,255,0.95)]">
					{/* Subject accent top bar */}
					<div
						className="h-1 w-full"
						style={{
							background: `linear-gradient(90deg, ${selectedSection.accent}cc, ${selectedSection.accent}40, transparent)`,
						}}
					/>

					<header className="flex flex-wrap items-start justify-between gap-4 px-5 py-5 sm:px-6">
						<div className="flex items-start gap-4">
							<div
								className="grid h-14 w-14 shrink-0 place-items-center rounded-[18px] border-2 border-[#1a2840]/10 bg-[#fdfaf4] shadow-[0_2px_8px_rgba(26,40,64,0.08)]"
								style={{
									boxShadow: `0 0 0 1px ${selectedSection.accent}22, 0 6px 18px ${selectedSection.accent}18`,
								}}
							>
								{sectionIcon(selectedSection.subject, selectedSection.accent)}
							</div>
							<div>
								<div className="flex flex-wrap items-center gap-2">
									<h3 className="display-title text-2xl font-semibold text-[#1a2840]">
										{selectedSection.subject}
									</h3>
									<span className="rounded-full border border-[#1a2840]/12 bg-[#1a2840]/6 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[#1a2840]/55">
										{selectedSection.classLevel}
									</span>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-3 gap-2 sm:min-w-[320px]">
							<SectionBadge
								label="Chapters"
								value={selectedSection.chapters.length.toString()}
							/>
							<SectionBadge
								label="Done"
								value={sectionDoneCount(selectedSection).toString()}
							/>
							<SectionBadge
								label="Strong"
								value={countStatus(selectedSection, "Strong").toString()}
							/>
						</div>
					</header>

					{/* Table */}
					<div className="border-t-2 border-[#1a2840]/8 bg-[#f0e9d8]/40 px-3 pb-4 pt-3 sm:px-4">
						<div className="overflow-x-auto pb-2 [scrollbar-color:rgba(26,40,64,0.2)_transparent]">
							<div className="min-w-[1140px]">
								{/* Table header */}
								<div className="grid grid-cols-[minmax(280px,1.55fr)_repeat(6,minmax(116px,0.98fr))] gap-2 px-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#1a2840]/55">
									<div className="pl-2">Chapter</div>
									{TRACKED_FIELDS.map((field) => (
										<div key={field.key} className="text-center">
											{field.label}
										</div>
									))}
									<div className="text-center">Status</div>
								</div>

								<div className="mt-2 space-y-2">
									{selectedSection.chapters.map((chapter) => (
										<ChapterRow
											key={chapter.chapterKey}
											chapter={chapter}
											accent={selectedSection.accent}
											saving={savingKey}
											onChange={onChange}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</article>
			) : null}
		</section>
	);
}
