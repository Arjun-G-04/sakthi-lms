import type { Question, SectionInfo } from "#/components/CbtSimulator/types";
import { botanyPart1Questions } from "./botany-part1";
import { botanyPart2Questions } from "./botany-part2";
import { chemistryPart1Questions } from "./chemistry-part1";
import { chemistryPart2Questions } from "./chemistry-part2";
import { physicsPart1Questions } from "./physics-part1";
import { physicsPart2Questions } from "./physics-part2";
import { zoologyPart1Questions } from "./zoology-part1";
import { zoologyPart2Questions } from "./zoology-part2";

export const aiatsMock1Questions: Question[] = [
	...physicsPart1Questions,
	...physicsPart2Questions,
	...chemistryPart1Questions,
	...chemistryPart2Questions,
	...botanyPart1Questions,
	...botanyPart2Questions,
	...zoologyPart1Questions,
	...zoologyPart2Questions,
];

export const aiatsMock1Sections: SectionInfo[] = [
	{ name: "Physics", startIndex: 0, endIndex: 44 },
	{ name: "Chemistry", startIndex: 45, endIndex: 89 },
	{ name: "Botany", startIndex: 90, endIndex: 134 },
	{ name: "Zoology", startIndex: 135, endIndex: 179 },
];

export const aiatsMock1Chapters: string[] = [
	"Current Electricity",
	"Moving Charges and Magnetism",
	"Magnetism and Matter",
	"Electromagnetic Induction",
	"Chemical Kinetics",
	"d & f Block Elements",
	"Coordination Compounds",
	"Principles of Inheritance and Variation",
	"Molecular Basis of Inheritance",
	"Reproductive Health",
	"Evolution",
];
