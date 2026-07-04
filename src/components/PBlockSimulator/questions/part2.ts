import type { Question } from "./part1";

export const pBlockQuestionsPart2: Question[] = [
	{
		id: 31,
		text: "Silicones are synthetic organosilicon polymers containing repeated $\\text{R}_2\\text{Si-O}$ linkages. Which of the following alkylchlorosilanes is hydrolyzed to produce a linear silicone polymer?",
		options: [
			"Dimethyldichlorosilane, $(\\text{CH}_3)_2\\text{SiCl}_2$",
			"Trimethylchlorosilane, $(\\text{CH}_3)_3\\text{SiCl}$",
			"Methyltrichlorosilane, $\\text{CH}_3\\text{SiCl}_3$",
			"Silicon tetrachloride, $\\text{SiCl}_4$",
		],
		correctOption: 0,
		explanation:
			"Hydrolysis of dimethyldichlorosilane, $(\\text{CH}_3)_2\\text{SiCl}_2$, yields an unstable dihydroxysilane intermediate $(\\text{CH}_3)_2\\text{Si(OH)}_2$, which immediately undergoes intermolecular condensation polymerization by eliminating water molecules to form long linear chain silicone polymers.",
	},
	{
		id: 32,
		text: "What is the specific function of adding trimethylchlorosilane, $(\\text{CH}_3)_3\\text{SiCl}$, during the synthesis of silicone polymers?",
		options: [
			"It acts as a chain-terminating agent to control polymer chain length",
			"It acts as a cross-linking agent to form three-dimensional resins",
			"It catalyzes the initial hydrolysis reaction",
			"It oxidizes linear silicones into silica gel",
		],
		correctOption: 0,
		explanation:
			"Trimethylchlorosilane, $(\\text{CH}_3)_3\\text{SiCl}$, has only one chlorine atom capable of undergoing hydrolysis to form $(\\text{CH}_3)_3\\text{Si-OH}$. When this unit condenses with a growing linear silicone chain, it caps the end of the polymer with an unreactive $-\\text{Si(CH}_3)_3$ group, terminating chain growth.",
	},
	{
		id: 33,
		text: "What is the fundamental building unit of all silicate minerals?",
		options: [
			"The tetrahedral $[\\text{SiO}_4]^{4-}$ anion",
			"The planar triangular $[\\text{SiO}_3]^{2-}$ anion",
			"The octahedral $[\\text{SiO}_6]^{8-}$ anion",
			"The linear $[\\text{Si}_2\\text{O}_5]^{2-}$ anion",
		],
		correctOption: 0,
		explanation:
			"The basic structural unit of all silicate minerals is the orthosilicate tetraanion, $[\\text{SiO}_4]^{4-}$. In this unit, a central silicon atom is bonded tetrahedrally to four oxygen atoms, with each oxygen carrying a negative charge.",
	},
	{
		id: 34,
		text: "In pyrosilicates (such as thortveitite, $\\text{Sc}_2\\text{Si}_2\\text{O}_7$), how many oxygen atoms are shared between two adjacent tetrahedral $[\\text{SiO}_4]^{4-}$ units?",
		options: ["1", "2", "3", "4"],
		correctOption: 0,
		explanation:
			"Pyrosilicates contain the island disilicate anion $[\\text{Si}_2\\text{O}_7]^{6-}$. It is formed when two tetrahedral $[\\text{SiO}_4]^{4-}$ units share exactly 1 bridging oxygen atom at a common vertex.",
	},
	{
		id: 35,
		text: "Which class of silicates is characterized by the sharing of two oxygen atoms per $[\\text{SiO}_4]^{4-}$ tetrahedron, resulting in general formulas like $[\\text{SiO}_3]_n^{2n-}$?",
		options: [
			"Chain silicates and cyclic silicates",
			"Orthosilicates",
			"Sheet (phyllosilicates)",
			"Three-dimensional framework silicates",
		],
		correctOption: 0,
		explanation:
			"When each $[\\text{SiO}_3]^{2-}$ unit shares 2 oxygen atoms with adjacent tetrahedra, it forms either closed ring (cyclic) silicates like beryl, $\\text{Be}_3\\text{Al}_2(\\text{SiO}_3)_6$, or infinite single chain silicates (pyroxenes) having the empirical formula $[\\text{SiO}_3]_n^{2n-}$.",
	},
	{
		id: 36,
		text: "In sheet silicates (phyllosilicates like talc, mica, and clay), how many oxygen atoms per tetrahedron are shared with neighboring tetrahedra?",
		options: ["3", "1", "2", "4"],
		correctOption: 0,
		explanation:
			"In two-dimensional sheet silicates (phyllosilicates), each $[\\text{SiO}_4]^{4-}$ tetrahedron shares exactly 3 of its oxygen atoms with adjacent tetrahedra in a continuous planar network, giving the empirical formula $[\\text{Si}_2\\text{O}_5]_n^{2n-}$.",
	},
	{
		id: 37,
		text: "Quartz, cristobalite, tridymite, and feldspars belong to which structural classification of silicates?",
		options: [
			"Three-dimensional framework silicates (sharing all 4 oxygen atoms)",
			"Sheet silicates (sharing 3 oxygen atoms)",
			"Pyrosilicates (sharing 1 oxygen atom)",
			"Cyclic silicates (sharing 2 oxygen atoms)",
		],
		correctOption: 0,
		explanation:
			"In three-dimensional framework silicates (tectosilicates), every $[\\text{SiO}_4]^{4-}$ tetrahedron shares all 4 of its corner oxygen atoms with neighboring tetrahedra, forming an infinite 3D network. Pure quartz, cristobalite, and tridymite have the formula $(\\text{SiO}_2)_n$, while in feldspars and zeolites some $\\text{Si}^{4+}$ ions are replaced by $\\text{Al}^{3+}$.",
	},
	{
		id: 38,
		text: "Zeolites are microporous crystalline aluminosilicates widely used as catalysts in petrochemical industries. Which zeolite catalyst is specifically utilized to convert alcohols directly into gasoline (petrol)?",
		options: ["ZSM-5", "Zeolite A", "Faujasite", "Mordernite"],
		correctOption: 0,
		explanation:
			"ZSM-5 (Zeolite Socony Mobil-5) is a highly shape-selective zeolite catalyst used extensively in the petroleum industry. It dehydrates methanol and alcohols directly into a high-octane mixture of aromatic and branched hydrocarbons (gasoline/petrol).",
	},
	{
		id: 39,
		text: "Why are sodium or potassium cations present inside the porous three-dimensional framework of zeolites?",
		options: [
			"To balance the negative charge generated when trivalent $\\text{Al}^{3+}$ replaces tetravalent $\\text{Si}^{4+}$ in the lattice",
			"To prevent water molecules from entering the zeolite channels",
			"To oxidize trapped organic reactant hydrocarbons",
			"To increase the density of the crystalline quartz matrix",
		],
		correctOption: 0,
		explanation:
			"When trivalent aluminium ($\\text{Al}^{3+}$) replaces tetravalent silicon ($\\text{Si}^{4+}$) in the neutral $(\\text{SiO}_2)_n$ framework, each substitution creates a net charge of -1 on the aluminosilicate lattice. Positive cations like $\\text{Na}^+$, $\\text{K}^+$, or $\\text{Ca}^{2+}$ are required in the cavities to maintain electrical neutrality.",
	},
	{
		id: 40,
		text: "Which of the following Group 14 compounds is a powerful oxidizing agent due to the inert pair effect making the +2 oxidation state much more stable than +4?",
		options: [
			"Lead(IV) oxide, $\\text{PbO}_2$",
			"Tin(IV) chloride, $\\text{SnCl}_4$",
			"Silicon dioxide, $\\text{SiO}_2$",
			"Germanium(IV) oxide, $\\text{GeO}_2$",
		],
		correctOption: 0,
		explanation:
			"In Group 14, the stability of the +4 oxidation state decreases down the group while the +2 state becomes dominant for Lead due to the inert pair effect ($\\text{Pb}^{2+}$ is much more stable than $\\text{Pb}^{4+}$). Consequently, lead(IV) compounds like $\\text{PbO}_2$ readily gain two electrons to reduce to $\\text{Pb}^{2+}$, acting as strong oxidizing agents.",
	},
	{
		id: 41,
		text: "Tin(II) chloride ($\\text{SnCl}_2$) acts as a strong reducing agent in chemical reactions because:",
		options: [
			"The +4 oxidation state of tin ($\\text{Sn}^{4+}$) is thermodynamically more stable than the +2 state ($\\text{Sn}^{2+}$)",
			"Tin has an extremely high electronegativity that forces it to lose electrons",
			"$\\text{SnCl}_2$ readily releases chlorine gas on exposure to air",
			"Tin is a liquid metal at room temperature that easily gives up valence electrons",
		],
		correctOption: 0,
		explanation:
			"For tin (Sn), unlike lead, the +4 oxidation state is thermodynamically more stable than the +2 oxidation state. Therefore, $\\text{Sn}^{2+}$ ions readily lose two electrons to oxidize into $\\text{Sn}^{4+}$, serving as excellent reducing agents in chemical reactions.",
	},
	{
		id: 42,
		text: "How is pure carbon monoxide ($\\text{CO}$) gas prepared in the laboratory?",
		options: [
			"By the dehydration of formic acid ($\\text{HCOOH}$) with concentrated sulfuric acid at 373 K",
			"By heating calcium carbonate ($\\text{CaCO}_3$) in an open crucible",
			"By passing steam over red-hot coke at 1270 K",
			"By the partial combustion of methane in excess oxygen",
		],
		correctOption: 0,
		explanation:
			"In the laboratory, pure carbon monoxide is prepared by dehydrating formic acid ($\\text{HCOOH}$) using concentrated $\\text{H}_2\\text{SO}_4$ at 373 K: $\\text{HCOOH} \\xrightarrow{\\text{conc. H}_2\\text{SO}_4, 373\\text{ K}} \\text{CO} + \\text{H}_2\\text{O}$.",
	},
	{
		id: 43,
		text: "When steam is passed over red-hot coke at 1270 K, an industrial fuel gas mixture known as Water Gas (or Synthesis Gas / Syngas) is produced. What is the composition of water gas?",
		options: [
			"Equimolar mixture of $\\text{CO}$ and $\\text{H}_2$",
			"Mixture of $\\text{CO}$ and $\\text{N}_2$",
			"Mixture of $\\text{CH}_4$ and $\\text{CO}_2$",
			"Mixture of $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ vapor",
		],
		correctOption: 0,
		explanation:
			"Passing steam over red-hot coke at 1270 K yields water gas (syngas), which is an equimolar mixture of carbon monoxide and hydrogen: $\\text{C(s)} + \\text{H}_2\\text{O(g)} \\xrightarrow{1270\\text{ K}} \\text{CO(g)} + \\text{H}_2\\text{g}$. If air is used instead of steam, producer gas ($\\text{CO} + \\text{N}_2$) is formed.",
	},
	{
		id: 44,
		text: "Silicon carbide ($\\text{SiC}$, carborundum) is an extremely hard synthetic material used as an abrasive. Its crystal structure is most similar to:",
		options: [
			"Diamond",
			"Graphite",
			"Rock salt ($\\text{NaCl}$)",
			"Boron nitride (hexagonal)",
		],
		correctOption: 0,
		explanation:
			"Silicon carbide ($\\text{SiC}$, carborundum) crystallizes in a three-dimensional covalent lattice identical to that of diamond. Each silicon atom is tetrahedrally bonded to four carbon atoms and vice versa, creating a giant covalent network of immense hardness.",
	},
	{
		id: 45,
		text: "Why is glass (which is primarily composed of silicates and $\\text{SiO}_2$) readily corroded and etched by hydrofluoric acid ($\\text{HF}$)?",
		options: [
			"$\\text{SiO}_2$ reacts with $\\text{HF}$ to form the soluble, highly stable hexafluorosilicic acid complex, $\\text{H}_2\\text{SiF}_6$",
			"$\\text{HF}$ is a superacid that protonates the bridging oxygen atoms of silica, boiling away oxygen gas",
			"$\\text{HF}$ oxidizes silicon to metallic silicon and fluorine gas",
			"Glass undergoes rapid thermal shock in contact with aqueous $\\text{HF}$",
		],
		correctOption: 0,
		explanation:
			"Silica ($\\text{SiO}_2$) and silicates in glass react readily with hydrofluoric acid to first form gaseous silicon tetrafluoride ($\\text{SiF}_4$), which dissolves in excess $\\text{HF}$ to produce soluble hexafluorosilicic acid: $\\text{SiO}_2 + 6\\text{HF} \\rightarrow \\text{H}_2\\text{SiF}_6 + 2\\text{H}_2\\text{O}$. Because of this reaction, $\\text{HF}$ cannot be stored in glass bottles.",
	},
	{
		id: 46,
		text: "Which of the following Group 14 elements does NOT exhibit allotropy?",
		options: ["Lead (Pb)", "Carbon (C)", "Silicon (Si)", "Tin (Sn)"],
		correctOption: 0,
		explanation:
			"Carbon exhibits diamond, graphite, and fullerene allotropes; Silicon exists in crystalline and amorphous forms; Tin exhibits grey tin ($\\%\\alpha$, diamond lattice) and white tin ($\\%\\beta$, metallic tetragonal); Lead (Pb) is a typical heavy metal that does NOT show allotropy.",
	},
	{
		id: 47,
		text: "When carbon dioxide ($\\text{CO}_2$) is bubbled through aqueous lime water, the solution initially turns milky, but upon passing excess $\\text{CO}_2$, the milkiness disappears. What causes the disappearance of milkiness?",
		options: [
			"Formation of soluble calcium soluble bicarbonate, $\\text{Ca(HCO}_3)_2$",
			"Formation of insoluble calcium carbonate, $\\text{CaCO}_3$",
			"Formation of calcium oxide and carbonic acid",
			"Formation of calcium hydroxide precipitate",
		],
		correctOption: 0,
		explanation:
			"When $\\text{CO}_2$ is bubbled into lime water ($\\text{Ca(OH)}_2$), white insoluble calcium carbonate ($\\text{CaCO}_3$) precipitates, turning the solution milky. When excess $\\text{CO}_2$ is passed, $\\text{CaCO}_3$ reacts with dissolved carbonic acid to form soluble calcium hydrogen carbonate: $\\text{CaCO}_3 + \\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{Ca(HCO}_3)_2$, clearing the solution.",
	},
	{
		id: 48,
		text: "What happens when lead(IV) oxide ($\\text{PbO}_2$) is reacted with concentrated hydrochloric acid ($\\text{HCl}$) at elevated temperatures?",
		options: [
			"It oxidizes $\\text{HCl}$ to liberate chlorine gas ($\\text{Cl}_2$) while forming lead(II) chloride ($\\text{PbCl}_2$)",
			"It forms a stable lead(IV) chloride ($\\text{PbCl}_4$) solution without gas evolution",
			"It releases hydrogen gas and metallic lead precipitate",
			"It undergoes no reaction because lead oxide is inert to acids",
		],
		correctOption: 0,
		explanation:
			"Because $\\text{Pb}^{4+}$ is a powerful oxidizing agent due to the inert pair effect, $\\text{PbO}_2$ oxidizes concentrated hydrochloric acid to chlorine gas while itself being reduced to the more stable lead(II) chloride: $\\text{PbO}_2 + 4\\text{HCl} \\rightarrow \\text{PbCl}_2 + \\text{Cl}_2 + 2\\text{H}_2\\text{O}$.",
	},
	{
		id: 49,
		text: "Which of the following oxides is amphoteric in nature?",
		options: [
			"Lead(II) oxide ($\\text{PbO}$) and Tin(II) oxide ($\\text{SnO}$)",
			"Carbon monoxide ($\\text{CO}$)",
			"Carbon dioxide ($\\text{CO}_2$)",
			"Silicon dioxide ($\\text{SiO}_2$)",
		],
		correctOption: 0,
		explanation:
			"In Group 14, $\\text{CO}$ is neutral; $\\text{CO}_2$ and $\\text{SiO}_2$ are acidic oxides; whereas the oxides of tin and lead ($\\text{SnO}$, $\\text{SnO}_2$, $\\text{PbO}$, $\\text{PbO}_2$) are amphoteric, reacting with both strong acids and strong alkalies.",
	},
	{
		id: 50,
		text: "Carbon suboxide ($\\text{C}_3\\text{O}_2$) is an unusual foul-smelling gas prepared by dehydrating malonic acid with $\\text{P}_4\\text{O}_{10}$. What is its structure and carbon hybridization?",
		options: [
			"Linear structure ($\\%\\text{O}=\\text{C}=\\text{C}=\\text{C}=\\text{O}$) with all carbon atoms $sp$ hybridized",
			"Bent structure with $sp^2$ hybridized carbons",
			"Cyclic three-membered carbon ring with terminal oxygens",
			"Tetrahedral structure with $sp^3$ hybridized central carbon",
		],
		correctOption: 0,
		explanation:
			"Carbon suboxide ($\\text{C}_3\\text{O}_2$) has a strictly linear structure: $\\%\\text{O}=\\text{C}=\\text{C}=\\text{C}=\\text{O}$. In this molecule, each of the three carbon atoms forms two double bonds (steric number 2), making all three carbons $sp$ hybridized.",
	},
	{
		id: 51,
		text: "Red lead, a vibrant scarlet pigment historically used in rustproof primer paints, has the chemical formula $\\text{Pb}_3\\text{O}_4$. It is structurally a mixed oxide composed of:",
		options: [
			"$2\\text{PbO} \\cdot \\text{PbO}_2$",
			"$\\text{PbO} \\cdot 2\\text{PbO}_2$",
			"$\\text{Pb}_2\\text{O}_3 \\cdot \\text{PbO}$",
			"$3\\text{PbO} \\cdot \\text{O}_2$",
		],
		correctOption: 0,
		explanation:
			"Red lead ($\\%\\text{Pb}_3\\text{O}_4$, minium) is a stoichiometric mixed oxide composed of two parts lead(II) oxide and one part lead(IV) oxide: $2\\text{PbO} \\cdot \\text{PbO}_2$. When treated with nitric acid, the $\\text{PbO}$ dissolves as $\\text{Pb(NO}_3)_2$ while brown $\\text{PbO}_2$ remains insoluble.",
	},
	{
		id: 52,
		text: "Which of the following Group 14 halides is exceptionally unstable and decomposes readily at room temperature into its dihalide and halogen gas?",
		options: [
			"Lead(IV) chloride, $\\text{PbCl}_4$",
			"Carbon tetrachloride, $\\text{CCl}_4$",
			"Silicon tetrachloride, $\\text{SiCl}_4$",
			"Tin(IV) chloride, $\\text{SnCl}_4$",
		],
		correctOption: 0,
		explanation:
			"Because the +4 oxidation state is highly unstable for lead ($\\%\\text{Pb}^{4+}$ is strongly oxidizing and $\\%\\text{Cl}^-$ is a reducing agent), lead(IV) chloride ($\\text{PbCl}_4$) is a yellow oily liquid that rapidly decomposes at room temperature into stable lead(II) chloride and chlorine gas: $\\%\\text{PbCl}_4 \\rightarrow \\text{PbCl}_2 + \\text{Cl}_2$. In fact, $\\%\\text{PbBr}_4$ and $\\%\\text{PbI}_4$ do not even exist.",
	},
	{
		id: 53,
		text: "What is the primary chemical reason that silicones are water-repellent (hydrophobic), thermally stable, and resistant to chemical oxidation?",
		options: [
			"They possess an exceptionally strong inorganic $\\%\\text{Si-O-Si}$ backbone surrounded by non-polar organic alkyl/aryl groups",
			"They are composed entirely of aliphatic fluorocarbons",
			"They contain ionic sodium atoms that repel water molecules",
			"They form metallic bonds across silicon atoms",
		],
		correctOption: 0,
		explanation:
			"Silicones combine the high thermal and oxidative stability of an inorganic quartz-like $\\%\\text{Si-O-Si}$ siloxane backbone (high bond energy of 460 kJ/mol) with the flexibility and hydrophobic (water-repelling) nature of surrounding organic methyl or phenyl groups oriented outward.",
	},
	{
		id: 54,
		text: "Which of the following elements is purified to semiconductor-grade ultra-high purity (> 99.99999%) using the Zone Refining process?",
		options: [
			"Silicon (Si) and Germanium (Ge)",
			"Carbon (C)",
			"Lead (Pb)",
			"Boron (B)",
		],
		correctOption: 0,
		explanation:
			"Zone refining (fractional melting) is widely used to produce ultra-high purity semiconductors like Silicon and Germanium. The principle is that impurities are more soluble in the molten state of metal than in the solid state, causing them to sweep to the end of the ingot with the moving molten zone.",
	},
	{
		id: 55,
		text: "When silicon is heated with methyl chloride ($\\%\\text{CH}_3\\text{Cl}$) at 573 K in the presence of copper powder as a catalyst, the primary organosilicon monomer formed is:",
		options: [
			"Dimethyldichlorosilane, $(\\text{CH}_3)_2\\text{SiCl}_2$",
			"Tetramethylsilane, $(\\text{CH}_3)_4\\text{Si}$",
			"Methylchlorosilane, $\\text{CH}_3\\text{SiH}_2\\text{Cl}$",
			"Hexamethyldisiloxane, $(\\text{CH}_3)_3\\text{Si-O-Si}(\\text{CH}_3)_3$",
		],
		correctOption: 0,
		explanation:
			"The direct Rochow-Müller process passes methyl chloride vapor over heated silicon powder mixed with a copper catalyst at 573 K. The primary product is dimethyldichlorosilane, $(\\text{CH}_3)_2\\text{SiCl}_2$, along with smaller amounts of $\\%\\text{CH}_3\\text{SiCl}_3$ and $(\\text{CH}_3)_3\\text{SiCl}$.",
	},
	{
		id: 56,
		text: "White lead is a basic lead carbonate historically prized for its brilliant opacity in artists' oil paints. What is its chemical formula?",
		options: [
			"$2\\text{PbCO}_3 \\cdot \\text{Pb(OH)}_2$",
			"$\\text{PbCO}_3$",
			"$\\text{PbSO}_4 \\cdot \\text{PbO}$",
			"$\\text{Pb(CH}_3\\text{COO})_2 \\cdot 2\\text{H}_2\\text{O}$",
		],
		correctOption: 0,
		explanation:
			"White lead is basic lead carbonate, formulated as $2\\text{PbCO}_3 \\cdot \\text{Pb(OH)}_2$. It provided exceptional covering power and elasticity in oil paintings, though its use is now banned or restricted due to chronic lead toxicity.",
	},
	{
		id: 57,
		text: "Which of the following Group 14 tetrahalides does NOT exist due to steric hindrance and reducing power of the anion?",
		options: [
			"$\\text{PbI}_4$ and $\\text{PbBr}_4$",
			"$\\text{SiF}_4$",
			"$\\text{GeCl}_4$",
			"$\\text{SnBr}_4$",
		],
		correctOption: 0,
		explanation:
			"Lead(IV) iodide ($\\%\\text{PbI}_4$) and lead(IV) bromide ($\\%\\text{PbBr}_4$) do not exist. This is because $\\%\\text{Pb}^{4+}$ is a very strong oxidizing agent and iodide/bromide ions are strong reducing agents; any attempt to form them results in immediate redox decomposition to $\\%\\text{PbI}_2 + \\text{I}_2$ or $\\%\\text{PbBr}_2 + \\text{Br}_2$. Additionally, large iodide ions cannot sterically fit around a small $\\%\\text{Pb}^{4+}$ ion.",
	},
	{
		id: 58,
		text: "In the structure of graphite, the distance between adjacent carbon atoms within the same hexagonal layer (141.5 pm) is much shorter than the distance between successive parallel layers (340 pm). Why?",
		options: [
			"Within the layer, carbons are linked by strong covalent $\\%\\sigma$ and partial $\\%\\pi$ double bonds, whereas successive layers are held together by weak van der Waals forces",
			"Layers are separated by repulsive electrostatic forces between positively charged carbon nuclei",
			"Interlayer spaces are filled with covalent hydrogen atoms that push layers apart",
			"The C-C bonds within the layer are ionic, whereas interlayer forces are magnetic",
		],
		correctOption: 0,
		explanation:
			"Within a graphite layer, each carbon is $sp^2$ hybridized with a bond length of 141.5 pm (shorter than the normal single C-C bond of 154 pm due to partial double bond character from delocalized $\\%\\pi$-electrons). Between adjacent parallel layers, there are no covalent bonds; they are held together loosely by weak van der Waals forces at a large distance of 340 pm, allowing layers to slide over one another.",
	},
	{
		id: 59,
		text: "Which of the following properties of Group 14 elements shows a continuous decrease from Carbon down to Lead?",
		options: [
			"First ionization enthalpy and electronegativity",
			"Metallic character and atomic radius",
			"Density and atomic mass",
			"Tendency to form +2 oxidation state ionic compounds",
		],
		correctOption: 0,
		explanation:
			"As we move down Group 14 from C to Pb, atomic size increases, which causes the first ionization enthalpy to steadily decrease (except a small anomaly at Pb due to lanthanide contraction). Electronegativity also drops sharply from C (2.5) to Si/Ge/Sn/Pb (~1.8–1.9). Conversely, metallic character, density, atomic radius, and +2 oxidation state stability increase down the group.",
	},
	{
		id: 60,
		text: "Silicosis is an occupational lung disease caused by the chronic inhalation of fine dust containing:",
		options: [
			"Free crystalline silica ($\\text{SiO}_2$)",
			"Silicon carbide abrasive powder",
			"Lead carbonate pigment particles",
			"Carbon monoxide gas",
		],
		correctOption: 0,
		explanation:
			"Silicosis is a severe occupational lung disease caused by inhaling fine particles of crystalline silica ($\\text{SiO}_2$, quartz or cristobalite) over long periods in mining, quarrying, pottery, and sandblasting. The silica particles get trapped in alveoli and stimulate scarring and fibrosis of lung tissue.",
	},
];
