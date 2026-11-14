import { Clock, CornerDownRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { RoutineBlock } from "./types";
import { calculateDrift } from "./utils";

interface BlockDelayModalProps {
	block: RoutineBlock | null;
	isOpen: boolean;
	onClose: () => void;
	onSave: (updatedBlock: RoutineBlock, cascadeShiftMinutes?: number) => void;
}

export function BlockDelayModal({
	block,
	isOpen,
	onClose,
	onSave,
}: BlockDelayModalProps) {
	const [actualStart, setActualStart] = useState(
		block?.actualStart || block?.plannedStart || "",
	);
	const [actualEnd, setActualEnd] = useState(
		block?.actualEnd || block?.plannedEnd || "",
	);
	const [delayNote, setDelayNote] = useState(block?.delayNote || "");
	const [applyCascade, setApplyCascade] = useState(true);

	useEffect(() => {
		if (block) {
			setActualStart(block.actualStart || block.plannedStart);
			setActualEnd(block.actualEnd || block.plannedEnd);
			setDelayNote(block.delayNote || "");
			setApplyCascade(true);
		}
	}, [block]);

	if (!isOpen || !block) return null;

	const drift = calculateDrift(block.plannedStart, actualStart);

	const handleSave = () => {
		const updated: RoutineBlock = {
			...block,
			actualStart: actualStart.trim() || undefined,
			actualEnd: actualEnd.trim() || undefined,
			delayMinutes: actualStart.trim() ? drift.driftMinutes : undefined,
			delayNote: delayNote.trim() || undefined,
		};
		const shift =
			applyCascade && drift.driftMinutes > 0 ? drift.driftMinutes : undefined;
		onSave(updated, shift);
		onClose();
	};

	const handleReset = () => {
		setActualStart("");
		setActualEnd("");
		setDelayNote("");
		setApplyCascade(true);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a2840]/40 backdrop-blur-xs">
			<div className="relative w-full max-w-md rounded-2xl border border-[#1a2840]/15 bg-[#fdfaf4] p-6 shadow-xl">
				{/* Header */}
				<div className="flex items-start justify-between gap-3 border-b border-[#1a2840]/10 pb-4">
					<div>
						<div className="flex items-center gap-2">
							<span className="text-[10px] font-bold uppercase tracking-widest text-[#b8872a]">
								Timing & Delay Drift
							</span>
							<span
								className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-bold ${
									drift.status === "late"
										? "bg-rose-100 text-rose-800"
										: drift.status === "early"
											? "bg-sky-100 text-sky-800"
											: "bg-emerald-100 text-emerald-800"
								}`}
							>
								{drift.badgeText}
							</span>
						</div>
						<h3 className="mt-1 text-base font-semibold text-[#1a2840]">
							{block.title}
						</h3>
						<p className="text-xs text-[#1a2840]/60">
							Planned: {block.plannedStart} – {block.plannedEnd}
						</p>
					</div>
					<button
						type="button"
						onClick={onClose}
						className="rounded-lg p-1 text-[#1a2840]/50 hover:bg-[#1a2840]/5 hover:text-[#1a2840]"
					>
						<X className="h-5 w-5" />
					</button>
				</div>

				{/* Inputs */}
				<div className="mt-4 space-y-4">
					<div className="grid grid-cols-2 gap-3">
						<div>
							<label
								htmlFor="actual-start-input"
								className="block text-xs font-semibold text-[#1a2840]/70 mb-1"
							>
								Actual Start
							</label>
							<div className="relative flex items-center">
								<Clock className="absolute left-2.5 h-4 w-4 text-[#1a2840]/40" />
								<input
									id="actual-start-input"
									type="time"
									value={actualStart}
									onChange={(e) => setActualStart(e.target.value)}
									className="w-full rounded-xl border border-[#1a2840]/20 bg-[#faf6ee] py-2 pl-9 pr-3 text-sm font-medium text-[#1a2840] focus:border-[#b8872a] focus:outline-none"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="actual-end-input"
								className="block text-xs font-semibold text-[#1a2840]/70 mb-1"
							>
								Actual End
							</label>
							<div className="relative flex items-center">
								<Clock className="absolute left-2.5 h-4 w-4 text-[#1a2840]/40" />
								<input
									id="actual-end-input"
									type="time"
									value={actualEnd}
									onChange={(e) => setActualEnd(e.target.value)}
									className="w-full rounded-xl border border-[#1a2840]/20 bg-[#faf6ee] py-2 pl-9 pr-3 text-sm font-medium text-[#1a2840] focus:border-[#b8872a] focus:outline-none"
								/>
							</div>
						</div>
					</div>

					<div>
						<label
							htmlFor="delay-note-input"
							className="block text-xs font-semibold text-[#1a2840]/70 mb-1"
						>
							Delay / Drift Note
						</label>
						<input
							id="delay-note-input"
							type="text"
							placeholder='e.g., "Woke at 6:45 instead of 6:30"'
							value={delayNote}
							onChange={(e) => setDelayNote(e.target.value)}
							className="w-full rounded-xl border border-[#1a2840]/20 bg-[#faf6ee] px-3 py-2 text-sm text-[#1a2840] placeholder:text-[#1a2840]/30 focus:border-[#b8872a] focus:outline-none"
						/>
					</div>

					{/* Cascade shift option if delayed */}
					{drift.driftMinutes > 0 && (
						<div className="rounded-xl border border-amber-500/20 bg-amber-500/8 p-3">
							<label className="flex items-start gap-2.5 cursor-pointer">
								<input
									type="checkbox"
									checked={applyCascade}
									onChange={(e) => setApplyCascade(e.target.checked)}
									className="mt-0.5 rounded border-[#1a2840]/20 text-[#b8872a] focus:ring-[#b8872a]"
								/>
								<div>
									<p className="text-xs font-bold text-[#1a2840] flex items-center gap-1.5">
										<CornerDownRight className="h-3.5 w-3.5 text-[#b8872a]" />
										Shift remaining blocks by +{drift.driftMinutes}m
									</p>
									<p className="text-[11px] text-[#1a2840]/65 mt-0.5">
										Automatically pushes down subsequent uncompleted blocks for
										today to preserve cognitive sequence.
									</p>
								</div>
							</label>
						</div>
					)}
				</div>

				{/* Actions */}
				<div className="mt-6 flex items-center justify-between gap-2 border-t border-[#1a2840]/10 pt-4">
					<button
						type="button"
						onClick={handleReset}
						className="text-xs font-medium text-[#1a2840]/60 hover:text-[#1a2840]"
					>
						Reset to Planned
					</button>

					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={onClose}
							className="rounded-xl px-4 py-2 text-xs font-semibold text-[#1a2840]/70 hover:bg-[#1a2840]/5"
						>
							Cancel
						</button>
						<button
							type="button"
							onClick={handleSave}
							className="rounded-xl bg-[#1a2840] px-4 py-2 text-xs font-bold text-[#fdfaf4] shadow-xs hover:bg-[#2d5a3d] transition-colors"
						>
							Save Timing
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
