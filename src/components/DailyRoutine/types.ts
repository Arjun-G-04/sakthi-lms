export type TrackId = "A" | "B" | "C";

export type RoutineBlockCategory =
	| "Circadian & Movement"
	| "Nutrition"
	| "Focus Block"
	| "School/Transit"
	| "Recovery & Sleep"
	| "Interruption";

export interface RoutineBlock {
	id: string;
	plannedStart: string; // HH:MM
	plannedEnd: string; // HH:MM
	title: string;
	category: RoutineBlockCategory;
	details?: string;
	completed: boolean;
	actualStart?: string;
	actualEnd?: string;
	delayMinutes?: number;
	delayNote?: string;
	isCustom?: boolean;
}

export interface MistakeEntry {
	id: string;
	errorTrap: string;
	fixRule: string;
}

export interface NonNegotiableStatus {
	walk?: boolean;
	fourEggs?: boolean;
	veggiesFirst?: boolean;
	zeroReels?: boolean;
}

export interface DailyRoutineLog {
	date: string; // YYYY-MM-DD
	trackId: TrackId;
	blocks: RoutineBlock[];
	mistakeLog: MistakeEntry[];
	nonNegotiables?: NonNegotiableStatus;
}

export interface TrackMeta {
	id: TrackId;
	title: string;
	subtitle: string;
	hours: string;
	targetDeepFocusMinutes: number; // e.g. 190 for 3h 10m
	targetDeepFocusLabel: string;
}

export const TRACK_METAS: Record<TrackId, TrackMeta> = {
	A: {
		id: "A",
		title: "Track A",
		subtitle: "Long School Day",
		hours: "7:30 AM – 6:00 PM",
		targetDeepFocusMinutes: 190, // 3h 10m
		targetDeepFocusLabel: "3h 10m",
	},
	B: {
		id: "B",
		title: "Track B",
		subtitle: "Standard School Day",
		hours: "8:10 AM – 5:00 PM",
		targetDeepFocusMinutes: 230, // 3h 50m
		targetDeepFocusLabel: "3h 50m",
	},
	C: {
		id: "C",
		title: "Track C",
		subtitle: "No-School / Weekend",
		hours: "Full Study Day",
		targetDeepFocusMinutes: 510, // 8h 30m
		targetDeepFocusLabel: "8h 30m",
	},
};

