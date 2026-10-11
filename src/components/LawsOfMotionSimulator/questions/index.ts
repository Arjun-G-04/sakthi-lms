import type { Question } from "#/components/CbtSimulator/types";
import { lawsOfMotionQuestionsPart1 } from "./part1";
import { lawsOfMotionQuestionsPart2 } from "./part2";

export type { Question };
export const lawsOfMotionQuestions: Question[] = [
	...lawsOfMotionQuestionsPart1,
	...lawsOfMotionQuestionsPart2,
];
