import { Award, Calendar, TrendingUp } from "lucide-react";
import { useCallback, useMemo } from "react";
import {
	CHART_HEIGHT,
	CHART_PADDING_BOTTOM,
	CHART_PADDING_LEFT,
	CHART_PADDING_RIGHT,
	CHART_PADDING_TOP,
	CHART_PLOT_HEIGHT,
	CHART_PLOT_WIDTH,
	CHART_WIDTH,
	type ChartPoint,
	getCategoryColor,
	getScoreColor,
} from "#/components/TestDashboard/utils";

type TestChartProps = {
	parsedPoints: ChartPoint[];
	timeBounds: { min: number; max: number };
	chartMode: "single" | "multi";
	setChartMode: (mode: "single" | "multi") => void;
	hoveredPoint: ChartPoint | null;
	setHoveredPoint: (pt: ChartPoint | null) => void;
	hiddenTypes: Record<string, boolean>;
	setHiddenTypes: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
	existingTypes: string[];
};

export function TestChart({
	parsedPoints,
	timeBounds,
	chartMode,
	setChartMode,
	hoveredPoint,
	setHoveredPoint,
	hiddenTypes,
	setHiddenTypes,
	existingTypes,
}: TestChartProps) {
	const getCoords = useCallback(
		(timestamp: number, percent: number) => {
			const y =
				CHART_PADDING_TOP +
				CHART_PLOT_HEIGHT -
				(percent / 100) * CHART_PLOT_HEIGHT;
			let x = CHART_PADDING_LEFT + CHART_PLOT_WIDTH / 2;
			if (timeBounds.max > timeBounds.min) {
				x =
					CHART_PADDING_LEFT +
					((timestamp - timeBounds.min) / (timeBounds.max - timeBounds.min)) *
						CHART_PLOT_WIDTH;
			}
			return { x, y };
		},
		[timeBounds],
	);

	const singleLineD = useMemo(() => {
		if (parsedPoints.length === 0) return "";
		return parsedPoints
			.map((p, i) => {
				const { x, y } = getCoords(p.timestamp, p.percent);
				return `${i === 0 ? "M" : "L"} ${x} ${y}`;
			})
			.join(" ");
	}, [parsedPoints, getCoords]);

	const categoriesMap = useMemo(() => {
		const groups: Record<string, typeof parsedPoints> = {};
		for (const p of parsedPoints) {
			if (!groups[p.testType]) groups[p.testType] = [];
			groups[p.testType].push(p);
		}
		return groups;
	}, [parsedPoints]);

	return (
		<article className="relative overflow-hidden rounded-[28px] border-2 border-[#1a2840]/10 bg-[#fdfaf4]/90 p-5 shadow-[0_4px_6px_rgba(26,40,64,0.05),0_12px_32px_rgba(26,40,64,0.08),inset_0_1px_0_rgba(255,255,255,0.95)]">
			<div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1a2840]/8 pb-4 mb-4">
				<div className="flex items-center gap-3">
					<TrendingUp className="h-5 w-5 text-[#b8872a]" />
					<h4 className="text-sm font-black uppercase tracking-widest text-[#1a2840]/85">
						Outcome Timeline
					</h4>
				</div>

				{/* Chart Control switchers */}
				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={() => setChartMode("single")}
						className={`rounded-lg border px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition ${
							chartMode === "single"
								? "border-[#b8872a]/30 bg-[#b8872a]/10 text-[#b8872a]"
								: "border-[#1a2840]/10 bg-[#1a2840]/5 text-[#1a2840]/40 hover:bg-[#1a2840]/8 hover:text-[#1a2840]"
						}`}
					>
						Single Continuous Line
					</button>
					<button
						type="button"
						onClick={() => setChartMode("multi")}
						className={`rounded-lg border px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition ${
							chartMode === "multi"
								? "border-[#b8872a]/30 bg-[#b8872a]/10 text-[#b8872a]"
								: "border-[#1a2840]/10 bg-[#1a2840]/5 text-[#1a2840]/40 hover:bg-[#1a2840]/8 hover:text-[#1a2840]"
						}`}
					>
						Multi-Line Type Comparison
					</button>
				</div>
			</div>

			{/* Category filter pills */}
			{existingTypes.length > 0 && (
				<div className="flex flex-wrap items-center gap-2 mb-5">
					<span className="text-[9px] font-black uppercase tracking-wider text-[#1a2840]/35">
						Filter Categories:
					</span>
					{existingTypes.map((type) => {
						const active = !hiddenTypes[type];
						const catColor = getCategoryColor(type);
						return (
							<button
								key={type}
								type="button"
								onClick={() =>
									setHiddenTypes((prev) => ({
										...prev,
										[type]: !prev[type],
									}))
								}
								className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-wider transition"
								style={{
									borderColor: active ? `${catColor}35` : "rgba(26,40,64,0.08)",
									backgroundColor: active
										? `${catColor}12`
										: "rgba(26,40,64,0.04)",
									color: active ? catColor : "rgba(26,40,64,0.35)",
								}}
							>
								<span
									className="h-1.5 w-1.5 rounded-full"
									style={{
										backgroundColor: active
											? catColor
											: "rgba(255,255,255,0.2)",
									}}
								/>
								{type}
							</button>
						);
					})}
				</div>
			)}

			{/* Chart Plot Frame */}
			<div className="relative w-full h-[400px] bg-[#f0e9d8]/50 rounded-[20px] border border-[#1a2840]/8 overflow-hidden">
				{parsedPoints.length === 0 ? (
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3">
						<div className="h-12 w-12 rounded-2xl border border-[#1a2840]/10 bg-[#1a2840]/5 flex items-center justify-center text-[#1a2840]/35">
							<Award className="h-6 w-6" />
						</div>
						<div>
							<p className="text-sm font-semibold text-[#1a2840]/45">
								No Active Test Outcomes to Map
							</p>
							<p className="text-xs text-[#1a2840]/30 mt-1 max-w-[280px] body-serif">
								Toggle test category filters back on or log your first
								performance outcome to draw the chronological analytics path.
							</p>
						</div>
					</div>
				) : (
					<>
						{/* Native SVG Chart */}
						<svg
							viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
							className="w-full h-full p-2"
							role="img"
							aria-label="Test Score Timeline Chart"
						>
							<title>Test Score Timeline Chart</title>
							<defs>
								<linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
									<stop offset="0%" stopColor="#b8872a" stopOpacity="0.20" />
									<stop offset="100%" stopColor="#b8872a" stopOpacity="0" />
								</linearGradient>
								<filter
									id="neonGlow"
									x="-20%"
									y="-20%"
									width="140%"
									height="140%"
								>
									<feDropShadow
										dx="0"
										dy="2"
										stdDeviation="2"
										floodColor="#b8872a"
										floodOpacity="0.3"
									/>
								</filter>
							</defs>

							{/* Horizontal Grid lines */}
							{[0, 20, 40, 60, 80, 100].map((val) => {
								const y =
									CHART_PADDING_TOP +
									CHART_PLOT_HEIGHT -
									(val / 100) * CHART_PLOT_HEIGHT;
								return (
									<g key={val}>
										<line
											x1={CHART_PADDING_LEFT}
											y1={y}
											x2={CHART_WIDTH - CHART_PADDING_RIGHT}
											y2={y}
											stroke="rgba(26, 40, 64, 0.07)"
											strokeDasharray="4 4"
										/>
										<text
											x={CHART_PADDING_LEFT - 10}
											y={y + 4}
											textAnchor="end"
											fill="rgba(26, 40, 64, 0.32)"
											fontSize="10"
											fontWeight="bold"
										>
											{val}%
										</text>
									</g>
								);
							})}

							{/* X-axis lines & grid ticks */}
							<line
								x1={CHART_PADDING_LEFT}
								y1={CHART_HEIGHT - CHART_PADDING_BOTTOM}
								x2={CHART_WIDTH - CHART_PADDING_RIGHT}
								y2={CHART_HEIGHT - CHART_PADDING_BOTTOM}
								stroke="rgba(26, 40, 64, 0.15)"
							/>

							{/* Chart Paths */}
							{chartMode === "single" ? (
								<>
									{/* Gradient Area under curve */}
									{parsedPoints.length > 1 && (
										<path
											d={`${singleLineD} L ${
												getCoords(
													parsedPoints[parsedPoints.length - 1].timestamp,
													0,
												).x
											} ${CHART_HEIGHT - CHART_PADDING_BOTTOM} L ${
												getCoords(parsedPoints[0].timestamp, 0).x
											} ${CHART_HEIGHT - CHART_PADDING_BOTTOM} Z`}
											fill="url(#chartGradient)"
										/>
									)}
									{/* Curved Line Path */}
									{parsedPoints.length > 1 && (
										<path
											d={singleLineD}
											fill="none"
											stroke="#b8872a"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
											filter="url(#neonGlow)"
										/>
									)}
								</>
							) : (
								Object.keys(categoriesMap).map((type) => {
									const pts = categoriesMap[type];
									const catColor = getCategoryColor(type);
									if (pts.length < 2) return null;

									const pathD = pts
										.map((p, i) => {
											const { x, y } = getCoords(p.timestamp, p.percent);
											return `${i === 0 ? "M" : "L"} ${x} ${y}`;
										})
										.join(" ");

									return (
										<path
											key={type}
											d={pathD}
											fill="none"
											stroke={catColor}
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
											style={{
												filter: `drop-shadow(0 2px 4px ${catColor}44)`,
											}}
										/>
									);
								})
							)}

							{/* Active Nodes */}
							{parsedPoints.map((p) => {
								const { x, y } = getCoords(p.timestamp, p.percent);
								const dotColor =
									chartMode === "single"
										? "#b8872a"
										: getCategoryColor(p.testType);
								const isActive = hoveredPoint?.id === p.id;

								return (
									<g key={p.id}>
										{isActive && (
											<>
												{/* Target crosshair rings */}
												<circle
													cx={x}
													cy={y}
													r="12"
													fill="none"
													stroke={dotColor}
													strokeOpacity="0.25"
													strokeWidth="1.5"
												/>
												<circle
													cx={x}
													cy={y}
													r="7"
													fill="none"
													stroke={dotColor}
													strokeOpacity="0.5"
													strokeWidth="1.5"
												/>
												{/* Horizontal tracker */}
												<line
													x1={CHART_PADDING_LEFT}
													y1={y}
													x2={x}
													y2={y}
													stroke={dotColor}
													strokeWidth="1"
													strokeDasharray="2 2"
													strokeOpacity="0.5"
												/>
												{/* Vertical tracker */}
												<line
													x1={x}
													y1={y}
													x2={x}
													y2={CHART_HEIGHT - CHART_PADDING_BOTTOM}
													stroke={dotColor}
													strokeWidth="1"
													strokeDasharray="2 2"
													strokeOpacity="0.5"
												/>
											</>
										)}
										{/* biome-ignore lint/a11y/useSemanticElements: SVG circle is interactive node in line chart */}
										<circle
											role="button"
											tabIndex={0}
											aria-label={`Test ${p.testName} score ${p.percent}%`}
											cx={x}
											cy={y}
											r={isActive ? "6" : "4.5"}
											fill="#fdfaf4"
											stroke={dotColor}
											strokeWidth="2.5"
											className="cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8be3ff]"
											onMouseEnter={() => setHoveredPoint(p)}
											onMouseLeave={() => setHoveredPoint(null)}
											onFocus={() => setHoveredPoint(p)}
											onBlur={() => setHoveredPoint(null)}
											onKeyDown={(e) => {
												if (e.key === "Enter" || e.key === " ") {
													setHoveredPoint(p);
												}
											}}
										/>
									</g>
								);
							})}

							{/* Date Labels under ticks */}
							{parsedPoints.length > 0 &&
								[
									parsedPoints[0],
									parsedPoints[Math.floor(parsedPoints.length / 2)],
									parsedPoints[parsedPoints.length - 1],
								]
									.filter(
										(p, i, self) => self.findIndex((x) => x.id === p.id) === i,
									)
									.map((p) => {
										const { x } = getCoords(p.timestamp, p.percent);
										return (
											<text
												key={p.id}
												x={x}
												y={CHART_HEIGHT - CHART_PADDING_BOTTOM + 20}
												textAnchor="middle"
												fill="rgba(26, 40, 64, 0.32)"
												fontSize="9"
												fontWeight="bold"
											>
												{p.testDate}
											</text>
										);
									})}
						</svg>

						{/* Tooltip Overlay */}
						{hoveredPoint && (
							<div
								className="absolute z-10 p-3 rounded-xl border border-[#1a2840]/12 bg-[#fdfaf4]/98 shadow-xl text-left text-xs min-w-[200px] pointer-events-none"
								style={{
									left: `${Math.min(
										Math.max(
											getCoords(hoveredPoint.timestamp, hoveredPoint.percent)
												.x - 100,
											10,
										),
										CHART_PLOT_WIDTH - 140,
									)}px`,
									top: `${Math.max(
										getCoords(hoveredPoint.timestamp, hoveredPoint.percent).y -
											140,
										10,
									)}px`,
									boxShadow: `0 8px 24px -4px ${
										getScoreColor(hoveredPoint.percent).color
									}22`,
								}}
							>
								<div className="flex items-center justify-between border-b border-[#1a2840]/8 pb-1.5 mb-1.5">
									<span className="text-[9px] font-black uppercase tracking-wider text-[#1a2840]/40 flex items-center gap-1">
										<Calendar className="h-3 w-3" />
										{hoveredPoint.testDate}
									</span>
									<span
										className={`rounded-full border px-2 py-0.5 text-[8px] font-black uppercase tracking-wider ${
											getScoreColor(hoveredPoint.percent).text
										} ${getScoreColor(hoveredPoint.percent).bg} ${
											getScoreColor(hoveredPoint.percent).border
										}`}
									>
										{hoveredPoint.percent}%
									</span>
								</div>

								<p className="font-semibold text-[#1a2840] truncate max-w-[180px]">
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
									{hoveredPoint.chaptersCovered && (
										<p className="border-t border-[#1a2840]/8 pt-1.5 mt-1.5 leading-relaxed">
											<span className="block font-bold text-[#1a2840]/40 mb-0.5">
												Chapters Covered:
											</span>
											<span className="text-[9px] text-[#1a2840]/60 block max-h-[40px] overflow-y-auto truncate-multiline">
												{JSON.parse(hoveredPoint.chaptersCovered).join(", ")}
											</span>
										</p>
									)}
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</article>
	);
}