export const TRACK_TEMPLATES: Record<TrackId, RoutineBlock[]> = {
	A: [
		{
			id: "a-1",
			plannedStart: "05:45",
			plannedEnd: "05:50",
			title: "Wake Up & Hydrate",
			details: "500 mL water",
			category: "Circadian & Movement",
			completed: false,
		},
		{
			id: "a-2",
			plannedStart: "05:50",
			plannedEnd: "06:15",
			title: "25-Min Brisk Walk Outdoors",
			details: "Sunlight exposure",
			category: "Circadian & Movement",
			completed: false,
		},
		{
			id: "a-3",
			plannedStart: "06:15",
			plannedEnd: "06:45",
			title: "Shower & Breakfast",
			details: "2 Whole Eggs + light carb",
			category: "Nutrition",
			completed: false,
		},
		{
			id: "a-4",
			plannedStart: "06:45",
			plannedEnd: "07:25",
			title: "Pre-School Focus Sprint",
			details: "40 min: formulas/active recall",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "a-5",
			plannedStart: "07:30",
			plannedEnd: "18:00",
			title: "School & Transit",
			details: "Lunch: Veggies first + 2 boiled eggs",
			category: "School/Transit",
			completed: false,
		},
		{
			id: "a-6",
			plannedStart: "18:00",
			plannedEnd: "18:30",
			title: "Decompress & 15-Min NSDR Reset",
			details: "Zero screens",
			category: "Recovery & Sleep",
			completed: false,
		},
		{
			id: "a-7",
			plannedStart: "18:30",
			plannedEnd: "20:00",
			title: "Evening Focus Block 1",
			details: "90 min: Physics / Analytical",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "a-8",
			plannedStart: "20:00",
			plannedEnd: "20:45",
			title: "Light Dinner & Family Time",
			details: "Balanced recovery meal",
			category: "Nutrition",
			completed: false,
		},
		{
			id: "a-9",
			plannedStart: "20:45",
			plannedEnd: "22:15",
			title: "Evening Focus Block 2",
			details: "90 min: Timed practice / Revision",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "a-10",
			plannedStart: "22:15",
			plannedEnd: "22:30",
			title: "Mistake Diary Log & Next-Day Prep",
			details: "Log errors and clarify rules",
			category: "Recovery & Sleep",
			completed: false,
		},
		{
			id: "a-11",
			plannedStart: "22:30",
			plannedEnd: "05:45",
			title: "Sleep",
			details: "Zero Reels/Shorts, phone out of room",
			category: "Recovery & Sleep",
			completed: false,
		},
	],
	B: [
		{
			id: "b-1",
			plannedStart: "06:00",
			plannedEnd: "06:10",
			title: "Wake Up & Hydrate",
			details: "500 mL water",
			category: "Circadian & Movement",
			completed: false,
		},
		{
			id: "b-2",
			plannedStart: "06:10",
			plannedEnd: "06:40",
			title: "30-Min Brisk Walk Outdoors",
			details: "Sunlight exposure",
			category: "Circadian & Movement",
			completed: false,
		},
		{
			id: "b-3",
			plannedStart: "06:40",
			plannedEnd: "07:10",
			title: "Shower & Breakfast",
			details: "2 Whole Eggs",
			category: "Nutrition",
			completed: false,
		},
		{
			id: "b-4",
			plannedStart: "07:10",
			plannedEnd: "08:00",
			title: "Morning Focus Block",
			details: "50 min: Hard derivations/recall",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "b-5",
			plannedStart: "08:10",
			plannedEnd: "17:00",
			title: "School & Transit",
			details: "Lunch: Veggies first + 2 boiled eggs",
			category: "School/Transit",
			completed: false,
		},
		{
			id: "b-6",
			plannedStart: "17:00",
			plannedEnd: "17:30",
			title: "Post-School Decompress & 15-Min NSDR Reset",
			details: "Zero screens",
			category: "Recovery & Sleep",
			completed: false,
		},
		{
			id: "b-7",
			plannedStart: "17:30",
			plannedEnd: "19:00",
			title: "Focus Block 1",
			details: "90 min: Core analytical problem solving",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "b-8",
			plannedStart: "19:00",
			plannedEnd: "19:15",
			title: "Active Break",
			details: "Zero screens",
			category: "Recovery & Sleep",
			completed: false,
		},
		{
			id: "b-9",
			plannedStart: "19:15",
			plannedEnd: "20:45",
			title: "Focus Block 2",
			details: "90 min: Secondary subject practice",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "b-10",
			plannedStart: "20:45",
			plannedEnd: "21:30",
			title: "Light Dinner",
			details: "Protein and light carbs",
			category: "Nutrition",
			completed: false,
		},
		{
			id: "b-11",
			plannedStart: "21:30",
			plannedEnd: "22:30",
			title: "Consolidation Block",
			details: "60 min: Mistake diary + active recall",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "b-12",
			plannedStart: "22:30",
			plannedEnd: "06:00",
			title: "Sleep",
			details: "Zero Reels/Shorts",
			category: "Recovery & Sleep",
			completed: false,
		},
	],
	C: [
		{
			id: "c-1",
			plannedStart: "06:30",
			plannedEnd: "06:40",
			title: "Wake Up & Hydrate",
			details: "500 mL water",
			category: "Circadian & Movement",
			completed: false,
		},
		{
			id: "c-2",
			plannedStart: "06:40",
			plannedEnd: "07:10",
			title: "30-Min Brisk Walk Outdoors",
			details: "Sunlight exposure",
			category: "Circadian & Movement",
			completed: false,
		},
		{
			id: "c-3",
			plannedStart: "07:15",
			plannedEnd: "07:45",
			title: "Shower & Breakfast",
			details: "2 Whole Eggs",
			category: "Nutrition",
			completed: false,
		},
		{
			id: "c-4",
			plannedStart: "08:00",
			plannedEnd: "09:30",
			title: "Focus Block 1",
			details: "90 min: Heaviest analytical topic",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "c-5",
			plannedStart: "09:45",
			plannedEnd: "11:15",
			title: "Focus Block 2",
			details: "90 min: Numerical continuation",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "c-6",
			plannedStart: "11:45",
			plannedEnd: "13:15",
			title: "Focus Block 3",
			details: "90 min: High-volume theory/concepts",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "c-7",
			plannedStart: "13:15",
			plannedEnd: "14:45",
			title: "Veggies-First Lunch + 2 Eggs + 20-Min Power Nap",
			details: "Veggies first + 2 eggs",
			category: "Nutrition",
			completed: false,
		},
		{
			id: "c-8",
			plannedStart: "14:45",
			plannedEnd: "16:15",
			title: "Focus Block 4",
			details: "90 min: Timed mock practice",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "c-9",
			plannedStart: "16:45",
			plannedEnd: "18:15",
			title: "Focus Block 5",
			details: "90 min: Line-by-line reading / active recall",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "c-10",
			plannedStart: "18:15",
			plannedEnd: "20:15",
			title: "Evening Walk, Shower & Light Dinner",
			details: "Recovery walk and nutrition",
			category: "Nutrition",
			completed: false,
		},
		{
			id: "c-11",
			plannedStart: "20:30",
			plannedEnd: "21:30",
			title: "Consolidation",
			details: "60 min: Mistake diary + formula review",
			category: "Focus Block",
			completed: false,
		},
		{
			id: "c-12",
			plannedStart: "21:30",
			plannedEnd: "22:30",
			title: "Digital Blackout & Wind Down",
			details: "Zero Reels/Shorts",
			category: "Recovery & Sleep",
			completed: false,
		},
		{
			id: "c-13",
			plannedStart: "22:30",
			plannedEnd: "06:30",
			title: "Sleep",
			details: "Deep 8-hour recovery",
			category: "Recovery & Sleep",
			completed: false,
		},
	],
};
