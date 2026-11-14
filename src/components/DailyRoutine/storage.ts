import { type DailyRoutineLog, TRACK_TEMPLATES, type TrackId } from "./types";

const STORAGE_PREFIX = "sakthi_routine_log_";

export function getStorageKey(date: string): string {
	return `${STORAGE_PREFIX}${date}`;
}

export function createInitialLog(
	date: string,
	trackId: TrackId = "A",
): DailyRoutineLog {
	const templateBlocks = TRACK_TEMPLATES[trackId] || TRACK_TEMPLATES.A;
	return {
		date,
		trackId,
		blocks: templateBlocks.map((b) => ({ ...b })),
		mistakeLog: [],
		nonNegotiables: {},
	};
}

export function loadRoutineLog(
	date: string,
	fallbackTrack: TrackId = "A",
): DailyRoutineLog {
	if (typeof window === "undefined") {
		return createInitialLog(date, fallbackTrack);
	}

	try {
		const raw = window.localStorage.getItem(getStorageKey(date));
		if (!raw) {
			return createInitialLog(date, fallbackTrack);
		}
		const parsed = JSON.parse(raw) as DailyRoutineLog;
		if (!parsed || !parsed.blocks || !Array.isArray(parsed.blocks)) {
			return createInitialLog(date, fallbackTrack);
		}
		return {
			...parsed,
			mistakeLog: Array.isArray(parsed.mistakeLog) ? parsed.mistakeLog : [],
			nonNegotiables: parsed.nonNegotiables || {},
		};
	} catch (e) {
		console.error("Failed to parse routine log from localStorage", e);
		return createInitialLog(date, fallbackTrack);
	}
}

export function saveRoutineLog(log: DailyRoutineLog): void {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(getStorageKey(log.date), JSON.stringify(log));
	} catch (e) {
		console.error("Failed to save routine log to localStorage", e);
	}
}

export function hasLoggedProgress(log: DailyRoutineLog): boolean {
	if (log.mistakeLog && log.mistakeLog.length > 0) return true;
	if (
		log.nonNegotiables &&
		(log.nonNegotiables.walk ||
			log.nonNegotiables.fourEggs ||
			log.nonNegotiables.veggiesFirst ||
			log.nonNegotiables.zeroReels)
	) {
		return true;
	}
	return log.blocks.some(
		(b) =>
			b.completed ||
			!!b.actualStart ||
			!!b.actualEnd ||
			!!b.delayNote ||
			b.isCustom,
	);
}
