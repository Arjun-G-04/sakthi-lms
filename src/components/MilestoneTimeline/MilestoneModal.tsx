import { AlertCircle, Calendar, Check, Plus, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type {
	CreateMilestoneInput,
	Milestone,
	MilestoneCategory,
	MilestoneStatus,
} from "#/lib/milestone.functions";

type MilestoneModalProps = {
	isOpen: boolean;
	onClose: () => void;
	milestones: Milestone[];
	onCreate: (data: CreateMilestoneInput) => Promise<void>;
	onToggleStatus: (id: number, status: MilestoneStatus) => Promise<void>;
	onDelete: (id: number) => Promise<void>;
};

const CATEGORIES: {
	value: MilestoneCategory;
	label: string;
	color: string;
}[] = [
	{
		value: "test",
		label: "Test",
		color: "border-[#b8872a]/30 bg-[#b8872a]/10 text-[#8c651e]",
	},
	{
		value: "revision",
		label: "Revision",
		color: "border-[#2d5a3d]/30 bg-[#2d5a3d]/10 text-[#2d5a3d]",
	},
];

export function MilestoneModal({
	isOpen,
	onClose,
	milestones,
	onCreate,
	onToggleStatus,
	onDelete,
}: MilestoneModalProps) {
	const [title, setTitle] = useState("");
	const [targetDate, setTargetDate] = useState("");
	const [category, setCategory] = useState<MilestoneCategory>("test");
	const [description, setDescription] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!isOpen || !mounted) return null;

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!title.trim() || !targetDate) {
			setError("Title and date required");
			return;
		}

		setError(null);
		setIsSubmitting(true);
		try {
			await onCreate({
				title: title.trim(),
				targetDate,
				category,
				description: description.trim() || undefined,
			});
			setTitle("");
			setTargetDate("");
			setDescription("");
		} catch (err) {
			console.error("Failed to create milestone", err);
			setError("Save failed");
		} finally {
			setIsSubmitting(false);
		}
	}

	return createPortal(
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a2840]/60 backdrop-blur-xs">
			<div
				className="absolute inset-0 cursor-default"
				onClick={onClose}
				aria-hidden="true"
			/>

			<div className="relative z-10 flex max-h-[88vh] w-full max-w-xl flex-col overflow-hidden rounded-[20px] border-2 border-[#1a2840]/15 bg-[#fdfaf4] shadow-2xl">
				<div className="h-[2px] w-full bg-[#b8872a]" />

				{/* Header */}
				<div className="flex items-center justify-between border-b border-[#1a2840]/10 px-5 py-3.5">
					<h2 className="text-sm font-bold text-[#1a2840]">Milestones</h2>
					<button
						type="button"
						onClick={onClose}
						className="grid h-7 w-7 place-items-center rounded-[8px] border border-[#1a2840]/10 text-[#1a2840]/60 hover:text-[#1a2840]"
					>
						<X className="h-4 w-4" />
					</button>
				</div>

				{/* Body */}
				<div className="flex-1 overflow-y-auto p-5 space-y-5">
					{/* Add Form */}
					<form
						onSubmit={handleSubmit}
						className="rounded-[14px] border border-[#1a2840]/10 bg-[#f8f3e6]/60 p-3.5 space-y-3"
					>
						{error && (
							<div className="flex items-center gap-1.5 text-xs text-[#c0392b]">
								<AlertCircle className="h-3.5 w-3.5 shrink-0" />
								<span>{error}</span>
							</div>
						)}

						<div className="grid gap-2.5 sm:grid-cols-2">
							<div className="sm:col-span-2">
								<input
									id="m-title"
									type="text"
									placeholder="Milestone title"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									required
									className="w-full rounded-[8px] border border-[#1a2840]/15 bg-[#fdfaf4] px-3 py-1.5 text-xs text-[#1a2840] placeholder-[#1a2840]/40 focus:border-[#b8872a] focus:outline-none"
								/>
							</div>

							<div>
								<input
									id="m-date"
									type="date"
									value={targetDate}
									onChange={(e) => setTargetDate(e.target.value)}
									required
									className="w-full rounded-[8px] border border-[#1a2840]/15 bg-[#fdfaf4] px-2.5 py-1.5 text-xs text-[#1a2840] focus:border-[#b8872a] focus:outline-none"
								/>
							</div>

							<div>
								<select
									id="m-cat"
									value={category}
									onChange={(e) =>
										setCategory(e.target.value as MilestoneCategory)
									}
									className="w-full rounded-[8px] border border-[#1a2840]/15 bg-[#fdfaf4] px-2.5 py-1.5 text-xs text-[#1a2840] focus:border-[#b8872a] focus:outline-none"
								>
									{CATEGORIES.map((c) => (
										<option key={c.value} value={c.value}>
											{c.label}
										</option>
									))}
								</select>
							</div>

							<div className="sm:col-span-2">
								<input
									id="m-desc"
									type="text"
									placeholder="Scope / notes (optional)"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									className="w-full rounded-[8px] border border-[#1a2840]/15 bg-[#fdfaf4] px-3 py-1.5 text-xs text-[#1a2840] placeholder-[#1a2840]/40 focus:border-[#b8872a] focus:outline-none"
								/>
							</div>
						</div>

						<div className="flex justify-end pt-1">
							<button
								type="submit"
								disabled={isSubmitting}
								className="flex items-center gap-1 rounded-[8px] bg-[#1a2840] px-3.5 py-1.5 text-xs font-bold text-[#fdfaf4] hover:bg-[#253959] disabled:opacity-50"
							>
								<Plus className="h-3.5 w-3.5" />
								{isSubmitting ? "Saving..." : "Add"}
							</button>
						</div>
					</form>

					{/* List */}
					<div className="space-y-2">
						{milestones.length === 0 ? (
							<p className="text-center text-xs text-[#1a2840]/45 py-4">
								No milestones yet
							</p>
						) : (
							<div className="space-y-1.5 max-h-[240px] overflow-y-auto">
								{milestones.map((m) => {
									const catConfig = CATEGORIES.find(
										(c) => c.value === m.category,
									) || {
										label: m.category,
										color: "border-gray-200 bg-gray-100 text-gray-700",
									};

									const isCompleted = m.status === "completed";

									return (
										<div
											key={m.id}
											className={`flex items-center justify-between gap-2.5 rounded-[10px] border px-3 py-2 text-xs ${
												isCompleted
													? "border-[#1a2840]/8 bg-[#f5eedc]/30 opacity-50"
													: "border-[#1a2840]/10 bg-[#fdfaf4]"
											}`}
										>
											<div className="min-w-0 flex-1">
												<div className="flex items-center gap-2">
													<span
														className={`rounded-[4px] border px-1.5 py-0.2 text-[9px] font-bold uppercase ${catConfig.color}`}
													>
														{catConfig.label}
													</span>
													<span className="flex items-center gap-1 text-[11px] text-[#1a2840]/55">
														<Calendar className="h-3 w-3" />
														{m.targetDate}
													</span>
												</div>
												<p
													className={`mt-0.5 font-semibold truncate ${
														isCompleted
															? "line-through text-[#1a2840]/40"
															: "text-[#1a2840]"
													}`}
												>
													{m.title}
												</p>
											</div>

											<div className="flex items-center gap-1 shrink-0">
												<button
													type="button"
													title={isCompleted ? "Mark active" : "Mark done"}
													onClick={() =>
														onToggleStatus(
															m.id,
															isCompleted ? "upcoming" : "completed",
														)
													}
													className={`grid h-7 w-7 place-items-center rounded-[6px] border ${
														isCompleted
															? "border-[#2d5a3d]/30 bg-[#2d5a3d]/10 text-[#2d5a3d]"
															: "border-[#1a2840]/10 text-[#1a2840]/40 hover:text-[#1a2840]"
													}`}
												>
													<Check className="h-3.5 w-3.5" />
												</button>

												<button
													type="button"
													title="Delete"
													onClick={() => onDelete(m.id)}
													className="grid h-7 w-7 place-items-center rounded-[6px] border border-[#1a2840]/10 text-[#c0392b]/50 hover:text-[#c0392b]"
												>
													<Trash2 className="h-3.5 w-3.5" />
												</button>
											</div>
										</div>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>,
		document.body,
	);
}
