import {
	Activity,
	Calendar as CalendarIcon,
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
	Egg,
	EyeOff,
	Footprints,
	Plus,
	Salad,
	Sparkles,
	Target,
} from "lucide-react";
import { type NonNegotiableStatus, TRACK_METAS, type TrackId } from "./types";
import { formatDateDisplay, formatDuration, getTodayString } from "./utils";

interface RoutineHeaderProps {
	selectedDate: string;
	onDateChange: (newDate: string) => void;
	activeTrackId: TrackId;
	onSelectTrack: (trackId: TrackId) => void;
	completedCount: number;
	totalCount: number;
	deepFocusLoggedMinutes: number;
	targetDeepFocusMinutes: number;
	nonNegotiables?: NonNegotiableStatus;
	onToggleNonNegotiable: (key: keyof NonNegotiableStatus) => void;
	onOpenAddBlock: () => void;
}

export function RoutineHeader({
	selectedDate,
	onDateChange,
	activeTrackId,
	onSelectTrack,
	completedCount,
	totalCount,
	deepFocusLoggedMinutes,
	targetDeepFocusMinutes,
	nonNegotiables = {},
	onToggleNonNegotiable,
	onOpenAddBlock,
}: RoutineHeaderProps) {
	const isToday = selectedDate === getTodayString();
	const percent =
		totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
	const focusPercent =
		targetDeepFocusMinutes > 0
			? Math.min(
					100,
					Math.round((deepFocusLoggedMinutes / targetDeepFocusMinutes) * 100),
				)
			: 0;

	const handlePrevDay = () => {
		const [y, m, d] = selectedDate.split("-").map(Number);
		const cur = new Date(y, m - 1, d);
		cur.setDate(cur.getDate() - 1);
		const ny = cur.getFullYear();
		const nm = String(cur.getMonth() + 1).padStart(2, "0");
		const nd = String(cur.getDate()).padStart(2, "0");
		onDateChange(`${ny}-${nm}-${nd}`);
	};

	const handleNextDay = () => {
		const [y, m, d] = selectedDate.split("-").map(Number);
		const cur = new Date(y, m - 1, d);
		cur.setDate(cur.getDate() + 1);
		const ny = cur.getFullYear();
		const nm = String(cur.getMonth() + 1).padStart(2, "0");
		const nd = String(cur.getDate()).padStart(2, "0");
		onDateChange(`${ny}-${nm}-${nd}`);
	};

	return (
		<div className="space-y-4">
			{/* Top Bar: Date Switcher + Ad-hoc Action */}
			<div className="flex flex-wrap items-center justify-between gap-3">
				{/* Date Navigator */}
				<div className="flex items-center gap-2 rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-1.5 shadow-[0_2px_8px_rgba(26,40,64,0.06)]">
					<button
						type="button"
						onClick={handlePrevDay}
						className="flex h-8 w-8 items-center justify-center rounded-xl text-[#1a2840]/60 hover:bg-[#1a2840]/5 hover:text-[#1a2840] transition-colors"
						title="Previous day"
					>
						<ChevronLeft className="h-4 w-4" />
					</button>

					<div className="flex items-center gap-2 px-2">
						<CalendarIcon className="h-4 w-4 text-[#b8872a]" />
						<input
							type="date"
							value={selectedDate}
							onChange={(e) => {
								if (e.target.value) onDateChange(e.target.value);
							}}
							className="bg-transparent text-xs font-bold text-[#1a2840] focus:outline-none cursor-pointer"
						/>
						<span className="hidden sm:inline text-xs font-medium text-[#1a2840]/60">
							({formatDateDisplay(selectedDate)})
						</span>
					</div>

					<button
						type="button"
						onClick={handleNextDay}
						className="flex h-8 w-8 items-center justify-center rounded-xl text-[#1a2840]/60 hover:bg-[#1a2840]/5 hover:text-[#1a2840] transition-colors"
						title="Next day"
					>
						<ChevronRight className="h-4 w-4" />
					</button>

					{!isToday && (
						<button
							type="button"
							onClick={() => onDateChange(getTodayString())}
							className="ml-1 rounded-xl bg-[#b8872a]/15 px-2.5 py-1 text-[11px] font-bold text-[#916518] hover:bg-[#b8872a]/25 transition-colors"
						>
							Today
						</button>
					)}
				</div>

				{/* Add Custom / Interruption Button */}
				<button
					type="button"
					onClick={onOpenAddBlock}
					className="inline-flex items-center gap-1.5 rounded-2xl border border-[#1a2840]/15 bg-[#fdfaf4] px-4 py-2 text-xs font-bold text-[#1a2840] shadow-xs hover:border-[#b8872a] hover:bg-[#faf6ee] transition-colors"
				>
					<Plus className="h-4 w-4 text-[#b8872a]" />
					<span>Add Block / Interruption</span>
				</button>
			</div>

			{/* Track Selector Segmented Control */}
			<div className="rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-2 shadow-[0_2px_8px_rgba(26,40,64,0.06)]">
				<div className="grid gap-2 sm:grid-cols-3">
					{(["A", "B", "C"] as TrackId[]).map((tid) => {
						const meta = TRACK_METAS[tid];
						const isActive = activeTrackId === tid;
						return (
							<button
								key={tid}
								type="button"
								onClick={() => onSelectTrack(tid)}
								className={`flex flex-col items-start rounded-xl p-3 text-left transition-all ${
									isActive
										? "bg-[#1a2840] text-[#fdfaf4] shadow-md ring-2 ring-[#b8872a]/50"
										: "bg-[#faf6ee]/70 text-[#1a2840] hover:bg-[#faf6ee] hover:border-[#1a2840]/20 border border-transparent"
								}`}
							>
								<div className="flex w-full items-center justify-between">
									<span
										className={`text-xs font-extrabold uppercase tracking-wider ${
											isActive ? "text-[#d4a443]" : "text-[#b8872a]"
										}`}
									>
										{meta.title}
									</span>
									<span
										className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
											isActive
												? "bg-[#fdfaf4]/20 text-[#fdfaf4]"
												: "bg-[#1a2840]/5 text-[#1a2840]/70"
										}`}
									>
										Target: {meta.targetDeepFocusLabel}
									</span>
								</div>
								<p className="mt-1 text-sm font-semibold">{meta.subtitle}</p>
								<p
									className={`text-[11px] ${
										isActive ? "text-[#fdfaf4]/70" : "text-[#1a2840]/50"
									}`}
								>
									{meta.hours}
								</p>
							</button>
						);
					})}
				</div>
			</div>

			{/* Live Progress Bar & Quick Status Pills */}
			<div className="grid gap-3 lg:grid-cols-3">
				{/* Block Completion Card */}
				<div className="flex flex-col justify-between rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-4 shadow-[0_2px_8px_rgba(26,40,64,0.06)]">
					<div className="flex items-center justify-between">
						<span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1a2840]/70">
							<Activity className="h-3.5 w-3.5 text-[#2d5a3d]" />
							Daily Execution
						</span>
						<span className="text-sm font-extrabold text-[#1a2840]">
							{completedCount}/{totalCount}{" "}
							<span className="text-xs font-normal text-[#1a2840]/60">
								({percent}%)
							</span>
						</span>
					</div>
					<div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#1a2840]/10">
						<div
							className="h-full rounded-full bg-gradient-to-r from-[#2d5a3d] to-[#3d7a52] transition-all duration-300"
							style={{ width: `${percent}%` }}
						/>
					</div>
				</div>

				{/* Deep Focus Logged Card */}
				<div className="flex flex-col justify-between rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-4 shadow-[0_2px_8px_rgba(26,40,64,0.06)]">
					<div className="flex items-center justify-between">
						<span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1a2840]/70">
							<Target className="h-3.5 w-3.5 text-[#b8872a]" />
							Deep Focus Logged
						</span>
						<span className="text-sm font-extrabold text-[#2d5a3d]">
							{formatDuration(deepFocusLoggedMinutes)}{" "}
							<span className="text-xs font-medium text-[#1a2840]/50">
								/ {formatDuration(targetDeepFocusMinutes)}
							</span>
						</span>
					</div>
					<div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#1a2840]/10">
						<div
							className="h-full rounded-full bg-gradient-to-r from-[#b8872a] to-[#d4a443] transition-all duration-300"
							style={{ width: `${focusPercent}%` }}
						/>
					</div>
				</div>

				{/* Non-Negotiable Quick Pills */}
				<div className="flex flex-col justify-between rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-4 shadow-[0_2px_8px_rgba(26,40,64,0.06)]">
					<span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1a2840]/70">
						<Sparkles className="h-3.5 w-3.5 text-[#b8872a]" />
						Daily Non-Negotiables
					</span>
					<div className="mt-2.5 flex flex-wrap gap-1.5">
						{/* Walk */}
						<button
							type="button"
							onClick={() => onToggleNonNegotiable("walk")}
							className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-bold transition-colors ${
								nonNegotiables.walk
									? "bg-[#2d5a3d] text-[#fdfaf4]"
									: "bg-[#1a2840]/6 text-[#1a2840]/70 hover:bg-[#1a2840]/10"
							}`}
						>
							<Footprints className="h-3 w-3" />
							<span>Walk</span>
							{nonNegotiables.walk && <CheckCircle2 className="h-3 w-3" />}
						</button>

						{/* 4 Eggs */}
						<button
							type="button"
							onClick={() => onToggleNonNegotiable("fourEggs")}
							className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-bold transition-colors ${
								nonNegotiables.fourEggs
									? "bg-[#b8872a] text-[#fdfaf4]"
									: "bg-[#1a2840]/6 text-[#1a2840]/70 hover:bg-[#1a2840]/10"
							}`}
						>
							<Egg className="h-3 w-3" />
							<span>4 Eggs</span>
							{nonNegotiables.fourEggs && <CheckCircle2 className="h-3 w-3" />}
						</button>

						{/* Veggies First */}
						<button
							type="button"
							onClick={() => onToggleNonNegotiable("veggiesFirst")}
							className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-bold transition-colors ${
								nonNegotiables.veggiesFirst
									? "bg-[#2d5a3d] text-[#fdfaf4]"
									: "bg-[#1a2840]/6 text-[#1a2840]/70 hover:bg-[#1a2840]/10"
							}`}
						>
							<Salad className="h-3 w-3" />
							<span>Veggies First</span>
							{nonNegotiables.veggiesFirst && (
								<CheckCircle2 className="h-3 w-3" />
							)}
						</button>

						{/* Zero Reels */}
						<button
							type="button"
							onClick={() => onToggleNonNegotiable("zeroReels")}
							className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-bold transition-colors ${
								nonNegotiables.zeroReels
									? "bg-indigo-700 text-[#fdfaf4]"
									: "bg-[#1a2840]/6 text-[#1a2840]/70 hover:bg-[#1a2840]/10"
							}`}
						>
							<EyeOff className="h-3 w-3" />
							<span>Zero Reels</span>
							{nonNegotiables.zeroReels && <CheckCircle2 className="h-3 w-3" />}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
