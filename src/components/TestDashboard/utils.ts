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
			text: "text-[#d1fae5]", // Light jade on dark bg
			bg: "bg-[#065f46]",
			border: "border-[#059669]/50",
			color: "#059669",
		};
	}
	if (percent >= 80) {
		return {
			text: "text-[#fef3c7]", // Light amber on dark bg
			bg: "bg-[#92400e]",
			border: "border-[#b45309]/50",
			color: "#b45309",
		};
	}
	if (percent >= 70) {
		return {
			text: "text-[#ffedd5]", // Light orange on dark bg
			bg: "bg-[#9a3412]",
			border: "border-[#c2410c]/50",
			color: "#c2410c",
		};
	}
	return {
		text: "text-[#ffe4e6]", // Light rose on dark bg
		bg: "bg-[#9f1239]",
		border: "border-[#be123c]/50",
		color: "#be123c",
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
