import type { Question, SectionInfo } from "#/components/CbtSimulator/types";
import { basicConceptsAtomQuestionsPart1 } from "./part1";
import { basicConceptsAtomQuestionsPart2 } from "./part2";

export type { Question, SectionInfo };

export const basicConceptsAtomQuestions: Question[] = [
	...basicConceptsAtomQuestionsPart1,
	...basicConceptsAtomQuestionsPart2,
];

export const basicConceptsAtomSections: SectionInfo[] = [
	{ name: "Some Basic Concepts", startIndex: 0, endIndex: 29 },
	{ name: "Structure of Atom", startIndex: 30, endIndex: 59 },
];

export const basicConceptsAtomChapters: string[] = [
	"Some Basic Concepts of Chemistry",
	"Structure of Atom",
];
