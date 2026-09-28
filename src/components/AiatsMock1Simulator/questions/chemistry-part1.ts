import type { Question } from "#/components/CbtSimulator/types";

export const chemistryPart1Questions: Question[] = [
	{
		id: 46,
		text: "For the reaction $2A + B \\rightarrow C$, the rate law is found to be $\\text{Rate} = k[A]^2[B]$. If the concentration of $A$ is doubled and that of $B$ is halved, the rate of the reaction will:",
		options: [
			"Increase by a factor of 2",
			"Increase by a factor of 4",
			"Remain unchanged",
			"Decrease by a factor of 2",
		],
		correctOption: 0,
		explanation:
			"$\\text{Rate}_1 = k [A]^2 [B]$. When $[A'] = 2[A]$ and $[B'] = \\frac{1}{2}[B]$: $\\text{Rate}_2 = k (2[A])^2 \\left(\\frac{1}{2}[B]\\right) = k (4[A]^2) \\left(\\frac{1}{2}[B]\\right) = 2 k [A]^2 [B] = 2 \\text{Rate}_1$. Rate increases by a factor of 2.",
	},
	{
		id: 47,
		text: "A first-order reaction is $50\\%$ complete in $20\\text{ minutes}$ at $300\\text{ K}$ and in $5\\text{ minutes}$ at $320\\text{ K}$. The activation energy $E_a$ of the reaction is: ($R = 8.314\\text{ J K}^{-1}\\text{ mol}^{-1}$, $\\ln 2 = 0.693$, $\\ln 4 = 1.386$)",
		options: [
			"$55.3\\text{ kJ mol}^{-1}$",
			"$27.6\\text{ kJ mol}^{-1}$",
			"$110.6\\text{ kJ mol}^{-1}$",
			"$72.4\\text{ kJ mol}^{-1}$",
		],
		correctOption: 0,
		explanation:
			"For first-order reaction $k = \\frac{\\ln 2}{t_{1/2}}$. Ratio $\\frac{k_2}{k_1} = \\frac{t_{1/2}(1)}{t_{1/2}(2)} = \\frac{20}{5} = 4$. By Arrhenius equation: $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left[\\frac{T_2 - T_1}{T_1 T_2}\\right] \\implies \\ln 4 = \\frac{E_a}{8.314} \\left[\\frac{320 - 300}{300 \\times 320}\\right] \\implies 1.386 = \\frac{E_a}{8.314} \\left[\\frac{20}{96000}\\right] \\implies E_a = \\frac{1.386 \\times 8.314 \\times 4800}{1} \\approx 55310\\text{ J mol}^{-1} \\approx 55.3\\text{ kJ mol}^{-1}$.",
	},
	{
		id: 48,
		text: "For a zero-order reaction $A \\rightarrow B$, the time required for the completion of the reaction ($[A] = 0$) when initial concentration is $[A]_0$ is:",
		options: [
			"$\\frac{[A]_0}{k}$",
			"$\\frac{[A]_0}{2k}$",
			"$\\frac{2[A]_0}{k}$",
			"$\\frac{\\ln 2}{k}$",
		],
		correctOption: 0,
		explanation:
			"Integrated rate equation for zero-order reaction: $[A]_t = [A]_0 - kt$. At completion, $[A]_t = 0 \\implies 0 = [A]_0 - kt_{\\text{comp}} \\implies t_{\\text{comp}} = \\frac{[A]_0}{k}$. (Note: $t_{1/2} = \\frac{[A]_0}{2k}$).",
	},
	{
		id: 49,
		text: "The decomposition of phosphine ($\\text{PH}_3$) on tungsten at low pressure is a first-order reaction. At very high pressure, the reaction becomes zero order because:",
		options: [
			"The surface of the tungsten catalyst becomes completely saturated with phosphine molecules",
			"Phosphine decomposes into phosphorus and hydrogen which act as poisons",
			"Rate of desorption exceeds rate of adsorption",
			"Collision frequency decreases significantly at high pressure",
		],
		correctOption: 0,
		explanation:
			"At low pressure, fraction of surface covered is directly proportional to pressure (rate $\\propto P$, first order). At high pressure, the catalyst surface becomes fully saturated/covered; further increase in concentration/pressure cannot increase the rate of reaction, rendering it zero order.",
	},
	{
		id: 50,
		text: "For an endothermic reaction where $\\Delta H$ represents the enthalpy of the reaction in $\\text{kJ mol}^{-1}$, the minimum activation energy for the forward reaction ($E_{a,f}$) must be:",
		options: [
			"Equal to $\\Delta H$",
			"Greater than $\\Delta H$",
			"Less than $\\Delta H$",
			"Independent of $\\Delta H$",
		],
		correctOption: 1,
		explanation:
			"For any reversible chemical reaction: $\\Delta H = E_{a,f} - E_{a,b}$. For an endothermic reaction, $\\Delta H > 0$, which requires $E_{a,f} = \\Delta H + E_{a,b}$. Since activation energy for the backward reaction $E_{a,b} > 0$, it strictly follows that $E_{a,f} > \\Delta H$.",
	},
	{
		id: 51,
		text: "A reaction has rate constant $k = 3.5 \\times 10^{-4}\\text{ mol}^{-1}\\text{ L s}^{-1}$. The overall order of this reaction is:",
		options: ["$0$", "$1$", "$2$", "$3$"],
		correctOption: 2,
		explanation:
			"Unit of rate constant is $(\\text{mol L}^{-1})^{1-n} \\text{s}^{-1} = \\text{mol}^{1-n} \\text{L}^{n-1} \\text{s}^{-1}$. Here the unit is $\\text{mol}^{-1} \\text{L} \\text{s}^{-1}$. Comparing exponents: $1 - n = -1 \\implies n = 2$. The reaction is second order.",
	},
	{
		id: 52,
		text: "Consider the multi-step reaction:\\nStep 1: $A + B \\rightleftharpoons C$ (fast equilibrium, equilibrium constant $K_{\\text{eq}}$)\\nStep 2: $C + A \\rightarrow D$ (slow, rate constant $k_2$)\\nThe overall order of the reaction is:",
		options: ["$1$", "$2$", "$3$", "$0$"],
		correctOption: 2,
		explanation:
			"The slow step is rate determining: $\\text{Rate} = k_2 [C][A]$. From fast equilibrium in Step 1: $K_{\\text{eq}} = \\frac{[C]}{[A][B]} \\implies [C] = K_{\\text{eq}} [A][B]$. Substituting into the rate law: $\\text{Rate} = k_2 K_{\\text{eq}} [A]^2 [B] = k_{\\text{obs}} [A]^2 [B]^1$. Overall order = $2 + 1 = 3$.",
	},
	{
		id: 53,
		text: "In the pseudo-first-order hydrolysis of ethyl acetate in aqueous solution:\\n$\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH}$\\nWater is present in large excess. If water concentration is doubled, the pseudo-first-order rate constant $k'$ will:",
		options: [
			"Remain unchanged",
			"Be doubled",
			"Be halved",
			"Increase four-fold",
		],
		correctOption: 1,
		explanation:
			"True rate law is $\\text{Rate} = k [\\text{ester}][\\text{H}_2\\text{O}] = k' [\\text{ester}]$, where pseudo-first-order rate constant is $k' = k [\\text{H}_2\\text{O}]$. Because $k'$ directly incorporates water concentration, doubling $[\\text{H}_2\\text{O}]$ doubles the value of $k'$.",
	},
	{
		id: 54,
		text: "Statement I: A catalyst increases the rate of both forward and reverse reactions to the same extent.\\nStatement II: A catalyst provides an alternate reaction pathway with lower activation energy without altering the standard Gibbs energy $\\Delta G^\\circ$ or equilibrium constant $K_{\\text{eq}}$.",
		options: [
			"Both Statement I and Statement II are correct and Statement II is the correct explanation of Statement I",
			"Both Statement I and Statement II are correct but Statement II is not the correct explanation of Statement I",
			"Statement I is correct but Statement II is incorrect",
			"Statement I is incorrect but Statement II is correct",
		],
		correctOption: 0,
		explanation:
			"A catalyst lowers both $E_{a,f}$ and $E_{a,b}$ by the identical amount $\\Delta E_a$. Consequently, $\\frac{k_f}{k_b} = K_{\\text{eq}}$ remains unchanged. State functions like $\\Delta G^\\circ$ depend only on initial and final states, not path.",
	},
	{
		id: 55,
		text: "For a first-order reaction, the time required for $99.9\\%$ completion ($t_{99.9\\%}$) is related to the half-life ($t_{1/2}$) by:",
		options: [
			"$t_{99.9\\%} \\approx 10\\, t_{1/2}$",
			"$t_{99.9\\%} \\approx 2\\, t_{1/2}$",
			"$t_{99.9\\%} \\approx 4\\, t_{1/2}$",
			"$t_{99.9\\%} \\approx 100\\, t_{1/2}$",
		],
		correctOption: 0,
		explanation:
			"For first-order reaction: $t = \\frac{2.303}{k} \\log\\left(\\frac{[A]_0}{[A]_t}\\right)$. At $99.9\\%$ completion, $[A]_t = 0.001 [A]_0$, so $\\log([A]_0/0.001[A]_0) = \\log 10^3 = 3$. Thus $t_{99.9\\%} = \\frac{2.303 \\times 3}{k}$. Since $t_{1/2} = \\frac{2.303 \\log 2}{k} = \\frac{2.303 \\times 0.3010}{k}$: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{3}{0.3010} \\approx 9.967 \\approx 10$.",
	},
	{
		id: 56,
		text: "A plot of $\\ln k$ versus $1/T$ for a chemical reaction yields a straight line with a slope equal to $-6000\\text{ K}$. The activation energy $E_a$ of the reaction is: ($R = 8.314\\text{ J K}^{-1}\\text{ mol}^{-1}$)",
		options: [
			"$49.88\\text{ kJ mol}^{-1}$",
			"$24.94\\text{ kJ mol}^{-1}$",
			"$72.15\\text{ kJ mol}^{-1}$",
			"$99.76\\text{ kJ mol}^{-1}$",
		],
		correctOption: 0,
		explanation:
			"Arrhenius equation in logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{R}\\left(\\frac{1}{T}\\right)$. Comparing to $y = mx + c$, slope $m = -\\frac{E_a}{R}$. Given slope $= -6000\\text{ K} \\implies -\\frac{E_a}{R} = -6000 \\implies E_a = 6000 \\times 8.314 = 49884\\text{ J mol}^{-1} \\approx 49.88\\text{ kJ mol}^{-1}$.",
	},
	{
		id: 57,
		text: "According to collision theory of bimolecular gaseous reactions, the rate of reaction is given by $\\text{Rate} = P Z_{AB} e^{-E_a/RT}$. Here, the factor $P$ accounts for:",
		options: [
			"Probability of molecules possessing effective kinetic energy",
			"Steric factor or proper molecular orientation of colliding molecules",
			"Total number of collisions per unit volume per second",
			"Gas pressure inside the reaction chamber",
		],
		correctOption: 1,
		explanation:
			"In collision theory, $Z_{AB}$ represents collision frequency and $e^{-E_a/RT}$ represents fraction of collisions with energy $\\ge E_a$. The factor $P$ (steric factor or probability factor) accounts for the requirement that molecules must collide with proper spatial orientation to form products.",
	},
	{
		id: 58,
		text: "For the reaction $2\\text{N}_2\\text{O}_5(g) \\rightarrow 4\\text{NO}_2(g) + \\text{O}_2(g)$, the rate of disappearance of $\\text{N}_2\\text{O}_5$ is $6.4 \\times 10^{-3}\\text{ mol L}^{-1}\\text{ s}^{-1}$. The rate of appearance of $\\text{NO}_2$ is:",
		options: [
			"$1.28 \\times 10^{-2}\\text{ mol L}^{-1}\\text{ s}^{-1}$",
			"$6.4 \\times 10^{-3}\\text{ mol L}^{-1}\\text{ s}^{-1}$",
			"$3.2 \\times 10^{-3}\\text{ mol L}^{-1}\\text{ s}^{-1}$",
			"$2.56 \\times 10^{-2}\\text{ mol L}^{-1}\\text{ s}^{-1}$",
		],
		correctOption: 0,
		explanation:
			"Rate of reaction $= -\\frac{1}{2}\\frac{d[\\text{N}_2\\text{O}_5]}{dt} = +\\frac{1}{4}\\frac{d[\\text{NO}_2]}{dt}$. Therefore, rate of appearance of $\\text{NO}_2$ is: $\\frac{d[\\text{NO}_2]}{dt} = 2 \\times \\left(-\\frac{d[\\text{N}_2\\text{O}_5]}{dt}\\right) = 2 \\times 6.4 \\times 10^{-3} = 1.28 \\times 10^{-2}\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
	},
	{
		id: 59,
		text: "Radioactive decay of unstable isotopes follows:",
		options: [
			"Zero-order kinetics",
			"First-order kinetics",
			"Second-order kinetics",
			"Pseudo-unimolecular kinetics",
		],
		correctOption: 1,
		explanation:
			"All natural and artificial radioactive disintegration reactions follow first-order kinetics with rate $= \\lambda N$ and half-life $t_{1/2} = \\frac{0.693}{\\lambda}$, which is independent of the initial quantity of substance.",
	},
	{
		id: 60,
		text: "For a reaction, rate constant $k$ is related to absolute temperature $T$ by $\\log k = 14.34 - \\frac{1.25 \\times 10^4\\text{ K}}{T}$. The pre-exponential frequency factor $A$ and activation energy $E_a$ are:",
		options: [
			"$A = 2.19 \\times 10^{14}\\text{ s}^{-1}$, $E_a = 239.3\\text{ kJ mol}^{-1}$",
			"$A = 14.34\\text{ s}^{-1}$, $E_a = 103.9\\text{ kJ mol}^{-1}$",
			"$A = 2.19 \\times 10^{14}\\text{ s}^{-1}$, $E_a = 103.9\\text{ kJ mol}^{-1}$",
			"$A = 10^{14.34}\\text{ s}^{-1}$, $E_a = 125\\text{ kJ mol}^{-1}$",
		],
		correctOption: 0,
		explanation:
			"Comparing with $\\log k = \\log A - \\frac{E_a}{2.303 R T}$: $\\log A = 14.34 \\implies A = 10^{14.34} \\approx 2.19 \\times 10^{14}\\text{ s}^{-1}$. Also $\\frac{E_a}{2.303 R} = 1.25 \\times 10^4 \\implies E_a = 1.25 \\times 10^4 \\times 2.303 \\times 8.314 \\approx 239.3 \\times 10^3\\text{ J mol}^{-1} = 239.3\\text{ kJ mol}^{-1}$.",
	},
	{
		id: 61,
		text: "Which of the following transition metal ions of the $3d$ series exhibits the highest calculated spin-only magnetic moment?",
		options: [
			"$\\text{Mn}^{2+}$",
			"$\\text{Fe}^{2+}$",
			"$\\text{Cr}^{3+}$",
			"$\\text{Cu}^{2+}$",
		],
		correctOption: 0,
		explanation:
			"Spin-only magnetic moment $\\mu = \\sqrt{n(n+2)}\\text{ BM}$. Electronic configurations: $\\text{Mn}^{2+} = [\\text{Ar}]3d^5$ ($n=5$ unpaired electrons, $\\mu = \\sqrt{35} \\approx 5.92\\text{ BM}$); $\\text{Fe}^{2+} = [\\text{Ar}]3d^6$ ($n=4$, $\\mu = 4.90\\text{ BM}$); $\\text{Cr}^{3+} = [\\text{Ar}]3d^3$ ($n=3$, $\\mu = 3.87\\text{ BM}$); $\\text{Cu}^{2+} = [\\text{Ar}]3d^9$ ($n=1$, $\\mu = 1.73\\text{ BM}$). $\\text{Mn}^{2+}$ has the highest value.",
	},
	{
		id: 62,
		text: "The atomic radii of $\\text{Zr}$ (atomic number 40) and $\\text{Hf}$ (atomic number 72) are almost identical ($160\\text{ pm}$ and $159\\text{ pm}$). This phenomenon is a direct consequence of:",
		options: [
			"Diagonal relationship across periods",
			"Lanthanoid contraction due to poor shielding by $4f$ electrons",
			"Actinoid contraction due to $5f$ electrons",
			"Inert pair effect in $p$-block",
		],
		correctOption: 1,
		explanation:
			"Intervention of the fourteen $4f$ elements prior to $\\text{Hf}$ results in filling of $4f$ subshell. $4f$ orbitals have highly diffuse shapes and provide very poor shielding for outer electrons against increasing nuclear charge ($+32$ protons), leading to lanthanoid contraction. Consequently, radii of $4d$ ($\\text{Zr}$) and $5d$ ($\\text{Hf}$) congeneric pairs become virtually identical.",
	},
	{
		id: 63,
		text: "In acidic medium, one mole of dichromate ion ($\\text{Cr}_2\\text{O}_7^{2-}$) oxidizes how many moles of ferrous ions ($\\text{Fe}^{2+}$) to ferric ions ($\\text{Fe}^{3+}$)?",
		options: ["$3$", "$5$", "$6$", "$1$"],
		correctOption: 2,
		explanation:
			"Balanced ionic half-reactions:\\n$\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$\\n$\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + e^-$\\nMultiplying the oxidation half-reaction by 6: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{Fe}^{2+} \\rightarrow 2\\text{Cr}^{3+} + 6\\text{Fe}^{3+} + 7\\text{H}_2\\text{O}$. Thus 1 mole of $\\text{Cr}_2\\text{O}_7^{2-}$ oxidizes 6 moles of $\\text{Fe}^{2+}$.",
	},
	{
		id: 64,
		text: "Which of the following transition elements exhibits the highest oxidation state in its oxo-compounds?",
		options: ["$\\text{Mn}$", "$\\text{Cr}$", "$\\text{V}$", "$\\text{Os}$"],
		correctOption: 3,
		explanation:
			"While $\\text{Mn}$ exhibits $+7$ (e.g. $\\text{KMnO}_4$), ruthenium and osmium in the $4d$ and $5d$ series exhibit an oxidation state of $+8$ in their tetroxides ($\\text{RuO}_4$ and $\\text{OsO}_4$). Thus Os exhibits the highest oxidation state ($+8$).",
	},
	{
		id: 65,
		text: "Assertion (A): $\\text{Cu}^+$ ion is unstable in aqueous solution and readily undergoes disproportionation.\\nReason (R): High negative hydration enthalpy of $\\text{Cu}^{2+}(aq)$ compensates for the second ionization enthalpy of copper.",
		options: [
			"Both (A) and (R) are true and (R) is the correct explanation of (A)",
			"Both (A) and (R) are true but (R) is not the correct explanation of (A)",
			"(A) is true but (R) is false",
			"(A) is false but (R) is true",
		],
		correctOption: 0,
		explanation:
			"In aqueous solution: $2\\text{Cu}^+(aq) \\rightarrow \\text{Cu}^{2+}(aq) + \\text{Cu}(s)$. Although $\\Delta_i H_2$ of copper is large, $\\text{Cu}^{2+}$ has a much smaller ionic radius and higher charge density than $\\text{Cu}^+$, giving it a much more negative hydration enthalpy which more than compensates for the second ionization energy.",
	},
	{
		id: 66,
		text: "When acidic potassium permanganate ($\\text{KMnO}_4$) reacts with oxalic acid at $60^\\circ\\text{C}$, the reaction is initially slow but accelerates rapidly. The substance acting as autocatalyst is:",
		options: [
			"$\\text{Mn}^{2+}$",
			"$\\text{CO}_2$",
			"$\\text{K}^+$",
			"$\\text{SO}_4^{2-}$",
		],
		correctOption: 0,
		explanation:
			"The redox reaction produces manganese(II) ions: $2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}$. As soon as $\\text{Mn}^{2+}$ ions are generated, they catalyze the subsequent reduction of $\\text{MnO}_4^-$, demonstrating autocatalysis.",
	},
	{
		id: 67,
		text: "Which of the following lanthanoid ions is diamagnetic in nature?",
		options: [
			"$\\text{Ce}^{4+}$",
			"$\\text{Eu}^{2+}$",
			"$\\text{Sm}^{3+}$",
			"$\\text{Nd}^{3+}$",
		],
		correctOption: 0,
		explanation:
			"$\\text{Ce}$ has $Z = 58$ with neutral ground state $[\\text{Xe}] 4f^1 5d^1 6s^2$. In $+4$ oxidation state, $\\text{Ce}^{4+} = [\\text{Xe}] 4f^0$, containing zero unpaired electrons. It has completely empty $4f$ subshell and noble gas core, making it diamagnetic.",
	},
	{
		id: 68,
		text: "Which of the following statements about interstitial compounds formed by transition metals is incorrect?",
		options: [
			"They have very high melting points, higher than those of the pure metals",
			"They are extremely hard, some borides approaching diamond in hardness",
			"They retain metallic conductivity",
			"They are chemically more reactive than the corresponding pure parent metals",
		],
		correctOption: 3,
		explanation:
			"Interstitial compounds (formed by trapping small non-metal atoms like C, N, H, B in voids of the crystal lattice) are chemically inert rather than more reactive. They have high melting points, retain metallic electrical and thermal conductivity, and exhibit great hardness.",
	},
];
