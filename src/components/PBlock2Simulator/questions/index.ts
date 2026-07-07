import type { Question } from "#/components/CbtSimulator/types";
import { pBlock2QuestionsPart1 } from "./part1";
import { pBlock2QuestionsPart2 } from "./part2";

export type { Question };
export const pBlock2Questions: Question[] = [
	...pBlock2QuestionsPart1,
	...pBlock2QuestionsPart2,
];
