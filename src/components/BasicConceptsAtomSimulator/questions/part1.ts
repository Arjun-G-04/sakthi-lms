import type { Question } from "#/components/CbtSimulator/types";

export const basicConceptsAtomQuestionsPart1: Question[] = [
	{
		id: 1,
		text: "Which of the following measurements contains exactly four significant figures?",
		options: [
			"$0.0025\\text{ g}$",
			"$0.02040\\text{ g}$",
			"$2.0500\\text{ g}$",
			"$0.0005\\text{ g}$",
		],
		correctOption: 1,
		explanation:
			"In $0.02040\\text{ g}$, leading zeros after the decimal point are non-significant, while the zero between non-zero digits ('0' between 2 and 4) and the trailing zero after the decimal point are significant. Hence, there are 4 significant figures: 2, 0, 4, and 0.",
	},
	{
		id: 2,
		text: "Two oxides of a metal contain $20.0\\%$ and $11.1\\%$ oxygen by mass respectively. These data illustrate the:",
		options: [
			"Law of conservation of mass",
			"Law of definite proportions",
			"Law of multiple proportions",
			"Law of reciprocal proportions",
		],
		correctOption: 2,
		explanation:
			"In oxide 1: $20.0\\text{ g}$ O combines with $80.0\\text{ g}$ metal, so mass of O per $1\\text{ g}$ metal $= 20.0/80.0 = 0.25\\text{ g}$. In oxide 2: $11.1\\text{ g}$ O combines with $88.9\\text{ g}$ metal, so mass of O per $1\\text{ g}$ metal $= 11.1/88.9 \\approx 0.125\\text{ g}$. The ratio of masses of oxygen combining with a fixed mass of metal is $0.25 : 0.125 = 2 : 1$, a simple whole number ratio illustrating the Law of Multiple Proportions.",
	},
	{
		id: 3,
		text: "At constant temperature and pressure, $20\\text{ mL}$ of a gaseous hydrocarbon on complete combustion with oxygen produced $60\\text{ mL}$ of $\\text{CO}_2$ gas and water. The molecular formula of the hydrocarbon is:",
		options: [
			"$\\text{CH}_4$",
			"$\\text{C}_2\\text{H}_6$",
			"$\\text{C}_3\\text{H}_8$",
			"$\\text{C}_4\\text{H}_{10}$",
		],
		correctOption: 2,
		explanation:
			"Combustion equation: $\\text{C}_x\\text{H}_y + (x + y/4)\\text{O}_2 \\to x\\text{CO}_2 + (y/2)\\text{H}_2\\text{O}(l)$. By Gay-Lussac's law, volume ratio equals mole ratio. $1\\text{ volume of } \\text{C}_x\\text{H}_y \\to x\\text{ volumes of } \\text{CO}_2$. Thus, $20x = 60 \\implies x = 3$. Among the choices, the hydrocarbon with 3 carbons is propane, $\\text{C}_3\\text{H}_8$.",
	},
	{
		id: 4,
		text: "Naturally occurring boron consists of two isotopes with atomic masses $10.01\\text{ u}$ and $11.01\\text{ u}$. If the average atomic mass of boron is $10.81\\text{ u}$, the percentage abundance of the lighter isotope is:",
		options: ["$20\\%$", "$80\\%$", "$10\\%$", "$25\\%$"],
		correctOption: 0,
		explanation:
			"Let abundance of $^{10}\\text{B}$ be $x\\%$, then abundance of $^{11}\\text{B}$ is $(100 - x)\\%$. Average atomic mass $= \\frac{10.01x + 11.01(100 - x)}{100} = 10.81$. Simplifying: $1101 - x = 1081 \\implies x = 20\\%$.",
	},
	{
		id: 5,
		text: "Which of the following samples contains the maximum number of atoms?",
		options: [
			"$1\\text{ g of } \\text{Ag}(s)$ $[\\text{atomic mass } = 108]$",
			"$1\\text{ g of } \\text{Mg}(s)$ $[\\text{atomic mass } = 24]$",
			"$1\\text{ g of } \\text{O}_2(g)$ $[\\text{atomic mass } = 16]$",
			"$1\\text{ g of } \\text{Li}(s)$ $[\\text{atomic mass } = 7]$",
		],
		correctOption: 3,
		explanation:
			"Number of atoms $= \\frac{\\text{mass}}{\\text{atomic mass}} \\times N_A$. For Ag: $N_A/108 = 0.00925 N_A$. For Mg: $N_A/24 = 0.0417 N_A$. For $\\text{O}_2$: $\\frac{1}{32} \\times 2 N_A = N_A/16 = 0.0625 N_A$. For Li: $N_A/7 = 0.1428 N_A$. Thus, $1\\text{ g of } \\text{Li}$ contains the greatest number of atoms.",
	},
	{
		id: 6,
		text: "The volume occupied by $4.4\\text{ g}$ of $\\text{CO}_2$ gas at STP ($0^\\circ\\text{C}$ and $1\\text{ atm}$) and the total number of oxygen atoms present in it are respectively:",
		options: [
			"$2.24\\text{ L}$ and $1.204 \\times 10^{23}$",
			"$2.24\\text{ L}$ and $6.022 \\times 10^{22}$",
			"$4.48\\text{ L}$ and $1.204 \\times 10^{23}$",
			"$1.12\\text{ L}$ and $3.011 \\times 10^{22}$",
		],
		correctOption: 0,
		explanation:
			"Molar mass of $\\text{CO}_2 = 44\\text{ g/mol}$. Moles of $\\text{CO}_2 = 4.4 / 44 = 0.1\\text{ mol}$. Volume at STP $= 0.1 \\times 22.4\\text{ L} = 2.24\\text{ L}$. Each $\\text{CO}_2$ molecule contains 2 oxygen atoms. Total O atoms $= 2 \\times 0.1 \\times 6.022 \\times 10^{23} = 1.204 \\times 10^{23}$.",
	},
	{
		id: 7,
		text: "The actual mass of a single molecule of caffeine (molecular formula $\\text{C}_8\\text{H}_{10}\\text{N}_4\\text{O}_2$, molar mass $= 194\\text{ g/mol}$) is approximately:",
		options: [
			"$3.22 \\times 10^{-22}\\text{ g}$",
			"$1.94 \\times 10^{-22}\\text{ g}$",
			"$6.02 \\times 10^{-23}\\text{ g}$",
			"$3.22 \\times 10^{-24}\\text{ g}$",
		],
		correctOption: 0,
		explanation:
			"Mass of one molecule $= \\frac{\\text{Molar mass}}{N_A} = \\frac{194\\text{ g/mol}}{6.022 \\times 10^{23}\\text{ mol}^{-1}} \\approx 3.221 \\times 10^{-22}\\text{ g}$.",
	},
	{
		id: 8,
		text: "Hemoglobin contains $0.334\\%$ of iron by mass. If the molecular mass of hemoglobin is approximately $67,200\\text{ g/mol}$, the number of iron atoms present per molecule of hemoglobin is: $[\\text{atomic mass of Fe} = 56\\text{ u}]$",
		options: ["1", "2", "3", "4"],
		correctOption: 3,
		explanation:
			"Mass of Fe in $1\\text{ mol}$ hemoglobin $= \\frac{0.334}{100} \\times 67200 = 224.45\\text{ g}$. Number of Fe atoms per molecule $= \\frac{224.45}{56} \\approx 4$.",
	},
	{
		id: 9,
		text: "An organic compound contains $40.0\\%$ carbon, $6.67\\%$ hydrogen, and $53.33\\%$ oxygen by mass. If its vapour density is 30, its molecular formula is:",
		options: [
			"$\\text{CH}_2\\text{O}$",
			"$\\text{C}_2\\text{H}_4\\text{O}_2$",
			"$\\text{C}_3\\text{H}_6\\text{O}_3$",
			"$\\text{C}_2\\text{H}_6\\text{O}$",
		],
		correctOption: 1,
		explanation:
			"Mole ratios: C: $40/12 = 3.33$, H: $6.67/1 = 6.67$, O: $53.33/16 = 3.33$. Simplest atomic ratio C : H : O $= 1 : 2 : 1$. Empirical formula $= \\text{CH}_2\\text{O}$ (mass $= 30\\text{ g/mol}$). Molecular mass $= 2 \\times \\text{vapour density} = 2 \\times 30 = 60\\text{ g/mol}$. $n = 60/30 = 2$. Molecular formula $= (\\text{CH}_2\\text{O})_2 = \\text{C}_2\\text{H}_4\\text{O}_2$.",
	},
	{
		id: 10,
		text: "$50.0\\text{ kg}$ of $\\text{N}_2(g)$ and $10.0\\text{ kg}$ of $\\text{H}_2(g)$ are mixed to produce $\\text{NH}_3(g)$ according to $\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$. The limiting reagent and the maximum mass of $\\text{NH}_3$ produced are:",
		options: [
			"$\\text{N}_2$ and $60.7\\text{ kg}$",
			"$\\text{H}_2$ and $56.7\\text{ kg}$",
			"$\\text{H}_2$ and $60.7\\text{ kg}$",
			"$\\text{N}_2$ and $56.7\\text{ kg}$",
		],
		correctOption: 1,
		explanation:
			"Moles of $\\text{N}_2 = 50,000 / 28 = 1785.7\\text{ mol}$. Moles of $\\text{H}_2 = 10,000 / 2.016 \\approx 4960.3\\text{ mol}$ (or with $2\\text{ g/mol} = 5000\\text{ mol}$). For $1785.7\\text{ mol of } \\text{N}_2$, required $\\text{H}_2 = 3 \\times 1785.7 = 5357.1\\text{ mol}$. Since only $4960.3\\text{ mol of } \\text{H}_2$ is available, $\\text{H}_2$ is the limiting reagent. Moles of $\\text{NH}_3$ formed $= \\frac{2}{3} \\times 4960.3 = 3306.9\\text{ mol}$. Mass of $\\text{NH}_3 = 3306.9 \\times 17.03\\text{ g} \\approx 56.3\\text{ kg}$ (using $2.0\\text{ g/mol}$ gives $56.7\\text{ kg}$).",
	},
	{
		id: 11,
		text: "What volume of $\\text{CO}_2$ gas at STP is liberated upon thermal decomposition of $20.0\\text{ g}$ of a $20\\%$ pure limestone ($\\text{CaCO}_3$) sample? $[\\text{Molar mass of } \\text{CaCO}_3 = 100\\text{ g/mol}]$",
		options: [
			"$0.896\\text{ L}$",
			"$4.48\\text{ L}$",
			"$2.24\\text{ L}$",
			"$0.448\\text{ L}$",
		],
		correctOption: 0,
		explanation:
			"Pure $\\text{CaCO}_3 = 20.0 \\times 0.20 = 4.0\\text{ g}$. Moles of $\\text{CaCO}_3 = 4.0 / 100 = 0.04\\text{ mol}$. Reaction: $\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$. $1\\text{ mol } \\text{CaCO}_3$ produces $1\\text{ mol } \\text{CO}_2$. Volume of $\\text{CO}_2$ at STP $= 0.04 \\times 22.4\\text{ L} = 0.896\\text{ L}$.",
	},
	{
		id: 12,
		text: "The molarity of a solution obtained by dissolving $4.0\\text{ g}$ of sodium hydroxide ($\\text{NaOH}$) in water to form $250\\text{ mL}$ of solution is:",
		options: [
			"$0.1\\text{ M}$",
			"$0.2\\text{ M}$",
			"$0.4\\text{ M}$",
			"$0.8\\text{ M}$",
		],
		correctOption: 2,
		explanation:
			"Molar mass of $\\text{NaOH} = 40\\text{ g/mol}$. Moles of $\\text{NaOH} = 4.0 / 40 = 0.1\\text{ mol}$. Volume of solution $= 250\\text{ mL} = 0.250\\text{ L}$. Molarity $M = \\frac{0.1\\text{ mol}}{0.250\\text{ L}} = 0.4\\text{ mol/L} = 0.4\\text{ M}$.",
	},
	{
		id: 13,
		text: "The density of a $3.00\\text{ M}$ aqueous solution of $\\text{NaCl}$ is $1.25\\text{ g/mL}$. The molality of the solution is approximately: $[\\text{Molar mass of } \\text{NaCl} = 58.5\\text{ g/mol}]$",
		options: [
			"$2.79\\text{ m}$",
			"$3.00\\text{ m}$",
			"$2.40\\text{ m}$",
			"$3.25\\text{ m}$",
		],
		correctOption: 0,
		explanation:
			"Consider $1\\text{ L} = 1000\\text{ mL}$ of solution. Mass of solution $= 1000 \\times 1.25 = 1250\\text{ g}$. Mass of solute $\\text{NaCl} = 3.00 \\times 58.5 = 175.5\\text{ g}$. Mass of water (solvent) $= 1250 - 175.5 = 1074.5\\text{ g} = 1.0745\\text{ kg}$. Molality $m = \\frac{3.00\\text{ mol}}{1.0745\\text{ kg}} \\approx 2.79\\text{ mol/kg} = 2.79\\text{ m}$.",
	},
	{
		id: 14,
		text: "An aqueous solution contains $10.0\\%$ glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) by mass. The mole fraction of glucose in the solution is: $[\\text{Molar masses: Glucose} = 180\\text{ g/mol}, \\text{Water} = 18\\text{ g/mol}]$",
		options: ["$0.011$", "$0.100$", "$0.018$", "$0.055$"],
		correctOption: 0,
		explanation:
			"In $100\\text{ g}$ of solution: mass of glucose $= 10.0\\text{ g}$, mass of water $= 90.0\\text{ g}$. Moles of glucose $= 10.0 / 180 = 0.0556\\text{ mol}$. Moles of water $= 90.0 / 18 = 5.00\\text{ mol}$. Mole fraction $X_{\\text{glucose}} = \\frac{0.0556}{0.0556 + 5.00} = \\frac{0.0556}{5.0556} \\approx 0.011$.",
	},
	{
		id: 15,
		text: "$100\\text{ mL}$ of $0.2\\text{ M } \\text{H}_2\\text{SO}_4$ solution is mixed with $200\\text{ mL}$ of $0.1\\text{ M } \\text{H}_2\\text{SO}_4$ solution. Assuming volumes are strictly additive, the concentration of sulfate ions ($\\text{SO}_4^{2-}$) in the resulting mixture is:",
		options: [
			"$0.133\\text{ M}$",
			"$0.267\\text{ M}$",
			"$0.150\\text{ M}$",
			"$0.100\\text{ M}$",
		],
		correctOption: 0,
		explanation:
			"Millimoles of $\\text{H}_2\\text{SO}_4 = (100 \\times 0.2) + (200 \\times 0.1) = 20 + 20 = 40\\text{ mmol}$. Total volume $= 100 + 200 = 300\\text{ mL}$. Final molarity of $\\text{H}_2\\text{SO}_4 = 40 / 300 = 0.133\\text{ M}$. Since each mole of $\\text{H}_2\\text{SO}_4$ yields $1\\text{ mole of } \\text{SO}_4^{2-}$, $[\\text{SO}_4^{2-}] = 0.133\\text{ M}$.",
	},
	{
		id: 16,
		text: "What volume of $0.10\\text{ M } \\text{Ba(OH)}_2$ solution is completely neutralized by $50.0\\text{ mL}$ of $0.20\\text{ M } \\text{HCl}$ solution?",
		options: [
			"$25.0\\text{ mL}$",
			"$50.0\\text{ mL}$",
			"$100.0\\text{ mL}$",
			"$75.0\\text{ mL}$",
		],
		correctOption: 1,
		explanation:
			"Neutralization relation: $N_1 V_1 = N_2 V_2$. For $\\text{Ba(OH)}_2$, basicity factor $n = 2$, so normality $N_1 = 2 \\times 0.10\\text{ M} = 0.20\\text{ N}$. For $\\text{HCl}$, $n = 1$, so normality $N_2 = 0.20\\text{ N}$. $0.20 \\times V_1 = 0.20 \\times 50.0 \\implies V_1 = 50.0\\text{ mL}$.",
	},
	{
		id: 17,
		text: "Which of the following concentration units changes its value when the temperature of the solution is altered?",
		options: ["Molality", "Mole fraction", "Mass percentage", "Molarity"],
		correctOption: 3,
		explanation:
			"Molarity is defined as moles of solute per litre of solution. Since volume expands or contracts with temperature changes, molarity depends on temperature. Molality, mole fraction, and mass percentage depend purely on masses, which are temperature-independent.",
	},
	{
		id: 18,
		text: "When $500\\text{ mL}$ of $0.10\\text{ M } \\text{AgNO}_3$ solution is mixed with $500\\text{ mL}$ of $0.10\\text{ M } \\text{NaCl}$ solution, the mass of $\\text{AgCl}$ precipitated is: $[\\text{Molar mass of } \\text{AgCl} = 143.5\\text{ g/mol}]$",
		options: [
			"$14.35\\text{ g}$",
			"$7.18\\text{ g}$",
			"$3.59\\text{ g}$",
			"$1.435\\text{ g}$",
		],
		correctOption: 1,
		explanation:
			"Moles of $\\text{Ag}^+ = 0.500 \\times 0.10 = 0.05\\text{ mol}$. Moles of $\\text{Cl}^- = 0.500 \\times 0.10 = 0.05\\text{ mol}$. Equation: $\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\to \\text{AgCl}(s)$. Moles of $\\text{AgCl}$ formed $= 0.05\\text{ mol}$. Mass $= 0.05 \\times 143.5\\text{ g/mol} = 7.175\\text{ g} \\approx 7.18\\text{ g}$.",
	},
	{
		id: 19,
		text: "The total number of electrons present in $1.6\\text{ g}$ of methane ($\\text{CH}_4$) gas is: $[N_A = 6.022 \\times 10^{23}]$",
		options: [
			"$6.022 \\times 10^{22}$",
			"$6.022 \\times 10^{23}$",
			"$1.204 \\times 10^{24}$",
			"$3.011 \\times 10^{23}$",
		],
		correctOption: 1,
		explanation:
			"Molar mass of $\\text{CH}_4 = 12 + 4 = 16\\text{ g/mol}$. Moles of $\\text{CH}_4 = 1.6 / 16 = 0.1\\text{ mol}$. Each $\\text{CH}_4$ molecule has $6 + 4(1) = 10\\text{ electrons}$. Total electrons $= 0.1 \\times 10 \\times N_A = 1.0 N_A = 6.022 \\times 10^{23}$.",
	},
	{
		id: 20,
		text: "In acidic medium, potassium permanganate ($\\text{KMnO}_4$, molecular mass $M$) acts as a strong oxidizing agent and is reduced to $\\text{Mn}^{2+}$. The equivalent weight of $\\text{KMnO}_4$ in this medium is:",
		options: ["$M$", "$M/2$", "$M/3$", "$M/5$"],
		correctOption: 3,
		explanation:
			"Half-reaction: $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$. Oxidation state of Mn changes from $+7$ in $\\text{MnO}_4^-$ to $+2$ in $\\text{Mn}^{2+}$. Number of electrons transferred ($n$-factor) $= 5$. Hence, equivalent weight $= \\text{Molecular weight}/n = M/5$.",
	},
	{
		id: 21,
		text: "$1.00\\text{ g}$ of cupric oxide on reduction with hydrogen yielded $0.799\\text{ g}$ of metallic copper. In another experiment, $1.25\\text{ g}$ of pure copper was dissolved in nitric acid, evaporated to dryness and strongly heated to yield $1.564\\text{ g}$ of cupric oxide. These findings establish the:",
		options: [
			"Law of constant proportions",
			"Law of multiple proportions",
			"Law of conservation of mass",
			"Law of gaseous volumes",
		],
		correctOption: 0,
		explanation:
			"In experiment 1: $\\%\\text{ Cu} = \\frac{0.799}{1.00} \\times 100 = 79.9\\%$. In experiment 2: $\\%\\text{ Cu} = \\frac{1.25}{1.564} \\times 100 = 79.92\\%$. Since the percentage composition of copper in both samples of cupric oxide is identical regardless of origin or method of preparation, it verifies Proust's Law of Constant Proportions (Definite Proportions).",
	},
	{
		id: 22,
		text: "Combustion analysis of $0.220\\text{ g}$ of an organic compound containing C, H, and O produced $0.440\\text{ g}$ of $\\text{CO}_2$ and $0.180\\text{ g}$ of $\\text{H}_2\\text{O}$. The empirical formula of the compound is:",
		options: [
			"$\\text{CH}_2\\text{O}$",
			"$\\text{C}_2\\text{H}_4\\text{O}$",
			"$\\text{C}_3\\text{H}_6\\text{O}$",
			"$\\text{C}_2\\text{H}_6\\text{O}$",
		],
		correctOption: 1,
		explanation:
			"Mass of C $= \\frac{12}{44} \\times 0.440 = 0.120\\text{ g}$. Moles of C $= 0.120 / 12 = 0.010\\text{ mol}$. Mass of H $= \\frac{2}{18} \\times 0.180 = 0.020\\text{ g}$. Moles of H $= 0.020 / 1 = 0.020\\text{ mol}$. Mass of O $= 0.220 - (0.120 + 0.020) = 0.080\\text{ g}$. Moles of O $= 0.080 / 16 = 0.005\\text{ mol}$. Simplest ratio C : H : O $= 0.010/0.005 : 0.020/0.005 : 0.005/0.005 = 2 : 4 : 1$. Empirical formula $= \\text{C}_2\\text{H}_4\\text{O}$.",
	},
	{
		id: 23,
		text: "The vapor density of a gaseous hydrocarbon is 39. Its molecular formula is:",
		options: [
			"$\\text{C}_3\\text{H}_6$",
			"$\\text{C}_4\\text{H}_{10}$",
			"$\\text{C}_6\\text{H}_6$",
			"$\\text{C}_5\\text{H}_{12}$",
		],
		correctOption: 2,
		explanation:
			"Molar mass $= 2 \\times \\text{vapor density} = 2 \\times 39 = 78\\text{ g/mol}$. Evaluating molecular masses: $\\text{C}_3\\text{H}_6 = 42\\text{ g/mol}$, $\\text{C}_4\\text{H}_{10} = 58\\text{ g/mol}$, $\\text{C}_6\\text{H}_6 = 6(12) + 6(1) = 78\\text{ g/mol}$, $\\text{C}_5\\text{H}_{12} = 72\\text{ g/mol}$. Thus, the hydrocarbon is benzene, $\\text{C}_6\\text{H}_6$.",
	},
	{
		id: 24,
		text: "Concentrated aqueous nitric acid is $68\\%$ $\\text{HNO}_3$ by mass and has a density of $1.504\\text{ g/mL}$. The molarity of this acid solution is approximately: $[\\text{Molar mass of } \\text{HNO}_3 = 63\\text{ g/mol}]$",
		options: [
			"$15.4\\text{ M}$",
			"$16.2\\text{ M}$",
			"$14.8\\text{ M}$",
			"$18.0\\text{ M}$",
		],
		correctOption: 1,
		explanation:
			"Molarity formula: $M = \\frac{10 \\times x \\times d}{M_B}$, where $x = 68\\%$, $d = 1.504\\text{ g/mL}$, and $M_B = 63\\text{ g/mol}$. $M = \\frac{10 \\times 68 \\times 1.504}{63} = \\frac{1022.72}{63} \\approx 16.23\\text{ M}$.",
	},
	{
		id: 25,
		text: "The normality of a $0.30\\text{ M}$ aqueous solution of phosphorous acid ($\\text{H}_3\\text{PO}_3$) is:",
		options: [
			"$0.30\\text{ N}$",
			"$0.60\\text{ N}$",
			"$0.90\\text{ N}$",
			"$0.15\\text{ N}$",
		],
		correctOption: 1,
		explanation:
			"Phosphorous acid ($\\text{H}_3\\text{PO}_3$) is a dibasic acid containing two ionizable $-\\text{OH}$ groups bonded to phosphorus and one non-ionizable $\\text{P}-\\text{H}$ bond. Basicity ($n$-factor) $= 2$. Normality $N = \\text{Molarity} \\times n = 0.30 \\times 2 = 0.60\\text{ N}$.",
	},
	{
		id: 26,
		text: "What volume of water must be added to $500\\text{ mL}$ of $0.50\\text{ M } \\text{HCl}$ to dilute it to a concentration of $0.10\\text{ M}$?",
		options: [
			"$1500\\text{ mL}$",
			"$2000\\text{ mL}$",
			"$2500\\text{ mL}$",
			"$1000\\text{ mL}$",
		],
		correctOption: 1,
		explanation:
			"Using dilution law: $M_1 V_1 = M_2 V_2 \\implies 0.50 \\times 500 = 0.10 \\times V_2 \\implies V_2 = 2500\\text{ mL}$. Volume of water added $= V_2 - V_1 = 2500 - 500 = 2000\\text{ mL} = 2.0\\text{ L}$.",
	},
	{
		id: 27,
		text: "According to Avogadro's hypothesis, equal volumes of all gases under identical conditions of temperature and pressure contain equal numbers of:",
		options: ["Atoms", "Molecules", "Electrons", "Protons"],
		correctOption: 1,
		explanation:
			"Avogadro's hypothesis explicitly states that equal volumes of all ideal gases under identical temperature and pressure contain the equal number of molecules, not necessarily equal number of atoms.",
	},
	{
		id: 28,
		text: "$1.20\\text{ g}$ of magnesium ribbon is reacted with $100\\text{ mL}$ of $0.50\\text{ M } \\text{HCl}$. The volume of $\\text{H}_2$ gas evolved at STP is: $[\\text{Atomic mass of Mg} = 24\\text{ u}]$",
		options: [
			"$0.56\\text{ L}$",
			"$1.12\\text{ L}$",
			"$0.28\\text{ L}$",
			"$2.24\\text{ L}$",
		],
		correctOption: 0,
		explanation:
			"Reaction: $\\text{Mg} + 2\\text{HCl} \\to \\text{MgCl}_2 + \\text{H}_2$. Moles of $\\text{Mg} = 1.20 / 24 = 0.050\\text{ mol}$. Moles of $\\text{HCl} = 0.100 \\times 0.50 = 0.050\\text{ mol}$. $0.050\\text{ mol of } \\text{Mg}$ requires $0.100\\text{ mol of } \\text{HCl}$. Since only $0.050\\text{ mol } \\text{HCl}$ is present, $\\text{HCl}$ is the limiting reagent. Moles of $\\text{H}_2$ produced $= 0.050 / 2 = 0.025\\text{ mol}$. Volume at STP $= 0.025 \\times 22.4\\text{ L} = 0.56\\text{ L}$.",
	},
	{
		id: 29,
		text: "A $500\\text{ g}$ sample of commercial toothpaste contains $0.20\\text{ g}$ of fluoride ions. The concentration of fluoride ions in parts per million (ppm) is:",
		options: [
			"$200\\text{ ppm}$",
			"$400\\text{ ppm}$",
			"$100\\text{ ppm}$",
			"$800\\text{ ppm}$",
		],
		correctOption: 1,
		explanation:
			"Concentration in ppm $= \\frac{\\text{Mass of solute}}{\\text{Mass of solution}} \\times 10^6 = \\frac{0.20\\text{ g}}{500\\text{ g}} \\times 10^6 = 400\\text{ ppm}$.",
	},
	{
		id: 30,
		text: "The molality of an aqueous solution in which the mole fraction of the solute is $0.10$ is approximately:",
		options: [
			"$5.56\\text{ m}$",
			"$6.17\\text{ m}$",
			"$5.00\\text{ m}$",
			"$4.85\\text{ m}$",
		],
		correctOption: 1,
		explanation:
			"Formula: $m = \\frac{X_B \\times 1000}{(1 - X_B) \\times M_A}$, where $X_B = 0.10$, $M_A = 18\\text{ g/mol}$ (water). $m = \\frac{0.10 \\times 1000}{0.90 \\times 18} = \\frac{100}{16.2} \\approx 6.17\\text{ mol/kg} = 6.17\\text{ m}$.",
	},
];
