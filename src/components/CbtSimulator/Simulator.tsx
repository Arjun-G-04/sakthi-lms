import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { addTestPerformance } from "#/lib/test-performance.functions";
import { Instructions } from "./Instructions";
import { MathText } from "./MathText";
import { QuestionPalette } from "./QuestionPalette";
import { Scorecard } from "./Scorecard";
import { SubmitModal } from "./SubmitModal";
import type { Question, QuestionStatus, SectionInfo } from "./types";

interface CbtSimulatorProps {
	testName: string;
	subtitle: string;
	chaptersCovered: string[];
	questions: Question[];
	durationMinutes?: number;
	sections?: SectionInfo[];
	testType?: string;
}

export function Simulator({
	testName,
	subtitle,
	chaptersCovered,
	questions,
	durationMinutes = 60,
	sections,
	testType = "Subject Test",
}: CbtSimulatorProps) {
	const totalDurationSeconds = durationMinutes * 60;

	// Exam states
	const [currentIdx, setCurrentIdx] = useState(0);
	const [answers, setAnswers] = useState<Record<number, number>>({});
	const [status, setStatus] = useState<Record<number, QuestionStatus>>(() => {
		const initStatus: Record<number, QuestionStatus> = {};
		for (const q of questions) {
			initStatus[q.id] =
				q.id === questions[0]?.id ? "not_answered" : "not_visited";
		}
		return initStatus;
	});

	const [timeLeft, setTimeLeft] = useState(totalDurationSeconds);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSubmitModal, setShowSubmitModal] = useState(false);
	const [isStarted, setIsStarted] = useState(false);

	const activeSectionIdx =
		sections && sections.length > 0
			? Math.max(
					0,
					sections.findIndex(
						(s) => currentIdx >= s.startIndex && currentIdx <= s.endIndex,
					),
				)
			: 0;

	const currentQuestion = questions[currentIdx];

	// Submit test handler
	const submitTest = useCallback(async () => {
		setIsSubmitting(true);
		try {
			// Calculate scored marks
			let correct = 0;
			let incorrect = 0;
			for (const q of questions) {
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
					testName,
					chaptersCovered,
					durationMinutes,
					totalMarks: questions.length * 4,
					scoredMarks: Math.max(0, scoredMarks), // Clamp to prevent SQLite schema errors
					testType,
				},
			});

			setIsSubmitted(true);
		} catch (error) {
			console.error("Failed to save mock test performance:", error);
			alert(
				`Error submitting exam: ${
					error instanceof Error ? error.message : String(error)
				}`,
			);
		} finally {
			setIsSubmitting(false);
			setShowSubmitModal(false);
		}
	}, [
		answers,
		questions,
		testName,
		chaptersCovered,
		durationMinutes,
		testType,
	]);

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
			for (const q of questions) {
				initStatus[q.id] =
					q.id === questions[0]?.id ? "not_answered" : "not_visited";
			}
			return initStatus;
		});
		setTimeLeft(totalDurationSeconds);
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
	const selectQuestion = useCallback(
		(idx: number) => {
			setCurrentIdx(idx);
			setStatus((prev) => {
				const qId = questions[idx].id;
				if (prev[qId] === "not_visited") {
					return { ...prev, [qId]: "not_answered" };
				}
				return prev;
			});
		},
		[questions],
	);

	const handleSelectSection = useCallback(
		(secIdx: number) => {
			if (sections?.[secIdx]) {
				selectQuestion(sections[secIdx].startIndex);
			}
		},
		[sections, selectQuestion],
	);

	const handleSaveNext = useCallback(() => {
		if (!currentQuestion) return;
		const qId = currentQuestion.id;
		const answerSelected = answers[qId] !== undefined;

		setStatus((prev) => ({
			...prev,
			[qId]: answerSelected ? "answered" : "not_answered",
		}));

		if (currentIdx < questions.length - 1) {
			selectQuestion(currentIdx + 1);
		}
	}, [currentIdx, answers, currentQuestion, questions.length, selectQuestion]);

	const handleMarkReviewNext = useCallback(() => {
		if (!currentQuestion) return;
		const qId = currentQuestion.id;
		const answerSelected = answers[qId] !== undefined;

		setStatus((prev) => ({
			...prev,
			[qId]: answerSelected ? "answered_marked" : "marked",
		}));

		if (currentIdx < questions.length - 1) {
			selectQuestion(currentIdx + 1);
		}
	}, [currentIdx, answers, currentQuestion, questions.length, selectQuestion]);

	const handleClearResponse = useCallback(() => {
		if (!currentQuestion) return;
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
	}, [currentQuestion]);

	const handlePrev = useCallback(() => {
		if (currentIdx > 0) {
			selectQuestion(currentIdx - 1);
		}
	}, [currentIdx, selectQuestion]);

	const handleSelectOption = useCallback(
		(optionIdx: number) => {
			if (!currentQuestion) return;
			const qId = currentQuestion.id;
			setAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
		},
		[currentQuestion],
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
				title={testName}
				questions={questions}
				answers={answers}
				elapsedTimeSeconds={totalDurationSeconds - timeLeft}
				onReset={handleReset}
				sections={sections}
			/>
		);
	}

	if (!isStarted) {
		return (
			<Instructions
				title={testName}
				subtitle={subtitle}
				totalQuestions={questions.length}
				durationMinutes={durationMinutes}
				onStart={() => setIsStarted(true)}
			/>
		);
	}

	return (
		<div className="fixed inset-0 z-50 flex flex-col gap-2.5 bg-[#fdfaf4] p-3 text-[#1a2840] overflow-hidden select-none">
			{/* Top Bar / Header replicating TCS iON CBT layout */}
			<div className="shrink-0 flex items-center justify-between rounded-xl border border-[#1a2840]/12 bg-[#2d5a3d] px-4 py-2 text-[#fdfaf4] shadow-xs">
				<div className="flex items-center gap-3 min-w-0">
					<h2 className="display-title text-base sm:text-lg font-bold truncate">
						{testName}
					</h2>
					{subtitle && (
						<span className="hidden md:inline-block text-[11px] text-white/70 truncate max-w-md">
							| {subtitle}
						</span>
					)}
				</div>

				<div className="flex items-center gap-3 shrink-0">
					<div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1 border border-white/10">
						<span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
							Time Left
						</span>
						<span
							className={`font-mono text-sm sm:text-base font-black tracking-wider ${
								timeLeft <= 300 ? "text-[#ff7b6b] animate-pulse" : "text-white"
							}`}
						>
							{formatTimer(timeLeft)}
						</span>
					</div>
				</div>
			</div>

			{/* Main Grid layout */}
			<div className="grid gap-3 lg:grid-cols-[1fr_310px] flex-1 min-h-0 overflow-hidden">
				{/* Left Column: Active Question box & Bottom Controls */}
				<div className="flex flex-col rounded-xl border border-[#1a2840]/12 bg-white shadow-xs overflow-hidden h-full min-h-0">
					{/* Question Box Header */}
					<div className="shrink-0 flex items-center justify-between border-b border-[#1a2840]/8 bg-[#f5eedc] px-4 py-2">
						<div className="flex items-center gap-2.5">
							<span className="rounded bg-[#1a2840] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#fdfaf4]">
								Question {currentIdx + 1}
							</span>
							<span className="text-[10px] font-bold uppercase tracking-wider text-[#1a2840]/60">
								MCQ Single Option Correct (+4 / -1)
							</span>
						</div>
					</div>

					{/* Question body */}
					{currentQuestion && (
						<div className="flex-1 min-h-0 p-4 space-y-4 overflow-y-auto">
							<p className="body-serif text-xs sm:text-sm leading-relaxed text-[#1a2840] whitespace-pre-line">
								<MathText text={currentQuestion.text} />
							</p>

							{/* Render SVG diagram if present */}
							{currentQuestion.svgDiagram && (
								<div
									className="my-3 p-3 rounded-lg border border-[#1a2840]/10 bg-[#fdfaf4] flex items-center justify-center shadow-inner"
									// biome-ignore lint/security/noDangerouslySetInnerHtml: static question SVGs are trusted
									dangerouslySetInnerHTML={{
										__html: currentQuestion.svgDiagram,
									}}
								/>
							)}

							{/* Options list */}
							<div className="grid gap-2 mt-3">
								{currentQuestion.options.map((opt, oIdx) => {
									const isSelected = answers[currentQuestion.id] === oIdx;
									return (
										<button
											key={opt}
											type="button"
											onClick={() => handleSelectOption(oIdx)}
											className={`flex items-center gap-3 rounded-lg border p-2.5 text-left transition duration-150 ${
												isSelected
													? "border-[#1a2840] bg-[#1a2840]/5 font-semibold text-[#1a2840]"
													: "border-[#1a2840]/10 bg-[#fdfaf4]/60 hover:border-[#1a2840]/25 text-[#1a2840]/80"
											}`}
										>
											<span
												className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold uppercase transition ${
													isSelected
														? "bg-[#1a2840] text-[#fdfaf4] border-[#1a2840]"
														: "border-[#1a2840]/20 text-[#1a2840]/50"
												}`}
											>
												{String.fromCharCode(65 + oIdx)}
											</span>
											<span className="text-xs leading-normal">
												<MathText text={opt} />
											</span>
										</button>
									);
								})}
							</div>
						</div>
					)}

					{/* Bottom Controls */}
					<div className="shrink-0 flex flex-wrap items-center justify-between gap-2 border-t border-[#1a2840]/8 bg-[#f5eedc] px-3.5 py-2">
						<div className="flex items-center gap-2">
							<button
								type="button"
								onClick={handleMarkReviewNext}
								className="rounded-lg border border-[#1a2840]/20 bg-white px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1a2840]/70 hover:bg-[#1a2840]/5 transition duration-150"
							>
								Mark for Review &amp; Next
							</button>
							<button
								type="button"
								onClick={handleClearResponse}
								className="rounded-lg border border-[#1a2840]/20 bg-white px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1a2840]/70 hover:bg-[#1a2840]/5 transition duration-150"
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
								className="rounded-lg border border-[#1a2840]/10 bg-white px-2.5 py-1.5 text-xs text-[#1a2840] disabled:opacity-30 hover:bg-[#1a2840]/5 transition duration-150"
							>
								<ArrowLeft className="h-3.5 w-3.5" />
							</button>
							<button
								type="button"
								onClick={handleSaveNext}
								className="flex items-center gap-1.5 rounded-lg bg-[#1a2840] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#fdfaf4] hover:bg-[#1a2840]/85 transition duration-150 shadow-xs"
							>
								Save &amp; Next
								<ArrowRight className="h-3.5 w-3.5" />
							</button>
						</div>
					</div>
				</div>

				{/* Right Column: Question Palette & Candidate Dashboard */}
				<QuestionPalette
					questions={questions}
					currentIdx={currentIdx}
					status={status}
					sections={sections}
					activeSectionIdx={activeSectionIdx}
					onSelectSection={handleSelectSection}
					onSelectQuestion={selectQuestion}
					onSubmitClick={() => setShowSubmitModal(true)}
					answeredCount={answeredCount}
					notAnsweredCount={notAnsweredCount}
					markedCount={markedCount}
					answeredMarkedCount={answeredMarkedCount}
					notVisitedCount={notVisitedCount}
				/>
			</div>

			{/* Submission Confirmation Modal */}
			{showSubmitModal && (
				<SubmitModal
					onClose={() => setShowSubmitModal(false)}
					onSubmit={submitTest}
					isSubmitting={isSubmitting}
					answeredCount={answeredCount + answeredMarkedCount}
					totalCount={questions.length}
				/>
			)}
		</div>
	);
}
