import {
	CheckCircle2,
	Circle,
	Clock,
	MessageSquare,
	Trash2,
} from "lucide-react";
import type { RoutineBlock } from "./types";
import {
	calculateDrift,
	calculateDuration,
	formatDuration,
	getCategoryCardStyle,
} from "./utils";

interface RoutineTimelineProps {
	blocks: RoutineBlock[];
	onToggleBlock: (blockId: string) => void;
	onEditTiming: (block: RoutineBlock) => void;
	onDeleteBlock?: (blockId: string) => void;
}

export function RoutineTimeline({
	blocks,
	onToggleBlock,
	onEditTiming,
	onDeleteBlock,
}: RoutineTimelineProps) {
	if (blocks.length === 0) {
		return (
			<div className="rounded-2xl border border-dashed border-[#1a2840]/15 bg-[#fdfaf4]/50 p-8 text-center">
				<p className="text-sm text-[#1a2840]/60">
					No routine blocks scheduled for this day. Select a track or add a
					block above.
				</p>
			</div>
		);
	}

	return (
		<div className="space-y-2.5">
			{blocks.map((block, index) => {
				const drift = calculateDrift(block.plannedStart, block.actualStart);
				const cardStyle = getCategoryCardStyle(block.category, block.completed);
				const duration =
					block.actualStart && block.actualEnd
						? calculateDuration(block.actualStart, block.actualEnd)
						: calculateDuration(block.plannedStart, block.plannedEnd);

				return (
					<div
						key={block.id}
						className={`group relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 overflow-hidden rounded-2xl border p-4 transition-all duration-200 ${cardStyle.borderColor} ${cardStyle.gradientBg} shadow-[0_3px_12px_rgba(26,40,64,0.07),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-md`}
					>
						{/* Prominent Tactile Notebook Paper Texture & Micro-Grid */}
						<div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgba(26,40,64,0.20)_1px,transparent_1px)] [background-size:12px_12px]" />
						<div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_bottom,rgba(26,40,64,0.12)_1px,transparent_1px)] [background-size:100%_24px]" />

						{/* Left: Checkbox + Content */}
						<div className="relative z-10 flex items-start gap-3 flex-1 min-w-0">
							{/* Completion Checkbox */}
							<button
								type="button"
								onClick={() => onToggleBlock(block.id)}
								className="mt-0.5 shrink-0 rounded-lg text-[#1a2840]/30 hover:text-[#2d5a3d] transition-colors focus:outline-none"
								title={block.completed ? "Mark incomplete" : "Mark complete"}
								aria-label={
									block.completed ? "Mark incomplete" : "Mark complete"
								}
							>
								{block.completed ? (
									<CheckCircle2 className="h-5 w-5 text-[#2d5a3d]" />
								) : (
									<Circle className="h-5 w-5 text-[#1a2840]/30 hover:text-[#1a2840]/60" />
								)}
							</button>

							{/* Main Content */}
							<div className="space-y-1 min-w-0 flex-1">
								{/* Step Number + Drift Badge + Custom Indicator */}
								<div className="flex flex-wrap items-center gap-1.5">
									<span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1a2840]/45">
										#{index + 1}
									</span>

									{/* Drift Badge (if timing was adjusted or drifted) */}
									{block.actualStart && (
										<span
											className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
												drift.status === "late"
													? "bg-rose-100 text-rose-800"
													: drift.status === "early"
														? "bg-sky-100 text-sky-800"
														: "bg-emerald-100 text-emerald-800"
											}`}
										>
											{drift.badgeText}
										</span>
									)}

									{block.isCustom && (
										<span className="rounded-md bg-[#b8872a]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#b8872a]">
											Custom
										</span>
									)}
								</div>

								{/* Title */}
								<p
									className={`text-sm font-bold text-[#1a2840] leading-snug ${
										block.completed ? "line-through text-[#1a2840]/55" : ""
									}`}
								>
									{block.title}
								</p>

								{/* Details / description */}
								{block.details && (
									<p className="text-xs text-[#1a2840]/65">{block.details}</p>
								)}

								{/* Delay Note pill */}
								{block.delayNote && (
									<div className="mt-1 flex items-center gap-1.5 text-xs text-amber-900/90 bg-amber-100/70 rounded-lg px-2 py-0.5 border border-amber-300/60 w-fit">
										<MessageSquare className="h-3 w-3 shrink-0" />
										<span className="italic">{block.delayNote}</span>
									</div>
								)}
							</div>
						</div>

						{/* Right: Minimalist Category Tag + Clickable Time Pill */}
						<div className="relative z-10 flex flex-wrap sm:flex-col items-end justify-between sm:justify-center gap-1.5 border-t sm:border-t-0 border-[#1a2840]/10 pt-2 sm:pt-0 shrink-0">
							{/* Minimalist category text on right hand side */}
							<div className="flex items-center gap-2">
								<span
									className={`text-[11px] font-black uppercase tracking-[0.22em] ${cardStyle.tagColor}`}
								>
									{block.category}
								</span>

								{block.isCustom && onDeleteBlock && (
									<button
										type="button"
										onClick={() => onDeleteBlock(block.id)}
										className="rounded-lg p-0.5 text-[#1a2840]/40 hover:bg-rose-100 hover:text-rose-700 transition-colors"
										title="Remove custom block"
									>
										<Trash2 className="h-3.5 w-3.5" />
									</button>
								)}
							</div>

							{/* Clickable Time Pill */}
							<button
								type="button"
								onClick={() => onEditTiming(block)}
								className="group/time inline-flex items-center gap-1.5 rounded-xl border border-[#1a2840]/15 bg-[#faf6ee]/95 px-2.5 py-1 text-xs font-semibold text-[#1a2840] hover:border-[#b8872a] hover:bg-[#fdfaf4] transition-colors shadow-xs"
								title="Click to adjust timing or log delay"
							>
								<Clock className="h-3.5 w-3.5 text-[#b8872a]" />
								<span>
									{block.actualStart
										? `${block.actualStart} – ${block.actualEnd || block.plannedEnd}`
										: `${block.plannedStart} – ${block.plannedEnd}`}
								</span>
								<span className="text-[10px] text-[#1a2840]/45 font-normal">
									({formatDuration(duration)})
								</span>
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
