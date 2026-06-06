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
								Oscillations
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
								-{incorrectCount} Marks
							</p>
						</div>

						{/* Unattempted */}
						<div className="rounded-2xl border border-[#1a2840]/10 bg-[#1a2840]/5 p-5 text-center">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#1a2840]/50">
								Unattempted
							</p>
							<p className="display-title mt-2 text-4xl font-black text-[#1a2840]/60">
								{unattemptedCount}
							</p>
							<p className="mt-1 text-[10px] text-[#1a2840]/40">0 Marks</p>
						</div>
					</div>
				</div>
			</div>

			{/* Detailed analysis / review portal */}
			<div className="rounded-[24px] border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-6 shadow-[0_4px_16px_rgba(26,40,64,0.06)]">
				<div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1a2840]/8 pb-4">
					<h3 className="text-sm font-black uppercase tracking-wider text-[#1a2840] flex items-center gap-2">
						<Info className="h-4 w-4 text-[#b8872a]" />
						Question-By-Question Analysis
					</h3>

					{/* Filter tabs */}
					<div className="flex rounded-lg bg-[#f5eedc] p-0.5 text-[10px] font-bold uppercase tracking-wider">
						{(["all", "correct", "incorrect", "unattempted"] as const).map(
							(t) => (
								<button
									key={t}
									type="button"
									onClick={() => setFilter(t)}
									className={`rounded-md px-3 py-1.5 transition ${
										filter === t
											? "bg-[#1a2840] text-[#fdfaf4]"
											: "text-[#1a2840]/60 hover:text-[#1a2840]"
									}`}
								>
									{t}
								</button>
							),
						)}
					</div>
				</div>

				{/* Questions list */}
				<div className="mt-6 space-y-4 max-h-[700px] overflow-y-auto pr-1">
					{filteredQuestions.length === 0 ? (
						<p className="py-8 text-center text-xs text-[#1a2840]/50 body-serif">
							No questions fit the active filter selection.
						</p>
					) : (
						filteredQuestions.map((q) => {
							const userAnswerIdx = answers[q.id];
							const isCorrect =
								userAnswerIdx !== undefined &&
								userAnswerIdx === q.correctOption;
							const isUnattempted = userAnswerIdx === undefined;
							const isExpanded = expandedQuestion === q.id;

							return (
								<div
									key={q.id}
									className={`rounded-xl border transition-all ${
										isExpanded
											? "border-[#1a2840]/25 bg-white shadow-sm"
											: "border-[#1a2840]/8 bg-[#fdfaf4] hover:border-[#1a2840]/20"
									}`}
								>
									{/* Question header row */}
									<button
										type="button"
										onClick={() =>
											setExpandedQuestion(isExpanded ? null : q.id)
										}
										className="flex w-full items-center justify-between p-4 text-left"
									>
										<div className="flex items-start gap-3 min-w-0">
											{/* Status badge */}
											<span className="mt-0.5 shrink-0">
												{isUnattempted ? (
													<span className="flex h-5 w-5 items-center justify-center rounded-md border border-[#1a2840]/20 bg-[#1a2840]/5 text-[10px] font-bold text-[#1a2840]/50">
														{q.id}
													</span>
												) : isCorrect ? (
													<span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#2d5a3d] text-[10px] font-bold text-white">
														<Check className="h-3. w-3" />
													</span>
												) : (
													<span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#ff7b6b] text-[10px] font-bold text-white">
														<X className="h-3 w-3" />
													</span>
												)}
											</span>

											<span className="text-xs font-bold text-[#1a2840] line-clamp-2 md:line-clamp-1 body-serif pr-2">
												Q{q.id}: <MathText text={q.text} />
											</span>
										</div>

										<span className="text-[10px] font-bold uppercase tracking-wider text-[#b8872a] shrink-0 hover:underline">
											{isExpanded ? "Hide Details" : "View Explanation"}
										</span>
									</button>

									{/* Expanded content */}
									{isExpanded && (
										<div className="border-t border-[#1a2840]/8 p-4 space-y-4 text-xs">
											{/* Question text */}
											<p className="body-serif leading-relaxed text-[#1a2840] whitespace-pre-line">
												<MathText text={q.text} />
											</p>

											{/* Render SVG diagram if present */}
											{q.svgDiagram && (
												<div
													className="my-3 p-3 rounded-lg border border-[#1a2840]/10 bg-[#fdfaf4] flex items-center justify-center"
													// biome-ignore lint/security/noDangerouslySetInnerHtml: static question SVGs are trusted
													dangerouslySetInnerHTML={{ __html: q.svgDiagram }}
												/>
											)}

											{/* Options */}
											<div className="grid gap-2 sm:grid-cols-2">
												{q.options.map((opt, oIdx) => {
													const isSelected = userAnswerIdx === oIdx;
													const isCorrectOpt = q.correctOption === oIdx;

													let optStyle =
														"border-[#1a2840]/8 bg-[#fdfaf4] text-[#1a2840]/80";
													if (isSelected) {
														optStyle = isCorrect
															? "border-[#2d5a3d] bg-[#2d5a3d]/10 text-[#2d5a3d] font-bold"
															: "border-[#ff7b6b] bg-[#ff7b6b]/10 text-[#ff7b6b] font-bold";
													} else if (isCorrectOpt) {
														optStyle =
															"border-[#2d5a3d] bg-[#2d5a3d]/5 text-[#2d5a3d] font-bold";
													}

													return (
														<div
															key={opt}
															className={`flex items-center gap-3 rounded-lg border p-3 ${optStyle}`}
														>
															<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[9px] font-bold uppercase">
																{String.fromCharCode(65 + oIdx)}
															</span>
															<span>
																<MathText text={opt} />
															</span>
														</div>
													);
												})}
											</div>

											{/* Explanation */}
											<div className="rounded-lg border border-[#b8872a]/20 bg-[#fdfaf4] p-4 text-[#1a2840]/90">
												<h4 className="font-bold text-[#b8872a] uppercase tracking-wider mb-2 text-[10px]">
													Solution Explanation:
												</h4>
												<p className="body-serif leading-relaxed whitespace-pre-line text-justify">
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
