export type ProgressState = "Yet to begin" | "In Progress" | "Done";
export type StatusState = "Weak" | "Medium" | "Strong";

export type ChapterField =
	| "notes"
	| "exercise"
	| "level1"
	| "level2"
	| "mb"
	| "status";

export type ChapterGroup = {
	subject: "Physics" | "Chemistry" | "Biology" | "Maths";
	grade: "11" | "12";
	accent: string;
	chapters: readonly string[];
};

export const PROGRESS_STATES: readonly ProgressState[] = [
	"Yet to begin",
	"In Progress",
	"Done",
] as const;

export const STATUS_STATES: readonly StatusState[] = [
	"Weak",
	"Medium",
	"Strong",
] as const;

export const CHAPTER_GROUPS: readonly ChapterGroup[] = [
	{
		subject: "Physics",
		grade: "11",
		accent: "#5ec5ff",
		chapters: [
			"Units and Measurements",
			"Motion in a Straight Line",
			"Motion in a Plane",
			"Laws of Motion",
			"Work, Energy and Power",
			"Gravitation",
			"Mechanical Properties of Solids",
			"System of Particles and Rotational Motion",
			"Mechanical Properties of Fluids",
			"Thermal Properties of Matter",
			"Thermodynamics",
			"Kinetic Theory",
			"Oscillations",
			"Waves",
		],
	},
	{
		subject: "Physics",
		grade: "12",
		accent: "#7d8cff",
		chapters: [
			"Electrostatic Potential and Capacitance",
			"Current Electricity",
			"Moving Charges and Magnetism",
			"Magnetism and Matter",
			"Electromagnetic Induction",
			"Alternating Current",
			"Electromagnetic Waves",
			"Ray Optics and Optical Instruments",
			"Wave Optics",
			"Dual Nature of Radiation and Matter",
			"Atoms",
			"Nuclei",
		],
	},
	{
		subject: "Chemistry",
		grade: "11",
		accent: "#ffb25c",
		chapters: [
			"Some Basic Concepts of Chemistry",
			"Structure of Atom",
			"Classification of Elements and Periodicity in Properties",
			"Chemical Bonding and Molecular Structure",
			"Thermodynamics",
			"Equilibrium",
			"Redox Reactions",
			"Organic Chemistry: Some basic Principles and Techniques",
			"Hydrocarbons",
			"p-block",
		],
	},
	{
		subject: "Chemistry",
		grade: "12",
		accent: "#ff7b6b",
		chapters: [
			"Solutions",
			"Electrochemistry",
			"Chemical Kinetics",
			"The d-and f-Block Elements",
			"Coordination Compounds",
			"Haloalkanes and Haloarenes",
			"Alcohols, Phenols and Ethers",
			"Aldehydes, Ketones and Carboxylic Acids",
			"Amines",
			"Biomolecules",
		],
	},
	{
		subject: "Biology",
		grade: "11",
		accent: "#75df9c",
		chapters: [
			"The Living World",
			"Biological Classification",
			"Plant Kingdom",
			"Animal Kingdom",
			"Morphology of Flowering Plants",
			"Anatomy of Flowering Plants",
			"Structural Organisation in Animals",
			"Cell : The Unit of Life",
			"Biomolecules",
			"Cell Cycle and Cell Division",
			"Photosynthesis in Higher Plants",
			"Respiration in Plants",
			"Breathing and Exchange of Gases",
			"Body Fluids and Circulation",
			"Excretory Products and their Elimination",
			"Locomotion and Movement",
			"Neural Control and Coordination",
			"Chemical Coordination and Integration",
			"Plant Growth and Hormones",
		],
	},
	{
		subject: "Biology",
		grade: "12",
		accent: "#44d0b0",
		chapters: [
			"Sexual Reproduction in Flowering Plants",
			"Human Reproduction",
			"Reproductive Health",
			"Principles of Inheritance and Variation",
			"Molecular Basis of Inheritance",
			"Evolution",
			"Human Health and Disease",
			"Microbes in Human Welfare",
			"Biotechnology: Principles and Processes",
			"Biotechnology and its Applications",
			"Organisms and Populations",
			"Ecosystem",
			"Biodiversity and Conservation",
		],
	},
	{
		subject: "Maths",
		grade: "11",
		accent: "#c675ff",
		chapters: [
			"Sets",
			"Relations and Functions",
			"Trigonometric Functions",
			"Complex Numbers and Quadratic Equations",
			"Linear Inequalities",
			"Permutations and Combinations",
			"Binomial Theorem",
			"Sequences and Series",
			"Straight Lines",
			"Conic Sections",
			"Introduction to Three Dimensional Geometry",
			"Limits and Derivatives",
			"Statistics",
			"Probability",
		],
	},
	{
		subject: "Maths",
		grade: "12",
		accent: "#a544d0",
		chapters: [
			"Relations and Functions",
			"Inverse Trigonometric Functions",
			"Matrices",
			"Determinants",
			"Continuity and Differentiability",
			"Application of Derivatives",
			"Integrals",
			"Application of Integrals",
			"Differential Equations",
			"Vector Algebra",
			"Three Dimensional Geometry",
			"Linear Programming",
			"Probability",
		],
	},
] as const;

export function makeChapterKey(
	subject: ChapterGroup["subject"],
	grade: ChapterGroup["grade"],
	chapter: string,
) {
	return `${subject}-${grade}-${chapter}`
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-");
}

export function cycleValue<T extends string>(current: T, states: readonly T[]) {
	const index = states.indexOf(current);
	return states[(index + 1) % states.length];
}
