type MetricCardProps = {
	label: string;
	value: string;
	note: string;
	accent: "green" | "brass" | "red";
};

const ACCENT_MAP = {
	green: {
		bar: "from-[#2d5a3d]/50 via-[#3d7a52]/70 to-[#2d5a3d]/40",
		label: "text-[#2d5a3d]",
		dot: "bg-[#2d5a3d]",
	},
	brass: {
		bar: "from-[#b8872a]/50 via-[#d4a443]/70 to-[#b8872a]/40",
		label: "text-[#b8872a]",
		dot: "bg-[#b8872a]",
	},
	red: {
		bar: "from-[#c0392b]/40 via-[#e74c3c]/60 to-[#c0392b]/30",
		label: "text-[#a93226]",
		dot: "bg-[#c0392b]",
	},
};

export function MetricCard({ label, value, note, accent }: MetricCardProps) {
	const a = ACCENT_MAP[accent];
	return (
		<div className="relative overflow-hidden rounded-[18px] border border-[#1a2840]/10 bg-[#fdfaf4] shadow-[0_2px_10px_rgba(26,40,64,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]">
			{/* Accent bar */}
			<div
				className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${a.bar}`}
			/>
			<div className="px-4 pt-5 pb-4">
				<p
					className={`text-[10px] font-bold uppercase tracking-[0.35em] ${a.label}`}
				>
					{label}
				</p>
				<p className="display-title mt-2 text-4xl font-600 text-[#1a2840]">
					{value}
				</p>
				<p className="mt-1.5 text-[11px] text-[#1a2840]/50">{note}</p>
			</div>
		</div>
	);
}

export function SectionBadge({
	label,
	value,
}: {
	label: string;
	value: string;
}) {
	return (
		<div className="rounded-[16px] border border-[#1a2840]/10 bg-[#fdfaf4]/90 px-3 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_4px_rgba(26,40,64,0.06)]">
			<p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#1a2840]/45">
				{label}
			</p>
			<p className="display-title mt-1 text-2xl font-600 text-[#1a2840]">
				{value}
			</p>
		</div>
	);
}
