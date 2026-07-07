import type { Question } from "#/components/CbtSimulator/types";

export const pBlock2QuestionsPart1: Question[] = [
	{
		id: 1,
		text: "Which of the following Group 13 elements has the lowest melting point and can exist in liquid state during summer?",
		options: ["Boron (B)", "Aluminium (Al)", "Gallium (Ga)", "Indium (In)"],
		correctOption: 2,
		explanation:
			"Gallium has an unusually low melting point of $303\\text{ K}$ ($30^\\circ\\text{C}$) due to its unique crystal structure which consists of close-knit diatomic $\\text{Ga}_2$ molecules rather than a typical metallic lattice. Thus, it can easily melt on a warm summer day or even when held in the hand.",
	},
	{
		id: 2,
		text: "What is the correct order of the first ionization enthalpy ($\\Delta_i H_1$) for the Group 13 elements?",
		options: [
			"$\\text{B} > \\text{Al} > \\text{Ga} > \\text{In} > \\text{Tl}$",
			"$\\text{B} > \\text{Tl} > \\text{Ga} > \\text{Al} > \\text{In}$",
			"$\\text{B} > \\text{Ga} > \\text{Al} > \\text{In} > \\text{Tl}$",
			"$\\text{B} > \\text{Al} > \\text{Ga} > \\text{Tl} > \\text{In}$",
		],
		correctOption: 1,
		explanation:
			"The general trend of decreasing ionization enthalpy down the group is disrupted in Group 13. The correct order is $\\text{B} > \\text{Tl} > \\text{Ga} > \\text{Al} > \\text{In}$. The increase from Al to Ga is due to the poor shielding of the $3d$ transition electrons. The increase from In to Tl is due to the even poorer shielding of the $4f$ lanthanide electrons combined with relativistic contraction.",
	},
	{
		id: 3,
		text: "The stability of the +1 oxidation state among Group 13 elements increases in the order:",
		options: [
			"$\\text{Al} < \\text{Ga} < \\text{In} < \\text{Tl}$",
			"$\\text{Tl} < \\text{In} < \\text{Ga} < \\text{Al}$",
			"$\\text{Ga} < \\text{Al} < \\text{In} < \\text{Tl}$",
			"$\\text{Al} < \\text{In} < \\text{Ga} < \\text{Tl}$",
		],
		correctOption: 0,
		explanation:
			"Due to the inert pair effect, the outer $s$-orbital electrons ($ns^2$) become increasingly reluctant to participate in bonding down the group. Consequently, the +1 oxidation state becomes increasingly stable relative to the +3 state as we go from Aluminium to Thallium. Thus, $\\text{Al} < \\text{Ga} < \\text{In} < \\text{Tl}$ is the correct order.",
	},
	{
		id: 4,
		text: "Which of the following compounds is formed when borax is heated strongly with cobalt oxide ($\\text{CoO}$) on a platinum loop?",
		options: [
			"Blue colored cobalt metaborate bead",
			"Pink colored cobalt orthoborate bead",
			"Black colored cobalt oxide bead",
			"Green colored cobalt tetraborate bead",
		],
		correctOption: 0,
		explanation:
			"When borax is heated strongly, it loses water of crystallization and swells, then melts to form a transparent glassy bead containing sodium metaborate ($\\text{NaBO}_2$) and boric anhydride ($\\text{B}_2\\text{O}_3$). On heating with cobalt oxide, a reaction occurs forming a deep-blue cobalt metaborate bead: $\\text{CoO} + \\text{B}_2\\text{O}_3 \\rightarrow \\text{Co(BO}_2)_2$ (blue bead).",
	},
	{
		id: 5,
		text: "The correct structure of diborane ($B_2H_6$) contains:",
		options: [
			"Four 3-center-2-electron bonds and two 2-center-2-electron bonds",
			"Two 3-center-2-electron bonds and four 2-center-2-electron bonds",
			"Six 2-center-2-electron covalent bonds",
			"Three 3-center-2-electron bonds and three 2-center-2-electron bonds",
		],
		correctOption: 1,
		explanation:
			"Diborane contains two terminal hydrogen atoms attached to each boron atom via normal covalent bonds (four 2-center-2-electron $\\text{B-H}$ bonds). The remaining two hydrogen atoms act as bridges between the two boron atoms, forming two 3-center-2-electron $\\text{B-H-B}$ bonds (banana bonds).",
	},
	{
		id: 6,
		text: "Boric acid ($H_3BO_3$) behaves as a weak monobasic acid because it:",
		options: [
			"Releases a proton ($H^+$) from its own molecule upon dissociation",
			"Accepts a hydroxide ion ($OH^-$) from water, releasing a hydronium ion",
			"Reacts with base to release hydrogen gas",
			"Acts as a proton donor in non-aqueous solvents",
		],
		correctOption: 1,
		explanation:
			"Boric acid is not a protic acid (proton donor) since it does not contain ionizable protons in water. Instead, boron has an incomplete octet and acts as a Lewis acid by accepting an electron pair from the hydroxyl group of a water molecule: $\\text{B(OH)}_3 + 2\\text{H}_2\\text{O} \\rightleftharpoons [\\text{B(OH)}_4]^- + \\text{H}_3\\text{O}^+$. Thus, it is a monobasic Lewis acid.",
	},
	{
		id: 7,
		text: "In the structure of diborane ($B_2H_6$), the hybridization of the boron atoms is:",
		options: ["$sp$", "$sp^2$", "$sp^3$", "$sp^3d$"],
		correctOption: 2,
		explanation:
			"Each boron atom in diborane forms four bonds (two terminal $\\text{B-H}$ bonds and two bridged $\\text{B-H-B}$ bonds). To accommodate four pairs of bonding electrons, the boron atoms undergo $sp^3$ hybridization.",
	},
	{
		id: 8,
		text: "When boric acid ($H_3BO_3$) is heated to about $370\\text{ K}$, it forms:",
		options: [
			"Metaboric acid ($\\text{HBO}_2$)",
			"Tetraboric acid ($\\text{H}_2\\text{B}_4\\text{O}_7$)",
			"Boric anhydride ($\\text{B}_2\\text{O}_3$)",
			"Boron sesquioxide ($\\text{BO}$)",
		],
		correctOption: 0,
		explanation:
			"Heating boric acid at $370\\text{ K}$ yields metaboric acid: $\\text{H}_3\\text{BO}_3 \\xrightarrow{370\\text{ K}} \\text{HBO}_2 + \\text{H}_2\\text{O}$. Further heating to $410\\text{ K}$ gives tetraboric acid ($\\text{H}_2\\text{B}_4\\text{O}_7$), and heating strongly at red heat results in boron trioxide ($\\text{B}_2\\text{O}_3$).",
	},
	{
		id: 9,
		text: "Which of the following boron halides does NOT undergo complete hydrolysis, instead forming an adduct with the halide ion?",
		options: [
			"$\\text{BF}_3$",
			"$\\text{BCl}_3$",
			"$\\text{BBr}_3$",
			"$\\text{BI}_3$",
		],
		correctOption: 0,
		explanation:
			"Unlike the other halides which undergo complete hydrolysis to give boric acid and hydrohalic acid, $\\text{BF}_3$ undergoes partial hydrolysis. The $\\text{HF}$ produced reacts with unreacted $\\text{BF}_3$ to form fluoroboric acid ($H[BF_4]$): $4\\text{BF}_3 + 3\\text{H}_2\\text{O} \\rightarrow \\text{H}_3\\text{BO}_3 + 3\\text{H}[\\text{BF}_4]$.",
	},
	{
		id: 10,
		text: "Aluminium is made passive (unreactive) by treatment with which of the following reagents?",
		options: [
			"Concentrated $\\text{HCl}$",
			"Dilute $\\text{H}_2\\text{SO}_4$",
			"Concentrated $\\text{HNO}_3$",
			"Aqueous $\\text{NaOH}$",
		],
		correctOption: 2,
		explanation:
			"Concentrated nitric acid ($HNO_3$) is a strong oxidizing agent. When aluminium is treated with concentrated $HNO_3$, it oxidizes the surface of the metal, forming a thin, dense, and non-porous protective layer of aluminium oxide ($Al_2O_3$). This renders the metal passive to further reaction.",
	},
	{
		id: 11,
		text: "Which of the following compounds is commonly known as 'inorganic benzene'?",
		options: [
			"Borazole (or Borazine), $\\text{B}_3\\text{N}_3\\text{H}_6$",
			"Diborane, $\\text{B}_2\\text{H}_6$",
			"Boron nitride, $(\\text{BN})_n$",
			"Sodium borohydride, $\\text{NaBH}_4$",
		],
		correctOption: 0,
		explanation:
			"Borazine ($\\text{B}_3\\text{N}_3\\text{H}_6$) is called inorganic benzene because its cyclic ring structure, alternated with B and N atoms, is isoelectronic and isosteric with benzene, possessing a similar hexagonal ring structure and delocalized electron cloud.",
	},
	{
		id: 12,
		text: "Aluminium chloride exists as a dimer ($Al_2Cl_6$) in the vapor state and in non-polar solvents. The dimerization is achieved through:",
		options: [
			"Hydrogen bonding",
			"Coordinate covalent bonds formed by chlorine donation to aluminium",
			"Three-center two-electron metallic bonds",
			"Electrostatic ionic interactions between monomeric layers",
		],
		correctOption: 1,
		explanation:
			"In aluminium chloride, the aluminium atom is electron-deficient (octet incomplete). To complete its octet, each aluminium atom accepts a lone pair of electrons from a chlorine atom bonded to the neighboring aluminium atom, forming two bridge coordinate (dative) bonds.",
	},
	{
		id: 13,
		text: "The Lewis acid strength of boron trihalides increases in the order:",
		options: [
			"$\\text{BI}_3 < \\text{BBr}_3 < \\text{BCl}_3 < \\text{BF}_3$",
			"$\\text{BF}_3 < \\text{BCl}_3 < \\text{BBr}_3 < \\text{BI}_3$",
			"$\\text{BF}_3 < \\text{BI}_3 < \\text{BCl}_3 < \\text{BBr}_3$",
			"$\\text{BCl}_3 < \\text{BF}_3 < \\text{BBr}_3 < \\text{BI}_3$",
		],
		correctOption: 1,
		explanation:
			"Although fluorine is the most electronegative, $\\text{BF}_3$ is the weakest Lewis acid due to strong $p\\pi-p\\pi$ back-bonding. The small $2p$ orbitals of B and F overlap effectively to share lone pairs. Down the group, the orbital size of the halogen increases ($3p$ for Cl, $4p$ for Br, $5p$ for I), reducing the efficiency of back-donation. Hence, the electron deficiency on B remains high, making $\\text{BI}_3$ the strongest Lewis acid.",
	},
	{
		id: 14,
		text: "Which of the following oxides of Group 13 is acidic in nature?",
		options: [
			"$\\text{B}_2\\text{O}_3$",
			"$\\text{Al}_2\\text{O}_3$",
			"$\\text{Ga}_2\\text{O}_3$",
			"$\\text{In}_2\\text{O}_3$",
		],
		correctOption: 0,
		explanation:
			"The acidic character of Group 13 oxides decreases down the group. $\\text{B}_2\\text{O}_3$ is acidic and reacts with basic metal oxides to form metaborates. $\\text{Al}_2\\text{O}_3$ and $\\text{Ga}_2\\text{O}_3$ are amphoteric, whereas $\\text{In}_2\\text{O}_3$ and $\\text{Tl}_2\\text{O}_3$ are basic.",
	},
	{
		id: 15,
		text: "What is the molecular formula of Borax as per its crystalline structure?",
		options: [
			"$\\text{Na}_2\\text{B}_4\\text{O}_7 \\cdot 10\\text{H}_2\\text{O}$",
			"$\\text{Na}_2[\\text{B}_4\\text{O}_5(\\text{OH})_4] \\cdot 8\\text{H}_2\\text{O}$",
			"$\\text{Na}_2\\text{B}_4\\text{O}_7 \\cdot 5\\text{H}_2\\text{O}$",
			"$\\text{Na}[\\text{B}_4\\text{O}_5(\\text{OH})_4] \\cdot 10\\text{H}_2\\text{O}$",
		],
		correctOption: 1,
		explanation:
			"Although borax is commonly written as $\\text{Na}_2\\text{B}_4\\text{O}_7 \\cdot 10\\text{H}_2\\text{O}$, its actual structure contains tetranuclear units $[\\text{B}_4\\text{O}_5(\\text{OH})_4]^{2-}$. Therefore, the correct structural representation is $\\text{Na}_2[\\text{B}_4\\text{O}_5(\\text{OH})_4] \\cdot 8\\text{H}_2\\text{O}$.",
	},
	{
		id: 16,
		text: "Which of the following compounds reacts with diborane to form a coordinate complex (adduct)?",
		options: [
			"Carbon monoxide ($\\text{CO}$)",
			"Hydrochloric acid ($\\text{HCl}$)",
			"Carbon dioxide ($\\text{CO}_2$)",
			"Sodium chloride ($\\text{NaCl}$)",
		],
		correctOption: 0,
		explanation:
			"Diborane undergoes cleavage reactions with Lewis bases. With carbon monoxide ($\\text{CO}$), it undergoes symmetrical cleavage to yield a borane carbonyl adduct: $\\text{B}_2\\text{H}_6 + 2\\text{CO} \\rightarrow 2\\text{BH}_3\\cdot\\text{CO}$.",
	},
	{
		id: 17,
		text: "An aqueous solution of borax is:",
		options: [
			"Acidic in nature",
			"Basic (alkaline) in nature",
			"Neutral in nature",
			"Amphoteric in nature",
		],
		correctOption: 1,
		explanation:
			"Borax dissolves in water to undergo hydrolysis, producing a strong base (sodium hydroxide) and a weak acid (orthoboric acid): $\\text{Na}_2\\text{B}_4\\text{O}_7 + 7\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + 4\\text{H}_3\\text{BO}_3$. Because of the presence of the strong alkali $\\text{NaOH}$, the solution is alkaline.",
	},
	{
		id: 18,
		text: "The correct reaction showing the synthesis of borazine from diborane is:",
		options: [
			"$\\text{B}_2\\text{H}_6 + 2\\text{NH}_3 \\xrightarrow{\\text{High Temp}} \\text{B}_2\\text{H}_6\\cdot 2\\text{NH}_3$",
			"$3\\text{B}_2\\text{H}_6 + 6\\text{NH}_3 \\xrightarrow{\\text{High Temp}} 2\\text{B}_3\\text{N}_3\\text{H}_6 + 12\\text{H}_2$",
			"$\\text{B}_2\\text{H}_6 + \\text{N}_2 \\rightarrow 2\\text{BN} + 3\\text{H}_2$",
			"$3\\text{B}_2\\text{H}_6 + 3\\text{NH}_3 \\rightarrow \\text{B}_3\\text{N}_3\\text{H}_6 + 9\\text{H}_2$",
		],
		correctOption: 1,
		explanation:
			"Heating diborane with ammonia in a 1:2 ratio at high temperatures ($450\\text{ K}$) yields the volatile heterocyclic compound borazine: $3\\text{B}_2\\text{H}_6 + 6\\text{NH}_3 \\rightarrow 2\\text{B}_3\\text{N}_3\\text{H}_6 + 12\\text{H}_2$.",
	},
	{
		id: 19,
		text: "Which element in Group 13 does NOT form an oxide of type $\\text{M}_2\\text{O}_3$ upon direct heating in air?",
		options: ["Boron (B)", "Aluminium (Al)", "Thallium (Tl)", "Indium (In)"],
		correctOption: 2,
		explanation:
			"Due to the highly pronounced inert pair effect, Thallium's +1 oxidation state is much more stable than +3. Thus, thallium reacts with air to primarily form thallium(I) oxide, $\\text{Tl}_2\\text{O}$, instead of $\\text{Tl}_2\\text{O}_3$.",
	},
	{
		id: 20,
		text: "Which of the following compounds behaves as a Lewis acid in dimer form but becomes monomeric and coordinates with ethers?",
		options: [
			"$\\text{BF}_3$",
			"$\\text{AlH}_3$",
			"$\\text{AlCl}_3$",
			"$\\text{B}_2\\text{H}_6$",
		],
		correctOption: 2,
		explanation:
			"Anhydrous aluminium chloride ($\\text{AlCl}_3$) is a dimer ($\\text{Al}_2\\text{Cl}_6$) in solid and vapor states. However, when dissolved in donor solvents like ether, the dimer cleaves to form monomeric coordinate complexes, such as $\\text{AlCl}_3 \\cdot \\text{O(C}_2\\text{H}_5)_2$, by accepting a lone pair from the oxygen atom.",
	},
	{
		id: 21,
		text: "When boric acid is added to aqueous solution in the presence of cis-1,2-diols (like glycerol or mannitol), its acidic strength increases significantly. This is because:",
		options: [
			"Diols act as strong proton acceptors",
			"Boric acid forms stable chelate complex with the diols, shifting the hydrolysis equilibrium forward",
			"Diols oxidize boric acid to tetraboric acid",
			"The diol dehydrates boric acid to boron trioxide",
		],
		correctOption: 1,
		explanation:
			"Boric acid reacts with cis-1,2-diols to form a highly stable chelated anionic complex. The formation of this stable complex pulls the equilibrium $\\text{B(OH)}_3 + \\text{H}_2\\text{O} \\rightleftharpoons [\\text{B(OH)}_4]^- + \\text{H}^+$ to the right, releasing more protons and allowing it to be titrated as a strong monobasic acid.",
	},
	{
		id: 22,
		text: "Which of the following statements about Group 13 hydrides is FALSE?",
		options: [
			"Boranes are highly reactive electron-deficient molecules",
			"$\\text{AlH}_3$ is a polymeric solid",
			"All Group 13 hydrides are stable at room temperature",
			"Diborane catches fire spontaneously in air",
		],
		correctOption: 2,
		explanation:
			"Only boranes and aluminium hydride are reasonably characterized. Hydrides of Gallium, Indium, and Thallium are highly unstable and decompose easily. Thus, saying all Group 13 hydrides are stable is false.",
	},
	{
		id: 23,
		text: "The correct sequence of atomic radii for Group 13 elements is:",
		options: [
			"$\\text{B} < \\text{Al} < \\text{Ga} < \\text{In} < \\text{Tl}$",
			"$\\text{B} < \\text{Ga} < \\text{Al} < \\text{In} < \\text{Tl}$",
			"$\\text{B} < \\text{Al} < \\text{In} < \\text{Ga} < \\text{Tl}$",
			"$\\text{B} < \\text{Ga} < \\text{In} < \\text{Al} < \\text{Tl}$",
		],
		correctOption: 1,
		explanation:
			"The atomic radius of Gallium (135 pm) is smaller than that of Aluminium (143 pm) due to the poor shielding of the nuclear charge by the ten $3d$ electrons of Gallium. Therefore, the correct sequence is B (85 pm) < Ga (135 pm) < Al (143 pm) < In (167 pm) < Tl (170 pm).",
	},
	{
		id: 24,
		text: "Boron fibers are primarily used in which of the following applications?",
		options: [
			"As a rocket fuel additive",
			"For making bullet-proof vests and lightweight composite materials for aircraft",
			"As a catalyst in organic synthesis",
			"As a semiconductor dopant for high-power transistors",
		],
		correctOption: 1,
		explanation:
			"Boron fibers have high tensile strength and are extremely light. Hence, they are extensively used in making bullet-proof vests, structural composites for aerospace engineering, and advanced sports equipment.",
	},
	{
		id: 25,
		text: "What compound is produced when diborane reacts with excess ammonia at high temperatures?",
		options: [
			"Borazole ($\\text{B}_3\\text{N}_3\\text{H}_6$)",
			"Boron nitride ($\\text{BN}$)",
			"Ammonium borate",
			"Boron triamide ($\\text{B(NH}_2)_3$)",
		],
		correctOption: 1,
		explanation:
			"When diborane reacts with excess ammonia at very high temperatures, it forms boron nitride, $(\\text{BN})_n$, which is a slippery white polymer often referred to as 'white graphite' due to its layered structure.",
	},
	{
		id: 26,
		text: "Why is boron unable to form the hexafluoride complex ion ($[BF_6]^{3-}$), whereas aluminium easily forms $[AlF_6]^{3-}$?",
		options: [
			"Boron is highly electronegative",
			"Boron has a much smaller atomic size than aluminium",
			"Boron lacks vacant d-orbitals in its valence shell",
			"Boron forms highly unstable ionic bonds",
		],
		correctOption: 2,
		explanation:
			"Boron belongs to Period 2 and its valence configuration is $2s^2 2p^1$. It has only 4 valence orbitals (one $2s$ and three $2p$) and no $d$-orbitals, limiting its maximum covalency to 4. Aluminium has vacant $3d$-orbitals, allowing it to expand its coordination number to 6.",
	},
	{
		id: 27,
		text: "Which of the following compounds is formed when thallium oxide reacts with concentrated hydrochloric acid?",
		options: [
			"$\\text{TlCl}$",
			"$\\text{TlCl}_3$",
			"$\\text{TlCl}_2$",
			"$\\text{TlCl}_4$",
		],
		correctOption: 0,
		explanation:
			"Thallium(I) compounds are highly stable because of the inert pair effect. When thallium oxide reacts with $HCl$, thallium(I) chloride ($\\text{TlCl}$), which is a white precipitate, is preferentially formed because $\\text{Tl}^{3+}$ easily reduces to $\\text{Tl}^+$.",
	},
	{
		id: 28,
		text: "Aluminium reacts with aqueous sodium hydroxide solution to produce:",
		options: [
			"Aluminium hydroxide and sodium oxide",
			"Sodium tetrahydroxoaluminate(III) and hydrogen gas",
			"Sodium aluminate and oxygen gas",
			"Aluminium hydride and sodium hydroxide",
		],
		correctOption: 1,
		explanation:
			"Aluminium is amphoteric and dissolves in aqueous sodium hydroxide, releasing hydrogen gas: $2\\text{Al}(s) + 2\\text{NaOH}(aq) + 6\\text{H}_2\\text{O}(l) \\rightarrow 2\\text{Na}[\\text{Al(OH)}_4](aq) + 3\\text{H}_2(g)$. The salt formed is sodium tetrahydroxoaluminate(III).",
	},
	{
		id: 29,
		text: "Which of the following behaves as a reducing agent in Group 13?",
		options: [
			"$\\text{Tl}^{3+}$",
			"$\\text{Al}^{3+}$",
			"$\\text{Ga}^+$",
			"$\\text{B}^{3+}$",
		],
		correctOption: 2,
		explanation:
			"For Gallium, the +3 state is more stable than the +1 state. Therefore, $\\text{Ga}^+$ acts as a strong reducing agent because it tends to lose two more electrons to convert to the more stable $\\text{Ga}^{3+}$ state. In contrast, $\\text{Tl}^{3+}$ acts as an oxidizing agent.",
	},
	{
		id: 30,
		text: "The three-center two-electron bridge bonds in diborane are formed by the overlap of:",
		options: [
			"Two $sp^2$ hybridized orbitals of B and one $1s$ orbital of H",
			"Two $sp^3$ hybridized orbitals of B and one $1s$ orbital of H",
			"One $sp^3$ and one $sp^2$ hybridized orbitals of B and one $1s$ orbital of H",
			"Two $p$ orbitals of B and one $1s$ orbital of H",
		],
		correctOption: 1,
		explanation:
			"Each of the two 3-center-2-electron bridge bonds (banana bonds) is formed by the overlap of an $sp^3$ hybrid orbital from one Boron atom, a $1s$ orbital of the bridge Hydrogen atom, and another $sp^3$ hybrid orbital from the second Boron atom.",
	},
];
