import { Check, Info, RotateCcw, X } from "lucide-react";
import { useState } from "react";
import { MathText } from "./MathText";
import type { Question } from "./questions";

interface ScorecardProps {
	questions: Question[];
	answers: Record<number, number>;
	elapsedTimeSeconds: number;
	onReset: () => void;
}

export function Scorecard({
	questions,
	answers,
	elapsedTimeSeconds,
	onReset,
}: ScorecardProps) {
	const [filter, setFilter] = useState<
		"all" | "correct" | "incorrect" | "unattempted"
	>("all");
	const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

	// Calculation of stats
	let correctCount = 0;
	let incorrectCount = 0;
	let unattemptedCount = 0;

	for (const q of questions) {
		const userAnswer = answers[q.id];
		if (userAnswer === undefined) {
			unattemptedCount += 1;
		} else if (userAnswer === q.correctOption) {
			correctCount += 1;
		} else {
			incorrectCount += 1;
		}
	}

	const totalQuestions = questions.length;
	const scoredMarks = correctCount * 4 - incorrectCount * 1;
	const totalMarks = totalQuestions * 4;
	const attemptedCount = correctCount + incorrectCount;
	const accuracy =
		attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
	const scorePercentage = Math.round((scoredMarks / totalMarks) * 100);

	// Format time
	const formatElapsedTime = (secs: number) => {
		const mins = Math.floor(secs / 60);
		const remainingSecs = secs % 60;
		return `${mins}m ${remainingSecs}s`;
	};

	// Filtered questions
	const filteredQuestions = questions.filter((q) => {
		const userAnswer = answers[q.id];
		if (filter === "all") return true;
		if (filter === "correct")
			return userAnswer !== undefined && userAnswer === q.correctOption;
		if (filter === "incorrect")
			return userAnswer !== undefined && userAnswer !== q.correctOption;
		if (filter === "unattempted") return userAnswer === undefined;
		return true;
	});

	const getScoreColor = (percent: number) => {
		if (percent >= 75) return "border-[#2d5a3d] bg-[#2d5a3d]/10 text-[#2d5a3d]";
		if (percent >= 50) return "border-[#b8872a] bg-[#b8872a]/10 text-[#b8872a]";
		return "border-[#ff7b6b] bg-[#ff7b6b]/10 text-[#ff7b6b]";
	};

	return (
		<div className="w-full space-y-6 animate-fade-in">
			{/* Top scorecard statistics */}
			<div className="overflow-hidden rounded-[24px] border-2 border-[#1a2840]/12 bg-[#fdfaf4]/90 shadow-[0_4px_16px_rgba(26,40,64,0.08)] backdrop-blur-sm">
				<div className="h-[4px] w-full bg-gradient-to-r from-[#ff7b6b] via-[#b8872a] to-[#2d5a3d]" />
				<div className="p-6 sm:p-8">
					<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
						<div>
							<span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b8872a]">
								Mock Test Result
							</span>
							<h2 className="display-title mt-1 text-3xl font-bold text-[#1a2840]">
								p-block
							</h2>
							<p className="body-serif mt-1 text-xs text-[#1a2840]/60">
								Completed in {formatElapsedTime(elapsedTimeSeconds)} | Total
								Questions: {totalQuestions}
							</p>
						</div>

						<button
							type="button"
							onClick={onReset}
							className="flex items-center justify-center gap-2 rounded-xl border border-[#1a2840]/10 bg-[#f5eedc] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1a2840] hover:bg-[#1a2840]/5 transition duration-200"
						>
							<RotateCcw className="h-4 w-4" />
							Retake Exam
						</button>
					</div>

					<div className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-5">
						{/* Score */}
						<div
							className={`rounded-2xl border-2 p-5 text-center transition-all ${getScoreColor(scorePercentage)}`}
						>
							<p className="text-[10px] font-black uppercase tracking-widest opacity-70">
								NEET Score
							</p>
							<p className="display-title mt-2 text-4xl font-black">
								{scoredMarks}
							</p>
							<p className="mt-1 text-[10px] opacity-60">out of {totalMarks}</p>
						</div>

						{/* Accuracy */}
						<div className="rounded-2xl border-2 border-[#1a2840]/10 bg-[#fdfaf4] p-5 text-center">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#1a2840]/60">
								Accuracy
							</p>
							<p className="display-title mt-2 text-4xl font-black text-[#1a2840]">
								{accuracy}%
							</p>
							<p className="mt-1 text-[10px] text-[#1a2840]/50">
								{correctCount} of {attemptedCount} attempts
							</p>
						</div>

						{/* Correct */}
						<div className="rounded-2xl border border-[#2d5a3d]/20 bg-[#2d5a3d]/5 p-5 text-center">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2d5a3d]">
								Correct
							</p>
							<p className="display-title mt-2 text-4xl font-black text-[#2d5a3d]">
								{correctCount}
							</p>
							<p className="mt-1 text-[10px] text-[#2d5a3d]/70">
								+{correctCount * 4} Marks
							</p>
						</div>

						{/* Incorrect */}
						<div className="rounded-2xl border border-[#ff7b6b]/20 bg-[#ff7b6b]/5 p-5 text-center">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#ff7b6b]">
								Incorrect
							</p>
							<p className="display-title mt-2 text-4xl font-black text-[#ff7b6b]">
								{incorrectCount}
							</p>
							<p className="mt-1 text-[10px] text-[#ff7b6b]/70">
								-{incorrectCount * 1} Marks
							</p>
						</div>

						{/* Unattempted */}
						<div className="rounded-2xl border border-[#1a2840]/10 bg-[#1a2840]/5 p-5 text-center col-span-2 lg:col-span-1">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#1a2840]/50">
								Unattempted
							</p>
							<p className="display-title mt-2 text-4xl font-black text-[#1a2840]/70">
								{unattemptedCount}
							</p>
							<p className="mt-1 text-[10px] text-[#1a2840]/40">0 Marks</p>
						</div>
					</div>
				</div>
			</div>

			{/* Review and Solutions Section */}
			<div className="rounded-[24px] border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-6 sm:p-8 shadow-sm">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#1a2840]/10 pb-6">
					<div>
						<h3 className="display-title text-xl font-bold text-[#1a2840]">
							Detailed Review &amp; Solutions
						</h3>
						<p className="body-serif text-xs text-[#1a2840]/60 mt-0.5">
							Analyze your answers against NEET conceptual explanations
						</p>
					</div>

					{/* Filter Pills */}
					<div className="flex flex-wrap gap-2">
						{[
							{ id: "all", label: `All (${totalQuestions})` },
							{ id: "correct", label: `Correct (${correctCount})` },
							{ id: "incorrect", label: `Incorrect (${incorrectCount})` },
							{ id: "unattempted", label: `Unattempted (${unattemptedCount})` },
						].map((item) => (
							<button
								key={item.id}
								type="button"
								onClick={() =>
									setFilter(
										item.id as "all" | "correct" | "incorrect" | "unattempted",
									)
								}
								className={`rounded-xl px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider transition ${
									filter === item.id
										? "bg-[#1a2840] text-white shadow-xs"
										: "bg-white border border-[#1a2840]/10 text-[#1a2840]/70 hover:bg-[#1a2840]/5"
								}`}
							>
								{item.label}
							</button>
						))}
					</div>
				</div>

				{/* Question Review List */}
				<div className="mt-6 space-y-4">
					{filteredQuestions.length === 0 ? (
						<div className="text-center py-12 text-[#1a2840]/40 body-serif text-xs">
							No questions found in this category.
						</div>
					) : (
						filteredQuestions.map((q) => {
							const userAnswer = answers[q.id];
							const isCorrect =
								userAnswer !== undefined && userAnswer === q.correctOption;
							const isUnattempted = userAnswer === undefined;
							const isExpanded = expandedQuestion === q.id;

							let statusBadge = (
								<span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-black text-emerald-800">
									<Check className="h-3 w-3" /> Correct (+4)
								</span>
							);
							if (isUnattempted) {
								statusBadge = (
									<span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-black text-gray-600">
										<Info className="h-3 w-3" /> Unattempted (0)
									</span>
								);
							} else if (!isCorrect) {
								statusBadge = (
									<span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-0.5 text-[10px] font-black text-rose-800">
										<X className="h-3 w-3" /> Incorrect (-1)
									</span>
								);
							}

							return (
								<div
									key={q.id}
									className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
										isExpanded
											? "border-[#1a2840]/25 bg-white shadow-md"
											: "border-[#1a2840]/10 bg-[#fdfaf4] hover:border-[#1a2840]/20"
									}`}
								>
									<button
										type="button"
										onClick={() =>
											setExpandedQuestion(isExpanded ? null : q.id)
										}
										className="w-full text-left flex items-start justify-between gap-4 p-5 cursor-pointer select-none"
									>
										<div className="flex items-start gap-3 flex-1">
											<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1a2840]/10 text-xs font-black text-[#1a2840]">
												{q.id}
											</span>
											<div className="space-y-2 flex-1">
												<p className="body-serif text-xs sm:text-sm font-semibold text-[#1a2840] leading-relaxed">
													<MathText text={q.text} />
												</p>
												<div className="flex items-center gap-2 pt-1">
													{statusBadge}
												</div>
											</div>
										</div>

										<span className="text-[10px] font-bold text-[#1a2840]/50 uppercase tracking-widest shrink-0">
											{isExpanded ? "Hide Solution ▲" : "View Solution ▼"}
										</span>
									</button>

									{/* Expanded Solution Details */}
									{isExpanded && (
										<div className="border-t border-[#1a2840]/8 bg-[#f5eedc]/40 p-5 sm:p-6 space-y-4 animate-fade-in">
											{q.svgDiagram && (
												<div
													className="my-3 p-4 rounded-xl border border-[#1a2840]/10 bg-white flex items-center justify-center shadow-inner"
													// biome-ignore lint/security/noDangerouslySetInnerHtml: static question SVGs are trusted
													dangerouslySetInnerHTML={{ __html: q.svgDiagram }}
												/>
											)}

											<div className="grid gap-2 sm:grid-cols-2">
												{q.options.map((opt, oIdx) => {
													const isThisCorrect = oIdx === q.correctOption;
													const isThisUserChoice = userAnswer === oIdx;

													let optStyle =
														"border-[#1a2840]/10 bg-white text-[#1a2840]/70";
													if (isThisCorrect) {
														optStyle =
															"border-emerald-600 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-600";
													} else if (isThisUserChoice && !isThisCorrect) {
														optStyle =
															"border-rose-500 bg-rose-50 text-rose-900 line-through";
													}

													return (
														<div
															key={opt}
															className={`flex items-center gap-3 rounded-xl border p-3 text-xs ${optStyle}`}
														>
															<span
																className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
																	isThisCorrect
																		? "bg-emerald-600 text-white"
																		: isThisUserChoice
																			? "bg-rose-500 text-white"
																			: "bg-[#1a2840]/10 text-[#1a2840]/60"
																}`}
															>
																{String.fromCharCode(65 + oIdx)}
															</span>
															<span className="flex-1">
																<MathText text={opt} />
															</span>
															{isThisCorrect && (
																<span className="text-[9px] font-black uppercase text-emerald-700">
																	Correct Answer
																</span>
															)}
															{isThisUserChoice && !isThisCorrect && (
																<span className="text-[9px] font-black uppercase text-rose-700">
																	Your Choice
																</span>
															)}
														</div>
													);
												})}
											</div>

											{/* Conceptual Explanation Box */}
											<div className="rounded-xl border border-[#b8872a]/30 bg-[#fdfaf4] p-4 space-y-1.5 shadow-inner">
												<span className="text-[9px] font-black uppercase tracking-widest text-[#b8872a]">
													Conceptual Explanation
												</span>
												<p className="body-serif text-xs leading-relaxed text-[#1a2840]/85">
													<MathText text={q.explanation} />
												</p>
											</div>
										</div>
									)}
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
}
