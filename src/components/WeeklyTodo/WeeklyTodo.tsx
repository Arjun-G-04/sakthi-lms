import {
	Calendar,
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
	Circle,
	Plus,
	Trash2,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { TodoRow } from "#/db/schema";
import {
	createTodo,
	deleteTodo,
	loadTodos,
	toggleTodo,
} from "#/lib/todo.functions";
import {
	CHAPTER_OPTIONS,
	type ChapterOption,
	chapterMap,
	formatDate,
	formatWeekRange,
	getStartOfWeek,
} from "./utils";

export function WeeklyTodo() {
	const [currentWeekStart, setCurrentWeekStart] = useState<Date | null>(null);
	const [todosList, setTodosList] = useState<TodoRow[]>([]);
	const [loading, setLoading] = useState(true);

	const [inputValue, setInputValue] = useState("");
	const [selectedChapter, setSelectedChapter] = useState<ChapterOption | null>(
		null,
	);
	const [showDropdown, setShowDropdown] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const dropdownRef = useRef<HTMLDivElement>(null);

	// Safe local initialization to prevent hydration mismatch
	useEffect(() => {
		setCurrentWeekStart(getStartOfWeek(new Date()));
	}, []);

	const fetchTodos = useCallback(async (weekStart: Date) => {
		setLoading(true);
		try {
			const formatted = formatDate(weekStart);
			const data = await loadTodos({ data: formatted });
			setTodosList(data);
		} catch (error) {
			console.error("Failed to load todos:", error);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		if (currentWeekStart) {
			fetchTodos(currentWeekStart);
		}
	}, [currentWeekStart, fetchTodos]);

	// Filter chapters based on characters after the last '@'
	const lastAtIndex = inputValue.lastIndexOf("@");
	const isTagging =
		lastAtIndex === 0 ||
		(lastAtIndex > 0 && inputValue[lastAtIndex - 1] === " ");

	const query = isTagging ? inputValue.substring(lastAtIndex + 1) : "";
	const filteredChapters = isTagging
		? CHAPTER_OPTIONS.filter((c) =>
				c.chapterTitle.toLowerCase().includes(query.toLowerCase()),
			).slice(0, 8) // Cap at 8 recommendations for visual neatness
		: [];

	useEffect(() => {
		if (isTagging && filteredChapters.length > 0) {
			setShowDropdown(true);
			setActiveIndex(0);
		} else {
			setShowDropdown(false);
		}
	}, [isTagging, filteredChapters.length]);

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setShowDropdown(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handlePrevWeek = () => {
		if (!currentWeekStart) return;
		const prev = new Date(currentWeekStart);
		prev.setDate(prev.getDate() - 7);
		setCurrentWeekStart(prev);
	};

	const handleNextWeek = () => {
		if (!currentWeekStart) return;
		const next = new Date(currentWeekStart);
		next.setDate(next.getDate() + 7);
		setCurrentWeekStart(next);
	};

	const handleThisWeek = () => {
		setCurrentWeekStart(getStartOfWeek(new Date()));
	};

	const selectChapter = (chapter: ChapterOption) => {
		const prefix = inputValue.substring(0, lastAtIndex);
		setInputValue(`${prefix}@${chapter.chapterTitle} `);
		setSelectedChapter(chapter);
		setShowDropdown(false);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (!showDropdown || filteredChapters.length === 0) return;

		if (e.key === "ArrowDown") {
			e.preventDefault();
			setActiveIndex((prev) => (prev + 1) % filteredChapters.length);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			setActiveIndex(
				(prev) =>
					(prev - 1 + filteredChapters.length) % filteredChapters.length,
			);
		} else if (e.key === "Enter") {
			e.preventDefault();
			selectChapter(filteredChapters[activeIndex]);
		} else if (e.key === "Escape") {
			setShowDropdown(false);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!inputValue.trim() || !currentWeekStart) return;

		let contentToSave = inputValue.trim();
		let chapterKeyToSave: string | undefined;

		if (
			selectedChapter &&
			inputValue
				.toLowerCase()
				.includes(`@${selectedChapter.chapterTitle.toLowerCase()}`)
		) {
			chapterKeyToSave = selectedChapter.chapterKey;
			const tagString = `@${selectedChapter.chapterTitle}`;
			const index = contentToSave
				.toLowerCase()
				.indexOf(tagString.toLowerCase());
			if (index !== -1) {
				contentToSave = (
					contentToSave.substring(0, index) +
					contentToSave.substring(index + tagString.length)
				).trim();
			}
		} else {
			// Scan text for manually typed @chapter tags
			const match = inputValue.match(/@([a-zA-Z0-9\s,.-]+)/);
			if (match) {
				const parsedTitle = match[1].trim();
				const found = CHAPTER_OPTIONS.find(
					(c) => c.chapterTitle.toLowerCase() === parsedTitle.toLowerCase(),
				);
				if (found) {
					chapterKeyToSave = found.chapterKey;
					const tagString = `@${parsedTitle}`;
					const index = contentToSave
						.toLowerCase()
						.indexOf(tagString.toLowerCase());
					if (index !== -1) {
						contentToSave = (
							contentToSave.substring(0, index) +
							contentToSave.substring(index + tagString.length)
						).trim();
					}
				}
			}
		}

		if (chapterKeyToSave && contentToSave === "") {
			const matchedChapter = CHAPTER_OPTIONS.find(
				(c) => c.chapterKey === chapterKeyToSave,
			);
			contentToSave = matchedChapter
				? `Study ${matchedChapter.chapterTitle}`
				: inputValue.trim();
		}

		try {
			await createTodo({
				data: {
					content: contentToSave,
					weekStartDate: formatDate(currentWeekStart),
					chapterKey: chapterKeyToSave,
				},
			});
			setInputValue("");
			setSelectedChapter(null);
			fetchTodos(currentWeekStart);
		} catch (error) {
			console.error("Failed to create todo:", error);
		}
	};

	const handleToggle = async (id: number, completed: boolean) => {
		if (!currentWeekStart) return;
		// Optimistic update
		setTodosList((prev) =>
			prev.map((t) => (t.id === id ? { ...t, completed } : t)),
		);
		try {
			await toggleTodo({ data: { id, completed } });
		} catch (error) {
			console.error("Failed to toggle todo:", error);
			fetchTodos(currentWeekStart);
		}
	};

	const handleDelete = async (id: number) => {
		if (!currentWeekStart) return;
		// Optimistic update
		setTodosList((prev) => prev.filter((t) => t.id !== id));
		try {
			await deleteTodo({ data: id });
		} catch (error) {
			console.error("Failed to delete todo:", error);
			fetchTodos(currentWeekStart);
		}
	};

	return (
		<section className="space-y-4">
			<article className="overflow-hidden rounded-[28px] border-2 border-[#1a2840]/10 bg-[#fdfaf4]/90 shadow-[0_4px_6px_rgba(26,40,64,0.05),0_12px_32px_rgba(26,40,64,0.08),inset_0_1px_0_rgba(255,255,255,0.95)]">
				{/* Brass top accent */}
				<div className="h-px w-full bg-[#1a2840]/10" />
				<div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#b8872a]/50 to-transparent" />
				<div className="h-px w-full bg-[#1a2840]/10" />

				<header className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-6">
					<div className="flex items-center gap-3">
						<div className="grid h-10 w-10 place-items-center rounded-[12px] border border-[#1a2840]/12 bg-[#1a2840]/6 text-[#b8872a]">
							<Calendar className="h-5 w-5" />
						</div>
						<div>
							<h3 className="display-title text-lg font-semibold text-[#1a2840]">
								Weekly Goals
							</h3>
							<p className="text-[10px] font-semibold text-[#1a2840]/55 uppercase tracking-wider">
								{todosList.filter((t) => t.completed).length} /{" "}
								{todosList.length} completed
							</p>
						</div>
					</div>

					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={handlePrevWeek}
							className="grid h-8 w-8 place-items-center rounded-lg border border-[#1a2840]/12 bg-[#fdfaf4] text-[#1a2840]/65 hover:border-[#1a2840]/20 hover:bg-[#f5eedc] transition-all"
							aria-label="Previous Week"
						>
							<ChevronLeft className="w-4 h-4" />
						</button>
						<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f5eedc]/80 border border-[#1a2840]/10 text-xs font-semibold text-[#1a2840]">
							<span>
								{currentWeekStart
									? formatWeekRange(currentWeekStart)
									: "Loading..."}
							</span>
						</div>
						<button
							type="button"
							onClick={handleNextWeek}
							className="grid h-8 w-8 place-items-center rounded-lg border border-[#1a2840]/12 bg-[#fdfaf4] text-[#1a2840]/65 hover:border-[#1a2840]/20 hover:bg-[#f5eedc] transition-all"
							aria-label="Next Week"
						>
							<ChevronRight className="w-4 h-4" />
						</button>
						<button
							type="button"
							onClick={handleThisWeek}
							className="rounded-lg border border-[#1a2840]/12 bg-[#fdfaf4] hover:bg-[#f5eedc] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#b8872a] transition-colors"
						>
							This Week
						</button>
					</div>
				</header>

				<div className="border-t-2 border-[#1a2840]/8 bg-[#f0e9d8]/40 px-5 pb-5 pt-4 sm:px-6">
					<form onSubmit={handleSubmit} className="relative mb-6">
						<div className="flex gap-2">
							<div className="relative flex-1">
								<input
									type="text"
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									onKeyDown={handleKeyDown}
									placeholder="Type a new goal... use @ to tag a chapter"
									className="w-full rounded-[12px] border border-[#1a2840]/15 bg-[#fdfaf4] px-4 py-2.5 text-xs text-[#1a2840] placeholder-[#1a2840]/45 focus:outline-none focus:border-[#b8872a] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]"
								/>
							</div>
							<button
								type="submit"
								disabled={!inputValue.trim()}
								className="px-5 py-2.5 rounded-[12px] bg-[#1a2840] hover:bg-[#2c3d59] disabled:opacity-40 disabled:hover:bg-[#1a2840] text-[#fdfaf4] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_2px_8px_rgba(26,40,64,0.15)] flex items-center gap-1.5"
							>
								<Plus className="w-4 h-4" />
								<span>Add</span>
							</button>
						</div>

						{showDropdown && filteredChapters.length > 0 && (
							<div
								ref={dropdownRef}
								className="absolute left-0 right-0 mt-1.5 z-50 max-h-48 overflow-y-auto rounded-xl border border-[#1a2840]/12 bg-[#fdfaf4] p-2 shadow-[0_8px_24px_rgba(26,40,64,0.14)] flex flex-col gap-1"
							>
								{filteredChapters.map((chapter, idx) => (
									<button
										key={chapter.chapterKey}
										type="button"
										onClick={() => selectChapter(chapter)}
										className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center justify-between ${
											idx === activeIndex
												? "bg-[#1a2840]/12 text-[#1a2840] font-bold"
												: "text-[#1a2840]/80 hover:bg-[#1a2840]/5 hover:text-[#1a2840]"
										}`}
									>
										<span className="truncate mr-4">
											{chapter.chapterTitle}
										</span>
										<span
											className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border flex-shrink-0"
											style={{
												borderColor: `${chapter.accent}30`,
												backgroundColor: `${chapter.accent}12`,
												color: chapter.accent,
											}}
										>
											{chapter.subject}
										</span>
									</button>
								))}
							</div>
						)}
					</form>

					{loading ? (
						<div className="flex flex-col items-center justify-center py-12 gap-3 text-sm text-[#1a2840]/45">
							<div className="w-6 h-6 border-2 border-[#b8872a] border-t-transparent rounded-full animate-spin" />
							<span>Loading weekly goals...</span>
						</div>
					) : todosList.length === 0 ? (
						<div className="py-12 text-center text-[#1a2840]/35 space-y-2">
							<Calendar className="h-8 w-8 text-[#1a2840]/30 mx-auto" />
							<p className="text-sm font-bold uppercase tracking-widest">
								No Goals Planned Yet
							</p>
							<p className="body-serif text-xs max-w-sm mx-auto leading-relaxed text-[#1a2840]/55">
								Organize Sakthi&apos;s weekly study sprint. Add tasks above and
								tag specific chapters using the @ symbol.
							</p>
						</div>
					) : (
						<div className="space-y-2">
							{todosList.map((todo) => {
								const chapter = todo.chapterKey
									? chapterMap.get(todo.chapterKey)
									: null;
								return (
									<div
										key={todo.id}
										className={`grid grid-cols-[auto_1fr_auto] gap-3 items-center rounded-[16px] border px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-200 ${
											todo.completed
												? "border-[#1a2840]/5 bg-[#f5eedc]/35 opacity-60"
												: "border-[#1a2840]/10 bg-[#fdfaf4] hover:border-[#1a2840]/18 hover:shadow-[0_2px_8px_rgba(26,40,64,0.06)]"
										}`}
									>
										<button
											type="button"
											onClick={() => handleToggle(todo.id, !todo.completed)}
											className="text-[#1a2840]/30 hover:text-[#b8872a] transition-colors focus:outline-none flex-shrink-0"
											aria-label={
												todo.completed ? "Mark incomplete" : "Mark complete"
											}
										>
											{todo.completed ? (
												<CheckCircle2 className="h-5 w-5 text-[#2d5a3d]" />
											) : (
												<Circle className="h-5 w-5" />
											)}
										</button>

										<div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 min-w-0">
											<span
												className={`text-sm text-[#1a2840] leading-relaxed break-words ${
													todo.completed
														? "line-through text-[#1a2840]/45 font-normal"
														: "font-semibold"
												}`}
											>
												{todo.content}
											</span>
											{chapter && (
												<span
													className={`text-xs italic underline font-bold flex-shrink-0 decoration-2 underline-offset-2 ${
														todo.completed
															? "text-[#1a2840]/45 line-through font-normal"
															: "text-[#1a2840]/85"
													}`}
													style={{ textDecorationColor: chapter.accent }}
												>
													@{chapter.chapterTitle}
												</span>
											)}
										</div>

										<button
											type="button"
											onClick={() => handleDelete(todo.id)}
											className="rounded-lg p-1.5 text-[#1a2840]/30 hover:bg-rose-50 hover:text-rose-600 transition duration-200"
											aria-label="Delete goal"
										>
											<Trash2 className="h-4 w-4" />
										</button>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</article>
		</section>
	);
}
