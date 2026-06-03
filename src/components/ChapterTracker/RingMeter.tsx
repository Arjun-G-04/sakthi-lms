import type { ReactNode } from "react";
import type { ProgressState, StatusState } from "#/lib/chapter-catalog";

export const RING_COLORS: Record<ProgressState | StatusState, string> = {
	"Yet to begin": "#314257",
	"In Progress": "#efb84a",
	Done: "#3fd08d",
	Weak: "#ff6f7d",
	Medium: "#f6c44c",
	Strong: "#40d289",
};

export function RingLegend() {
	return (
		<div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1a2840]/55">
			<LegendDot color={RING_COLORS.Weak} label="Weak" />
			<LegendDot color={RING_COLORS.Medium} label="Medium" />
			<LegendDot color={RING_COLORS.Strong} label="Strong" />
		</div>
	);
}

export function LegendDot({ color, label }: { color: string; label: string }) {
	return (
		<span className="flex items-center gap-2">
			<span
				className="h-2.5 w-2.5 rounded-full"
				style={{ background: color }}
			/>
			{label}
		</span>
	);
}

export type RingSegment = {
	label: string;
	value: number;
	total: number;
	color: string;
};

type RingMeterProps = {
	size: number;
	segments: RingSegment[];
	center: ReactNode;
	active?: boolean;
};

export function RingMeter({
	size,
	segments,
	center,
	active = false,
}: RingMeterProps) {
	const r = 38;
	const strokeWidth = 9;
	const circumference = 2 * Math.PI * r;

	let cumulativeFraction = 0;
	const slices = segments.map((segment) => {
		const fraction = segment.total === 0 ? 0 : segment.value / segment.total;
		const strokeDashoffset = -cumulativeFraction * circumference;
		cumulativeFraction += fraction;

		const strokeDasharray = `${fraction * circumference} ${circumference}`;

		return {
			...segment,
			r,
			circumference,
			strokeDasharray,
			strokeDashoffset,
			fraction,
		};
	});

	return (
		<div
			className="relative flex items-center justify-center"
			style={{ width: size, height: size }}
		>
			{/* Outer elegant backing */}
			<div
				className={`absolute inset-0 rounded-full transition-all duration-300 ${
					active
						? "bg-[#111a2a] shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)]"
						: "bg-[#fdfaf4] shadow-[inset_0_0_0_1px_rgba(26,40,64,0.08),0_8px_24px_rgba(26,40,64,0.08)]"
				}`}
			/>

			{/* SVG single ring */}
			<svg
				viewBox="0 0 100 100"
				className="w-full h-full transform -rotate-90 p-1"
				role="img"
				aria-label="Chapter Progress Ring"
			>
				<title>Chapter Progress Ring</title>
				<defs>
					<filter id="ringShadow" x="-20%" y="-20%" width="140%" height="140%">
						<feDropShadow
							dx="0"
							dy="1.2"
							stdDeviation="1.2"
							floodColor="#000000"
							floodOpacity="0.6"
						/>
					</filter>
				</defs>

				{/* Soft track behind the active ring */}
				<circle
					cx="50"
					cy="50"
					r={r}
					stroke={
						active ? "rgba(255, 255, 255, 0.1)" : "rgba(26, 40, 64, 0.07)"
					}
					strokeWidth={strokeWidth}
					fill="transparent"
				/>

				{slices.map(
					(slice) =>
						slice.fraction > 0 && (
							<circle
								key={slice.label}
								cx="50"
								cy="50"
								r={r}
								stroke={slice.color}
								strokeWidth={strokeWidth}
								fill="transparent"
								strokeDasharray={slice.strokeDasharray}
								strokeDashoffset={slice.strokeDashoffset}
								strokeLinecap="round"
								filter="url(#ringShadow)"
								style={{
									transition:
										"stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1), stroke-dasharray 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
								}}
							/>
						),
				)}
			</svg>

			{/* Perfectly centered labels */}
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="w-[50%] text-center">{center}</div>
			</div>
		</div>
	);
}

export function RingCenter({
	label,
	value,
	sublabel,
}: {
	label: string;
	value: string;
	sublabel?: string;
}) {
	return (
		<div className="flex flex-col items-center text-center">
			<p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#1a2840]/40">
				{label}
			</p>
			<p className="display-title mt-3 text-5xl sm:text-6xl font-semibold text-[#1a2840] leading-none">
				{value}
			</p>
			{sublabel ? (
				<p className="mt-3 text-xs uppercase tracking-[0.24em] text-[#1a2840]/45">
					{sublabel}
				</p>
			) : null}
		</div>
	);
}
