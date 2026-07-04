import type { Question } from "./part1";
import { pBlockQuestionsPart1 } from "./part1";
import { pBlockQuestionsPart2 } from "./part2";

export type { Question };
export const pBlockQuestions: Question[] = [
	...pBlockQuestionsPart1,
	...pBlockQuestionsPart2,
];
