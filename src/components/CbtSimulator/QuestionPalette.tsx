import type { Question, QuestionStatus, SectionInfo } from "./types";

interface QuestionPaletteProps {
	questions: Question[];
	currentIdx: number;
	status: Record<number, QuestionStatus>;
	sections?: SectionInfo[];
	activeSectionIdx: number;
	onSelectSection: (idx: number) => void;
	onSelectQuestion: (idx: number) => void;
	onSubmitClick: () => void;
	answeredCount: number;
	notAnsweredCount: number;
	markedCount: number;
	answeredMarkedCount: number;
	notVisitedCount: number;
}

export function QuestionPalette({
	questions,
	currentIdx,
	status,
	sections,
	activeSectionIdx,
	onSelectSection,
	onSelectQuestion,
	onSubmitClick,
	answeredCount,
	notAnsweredCount,
	markedCount,
	answeredMarkedCount,
	notVisitedCount,
}: QuestionPaletteProps) {
	const currentSection = sections?.[activeSectionIdx];
	const displayQuestions = currentSection
		? questions.slice(currentSection.startIndex, currentSection.endIndex + 1)
		: questions;

	return (
		<aside className="flex flex-col gap-2.5 h-full min-h-0 overflow-hidden">
			{/* Status Legend Section */}
			<div className="shrink-0 rounded-xl border border-[#1a2840]/12 bg-white p-2.5 shadow-xs space-y-1.5">
				<p className="text-[9px] font-bold uppercase tracking-widest text-[#1a2840]/50 border-b border-[#1a2840]/8 pb-1">
					Palette Status Indicators
				</p>

				<div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[9px] font-medium text-[#1a2840]/80">
					<div className="flex items-center gap-1.5">
						<span className="flex h-4 w-4 items-center justify-center rounded-sm bg-emerald-600 text-[8px] font-black text-white">
							1
						</span>
						<span>Answered ({answeredCount})</span>
					</div>
					<div className="flex items-center gap-1.5">
						<span className="flex h-4 w-4 items-center justify-center rounded-sm bg-rose-600 text-[8px] font-black text-white">
							1
						</span>
						<span>Not Ans ({notAnsweredCount})</span>
					</div>
					<div className="flex items-center gap-1.5">
						<span className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[8px] font-black text-white">
							1
						</span>
						<span>For Review ({markedCount})</span>
					</div>
					<div className="flex items-center gap-1.5">
						<span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[8px] font-black text-white">
							1
							<span className="absolute -bottom-0.5 -right-0.5 block h-1.5 w-1.5 rounded-full bg-emerald-500 border border-white" />
						</span>
						<span>Ans &amp; Rev ({answeredMarkedCount})</span>
					</div>
					<div className="flex items-center gap-1.5 col-span-2">
						<span className="flex h-4 w-4 items-center justify-center rounded-sm border border-[#1a2840]/15 bg-white text-[8px] text-[#1a2840]/40">
							1
						</span>
						<span>Not Visited ({notVisitedCount})</span>
					</div>
				</div>
			</div>

			{/* Question Grid Palette */}
			<div className="flex-1 min-h-0 rounded-xl border border-[#1a2840]/12 bg-white p-2.5 shadow-xs flex flex-col justify-between overflow-hidden">
				<div className="flex-1 min-h-0 flex flex-col overflow-hidden">
					{sections && sections.length > 0 && (
						<div className="shrink-0 mb-1.5 border-b border-[#1a2840]/8 pb-1.5">
							<div className="grid grid-cols-2 gap-1">
								{sections.map((sec, secIdx) => {
									const isActive = activeSectionIdx === secIdx;
									const secSlice = questions.slice(
										sec.startIndex,
										sec.endIndex + 1,
									);
									const secAnsCount = secSlice.filter(
										(q) =>
											status[q.id] === "answered" ||
											status[q.id] === "answered_marked",
									).length;

									return (
										<button
											key={sec.name}
											type="button"
											onClick={() => onSelectSection(secIdx)}
											className={`flex flex-col items-start rounded px-2 py-1 text-left text-[11px] transition ${
												isActive
													? "bg-[#1a2840] text-white font-bold shadow-xs"
													: "border border-[#1a2840]/10 bg-[#fdfaf4] text-[#1a2840]/70 hover:bg-[#1a2840]/5"
											}`}
										>
											<span className="truncate">{sec.name}</span>
											<span
												className={`text-[8px] font-normal ${
													isActive ? "text-white/70" : "text-[#1a2840]/50"
												}`}
											>
												{secAnsCount}/{secSlice.length} Ans
											</span>
										</button>
									);
								})}
							</div>
						</div>
					)}

					<div className="shrink-0 flex items-center justify-between border-b border-[#1a2840]/8 pb-1 mb-1.5">
						<p className="text-[9px] font-bold uppercase tracking-widest text-[#1a2840]/50">
							{currentSection ? currentSection.name : "Question Palette"}
						</p>
						<span className="text-[9px] font-medium text-[#1a2840]/60">
							{displayQuestions.length} Qs
						</span>
					</div>

					{/* Questions grid */}
					<div className="grid grid-cols-5 gap-1.5 flex-1 min-h-0 overflow-y-auto p-1">
						{displayQuestions.map((q, localIdx) => {
							const globalIdx = currentSection
								? currentSection.startIndex + localIdx
								: localIdx;
							const isCurrent = currentIdx === globalIdx;
							const stat = status[q.id];

							let btnStyle =
								"border-[#1a2840]/15 bg-white text-[#1a2840]/50 hover:bg-[#1a2840]/5";
							let indicatorDot = false;

							if (stat === "answered") {
								btnStyle =
									"bg-emerald-600 border-emerald-600 text-white font-bold";
							} else if (stat === "not_answered") {
								btnStyle = "bg-rose-600 border-rose-600 text-white font-bold";
							} else if (stat === "marked") {
								btnStyle =
									"bg-indigo-600 border-indigo-600 text-white rounded-full font-bold";
							} else if (stat === "answered_marked") {
								btnStyle =
									"bg-indigo-600 border-indigo-600 text-white rounded-full font-bold relative";
								indicatorDot = true;
							}

							return (
								<button
									key={q.id}
									type="button"
									onClick={() => onSelectQuestion(globalIdx)}
									className={`flex h-7 w-full items-center justify-center rounded border text-[11px] font-bold transition ${btnStyle} ${
										isCurrent ? "ring-2 ring-offset-1 ring-[#b8872a]" : ""
									}`}
								>
									{q.id}
									{indicatorDot && (
										<span className="absolute -bottom-0.5 -right-0.5 block h-2 w-2 rounded-full bg-emerald-500 border border-white" />
									)}
								</button>
							);
						})}
					</div>
				</div>

				{/* Submit Exam Button */}
				<div className="shrink-0 border-t border-[#1a2840]/8 pt-2 mt-1.5">
					<button
						type="button"
						onClick={onSubmitClick}
						className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 py-2 text-[11px] font-black uppercase tracking-wider text-white hover:bg-emerald-700 transition shadow-xs"
					>
						Submit Mock Test
					</button>
				</div>
			</div>
		</aside>
	);
}
