import { AlertCircle, Check, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import type { MistakeEntry } from "./types";

interface MistakeDiaryProps {
	entries: MistakeEntry[];
	onAddEntry: (entry: MistakeEntry) => void;
	onRemoveEntry: (id: string) => void;
}

export function MistakeDiary({
	entries,
	onAddEntry,
	onRemoveEntry,
}: MistakeDiaryProps) {
	const [errorTrap, setErrorTrap] = useState("");
	const [fixRule, setFixRule] = useState("");

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();
		if (!errorTrap.trim() || !fixRule.trim()) return;

		const newEntry: MistakeEntry = {
			id: `mistake-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
			errorTrap: errorTrap.trim(),
			fixRule: fixRule.trim(),
		};

		onAddEntry(newEntry);
		setErrorTrap("");
		setFixRule("");
	};

	return (
		<div className="rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-5 shadow-[0_2px_8px_rgba(26,40,64,0.06)] backdrop-blur-xs">
			<div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1a2840]/10 pb-3">
				<div className="flex items-center gap-2.5">
					<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b8872a]/15 text-[#b8872a]">
						<AlertCircle className="h-4 w-4" />
					</div>
					<div>
						<h3 className="text-sm font-bold uppercase tracking-wider text-[#1a2840]">
							Mistake Diary & Cognitive Traps
						</h3>
						<p className="text-[11px] text-[#1a2840]/60">
							Log analytical mistakes made today: 1 line for the trap, 1 line
							for the fix rule.
						</p>
					</div>
				</div>
				<span className="rounded-full bg-[#1a2840]/5 px-2.5 py-0.5 text-xs font-semibold text-[#1a2840]/70">
					{entries.length} logged
				</span>
			</div>

			{/* Form to add entry */}
			<form onSubmit={handleAdd} className="mt-4 space-y-3">
				<div className="grid gap-3 sm:grid-cols-2">
					<div>
						<label
							htmlFor="mistake-trap-input"
							className="block text-[11px] font-bold uppercase tracking-wider text-rose-800/80 mb-1"
						>
							Line 1: Error Trap / What went wrong
						</label>
						<input
							id="mistake-trap-input"
							type="text"
							placeholder='e.g., "Forgot to check sign when shifting magnetic flux"'
							value={errorTrap}
							onChange={(e) => setErrorTrap(e.target.value)}
							className="w-full rounded-xl border border-rose-300/40 bg-rose-50/30 px-3 py-2 text-xs text-[#1a2840] placeholder:text-[#1a2840]/35 focus:border-rose-400 focus:outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="mistake-rule-input"
							className="block text-[11px] font-bold uppercase tracking-wider text-emerald-800/80 mb-1"
						>
							Line 2: The 1-Line Fix / Rule
						</label>
						<div className="flex items-center gap-2">
							<input
								id="mistake-rule-input"
								type="text"
								placeholder='e.g., "Always write Lenz rule formula first with explicit minus"'
								value={fixRule}
								onChange={(e) => setFixRule(e.target.value)}
								className="w-full rounded-xl border border-emerald-300/40 bg-emerald-50/30 px-3 py-2 text-xs text-[#1a2840] placeholder:text-[#1a2840]/35 focus:border-emerald-400 focus:outline-none"
							/>
							<button
								type="submit"
								disabled={!errorTrap.trim() || !fixRule.trim()}
								className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-[#1a2840] px-3.5 py-2 text-xs font-bold text-[#fdfaf4] hover:bg-[#2d5a3d] disabled:opacity-40 disabled:hover:bg-[#1a2840] transition-colors"
							>
								<Plus className="h-3.5 w-3.5" />
								<span>Add</span>
							</button>
						</div>
					</div>
				</div>
			</form>

			{/* List of entries */}
			{entries.length > 0 ? (
				<div className="mt-4 space-y-2.5">
					{entries.map((entry, index) => (
						<div
							key={entry.id}
							className="flex items-start justify-between gap-3 rounded-xl border border-[#1a2840]/10 bg-[#faf6ee] p-3 text-xs"
						>
							<div className="space-y-1.5 flex-1">
								<div className="flex items-start gap-2">
									<span className="shrink-0 rounded-md bg-rose-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-800">
										Trap {index + 1}
									</span>
									<p className="font-medium text-[#1a2840]">
										{entry.errorTrap}
									</p>
								</div>
								<div className="flex items-start gap-2">
									<span className="shrink-0 rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-0.5">
										<Check className="h-2.5 w-2.5" />
										Fix
									</span>
									<p className="font-semibold text-[#2d5a3d]">
										{entry.fixRule}
									</p>
								</div>
							</div>
							<button
								type="button"
								onClick={() => onRemoveEntry(entry.id)}
								className="shrink-0 rounded-lg p-1 text-[#1a2840]/40 hover:bg-rose-50 hover:text-rose-600 transition-colors"
								title="Delete mistake log"
							>
								<Trash2 className="h-3.5 w-3.5" />
							</button>
						</div>
					))}
				</div>
			) : (
				<div className="mt-3 rounded-xl border border-dashed border-[#1a2840]/15 p-4 text-center">
					<p className="text-xs text-[#1a2840]/50">
						No cognitive traps logged for today yet. When encountering an error
						in practice, note the trap and rule here.
					</p>
				</div>
			)}
		</div>
	);
}
