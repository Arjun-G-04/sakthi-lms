import { Check, Plus, Settings2 } from "lucide-react";
import { useMemo, useState } from "react";
import type {
	CreateMilestoneInput,
	Milestone,
	MilestoneCategory,
	MilestoneStatus,
} from "#/lib/milestone.functions";
import {
	createMilestone,
	deleteMilestone,
	toggleStatusMilestone,
} from "#/lib/milestone.functions";
import { MilestoneModal } from "./MilestoneModal";

type MilestoneTimelineProps = {
	milestones: Milestone[];
	setMilestones: React.Dispatch<React.SetStateAction<Milestone[]>>;
};

const CATEGORIES: Record<
	MilestoneCategory,
	{ label: string; badge: string; dotColor: string }
> = {
	test: {
		label: "Test",
		badge: "border-[#b8872a]/30 bg-[#b8872a]/15 text-[#8c651e]",
		dotColor: "#b8872a",
	},
	revision: {
		label: "Revision",
		badge: "border-[#2d5a3d]/30 bg-[#2d5a3d]/15 text-[#2d5a3d]",
		dotColor: "#2d5a3d",
	},
};

export function MilestoneTimeline({
	milestones,
	setMilestones,
}: MilestoneTimelineProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [hoveredId, setHoveredId] = useState<number | null>(null);

	const upcomingMilestones = useMemo(() => {
		return milestones
			.filter((m) => m.status !== "completed")
			.sort(
				(a, b) =>
					new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime(),
			);
	}, [milestones]);

	// Calculate maximum time horizon for proportional rail
	const maxHorizonDays = useMemo(() => {
		const daysList = upcomingMilestones.map(
			(m) => getDaysRemaining(m.targetDate).days,
		);
		const maxPositive = Math.max(0, ...daysList);
		return Math.max(30, Math.ceil(maxPositive / 10) * 10);
	}, [upcomingMilestones]);

	async function handleCreate(data: CreateMilestoneInput) {
		const res = await createMilestone({ data });
		if (res.ok && res.milestone) {
			const newMilestone: Milestone = {
				id: res.milestone.id,
				title: res.milestone.title,
				targetDate: res.milestone.targetDate,
				category: (res.milestone.category as MilestoneCategory) || "test",
				description: res.milestone.description ?? null,
				status: (res.milestone.status as MilestoneStatus) || "upcoming",
				createdAt: res.milestone.createdAt,
			};
			setMilestones((curr) => [...curr, newMilestone]);
		}
	}

	async function handleToggleStatus(id: number, status: MilestoneStatus) {
		setMilestones((curr) =>
			curr.map((m) => (m.id === id ? { ...m, status } : m)),
		);
		await toggleStatusMilestone({ data: { id, status } });
	}

	async function handleDelete(id: number) {
		setMilestones((curr) => curr.filter((m) => m.id !== id));
		await deleteMilestone({ data: id });
	}

	return (
		<section className="overflow-visible rounded-[20px] border-2 border-[#1a2840]/12 bg-[#fdfaf4]/90 px-5 py-4 shadow-[0_4px_6px_rgba(26,40,64,0.06),0_12px_32px_rgba(26,40,64,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-sm sm:px-6">
			{/* Top Bar */}
			<div className="flex items-center justify-between gap-3 mb-5">
				<div className="flex items-center gap-2">
					<p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b8872a]">
						Milestones
					</p>
					<span className="rounded-full bg-[#1a2840]/8 px-2 py-0.2 text-[10px] font-bold text-[#1a2840]/60">
						{upcomingMilestones.length}
					</span>
				</div>

				<button
					type="button"
					onClick={() => setIsModalOpen(true)}
					className="flex items-center gap-1 rounded-[8px] border border-[#1a2840]/12 bg-[#f5eedc]/80 px-2.5 py-1 text-xs font-bold text-[#1a2840] hover:bg-[#ede3ce]"
				>
					<Settings2 className="h-3 w-3 text-[#b8872a]" />
					<span>Manage</span>
				</button>
			</div>

			{upcomingMilestones.length === 0 ? (
				<div className="flex items-center justify-between rounded-[12px] border border-dashed border-[#1a2840]/15 bg-[#f8f3e6]/40 px-4 py-3">
					<p className="text-xs text-[#1a2840]/55">No upcoming milestones</p>
					<button
						type="button"
						onClick={() => setIsModalOpen(true)}
						className="flex items-center gap-1 rounded-[6px] bg-[#1a2840] px-2.5 py-1 text-xs font-bold text-[#fdfaf4] hover:bg-[#253959]"
					>
						<Plus className="h-3 w-3" />
						Add
					</button>
				</div>
			) : (
				/* Proportional Physical Time Rail */
				<div className="relative pt-7 pb-3">
					{/* Horizon labels */}
					<div className="relative flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-[#1a2840]/40 mb-3">
						<span className="flex items-center gap-1 text-[#b8872a]">
							<span className="h-1.5 w-1.5 rounded-full bg-[#b8872a]" />
							Today
						</span>
						<span>+{maxHorizonDays}d</span>
					</div>

					{/* Continuous Rail Line */}
					<div className="relative h-2 w-full rounded-full bg-[#1a2840]/10">
						<div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#b8872a]/60 via-[#2d5a3d]/40 to-[#1a2840]/20 w-full" />

						{/* Milestone Nodes */}
						{upcomingMilestones.map((m) => {
							const { days, label } = getDaysRemaining(m.targetDate);
							const clampedDays = Math.max(0, days);
							const posPercent = Math.min(
								95,
								Math.max(5, (clampedDays / maxHorizonDays) * 100),
							);
							const cat = CATEGORIES[m.category] || CATEGORIES.test;
							const isHovered = hoveredId === m.id;
							const isImmediate = days >= 0 && days <= 3;

							return (
								<div
									key={m.id}
									className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
									style={{ left: `${posPercent}%` }}
								>
									{/* Distance Pill (strictly above dot) */}
									<div className="pointer-events-none absolute bottom-full mb-2 flex justify-center">
										<span
											className={`whitespace-nowrap rounded-[6px] px-1.5 py-0.5 text-[9px] font-bold shadow-xs transition-all ${
												isHovered
													? "bg-[#1a2840] text-[#fdfaf4] scale-110"
													: isImmediate
														? "bg-[#b8872a] text-[#fdfaf4]"
														: "bg-[#1a2840]/12 text-[#1a2840]"
											}`}
										>
											{days === 0 ? "Today" : `${days}d`}
										</span>
									</div>

									{/* The Dot itself (centered exactly on the rail line) */}
									<button
										type="button"
										aria-label={`${m.title} (${days} days)`}
										onMouseEnter={() => setHoveredId(m.id)}
										onMouseLeave={() => setHoveredId(null)}
										onFocus={() => setHoveredId(m.id)}
										onBlur={() => setHoveredId(null)}
										onClick={() =>
											setHoveredId((curr) => (curr === m.id ? null : m.id))
										}
										className={`block h-3.5 w-3.5 rounded-full border-2 border-[#fdfaf4] shadow-md transition-all focus:outline-none ${
											isHovered
												? "scale-140 ring-4 ring-[#1a2840]/20"
												: isImmediate
													? "scale-115 ring-2 ring-[#b8872a]/40"
													: "hover:scale-125"
										}`}
										style={{ backgroundColor: cat.dotColor }}
									/>

									{/* Hover Card (directly above dot and pill, centered) */}
									{isHovered && (
										<div
											className={`absolute z-50 w-64 rounded-[16px] border-2 border-[#1a2840]/15 bg-[#fdfaf4] p-3.5 shadow-[0_12px_28px_rgba(26,40,64,0.18)] backdrop-blur-md bottom-full mb-8 ${
												posPercent < 15
													? "left-0 -translate-x-2"
													: posPercent > 85
														? "right-0 translate-x-2"
														: "left-1/2 -translate-x-1/2"
											}`}
										>
											{/* Top Accent */}
											<div className="h-[2px] w-full bg-[#b8872a] rounded-full mb-2.5" />

											{/* Target Date Header */}
											<div className="flex items-baseline justify-between gap-2">
												<span className="text-sm font-extrabold text-[#1a2840] tracking-tight">
													{formatDisplayDate(m.targetDate)}
												</span>
												<span
													className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
														isImmediate
															? "bg-[#b8872a]/20 text-[#8c651e]"
															: "bg-[#1a2840]/8 text-[#1a2840]/70"
													}`}
												>
													{label}
												</span>
											</div>

											{/* Big Milestone Name */}
											<h3 className="mt-1 text-xs font-bold leading-snug text-[#1a2840]">
												{m.title}
											</h3>

											{/* Category & Description */}
											<div className="mt-2 flex items-center gap-1.5">
												<span
													className={`rounded-[4px] border px-1.5 py-0.2 text-[9px] font-bold uppercase ${cat.badge}`}
												>
													{cat.label}
												</span>
												{m.description && (
													<span className="text-[10px] text-[#1a2840]/60 truncate">
														{m.description}
													</span>
												)}
											</div>

											{/* Mark Done Action */}
											<div className="mt-2.5 flex justify-end border-t border-[#1a2840]/8 pt-1.5">
												<button
													type="button"
													onClick={() => handleToggleStatus(m.id, "completed")}
													className="flex items-center gap-1 rounded-[6px] bg-[#2d5a3d]/10 px-2 py-0.5 text-[10px] font-bold text-[#2d5a3d] hover:bg-[#2d5a3d]/20 transition-colors"
												>
													<Check className="h-3 w-3" />
													Mark Done
												</button>
											</div>

											{/* Pointer Arrow */}
											<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rotate-45 border-r-2 border-b-2 border-[#1a2840]/15 bg-[#fdfaf4]" />
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			)}

			<MilestoneModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				milestones={milestones}
				onCreate={handleCreate}
				onToggleStatus={handleToggleStatus}
				onDelete={handleDelete}
			/>
		</section>
	);
}

function getDaysRemaining(dateStr: string): { days: number; label: string } {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = dateStr.split("-").map(Number);
	const target = new Date(year, month - 1, day);

	const diffTime = target.getTime() - today.getTime();
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	if (diffDays === 0) return { days: 0, label: "Today" };
	if (diffDays === 1) return { days: 1, label: "Tomorrow" };
	if (diffDays > 1) return { days: diffDays, label: `In ${diffDays}d` };
	return { days: diffDays, label: `${Math.abs(diffDays)}d ago` };
}

function formatDisplayDate(dateStr: string): string {
	try {
		const [year, month, day] = dateStr.split("-").map(Number);
		const d = new Date(year, month - 1, day);
		return d.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
		});
	} catch {
		return dateStr;
	}
}
