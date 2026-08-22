export interface Question {
	id: number;
	text: string;
	options: string[]; // Exactly 4 options
	correctOption: number; // 0-indexed: 0=A, 1=B, 2=C, 3=D
	explanation: string;
	svgDiagram?: string;
}

export const photosynthesisQuestionsPart1: Question[] = [
	{
		id: 1,
		text: "Who among the following scientists demonstrated that sunlight is essential to the plant process that purifies the air fouled by breathing animals or burning candles by using an aquatic plant?",
		options: [
			"Joseph Priestley",
			"Jan Ingenhousz",
			"Julius von Sachs",
			"T.W. Engelmann",
		],
		correctOption: 1,
		explanation:
			"Jan Ingenhousz (1730–1799) used an aquatic plant (like Hydrilla) to show that in bright sunlight, small bubbles formed around the green parts, while in the dark they did not. He identified these bubbles to be oxygen and showed that only the green parts of plants release oxygen.",
	},
	{
		id: 2,
		text: "T.W. Engelmann illuminated a green alga (*Cladophora*) placed in a suspension of aerobic bacteria using a prism to split light into its spectral components. He observed that bacteria accumulated mainly in the regions of:",
		options: [
			"Green and Yellow light",
			"Blue and Red light",
			"Orange and Red light",
			"Violet and Green light",
		],
		correctOption: 1,
		explanation:
			"T.W. Engelmann used a prism to split light into its spectral components and illuminated a filamentous green alga, *Cladophora*, placed in a suspension of aerobic bacteria. The bacteria accumulated mainly in the regions of blue and red light of the split spectrum, representing the first action spectrum of photosynthesis.",
	},
	{
		id: 3,
		text: "Cornelius van Niel based his milestone contribution to the understanding of photosynthesis on his studies of:",
		options: [
			"Unicellular green algae like *Chlorella*",
			"Purple and green sulphur bacteria",
			"Aquatic angiosperms like *Hydrilla*",
			"Submerged bryophytes",
		],
		correctOption: 1,
		explanation:
			"Cornelius van Niel, a microbiologist, studied purple and green sulphur bacteria and demonstrated that photosynthesis is essentially a light-dependent reaction in which hydrogen from a suitable oxidisable compound reduces carbon dioxide to carbohydrates ($2H_2A + CO_2 \\xrightarrow{\\text{Light}} 2A + CH_2O + H_2O$).",
	},
	{
		id: 4,
		text: "Which radioisotope was used by Ruben, Kamen, and coworkers to provide definitive proof that the oxygen evolved during photosynthesis comes from water ($H_2O$) and not from carbon dioxide ($CO_2$)?",
		options: ["$^{14}C$", "$^{18}O$", "$^{32}P$", "$^{3}H$"],
		correctOption: 1,
		explanation:
			"Using the heavy non-radioactive oxygen isotope $^{18}O$, Ruben, Kamen, and colleagues proved that when green plants are supplied with $H_2^{18}O$ and normal $CO_2$, the evolved oxygen is $^{18}O_2$. When supplied with normal $H_2O$ and $C^{18}O_2$, the evolved oxygen contains normal $^{16}O$.",
	},
	{
		id: 5,
		text: "Which of the following internal structures in chloroplasts is responsible for trapping light energy and for the synthesis of ATP and NADPH?",
		options: [
			"Stroma matrix",
			"Membrane system (Grana and Stroma lamellae)",
			"Outer chloroplast envelope",
			"Starch grains and Osmiophilic granules",
		],
		correctOption: 1,
		explanation:
			"The chloroplast possesses a clear division of labour: the membrane system consisting of grana, thylakoids, and stroma lamellae is responsible for trapping light energy and synthesizing ATP and NADPH (light reactions), whereas the fluid stroma houses enzymatic dark reactions for carbon fixation.",
	},
	{
		id: 6,
		text: "Paper chromatographic separation of leaf pigments of a green plant reveals four distinct color bands. Which pigment corresponds correctly to its chromatic appearance?",
		options: [
			"Chlorophyll a — Yellow-green",
			"Chlorophyll b — Bright or Blue-green",
			"Xanthophylls — Yellow",
			"Carotenoids — Blue-violet",
		],
		correctOption: 2,
		explanation:
			"On a paper chromatogram: Chlorophyll a appears bright or blue-green, Chlorophyll b appears yellow-green, Xanthophylls appear yellow, and Carotenoids appear yellow to yellow-orange.",
	},
	{
		id: 7,
		text: "What is the primary function of accessory pigments (Chlorophyll b, Carotenoids, and Xanthophylls) in photosynthesis?",
		options: [
			"They form the core reaction centre capable of direct photo-oxidation",
			"They absorb light over a wider range of wavelengths and protect chlorophyll a from photo-oxidation",
			"They directly reduce $NADP^+$ to $NADPH$",
			"They catalyze the photolysis of water in the stroma",
		],
		correctOption: 1,
		explanation:
			"Accessory pigments not only enable a wider range of wavelength of incoming light to be utilized for photosynthesis, but they also protect Chlorophyll a from photo-oxidation (solarization) by quenching excessive excitation energy.",
	},
	{
		id: 8,
		text: "The absorption spectrum of chlorophyll a and the action spectrum of photosynthesis show peak efficiency in which regions of the visible spectrum?",
		options: [
			"Green and Yellow regions",
			"Blue and Red regions",
			"Infrared and Ultraviolet regions",
			"Orange and Green regions",
		],
		correctOption: 1,
		explanation:
			"Both the absorption spectrum of Chlorophyll a and the action spectrum of photosynthesis show distinct maximum peaks in the blue (around 430-450 nm) and red (around 660-680 nm) regions of the visible electromagnetic spectrum.",
	},
	{
		id: 9,
		text: "In the Light Harvesting Complex (LHC), the reaction centre is formed by:",
		options: [
			"Hundreds of pigment molecules bound to proteins",
			"A single Chlorophyll a molecule",
			"A dimer of Carotenoids and Xanthophylls",
			"Chlorophyll b coupled to Ferredoxin",
		],
		correctOption: 1,
		explanation:
			"The Light Harvesting Complex (LHC) is made of hundreds of pigment molecules bound to proteins forming antennae. The reaction centre is formed by a single molecule of Chlorophyll a, whose absorption maximum determines the photosystem identity ($P_{680}$ in PS II and $P_{700}$ in PS I).",
	},
	{
		id: 10,
		text: "Photosystem I (PS I) and Photosystem II (PS II) have reaction centre chlorophyll a molecules with absorption maxima at:",
		options: [
			"PS I at 680 nm, PS II at 700 nm",
			"PS I at 700 nm, PS II at 680 nm",
			"PS I at 540 nm, PS II at 660 nm",
			"PS I at 720 nm, PS II at 400 nm",
		],
		correctOption: 1,
		explanation:
			"In PS I, the reaction centre Chlorophyll a has an absorption peak at 700 nm (called $P_{700}$), while in PS II, the reaction centre Chlorophyll a has an absorption maximum at 680 nm (called $P_{680}$).",
	},
	{
		id: 11,
		text: "During non-cyclic photophosphorylation (Z-scheme), what is the correct sequence of electron transfer from PS II to PS I?",
		options: [
			"PS II $\\rightarrow$ Pheophytin $\\rightarrow$ Plastoquinone ($PQ$) $\\rightarrow$ Cytochrome $b_6f$ $\\rightarrow$ Plastocyanin ($PC$) $\\rightarrow$ PS I",
			"PS II $\\rightarrow$ Plastocyanin ($PC$) $\\rightarrow$ Cytochrome $b_6f$ $\\rightarrow$ Plastoquinone ($PQ$) $\\rightarrow$ PS I",
			"PS II $\\rightarrow$ Ferredoxin ($Fd$) $\\rightarrow$ Cytochrome $b_6f$ $\\rightarrow$ Pheophytin $\\rightarrow$ PS I",
			"PS II $\\rightarrow$ Plastoquinone $\\rightarrow$ Ferredoxin-NADP reductase $\\rightarrow$ Plastocyanin $\\rightarrow$ PS I",
		],
		correctOption: 0,
		explanation:
			"Excited electrons from $P_{680}$ in PS II are picked up by the primary electron acceptor (Pheophytin), passed to Plastoquinone ($PQ$), then through the Cytochrome $b_6f$ complex, to Plastocyanin ($PC$), and finally donated to the oxidized $P_{700}^+$ of PS I.",
	},
	{
		id: 12,
		text: "Where is the Oxygen Evolving Complex (water-splitting complex) physically located in the chloroplast?",
		options: [
			"On the outer surface of the thylakoid membrane facing the stroma",
			"On the inner side of the thylakoid membrane facing the lumen",
			"In the stroma matrix freely suspended",
			"In the intermembrane space of the chloroplast envelope",
		],
		correctOption: 1,
		explanation:
			"The water-splitting complex (Oxygen Evolving Complex) is associated with PS II and is physically situated on the inner side of the thylakoid membrane (facing the thylakoid lumen). Hence, $O_2$ and protons ($H^+$) released by water splitting are liberated into the lumen.",
	},
	{
		id: 13,
		text: "Which inorganic mineral ions are essentially required for the photolysis of water in the Oxygen Evolving Complex (OEC)?",
		options: [
			"$Mn^{2+}$, $Cl^-$, and $Ca^{2+}$",
			"$Mg^{2+}$, $Fe^{3+}$, and $Cu^{2+}$",
			"$Zn^{2+}$, $Mo^{6+}$, and $B$",
			"$K^+$, $Na^+$, and $Ni^{2+}$",
		],
		correctOption: 0,
		explanation:
			"Manganese ($Mn^{2+}$), Chlorine ($Cl^-$), and Calcium ($Ca^{2+}$) ions are essential catalytic components of the Oxygen Evolving Complex required for photolysis of water ($2H_2O \\rightarrow 4H^+ + O_2 + 4e^-$).",
	},
	{
		id: 14,
		text: "How many quanta of light (photons) are required to evolve one molecule of oxygen ($O_2$) during the process of photosynthesis?",
		options: ["2 photons", "4 photons", "8 photons", "12 photons"],
		correctOption: 2,
		explanation:
			"The release of one molecule of $O_2$ requires the photolysis of two $H_2O$ molecules ($2H_2O \\rightarrow 4H^+ + O_2 + 4e^-$), transferring 4 electrons. Since each electron requires 2 excitation events (one in PS II and one in PS I), a total of $4 \\times 2 = 8$ photons (quantum requirement = 8) are needed per $O_2$ evolved.",
	},
	{
		id: 15,
		text: "Cyclic photophosphorylation occurs predominantly when:",
		options: [
			"Only light of wavelengths beyond 680 nm is available",
			"Both PS I and PS II are equally active and $CO_2$ is high",
			"Light of wavelength below 680 nm is available exclusively",
			"$NADP^+$ concentration is extremely high in the stroma",
		],
		correctOption: 0,
		explanation:
			"Cyclic photophosphorylation occurs when only light of wavelengths beyond 680 nm (which excites PS I but not PS II) is available, or when there is an imbalance requiring extra ATP synthesis without generating NADPH.",
	},
	{
		id: 16,
		text: "The stroma lamellae membranes lack which of the following essential components of the light reaction?",
		options: [
			"PS I and $CF_0-CF_1$ ATP synthase",
			"PS II and $NADP$ reductase enzyme",
			"Cytochrome $b_6f$ complex and Plastocyanin",
			"Chlorophyll a and Carotenoids",
		],
		correctOption: 1,
		explanation:
			"The stroma lamellae (non-appressed thylakoid membranes) lack both Photosystem II (PS II) and the enzyme NADP reductase. Consequently, they are incapable of non-cyclic electron transport and perform only cyclic photophosphorylation.",
	},
	{
		id: 17,
		text: "What is the net product of cyclic photophosphorylation in chloroplasts?",
		options: [
			"ATP and NADPH",
			"ATP only",
			"NADPH and $O_2$",
			"ATP, NADPH, and $O_2$",
		],
		correctOption: 1,
		explanation:
			"In cyclic photophosphorylation, electrons cycle through PS I via ferredoxin, cytochrome $b_6f$, and plastocyanin back to $P_{700}$. There is no photolysis of water (no $O_2$ produced) and no terminal reduction of $NADP^+$ (no NADPH produced). Only ATP is synthesized.",
	},
	{
		id: 18,
		text: "According to Peter Mitchell's Chemiosmotic Hypothesis, ATP synthesis in chloroplasts is linked to the development of a proton gradient across the:",
		options: [
			"Chloroplast envelope outer membrane",
			"Thylakoid membrane (high $[H^+]$ in lumen vs low $[H^+]$ in stroma)",
			"Mitochondrial inner membrane",
			"Endoplasmic reticulum cisternae",
		],
		correctOption: 1,
		explanation:
			"According to the Chemiosmotic Hypothesis, light-driven electron transport pumps protons into the thylakoid lumen while protons are consumed in the stroma, creating a proton gradient (high $[H^+]$ and low pH in lumen, low $[H^+]$ and high pH in stroma) across the thylakoid membrane.",
	},
	{
		id: 19,
		text: "Which of the following events DOES NOT contribute to the accumulation of protons ($H^+$) inside the thylakoid lumen?",
		options: [
			"Photolysis of water on the inner side of the thylakoid membrane",
			"Transport of protons from the stroma to the lumen via the Plastoquinone ($PQ$) carrier cycle",
			"Removal of protons from the stroma by $NADP^+$ reductase to form $NADPH + H^+$",
			"Passage of protons through the $CF_0$ channel from the lumen into the stroma",
		],
		correctOption: 3,
		explanation:
			"The passage of protons through the $CF_0$ channel from the lumen into the stroma breaks down (dissipates) the proton gradient and drives ATP synthesis by $CF_1$. It does not contribute to building proton accumulation in the lumen.",
	},
	{
		id: 20,
		text: "In the $CF_0-CF_1$ ATP synthase complex of the thylakoid membrane, which part forms the transmembrane proton channel?",
		options: [
			"$CF_1$ catalytic headpiece embedded in the stroma",
			"$CF_0$ hydrophobic transmembrane channel embedded in the membrane",
			"Plastocyanin peripheral docking protein",
			"Oxygen Evolving Complex bridge",
		],
		correctOption: 1,
		explanation:
			"$CF_0$ is embedded in the thylakoid membrane and forms a transmembrane channel that carries out facilitated diffusion of protons across the membrane. $CF_1$ protrudes on the outer surface (stroma side) and catalyzes ATP synthesis from ADP and Pi.",
	},
	{
		id: 21,
		text: "During non-cyclic electron flow, the primary electron acceptor from the excited reaction centre of PS II ($P_{680}^*$) is:",
		options: ["Pheophytin", "Plastocyanin", "Ferredoxin", "Cytochrome $b_6$"],
		correctOption: 0,
		explanation:
			"The immediate primary electron acceptor from the excited reaction centre of PS II ($P_{680}^*$) is Pheophytin (a chlorophyll a molecule lacking the central $Mg^{2+}$ ion). From pheophytin, the electron passes to Plastoquinone.",
	},
	{
		id: 22,
		text: "Plastocyanin is a mobile electron carrier protein located on which side of the thylakoid membrane?",
		options: [
			"Inner surface of the thylakoid membrane (lumen side), containing Copper ($Cu$)",
			"Outer surface of the thylakoid membrane (stroma side), containing Iron ($Fe$)",
			"Hydrophobic core of lipid bilayer, containing Manganese ($Mn$)",
			"Outer chloroplast envelope, containing Zinc ($Zn$)",
		],
		correctOption: 0,
		explanation:
			"Plastocyanin ($PC$) is a water-soluble copper-containing peripheral membrane protein located on the lumenal (inner) surface of the thylakoid membrane. It transfers electrons from the Cytochrome $b_6f$ complex to oxidized $P_{700}^+$ of PS I.",
	},
	{
		id: 23,
		text: "Consider the following statements regarding the Z-scheme of light reactions:\nI. Splitting of water occurs on the stroma side of the thylakoid membrane.\nII. Both ATP and NADPH are synthesized in non-cyclic electron flow.\nIII. Electrons travel from water $\\rightarrow$ PS II $\\rightarrow$ Cytochrome $b_6f$ $\\rightarrow$ PS I $\\rightarrow$ $NADP^+$.\nWhich of the above statements are correct?",
		options: [
			"I and II only",
			"II and III only",
			"I and III only",
			"I, II, and III",
		],
		correctOption: 1,
		explanation:
			"Statement I is incorrect because water splitting occurs on the inner side (lumen side) of the thylakoid membrane. Statements II and III are correct descriptions of non-cyclic electron transport.",
	},
	{
		id: 24,
		text: "The enzyme NADP reductase is located on:",
		options: [
			"The inner thylakoid membrane surface facing the lumen",
			"The outer thylakoid membrane surface facing the stroma",
			"The inner mitochondrial membrane",
			"The stroma-facing outer chloroplast envelope",
		],
		correctOption: 1,
		explanation:
			"The enzyme Ferredoxin-NADP+ reductase (FNR) is situated on the stromal side of the thylakoid membrane. Along with electrons from ferredoxin, it takes protons from the stroma to reduce $NADP^+$ to $NADPH + H^+$.",
	},
	{
		id: 25,
		text: "Assertion (A): Cyclic photophosphorylation does not produce oxygen.\nReason (R): Photosystem II and the photolysis of water are not involved in cyclic electron transport.",
		options: [
			"Both (A) and (R) are true and (R) is the correct explanation of (A)",
			"Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
			"(A) is true but (R) is false",
			"(A) is false but (R) is true",
		],
		correctOption: 0,
		explanation:
			"Cyclic photophosphorylation involves only PS I in the stroma lamellae. Because PS II and the Oxygen Evolving Complex are absent, photolysis of water does not occur, and no $O_2$ is evolved. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
	},
	{
		id: 26,
		text: "How many protons ($H^+$) are translocated through the $CF_0-CF_1$ complex to synthesize one molecule of ATP according to standard biochemical models?",
		options: [
			"$1\\text{ to }2\\text{ }H^+$",
			"$3\\text{ to }4\\text{ }H^+$",
			"$6\\text{ to }8\\text{ }H^+$",
			"$12\\text{ }H^+$",
		],
		correctOption: 1,
		explanation:
			"Standard biophysical models and NCERT indicate that the passage of 3 to 4 protons through the $CF_0$ channel down the electrochemical gradient into the stroma provides the conformational energy required by $CF_1$ to synthesize 1 molecule of ATP from ADP and Pi.",
	},
	{
		id: 27,
		text: "Julius von Sachs provided experimental evidence in 1854 that:",
		options: [
			"Plants produce glucose when they grow, and glucose is usually stored as starch",
			"Oxygen is evolved only in green light",
			"Carbon dioxide is fixed in the stroma by RuBisCO",
			"Chloroplast contains circular double-stranded DNA",
		],
		correctOption: 0,
		explanation:
			"In 1854, Julius von Sachs provided evidence for production of glucose when plants grow. He demonstrated that glucose is usually stored as starch and that the green substance in plants (chlorophyll) is located within special cellular bodies (chloroplasts).",
	},
	{
		id: 28,
		text: "Match Column I (Scientist) with Column II (Experimental Discovery):\n\n| Column I | Column II |\n| :--- | :--- |\n| A. Joseph Priestley | 1. Green substance located in chloroplasts; starch storage |\n| B. Jan Ingenhousz | 2. First action spectrum using green alga *Cladophora* |\n| C. Julius von Sachs | 3. Bell jar experiment showing plants restore air |\n| D. T.W. Engelmann | 4. Release of oxygen bubbles by aquatic plants in light |\n\nChoose the correct matching option:",
		options: [
			"A-3, B-4, C-1, D-2",
			"A-4, B-3, C-2, D-1",
			"A-3, B-1, C-4, D-2",
			"A-2, B-4, C-1, D-3",
		],
		correctOption: 0,
		explanation:
			"Priestley: Bell jar experiments showing restoration of air (A-3). Ingenhousz: Oxygen release in aquatic plant in light (B-4). Sachs: Green substance in chloroplasts & starch storage (C-1). Engelmann: First action spectrum with *Cladophora* (D-2). Correct option is A-3, B-4, C-1, D-2.",
	},
	{
		id: 29,
		text: "Which of the following statements about chlorophyll a is INCORRECT?",
		options: [
			"It has a porphyrin head with magnesium at the centre and a phytol tail",
			"It is the chief photosynthetic pigment directly involved in light energy conversion",
			"It shows maximum light absorption in yellow and green wavelengths",
			"It acts as the reaction centre in both PS I ($P_{700}$) and PS II ($P_{680}$)",
		],
		correctOption: 2,
		explanation:
			"Chlorophyll a reflects green light and shows minimal/negligible absorption in the green-yellow region. It absorbs maximally in the blue (430 nm) and red (660 nm) wavelengths.",
	},
	{
		id: 30,
		text: "What happens when isolated thylakoids suspended in an acidic medium (pH 4) are transferred rapidly to an alkaline medium (pH 8) in the dark containing ADP and inorganic phosphate?",
		options: [
			"No ATP is synthesized because light is mandatory",
			"ATP is synthesized because an artificial proton gradient ($pH_{\\text{lumen}} < pH_{\\text{stroma}}$) is created",
			"Thylakoid membranes lyse immediately",
			"Oxygen gas is evolved in the dark",
		],
		correctOption: 1,
		explanation:
			"In Jagendorf's classic acid-bath experiment, thylakoids equilibrated at pH 4 accumulated protons in the lumen. When shifted to pH 8 buffer with ADP + Pi in the dark, protons moved down the artificial electrochemical gradient through $CF_0-CF_1$, proving that the proton gradient alone drives ATP synthesis without requiring direct light.",
	},
];
