import type {
	NonNegotiableStatus,
	RoutineBlock,
	RoutineBlockCategory,
} from "./types";

export function timeToMinutes(time: string): number {
	const [h, m] = time.split(":").map(Number);
	return (h || 0) * 60 + (m || 0);
}

export function minutesToTime(totalMinutes: number): string {
	const normalized = ((totalMinutes % 1440) + 1440) % 1440;
	const hours = Math.floor(normalized / 60);
	const mins = normalized % 60;
	return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export function calculateDuration(start: string, end: string): number {
	const startM = timeToMinutes(start);
	const endM = timeToMinutes(end);
	if (endM >= startM) {
		return endM - startM;
	}
	// Handles overnight wrapping (e.g. 22:30 to 05:45)
	return 1440 - startM + endM;
}

export function formatDuration(minutes: number): string {
	if (minutes <= 0) return "0m";
	const h = Math.floor(minutes / 60);
	const m = minutes % 60;
	if (h > 0 && m > 0) return `${h}h ${m}m`;
	if (h > 0) return `${h}h`;
	return `${m}m`;
}

export function calculateDrift(
	plannedStart: string,
	actualStart?: string,
): {
	driftMinutes: number;
	badgeText: string;
	status: "ontime" | "late" | "early" | "none";
} {
	if (!actualStart) {
		return { driftMinutes: 0, badgeText: "On time", status: "none" };
	}
	const planned = timeToMinutes(plannedStart);
	const actual = timeToMinutes(actualStart);

	// Handle midnight crossing near boundaries if needed
	let diff = actual - planned;
	if (diff > 720) diff -= 1440;
	if (diff < -720) diff += 1440;

	if (diff === 0) {
		return { driftMinutes: 0, badgeText: "On time", status: "ontime" };
	}
	if (diff > 0) {
		return {
			driftMinutes: diff,
			badgeText: `+${diff}m late`,
			status: "late",
		};
	}
	return {
		driftMinutes: diff,
		badgeText: `${diff}m early`,
		status: "early",
	};
}

export function shiftBlocks(
	blocks: RoutineBlock[],
	fromIndex: number,
	shiftMinutes: number,
): RoutineBlock[] {
	return blocks.map((block, idx) => {
		// Shift only subsequent uncompleted blocks
		if (idx > fromIndex && !block.completed) {
			const startM = timeToMinutes(block.plannedStart) + shiftMinutes;
			const endM = timeToMinutes(block.plannedEnd) + shiftMinutes;
			return {
				...block,
				plannedStart: minutesToTime(startM),
				plannedEnd: minutesToTime(endM),
			};
		}
		return block;
	});
}

export function calculateDeepFocusLoggedMinutes(
	blocks: RoutineBlock[],
): number {
	return blocks
		.filter((b) => b.category === "Focus Block" && b.completed)
		.reduce((acc, b) => {
			if (b.actualStart && b.actualEnd) {
				return acc + calculateDuration(b.actualStart, b.actualEnd);
			}
			return acc + calculateDuration(b.plannedStart, b.plannedEnd);
		}, 0);
}

export function getTodayString(): string {
	const now = new Date();
	const y = now.getFullYear();
	const m = String(now.getMonth() + 1).padStart(2, "0");
	const d = String(now.getDate()).padStart(2, "0");
	return `${y}-${m}-${d}`;
}

export function formatDateDisplay(dateStr: string): string {
	const [y, m, d] = dateStr.split("-").map(Number);
	if (!y || !m || !d) return dateStr;
	const date = new Date(y, m - 1, d);
	return date.toLocaleDateString("en-US", {
		weekday: "short",
		month: "short",
		day: "numeric",
		year: "numeric",
	});
}

export function deriveNonNegotiables(
	blocks: RoutineBlock[],
	manual: NonNegotiableStatus = {},
): NonNegotiableStatus {
	// Auto-detect from blocks unless manually overridden
	const walkBlock = blocks.find(
		(b) =>
			b.category === "Circadian & Movement" &&
			b.title.toLowerCase().includes("walk"),
	);
	const sleepBlock = blocks.find(
		(b) =>
			b.category === "Recovery & Sleep" &&
			(b.details?.toLowerCase().includes("zero reels") ||
				b.title.toLowerCase().includes("sleep")),
	);
	const lunchBlock = blocks.find((b) =>
		b.details?.toLowerCase().includes("veggies first"),
	);

	return {
		walk: manual.walk !== undefined ? !!manual.walk : !!walkBlock?.completed,
		fourEggs: !!manual.fourEggs,
		veggiesFirst:
			manual.veggiesFirst !== undefined
				? !!manual.veggiesFirst
				: !!lunchBlock?.completed,
		zeroReels:
			manual.zeroReels !== undefined
				? !!manual.zeroReels
				: !!sleepBlock?.completed,
	};
}

export function getCategoryCardStyle(
	category: RoutineBlockCategory,
	completed: boolean,
): {
	gradientBg: string;
	borderColor: string;
	tagColor: string;
} {
	if (completed) {
		return {
			gradientBg:
				"bg-gradient-to-l from-[#2d5a3d]/22 via-[#2d5a3d]/10 to-[#fdfaf4]/95",
			borderColor: "border-[#2d5a3d]/35",
			tagColor: "text-[#2d5a3d]/80",
		};
	}

	switch (category) {
		case "Focus Block":
			return {
				gradientBg:
					"bg-gradient-to-l from-[#2d5a3d]/30 via-[#2d5a3d]/14 to-[#fdfaf4]",
				borderColor: "border-[#2d5a3d]/35",
				tagColor: "text-[#2d5a3d]",
			};
		case "Circadian & Movement":
			return {
				gradientBg:
					"bg-gradient-to-l from-[#0284c7]/30 via-[#0284c7]/14 to-[#fdfaf4]",
				borderColor: "border-[#0284c7]/35",
				tagColor: "text-[#0369a1]",
			};
		case "Nutrition":
			return {
				gradientBg:
					"bg-gradient-to-l from-[#b8872a]/35 via-[#b8872a]/16 to-[#fdfaf4]",
				borderColor: "border-[#b8872a]/40",
				tagColor: "text-[#916518]",
			};
		case "School/Transit":
			return {
				gradientBg:
					"bg-gradient-to-l from-[#334155]/28 via-[#334155]/12 to-[#fdfaf4]",
				borderColor: "border-[#334155]/35",
				tagColor: "text-[#1e293b]",
			};
		case "Recovery & Sleep":
			return {
				gradientBg:
					"bg-gradient-to-l from-[#6366f1]/30 via-[#6366f1]/14 to-[#fdfaf4]",
				borderColor: "border-[#6366f1]/35",
				tagColor: "text-[#4338ca]",
			};
		case "Interruption":
			return {
				gradientBg:
					"bg-gradient-to-l from-[#dc2626]/30 via-[#dc2626]/14 to-[#fdfaf4]",
				borderColor: "border-[#dc2626]/35",
				tagColor: "text-[#b91c1c]",
			};
	}
}
