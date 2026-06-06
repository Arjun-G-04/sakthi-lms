import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { addTestPerformance } from "#/lib/test-performance.functions";
import { Instructions } from "./Instructions";
import { MathText } from "./MathText";
import { oscillationsQuestions } from "./questions";
import { Scorecard } from "./Scorecard";
import { SubmitModal } from "./SubmitModal";

type QuestionStatus =
	| "not_visited"
	| "not_answered"
	| "answered"
	| "marked"
	| "answered_marked";

export function Simulator() {
	// Exam states
	const [currentIdx, setCurrentIdx] = useState(0);
	const [answers, setAnswers] = useState<Record<number, number>>({});
	const [status, setStatus] = useState<Record<number, QuestionStatus>>(() => {
		const initStatus: Record<number, QuestionStatus> = {};
		for (const q of oscillationsQuestions) {
			initStatus[q.id] = q.id === 1 ? "not_answered" : "not_visited";
		}
		return initStatus;
	});

	const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSubmitModal, setShowSubmitModal] = useState(false);
	const [isStarted, setIsStarted] = useState(false);

	const currentQuestion = oscillationsQuestions[currentIdx];

	// Submit test handler
	const submitTest = useCallback(async () => {
		setIsSubmitting(true);
		try {
			// Calculate scored marks
			let correct = 0;
			let incorrect = 0;
			for (const q of oscillationsQuestions) {
				const ans = answers[q.id];
				if (ans !== undefined) {
					if (ans === q.correctOption) {
						correct += 1;
					} else {
						incorrect += 1;
					}
				}
			}
			const scoredMarks = correct * 4 - incorrect * 1;

			// Save to database
			const today = new Date().toISOString().split("T")[0];
			await addTestPerformance({
				data: {
					testDate: today,
					testName: "Oscillations",
					chaptersCovered: ["Oscillations"],
					durationMinutes: 60,
					totalMarks: 240,
					scoredMarks: Math.max(0, scoredMarks), // NEET score can be negative in theory, but database blocks it, let's clamp it at 0 to be database-safe (0 to 240)
					testType: "Subject Test",
				},
			});

			setIsSubmitted(true);
		} catch (error) {
			console.error("Failed to save mock test performance:", error);
			alert(
				"Error submitting exam: " +
					(error instanceof Error ? error.message : String(error)),
			);
		} finally {
			setIsSubmitting(false);
			setShowSubmitModal(false);
		}
	}, [answers]);

	// Countdown Timer Effect
	useEffect(() => {
		if (!isStarted || isSubmitted || timeLeft <= 0) return;

		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					clearInterval(timer);
					submitTest(); // Auto-submit when time is up
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [isStarted, isSubmitted, timeLeft, submitTest]);

	// Tab closure warn handler
	useEffect(() => {
		if (!isStarted || isSubmitted) return;

		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			e.preventDefault();
			e.returnValue =
				"You have an active test session. Closing the tab will end your session and your progress may be lost.";
			return e.returnValue;
		};

		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => window.removeEventListener("beforeunload", handleBeforeUnload);
	}, [isStarted, isSubmitted]);

	// Reset exam
	const handleReset = () => {
		setCurrentIdx(0);
		setAnswers({});
		setStatus(() => {
			const initStatus: Record<number, QuestionStatus> = {};
			for (const q of oscillationsQuestions) {
				initStatus[q.id] = q.id === 1 ? "not_answered" : "not_visited";
			}
			return initStatus;
		});
		setTimeLeft(3600);
		setIsSubmitted(false);
		setIsStarted(false);
	};

	// Format time string (MM:SS)
	const formatTimer = (seconds: number) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
	};

	// Navigation actions
	const selectQuestion = useCallback((idx: number) => {
		setCurrentIdx(idx);
		setStatus((prev) => {
			const qId = oscillationsQuestions[idx].id;
			if (prev[qId] === "not_visited") {
				return { ...prev, [qId]: "not_answered" };
			}
			return prev;
		});
	}, []);

	const handleSaveNext = useCallback(() => {
		const qId = currentQuestion.id;
		const answerSelected = answers[qId] !== undefined;

		setStatus((prev) => ({
			...prev,
			[qId]: answerSelected ? "answered" : "not_answered",
		}));

		if (currentIdx < oscillationsQuestions.length - 1) {
			selectQuestion(currentIdx + 1);
		}
	}, [currentIdx, answers, currentQuestion.id, selectQuestion]);

	const handleMarkReviewNext = useCallback(() => {
		const qId = currentQuestion.id;
		const answerSelected = answers[qId] !== undefined;

		setStatus((prev) => ({
			...prev,
			[qId]: answerSelected ? "answered_marked" : "marked",
		}));

		if (currentIdx < oscillationsQuestions.length - 1) {
			selectQuestion(currentIdx + 1);
		}
	}, [currentIdx, answers, currentQuestion.id, selectQuestion]);

	const handleClearResponse = useCallback(() => {
		const qId = currentQuestion.id;
		setAnswers((prev) => {
			const copy = { ...prev };
			delete copy[qId];
			return copy;
		});
		setStatus((prev) => ({
			...prev,
			[qId]: "not_answered",
		}));
	}, [currentQuestion.id]);

	const handlePrev = useCallback(() => {
		if (currentIdx > 0) {
			selectQuestion(currentIdx - 1);
		}
	}, [currentIdx, selectQuestion]);

	const handleSelectOption = useCallback(
		(optionIdx: number) => {
			const qId = currentQuestion.id;
			setAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
		},
		[currentQuestion.id],
	);

	// Counting category stats
	const getCountByStatus = (stat: QuestionStatus) => {
		return Object.values(status).filter((s) => s === stat).length;
	};

	const answeredCount = getCountByStatus("answered");
	const notAnsweredCount = getCountByStatus("not_answered");
	const markedCount = getCountByStatus("marked");
	const answeredMarkedCount = getCountByStatus("answered_marked");
	const notVisitedCount = getCountByStatus("not_visited");

	if (isSubmitted) {
		return (
			<Scorecard
				questions={oscillationsQuestions}
				answers={answers}
				elapsedTimeSeconds={3600 - timeLeft}
				onReset={handleReset}
			/>
		);
	}

	if (!isStarted) {
		return (
			<Instructions
				title="Oscillations"
				subtitle="Class 11 Physics | Chapter Assessment"
				onStart={() => setIsStarted(true)}
			/>
		);
	}

	return (
		<div className="flex flex-col gap-5 min-h-[calc(100vh-100px)] text-[#1a2840] animate-fade-in relative z-10">
			{/* Top Bar / Header replicating TCS iON CBT layout */}
			<div className="flex flex-col gap-3 rounded-2xl border border-[#1a2840]/12 bg-[#2d5a3d]/90 p-4 text-[#fdfaf4] shadow-md sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h2 className="display-title text-2xl font-bold">Oscillations</h2>
				</div>

				<div className="flex items-center justify-between gap-6 border-t border-white/10 pt-3 sm:border-t-0 sm:pt-0">
					<div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2 border border-white/10">
						<span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
							Time Left
						</span>
						<span
							className={`font-mono text-lg font-black tracking-wider ${timeLeft <= 300 ? "text-[#ff7b6b] animate-pulse" : "text-white"}`}
						>
							{formatTimer(timeLeft)}
						</span>
					</div>
				</div>
			</div>

			{/* Main Grid layout */}
			<div className="grid gap-5 lg:grid-cols-[1fr_340px] flex-1">
				{/* Left Column: Active Question box & Bottom Controls */}
				<div className="flex flex-col rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 shadow-sm overflow-hidden min-h-[480px]">
					{/* Question Box Header */}
					<div className="flex items-center justify-between border-b border-[#1a2840]/8 bg-[#f5eedc] px-5 py-3.5">
						<div className="flex items-center gap-3">
							<span className="rounded bg-[#1a2840] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#fdfaf4]">
								Question {currentIdx + 1}
							</span>
							<span className="text-[10px] font-bold uppercase tracking-wider text-[#1a2840]/60">
								MCQ Single Option Correct (+4 / -1)
							</span>
						</div>
					</div>

					{/* Question body */}
					<div className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[500px]">
						<p className="body-serif text-sm leading-relaxed text-[#1a2840] whitespace-pre-line">
							<MathText text={currentQuestion.text} />
						</p>

						{/* Render SVG diagram if present */}
						{currentQuestion.svgDiagram && (
							<div
								className="my-4 p-4 rounded-xl border border-[#1a2840]/10 bg-white flex items-center justify-center shadow-inner"
								// biome-ignore lint/security/noDangerouslySetInnerHtml: static question SVGs are trusted
								dangerouslySetInnerHTML={{ __html: currentQuestion.svgDiagram }}
							/>
						)}

						{/* Options list */}
						<div className="grid gap-3 mt-4">
							{currentQuestion.options.map((opt, oIdx) => {
								const isSelected = answers[currentQuestion.id] === oIdx;
								return (
									<button
										key={opt}
										type="button"
										onClick={() => handleSelectOption(oIdx)}
										className={`flex items-center gap-4 rounded-xl border p-4 text-left transition duration-150 ${
											isSelected
												? "border-[#1a2840] bg-[#1a2840]/5 font-semibold text-[#1a2840]"
												: "border-[#1a2840]/10 bg-white hover:border-[#1a2840]/25 text-[#1a2840]/80"
										}`}
									>
										<span
											className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold uppercase transition ${
												isSelected
													? "bg-[#1a2840] text-[#fdfaf4] border-[#1a2840]"
													: "border-[#1a2840]/20 text-[#1a2840]/50"
											}`}
										>
											{String.fromCharCode(65 + oIdx)}
										</span>
										<span className="text-xs leading-relaxed">
											<MathText text={opt} />
										</span>
									</button>
								);
							})}
						</div>
					</div>

					{/* Bottom Controls */}
					<div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1a2840]/8 bg-[#f5eedc] p-4">
						<div className="flex items-center gap-2">
							<button
								type="button"
								onClick={handleMarkReviewNext}
								className="rounded-xl border border-[#1a2840]/20 bg-white px-4 py-2.5 text-2xs font-bold uppercase tracking-wider text-[#1a2840]/70 hover:bg-[#1a2840]/5 transition duration-150"
							>
								Mark for Review & Next
							</button>
							<button
								type="button"
								onClick={handleClearResponse}
								className="rounded-xl border border-[#1a2840]/20 bg-white px-4 py-2.5 text-2xs font-bold uppercase tracking-wider text-[#1a2840]/70 hover:bg-[#1a2840]/5 transition duration-150"
							>
								Clear Response
							</button>
						</div>

						<div className="flex items-center gap-2">
							<button
								type="button"
								onClick={handlePrev}
								disabled={currentIdx === 0}
								aria-label="Previous question"
								className="rounded-xl border border-[#1a2840]/10 bg-white px-3.5 py-2.5 text-xs text-[#1a2840] disabled:opacity-30 hover:bg-[#1a2840]/5 transition duration-150"
							>
								<ArrowLeft className="h-4 w-4" />
							</button>
							<button
								type="button"
								onClick={handleSaveNext}
								className="flex items-center gap-2 rounded-xl bg-[#1a2840] px-5 py-2.5 text-2xs font-black uppercase tracking-wider text-[#fdfaf4] hover:bg-[#1a2840]/85 transition duration-150 shadow-[0_2px_6px_rgba(26,40,64,0.15)]"
							>
								Save & Next
								<ArrowRight className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>

				{/* Right Column: Question Palette & Candidate Dashboard */}
				<aside className="flex flex-col gap-4">
					{/* Status Legend Section */}
					<div className="rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-4 shadow-sm space-y-3">
						<p className="text-[10px] font-bold uppercase tracking-widest text-[#1a2840]/50 border-b border-[#1a2840]/8 pb-1.5">
							Palette Status Indicators
						</p>

						<div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[10px] font-medium text-[#1a2840]/80">
							<div className="flex items-center gap-2">
								<span className="flex h-5 w-5 items-center justify-center rounded-sm bg-emerald-600 text-[9px] font-black text-white">
									1
								</span>
								<span>Answered ({answeredCount})</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="flex h-5 w-5 items-center justify-center rounded-sm bg-rose-600 text-[9px] font-black text-white">
									1
								</span>
								<span>Not Answered ({notAnsweredCount})</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="flex h-5 w-5 items-center justify-center rounded-sm bg-indigo-600 text-[9px] font-black text-white rounded-full">
									1
								</span>
								<span>For Review ({markedCount})</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="relative flex h-5 w-5 items-center justify-center rounded-sm bg-indigo-600 text-[9px] font-black text-white rounded-full">
									1
									<span className="absolute -bottom-1 -right-1 block h-2 w-2 rounded-full bg-emerald-500 border border-white" />
								</span>
								<span>Ans & Review ({answeredMarkedCount})</span>
							</div>
							<div className="flex items-center gap-2 col-span-2">
								<span className="flex h-5 w-5 items-center justify-center rounded-sm border border-[#1a2840]/15 bg-white text-[9px] text-[#1a2840]/40">
									1
								</span>
								<span>Not Visited ({notVisitedCount})</span>
							</div>
						</div>
					</div>

					{/* Question Grid Palette */}
					<div className="flex-1 rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-4 shadow-sm flex flex-col justify-between">
						<div>
							<p className="text-[10px] font-bold uppercase tracking-widest text-[#1a2840]/50 border-b border-[#1a2840]/8 pb-1.5 mb-3.5">
								Question Palette
							</p>

							{/* 60 Questions grid */}
							<div className="grid grid-cols-5 gap-2 max-h-[300px] overflow-y-auto p-1.5">
								{oscillationsQuestions.map((q, idx) => {
									const isCurrent = currentIdx === idx;
									const stat = status[q.id];

									let btnStyle =
										"border-[#1a2840]/15 bg-white text-[#1a2840]/50 hover:bg-[#1a2840]/5";
									let indicatorDot = false;

									if (stat === "answered") {
										btnStyle =
											"bg-emerald-600 border-emerald-600 text-white font-bold";
									} else if (stat === "not_answered") {
										btnStyle =
											"bg-rose-600 border-rose-600 text-white font-bold";
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
											onClick={() => selectQuestion(idx)}
											className={`flex h-9 w-full items-center justify-center rounded-sm border text-xs font-bold transition ${btnStyle} ${
												isCurrent ? "ring-2 ring-offset-2 ring-[#b8872a]" : ""
											}`}
										>
											{q.id}
											{indicatorDot && (
												<span className="absolute -bottom-0.5 -right-0.5 block h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-white" />
											)}
										</button>
									);
								})}
							</div>
						</div>

						{/* Submit Exam Button */}
						<div className="border-t border-[#1a2840]/8 pt-4 mt-4">
							<button
								type="button"
								onClick={() => setShowSubmitModal(true)}
								className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-emerald-700 transition shadow-[0_2px_8px_rgba(16,185,129,0.25)]"
							>
								Submit Mock Test
							</button>
						</div>
					</div>
				</aside>
			</div>

			{/* Submission Confirmation Modal */}
			{showSubmitModal && (
				<SubmitModal
					onClose={() => setShowSubmitModal(false)}
					onSubmit={submitTest}
					isSubmitting={isSubmitting}
					answeredCount={answeredCount + answeredMarkedCount}
					totalCount={oscillationsQuestions.length}
				/>
			)}
		</div>
	);
}
