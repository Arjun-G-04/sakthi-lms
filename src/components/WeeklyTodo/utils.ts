import { CHAPTER_GROUPS, makeChapterKey } from "#/lib/chapter-catalog";

export type ChapterOption = {
	chapterKey: string;
	chapterTitle: string;
	subject: string;
	accent: string;
};

export const CHAPTER_OPTIONS: ChapterOption[] = CHAPTER_GROUPS.flatMap(
	(group) =>
		group.chapters.map((title) => ({
			chapterKey: makeChapterKey(group.subject, group.grade, title),
			chapterTitle: title,
			subject: group.subject,
			accent: group.accent,
		})),
);

export const chapterMap = new Map(
	CHAPTER_OPTIONS.map((c) => [c.chapterKey, c]),
);

export function getStartOfWeek(date: Date): Date {
	const d = new Date(date);
	const day = d.getDay(); // Sunday is 0, Monday is 1...
	d.setDate(d.getDate() - day);
	d.setHours(0, 0, 0, 0);
	return d;
}

export function formatDate(date: Date): string {
	const yyyy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, "0");
	const dd = String(date.getDate()).padStart(2, "0");
	return `${yyyy}-${mm}-${dd}`;
}

export function formatWeekRange(start: Date): string {
	const end = new Date(start);
	end.setDate(start.getDate() + 6);

	const optionsStart: Intl.DateTimeFormatOptions = {
		month: "short",
		day: "numeric",
	};
	const optionsEnd: Intl.DateTimeFormatOptions = {
		month: "short",
		day: "numeric",
		year: "numeric",
	};

	return `${start.toLocaleDateString("en-US", optionsStart)} – ${end.toLocaleDateString("en-US", optionsEnd)}`;
}
