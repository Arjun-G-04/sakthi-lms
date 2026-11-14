import { Plus, X } from "lucide-react";
import { useState } from "react";
import type { RoutineBlock, RoutineBlockCategory } from "./types";

interface AddBlockModalProps {
	isOpen: boolean;
	onClose: () => void;
	onAdd: (block: RoutineBlock) => void;
	defaultTime?: string;
}

const CATEGORIES: RoutineBlockCategory[] = [
	"Focus Block",
	"Circadian & Movement",
	"Nutrition",
	"School/Transit",
	"Recovery & Sleep",
	"Interruption",
];

export function AddBlockModal({
	isOpen,
	onClose,
	onAdd,
	defaultTime = "12:00",
}: AddBlockModalProps) {
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState<RoutineBlockCategory>("Focus Block");
	const [plannedStart, setPlannedStart] = useState(defaultTime);
	const [plannedEnd, setPlannedEnd] = useState("13:00");
	const [details, setDetails] = useState("");

	if (!isOpen) return null;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title.trim()) return;

		const newBlock: RoutineBlock = {
			id: `adhoc-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
			title: title.trim(),
			category,
			plannedStart,
			plannedEnd,
			details: details.trim() || undefined,
			completed: false,
			isCustom: true,
		};

		onAdd(newBlock);
		onClose();
		setTitle("");
		setDetails("");
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a2840]/40 backdrop-blur-xs">
			<div className="relative w-full max-w-md rounded-2xl border border-[#1a2840]/15 bg-[#fdfaf4] p-6 shadow-xl">
				<div className="flex items-center justify-between border-b border-[#1a2840]/10 pb-4">
					<div className="flex items-center gap-2">
						<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b8872a]/15 text-[#b8872a]">
							<Plus className="h-4 w-4" />
						</div>
						<h3 className="text-base font-semibold text-[#1a2840]">
							Add Block / Interruption
						</h3>
					</div>
					<button
						type="button"
						onClick={onClose}
						className="rounded-lg p-1 text-[#1a2840]/50 hover:bg-[#1a2840]/5 hover:text-[#1a2840]"
					>
						<X className="h-5 w-5" />
					</button>
				</div>

				<form onSubmit={handleSubmit} className="mt-4 space-y-4">
					<div>
						<label
							htmlFor="add-block-title"
							className="block text-xs font-semibold text-[#1a2840]/70 mb-1"
						>
							Block Title *
						</label>
						<input
							id="add-block-title"
							type="text"
							required
							placeholder='e.g., "Physics Doubt Clearing" or "Unexpected Transit Delay"'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="w-full rounded-xl border border-[#1a2840]/20 bg-[#faf6ee] px-3 py-2 text-sm text-[#1a2840] placeholder:text-[#1a2840]/30 focus:border-[#b8872a] focus:outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="add-block-category"
							className="block text-xs font-semibold text-[#1a2840]/70 mb-1"
						>
							Category
						</label>
						<select
							id="add-block-category"
							value={category}
							onChange={(e) =>
								setCategory(e.target.value as RoutineBlockCategory)
							}
							className="w-full rounded-xl border border-[#1a2840]/20 bg-[#faf6ee] px-3 py-2 text-sm text-[#1a2840] focus:border-[#b8872a] focus:outline-none"
						>
							{CATEGORIES.map((cat) => (
								<option key={cat} value={cat}>
									{cat}
								</option>
							))}
						</select>
					</div>

					<div className="grid grid-cols-2 gap-3">
						<div>
							<label
								htmlFor="add-block-start"
								className="block text-xs font-semibold text-[#1a2840]/70 mb-1"
							>
								Start Time
							</label>
							<input
								id="add-block-start"
								type="time"
								value={plannedStart}
								onChange={(e) => setPlannedStart(e.target.value)}
								className="w-full rounded-xl border border-[#1a2840]/20 bg-[#faf6ee] px-3 py-2 text-sm text-[#1a2840] focus:border-[#b8872a] focus:outline-none"
							/>
						</div>
						<div>
							<label
								htmlFor="add-block-end"
								className="block text-xs font-semibold text-[#1a2840]/70 mb-1"
							>
								End Time
							</label>
							<input
								id="add-block-end"
								type="time"
								value={plannedEnd}
								onChange={(e) => setPlannedEnd(e.target.value)}
								className="w-full rounded-xl border border-[#1a2840]/20 bg-[#faf6ee] px-3 py-2 text-sm text-[#1a2840] focus:border-[#b8872a] focus:outline-none"
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="add-block-details"
							className="block text-xs font-semibold text-[#1a2840]/70 mb-1"
						>
							Notes / Details (Optional)
						</label>
						<input
							id="add-block-details"
							type="text"
							placeholder='e.g., "NCERT Chapter 4 summary notes"'
							value={details}
							onChange={(e) => setDetails(e.target.value)}
							className="w-full rounded-xl border border-[#1a2840]/20 bg-[#faf6ee] px-3 py-2 text-sm text-[#1a2840] placeholder:text-[#1a2840]/30 focus:border-[#b8872a] focus:outline-none"
						/>
					</div>

					<div className="mt-6 flex items-center justify-end gap-2 border-t border-[#1a2840]/10 pt-4">
						<button
							type="button"
							onClick={onClose}
							className="rounded-xl px-4 py-2 text-xs font-semibold text-[#1a2840]/70 hover:bg-[#1a2840]/5"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-xl bg-[#1a2840] px-4 py-2 text-xs font-bold text-[#fdfaf4] shadow-xs hover:bg-[#2d5a3d] transition-colors"
						>
							Add to Timeline
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
