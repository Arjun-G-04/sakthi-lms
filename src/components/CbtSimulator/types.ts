export interface Question {
	id: number;
	text: string;
	options: string[]; // Exactly 4 options
	correctOption: number; // 0-indexed: 0=A, 1=B, 2=C, 3=D
	explanation: string;
	svgDiagram?: string; // Optional raw SVG string for inline drawings
}

export type QuestionStatus =
	| "not_visited"
	| "not_answered"
	| "answered"
	| "marked"
	| "answered_marked";
