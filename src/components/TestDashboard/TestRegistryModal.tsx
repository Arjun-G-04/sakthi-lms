import { Check, Filter, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChaptersMappingGrid } from "#/components/TestDashboard/ChaptersMappingGrid";
import {
	type FormTestState,
	getScoreColor,
} from "#/components/TestDashboard/utils";

type TestRegistryModalProps = {
	showAddForm: boolean;
	setShowAddForm: (show: boolean) => void;
	newTest: FormTestState;
	setNewTest: React.Dispatch<React.SetStateAction<FormTestState>>;
	submittingTest: boolean;
	onSubmit: (e: React.FormEvent) => Promise<void>;
	existingTypes: string[];
	/** When set, the modal is in edit mode for this test ID */
	editingId?: number | null;
};

export function TestRegistryModal({
	showAddForm,
	setShowAddForm,
	newTest,
	setNewTest,
	submittingTest,
	onSubmit,
	existingTypes,
	editingId,
}: TestRegistryModalProps) {
	const [isCreatingNewCategory, setIsCreatingNewCategory] = useState(false);
	const [newCategoryInput, setNewCategoryInput] = useState("");
	const [showExistingTypeSelect, setShowExistingTypeSelect] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Reset category create UI when modal closes
	useEffect(() => {
		if (!showAddForm) {
			setIsCreatingNewCategory(false);
			setNewCategoryInput("");
			setShowExistingTypeSelect(false);
		}
	}, [showAddForm]);

	if (!showAddForm) return null;
	if (!mounted) return null;

	const isEditMode = editingId != null;

	const livePercent =
		newTest.totalMarks > 0
			? Math.round((newTest.scoredMarks / newTest.totalMarks) * 100)
			: 0;
	const liveColor = getScoreColor(livePercent);

	function toggleChapterInForm(chapterName: string) {
		setNewTest((prev) => {
			const active = prev.chaptersCovered.includes(chapterName);
			return {
				...prev,
				chaptersCovered: active
					? prev.chaptersCovered.filter((c: string) => c !== chapterName)
					: [...prev.chaptersCovered, chapterName],
			};
		});
	}

	function resetChapters() {
		setNewTest((prev) => ({
			...prev,
			chaptersCovered: [],
		}));
	}

	return createPortal(
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a2840]/50 backdrop-blur-sm">
			{/* Backdrop click to close */}
			<div
				className="absolute inset-0 cursor-default"
				onClick={() => setShowAddForm(false)}
				aria-hidden="true"
			/>

			{/* Modal Shell */}
			<article className="relative rise-in overflow-hidden rounded-[28px] border-2 border-[#1a2840]/12 bg-[#fdfaf4] shadow-[0_8px_16px_rgba(26,40,64,0.12),0_32px_64px_rgba(26,40,64,0.18)] w-full max-w-5xl max-h-[90vh] flex flex-col">
				{/* Double brass rule */}
				<div className="h-px w-full bg-[#1a2840]/10" />
				<div
					className="h-[3px] w-full bg-gradient-to-r from-transparent to-transparent"
					style={{
						backgroundImage: isEditMode
							? "linear-gradient(to right, transparent, rgba(59,130,246,0.6), transparent)"
							: "linear-gradient(to right, transparent, rgba(184,135,42,0.6), transparent)",
					}}
				/>
				<div className="h-px w-full bg-[#1a2840]/10" />
				<header className="flex items-center justify-between border-b border-[#1a2840]/8 px-6 py-4 bg-[#f5eedc]/60">
					<div className="flex items-center gap-3">
						<h3 className="display-title text-lg font-bold text-[#1a2840] leading-none">
							{isEditMode ? "Edit Test Outcome" : "Test Outcome Registry"}
						</h3>
						{isEditMode && (
							<span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-blue-600">
								Editing
							</span>
						)}
					</div>
					<button
						type="button"
						onClick={() => setShowAddForm(false)}
						className="text-xs font-black uppercase tracking-wider text-[#1a2840]/65 hover:text-[#1a2840] transition"
					>
						Close [Esc]
					</button>
				</header>

				<form
					onSubmit={onSubmit}
					className="flex-1 overflow-y-auto p-6 grid gap-6 md:grid-cols-[400px_1fr]"
				>
					{/* LEFT COLUMN */}
					<div className="space-y-5 border-r border-[#1a2840]/8 pr-0 md:pr-6 flex flex-col justify-between">
						<div className="space-y-4">
							{/* Date & Name */}
							<div className="grid gap-3 sm:grid-cols-2">
								<div className="space-y-1">
									<label
										htmlFor="testDate"
										className="text-[9px] font-black uppercase tracking-wider text-[#1a2840]/70"
									>
										Taken Date
									</label>
									<input
										id="testDate"
										type="date"
										required
										value={newTest.testDate}
										onChange={(e) =>
											setNewTest((p) => ({
												...p,
												testDate: e.target.value,
											}))
										}
										className="w-full rounded-[12px] border border-[#1a2840]/15 bg-[#fdfaf4] px-3.5 py-2.5 text-xs text-[#1a2840] focus:outline-none focus:border-[#b8872a]"
									/>
								</div>
								<div className="space-y-1">
									<label
										htmlFor="testName"
										className="text-[9px] font-black uppercase tracking-wider text-[#1a2840]/70"
									>
										Test Title
									</label>
									<input
										id="testName"
										type="text"
										required
										placeholder="Physics Minor-3"
										value={newTest.testName}
										onChange={(e) =>
											setNewTest((p) => ({
												...p,
												testName: e.target.value,
											}))
										}
										className="w-full rounded-[12px] border border-[#1a2840]/15 bg-[#fdfaf4] px-3.5 py-2.5 text-xs text-[#1a2840] placeholder-[#1a2840]/45 focus:outline-none focus:border-[#b8872a]"
									/>
								</div>
							</div>

							{/* Duration, Scored, Total */}
							<div className="grid gap-3 grid-cols-3">
								<div className="space-y-1">
									<label
										htmlFor="durationMinutes"
										className="text-[9px] font-black uppercase tracking-wider text-[#1a2840]/70"
									>
										Mins
									</label>
									<input
										id="durationMinutes"
										type="number"
										required
										min="1"
										value={newTest.durationMinutes}
										onChange={(e) =>
											setNewTest((p) => ({
												...p,
												durationMinutes: Number(e.target.value),
											}))
										}
										className="w-full rounded-[12px] border border-[#1a2840]/15 bg-[#fdfaf4] px-3 py-2.5 text-xs text-[#1a2840] focus:outline-none focus:border-[#b8872a] text-center"
									/>
								</div>
								<div className="space-y-1">
									<label
										htmlFor="scoredMarks"
										className="text-[9px] font-black uppercase tracking-wider text-[#1a2840]/70"
									>
										Scored
									</label>
									<input
										id="scoredMarks"
										type="number"
										required
										min="0"
										value={newTest.scoredMarks}
										onChange={(e) =>
											setNewTest((p) => ({
												...p,
												scoredMarks: Number(e.target.value),
											}))
										}
										className="w-full rounded-[12px] border border-[#1a2840]/15 bg-[#fdfaf4] px-3 py-2.5 text-xs text-[#1a2840] focus:outline-none focus:border-[#b8872a] text-center"
									/>
								</div>
								<div className="space-y-1">
									<label
										htmlFor="totalMarks"
										className="text-[9px] font-black uppercase tracking-wider text-[#1a2840]/70"
									>
										Total
									</label>
									<input
										id="totalMarks"
										type="number"
										required
										min="1"
										value={newTest.totalMarks}
										onChange={(e) =>
											setNewTest((p) => ({
												...p,
												totalMarks: Number(e.target.value),
											}))
										}
										className="w-full rounded-[12px] border border-[#1a2840]/15 bg-[#fdfaf4] px-3 py-2.5 text-xs text-[#1a2840] focus:outline-none focus:border-[#b8872a] text-center"
									/>
								</div>
							</div>

							{/* STRICT EXPLICIT CATEGORY BUILDER */}
							<div className="space-y-1.5 relative">
								<span className="text-[9px] font-black uppercase tracking-wider text-[#1a2840]/70 block">
									Test Category (Strict Selection)
								</span>

								{!isCreatingNewCategory ? (
									<div className="relative">
										<button
											type="button"
											onClick={() =>
												setShowExistingTypeSelect(!showExistingTypeSelect)
											}
											className="w-full flex items-center justify-between rounded-[12px] border border-[#1a2840]/15 bg-[#fdfaf4] px-4 py-2.5 text-left text-xs text-[#1a2840] focus:outline-none"
										>
											<span className="truncate text-[#1a2840]/75">
												{newTest.testType === ""
													? "Choose category..."
													: newTest.testType}
											</span>
											<Filter className="h-3.5 w-3.5 text-[#1a2840]/55 ml-2" />
										</button>

										{showExistingTypeSelect && (
											<div className="absolute z-40 left-0 right-0 mt-1 max-h-[180px] overflow-y-auto rounded-xl border border-[#1a2840]/12 bg-[#fdfaf4] p-2 shadow-[0_8px_24px_rgba(26,40,64,0.14)]">
												<div className="grid gap-1">
													{existingTypes.map((type) => (
														<button
															key={type}
															type="button"
															onClick={() => {
																setNewTest((p) => ({
																	...p,
																	testType: type,
																}));
																setShowExistingTypeSelect(false);
															}}
															className={`rounded-lg px-3 py-2 text-left text-xs transition ${
																newTest.testType === type
																	? "bg-[#1a2840]/12 text-[#1a2840] font-bold"
																	: "text-[#1a2840]/80 hover:bg-[#1a2840]/5 hover:text-[#1a2840]"
															}`}
														>
															{type}
														</button>
													))}
													<button
														type="button"
														onClick={() => {
															setIsCreatingNewCategory(true);
															setShowExistingTypeSelect(false);
															setNewCategoryInput("");
														}}
														className="rounded-lg px-3 py-2 text-left text-xs text-[#b8872a] hover:bg-[#b8872a]/8 font-bold border border-dashed border-[#b8872a]/20 mt-1 flex items-center justify-between"
													>
														<span>+ Create New Category...</span>
														<Plus className="h-3.5 w-3.5" />
													</button>
												</div>
											</div>
										)}
									</div>
								) : (
									<div className="rounded-xl border border-[#b8872a]/30 bg-[#b8872a]/8 p-3 space-y-2">
										<span className="text-[8px] font-black uppercase tracking-wider text-[#b8872a] block">
											Creating Custom Category
										</span>
										<div className="flex gap-1.5">
											<input
												type="text"
												required
												placeholder="Type custom category name..."
												value={newCategoryInput}
												onChange={(e) => setNewCategoryInput(e.target.value)}
												className="flex-1 rounded-[10px] border border-[#1a2840]/15 bg-[#fdfaf4] px-3 py-1.5 text-xs text-[#1a2840] placeholder-[#1a2840]/45 focus:outline-none"
											/>
											<button
												type="button"
												onClick={() => {
													if (newCategoryInput.trim() === "") {
														alert("Please enter a category name!");
														return;
													}
													const trimmed = newCategoryInput.trim();
													if (
														existingTypes.some(
															(type) =>
																type.toLowerCase() === trimmed.toLowerCase(),
														)
													) {
														alert(
															`Category "${trimmed}" already exists! Please select it from the list.`,
														);
														return;
													}
													setNewTest((p) => ({ ...p, testType: trimmed }));
													setIsCreatingNewCategory(false);
												}}
												className="rounded-[10px] bg-emerald-500 hover:bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white flex items-center justify-center"
												title="Confirm category"
											>
												<Check className="h-3.5 w-3.5" />
											</button>
											<button
												type="button"
												onClick={() => setIsCreatingNewCategory(false)}
												className="rounded-[10px] bg-white/10 hover:bg-white/15 px-3 py-1.5 text-xs font-bold text-[#1a2840] flex items-center justify-center"
											>
												Cancel
											</button>
										</div>
									</div>
								)}
							</div>
						</div>

						{/* SCORE LIVE GLOW PREVIEW */}
						<div className="rounded-[20px] border border-[#1a2840]/12 bg-[#f5eedc]/80 p-4 text-center space-y-3">
							<span className="text-[9px] font-black uppercase tracking-wider text-[#1a2840]/70 block">
								Outcome Tier Preview
							</span>
							<div className="flex items-center justify-center">
								<div
									className={`relative grid h-24 w-24 place-items-center rounded-full border-2 transition-all duration-300 ${liveColor.border} ${liveColor.bg}`}
									style={{
										boxShadow: `0 0 16px ${liveColor.color}25`,
									}}
								>
									<span className={`text-3xl font-black ${liveColor.text}`}>
										{livePercent}%
									</span>
								</div>
							</div>
						</div>

						{/* SUBMIT ACTIONS */}
						<div className="flex gap-2">
							<button
								type="button"
								onClick={() => setShowAddForm(false)}
								className="flex-1 rounded-xl border border-[#1a2840]/15 bg-[#1a2840]/8 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1a2840]/80 hover:bg-[#1a2840]/12 hover:text-[#1a2840] transition duration-200"
							>
								Discard
							</button>
							<button
								type="submit"
								disabled={submittingTest || isCreatingNewCategory}
								className="flex-2 rounded-xl bg-[#1a2840] py-2.5 text-xs font-black uppercase tracking-widest text-[#fdfaf4] hover:bg-[#1a2840]/85 disabled:opacity-30 transition duration-200"
							>
								{submittingTest
									? isEditMode
										? "Saving..."
										: "Saving..."
									: isEditMode
										? "Save Changes"
										: "Log Outcome"}
							</button>
						</div>
					</div>

					{/* RIGHT COLUMN: MULTI-SUBJECT VISUAL CHAPTERS SELECTOR */}
					<ChaptersMappingGrid
						chaptersCovered={newTest.chaptersCovered}
						onToggleChapter={toggleChapterInForm}
						onResetChapters={resetChapters}
					/>
				</form>
			</article>
		</div>,
		document.body,
	);
}
