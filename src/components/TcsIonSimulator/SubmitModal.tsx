import { ShieldAlert } from "lucide-react";

interface SubmitModalProps {
	onClose: () => void;
	onSubmit: () => void;
	isSubmitting: boolean;
	answeredCount: number;
	totalCount: number;
}

export function SubmitModal({
	onClose,
	onSubmit,
	isSubmitting,
	answeredCount,
	totalCount,
}: SubmitModalProps) {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
			<div className="w-full max-w-md rounded-2xl border border-[#1a2840]/10 bg-white p-6 shadow-2xl animate-scale-in">
				<div className="flex items-center gap-3 border-b border-[#1a2840]/8 pb-3 text-rose-600">
					<ShieldAlert className="h-6 w-6" />
					<h3 className="text-sm font-black uppercase tracking-wider">
						Submit Assessment
					</h3>
				</div>

				<p className="mt-4 body-serif text-xs leading-relaxed text-[#1a2840]/80">
					Are you sure you want to finish and submit your exam? You have
					answered <strong>{answeredCount}</strong> out of {totalCount}{" "}
					questions. Once submitted, you cannot modify your choices.
				</p>

				<div className="mt-6 flex items-center justify-end gap-3">
					<button
						type="button"
						onClick={onClose}
						className="rounded-xl border border-[#1a2840]/10 px-4 py-2 text-2xs font-bold uppercase tracking-wider text-[#1a2840]/60 hover:bg-[#1a2840]/5 transition"
					>
						Cancel
					</button>
					<button
						type="button"
						onClick={onSubmit}
						disabled={isSubmitting}
						className="flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2 text-2xs font-black uppercase tracking-wider text-white hover:bg-emerald-700 transition disabled:opacity-50"
					>
						{isSubmitting ? "Submitting..." : "Yes, Submit"}
					</button>
				</div>
			</div>
		</div>
	);
}
