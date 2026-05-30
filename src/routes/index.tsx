import { createFileRoute } from "@tanstack/react-router";
import { Atom, Clock, FlaskConical, Leaf, Quote, RotateCw } from "lucide-react";
import {
	type ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";

import {
	type ChapterField,
	cycleValue,
	PROGRESS_STATES,
	type ProgressState,
	STATUS_STATES,
	type StatusState,
} from "#/lib/chapter-catalog";
import {
	type ChapterBoardSection,
	loadChapterBoard,
	updateChapterProgress,
} from "#/lib/chapter-progress.functions";

export const Route = createFileRoute("/")({
	loader: async () => loadChapterBoard(),
	component: Home,
});

type ToggleField = Exclude<ChapterField, "status">;
type ToggleMeta = { key: ToggleField; label: string };

const TRACKED_FIELDS: readonly ToggleMeta[] = [
	{ key: "notes", label: "Notes" },
	{ key: "exercise", label: "Exercise" },
	{ key: "level1", label: "Level 1" },
	{ key: "level2", label: "Level 2" },
	{ key: "mb", label: "MB" },
] as const;

const SUBJECT_ICON = {
	Physics: Atom,
	Chemistry: FlaskConical,
	Biology: Leaf,
} as const;

const FIELD_STYLES: Record<ProgressState | StatusState, string> = {
	"Yet to begin":
		"border-white/10 bg-white/6 text-white/70 hover:border-white/20 hover:bg-white/10",
	"In Progress": "border-amber-300/30 bg-amber-300/12 text-amber-50",
	Done: "border-emerald-300/30 bg-emerald-300/14 text-emerald-50",
	Weak: "border-rose-300/30 bg-rose-300/12 text-rose-50",
	Medium: "border-amber-300/30 bg-amber-300/14 text-amber-50",
	Strong: "border-emerald-300/30 bg-emerald-300/16 text-emerald-50",
};

const RING_COLORS: Record<ProgressState | StatusState, string> = {
	"Yet to begin": "#314257",
	"In Progress": "#efb84a",
	Done: "#3fd08d",
	Weak: "#ff6f7d",
	Medium: "#f6c44c",
	Strong: "#40d289",
};

function Home() {
	const initialBoard = Route.useLoaderData();
	const [board, setBoard] = useState<ChapterBoardSection[]>(initialBoard);
	const [savingKey, setSavingKey] = useState<string | null>(null);
	const [selectedSectionKey, setSelectedSectionKey] = useState(
		sectionKey(initialBoard[0]),
	);

	useEffect(() => {
		setBoard(initialBoard);
		if (!selectedSectionKey && initialBoard[0]) {
			setSelectedSectionKey(sectionKey(initialBoard[0]));
		}
	}, [initialBoard, selectedSectionKey]);

	const stats = useMemo(() => getStats(board), [board]);
	const selectedSection =
		board.find((section) => sectionKey(section) === selectedSectionKey) ??
		board[0];

	async function commitChange(
		chapterKey: string,
		field: ChapterField,
		value: ProgressState | StatusState,
	) {
		const saveKey = `${chapterKey}:${field}`;
		setSavingKey(saveKey);

		// Synchronously find the exact previous value for targeted rollback
		let previousValue: ProgressState | StatusState | undefined;
		for (const section of board) {
			const chap = section.chapters.find((c) => c.chapterKey === chapterKey);
			if (chap) {
				previousValue = chap[field];
				break;
			}
		}

		// Optimistic update
		setBoard((current) =>
			current.map((section) => ({
				...section,
				chapters: section.chapters.map((chapter) =>
					chapter.chapterKey === chapterKey
						? { ...chapter, [field]: value }
						: chapter,
				),
			})),
		);

		try {
			await updateChapterProgress({
				data: { chapterKey, field, value },
			});
		} catch (error) {
			console.error("Failed to save chapter progress", error);
			// Targeted rollback only for the failed field of the failed chapter
			if (previousValue !== undefined) {
				setBoard((current) =>
					current.map((section) => ({
						...section,
						chapters: section.chapters.map((chapter) =>
							chapter.chapterKey === chapterKey
								? { ...chapter, [field]: previousValue }
								: chapter,
						),
					})),
				);
			}
		} finally {
			setSavingKey(null);
		}
	}

	return (
		<main className="relative min-h-screen overflow-hidden bg-[#07111d] text-[#f5ede0]">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(98,173,255,0.2),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(255,170,94,0.16),_transparent_28%),radial-gradient(circle_at_50%_120%,_rgba(68,208,176,0.1),_transparent_34%)]" />
			<div className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:32px_32px]" />

			<div className="relative mx-auto flex min-h-screen w-full max-w-[1680px] flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8 xl:px-10">
				<section className="rise-in overflow-hidden rounded-[34px] border border-white/12 bg-white/6 shadow-[0_26px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
					<div className="grid gap-8 px-6 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-8">
						<div className="space-y-6">
							<div className="space-y-4">
								<p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8be3ff]">
									Sakthi&apos;s Base
								</p>
								<h1 className="display-title max-w-3xl text-5xl leading-[0.92] font-semibold text-white sm:text-6xl lg:text-7xl">
									Crack NEET 2027
								</h1>
							</div>

							<HeroQuote />

							<NeetCountdown />

							<div className="grid gap-3 sm:grid-cols-3">
								<MetricCard
									label="Chapters"
									value={stats.totalChapters.toString()}
									note="Across 6 lanes"
									accent="from-[#5ec5ff] to-[#7d8cff]"
								/>
								<MetricCard
									label="Done"
									value={`${stats.doneChecks}/${stats.totalChecks}`}
									note={`${stats.checkPercent}% complete`}
									accent="from-[#44d0b0] to-[#75df9c]"
								/>
								<MetricCard
									label="Weak"
									value={stats.weakChapters.toString()}
									note="Needs push"
									accent="from-[#ffb25c] to-[#ff7b6b]"
								/>
							</div>
						</div>

						<div className="flex flex-col rounded-[28px] border border-white/10 bg-[#0d1828]/70 p-5">
							<div className="flex flex-wrap items-center justify-between gap-4">
								<div>
									<p className="text-lg font-semibold text-white">
										All chapters
									</p>
								</div>
								<RingLegend />
							</div>
							<div className="flex flex-1 items-center justify-center mt-5 min-h-[260px]">
								<RingMeter
									size={240}
									segments={[
										{
											label: "Weak",
											value: stats.weakChapters,
											total: stats.totalChapters,
											color: RING_COLORS.Weak,
										},
										{
											label: "Medium",
											value: stats.mediumChapters,
											total: stats.totalChapters,
											color: RING_COLORS.Medium,
										},
										{
											label: "Strong",
											value: stats.strongChapters,
											total: stats.totalChapters,
											color: RING_COLORS.Strong,
										},
									]}
									center={
										<RingCenter
											label="overall"
											value={`${stats.totalChapters}`}
											sublabel="chapters"
										/>
									}
								/>
							</div>
						</div>
					</div>

					<div className="border-t border-white/10 bg-[#0d1828]/45 px-6 py-6 lg:px-8">
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
							{board.map((section) => (
								<SectionRingButton
									key={sectionKey(section)}
									section={section}
									active={sectionKey(section) === selectedSectionKey}
									onClick={() => setSelectedSectionKey(sectionKey(section))}
								/>
							))}
						</div>
					</div>
				</section>

				<section className="space-y-4">
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.34em] text-white/45">
							Chapter Atlas
						</p>
					</div>

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
									className={`flex min-w-[180px] items-center gap-3 rounded-[20px] border px-4 py-3 text-left transition ${
										active
											? "border-white/22 bg-white/14 text-white"
											: "border-white/10 bg-white/6 text-white/68 hover:border-white/16 hover:bg-white/10"
									}`}
								>
									<Icon
										className="h-4 w-4 shrink-0"
										style={{ color: section.accent }}
									/>
									<div className="min-w-0">
										<p className="text-sm font-semibold leading-5 text-white">
											{section.subject}
										</p>
										<span className="mt-1 inline-flex rounded-full border border-white/10 bg-white/8 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/62">
											Class {section.grade}
										</span>
									</div>
								</button>
							);
						})}
					</div>

					{selectedSection ? (
						<article className="rise-in overflow-hidden rounded-[32px] border border-white/10 bg-white/6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
							<div
								className="h-1.5 w-full"
								style={{
									background: `linear-gradient(90deg, ${selectedSection.accent}, rgba(255,255,255,0.12))`,
								}}
							/>

							<header className="flex flex-wrap items-start justify-between gap-4 px-5 py-5 sm:px-6">
								<div className="flex items-start gap-4">
									<div
										className="grid h-14 w-14 shrink-0 place-items-center rounded-[20px] border border-white/10 bg-white/8 text-white"
										style={{
											boxShadow: `0 0 0 1px ${selectedSection.accent}22 inset, 0 12px 24px ${selectedSection.accent}22`,
										}}
									>
										{sectionIcon(
											selectedSection.subject,
											selectedSection.accent,
										)}
									</div>
									<div>
										<div className="flex flex-wrap items-center gap-2">
											<h3 className="display-title text-2xl font-semibold text-white">
												{selectedSection.subject}
											</h3>
											<span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-white/55">
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

							<div className="border-t border-white/10 px-3 pb-4 pt-3 sm:px-4">
								<div className="overflow-x-auto pb-2 [scrollbar-color:rgba(255,255,255,0.2)_transparent]">
									<div className="min-w-[1140px]">
										<div className="grid grid-cols-[minmax(280px,1.55fr)_repeat(6,minmax(116px,0.98fr))] gap-2 px-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white/40">
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
													onChange={commitChange}
												/>
											))}
										</div>
									</div>
								</div>
							</div>
						</article>
					) : null}
				</section>
			</div>
		</main>
	);
}

