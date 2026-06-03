import { BookOpen, Trash2 } from "lucide-react";
import {
	getCategoryColor,
	getScoreColor,
	type TestType,
} from "#/components/TestDashboard/utils";

type TestHistoryTableProps = {
	tests: TestType[];
	onDelete: (id: number) => Promise<void>;
};

export function TestHistoryTable({ tests, onDelete }: TestHistoryTableProps) {
	return (
		<article className="rise-in overflow-hidden rounded-[28px] border-2 border-[#1a2840]/10 bg-[#fdfaf4]/90 shadow-[0_4px_6px_rgba(26,40,64,0.05),0_12px_32px_rgba(26,40,64,0.08),inset_0_1px_0_rgba(255,255,255,0.95)]">
			{/* Brass top accent */}
			<div className="h-px w-full bg-[#1a2840]/10" />
			<div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#b8872a]/50 to-transparent" />
			<div className="h-px w-full bg-[#1a2840]/10" />

			<header className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-6">
				<div className="flex items-center gap-3">
					<div className="grid h-10 w-10 place-items-center rounded-[12px] border border-[#1a2840]/12 bg-[#1a2840]/6 text-[#b8872a]">
						<BookOpen className="h-5 w-5" />
					</div>
					<div>
						<h3 className="display-title text-lg font-semibold text-[#1a2840]">
							Outcome Registry
						</h3>
						<p className="text-[10px] font-semibold text-[#1a2840]/55 uppercase tracking-wider">
							{tests.length} tests logged
						</p>
					</div>
				</div>
			</header>

			<div className="border-t-2 border-[#1a2840]/8 bg-[#f0e9d8]/40 px-3 pb-4 pt-3 sm:px-4">
				<div className="overflow-x-auto pb-2 [scrollbar-color:rgba(26,40,64,0.2)_transparent]">
					{tests.length === 0 ? (
						<div className="py-12 text-center text-[#1a2840]/35 space-y-2">
							<p className="text-sm font-bold uppercase tracking-widest">
								No Tests Logged Yet
							</p>
							<p className="body-serif text-xs max-w-sm mx-auto leading-relaxed text-[#1a2840]/55">
								Enter Sakthi&apos;s latest mock, weekly, or chapter scores using
								the Log Test Outcome button above to populate the history index.
							</p>
						</div>
					) : (
						<div className="min-w-[1140px]">
							{/* Table header */}
							<div className="grid grid-cols-[100px_180px_120px_90px_3.5fr_110px_110px_60px] gap-2 px-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#1a2840]/55 pb-2.5">
								<div>Taken Date</div>
								<div>Test Name</div>
								<div>Category</div>
								<div className="text-center">Duration</div>
								<div className="pl-4">Chapters Covered</div>
								<div className="text-center">Raw Score</div>
								<div className="text-center">Percentage</div>
								<div className="text-right pr-2">Action</div>
							</div>

							{/* Rows */}
							<div className="space-y-2">
								{[...tests].reverse().map((t) => {
									const percent = Math.round(
										(t.scoredMarks / t.totalMarks) * 100,
									);
									const scoreColor = getScoreColor(percent);
									const chapters = t.chaptersCovered
										? (JSON.parse(t.chaptersCovered) as string[])
										: [];

									return (
										<div
											key={t.id}
											className="grid grid-cols-[100px_180px_120px_90px_3.5fr_110px_110px_60px] gap-2 items-center rounded-[16px] border border-[#1a2840]/10 bg-[#fdfaf4] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-[#1a2840]/18 hover:bg-[#fdfaf4] hover:shadow-[0_2px_8px_rgba(26,40,64,0.06)] transition-all duration-200"
										>
											<div className="text-xs font-semibold text-[#1a2840]/75">
												{t.testDate}
											</div>
											<div className="text-xs font-bold text-[#1a2840] truncate pr-2">
												{t.testName}
											</div>
											<div>
												<span
													className="inline-flex rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider"
													style={{
														borderColor: `${getCategoryColor(t.testType)}30`,
														backgroundColor: `${getCategoryColor(t.testType)}12`,
														color: getCategoryColor(t.testType),
													}}
												>
													{t.testType}
												</span>
											</div>
											<div className="text-xs text-center font-semibold text-[#1a2840]/70">
												{t.durationMinutes}m
											</div>
											<div className="pl-4 flex flex-wrap gap-1 items-center max-h-[36px] overflow-y-auto">
												{chapters.length === 0 ? (
													<span className="body-serif text-[10px] text-[#1a2840]/45 italic">
														None tagged
													</span>
												) : (
													chapters.map((ch) => (
														<span
															key={ch}
															className="inline-flex items-center rounded-md bg-[#1a2840]/6 border border-[#1a2840]/8 px-2 py-0.5 text-[9px] text-[#1a2840]/65 font-semibold"
														>
															{ch}
														</span>
													))
												)}
											</div>
											<div className="text-xs text-center font-bold text-[#1a2840]">
												{t.scoredMarks}{" "}
												<span className="text-[#1a2840]/40">/</span>{" "}
												{t.totalMarks}
											</div>
											<div className="flex justify-center">
												<span
													className={`inline-flex rounded-full border px-3 py-1 text-xs font-black tracking-wide ${scoreColor.text} ${scoreColor.bg} ${scoreColor.border}`}
												>
													{percent}%
												</span>
											</div>
											<div className="flex justify-end pr-2">
												<button
													type="button"
													onClick={() => onDelete(t.id)}
													className="rounded-lg p-1.5 text-[#1a2840]/30 hover:bg-rose-50 hover:text-rose-600 transition duration-200"
													aria-label="Delete Test Entry"
												>
													<Trash2 className="h-4 w-4" />
												</button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</article>
	);
}
