import type { Question } from "./part1";
import { photosynthesisQuestionsPart1 } from "./part1";
import { photosynthesisQuestionsPart2 } from "./part2";

export type { Question };
export const photosynthesisQuestions: Question[] = [
	...photosynthesisQuestionsPart1,
	...photosynthesisQuestionsPart2,
];
