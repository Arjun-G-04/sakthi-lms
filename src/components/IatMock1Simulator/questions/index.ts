import type { Question, SectionInfo } from "#/components/CbtSimulator/types";
import { iatBiologyQuestions } from "./biology";
import { iatChemistryQuestions } from "./chemistry";
import { iatMathsQuestions } from "./maths";
import { iatPhysicsQuestions } from "./physics";

export type { Question, SectionInfo };

export const iatMock1Questions: Question[] = [
	...iatPhysicsQuestions,
	...iatChemistryQuestions,
	...iatMathsQuestions,
	...iatBiologyQuestions,
];

export const iatMock1Sections: SectionInfo[] = [
	{ name: "Physics", startIndex: 0, endIndex: 14 },
	{ name: "Chemistry", startIndex: 15, endIndex: 29 },
	{ name: "Mathematics", startIndex: 30, endIndex: 44 },
	{ name: "Biology", startIndex: 45, endIndex: 59 },
];

export const iatMock1Chapters: string[] = [
	// Physics
	"Electrostatic Potential and Capacitance",
	"Current Electricity",
	"Moving Charges and Magnetism",
	"Magnetism and Matter",
	"Electromagnetic Induction",
	// Chemistry
	"Solutions",
	"Electrochemistry",
	"Chemical Kinetics",
	"The d-and f-Block Elements",
	"Coordination Compounds",
	// Maths
	"Relations and Functions",
	"Inverse Trigonometric Functions",
	"Matrices",
	"Determinants",
	"Continuity and Differentiability",
	"Application of Derivatives",
	"Integrals",
	"Application of Integrals",
	// Biology
	"Sexual Reproduction in Flowering Plants",
	"Human Reproduction",
	"Reproductive Health",
	"Principles of Inheritance and Variation",
	"Molecular Basis of Inheritance",
	"Evolution",
];