function sectionKey(section: ChapterBoardSection | undefined) {
	return section ? `${section.subject}-${section.classLevel}` : "";
}

function sectionIcon(subject: ChapterBoardSection["subject"], accent: string) {
	const Icon = SUBJECT_ICON[subject];
	return <Icon className="h-6 w-6" style={{ color: accent }} />;
}

function countStatus(section: ChapterBoardSection, status: StatusState) {
	return section.chapters.filter((chapter) => chapter.status === status).length;
}

function sectionDoneCount(section: ChapterBoardSection) {
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

function ChapterRow({ chapter, accent, saving, onChange }: ChapterRowProps) {
	const nextNotes = cycleValue(chapter.notes, PROGRESS_STATES);
	const nextExercise = cycleValue(chapter.exercise, PROGRESS_STATES);
	const nextLevel1 = cycleValue(chapter.level1, PROGRESS_STATES);
	const nextLevel2 = cycleValue(chapter.level2, PROGRESS_STATES);
	const nextMb = cycleValue(chapter.mb, PROGRESS_STATES);
	const nextStatus = cycleValue(chapter.status, STATUS_STATES);

	return (
		<div className="grid grid-cols-[minmax(220px,1.35fr)_repeat(6,minmax(88px,0.78fr))] gap-1.5 rounded-[18px] border border-white/10 bg-black/12 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/16 hover:bg-black/16">
			<div className="flex min-w-0 items-center rounded-[16px] border border-white/10 bg-white/6 px-3 py-2.5">
				<div className="flex w-full items-center justify-between gap-2">
					<div className="min-w-0">
						<p className="break-words text-sm leading-5 font-semibold text-white">
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
			className={`flex min-h-[62px] items-center justify-between rounded-[16px] border px-2.5 py-2 text-left transition duration-200 ${FIELD_STYLES[value]} ${loading ? "cursor-wait opacity-60" : "hover:-translate-y-0.5"}`}
			style={{ boxShadow: `0 0 0 1px ${accent}10 inset` }}
			aria-label={`${value}. Click to cycle to ${nextValue}.`}
		>
			<span className="text-sm font-semibold">{value}</span>
			<span className={`h-2.5 w-2.5 rounded-full ${FIELD_BADGES[value]}`} />
		</button>
	);
}

const FIELD_BADGES: Record<ProgressState | StatusState, string> = {
	"Yet to begin": "bg-white/10",
	"In Progress": "bg-amber-300/80",
	Done: "bg-emerald-300/80",
	Weak: "bg-rose-300/80",
	Medium: "bg-amber-300/80",
	Strong: "bg-emerald-300/80",
};

type MetricCardProps = {
	label: string;
	value: string;
	note: string;
	accent: string;
};

function MetricCard({ label, value, note, accent }: MetricCardProps) {
	return (
		<div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0d1828]/65 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
			<div
				className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent}`}
			/>
			<p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/42">
				{label}
			</p>
			<p className="display-title mt-3 text-4xl font-semibold text-white">
				{value}
			</p>
			<p className="mt-2 text-sm text-white/62">{note}</p>
		</div>
	);
}

function SectionBadge({ label, value }: { label: string; value: string }) {
	return (
		<div className="rounded-[18px] border border-white/10 bg-white/7 px-3 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
			<p className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/42">
				{label}
			</p>
			<p className="display-title mt-1 text-2xl font-semibold text-white">
				{value}
			</p>
		</div>
	);
}

function SectionRingButton({
	section,
	active,
	onClick,
}: {
	section: ChapterBoardSection;
	active: boolean;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`relative flex flex-col items-center gap-3 rounded-[24px] border p-3.5 text-center transition-all duration-300 backdrop-blur-md ${
				active
					? "bg-white/[0.08] text-white shadow-[0_12px_24px_-8px_rgba(0,0,0,0.5)]"
					: "bg-white/[0.03] text-white/70 hover:bg-white/[0.07] hover:scale-[1.03] hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
			}`}
			style={{
				borderColor: active
					? `${section.accent}55`
					: "rgba(255, 255, 255, 0.06)",
				boxShadow: active
					? `0 0 16px -4px ${section.accent}33, inset 0 1px 0 0 rgba(255, 255, 255, 0.1)`
					: undefined,
			}}
		>
			<RingMeter
				size={88}
				segments={[
					{
						label: "Weak",
						value: countStatus(section, "Weak"),
						total: section.chapters.length,
						color: RING_COLORS.Weak,
					},
					{
						label: "Medium",
						value: countStatus(section, "Medium"),
						total: section.chapters.length,
						color: RING_COLORS.Medium,
					},
					{
						label: "Strong",
						value: countStatus(section, "Strong"),
						total: section.chapters.length,
						color: RING_COLORS.Strong,
					},
				]}
				center={
					<div className="flex flex-col items-center text-center leading-none">
						<span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">
							{section.subject.substring(0, 3)}
						</span>
						<span className="text-sm font-black text-white mt-1">
							{section.grade}
						</span>
					</div>
				}
			/>
			<div className="mt-1 flex flex-col items-center gap-1">
				<p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/90">
					{section.subject}
				</p>
				<span className="text-[9px] font-semibold tracking-[0.1em] text-white/50 uppercase">
					Class {section.grade}
				</span>
			</div>
		</button>
	);
}

function RingLegend() {
	return (
		<div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/56">
			<LegendDot color={RING_COLORS.Weak} label="Weak" />
			<LegendDot color={RING_COLORS.Medium} label="Medium" />
			<LegendDot color={RING_COLORS.Strong} label="Strong" />
		</div>
	);
}

function LegendDot({ color, label }: { color: string; label: string }) {
	return (
		<span className="flex items-center gap-2">
			<span
				className="h-2.5 w-2.5 rounded-full"
				style={{ background: color }}
			/>
			{label}
		</span>
	);
}

type RingSegment = {
	label: string;
	value: number;
	total: number;
	color: string;
};

function RingMeter({
	size,
	segments,
	center,
}: {
	size: number;
	segments: RingSegment[];
	center: ReactNode;
}) {
	const r = 38;
	const strokeWidth = 9;
	const circumference = 2 * Math.PI * r;

	let cumulativeFraction = 0;
	const slices = segments.map((segment) => {
		const fraction = segment.total === 0 ? 0 : segment.value / segment.total;
		const strokeDashoffset = -cumulativeFraction * circumference;
		cumulativeFraction += fraction;

		const strokeDasharray = `${fraction * circumference} ${circumference}`;

		return {
			...segment,
			r,
			circumference,
			strokeDasharray,
			strokeDashoffset,
			fraction,
		};
	});

	return (
		<div
			className="relative flex items-center justify-center"
			style={{ width: size, height: size }}
		>
			{/* Outer elegant glass backing and deep ambient shadow */}
			<div className="absolute inset-0 rounded-full bg-[#08111d]/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_18px_36px_rgba(0,0,0,0.35)] backdrop-blur-xl" />

			{/* SVG single ring */}
			<svg
				viewBox="0 0 100 100"
				className="w-full h-full transform -rotate-90 p-1"
				role="img"
				aria-label="Chapter Progress Ring"
			>
				<title>Chapter Progress Ring</title>
				<defs>
					<filter id="ringShadow" x="-20%" y="-20%" width="140%" height="140%">
						<feDropShadow
							dx="0"
							dy="1.2"
							stdDeviation="1.2"
							floodColor="#000000"
							floodOpacity="0.6"
						/>
					</filter>
				</defs>

				{/* Soft, dark track behind the entire active ring */}
				<circle
					cx="50"
					cy="50"
					r={r}
					stroke="rgba(255, 255, 255, 0.05)"
					strokeWidth={strokeWidth}
					fill="transparent"
				/>

				{slices.map(
					(slice) =>
						slice.fraction > 0 && (
							<circle
								key={slice.label}
								cx="50"
								cy="50"
								r={r}
								stroke={slice.color}
								strokeWidth={strokeWidth}
								fill="transparent"
								strokeDasharray={slice.strokeDasharray}
								strokeDashoffset={slice.strokeDashoffset}
								strokeLinecap="round"
								filter="url(#ringShadow)"
								style={{
									transition:
										"stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1), stroke-dasharray 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
								}}
							/>
						),
				)}
			</svg>

			{/* Perfectly centered labels */}
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="w-[50%] text-center">{center}</div>
			</div>
		</div>
	);
}

function RingCenter({
	label,
	value,
	sublabel,
}: {
	label: string;
	value: string;
	sublabel?: string;
}) {
	return (
		<div className="flex flex-col items-center text-center">
			<p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/42">
				{label}
			</p>
			<p className="display-title mt-2 text-4xl font-semibold text-white">
				{value}
			</p>
			{sublabel ? (
				<p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/48">
					{sublabel}
				</p>
			) : null}
		</div>
	);
}

function getStats(board: ChapterBoardSection[]) {
	const totalChapters = board.reduce(
		(count, section) => count + section.chapters.length,
		0,
	);
	const totalChecks = totalChapters * TRACKED_FIELDS.length;

	let weakChapters = 0;
	let mediumChapters = 0;
	let strongChapters = 0;
	let doneChecks = 0;

	for (const section of board) {
		for (const chapter of section.chapters) {
			for (const field of TRACKED_FIELDS) {
				const value = chapter[field.key];
				if (value === "Done") doneChecks += 1;
			}

			if (chapter.status === "Weak") weakChapters += 1;
			if (chapter.status === "Medium") mediumChapters += 1;
			if (chapter.status === "Strong") strongChapters += 1;
		}
	}

	const checkPercent =
		totalChecks === 0 ? 0 : Math.round((doneChecks / totalChecks) * 100);

	return {
		totalChapters,
		totalChecks,
		weakChapters,
		mediumChapters,
		strongChapters,
		doneChecks,
		checkPercent,
	};
}

function NeetCountdown() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		isOver: false,
	});

	useEffect(() => {
		// Target date is May 2, 2027 at 14:00 (2:00 PM IST)
		const targetDate = new Date("2027-05-02T14:00:00+05:30");

		function calculateTimeLeft() {
			const now = new Date();
			const difference = targetDate.getTime() - now.getTime();

			if (difference <= 0) {
				return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
			}

			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
				isOver: false,
			};
		}

		setTimeLeft(calculateTimeLeft());

		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0d1828]/65 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#ff7b6b] via-[#ffb25c] to-[#8be3ff]" />
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/6 text-[#ffb25c]">
						<Clock className="h-5 w-5" />
					</div>
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.24em] text-white">
							NEET 2027 Countdown
						</p>
						<p className="text-xs text-white/50">Target Date: May 2, 2027</p>
					</div>
				</div>

				{timeLeft.isOver ? (
					<span className="text-sm font-bold uppercase tracking-widest text-[#ff7b6b]">
						Exam is underway or completed!
					</span>
				) : (
					<div className="flex items-center gap-2 sm:gap-4">
						<CountdownUnit value={timeLeft.days} label="Days" />
						<span className="text-xl font-bold text-white/30 animate-pulse">
							:
						</span>
						<CountdownUnit value={timeLeft.hours} label="Hrs" />
						<span className="text-xl font-bold text-white/30 animate-pulse">
							:
						</span>
						<CountdownUnit value={timeLeft.minutes} label="Mins" />
						<span className="text-xl font-bold text-white/30 animate-pulse">
							:
						</span>
						<CountdownUnit value={timeLeft.seconds} label="Secs" />
					</div>
				)}
			</div>
		</div>
	);
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
	return (
		<div className="flex flex-col items-center min-w-[56px]">
			<span className="display-title text-2xl font-bold text-white sm:text-3xl">
				{value.toString().padStart(2, "0")}
			</span>
			<span className="text-[9px] font-bold uppercase tracking-widest text-white/40 mt-0.5">
				{label}
			</span>
		</div>
	);
}

const FALLBACK_QUOTES = [
	{
		quote:
			"The difference between ordinary and extraordinary is that little extra.",
		author: "Jimmy Johnson",
	},
	{
		quote: "It always seems impossible until it's done.",
		author: "Nelson Mandela",
	},
	{
		quote:
			"Success isn't overnight. It's when every day you get a little better than the day before. It all adds up.",
		author: "Dwayne Johnson",
	},
	{ quote: "Your focus decides your reality.", author: "Qui-Gon Jinn" },
	{
		quote: "Believe you can and you're halfway there.",
		author: "Theodore Roosevelt",
	},
	{
		quote: "Don't let what you cannot do interfere with what you can do.",
		author: "John Wooden",
	},
	{
		quote:
			"The only limit to our realization of tomorrow is our doubts of today.",
		author: "Franklin D. Roosevelt",
	},
];

function HeroQuote() {
	const [quoteData, setQuoteData] = useState<{
		quote: string;
		author: string;
	} | null>(null);
	const [loading, setLoading] = useState(true);

	const getNewQuote = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch("https://dummyjson.com/quotes/random");
			if (!res.ok) throw new Error("API error");
			const data = await res.json();
			setQuoteData({ quote: data.quote, author: data.author });
		} catch (e) {
			console.warn("Quotes API failed, using NEET curated fallback quote", e);
			const randomIdx = Math.floor(Math.random() * FALLBACK_QUOTES.length);
			setQuoteData(FALLBACK_QUOTES[randomIdx]);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getNewQuote();
	}, [getNewQuote]);

	return (
		<div className="relative overflow-hidden rounded-[20px] border border-white/6 bg-white/[0.03] p-4 backdrop-blur-md transition-all duration-300 hover:border-white/10 shadow-sm">
			<div className="flex items-start gap-4">
				<Quote className="mt-1 h-5 w-5 shrink-0 text-[#8be3ff] opacity-60" />
				<div className="min-w-0 flex-1">
					{loading ? (
						<div className="space-y-2 animate-pulse py-1">
							<div className="h-3 w-3/4 rounded bg-white/10" />
							<div className="h-2.5 w-1/4 rounded bg-white/10" />
						</div>
					) : (
						<div>
							<p className="display-title text-base italic leading-relaxed text-white/90">
								"{quoteData?.quote}"
							</p>
							<p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-[#8be3ff]/70">
								— {quoteData?.author}
							</p>
						</div>
					)}
				</div>
				<button
					type="button"
					onClick={getNewQuote}
					disabled={loading}
					className="rounded-lg p-1.5 text-white/40 hover:bg-white/6 hover:text-white transition duration-200"
					aria-label="Refresh Quote"
				>
					<RotateCw
						className={`h-3.5 w-3.5 ${loading ? "animate-spin text-[#8be3ff]" : ""}`}
					/>
				</button>
			</div>
		</div>
	);
}
