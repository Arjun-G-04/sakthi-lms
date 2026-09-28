import type { Question } from "#/components/CbtSimulator/types";

export const chemistryPart2Questions: Question[] = [
	{
		id: 69,
		text: "Among the first row transition metals ($3d$ series), the only element having a positive standard reduction potential ($E^\\circ_{M^{2+}/M} = +0.34\\text{ V}$) is:",
		options: ["Zinc", "Nickel", "Copper", "Cobalt"],
		correctOption: 2,
		explanation:
			"Copper has $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$. The high energy required to transform $\\text{Cu}(s)$ to $\\text{Cu}^{2+}(aq)$ (sum of enthalpy of atomization and high ionization energies $\\Delta_i H_1 + \\Delta_i H_2$) is not balanced by its hydration enthalpy, making copper unreactive toward non-oxidizing acids.",
	},
	{
		id: 70,
		text: "In aqueous solution, yellow chromate ion ($\\text{CrO}_4^{2-}$) and orange dichromate ion ($\\text{Cr}_2\\text{O}_7^{2-}$) exist in pH-dependent equilibrium. When an alkaline solution of dichromate is acidified (pH lowered), the observed colour change is due to:",
		options: [
			"Formation of $\\text{CrO}_4^{2-}$ from $\\text{Cr}_2\\text{O}_7^{2-}$",
			"Conversion of $\\text{CrO}_4^{2-}$ into $\\text{Cr}_2\\text{O}_7^{2-}$",
			"Reduction of $\\text{Cr(VI)}$ to $\\text{Cr(III)}$",
			"Precipitation of chromium(VI) oxide",
		],
		correctOption: 1,
		explanation:
			"The equilibrium is: $2\\text{CrO}_4^{2-} (\\text{yellow}) + 2\\text{H}^+ \\rightleftharpoons \\text{Cr}_2\\text{O}_7^{2-} (\\text{orange}) + \\text{H}_2\\text{O}$. Adding acid (lowering pH) shifts the equilibrium to the right, converting yellow chromate into orange dichromate. In alkaline solution (adding $\\text{OH}^-$), orange dichromate converts back to yellow chromate.",
	},
	{
		id: 71,
		text: "Mischmetal is a well-known alloy consisting predominantly of:",
		options: [
			"Lanthanoid metals ($\\approx 95\\%$) and iron ($\\approx 5\\%$) with traces of S, C, Ca, Al",
			"Actinoid metals ($\\approx 95\\%$) and lead ($\\approx 5\\%$)",
			"Copper ($\\approx 80\\%$) and zinc ($\\approx 20\\%$)",
			"Chromium ($\\approx 70\\%$) and nickel ($\\approx 30\\%$)",
		],
		correctOption: 0,
		explanation:
			"Mischmetal consists of a lanthanoid metal (about $95\\%$, typically cerium $\\approx 50\\%$, lanthanum $\\approx 25\\%$, neodymium), iron (about $5\\%$), and traces of S, C, Ca, and Al. It is widely used in magnesium-based alloys to produce bullets, shells, and lighter flints.",
	},
	{
		id: 72,
		text: "Actinoid contraction is greater from element to element than lanthanoid contraction because:",
		options: [
			"$5f$ orbitals have greater shielding effect than $4f$ orbitals",
			"$5f$ orbitals have poorer shielding effect than $4f$ orbitals due to their more diffuse spatial distribution",
			"Actinoids have higher effective nuclear charge than lanthanoids",
			"Actinoids undergo radioactive disintegration",
		],
		correctOption: 1,
		explanation:
			"$5f$ electrons extend farther in space and have a more diffuse spatial distribution than $4f$ electrons. Consequently, $5f$ electrons provide even poorer shielding against increasing nuclear charge than $4f$ electrons, producing greater contraction per atomic number increase.",
	},
	{
		id: 73,
		text: "The intense deep purple colour of potassium permanganate ($\\text{KMnO}_4$) in aqueous solution is attributed to:",
		options: [
			"$d-d$ electronic transition within $\\text{Mn}^{7+}$ ion",
			"Charge transfer from ligand oxygen $p$-orbitals to empty $d$-orbitals of $\\text{Mn}^{7+}$",
			"Splitting of $4s$ and $3d$ energy levels",
			"Unpaired electron in $3d$ orbital",
		],
		correctOption: 1,
		explanation:
			"In $\\text{MnO}_4^-$, manganese is in $+7$ oxidation state with $d^0$ configuration ($[\\text{Ar}]3d^0$). Since there are no $d$ electrons, $d-d$ transitions are impossible. The intense colour originates from Ligand-to-Metal Charge Transfer (LMCT) from filled $2p$ orbitals of $\\text{O}^{2-}$ to empty $3d$ orbitals of $\\text{Mn(VII)}$.",
	},
	{
		id: 74,
		text: "Statement I: Transition metals and their compounds exhibit high catalytic activity in industrial processes.\\nStatement II: Transition metals can adopt multiple oxidation states, provide large surface areas for chemisorption, and form unstable intermediate complexes that lower activation energy.",
		options: [
			"Both Statement I and Statement II are correct and Statement II is the correct explanation of Statement I",
			"Both Statement I and Statement II are correct but Statement II is not the correct explanation of Statement I",
			"Statement I is correct but Statement II is incorrect",
			"Statement I is incorrect but Statement II is correct",
		],
		correctOption: 0,
		explanation:
			"Transition metals act as catalysts because of their ability to adopt multiple oxidation states (e.g. $\\text{V}_2\\text{O}_5$, $\\text{Fe}^{3+}/\\text{Fe}^{2+}$) and form complexes. In addition, solid transition metals provide vacant $d$ orbitals and surface coordination sites that adsorb reactant molecules, weakening their bonds and lowering activation energy.",
	},
	{
		id: 75,
		text: "In the industrial preparation of potassium dichromate, chromite ore ($\\text{FeCr}_2\\text{O}_4$) is fused with sodium carbonate in the presence of air to form sodium chromate. The balanced chemical equation is:",
		options: [
			"$4\\text{FeCr}_2\\text{O}_4 + 8\\text{Na}_2\\text{CO}_3 + 7\\text{O}_2 \\rightarrow 8\\text{Na}_2\\text{CrO}_4 + 2\\text{Fe}_2\\text{O}_3 + 8\\text{CO}_2$",
			"$\\text{FeCr}_2\\text{O}_4 + 2\\text{Na}_2\\text{CO}_3 + \\text{O}_2 \\rightarrow 2\\text{Na}_2\\text{CrO}_4 + \\text{FeO} + 2\\text{CO}_2$",
			"$2\\text{FeCr}_2\\text{O}_4 + 4\\text{Na}_2\\text{CO}_3 + 3\\text{O}_2 \\rightarrow 4\\text{Na}_2\\text{CrO}_4 + \\text{Fe}_2\\text{O}_3 + 4\\text{CO}_2$",
			"$4\\text{FeCr}_2\\text{O}_4 + 4\\text{Na}_2\\text{CO}_3 + 5\\text{O}_2 \\rightarrow 4\\text{Na}_2\\text{CrO}_4 + 2\\text{Fe}_2\\text{O}_3 + 4\\text{CO}_2$",
		],
		correctOption: 0,
		explanation:
			"The roasting of chromite ore with $\\text{Na}_2\\text{CO}_3$ in excess air is: $4\\text{FeCr}_2\\text{O}_4 + 8\\text{Na}_2\\text{CO}_3 + 7\\text{O}_2 \\rightarrow 8\\text{Na}_2\\text{CrO}_4 + 2\\text{Fe}_2\\text{O}_3 + 8\\text{CO}_2$. The yellow solution of sodium chromate is then filtered and acidified with $\\text{H}_2\\text{SO}_4$ to obtain sodium dichromate.",
	},
	{
		id: 76,
		text: "The correct IUPAC name of the coordination compound $[\\text{Co}(\\text{en})_2\\text{Cl}_2]\\text{Cl}$ is:",
		options: [
			"Dichloridobis(ethane-1,2-diamine)cobalt(III) chloride",
			"Bis(ethane-1,2-diamine)dichlorocobalt(III) chloride",
			"Dichlorodiethylenediaminecobalt(II) chloride",
			"Dichlorobis(ethylenediamine)cobalt(III) chlorate",
		],
		correctOption: 0,
		explanation:
			"Ligands are listed alphabetically: 'dichlorido' before 'bis(ethane-1,2-diamine)'. The polydentate ligand contains a numerical prefix, so 'bis' is used with parentheses. The complex cation has charge $+1$: $\\text{Co} + 2(0) + 2(-1) = +1 \\implies \\text{Co} = +3$. Hence: Dichloridobis(ethane-1,2-diamine)cobalt(III) chloride.",
	},
	{
		id: 77,
		text: "The type of isomerism exhibited by the pair $[\\text{Co}(\\text{NH}_3)_5(\\text{SO}_4)]\\text{Br}$ and $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$ is:",
		options: [
			"Ionization isomerism",
			"Linkage isomerism",
			"Coordination isomerism",
			"Hydrate isomerism",
		],
		correctOption: 0,
		explanation:
			"Ionization isomerism arises when coordination compounds give different ions in aqueous solution. $[\\text{Co}(\\text{NH}_3)_5(\\text{SO}_4)]\\text{Br}$ yields $\\text{Br}^-$ (gives cream precipitate with $\\text{AgNO}_3$), while $[\\text{Co}(\\text{NH}_3)_5\\text{Br}]\\text{SO}_4$ yields $\\text{SO}_4^{2-}$ (gives white precipitate with $\\text{BaCl}_2$).",
	},
	{
		id: 78,
		text: "The complex $[\\text{Co}(\\text{NH}_3)_3(\\text{NO}_2)_3]$ exhibits which of the following geometric isomerisms?",
		options: [
			"Facial (fac) and Meridional (mer) isomerism",
			"Cis and Trans isomerism only",
			"Optical isomerism only",
			"Linkage and optical isomerism simultaneously",
		],
		correctOption: 0,
		explanation:
			"Octahedral complexes of the formula $[\\text{Ma}_3\\text{b}_3]$ exhibit facial (fac) and meridional (mer) isomerism. In the fac-isomer, three identical donor atoms occupy the corners of a single triangular face of the octahedron; in the mer-isomer, they occupy a plane passing through the central metal atom.",
	},
	{
		id: 79,
		text: "According to Valence Bond Theory, the complex $[\\text{Co}(\\text{NH}_3)_6]^{3+}$ is:",
		options: [
			"Inner orbital octahedral complex, diamagnetic",
			"Outer orbital octahedral complex, paramagnetic",
			"Inner orbital octahedral complex, paramagnetic",
			"Outer orbital octahedral complex, diamagnetic",
		],
		correctOption: 0,
		explanation:
			"Cobalt in $[\\text{Co}(\\text{NH}_3)_6]^{3+}$ is $\\text{Co}^{3+} (3d^6)$. Ammonia acts as a strong field ligand toward $\\text{Co}^{3+}$ and causes pairing of all six $3d$ electrons into three $t_{2g}$ orbitals: $t_{2g}^6 e_g^0$. The two vacant $3d$ orbitals along with $4s$ and three $4p$ orbitals undergo $d^2sp^3$ hybridization. Since all electrons are paired, it is an inner orbital diamagnetic complex.",
	},
	{
		id: 80,
		text: "In an octahedral crystal field, the five degenerate $d$-orbitals of a central metal ion split into:",
		options: [
			"Three lower energy $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{zx}$) and two higher energy $e_g$ orbitals ($d_{x^2-y^2}, d_{z^2}$)",
			"Two lower energy $e_g$ orbitals and three higher energy $t_{2g}$ orbitals",
			"Four lower energy orbitals and one higher energy orbital",
			"Three non-degenerate orbitals and two degenerate orbitals",
		],
		correctOption: 0,
		explanation:
			"In octahedral symmetry, ligands approach along the Cartesian coordinate axes ($x, y, z$). Orbitals directed along the axes ($d_{x^2-y^2}$ and $d_{z^2}$, designated $e_g$) experience greater electrostatic repulsion and are raised in energy by $+0.6\\Delta_o$, while orbitals directed between the axes ($d_{xy}, d_{yz}, d_{zx}$, designated $t_{2g}$) are lowered by $-0.4\\Delta_o$.",
	},
	{
		id: 81,
		text: "A transition metal ion with $d^4$ electronic configuration forms an octahedral complex. If the crystal field splitting energy $\\Delta_o < P$ (where $P$ is pairing energy), the configuration in terms of $t_{2g}$ and $e_g$ orbitals is:",
		options: [
			"$t_{2g}^3 e_g^1$",
			"$t_{2g}^4 e_g^0$",
			"$t_{2g}^2 e_g^2$",
			"$t_{2g}^1 e_g^3$",
		],
		correctOption: 0,
		explanation:
			"When $\\Delta_o < P$, it is energetically favorable for the fourth electron to occupy the higher energy $e_g$ orbital rather than pay the electron pairing energy penalty $P$. This yields a high-spin complex with configuration $t_{2g}^3 e_g^1$.",
	},
	{
		id: 82,
		text: "Which of the following represents the correct increasing order of crystal field splitting power (spectrochemical series) of ligands?",
		options: [
			"$\\text{I}^- < \\text{Br}^- < \\text{Cl}^- < \\text{F}^- < \\text{H}_2\\text{O} < \\text{NH}_3 < \\text{CN}^- < \\text{CO}$",
			"$\\text{Cl}^- < \\text{F}^- < \\text{Br}^- < \\text{I}^- < \\text{NH}_3 < \\text{H}_2\\text{O} < \\text{CO} < \\text{CN}^-$",
			"$\\text{CO} < \\text{CN}^- < \\text{NH}_3 < \\text{H}_2\\text{O} < \\text{F}^- < \\text{Cl}^- < \\text{Br}^- < \\text{I}^-$",
			"$\\text{H}_2\\text{O} < \\text{F}^- < \\text{Cl}^- < \\text{Br}^- < \\text{I}^- < \\text{NH}_3 < \\text{CN}^- < \\text{CO}$",
		],
		correctOption: 0,
		explanation:
			"The experimentally determined spectrochemical series in increasing order of field strength is: $\\text{I}^- < \\text{Br}^- < \\text{S}^{2-} < \\text{SCN}^- < \\text{Cl}^- < \\text{F}^- < \\text{OH}^- < \\text{C}_2\\text{O}_4^{2-} < \\text{H}_2\\text{O} < \\text{NCS}^- < \\text{edta}^{4-} < \\text{NH}_3 < \\text{en} < \\text{CN}^- < \\text{CO}$. Halides are weak field ligands; $\\text{CN}^-$ and $\\text{CO}$ are strong field ligands.",
	},
	{
		id: 83,
		text: "In homoleptic metal carbonyl complexes such as $\\text{Ni}(\\text{CO})_4$ and $\\text{Fe}(\\text{CO})_5$, the metal-carbon bond is strengthened by synergic bonding. This interaction involves:",
		options: [
			"$\\sigma$-donation from carbonyl carbon lone pair into empty metal $d$-orbital, and $\\pi$-backdonation from filled metal $d$-orbital into empty $\\pi^*$ antibonding orbital of $\\text{CO}$",
			"$\\pi$-donation from carbon into empty metal orbital and $\\sigma$-backbonding from metal to oxygen",
			"Pure ionic electrostatic attraction between metal cation and carbonyl dipoles",
			"Coordination of oxygen lone pairs to metal followed by hydrogen bonding",
		],
		correctOption: 0,
		explanation:
			"Synergic bonding in metal carbonyls comprises two cooperative components: (1) $\\text{M} \\leftarrow \\text{C}$ $\\sigma$-bond formed by donation of lone pair on carbonyl carbon into vacant metal hybrid orbital; (2) $\\text{M} \\rightarrow \\text{C}$ $\\pi$-bond formed by back-donation of electron density from filled metal $d$-orbitals into empty $\\pi^*$ antibonding molecular orbitals of $\\text{CO}$. This synergism strengthens the $\\text{M}-\\text{C}$ bond while weakening the $\\text{C}\\equiv\\text{O}$ bond.",
	},
	{
		id: 84,
		text: "Chelate complexes are thermodynamically significantly more stable than analogous complexes containing unidentate ligands. This enhanced stability (chelate effect) is primarily driven by:",
		options: [
			"Favorable increase in entropy ($\\Delta S > 0$) due to the release of multiple coordinated unidentate solvent molecules",
			"Very large exothermic enthalpy of bond formation ($\\Delta H \\ll 0$)",
			"Steric hindrance reducing ligand vibrations",
			"Lowering of the kinetic rate of ligand substitution",
		],
		correctOption: 0,
		explanation:
			"When a bidentate or polydentate chelate ligand displaces unidentate ligands (e.g. $[\\text{Ni}(\\text{H}_2\\text{O})_6]^{2+} + 3\\text{en} \\rightleftharpoons [\\text{Ni}(\\text{en})_3]^{2+} + 6\\text{H}_2\\text{O}$), 4 reactant particles yield 7 product particles. The net increase in the number of independent molecular entities produces a substantial increase in system entropy ($\\Delta S > 0$), making $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$ heavily negative.",
	},
	{
		id: 85,
		text: "When $0.1\\text{ mol}$ of $\\text{CoCl}_3 \\cdot 5\\text{NH}_3$ is treated with excess $\\text{AgNO}_3$ solution, $0.2\\text{ mol}$ of $\\text{AgCl}$ is precipitated as a white solid. According to Werner's coordination theory, the formula of the complex is:",
		options: [
			"$[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$",
			"$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl} \\cdot \\text{NH}_3$",
			"$[\\text{Co}(\\text{NH}_3)_5]\\text{Cl}_3$",
			"$[\\text{Co}(\\text{NH}_3)_3\\text{Cl}_3]$",
		],
		correctOption: 0,
		explanation:
			"Precipitation of $0.2\\text{ mol}$ of $\\text{AgCl}$ from $0.1\\text{ mol}$ of compound indicates that exactly 2 moles of chloride ions per mole of complex exist outside the coordination sphere as ionizable secondary valencies. One chloride ion remains inside the coordination sphere fulfilling primary and secondary valencies. Thus the formulation is $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$.",
	},
	{
		id: 86,
		text: "The spin-only magnetic moments of $[\\text{Fe}(\\text{CN})_6]^{3-}$ and $[\\text{Fe}(\\text{H}_2\\text{O})_6]^{3+}$ are respectively:",
		options: [
			"$1.73\\text{ BM}$ and $5.92\\text{ BM}$",
			"$5.92\\text{ BM}$ and $1.73\\text{ BM}$",
			"$2.83\\text{ BM}$ and $4.90\\text{ BM}$",
			"$0\\text{ BM}$ and $5.92\\text{ BM}$",
		],
		correctOption: 0,
		explanation:
			"In both complexes, iron is $\\text{Fe}^{3+} (3d^5)$. With strong-field cyanide $\\text{CN}^-$, pairing occurs: $t_{2g}^5 e_g^0$ ($n = 1$ unpaired electron $\\implies \\mu = \\sqrt{1(3)} = 1.73\\text{ BM}$). With weak-field water $\\text{H}_2\\text{O}$, no pairing occurs: $t_{2g}^3 e_g^2$ ($n = 5$ unpaired electrons $\\implies \\mu = \\sqrt{5(7)} = \\sqrt{35} \\approx 5.92\\text{ BM}$).",
	},
	{
		id: 87,
		text: "The crystal field splitting energy for a tetrahedral complex ($\\Delta_t$) is related to that of an octahedral complex ($\\Delta_o$) having the same metal ion and ligands by the relation:",
		options: [
			"$\\Delta_t = \\frac{4}{9}\\Delta_o$",
			"$\\Delta_t = \\frac{9}{4}\\Delta_o$",
			"$\\Delta_t = \\frac{1}{2}\\Delta_o$",
			"$\\Delta_t = \\frac{2}{3}\\Delta_o$",
		],
		correctOption: 0,
		explanation:
			"In tetrahedral geometry, there are only 4 ligands instead of 6 (reducing field strength by $4/6 = 2/3$), and none of the $d$-orbitals point directly at the incoming ligands (further geometric factor of $2/3$). Consequently, $\\Delta_t = \\frac{2}{3} \\times \\frac{2}{3}\\Delta_o = \\frac{4}{9}\\Delta_o$.",
	},
	{
		id: 88,
		text: "Ethylene diamine tetraacetate ion ($\\text{EDTA}^{4-}$) is a:",
		options: [
			"Hexadentate ligand with two nitrogen and four oxygen donor atoms",
			"Tetradentate ligand with four oxygen donor atoms",
			"Bidentate ligand with two nitrogen donor atoms",
			"Tridentate ligand with two oxygen and one nitrogen donor atoms",
		],
		correctOption: 0,
		explanation:
			"$\\text{EDTA}^{4-}$ has formula $[(\\text{OOC}-\\text{CH}_2)_2\\text{N}-\\text{CH}_2-\\text{CH}_2-\\text{N}(\\text{CH}_2-\\text{COO})_2]^{4-}$. It possesses two tertiary amine nitrogen donor atoms and four carboxylate oxygen donor atoms, making it a hexadentate chelating ligand capable of wrapping octahedrally around metal ions.",
	},
	{
		id: 89,
		text: "Tetragonal elongation (Jahn-Teller distortion) observed in octahedral complexes of $\\text{Cu}^{2+} (d^9)$ is caused by:",
		options: [
			"Asymmetric electronic degeneracy in the $e_g$ orbital set ($t_{2g}^6 e_g^3$)",
			"Asymmetric electronic distribution in the $t_{2g}$ set only",
			"Steric clash between bulky equatorial ligands",
			"Low pairing energy of $\\text{Cu}^{2+}$ $3d$ electrons",
		],
		correctOption: 0,
		explanation:
			"The Jahn-Teller theorem states that any non-linear molecular system in a degenerate electronic state is unstable and will undergo geometrical distortion to remove the degeneracy. In octahedral $\\text{Cu}^{2+}$, the configuration is $t_{2g}^6 (d_{z^2})^2 (d_{x^2-y^2})^1$ (or vice versa). The unequal electron occupancy of the spatially directed $e_g$ orbitals splits their degeneracy, causing elongation of the two axial $\\text{Cu}-\\text{L}$ bonds along the z-axis.",
	},
	{
		id: 90,
		text: "Which platinum coordination complex is widely used as an effective antineoplastic (anticancer) drug in clinical chemotherapy?",
		options: [
			"$\\text{cis}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$ (Cisplatin)",
			"$\\text{trans}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$",
			"$[\\text{Pt}(\\text{en})\\text{Cl}_2]$",
			"$\\text{K}_2[\\text{PtCl}_4]$",
		],
		correctOption: 0,
		explanation:
			"Cisplatin, $\\text{cis}-[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$, is an effective anticancer agent. It diffuses into cells, undergoes hydrolysis, and cross-links purine bases (specifically adjacent guanines) on DNA, disrupting DNA replication and inducing apoptosis in rapidly dividing cancer cells. The trans-isomer is biologically inactive.",
	},
];
