import { Check } from "lucide-react";
import { useState } from "react";
import { CHAPTER_GROUPS } from "#/lib/chapter-catalog";

type ChaptersMappingGridProps = {
	chaptersCovered: string[];
	onToggleChapter: (chapterName: string) => void;
	onResetChapters: () => void;
};

export function ChaptersMappingGrid({
	chaptersCovered,
	onToggleChapter,
	onResetChapters,
}: ChaptersMappingGridProps) {
	const [activeSubjectTab, setActiveSubjectTab] = useState<
		"Physics" | "Chemistry" | "Biology" | "Maths"
	>("Physics");
	const [chapterSearch, setChapterSearch] = useState("");

	function isChapterSelected(chapterName: string) {
		return chaptersCovered.includes(chapterName);
	}

	function getSubjectChapters(
		subject: "Physics" | "Chemistry" | "Biology" | "Maths",
		grade: "11" | "12",
	) {
		const group = CHAPTER_GROUPS.find(
			(g) => g.subject === subject && g.grade === grade,
		);
		return group ? group.chapters : [];
	}

	function getSubjectAccent(
		subject: "Physics" | "Chemistry" | "Biology" | "Maths",
	) {
		const group = CHAPTER_GROUPS.find((g) => g.subject === subject);
		return group ? group.accent : "#8be3ff";
	}

	function getSubjectSelectedCount(
		subject: "Physics" | "Chemistry" | "Biology" | "Maths",
	) {
		const chapters11 = getSubjectChapters(subject, "11");
		const chapters12 = getSubjectChapters(subject, "12");
		const allSubjectChapters = [...chapters11, ...chapters12];
		return chaptersCovered.filter((ch) => allSubjectChapters.includes(ch))
			.length;
	}

	return (
		<div className="space-y-4 flex flex-col min-h-0 overflow-hidden">
			<h4 className="text-[10px] font-black uppercase tracking-wider text-[#1a2840]/75 border-b border-[#1a2840]/8 pb-2">
				Chapters Mapping Grid
			</h4>

			{/* Selected Chapter Tags row */}
			{chaptersCovered.length > 0 ? (
				<div className="rounded-[18px] border border-[#1a2840]/10 bg-[#f5eedc]/60 p-3 space-y-2">
					<div className="flex items-center justify-between">
						<span className="text-[9px] font-black uppercase tracking-wider text-[#b8872a]">
							Selected Chapters ({chaptersCovered.length})
						</span>
						<button
							type="button"
							onClick={onResetChapters}
							className="text-[9px] font-black uppercase tracking-wider text-rose-500 hover:text-rose-600"
						>
							Reset Selection
						</button>
					</div>
					<div className="flex flex-wrap gap-1.5 max-h-[80px] overflow-y-auto pr-1 [scrollbar-width:thin]">
						{chaptersCovered.map((ch) => (
							<span
								key={ch}
								className="inline-flex w-[130px] items-center justify-between gap-1 rounded-lg bg-[#1a2840]/10 border border-[#1a2840]/10 px-2 py-0.5 text-[9px] font-bold text-[#1a2840]/90"
								title={ch}
							>
								<span className="truncate pr-1">{ch}</span>
								<button
									type="button"
									onClick={() => onToggleChapter(ch)}
									className="text-[#1a2840]/55 hover:text-[#1a2840] ml-auto text-[9px] font-black shrink-0"
								>
									×
								</button>
							</span>
						))}
					</div>
				</div>
			) : (
				<div className="rounded-[18px] border border-dashed border-[#1a2840]/25 p-3.5 text-center">
					<span className="body-serif text-[10px] italic text-[#1a2840]/55">
						No chapters selected. Select chapters from the grid below to map
						syllabus coverage.
					</span>
				</div>
			)}

			{/* Subject selection cards tabs */}
			<div className="grid grid-cols-4 gap-2">
				{(["Physics", "Chemistry", "Biology", "Maths"] as const).map(
					(subject) => {
						const active = activeSubjectTab === subject;
						const count = getSubjectSelectedCount(subject);
						const activeColor = getSubjectAccent(subject);

						return (
							<button
								key={subject}
								type="button"
								onClick={() => {
									setActiveSubjectTab(subject);
									setChapterSearch("");
								}}
								className={`relative flex flex-col items-center justify-center gap-1.5 rounded-[14px] border p-2.5 text-center transition-all duration-300 ${
									active
										? "bg-[#1a2840]/12 text-[#1a2840] shadow-md border-[#1a2840]/20"
										: "bg-[#fdfaf4] text-[#1a2840]/70 border-[#1a2840]/12 hover:bg-[#f5eedc]"
								}`}
								style={{
									borderColor: active ? activeColor : undefined,
								}}
							>
								<span className="text-[10px] font-black uppercase tracking-wider block">
									{subject}
								</span>
								{count > 0 ? (
									<span
										className="inline-flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[8px] font-black text-white"
										style={{ backgroundColor: activeColor }}
									>
										{count}
									</span>
								) : (
									<span className="inline-flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[8px] font-black text-[#1a2840]/45 bg-[#1a2840]/8">
										0
									</span>
								)}
							</button>
						);
					},
				)}
			</div>

			{/* Grouped Chapters lists */}
			<div className="flex-1 overflow-hidden flex flex-col bg-[#f5eedc]/50 border border-[#1a2840]/8 rounded-[18px] p-4">
				<div className="flex items-center justify-between mb-3">
					<span className="text-[9px] font-black uppercase tracking-wider text-[#1a2840]/65">
						Syllabus Catalog: {activeSubjectTab}
					</span>
					<input
						type="text"
						placeholder="Search chapters..."
						value={chapterSearch}
						onChange={(e) => setChapterSearch(e.target.value)}
						className="w-[180px] rounded-lg border border-[#1a2840]/15 bg-[#fdfaf4] px-2.5 py-1 text-[10px] text-[#1a2840] placeholder-[#1a2840]/45 focus:outline-none"
					/>
				</div>

				{/* Multi-lane scroll grid */}
				<div className="flex-1 overflow-y-auto grid grid-cols-2 gap-4 pr-1 [scrollbar-width:thin] max-h-[300px]">
					{/* Class 11 Lane */}
					<div className="space-y-2">
						<h5 className="text-[9px] font-black uppercase tracking-wider text-[#b8872a]/95 border-b border-[#1a2840]/8 pb-1">
							Class 11 Chapters
						</h5>
						<div className="grid gap-1.5">
							{getSubjectChapters(activeSubjectTab, "11")
								.filter((ch) =>
									ch.toLowerCase().includes(chapterSearch.toLowerCase()),
								)
								.map((ch) => {
									const selected = isChapterSelected(ch);
									const subjectAccent = getSubjectAccent(activeSubjectTab);
									return (
										<button
											key={ch}
											type="button"
											onClick={() => onToggleChapter(ch)}
											className="flex min-w-0 w-full items-center text-left justify-between rounded-xl border p-2 text-[10px] font-semibold transition"
											style={{
												borderColor: selected
													? subjectAccent
													: "rgba(26,40,64,0.12)",
												backgroundColor: selected
													? `${subjectAccent}14`
													: "rgba(26,40,64,0.03)",
												color: selected ? "#1a2840" : "rgba(26,40,64,0.78)",
												boxShadow: selected
													? `0 0 10px ${subjectAccent}11`
													: undefined,
											}}
										>
											<span className="truncate pr-1">{ch}</span>
											{selected && (
												<Check
													className="h-3 w-3 shrink-0 animate-in fade-in zoom-in-50 duration-200"
													style={{ color: subjectAccent }}
												/>
											)}
										</button>
									);
								})}
							{getSubjectChapters(activeSubjectTab, "11").filter((ch) =>
								ch.toLowerCase().includes(chapterSearch.toLowerCase()),
							).length === 0 && (
								<span className="text-[9px] italic text-[#1a2840]/55 text-center py-2">
									No matches
								</span>
							)}
						</div>
					</div>

					{/* Class 12 Lane */}
					<div className="space-y-2">
						<h5 className="text-[9px] font-black uppercase tracking-wider text-[#b8872a]/95 border-b border-[#1a2840]/8 pb-1">
							Class 12 Chapters
						</h5>
						<div className="grid gap-1.5">
							{getSubjectChapters(activeSubjectTab, "12")
								.filter((ch) =>
									ch.toLowerCase().includes(chapterSearch.toLowerCase()),
								)
								.map((ch) => {
									const selected = isChapterSelected(ch);
									const subjectAccent = getSubjectAccent(activeSubjectTab);
									return (
										<button
											key={ch}
											type="button"
											onClick={() => onToggleChapter(ch)}
											className="flex min-w-0 w-full items-center text-left justify-between rounded-xl border p-2 text-[10px] font-semibold transition"
											style={{
												borderColor: selected
													? subjectAccent
													: "rgba(26,40,64,0.12)",
												backgroundColor: selected
													? `${subjectAccent}14`
													: "rgba(26,40,64,0.03)",
												color: selected ? "#1a2840" : "rgba(26,40,64,0.78)",
												boxShadow: selected
													? `0 0 10px ${subjectAccent}11`
													: undefined,
											}}
										>
											<span className="truncate pr-1">{ch}</span>
											{selected && (
												<Check
													className="h-3 w-3 shrink-0 animate-in fade-in zoom-in-50 duration-200"
													style={{ color: subjectAccent }}
												/>
											)}
										</button>
									);
								})}
							{getSubjectChapters(activeSubjectTab, "12").filter((ch) =>
								ch.toLowerCase().includes(chapterSearch.toLowerCase()),
							).length === 0 && (
								<span className="body-serif text-[9px] italic text-[#1a2840]/55 text-center py-2">
									No matches
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
