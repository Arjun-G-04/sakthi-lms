import type { Question } from "./part1";

export const photosynthesisQuestionsPart2: Question[] = [
	{
		id: 31,
		text: "Melvin Calvin used radioactive $^{14}C$ in algal photosynthesis studies (*Chlorella* and *Scenedesmus*) to discover that the first stable product of $CO_2$ fixation is:",
		options: [
			"3-Phosphoglyceric acid (3-PGA, 3-carbon)",
			"Oxaloacetic acid (OAA, 4-carbon)",
			"Phosphoenolpyruvate (PEP, 3-carbon)",
			"Ribulose-1,5-bisphosphate (RuBP, 5-carbon)",
		],
		correctOption: 0,
		explanation:
			"Melvin Calvin used $^{14}C$ in algal photosynthetic studies and discovered that the first stable intermediate following $CO_2$ fixation is a 3-carbon organic acid, namely 3-phosphoglyceric acid (3-PGA). Hence, this biosynthetic pathway is named the $C_3$ pathway.",
	},
	{
		id: 32,
		text: "The primary carbon dioxide acceptor in the Calvin cycle ($C_3$ pathway) is:",
		options: [
			"A 3-carbon phosphoglyceraldehyde",
			"A 5-carbon ketose sugar, Ribulose-1,5-bisphosphate (RuBP)",
			"A 4-carbon dicarboxylic acid, Oxaloacetate",
			"A 6-carbon hexose bisphosphate",
		],
		correctOption: 1,
		explanation:
			"The primary $CO_2$ acceptor in the $C_3$ pathway is a 5-carbon ketose sugar known as Ribulose-1,5-bisphosphate (RuBP). It combines with $CO_2$ and water in the presence of RuBisCO to produce two molecules of 3-PGA.",
	},
	{
		id: 33,
		text: "How many turns of the Calvin cycle, and how many molecules of ATP and NADPH respectively, are consumed in the synthesis of ONE molecule of Glucose ($C_6H_{12}O_6$)?",
		options: [
			"3 turns; 9 ATP and 6 NADPH",
			"6 turns; 18 ATP and 12 NADPH",
			"6 turns; 12 ATP and 18 NADPH",
			"1 turn; 3 ATP and 2 NADPH",
		],
		correctOption: 1,
		explanation:
			"To produce 1 molecule of glucose ($6C$), 6 turns of the Calvin cycle are required. Each turn fixes $1\\text{ }CO_2$ and consumes $2\\text{ ATP} + 2\\text{ NADPH}$ in the reduction step and $1\\text{ ATP}$ in the regeneration step ($3\\text{ ATP} + 2\\text{ NADPH}$ per $CO_2$). For 6 turns: $6 \\times 3 = 18\\text{ ATP}$ and $6 \\times 2 = 12\\text{ NADPH}$.",
	},
	{
		id: 34,
		text: "The most crucial enzymatic step of the Calvin cycle, where $CO_2$ is fixed into an organic intermediate, is:",
		options: [
			"Carboxylation catalyzed by RuBisCO",
			"Reduction of 3-PGA to triose phosphate",
			"Regeneration of the $CO_2$ acceptor RuBP",
			"Condensation of DHAP with G3P",
		],
		correctOption: 0,
		explanation:
			"Carboxylation is the most crucial step of the Calvin cycle where $CO_2$ is utilized for the carboxylation of RuBP. This reaction is catalyzed by the enzyme RuBP carboxylase-oxygenase (RuBisCO) and results in the formation of two molecules of 3-PGA.",
	},
	{
		id: 35,
		text: "In the regeneration phase of the Calvin cycle, how many ATP molecules are required for the regeneration of one molecule of RuBP?",
		options: ["1 ATP", "2 ATP", "3 ATP", "6 ATP"],
		correctOption: 0,
		explanation:
			"The regeneration steps of the $C_3$ pathway require one ATP molecule for phosphorylation to regenerate one molecule of the 5-carbon acceptor RuBP from triose phosphate intermediates.",
	},
	{
		id: 36,
		text: "Which of the following statements correctly describes RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase)?",
		options: [
			"It is located in the thylakoid lumen and has exclusive affinity for $O_2$",
			"It is the most abundant enzyme in the world, located in the chloroplast stroma, with active sites that can bind both $CO_2$ and $O_2$",
			"It is found only in $C_4$ plants and is completely absent in $C_3$ plants",
			"It catalyzes the non-cyclic photophosphorylation of ADP to ATP",
		],
		correctOption: 1,
		explanation:
			"RuBisCO is the most abundant protein/enzyme on Earth. Located in the chloroplast stroma, its active site has competitive affinity for both $CO_2$ and $O_2$, although its affinity for $CO_2$ is much greater when the relative ratio of $CO_2$ to $O_2$ is balanced.",
	},
	{
		id: 37,
		text: "Plants adapted to dry tropical regions (such as Maize, Sugarcane, and Sorghum) fix $CO_2$ via the $C_4$ pathway. Their leaves exhibit a characteristic anatomical feature called:",
		options: [
			"Velamen tissue",
			"Kranz anatomy",
			"Hydathode structure",
			"Bulliform cells",
		],
		correctOption: 1,
		explanation:
			"$C_4$ plants exhibit Kranz anatomy ('Kranz' meaning 'wreath/crown'). The vascular bundles are surrounded by prominent layers of bundle sheath cells containing large numbers of chloroplasts, thick walls impervious to gaseous exchange, and no intercellular spaces.",
	},
	{
		id: 38,
		text: "In $C_4$ leaves, which cell type contains the enzyme PEP carboxylase (PEPcase), and which cell type contains RuBisCO?",
		options: [
			"Mesophyll cells contain PEPcase; Bundle sheath cells contain RuBisCO",
			"Mesophyll cells contain RuBisCO; Bundle sheath cells contain PEPcase",
			"Both cell types contain equal amounts of PEPcase and RuBisCO",
			"Epidermal cells contain PEPcase; Mesophyll cells contain RuBisCO",
		],
		correctOption: 0,
		explanation:
			"In $C_4$ plants, mesophyll cells possess PEP carboxylase (PEPcase) and lack RuBisCO, ensuring initial fixation of $CO_2$ into $4C$ acids. Bundle sheath cells are rich in RuBisCO but lack PEPcase, where the Calvin cycle fixes the released $CO_2$.",
	},
	{
		id: 39,
		text: "The primary $CO_2$ acceptor in $C_4$ plants is a 3-carbon molecule called:",
		options: [
			"Phosphoenolpyruvate (PEP)",
			"Ribulose-1,5-bisphosphate (RuBP)",
			"3-Phosphoglycerate (3-PGA)",
			"Oxaloacetic acid (OAA)",
		],
		correctOption: 0,
		explanation:
			"The primary $CO_2$ acceptor in $C_4$ plants is Phosphoenolpyruvate (PEP), a 3-carbon compound present in the cytoplasm of mesophyll cells. It is carboxylated by PEPcase to form the 4-carbon acid Oxaloacetate (OAA).",
	},
	{
		id: 40,
		text: "In the $C_4$ pathway, what happens to the 4-carbon acid (malic acid or aspartic acid) after it is transported into the bundle sheath cells?",
		options: [
			"It is directly phosphorylated to form glucose",
			"It undergoes decarboxylation to release $CO_2$ and a 3-carbon acid (pyruvate)",
			"It is converted into RuBP using 2 ATP molecules",
			"It is oxidized to form glycolate",
		],
		correctOption: 1,
		explanation:
			"In the bundle sheath cells, $4C$ acids (malate or aspartate) are broken down (decarboxylated) to release $CO_2$ and a $3C$ acid (pyruvate). The released $CO_2$ enters the Calvin cycle via RuBisCO, while the $3C$ acid is transported back to the mesophyll.",
	},
	{
		id: 41,
		text: "How many total ATP molecules are required to produce ONE molecule of glucose in $C_4$ plants compared to $C_3$ plants?",
		options: [
			"18 ATP in $C_4$ vs 30 ATP in $C_3$",
			"30 ATP in $C_4$ vs 18 ATP in $C_3$",
			"24 ATP in $C_4$ vs 24 ATP in $C_3$",
			"36 ATP in $C_4$ vs 12 ATP in $C_3$",
		],
		correctOption: 1,
		explanation:
			"In $C_3$ plants, 18 ATP and 12 NADPH are required per glucose. In $C_4$ plants, regenerating PEP from pyruvate requires 2 additional ATP per $CO_2$ fixed ($2 \\times 6 = 12\\text{ extra ATP}$). Thus, $C_4$ plants require $18 + 12 = 30\\text{ ATP}$ (and 12 NADPH) per glucose molecule.",
	},
	{
		id: 42,
		text: "Bundle sheath cells of $C_4$ plants possess chloroplasts that are characteristically:",
		options: [
			"Small, with well-developed grana and no starch grains",
			"Agranal (or poorly developed grana), large in size, with abundant starch grains",
			"Identical in all aspects to mesophyll chloroplasts",
			"Lacking both thylakoids and stroma enzymes",
		],
		correctOption: 1,
		explanation:
			"$C_4$ plants exhibit chloroplast dimorphism: Mesophyll cells have granal chloroplasts with active PS II (for light reactions), while bundle sheath cells have large, agranal chloroplasts that lack PS II (minimizing $O_2$ evolution) and accumulate starch.",
	},
	{
		id: 43,
		text: "Photorespiration is initiated when RuBisCO functions as an oxygenase. Under high $O_2$ and low $CO_2$ conditions, RuBP binds with $O_2$ to form:",
		options: [
			"Two molecules of 3-Phosphoglyceric acid (3-PGA)",
			"One molecule of 3-PGA (3C) and one molecule of 2-Phosphoglycolate (2C)",
			"Two molecules of Phosphoglycolate (2C)",
			"One molecule of Oxaloacetic acid (4C)",
		],
		correctOption: 1,
		explanation:
			"When RuBisCO binds $O_2$, it catalyzes the reaction: $\\text{RuBP (5C)} + O_2 \\xrightarrow{\\text{RuBisCO}} \\text{3-PGA (3C)} + \\text{2-Phosphoglycolate (2C)}$. Phosphoglycolate enters the photorespiratory glycolate pathway.",
	},
	{
		id: 44,
		text: "Which of the following cellular organelles participate in the photorespiratory ($C_2$) cycle in correct sequential order?",
		options: [
			"Chloroplast $\\rightarrow$ Peroxisome $\\rightarrow$ Mitochondria",
			"Chloroplast $\\rightarrow$ Golgi apparatus $\\rightarrow$ Lysosome",
			"Mitochondria $\\rightarrow$ Chloroplast $\\rightarrow$ Peroxisome",
			"Peroxisome $\\rightarrow$ Endoplasmic reticulum $\\rightarrow$ Chloroplast",
		],
		correctOption: 0,
		explanation:
			"Photorespiration involves three organelles in sequence: Chloroplast (glycolate synthesis) $\\rightarrow$ Peroxisome (glycolate oxidized to glyoxylate, then transaminated to glycine) $\\rightarrow$ Mitochondria (two glycine molecules convert to one serine with release of $CO_2$ and $NH_3$).",
	},
	{
		id: 45,
		text: "Photorespiration is regarded as a wasteful process because:",
		options: [
			"It synthesizes excess ATP and NADPH that damage cell membranes",
			"There is neither synthesis of ATP/NADPH nor synthesis of sugars, but rather consumption of ATP and loss of fixed carbon as $CO_2$",
			"It releases poisonous carbon monoxide gas into the stroma",
			"It completely blocks the photolysis of water in PS II",
		],
		correctOption: 1,
		explanation:
			"In the photorespiratory pathway, there is no synthesis of ATP, NADPH, or sugars. Instead, it consumes ATP and results in the release of previously fixed $CO_2$ (losing up to 25% of fixed carbon), reducing photosynthetic productivity.",
	},
	{
		id: 46,
		text: "Why does photorespiration NOT occur in $C_4$ plants?",
		options: [
			"They possess a special mechanism that increases $CO_2$ concentration at the RuBisCO enzyme site in bundle sheath cells",
			"Their RuBisCO enzyme is structurally altered to have zero affinity for oxygen",
			"They do not have chloroplasts in their bundle sheath cells",
			"Their leaves remain sealed and do not exchange any gases with the atmosphere",
		],
		correctOption: 0,
		explanation:
			"$C_4$ plants avoid photorespiration because decarboxylation of $C_4$ acids in bundle sheath cells elevates intracellular $CO_2$ concentration around RuBisCO. This ensures RuBisCO functions exclusively as a carboxylase and suppresses oxygenase activity.",
	},
	{
		id: 47,
		text: "Crassulacean Acid Metabolism (CAM) is an ecological adaptation observed in succulent xerophytes (e.g. *Opuntia*, Pineapple, Kalanchoe). In CAM plants:",
		options: [
			"Stomata open during the day and close at night",
			"Stomata are scotoactive (open at night, close during the day), and $CO_2$ is fixed at night into malic acid stored in vacuoles",
			"RuBisCO fixes $CO_2$ exclusively at night into glucose",
			"Light reactions take place in the absence of sunlight",
		],
		correctOption: 1,
		explanation:
			"CAM plants possess scotoactive stomata that open at night to minimize transpirational water loss. $CO_2$ is taken up at night and fixed by PEPcase into malic acid, stored in large vacuoles. During daytime with closed stomata, malic acid is decarboxylated to supply $CO_2$ to the Calvin cycle.",
	},
	{
		id: 48,
		text: "Blackman's Law of Limiting Factors (1905) states that if a chemical process is affected by more than one factor, its rate will be determined by the factor which is:",
		options: [
			"Present in maximum abundance",
			"Nearest to its minimal value",
			"Independent of external environmental conditions",
			"At its exact chemical equilibrium",
		],
		correctOption: 1,
		explanation:
			"Blackman's Law of Limiting Factors (1905) states: 'If a chemical process is affected by more than one factor, then its rate will be determined by the factor which is nearest to its minimal value: it is the factor which directly affects the process if its quantity is changed.'",
	},
	{
		id: 49,
		text: "Light saturation for photosynthesis typically occurs at what percentage of full sunlight?",
		options: ["10%", "25%", "50%", "100%"],
		correctOption: 0,
		explanation:
			"Except for plants in shade or dense forest canopies, light is rarely a limiting factor in nature because light saturation occurs at about 10 per cent of full sunlight.",
	},
	{
		id: 50,
		text: "What happens when green leaves are exposed to light intensities beyond their light saturation point?",
		options: [
			"Rate of photosynthesis increases linearly without bound",
			"Rate of photosynthesis decreases due to breakdown (photo-oxidation) of chlorophyll molecules and damage to the photosynthetic apparatus",
			"RuBisCO converts directly into PEPcase",
			"Stomata open wider to absorb infrared rays",
		],
		correctOption: 1,
		explanation:
			"At high light intensities beyond saturation point, the rate of photosynthesis does not increase; instead, photo-oxidation (solarization) of chlorophyll molecules and thermal damage to light-harvesting complexes leads to a decrease in photosynthesis.",
	},
	{
		id: 51,
		text: "Carbon dioxide ($CO_2$) is the major limiting factor for photosynthesis in nature. What are the $CO_2$ saturation concentration thresholds for $C_4$ and $C_3$ plants respectively?",
		options: [
			"$C_4$ saturates at ~360 $\\mu\\text{l/L}$ (ppm); $C_3$ saturates at ~450 $\\mu\\text{l/L}$ (ppm)",
			"$C_4$ saturates at ~450 $\\mu\\text{l/L}$ (ppm); $C_3$ saturates at ~360 $\\mu\\text{l/L}$ (ppm)",
			"Both $C_3$ and $C_4$ saturate at ~200 $\\mu\\text{l/L}$ (ppm)",
			"Both $C_3$ and $C_4$ saturate at ~1000 $\\mu\\text{l/L}$ (ppm)",
		],
		correctOption: 0,
		explanation:
			"$C_4$ plants show saturation at lower $CO_2$ levels of about 360 $\\mu\\text{l/L}$ ($360\\text{ ppm}$) due to the efficient $CO_2$-pumping mechanism of PEPcase. $C_3$ plants respond to higher $CO_2$ concentrations and saturation is seen only beyond 450 $\\mu\\text{l/L}$ ($450\\text{ ppm}$).",
	},
	{
		id: 52,
		text: "Greenhouse crops like tomatoes and bell pepper are grown in $CO_2$-enriched atmospheres because:",
		options: [
			"They are $C_3$ plants that show higher photosynthetic rates and higher yields under elevated $CO_2$ ($CO_2$ fertilization effect)",
			"They are $C_4$ plants requiring excess $CO_2$ to keep stomata open",
			"$CO_2$ acts as an organic pesticide against greenhouse aphids",
			"High $CO_2$ lowers the atmospheric temperature inside the greenhouse",
		],
		correctOption: 0,
		explanation:
			"Since $C_3$ plants saturate at higher $CO_2$ levels (~450 ppm) than present ambient atmospheric levels (~400 ppm), raising $CO_2$ in greenhouses induces higher photosynthetic rates and substantial yield increases ($CO_2$ fertilization effect) in crops like tomatoes and bell peppers.",
	},
	{
		id: 53,
		text: "How does temperature affect the dark reactions of photosynthesis compared to the light reactions?",
		options: [
			"Dark reactions are purely physical and unaffected by temperature",
			"Dark reactions, being enzymatic, are much more sensitive to temperature than light reactions",
			"Light reactions are more temperature sensitive because chlorophyll melts at $35^\\circ\\text{C}$",
			"Both reactions show identical, temperature-independent kinetics",
		],
		correctOption: 1,
		explanation:
			"Light reactions are photochemical and relatively insensitive to temperature (though enzymatic electron carriers have mild temperature dependence). In contrast, the dark reactions (biosynthetic phase) are entirely catalyzed by soluble stroma enzymes and are therefore markedly temperature-sensitive.",
	},
	{
		id: 54,
		text: "What is the typical optimum temperature range for photosynthesis in $C_4$ plants compared to $C_3$ plants?",
		options: [
			"$C_4$ plants: $30^\\circ\\text{C}-45^\\circ\\text{C}$; $C_3$ plants: $20^\\circ\\text{C}-25^\\circ\\text{C}$",
			"$C_4$ plants: $10^\\circ\\text{C}-15^\\circ\\text{C}$; $C_3$ plants: $35^\\circ\\text{C}-40^\\circ\\text{C}$",
			"$C_4$ plants: $5^\\circ\\text{C}-10^\\circ\\text{C}$; $C_3$ plants: $10^\\circ\\text{C}-20^\\circ\\text{C}$",
			"Both have identical optimums at $25^\\circ\\text{C}$",
		],
		correctOption: 0,
		explanation:
			"$C_4$ plants are adapted to warm tropical climates and have higher temperature optima ($30^\\circ\\text{C}-45^\\circ\\text{C}$). $C_3$ plants, adapted to temperate zones, have lower temperature optima ($20^\\circ\\text{C}-25^\\circ\\text{C}$).",
	},
	{
		id: 55,
		text: "Water stress negatively affects the rate of photosynthesis primarily through:",
		options: [
			"Stomatal closure reducing $CO_2$ entry, and leaf wilting reducing leaf surface area and metabolic activity",
			"Immediate denaturation of Chlorophyll a molecules in grana",
			"Permanent breakdown of the thylakoid lipid bilayer",
			"Direct chemical conversion of RuBisCO into pepsin",
		],
		correctOption: 0,
		explanation:
			"Even though water is a reactant in light reactions, water stress exerts its major effect indirectly: it causes stomata to close (decreasing $CO_2$ availability) and induces leaf wilting (reducing exposed surface area and cellular metabolic efficiency).",
	},
	{
		id: 56,
		text: "Assertion (A): Photosystem II ($P_{680}$) is capable of extracting electrons from water molecules, but Photosystem I ($P_{700}$) cannot do so directly.\nReason (R): Oxidized $P_{680}^+$ has one of the highest positive redox potentials ($+1.2\\text{ V}$) in biological systems, sufficient to oxidize water ($+0.82\\text{ V}$).",
		options: [
			"Both (A) and (R) are true and (R) is the correct explanation of (A)",
			"Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
			"(A) is true but (R) is false",
			"(A) is false but (R) is true",
		],
		correctOption: 0,
		explanation:
			"Upon photo-excitation and electron ejection, $P_{680}^+$ becomes an exceptionally powerful oxidizing agent with a redox potential around $+1.2\\text{ V}$. This potential is high enough to oxidize $H_2O$ ($E_0' = +0.82\\text{ V}$). PS I's reaction centre ($P_{700}$) lacks sufficient redox potential to directly extract electrons from water.",
	},
	{
		id: 57,
		text: "Match the photosynthetic terms in Column I with their descriptions in Column II:\n\n| Column I | Column II |\n| :--- | :--- |\n| A. Non-cyclic photophosphorylation | 1. Thylakoid lumen has lower pH than stroma |\n| B. Cyclic photophosphorylation | 2. Involves both PS I and PS II; generates ATP, NADPH, and $O_2$ |\n| C. Chemiosmosis | 3. Occurs in stroma lamellae; generates ATP only |\n| D. Kranz anatomy | 4. Dimorphic chloroplasts in bundle sheath and mesophyll |\n\nChoose the correct option:",
		options: [
			"A-2, B-3, C-1, D-4",
			"A-3, B-2, C-4, D-1",
			"A-2, B-1, C-3, D-4",
			"A-4, B-3, C-1, D-2",
		],
		correctOption: 0,
		explanation:
			"Non-cyclic photophosphorylation: PS I + PS II, ATP + NADPH + $O_2$ (A-2). Cyclic photophosphorylation: stroma lamellae, ATP only (B-3). Chemiosmosis: proton accumulation lowering lumen pH (C-1). Kranz anatomy: dimorphic chloroplasts in $C_4$ plants (D-4). Matching is A-2, B-3, C-1, D-4.",
	},
	{
		id: 58,
		text: "Which of the following statements is INCORRECT regarding $C_4$ plants?",
		options: [
			"They possess high photosynthetic efficiency at high light intensities and high temperatures",
			"They lose only about half as much water as a $C_3$ plant for the same amount of $CO_2$ fixed",
			"Their initial $CO_2$ fixation occurs in bundle sheath cells by RuBisCO",
			"They can tolerate saline environments better than $C_3$ plants",
		],
		correctOption: 2,
		explanation:
			"Initial $CO_2$ fixation in $C_4$ plants occurs in the MESOPHYLL cells catalyzed by PEPcase (not bundle sheath cells by RuBisCO). RuBisCO fixes $CO_2$ secondarily in bundle sheath cells. Hence statement 3 is incorrect.",
	},
	{
		id: 59,
		text: "To synthesize 2 molecules of sucrose (each sucrose is a disaccharide of formula $C_{12}H_{22}O_{11}$, containing 12 carbons) via the Calvin cycle in a $C_3$ plant, how many molecules of $CO_2$, ATP, and NADPH are required?",
		options: [
			"24 $CO_2$, 72 ATP, 48 NADPH",
			"12 $CO_2$, 36 ATP, 24 NADPH",
			"24 $CO_2$, 48 ATP, 72 NADPH",
			"6 $CO_2$, 18 ATP, 12 NADPH",
		],
		correctOption: 0,
		explanation:
			"One sucrose molecule has 12 carbon atoms ($12\\text{ }CO_2$). For 2 sucrose molecules, total carbons = $24\\text{ }CO_2$. Since 1 $CO_2$ fixation requires 3 ATP and 2 NADPH in $C_3$ plants: Total ATP = $24 \\times 3 = 72\\text{ ATP}$; Total NADPH = $24 \\times 2 = 48\\text{ NADPH}$.",
	},
	{
		id: 60,
		text: "A graph plotting the rate of photosynthesis against light intensity shows three regions: Region A (linear increase), Region B (transition/curve), and Region C (horizontal plateau). In Region C, what is the factor limiting the rate of photosynthesis?",
		options: [
			"Light intensity",
			"Another factor such as $CO_2$ concentration or temperature",
			"Both light intensity and water supply",
			"Chlorophyll synthesis gene expression",
		],
		correctOption: 1,
		explanation:
			"In Region C (the plateau region), light is saturated and no longer the limiting factor. According to Blackman's Law of Limiting Factors, another parameter such as $CO_2$ concentration, enzyme availability, or temperature becomes the limiting factor determining the photosynthetic rate.",
	},
];
