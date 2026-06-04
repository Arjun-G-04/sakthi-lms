import { Calendar } from "lucide-react";
import {
	CHART_PLOT_WIDTH,
	type ChartPoint,
	getScoreColor,
} from "#/components/TestDashboard/utils";

type ChartTooltipProps = {
	hoveredPoint: ChartPoint;
	x: number;
	y: number;
};

export function ChartTooltip({ hoveredPoint, x, y }: ChartTooltipProps) {
	const scoreColor = getScoreColor(hoveredPoint.percent);

	// Tooltip bounds positioning logic
	const leftPos = Math.min(Math.max(x - 100, 10), CHART_PLOT_WIDTH - 140);
	const topPos = Math.max(y - 140, 10);
	const shadowColor = `${scoreColor.color}22`;

	const chapters: string[] = hoveredPoint.chaptersCovered
		? JSON.parse(hoveredPoint.chaptersCovered)
		: [];

	return (
		<div
			className="absolute z-10 p-3 rounded-xl border border-[#1a2840]/12 bg-[#fdfaf4]/98 shadow-xl text-left text-xs pointer-events-none w-[260px] max-w-[260px]"
			style={{
				left: `${leftPos}px`,
				top: `${topPos}px`,
				boxShadow: `0 8px 24px -4px ${shadowColor}`,
			}}
		>
			<div className="flex items-center justify-between border-b border-[#1a2840]/8 pb-1.5 mb-1.5">
				<span className="text-[9px] font-black uppercase tracking-wider text-[#1a2840]/40 flex items-center gap-1">
					<Calendar className="h-3 w-3" />
					{hoveredPoint.testDate}
				</span>
				<span
					className={`rounded-full border px-2 py-0.5 text-[8px] font-black uppercase tracking-wider ${scoreColor.text} ${scoreColor.bg} ${scoreColor.border}`}
				>
					{hoveredPoint.percent}%
				</span>
			</div>

			<p className="font-semibold text-[#1a2840] truncate">
				{hoveredPoint.testName}
			</p>
			<p className="text-[10px] font-bold text-[#b8872a]/80 mt-0.5">
				{hoveredPoint.testType}
			</p>

			<div className="mt-2 space-y-1 text-[10px] text-[#1a2840]/55">
				<p className="flex justify-between">
					<span>Marks:</span>
					<span className="font-bold text-[#1a2840]">
						{hoveredPoint.scoredMarks} / {hoveredPoint.totalMarks}
					</span>
				</p>
				<p className="flex justify-between">
					<span>Duration:</span>
					<span className="font-bold text-[#1a2840]">
						{hoveredPoint.durationMinutes} mins
					</span>
				</p>
				{chapters.length > 0 && (
					<p className="border-t border-[#1a2840]/8 pt-1.5 mt-1.5 leading-relaxed">
						<span className="block font-bold text-[#1a2840]/40 mb-0.5">
							Chapters:
						</span>
						<span className="text-[9px] text-[#1a2840]/60 block leading-snug break-words line-clamp-3">
							{chapters.join(", ")}
						</span>
					</p>
				)}
			</div>
		</div>
	);
}
