import type { Question } from "#/components/CbtSimulator/types";

export const iatChemistryQuestions: Question[] = [
	{
		id: 16,
		text: "A binary liquid solution formed by mixing acetone and chloroform exhibits a negative deviation from Raoult's law. Which set of thermodynamic properties accurately describes this mixing process at constant temperature and pressure?",
		options: [
			"$\\Delta H_{\\text{mix}} < 0$, $\\Delta V_{\\text{mix}} < 0$, and forms a maximum boiling azeotrope",
			"$\\Delta H_{\\text{mix}} > 0$, $\\Delta V_{\\text{mix}} > 0$, and forms a minimum boiling azeotrope",
			"$\\Delta H_{\\text{mix}} < 0$, $\\Delta V_{\\text{mix}} > 0$, and forms an ideal solution",
			"$\\Delta H_{\\text{mix}} > 0$, $\\Delta V_{\\text{mix}} < 0$, and forms a maximum boiling azeotrope",
		],
		correctOption: 0,
		explanation:
			"When acetone ($\\text{CH}_3\\text{COCH}_3$) is mixed with chloroform ($\\text{CHCl}_3$), a strong intermolecular hydrogen bond forms between the carbonyl oxygen of acetone and the acidic hydrogen of chloroform. The solute-solvent interactions (A-B) are stronger than solute-solute (A-A) and solvent-solvent (B-B) interactions. This lowers the escaping tendency of molecules into the vapor phase, giving negative deviation from Raoult's law, with $\\Delta H_{\\text{mix}} < 0$, $\\Delta V_{\\text{mix}} < 0$, and creating a maximum boiling azeotrope.",
	},
	{
		id: 17,
		text: "Benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$) partially dimerizes in benzene solvent according to $2\\,\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$. If the experimental freezing point depression reveals an observed van 't Hoff factor of $i = 0.60$, the percentage dimerization (degree of association $\\alpha$) of benzoic acid in this solution is:",
		options: ["$60\\%$", "$40\\%$", "$80\\%$", "$90\\%$"],
		correctOption: 2,
		explanation:
			"For association of $n$ monomer molecules into an $n$-mer: $n = 2$ for dimerization. The van 't Hoff factor is $i = 1 - \\alpha\\left(1 - \\frac{1}{n}\\right) = 1 - \\frac{\\alpha}{2}$. Given $i = 0.60$: $0.60 = 1 - \\frac{\\alpha}{2} \\implies \\frac{\\alpha}{2} = 0.40 \\implies \\alpha = 0.80 = 80\\%$.",
	},
	{
		id: 18,
		text: "An aqueous solution containing $10.0\\text{ g}$ of a non-volatile biomacromolecule dissolved in $1.00\\text{ L}$ of water exhibits an osmotic pressure of $0.0246\\text{ atm}$ at $300\\text{ K}$. The molar mass of the biomacromolecule is: $[R = 0.0821\\text{ L}\\cdot\\text{atm}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}]$",
		options: [
			"$10,000\\text{ g/mol}$",
			"$1,000\\text{ g/mol}$",
			"$25,000\\text{ g/mol}$",
			"$50,000\\text{ g/mol}$",
		],
		correctOption: 0,
		explanation:
			"Osmotic pressure formula: $\\Pi = C R T = \\frac{w}{M V} R T \\implies M = \\frac{w R T}{\\Pi V}$. Substituting the given values: $M = \\frac{10.0 \\times 0.0821 \\times 300}{0.0246 \\times 1.00} = \\frac{246.3}{0.0246} = 10,012\\text{ g/mol} \\approx 10,000\\text{ g/mol}$.",
	},
	{
		id: 19,
		text: "The limiting molar conductivities ($\\Lambda_m^\\circ$) for $\\text{NaCl}$, $\\text{HCl}$, and $\\text{CH}_3\\text{COONa}$ at $298\\text{ K}$ are $126.4$, $425.9$, and $91.0\\text{ S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$ respectively. If the molar conductivity of a $0.001\\text{ M } \\text{CH}_3\\text{COOH}$ solution is $39.05\\text{ S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$, its degree of dissociation ($\\alpha$) is:",
		options: ["$0.050$", "$0.100$", "$0.010$", "$0.200$"],
		correctOption: 1,
		explanation:
			"By Kohlrausch's law of independent migration: $\\Lambda_m^\\circ(\\text{CH}_3\\text{COOH}) = \\Lambda_m^\\circ(\\text{CH}_3\\text{COONa}) + \\Lambda_m^\\circ(\\text{HCl}) - \\Lambda_m^\\circ(\\text{NaCl}) = 91.0 + 425.9 - 126.4 = 390.5\\text{ S}\\cdot\\text{cm}^2\\cdot\\text{mol}^{-1}$. Degree of dissociation $\\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ} = \\frac{39.05}{390.5} = 0.100$.",
	},
	{
		id: 20,
		text: "A concentration cell consists of two hydrogen electrodes immersed in two different aqueous solutions of hydrochloric acid: $\\text{Pt}|\\text{H}_2(1\\text{ bar})|\\text{H}^+(\\text{solution } 1)\\,\\|\\,\\text{H}^+(\\text{solution } 2)|\\text{H}_2(1\\text{ bar})|\\text{Pt}$. If the $\\text{pH}$ of solution 1 is $3.0$ and the $\\text{pH}$ of solution 2 is $5.0$, the cell EMF at $298\\text{ K}$ is: $[2.303 RT/F = 0.0591\\text{ V}]$",
		options: [
			"$+0.1182\\text{ V}$",
			"$+0.0591\\text{ V}$",
			"$-0.0591\\text{ V}$",
			"$-0.1182\\text{ V}$",
		],
		correctOption: 3,
		explanation:
			"At the anode (left, solution 1): $\\frac{1}{2}\\text{H}_2(g) \\to \\text{H}^+_1 + e^-$. At the cathode (right, solution 2): $\\text{H}^+_2 + e^- \\to \\frac{1}{2}\\text{H}_2(g)$. Overall: $\\text{H}^+_2 \\to \\text{H}^+_1$. Using the Nernst equation: $E_{\\text{cell}} = E^\\circ - \\frac{0.0591}{1}\\log\\left(\\frac{[\\text{H}^+_1]}{[\\text{H}^+_2]}\\right) = 0 - 0.0591(\\log[\\text{H}^+_1] - \\log[\\text{H}^+_2]) = 0.0591(-\\log[\\text{H}^+_1] + \\log[\\text{H}^+_2]) = 0.0591(\\text{pH}_1 - \\text{pH}_2) = 0.0591(3.0 - 5.0) = -0.1182\\text{ V}$. (The cell reaction as written is non-spontaneous; spontaneity requires electron flow from lower $[\\text{H}^+]$ to higher $[\\text{H}^+]$).",
	},
	{
		id: 21,
		text: "During the electrolysis of an aqueous solution of copper(II) sulfate ($\\text{CuSO}_4$) using inert platinum electrodes, a steady current of $1.93\\text{ A}$ is passed for $1000\\text{ s}$. The volume of oxygen gas liberated at the anode measured at STP ($0^\\circ\\text{C}, 1\\text{ atm}$) is: $[F = 96,500\\text{ C/mol}]$",
		options: [
			"$224\\text{ mL}$",
			"$56\\text{ mL}$",
			"$448\\text{ mL}$",
			"$112\\text{ mL}$",
		],
		correctOption: 3,
		explanation:
			"Total charge $Q = I t = 1.93 \\times 1000 = 1930\\text{ C}$. Number of moles of electrons passed $= \\frac{1930}{96500} = 0.020\\text{ mol of } e^-$. At the anode, water is oxidized: $2\\text{H}_2\\text{O}(l) \\to \\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^-$. Thus, $4\\text{ mol of } e^-$ liberate $1\\text{ mol of } \\text{O}_2$. Moles of $\\text{O}_2 = \\frac{0.020}{4} = 0.005\\text{ mol}$. Volume of $\\text{O}_2$ at STP $= 0.005 \\times 22,400\\text{ mL} = 112\\text{ mL}$.",
	},
	{
		id: 22,
		text: "For a first-order chemical reaction, the time required for $99.9\\%$ of the initial reactant concentration to decompose ($t_{99.9\\%}$) is related to the reaction's half-life ($t_{1/2}$) by:",
		options: [
			"$t_{99.9\\%} = 3\\,t_{1/2}$",
			"$t_{99.9\\%} = 10\\,t_{1/2}$",
			"$t_{99.9\\%} = 6.64\\,t_{1/2}$",
			"$t_{99.9\\%} = 9.9\\,t_{1/2}$",
		],
		correctOption: 1,
		explanation:
			"For a first-order reaction: $t = \\frac{2.303}{k}\\log\\left(\\frac{[A]_0}{[A]}\\right)$. For $99.9\\%$ completion, $[A] = [A]_0 - 0.999[A]_0 = 0.001[A]_0 = 10^{-3}[A]_0$. So $t_{99.9\\%} = \\frac{2.303}{k}\\log(10^3) = \\frac{2.303 \\times 3}{k} = \\frac{6.909}{k}$. The half-life is $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$. Ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = 10$. Thus, $t_{99.9\\%} = 10\\,t_{1/2}$.",
	},
	{
		id: 23,
		text: "The rate constant of a chemical reaction doubles when the temperature increases from $300\\text{ K}$ to $310\\text{ K}$. The activation energy ($E_a$) of the reaction is approximately: $[R = 8.314\\text{ J}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1},\\; \\log 2 = 0.3010]$",
		options: [
			"$53.6\\text{ kJ/mol}$",
			"$26.8\\text{ kJ/mol}$",
			"$107.2\\text{ kJ/mol}$",
			"$78.4\\text{ kJ/mol}$",
		],
		correctOption: 0,
		explanation:
			"From the integrated Arrhenius equation: $\\log\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$. Given $\\frac{k_2}{k_1} = 2$, $T_1 = 300\\text{ K}$, $T_2 = 310\\text{ K}$: $0.3010 = \\frac{E_a}{2.303 \\times 8.314}\\left(\\frac{10}{300 \\times 310}\\right) \\implies 0.3010 = \\frac{E_a}{19.147}\\left(\\frac{10}{93000}\\right) \\implies E_a = \\frac{0.3010 \\times 19.147 \\times 93000}{10} \\approx 53,598\\text{ J/mol} = 53.6\\text{ kJ/mol}$.",
	},
	{
		id: 24,
		text: "Consider the multi-step reaction mechanism:\nStep 1: $\\text{NO}_2(g) + \\text{F}_2(g) \\xrightarrow{k_1} \\text{NO}_2\\text{F}(g) + \\text{F}(g)$ (slow)\nStep 2: $\\text{NO}_2(g) + \\text{F}(g) \\xrightarrow{k_2} \\text{NO}_2\\text{F}(g)$ (fast)\nThe overall rate law and the overall order of the reaction are:",
		options: [
			"$\\text{Rate} = k_1 k_2 [\\text{NO}_2]^2 [\\text{F}_2]$ and order $= 3$",
			"$\\text{Rate} = k_1 [\\text{NO}_2]^2$ and order $= 2$",
			"$\\text{Rate} = k_1 [\\text{NO}_2][\\text{F}_2]$ and order $= 2$",
			"$\\text{Rate} = k_2 [\\text{NO}_2][\\text{F}]$ and order $= 2$",
		],
		correctOption: 2,
		explanation:
			"The rate-determining step (RDS) of a multi-step reaction is the slowest elementary step. Step 1 is the slow step: $\\text{NO}_2 + \\text{F}_2 \\to \\text{NO}_2\\text{F} + \\text{F}$. For an elementary step, the rate law reflects molecularity directly: $\\text{Rate} = k_1 [\\text{NO}_2][\\text{F}_2]$. Because both reactants in step 1 are stable starting materials (no intermediates), this is the overall rate law. Sum of exponents $= 1 + 1 = 2$ (second-order).",
	},
	{
		id: 25,
		text: "The standard electrode potential $E^\\circ(\\text{M}^{3+}/\\text{M}^{2+})$ for chromium, manganese, and iron are $-0.41\\text{ V}$, $+1.57\\text{ V}$, and $+0.77\\text{ V}$ respectively. Based on these values, which of the following is correct?",
		options: [
			"$\\text{Mn}^{3+}$ is a stronger oxidizing agent than $\\text{Fe}^{3+}$, and $\\text{Cr}^{2+}$ is a reducing agent",
			"$\\text{Cr}^{3+}$ is a stronger oxidizing agent than $\\text{Mn}^{3+}$",
			"$\\text{Fe}^{2+}$ is a stronger reducing agent than $\\text{Cr}^{2+}$",
			"$\\text{Mn}^{2+}$ is easily oxidized to $\\text{Mn}^{3+}$",
		],
		correctOption: 0,
		explanation:
			"A higher (more positive) reduction potential means a stronger oxidizing agent. $E^\\circ(\\text{Mn}^{3+}/\\text{Mn}^{2+}) = +1.57\\text{ V}$ is exceptionally high because reduction yields $\\text{Mn}^{2+}$ with a half-filled $d^5$ subshell, making $\\text{Mn}^{3+}$ a very powerful oxidizing agent. In contrast, $E^\\circ(\\text{Cr}^{3+}/\\text{Cr}^{2+}) = -0.41\\text{ V}$ is negative because oxidation yields $\\text{Cr}^{3+}$ which has a stable half-filled $t_{2g}^3$ configuration in aqueous medium, making $\\text{Cr}^{2+}$ a reducing agent.",
	},
	{
		id: 26,
		text: "Zirconium ($\\text{Zr}$, atomic number 40) and Hafnium ($\\text{Hf}$, atomic number 72) exhibit almost identical atomic radii ($160\\text{ pm}$ and $159\\text{ pm}$) and similar chemical properties. This phenomenon is primarily caused by:",
		options: [
			"Inert pair effect in the 6s valence subshell",
			"Diagonal relationship between groups 4 and 5",
			"Actinoid contraction across the 5f series",
			"Lanthanoid contraction due to poor shielding by intervening 4f electrons",
		],
		correctOption: 3,
		explanation:
			"Across the 14 lanthanoid elements filling the $4f$ subshell before hafnium, the shielding effect of $4f$ electrons is very poor due to their diffused shapes. The continuous increase in nuclear charge pulls the outer electrons inward, neutralizing the normal size increase expected from adding a shell. Consequently, $5d$ elements (Hf) have nearly identical radii and chemical behavior to their $4d$ congener (Zr).",
	},
	{
		id: 27,
		text: "When orange potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$) is dissolved in water and the solution $\\text{pH}$ is raised to alkaline conditions ($\\text{pH} > 8$), the color shifts to yellow. Upon subsequent acidification ($\\text{pH} < 4$), the orange color returns. This reversible change is due to the equilibrium:",
		options: [
			"$\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\rightleftharpoons 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$",
			"$\\text{CrO}_4^{2-} + 4\\text{H}_2\\text{O} \\rightleftharpoons [\\text{Cr(OH)}_6]^{3-} + 2\\text{OH}^-$",
			"$\\text{Cr}_2\\text{O}_7^{2-} + 2\\text{OH}^- \\rightleftharpoons 2\\text{CrO}_4^{2-} + \\text{H}_2\\text{O}$",
			"$2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O} \\rightleftharpoons \\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+$",
		],
		correctOption: 2,
		explanation:
			"The dichromate ion (orange, $\\text{Cr}_2\\text{O}_7^{2-}$) and chromate ion (yellow, $\\text{CrO}_4^{2-}$) exist in a dynamic, pH-dependent equilibrium: $\\text{Cr}_2\\text{O}_7^{2-} + \\text{H}_2\\text{O} \\rightleftharpoons 2\\text{CrO}_4^{2-} + 2\\text{H}^+$. Adding alkali removes $\\text{H}^+$, shifting equilibrium right to yellow $\\text{CrO}_4^{2-}$. Adding acid increases $[\\text{H}^+]$, driving equilibrium left back to orange $\\text{Cr}_2\\text{O}_7^{2-}$. Oxidation state of chromium remains $+6$ throughout.",
	},
	{
		id: 28,
		text: "According to Crystal Field Theory (CFT), what is the crystal field stabilization energy (CFSE) and number of unpaired electrons for an octahedral complex $[\\text{Co(NH}_3)_6]^{3+}$? $[\\text{Co}^{3+} \\text{ is a } d^6 \\text{ ion, and } \\text{NH}_3 \\text{ acts as a strong field ligand with } \\Delta_o > P]$",
		options: [
			"$\\text{CFSE} = -0.4\\Delta_o$, unpaired electrons $= 4$",
			"$\\text{CFSE} = -2.4\\Delta_o + 2P$, unpaired electrons $= 0$",
			"$\\text{CFSE} = -1.8\\Delta_o + P$, unpaired electrons $= 2$",
			"$\\text{CFSE} = -1.2\\Delta_o$, unpaired electrons $= 0$",
		],
		correctOption: 1,
		explanation:
			"For $\\text{Co}^{3+}$ ($3d^6$), $\\text{NH}_3$ is a strong-field ligand causing $\\Delta_o > P$ (pairing energy). Electrons pair up completely in the lower $t_{2g}$ orbitals, yielding a low-spin configuration: $t_{2g}^6 e_g^0$. Number of unpaired electrons $= 0$ (diamagnetic). $\\text{CFSE} = (6 \\times -0.4\\Delta_o) + (0 \\times +0.6\\Delta_o) + 2P = -2.4\\Delta_o + 2P$, where $2P$ accounts for the two additional electron pairings compared to the free ion spherical field.",
	},
	{
		id: 29,
		text: "Which of the following coordination entities is chiral and therefore exhibits optical isomerism (enantiomerism)?",
		options: [
			"\\textit{trans}-$[\\text{Co(en)}_2\\text{Cl}_2]^+$",
			"\\textit{cis}-$[\\text{Co(en)}_2\\text{Cl}_2]^+$",
			"\\textit{trans}-$[\\text{Pt(NH}_3)_2\\text{Cl}_2]$",
			"$[\\text{Ni(CO)}_4]$",
		],
		correctOption: 1,
		explanation:
			"\\textit{cis}-$[\\text{Co(en)}_2\\text{Cl}_2]^+$ lacks any plane of symmetry ($\\sigma$) or center of inversion ($i$). Its mirror image is non-superimposable, making it chiral and optically active (existing as $d$- and $l$-enantiomers). Conversely, the \\textit{trans} isomer has a center of symmetry and multiple mirror planes, rendering it achiral and optically inactive.",
	},
	{
		id: 30,
		text: "The complex ion $[\\text{Ni(CN)}_4]^{2-}$ is diamagnetic with square planar geometry, whereas $[\\text{NiCl}_4]^{2-}$ is paramagnetic with tetrahedral geometry. The hybridization of $\\text{Ni}^{2+}$ in $[\\text{Ni(CN)}_4]^{2-}$ and $[\\text{NiCl}_4]^{2-}$ respectively are:",
		options: [
			"$dsp^2$ and $sp^3$",
			"$sp^3$ and $dsp^2$",
			"$d^2sp^3$ and $sp^3d^2$",
			"$sp^3$ and $sp^3$",
		],
		correctOption: 0,
		explanation:
			"$\\text{Ni}^{2+}$ has a $3d^8$ electronic configuration. Cyanide ($\\text{CN}^-$) is a strong field ligand that forces pairing of the two unpaired $3d$ electrons, vacating one $3d$ orbital. The vacant orbitals ($3d, 4s, 4p_x, 4p_y$) undergo $dsp^2$ hybridization, yielding a square planar, diamagnetic complex. Chloride ($\\text{Cl}^-$) is a weak field ligand unable to force pairing; the $3d$ electrons remain unpaired ($t_{2g}^6 e_g^2$), and hybridization utilizes $4s$ and $4p$ orbitals ($sp^3$), yielding a tetrahedral, paramagnetic complex with 2 unpaired electrons.",
	},
];
