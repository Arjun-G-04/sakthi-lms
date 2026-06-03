export type TestType = {
	id: number;
	testDate: string;
	testName: string;
	chaptersCovered: string;
	durationMinutes: number;
	totalMarks: number;
	scoredMarks: number;
	testType: string;
	createdAt: number;
};

export type ChartPoint = TestType & {
	percent: number;
	timestamp: number;
	index: number;
};

export type FormTestState = {
	testDate: string;
	testName: string;
	durationMinutes: number;
	totalMarks: number;
	scoredMarks: number;
	testType: string;
	chaptersCovered: string[];
};

export const CATEGORY_PALETTE: Record<string, string> = {
	"Mock Test": "#3b82f6", // Cobalt Sapphire
	"Part Test": "#ea580c", // Bright Terracotta
	"Weekly Test": "#10b981", // Emerald Teal
	"Chapter Test": "#a855f7", // Deep Orchid
	"Daily Test": "#ec4899", // Rose Quartz
	"Grand Test": "#f97316", // Sunset Terracotta
};

export function getCategoryColor(type: string) {
	if (CATEGORY_PALETTE[type]) return CATEGORY_PALETTE[type];
	const hash = type
		.split("")
		.reduce((acc, char) => acc + char.charCodeAt(0), 0);
	const colors = [
		"#3b82f6",
		"#ea580c",
		"#10b981",
		"#a855f7",
		"#ec4899",
		"#f97316",
		"#06b6d4",
		"#059669",
	];
	return colors[hash % colors.length];
}

export function getScoreColor(percent: number) {
	if (percent >= 90) {
		return {
			text: "text-[#34d399]", // Jade Green
			bg: "bg-[#064e3b]/55",
			border: "border-[#059669]/30",
			color: "#059669",
		};
	}
	if (percent >= 80) {
		return {
			text: "text-[#fbbf24]", // Honey Amber
			bg: "bg-[#78350f]/55",
			border: "border-[#b45309]/30",
			color: "#b45309",
		};
	}
	if (percent >= 70) {
		return {
			text: "text-[#f97316]", // Burnt Copper / Bronze
			bg: "bg-[#7c2d12]/55",
			border: "border-[#9a3412]/30",
			color: "#9a3412",
		};
	}
	return {
		text: "text-[#f43f5e]", // Ruby Crimson
		bg: "bg-[#4c0519]/55",
		border: "border-[#881337]/30",
		color: "#881337",
	};
}

export const CHART_WIDTH = 800;
export const CHART_HEIGHT = 400;
export const CHART_PADDING_LEFT = 70;
export const CHART_PADDING_RIGHT = 40;
export const CHART_PADDING_TOP = 40;
export const CHART_PADDING_BOTTOM = 50;
export const CHART_PLOT_WIDTH =
	CHART_WIDTH - CHART_PADDING_LEFT - CHART_PADDING_RIGHT;
export const CHART_PLOT_HEIGHT =
	CHART_HEIGHT - CHART_PADDING_TOP - CHART_PADDING_BOTTOM;
