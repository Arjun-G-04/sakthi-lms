export interface Question {
	id: number;
	text: string;
	options: string[]; // Exactly 4 options
	correctOption: number; // 0-indexed: 0=A, 1=B, 2=C, 3=D
	explanation: string;
	svgDiagram?: string;
}

export const pBlockQuestionsPart1: Question[] = [
	{
		id: 1,
		text: "Which of the following elements in Group 13 has the highest electronegativity according to the Pauling scale?",
		options: ["Boron (B)", "Aluminium (Al)", "Gallium (Ga)", "Indium (In)"],
		correctOption: 0,
		explanation:
			"Boron has the highest electronegativity (2.0) in Group 13 due to its small atomic size and high effective nuclear charge. In Group 13, electronegativity first decreases from B to Al (1.5) and then marginally increases down the group up to Tl (1.8) due to poor shielding by inner d and f electrons.",
	},
	{
		id: 2,
		text: "The atomic radius of Gallium (135 pm) is less than that of Aluminium (143 pm). This anomaly is attributed to:",
		options: [
			"Poor shielding effect of intervening d-electrons in Ga",
			"Lanthanide contraction",
			"Inert pair effect",
			"High screening power of s-electrons in Al",
		],
		correctOption: 0,
		explanation:
			"Gallium (atomic number 31) has ten d-electrons in its inner electronic configuration ($3d^{10}$). Because d-electrons offer poor shielding against the increased nuclear charge, the valence electrons are pulled more strongly toward the nucleus, resulting in an atomic radius smaller than that of Aluminium.",
	},
	{
		id: 3,
		text: "What is the correct order of Lewis acidity for boron trihalides?",
		options: [
			"$\\text{BF}_3 > \\text{BCl}_3 > \\text{BBr}_3 > \\text{BI}_3$",
			"$\\text{BI}_3 > \\text{BBr}_3 > \\text{BCl}_3 > \\text{BF}_3$",
			"$\\text{BCl}_3 > \\text{BF}_3 > \\text{BBr}_3 > \\text{BI}_3$",
			"$\\text{BF}_3 > \\text{BI}_3 > \\text{BCl}_3 > \\text{BBr}_3$",
		],
		correctOption: 1,
		explanation:
			"The Lewis acidity order is $\\text{BI}_3 > \\text{BBr}_3 > \\text{BCl}_3 > \\text{BF}_3$. In $\\text{BF}_3$, strong $p\\pi-p\\pi$ back bonding occurs between the full $2p$ orbital of F and the empty $2p$ orbital of B due to identical size and energy. As halogen size increases down the group, orbital overlap becomes ineffective, reducing back bonding and making $\\text{BI}_3$ the strongest Lewis acid.",
	},
	{
		id: 4,
		text: "In the structure of diborane ($\\text{B}_2\\text{H}_6$), which of the following statements is correct regarding the bonding?",
		options: [
			"There are four $3c-2e^-$ bonds and two $2c-2e^-$ bonds",
			"There are two $3c-2e^-$ bonds and four $2c-2e^-$ bonds",
			"All six B-H bonds are identical in length and bond strength",
			"Boron atoms are $sp^2$ hybridized",
		],
		correctOption: 1,
		explanation:
			"In diborane ($\\text{B}_2\\text{H}_6$), each boron atom is $sp^3$ hybridized. There are four terminal B-H bonds which are normal two-center two-electron ($2c-2e^-$) bonds, and two bridging B-H-B bonds which are three-center two-electron ($3c-2e^-$) bonds, often called banana bonds.",
	},
	{
		id: 5,
		text: "When orthoboric acid ($\\text{H}_3\\text{BO}_3$) is dissolved in water, it acts as a weak acid because it:",
		options: [
			"Donates a proton ($\\text{H}^+$) directly by self-ionization",
			"Accepts $\\text{OH}^-$ from water, releasing $\\text{H}^+$ ions into solution",
			"Releases three protons simultaneously as a tribasic acid",
			"Forms a polymeric covalent network that traps hydronium ions",
		],
		correctOption: 1,
		explanation:
			"Boric acid ($\\text{H}_3\\text{BO}_3$ or $\\text{B(OH)}_3$) is not a proton donor (Arrhenius acid) but a monobasic Lewis acid. It completes its octet by accepting an $\\text{OH}^-$ ion from a water molecule: $\\text{B(OH)}_3 + \\text{H}_2\\text{O} \\rightleftharpoons [\\text{B(OH)}_4]^- + \\text{H}^+$.",
	},
	{
		id: 6,
		text: "Which of the following oxidation states is most stable for Thallium (Tl) due to the inert pair effect?",
		options: ["+3", "+1", "+2", "+4"],
		correctOption: 1,
		explanation:
			"Due to the inert pair effect, the reluctance of valence s-electrons ($6s^2$) to participate in chemical bonding increases down Group 13. Therefore, for Thallium, the +1 oxidation state is significantly more stable than the +3 oxidation state, making $\\text{Tl}^{3+}$ compounds strong oxidizing agents.",
	},
	{
		id: 7,
		text: "When borax ($\\text{Na}_2\\text{B}_4\\text{O}_7\\cdot10\\text{H}_2\\text{O}$) is strongly heated on a platinum wire loop with a transition metal salt, a colored glassy bead is formed. This bead is chemically composed of:",
		options: [
			"Metal metaborates",
			"Metal orthoborates",
			"Metal tetraborates",
			"Metal oxides",
		],
		correctOption: 0,
		explanation:
			"When borax is heated, it first loses water of crystallization and swells up. On further heating, it melts to a transparent liquid which solidifies into a glass-like bead consisting of sodium metaborate ($\\text{NaBO}_2$) and boric anhydride ($\\text{B}_2\\text{O}_3$). $\\text{B}_2\\text{O}_3$ combines with transition metal oxides to form colored metal metaborates (e.g., cobalt metaborate gives a blue bead).",
	},
	{
		id: 8,
		text: "What is the exact number of B-O-B bridging linkages present in the cyclic or polyanionic anion of borax, $[\\text{B}_4\\text{O}_5(\\text{OH})_4]^{2-}$?",
		options: ["3", "4", "5", "6"],
		correctOption: 2,
		explanation:
			"In the structure of the borax anion $[\\text{B}_4\\text{O}_5(\\text{OH})_4]^{2-}$, there are two $sp^2$ hybridized boron atoms and two $sp^3$ hybridized boron atoms. The structure contains exactly 5 B-O-B bridging bonds connecting the four boron atoms, along with 4 terminal B-OH groups.",
	},
	{
		id: 9,
		text: "Inorganic benzene is the common name for which of the following boron compounds?",
		options: [
			"Diborane ($\\text{B}_2\\text{H}_6$)",
			"Borazine ($\\text{B}_3\\text{N}_3\\text{H}_6$)",
			"Boron nitride ($\\text{BN}$)",
			"Boron carbide ($\\text{B}_4\\text{C}$)",
		],
		correctOption: 1,
		explanation:
			"Borazine ($\\text{B}_3\\text{N}_3\\text{H}_6$), also known as borazole, is called inorganic benzene because its cyclic planar structure is isoelectronic and isostructural with benzene ($\\text{C}_6\\text{H}_6$), containing alternating B and N atoms in a six-membered ring with $\\pi$-bonding.",
	},
	{
		id: 10,
		text: "Which of the following halides of Group 13 elements is a dimer in the vapor state and in non-polar solvents, featuring halogen bridges?",
		options: [
			"$\\text{BF}_3$",
			"$\\text{BCl}_3$",
			"$\\text{AlCl}_3$",
			"$\\text{TlCl}_3$",
		],
		correctOption: 2,
		explanation:
			"Aluminium chloride exists as a dimer, $\\text{Al}_2\\text{Cl}_6$, in the vapor state and in non-polar solvents like benzene. In this structure, each Al atom achieves an octet by accepting a lone pair of electrons from a chlorine atom of the other $\\text{AlCl}_3$ molecule, forming two bridging Al-Cl-Al bonds.",
	},
	{
		id: 11,
		text: "The reaction of diborane ($\\text{B}_2\\text{H}_6$) with excess ammonia ($\\text{NH}_3$) at low temperatures initially yields an ionic adduct formulated as:",
		options: [
			"$[\\text{BH}_2(\\text{NH}_3)_2]^+ [\\text{BH}_4]^-$",
			"$[\\text{BH}_3(\\text{NH}_3)]$",
			"$\\text{B}_3\\text{N}_3\\text{H}_6$",
			"$[\\text{B}(\\text{NH}_3)_4]^{3+} [\\text{BH}_4]_3^-$",
		],
		correctOption: 0,
		explanation:
			"When diborane reacts with excess ammonia at low temperature, it undergoes unsymmetrical cleavage to form an ionic diammoniate adduct formulated as $[\\text{BH}_2(\\text{NH}_3)_2]^+ [\\text{BH}_4]^-$. On heating at higher temperatures (373 K), this adduct decomposes to yield borazine ($\\text{B}_3\\text{N}_3\\text{H}_6$).",
	},
	{
		id: 12,
		text: "Why is boron unable to form the hexafluoroborate anion $[\\text{BF}_6]^{3-}$, whereas aluminium readily forms $[\\text{AlF}_6]^{3-}$?",
		options: [
			"Boron has extremely high electronegativity compared to fluorine",
			"Boron lacks vacant d-orbitals in its valence shell, limiting its maximum covalency to 4",
			"The atomic radius of boron is too large to accommodate six fluorine atoms",
			"Boron trifluoride is insoluble in aqueous HF",
		],
		correctOption: 1,
		explanation:
			"Boron belongs to the second period and has only $2s$ and $2p$ valence orbitals (no vacant d-orbitals). Consequently, its maximum covalency is restricted to 4, allowing it to form $[\\text{BF}_4]^-$. Aluminium is in the third period, possesses vacant $3d$ orbitals, and can expand its octet to form $[\\text{AlF}_6]^{3-}$.",
	},
	{
		id: 13,
		text: "Which of the following Group 13 metals is liquid at slightly above room temperature (303 K) and is used in high-temperature thermometers?",
		options: ["Boron", "Aluminium", "Gallium", "Indium"],
		correctOption: 2,
		explanation:
			"Gallium has an unusually low melting point of 303 K (30 °C) and a very high boiling point (2676 K). This wide liquid range makes it exceptionally useful as a thermometric liquid in high-temperature thermometers.",
	},
	{
		id: 14,
		text: "When aluminium metal is treated with concentrated nitric acid ($\\text{HNO}_3$), the metal becomes passive due to:",
		options: [
			"The formation of an insoluble protective surface layer of aluminium oxide ($\\text{Al}_2\\text{O}_3$)",
			"The reduction of nitric acid to ammonium nitrate",
			"The formation of a gaseous film of nitrogen dioxide on the metal surface",
			"The rapid formation of anhydrous aluminium nitrate crystals",
		],
		correctOption: 0,
		explanation:
			"Concentrated nitric acid is a strong oxidizing agent. It oxidizes the surface of aluminium metal, forming an ultra-thin, tough, and impervious protective layer of aluminium oxide ($\\text{Al}_2\\text{O}_3$), which renders the metal passive and prevents further reaction.",
	},
	{
		id: 15,
		text: "In the crystalline structure of orthoboric acid ($\\text{H}_3\\text{BO}_3$), planar $\\text{BO}_3$ units are connected together into two-dimensional sheets via:",
		options: [
			"Covalent B-O-B bridges",
			"Hydrogen bonds",
			"Ionic attractions between $\\text{B}^{3+}$ and $\\text{OH}^-$",
			"Coordinate van der Waals forces",
		],
		correctOption: 1,
		explanation:
			"In crystalline orthoboric acid, planar triangular $\\text{BO}_3^{3-}$ units are joined together by extensive hydrogen bonding between oxygen and hydrogen atoms, forming an extensive two-dimensional layered sheet structure. The layers are held together by weak van der Waals forces.",
	},
	{
		id: 16,
		text: "Which of the following statements regarding the inert pair effect is INCORRECT?",
		options: [
			"It becomes progressively more pronounced as we move down a p-block group",
			"It arises primarily due to poor shielding of outer s-electrons by intervening d and f orbitals",
			"In Group 13, $\\text{Tl}^+$ is more stable than $\\text{Tl}^{3+}$ due to this effect",
			"It causes the higher oxidation state to become more stable than the lower oxidation state at the bottom of the group",
		],
		correctOption: 3,
		explanation:
			"The inert pair effect causes the valence s-electrons to remain unshared or inert. Consequently, the lower oxidation state ($n - 2$) becomes progressively MORE stable than the higher oxidation state ($n$) as we move down to the heavier elements of p-block groups.",
	},
	{
		id: 17,
		text: "An aqueous solution of aluminium chloride ($\\text{AlCl}_3$) is acidic in nature. This is due to the:",
		options: [
			"Dissociation of chloride ions forming hydrochloric acid directly",
			"Hydrolysis of hydrated aluminium cation $[\\text{Al(H}_2\\text{O)}_6]^{3+}$ releasing hydronium ions",
			"Oxidation of water by $\\text{Al}^{3+}$ ions",
			"Formation of insoluble aluminium carbide in water",
		],
		correctOption: 1,
		explanation:
			"In aqueous solution, anhydrous $\\text{AlCl}_3$ dissolves to form the hexahydrated complex ion $[\\text{Al(H}_2\\text{O)}_6]^{3+}$. Because of the high charge density of $\\text{Al}^{3+}$, it pulls electron density from coordinated water molecules, facilitating hydrolysis: $[\\text{Al(H}_2\\text{O)}_6]^{3+} + \\text{H}_2\\text{O} \\rightleftharpoons [\\text{Al(H}_2\\text{O)}_5(\\text{OH})]^{2+} + \\text{H}_3\\text{O}^+$, making the solution acidic.",
	},
	{
		id: 18,
		text: "What is the hybridization of the boron atom in the tetrafluoroborate anion, $[\\text{BF}_4]^-$?",
		options: ["$sp$", "$sp^2$", "$sp^3$", "$sp^3d$"],
		correctOption: 2,
		explanation:
			"In $[\\text{BF}_4]^-$, the central boron atom forms four single covalent/coordinate bonds with four fluorine atoms and has no lone pairs. Therefore, its steric number is 4, corresponding to $sp^3$ hybridization with tetrahedral geometry.",
	},
	{
		id: 19,
		text: "When orthoboric acid ($\\text{H}_3\\text{BO}_3$) is heated above 370 K, it first loses water to form:",
		options: [
			"Metaboric acid ($\\text{HBO}_2$)",
			"Tetraboric acid ($\\text{H}_2\\text{B}_4\\text{O}_7$)",
			"Boron trioxide ($\\text{B}_2\\text{O}_3$)",
			"Boron hydride ($\\text{BH}_3$)",
		],
		correctOption: 0,
		explanation:
			"On heating orthoboric acid above 370 K (approx. 100 °C), it loses a molecule of water to form metaboric acid ($\\text{HBO}_2$). When metaboric acid is heated further around 410 K, it forms tetraboric acid ($\\text{H}_2\\text{B}_4\\text{O}_7$), which at red heat decomposes into boron trioxide ($\\text{B}_2\\text{O}_3$).",
	},
	{
		id: 20,
		text: "Which of the following compounds is used as a standard flux in metallurgy and in the manufacturing of heat-resistant borosilicate glass (Pyrex)?",
		options: [
			"Borax ($\\text{Na}_2\\text{B}_4\\text{O}_7\\cdot10\\text{H}_2\\text{O}$)",
			"Aluminium chloride ($\\text{AlCl}_3$)",
			"Gallium arsenide ($\\text{GaAs}$)",
			"Diborane ($\\text{B}_2\\text{H}_6$)",
		],
		correctOption: 0,
		explanation:
			"Borax is widely used as a flux in soldering and welding metals, in metallurgical assaying (borax bead test), and as a primary raw material in manufacturing heat-resistant borosilicate glass (like Pyrex and laboratory glassware) due to its low thermal expansion properties.",
	},
	{
		id: 21,
		text: "The stability of the +4 oxidation state among Group 14 elements follows which of the following sequences?",
		options: [
			"$\\text{C} > \\text{Si} > \\text{Ge} > \\text{Sn} > \\text{Pb}$",
			"$\\text{Pb} > \\text{Sn} > \\text{Ge} > \\text{Si} > \\text{C}$",
			"$\\text{Si} > \\text{C} > \\text{Ge} > \\text{Pb} > \\text{Sn}$",
			"$\\text{C} ≈ \\text{Si} ≈ \\text{Ge} ≈ \\text{Sn} ≈ \\text{Pb}$",
		],
		correctOption: 0,
		explanation:
			"In Group 14, as we move down from Carbon to Lead, the stability of the +4 oxidation state steadily decreases while the stability of the +2 oxidation state increases due to the inert pair effect. Thus, $\\text{C}$ and $\\text{Si}$ are most stable in +4, whereas for $\\text{Pb}$, the +2 state is more stable than +4.",
	},
	{
		id: 22,
		text: "Which of the following allotropes of carbon is thermodynamically the most stable at standard conditions (298 K and 1 atm)?",
		options: [
			"Diamond",
			"Graphite",
			"Buckminsterfullerene ($\\text{C}_{60}$)",
			"Amorphous carbon",
		],
		correctOption: 1,
		explanation:
			"Thermodynamically, graphite is the most stable allotrope of carbon at room temperature and standard pressure. The standard enthalpy of formation of graphite is defined as zero ($\\%\\Delta_f H^\\circ = 0$), whereas for diamond it is $+1.90\\text{ kJ/mol}$ and for $\\text{C}_{60}$ it is $+38.1\\text{ kJ/mol}$.",
	},
	{
		id: 23,
		text: "Why does carbon exhibit an extraordinary tendency for catenation compared to silicon and other Group 14 elements?",
		options: [
			"The C-C bond energy (348 kJ/mol) is exceptionally high compared to the Si-Si bond energy (297 kJ/mol)",
			"Carbon has a large atomic radius that allows extensive overlap of d-orbitals",
			"Carbon is extremely electronegative compared to halogens",
			"Silicon readily forms double bonds with itself ($p\\pi-p\\pi$), preventing chain formation",
		],
		correctOption: 0,
		explanation:
			"Catenation (the ability to form chains and rings by self-linking) depends directly on the strength of the element-element bond. Because of carbon's small atomic size, the C-C single bond is exceptionally strong (348 kJ/mol) compared to Si-Si (297 kJ/mol) and Ge-Ge (260 kJ/mol), giving carbon unmatched catenation ability.",
	},
	{
		id: 24,
		text: "In diamond, each carbon atom is bonded to four other carbon atoms in a rigid tetrahedral three-dimensional network. What are the hybridization and C-C bond length in diamond?",
		options: [
			"$sp^3$ hybridization and 154 pm bond length",
			"$sp^2$ hybridization and 142 pm bond length",
			"$sp^3$ hybridization and 134 pm bond length",
			"$sp$ hybridization and 120 pm bond length",
		],
		correctOption: 0,
		explanation:
			"In diamond, every carbon atom undergoes $sp^3$ hybridization and is linked to four neighboring carbon atoms via strong covalent $\\sigma$ bonds in a tetrahedral fashion. The uniform C-C single bond length throughout the diamond lattice is 154 pm.",
	},
	{
		id: 25,
		text: "Why is graphite a good conductor of electricity along its hexagonal sheet layers?",
		options: [
			"Each carbon atom is $sp^2$ hybridized, leaving one unhybridized p-orbital with a free electron that forms a delocalized $\\pi$-system over the layer",
			"Graphite contains mobile sodium ions trapped between its layers",
			"The C-C bonds in graphite are ionic, allowing rapid ion migration under an electric field",
			"Graphite undergoes continuous thermal ionization at room temperature",
		],
		correctOption: 0,
		explanation:
			"In graphite, each carbon atom is $sp^2$ hybridized and forms three $\\sigma$ bonds with adjacent carbons in the same planar sheet. The fourth valence electron occupies an unhybridized p-orbital perpendicular to the sheet. These electrons overlap laterally to form a highly delocalized, mobile $\\pi$-electron cloud across the layer, imparting high electrical conductivity.",
	},
	{
		id: 26,
		text: "Buckminsterfullerene ($\\text{C}_{60}$) is a spherical carbon allotrope that looks like a soccer ball. Which of the following correctly describes its structural rings?",
		options: [
			"20 six-membered rings and 12 five-membered rings",
			"12 six-membered rings and 20 five-membered rings",
			"30 six-membered rings and 10 five-membered rings",
			"15 six-membered rings and 15 five-membered rings",
		],
		correctOption: 0,
		explanation:
			"Buckminsterfullerene ($\\text{C}_{60}$) has a truncated icosahedron structure consisting of exactly 20 six-membered hexagonal rings and 12 five-membered pentagonal rings. A crucial geometric rule is that a six-membered ring can fuse with both hexagons and pentagons, but a five-membered ring can only fuse with six-membered rings.",
	},
	{
		id: 27,
		text: "Carbon tetrachloride ($\\text{CCl}_4$) does not undergo hydrolysis in water under normal conditions, whereas silicon tetrachloride ($\\text{SiCl}_4$) is readily hydrolyzed. Why?",
		options: [
			"Carbon has no vacant d-orbitals in its valence shell to accept lone pairs from water molecules, whereas silicon possesses vacant $3d$ orbitals",
			"The C-Cl bond is ionic, whereas the Si-Cl bond is covalent",
			"$\\text{CCl}_4$ is a polar molecule that repels water",
			"Silicon tetrachloride is insoluble in water due to high lattice energy",
		],
		correctOption: 0,
		explanation:
			"In $\\text{SiCl}_4$, the central silicon atom has vacant $3d$ orbitals available in its valence shell. During hydrolysis, an oxygen atom of water donates its lone pair into these empty d-orbitals to form an intermediate, leading to rapid hydrolysis into silicic acid, $\\text{Si(OH)}_4$. Carbon ($2s^2 2p^2$) lacks d-orbitals and cannot expand its octet to accept water lone pairs.",
	},
	{
		id: 28,
		text: "Which oxide of Group 14 is a neutral, odorless, and highly toxic gas that binds to hemoglobin nearly 300 times more strongly than oxygen?",
		options: [
			"Carbon monoxide ($\\text{CO}$)",
			"Carbon dioxide ($\\text{CO}_2$)",
			"Silicon dioxide ($\\text{SiO}_2$)",
			"Lead(II) oxide ($\\text{PbO}$)",
		],
		correctOption: 0,
		explanation:
			"Carbon monoxide ($\\text{CO}$) is a colorless, odorless, and neutral oxide. It is exceptionally toxic to animals because it binds reversibly to iron in hemoglobin to form carboxyhemoglobin, which is about 300 times more stable than oxyhemoglobin, blocking normal oxygen transport in the bloodstream.",
	},
	{
		id: 29,
		text: "Solid carbon dioxide (Dry Ice) is used as a refrigerant for ice cream and frozen food because it:",
		options: [
			"Sublimes directly from the solid state to the gaseous state at -78 °C without leaving any liquid residue",
			"Melts into a non-toxic liquid at 0 °C that keeps food hydrated",
			"Forms a high-temperature insulating plasma layer",
			"Is an alkaline solid that neutralizes food spoilage bacteria",
		],
		correctOption: 0,
		explanation:
			"Solid carbon dioxide is known as Dry Ice. At normal atmospheric pressure, it does not melt into a liquid; instead, it sublimes directly from solid to gas at 195 K (-78 °C). This property makes it an ideal, clean refrigerant for storing and transporting frozen goods without creating messy liquid residue.",
	},
	{
		id: 30,
		text: "In silicon dioxide ($\\text{SiO}_2$, quartz), what is the structural arrangement of silicon and oxygen atoms?",
		options: [
			"A three-dimensional covalent network where each Si is tetrahedrally bonded to 4 O atoms, and each O is bonded to 2 Si atoms",
			"Discrete linear $\\text{O}=\\text{Si}=\\text{O}$ molecules held together by weak van der Waals forces",
			"Planar sheets of $\\text{SiO}_3^{2-}$ units joined by hydrogen bonds",
			"An ionic lattice composed of $\\text{Si}^{4+}$ cations and $\\text{O}^{2-}$ anions",
		],
		correctOption: 0,
		explanation:
			"Unlike carbon dioxide (which exists as discrete linear $\\text{CO}_2$ molecules due to strong $p\\pi-p\\pi$ double bonds), silicon cannot form stable $p\\pi-p\\pi$ double bonds with oxygen. Instead, $\\text{SiO}_2$ forms a giant three-dimensional covalent network where each Si atom is tetrahedrally surrounded by 4 oxygen atoms, and each oxygen atom bridges between 2 silicon atoms.",
	},
];
