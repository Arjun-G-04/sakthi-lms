import { type Question, questionsPart1 } from "./part1";
import { questionsPart2 } from "./part2";

export type { Question };

export const oscillationsQuestions: Question[] = [
	...questionsPart1,
	...questionsPart2,
];
