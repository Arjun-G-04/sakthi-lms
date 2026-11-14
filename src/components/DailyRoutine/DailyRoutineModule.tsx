import { AlertTriangle, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { AddBlockModal } from "./AddBlockModal";
import { BlockDelayModal } from "./BlockDelayModal";
import { MistakeDiary } from "./MistakeDiary";
import { RoutineHeader } from "./RoutineHeader";
import { RoutineTimeline } from "./RoutineTimeline";
import {
	createInitialLog,
	hasLoggedProgress,
	loadRoutineLog,
	saveRoutineLog,
} from "./storage";
import {
	type DailyRoutineLog,
	type MistakeEntry,
	type NonNegotiableStatus,
	type RoutineBlock,
	TRACK_METAS,
	type TrackId,
} from "./types";
import {
	calculateDeepFocusLoggedMinutes,
	deriveNonNegotiables,
	getTodayString,
	shiftBlocks,
	timeToMinutes,
} from "./utils";

interface ConfirmModalState {
	title: string;
	description: string;
	confirmLabel: string;
	isDestructive?: boolean;
	onConfirm: () => void;
}

export function DailyRoutineModule() {
	const [selectedDate, setSelectedDate] = useState<string>(getTodayString());
	const [log, setLog] = useState<DailyRoutineLog>(() =>
		createInitialLog(getTodayString(), "A"),
	);
	const [isHydrated, setIsHydrated] = useState(false);

	// Modals & confirmation state
	const [editingBlock, setEditingBlock] = useState<RoutineBlock | null>(null);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [confirmModal, setConfirmModal] = useState<ConfirmModalState | null>(
		null,
	);

	// Load data on client mount and whenever selectedDate changes
	useEffect(() => {
		const loaded = loadRoutineLog(selectedDate);
		setLog(loaded);
		setIsHydrated(true);
	}, [selectedDate]);

	// Save data whenever log changes (after initial hydration)
	const persistLog = useCallback((newLog: DailyRoutineLog) => {
		setLog(newLog);
		saveRoutineLog(newLog);
	}, []);

	// Handle Track Switching with confirmation check
	const handleSelectTrack = (targetTrackId: TrackId) => {
		if (targetTrackId === log.trackId) return;

		if (hasLoggedProgress(log)) {
			setConfirmModal({
				title: `Switch to Track ${targetTrackId}?`,
				description: `Progress has already been logged for this date. Switching to ${TRACK_METAS[targetTrackId].title} (${TRACK_METAS[targetTrackId].subtitle}) will reinitialize the schedule blocks with the new template.`,
				confirmLabel: "Switch & Reinitialize",
				isDestructive: false,
				onConfirm: () => {
					const newLog = createInitialLog(selectedDate, targetTrackId);
					persistLog(newLog);
					setConfirmModal(null);
				},
			});
			return;
		}

		// Initialize with new track directly
		const newLog = createInitialLog(selectedDate, targetTrackId);
		persistLog(newLog);
	};

	// Toggle completion of a block
	const handleToggleBlock = (blockId: string) => {
		const updatedBlocks = log.blocks.map((b) =>
			b.id === blockId ? { ...b, completed: !b.completed } : b,
		);

		persistLog({
			...log,
			blocks: updatedBlocks,
		});
	};

	// Save timing adjustments & delay
	const handleSaveTiming = (
		updatedBlock: RoutineBlock,
		cascadeShiftMinutes?: number,
	) => {
		let updatedBlocks = log.blocks.map((b) =>
			b.id === updatedBlock.id ? updatedBlock : b,
		);

		if (cascadeShiftMinutes && cascadeShiftMinutes > 0) {
			const blockIndex = log.blocks.findIndex((b) => b.id === updatedBlock.id);
			if (blockIndex !== -1) {
				updatedBlocks = shiftBlocks(
					updatedBlocks,
					blockIndex,
					cascadeShiftMinutes,
				);
			}
		}

		persistLog({
			...log,
			blocks: updatedBlocks,
		});
	};

	// Add ad-hoc or interruption block
	const handleAddBlock = (newBlock: RoutineBlock) => {
		// Insert chronologically
		const updated = [...log.blocks, newBlock].sort((a, b) => {
			return timeToMinutes(a.plannedStart) - timeToMinutes(b.plannedStart);
		});
		persistLog({
			...log,
			blocks: updated,
		});
	};

	// Delete custom block
	const handleDeleteBlock = (blockId: string) => {
		const updated = log.blocks.filter((b) => b.id !== blockId);
		persistLog({
			...log,
			blocks: updated,
		});
	};

	// Toggle non-negotiable status
	const handleToggleNonNegotiable = (key: keyof NonNegotiableStatus) => {
		const effective = deriveNonNegotiables(log.blocks, log.nonNegotiables);
		const updated: NonNegotiableStatus = {
			...log.nonNegotiables,
			[key]: !effective[key],
		};
		persistLog({
			...log,
			nonNegotiables: updated,
		});
	};

	// Mistake Diary handlers
	const handleAddMistake = (entry: MistakeEntry) => {
		persistLog({
			...log,
			mistakeLog: [entry, ...(log.mistakeLog || [])],
		});
	};

	const handleRemoveMistake = (id: string) => {
		persistLog({
			...log,
			mistakeLog: (log.mistakeLog || []).filter((m) => m.id !== id),
		});
	};

	// Reset day's schedule
	const handleResetDay = () => {
		setConfirmModal({
			title: "Reset Today's Schedule?",
			description:
				"This will restore schedule blocks to the template defaults and clear logged timing and checkmarks for this date.",
			confirmLabel: "Reset Schedule",
			isDestructive: true,
			onConfirm: () => {
				const resetLog = createInitialLog(selectedDate, log.trackId);
				persistLog(resetLog);
				setConfirmModal(null);
			},
		});
	};

	const completedCount = log.blocks.filter((b) => b.completed).length;
	const totalCount = log.blocks.length;
	const deepFocusMinutes = calculateDeepFocusLoggedMinutes(log.blocks);
	const targetDeepFocusMinutes =
		TRACK_METAS[log.trackId]?.targetDeepFocusMinutes || 190;

	if (!isHydrated) {
		return (
			<div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-[#1a2840]/10 bg-[#fdfaf4]/60 p-8">
				<div className="h-6 w-6 animate-spin rounded-full border-2 border-[#b8872a] border-t-transparent" />
			</div>
		);
	}

	return (
		<div className="space-y-6">
			{/* Header with Switcher, Track selector, Progress bar */}
			<RoutineHeader
				selectedDate={selectedDate}
				onDateChange={setSelectedDate}
				activeTrackId={log.trackId}
				onSelectTrack={handleSelectTrack}
				completedCount={completedCount}
				totalCount={totalCount}
				deepFocusLoggedMinutes={deepFocusMinutes}
				targetDeepFocusMinutes={targetDeepFocusMinutes}
				nonNegotiables={deriveNonNegotiables(log.blocks, log.nonNegotiables)}
				onToggleNonNegotiable={handleToggleNonNegotiable}
				onOpenAddBlock={() => setIsAddModalOpen(true)}
			/>

			{/* Timeline Section */}
			<div className="space-y-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<h2 className="text-sm font-bold uppercase tracking-wider text-[#1a2840]">
							Daily Timeline & Execution Sequence
						</h2>
						<span className="rounded-full bg-[#1a2840]/5 px-2 py-0.5 text-[10px] font-bold text-[#1a2840]/60">
							{log.blocks.length} blocks
						</span>
					</div>

					<button
						type="button"
						onClick={handleResetDay}
						className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1a2840]/50 hover:text-rose-600 transition-colors"
						title="Reset schedule blocks to template defaults"
					>
						<RotateCcw className="h-3 w-3" />
						<span>Reset Day</span>
					</button>
				</div>

				<RoutineTimeline
					blocks={log.blocks}
					onToggleBlock={handleToggleBlock}
					onEditTiming={(b) => setEditingBlock(b)}
					onDeleteBlock={handleDeleteBlock}
				/>
			</div>

			{/* 2-Line Mistake Diary */}
			<MistakeDiary
				entries={log.mistakeLog || []}
				onAddEntry={handleAddMistake}
				onRemoveEntry={handleRemoveMistake}
			/>

			{/* Modal: Adjust / Log Delay */}
			<BlockDelayModal
				block={editingBlock}
				isOpen={!!editingBlock}
				onClose={() => setEditingBlock(null)}
				onSave={handleSaveTiming}
			/>

			{/* Modal: Add Ad-hoc Block */}
			<AddBlockModal
				isOpen={isAddModalOpen}
				onClose={() => setIsAddModalOpen(false)}
				onAdd={handleAddBlock}
			/>

			{/* Unified Confirmation Dialog */}
			{confirmModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a2840]/40 backdrop-blur-xs">
					<div className="w-full max-w-sm rounded-2xl border border-amber-500/30 bg-[#fdfaf4] p-5 shadow-2xl">
						<div className="flex items-center gap-2.5 text-amber-600">
							<AlertTriangle className="h-5 w-5 shrink-0" />
							<h4 className="text-sm font-bold text-[#1a2840]">
								{confirmModal.title}
							</h4>
						</div>
						<p className="mt-2 text-xs leading-relaxed text-[#1a2840]/70">
							{confirmModal.description}
						</p>
						<div className="mt-5 flex items-center justify-end gap-2 border-t border-[#1a2840]/10 pt-3">
							<button
								type="button"
								onClick={() => setConfirmModal(null)}
								className="rounded-xl px-3 py-1.5 text-xs font-semibold text-[#1a2840]/70 hover:bg-[#1a2840]/5"
							>
								Cancel
							</button>
							<button
								type="button"
								onClick={confirmModal.onConfirm}
								className={`rounded-xl px-3 py-1.5 text-xs font-bold text-white shadow-xs transition-colors ${
									confirmModal.isDestructive
										? "bg-rose-600 hover:bg-rose-700"
										: "bg-amber-600 hover:bg-amber-700"
								}`}
							>
								{confirmModal.confirmLabel}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
