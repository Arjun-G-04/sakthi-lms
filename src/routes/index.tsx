import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
	ChapterTracker,
	sectionKey,
	TRACKED_FIELDS,
} from "#/components/ChapterTracker/ChapterTracker";
import {
	RING_COLORS,
	RingCenter,
	RingLegend,
	RingMeter,
} from "#/components/ChapterTracker/RingMeter";
import { SectionRingButton } from "#/components/ChapterTracker/SectionRingButton";
import { HeroQuote } from "#/components/HeroQuote";
import { MetricCard } from "#/components/MetricCard";
import { NeetCountdown } from "#/components/NeetCountdown";
import { TestDashboard } from "#/components/TestDashboard/TestDashboard";
import type { TestType } from "#/components/TestDashboard/utils";
import type {
	ChapterField,
	ProgressState,
	StatusState,
} from "#/lib/chapter-catalog";
import {
	type ChapterBoardSection,
	loadChapterBoard,
	updateChapterProgress,
} from "#/lib/chapter-progress.functions";
import { loadTestPerformances } from "#/lib/test-performance.functions";

export const Route = createFileRoute("/")({
	loader: async () => {
		const [board, tests] = await Promise.all([
			loadChapterBoard(),
			loadTestPerformances(),
		]);
		return { board, tests };
	},
	component: Home,
});

function Home() {
	const { board: initialBoard, tests: initialTests } = Route.useLoaderData();
	const [board, setBoard] = useState<ChapterBoardSection[]>(initialBoard);
	const [tests, setTests] = useState<TestType[]>(initialTests);
	const [savingKey, setSavingKey] = useState<string | null>(null);
	const [selectedSectionKey, setSelectedSectionKey] = useState(
		sectionKey(initialBoard[0]),
	);
	const [activeTab, setActiveTab] = useState<"tracker" | "tests">("tracker");

	useEffect(() => {
		setBoard(initialBoard);
		setTests(initialTests);
		if (!selectedSectionKey && initialBoard[0]) {
			setSelectedSectionKey(sectionKey(initialBoard[0]));
		}
	}, [initialBoard, initialTests, selectedSectionKey]);

	const stats = useMemo(() => getStats(board), [board]);

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
		<main className="relative min-h-screen text-[#1a2840]">
			{/* Parchment texture overlay - pointer-events-none so it doesn't block interaction */}
			<div
				className="pointer-events-none fixed inset-0 z-0"
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1680px] flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 xl:px-10">
				{/* ── HERO SECTION ─────────────────────────────────────────── */}
				<section className="rise-in overflow-hidden rounded-[28px] border-2 border-[#1a2840]/12 bg-[#fdfaf4]/90 shadow-[0_4px_6px_rgba(26,40,64,0.06),0_16px_40px_rgba(26,40,64,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-sm">
					{/* Double-rule top border — classic school ledger feel */}
					<div className="h-px w-full bg-[#1a2840]/10" />
					<div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#b8872a]/60 to-transparent" />
					<div className="h-px w-full bg-[#1a2840]/10" />

					<div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-10">
						{/* LEFT COLUMN */}
						<div className="flex flex-col gap-7">
							{/* School crest / header badge */}
							<div className="flex items-center gap-3">
								<div>
									<p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#b8872a]">
										Sakthi&apos;s Study Base
									</p>
								</div>
							</div>

							{/* Main headline */}
							<div>
								<h1 className="display-title text-5xl font-600 leading-[1.05] text-[#1a2840] sm:text-6xl lg:text-[4.25rem]">
									Crack{" "}
									<span className="relative inline-block">
										<span className="relative z-10">NEET</span>
										{/* Underline stroke */}
										<span className="absolute bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#b8872a] to-[#d4a443] opacity-70" />
									</span>
									<br />
									<span className="text-[#2d5a3d] italic">2027.</span>
								</h1>
								<p className="mt-3 text-sm leading-relaxed text-[#1a2840]/55 body-serif whitespace-nowrap">
									One chapter at a time. Track every milestone. Own every mark.
								</p>
							</div>

							{/* Divider rule */}
							<div className="flex items-center gap-3">
								<div className="h-px flex-1 bg-[#1a2840]/10" />
								<span className="text-[10px] uppercase tracking-[0.4em] text-[#b8872a]/70">
									Today&apos;s focus
								</span>
								<div className="h-px flex-1 bg-[#1a2840]/10" />
							</div>

							<HeroQuote />

							<NeetCountdown />

							{/* Metric cards */}
							<div className="grid gap-3 sm:grid-cols-3">
								<MetricCard
									label="Chapters"
									value={stats.totalChapters.toString()}
									note="Across 8 lanes"
									accent="green"
								/>
								<MetricCard
									label="Done"
									value={`${stats.doneChecks}/${stats.totalChecks}`}
									note={`${stats.checkPercent}% complete`}
									accent="brass"
								/>
								<MetricCard
									label="Weak"
									value={stats.weakChapters.toString()}
									note="Needs push"
									accent="red"
								/>
							</div>
						</div>

						{/* RIGHT COLUMN — Ring panel */}
						<div className="flex flex-col rounded-[20px] border border-[#1a2840]/10 bg-[#f5eedc]/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_12px_rgba(26,40,64,0.06)]">
							<div className="flex flex-wrap items-center justify-between gap-4">
								<div>
									<p className="text-sm font-semibold text-[#1a2840]">
										Chapter Overview
									</p>
									<p className="text-[11px] text-[#1a2840]/45 mt-0.5">
										All sections combined
									</p>
								</div>
								<RingLegend />
							</div>
							<div className="flex flex-1 items-center justify-center mt-5 min-h-[360px]">
								<RingMeter
									size={340}
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

					{/* Section selector row — ruled bottom panel */}
					<div className="border-t-2 border-[#1a2840]/8 bg-[#f0e9d8]/60 px-6 py-5 lg:px-10">
						<p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#b8872a]/80">
							Browse by section
						</p>
						<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
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

				{/* Tab Switcher */}
				<div className="flex p-1 rounded-[16px] border border-[#1a2840]/12 bg-[#fdfaf4]/90 self-start shadow-[0_2px_8px_rgba(26,40,64,0.08)] backdrop-blur-sm">
					<button
						type="button"
						onClick={() => setActiveTab("tracker")}
						className={`rounded-[12px] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.24em] transition-all duration-300 ${
							activeTab === "tracker"
								? "bg-[#1a2840] text-[#fdfaf4] shadow-[0_2px_8px_rgba(26,40,64,0.25)]"
								: "text-[#1a2840]/50 hover:text-[#1a2840]"
						}`}
					>
						Chapter Tracker
					</button>
					<button
						type="button"
						onClick={() => setActiveTab("tests")}
						className={`rounded-[12px] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.24em] transition-all duration-300 ${
							activeTab === "tests"
								? "bg-[#1a2840] text-[#fdfaf4] shadow-[0_2px_8px_rgba(26,40,64,0.25)]"
								: "text-[#1a2840]/50 hover:text-[#1a2840]"
						}`}
					>
						Test Performance
					</button>
				</div>

				{activeTab === "tracker" ? (
					<ChapterTracker
						board={board}
						selectedSectionKey={selectedSectionKey}
						setSelectedSectionKey={setSelectedSectionKey}
						savingKey={savingKey}
						onChange={commitChange}
					/>
				) : (
					<TestDashboard initialTests={tests} />
				)}
			</div>
		</main>
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
