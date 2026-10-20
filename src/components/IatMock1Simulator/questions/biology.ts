import type { Question } from "#/components/CbtSimulator/types";

export const iatBiologyQuestions: Question[] = [
	{
		id: 46,
		text: "The exine layer of a mature angiosperm pollen grain is composed of sporopollenin, one of the most chemically resistant biological polymers known. Which of the following statements about sporopollenin is correct?",
		options: [
			"It is synthesized primarily by the nutritive tapetum layer and resists high temperatures, strong acids, and alkalis, with no known enzyme capable of degrading it",
			"It is secreted by the vegetative cell cytoplasm and is easily degraded by pectinases during fertilization",
			"It is synthesized by the middle layers of the anther and dissolves in water to form the pollen tube",
			"It forms a continuous, uninterrupted coat around the pollen without any apertures",
		],
		correctOption: 0,
		explanation:
			"Sporopollenin is a highly cross-linked oxidative polymer of carotenoids and fatty acids synthesized by the tapetum of the microsporangium wall. It resists enzymatic degradation, extreme temperatures, and strong chemical acids or alkalis, allowing pollen grains to be preserved as fossils for millions of years. It is absent at specific localized regions called germ pores, where the pollen tube emerges.",
	},
	{
		id: 47,
		text: "In the majority of flowering plants, female gametophyte (embryo sac) development follows the monosporic Polygonum type. Which structural feature of the embryo sac is directly responsible for guiding the pollen tube into one of the synergids during double fertilization?",
		options: [
			"Secondary diploid nucleus of the central cell",
			"Antipodal cells at the chalazal pole",
			"Filiform apparatus of the synergids",
			"Obturator tissue of the funicle",
		],
		correctOption: 2,
		explanation:
			"The synergids possess special cellular thickenings at their micropylar tip known as the filiform apparatus. This finger-like ultrastructure produces chemotropic and mechanical signals that guide the pollen tube tip through the micropyle directly into the cytoplasm of one of the receptive synergids, which then degenerates to discharge the two male gametes.",
	},
	{
		id: 48,
		text: "In angiosperms, double fertilization is a unique reproductive feature. Which of the following pairs correctly identifies the two fusion events and the respective ploidy levels of the resulting products?",
		options: [
			"Syngamy producing a triploid ($3n$) endosperm, and triple fusion producing a diploid ($2n$) embryo",
			"Parthenogenesis producing a haploid ($n$) zygote, and apomixis producing a diploid ($2n$) endosperm",
			"Syngamy producing a diploid ($2n$) zygote, and karyogamy producing a tetraploid ($4n$) endosperm",
			"Syngamy producing a diploid ($2n$) zygote, and triple fusion producing a triploid ($3n$) primary endosperm nucleus (PEN)",
		],
		correctOption: 3,
		explanation:
			"Double fertilization involves two simultaneous syngamic events: (1) One haploid male gamete ($n$) fuses with the haploid egg cell ($n$) to produce a diploid ($2n$) zygote (syngamy / generative fertilization); (2) The second haploid male gamete ($n$) fuses with the central cell containing two haploid polar nuclei ($n + n$) to produce a triploid ($3n$) primary endosperm nucleus (triple fusion / vegetative fertilization).",
	},
	{
		id: 49,
		text: "In human males, the endocrine regulation of spermatogenesis involves the hypothalamic-pituitary-gonadal axis. Which of the following correctly pairs the pituitary gonadotropin with its target cell in the testis and the primary biochemical product?",
		options: [
			"FSH targets Leydig cells to produce testosterone; LH targets Sertoli cells to produce inhibin",
			"LH targets spermatogonia directly to induce meiotic division; FSH targets Leydig cells to secrete androgens",
			"Luteinizing Hormone (LH) targets Leydig cells to stimulate testosterone synthesis; Follicle Stimulating Hormone (FSH) targets Sertoli cells to stimulate androgen-binding protein (ABP) and inhibin",
			"GnRH targets Sertoli cells to produce estrogen; LH targets prostate to secrete seminal fluid",
		],
		correctOption: 2,
		explanation:
			"Gonadotropin-Releasing Hormone (GnRH) from the hypothalamus stimulates the anterior pituitary to secrete LH and FSH. LH acts on interstitial Leydig cells, stimulating the synthesis and secretion of androgens (principally testosterone). FSH acts on supporting Sertoli cells (sustentacular cells) to stimulate factors required for spermiogenesis, including Androgen-Binding Protein (ABP, which concentrates testosterone in seminiferous tubules) and inhibin (which exerts negative feedback on FSH secretion).",
	},
	{
		id: 50,
		text: "In the human female, primary oocytes are formed during embryonic development and undergo meiotic arrest. At which specific stage of meiosis are these oocytes arrested until puberty?",
		options: [
			"Metaphase II",
			"Diplotene stage of Prophase I",
			"Pachytene stage of Prophase I",
			"Anaphase I",
		],
		correctOption: 1,
		explanation:
			"Oogenesis begins in the female fetus: oogonia enter meiosis I and become arrested in the diplotene stage of prophase I (often termed dictyotene). They remain dormant in this arrested state within primordial follicles until puberty. Each menstrual cycle, an LH surge triggers the resumption of meiosis I in a mature Graafian follicle, completing meiosis I to form a secondary oocyte, which is then arrested at metaphase II until fertilization by a sperm occurs.",
	},
	{
		id: 51,
		text: "During early human embryonic cleavage divisions from the zygote to the blastocyst stage, which of the following cellular and morphological characteristics is observed?",
		options: [
			"Total embryonic mass and volume increase exponentially due to extensive cell growth phases between divisions",
			"The blastomeres undergo asymmetric meiosis, producing genetically diverse haploid daughter cells",
			"The zona pellucida dissolves immediately upon completion of the first cleavage division at the 2-cell stage",
			"Cleavage divisions are rapid mitotic divisions without intermediate growth phases, so individual blastomeres decrease in size while the total embryonic volume remains constant",
		],
		correctOption: 3,
		explanation:
			"Cleavage divisions are characterized by rapid, synchronized mitotic cycles that skip $G_1$ and $G_2$ cell-growth phases of interphase. Consequently, as the cell number doubles ($2, 4, 8, 16$ cells in the morula), individual blastomeres become progressively smaller, while the total overall mass and diameter of the embryo remain constant inside the enclosing zona pellucida until hatching of the blastocyst.",
	},
	{
		id: 52,
		text: "Intrauterine Devices (IUDs) are widely used contraceptives in India. Which of the following options correctly matches the specific IUD category with its primary physiological mechanism of action?",
		options: [
			"Copper-releasing IUDs (e.g., Cu-T, Multiload 375) release $\\text{Cu}^{2+}$ ions that suppress sperm motility and fertilizing capacity",
			"Hormone-releasing IUDs (e.g., LNG-20) completely inhibit the release of FSH and LH from the pituitary gland",
			"Non-medicated IUDs (e.g., Lippes loop) prevent implantation by neutralizing semen $\\text{pH}$ to acidic levels",
			"Copper-releasing IUDs induce ovulation of defective, unfertilizable ova into the fallopian tubes",
		],
		correctOption: 0,
		explanation:
			"Copper-releasing IUDs (such as $\\text{Cu-T}$, $\\text{Cu-7}$, Multiload 375) release free $\\text{Cu}^{2+}$ ions into the uterine cavity, which increases phagocytosis of sperms and strongly impairs sperm motility and fertilizing ability. Hormone-releasing IUDs (Progestasert, LNG-20) make the endometrium hostile to implantation and thicken cervical mucus to retard sperm entry.",
	},
	{
		id: 53,
		text: "Human ABO blood groups are determined by the $I$ gene with three alleles: $I^A$, $I^B$, and $i$. A man with blood group A whose mother had blood group O marries a woman with blood group B whose father had blood group O. The expected phenotypic ratio of blood groups among their children is:",
		options: [
			"$1\\text{ (Group AB)} : 1\\text{ (Group A)} : 1\\text{ (Group B)} : 1\\text{ (Group O)}$",
			"$1\\text{ (Group AB)} : 1\\text{ (Group O)}$",
			"$3\\text{ (Group AB)} : 1\\text{ (Group O)}$",
			"$9\\text{ (Group AB)} : 3\\text{ (Group A)} : 3\\text{ (Group B)} : 1\\text{ (Group O)}$",
		],
		correctOption: 0,
		explanation:
			"The man has blood group A, and because his mother had blood group O ($ii$), he must be heterozygous: $I^A i$. The woman has blood group B, and because her father had blood group O ($ii$), she is heterozygous: $I^B i$. Cross: $I^A i \\times I^B i$. Punnett square yields: $I^A I^B$ (Group AB, $25\\%$), $I^A i$ (Group A, $25\\%$), $I^B i$ (Group B, $25\\%$), and $ii$ (Group O, $25\\%$). The ratio is $1 : 1 : 1 : 1$.",
	},
	{
		id: 54,
		text: "In Drosophila, the recombination frequency between gene $A$ and gene $B$ is $9\\%$, between gene $B$ and gene $C$ is $4\\%$, and between gene $A$ and gene $C$ is $5\\%$. According to Alfred Sturtevant's chromosome mapping principle, the linear order of these three linked genes on the chromosome is:",
		options: ["$A - B - C$", "$C - A - B$", "$B - A - C$", "$A - C - B$"],
		correctOption: 3,
		explanation:
			"Recombination frequency is directly proportional to map distance (where $1\\%$ recombination $= 1\\text{ centimorgan (cM)}$ or map unit). Distance $A-B = 9\\text{ cM}$, distance $A-C = 5\\text{ cM}$, and distance $B-C = 4\\text{ cM}$. Since $A-C + C-B = 5 + 4 = 9\\text{ cM} = A-B$, gene $C$ lies intermediate between genes $A$ and $B$. Therefore, the linear sequence on the chromosome is $A - C - B$ (or $B - C - A$).",
	},
	{
		id: 55,
		text: "Hemophilia is a classic X-linked recessive genetic disorder in humans. A woman whose father had hemophilia and whose mother had no family history of hemophilia marries a phenotypically normal man. What is the probability that their first son will be affected by hemophilia?",
		options: ["$25\\%$", "$50\\%$", "$100\\%$", "$0\\%$"],
		correctOption: 1,
		explanation:
			"The woman's father had hemophilia ($X^h Y$), so he must have transmitted his $X^h$ chromosome to her. Since her mother was homozygous normal ($X^H X^H$), the woman is an obligate carrier ($X^H X^h$). She marries a normal man ($X^H Y$). For a son, the father always contributes the $Y$ chromosome; the son's phenotype depends solely on the maternal $X$ chromosome. The mother has a $50\\%$ chance ($1/2$) of passing $X^H$ (normal son) and a $50\\%$ chance ($1/2$) of passing $X^h$ (hemophilic son). Thus, the probability that a son is affected is $50\\%$.",
	},
	{
		id: 56,
		text: "In eukaryotic chromatin organization, the basic repeating structural unit is the nucleosome. Which of the following correctly describes the biochemical composition and architecture of a nucleosome core particle?",
		options: [
			"A histone octamer containing two copies each of $\\text{H}_1, \\text{H}_2\\text{A}, \\text{H}_3, \\text{H}_4$, wrapped by $500\\text{ bp}$ of DNA",
			"A protein core consisting solely of non-histone chromosomal proteins (NHC) bound to single-stranded RNA",
			"A histone octamer containing two copies each of $\\text{H}_2\\text{A}, \\text{H}_2\\text{B}, \\text{H}_3, \\text{H}_4$, wrapped by approximately $1.65$ turns ($\\sim 146\\text{ bp}$) of negatively charged DNA",
			"A tetramer of $\\text{H}_1$ histones holding together three concentric loops of double-stranded DNA",
		],
		correctOption: 2,
		explanation:
			"The nucleosome core particle consists of an octamer of basic, positively charged histone proteins: two molecules each of $\\text{H}_2\\text{A}$, $\\text{H}_2\\text{B}$, $\\text{H}_3$, and $\\text{H}_4$ (rich in basic amino acid residues lysine and arginine). Double-stranded DNA (which is acidic and negatively charged due to phosphate groups) wraps around this octamer core for approximately $1.65$ superhelical turns ($\\sim 146\\text{ bp}$). Histone $\\text{H}_1$ binds the linker DNA externally to seal the nucleosome structure.",
	},
	{
		id: 57,
		text: "In the landmark 1952 Hershey-Chase blender experiment that conclusively proved DNA is the genetic material, bacteriophage T2 was cultured in media containing radioactive isotopes $^{32}\\text{P}$ and $^{35}\\text{S}$. Which experimental outcome demonstrated that DNA, rather than protein, enters the bacterial cell?",
		options: [
			"Radioactive $^{35}\\text{S}$ was detected inside the bacterial pellet, while $^{32}\\text{P}$ remained in the supernatant",
			"Both $^{32}\\text{P}$ and $^{35}\\text{S}$ entered the bacterial cell pellet in equal stoichiometric amounts",
			"Neither isotope was detected inside the bacterial cell pellet",
			"Radioactive $^{32}\\text{P}$ was detected inside the bacterial cell pellet, while $^{35}\\text{S}$ remained in the supernatant with viral ghost coats",
		],
		correctOption: 3,
		explanation:
			"DNA contains phosphorus but no sulfur, so it was specifically labelled with $^{32}\\text{P}$. Viral proteins contain sulfur (in methionine and cysteine) but no phosphorus, so they were labelled with $^{35}\\text{S}$. After allowing bacteriophages to infect \\textit{E. coli} and agitating in a blender followed by centrifugation, the heavier bacterial cells settled as a pellet while lighter viral coats stayed in the supernatant. Radioactive $^{32}\\text{P}$ was recovered exclusively from the pellet, proving that viral DNA entered the host cells.",
	},
	{
		id: 58,
		text: "In eukaryotic transcription, the primary transcript (pre-mRNA) synthesized by RNA Polymerase II must undergo post-transcriptional modifications before translation. Which sequence of modifications accurately converts pre-mRNA into mature, translatable mRNA?",
		options: [
			"Addition of 7-methylguanosine cap at the 5'-end, splicing of non-coding introns by the spliceosome, and addition of a poly-A tail (200-300 adenylates) at the 3'-end",
			"Cleavage of 5'-exons, insertion of introns, and attachment of a poly-U tail at the 3'-end",
			"Attachment of a poly-A tail at the 5'-end and a 7-methylguanosine cap at the 3'-end without splicing",
			"Excision of promoter regions and circularization of the RNA strand by RNA ligase",
		],
		correctOption: 0,
		explanation:
			"Eukaryotic pre-mRNA processing consists of three coordinated post-transcriptional modifications: (1) Capping: an unusual nucleotide, 7-methylguanosine triphosphate, is enzymatically added to the $5'$-end of the transcript; (2) Splicing: intervening non-coding introns are excised and expressed coding exons are spliced together in a specific order by the spliceosome complex (snRNPs); (3) Tailing: polyadenylation adds a tail of 200–300 adenylate residues to the $3'$-end in a template-independent manner.",
	},
	{
		id: 59,
		text: "In the regulation of the \\textit{E. coli lac} operon, which of the following events occurs when lactose is added to the growth medium in the absence of glucose?",
		options: [
			"Lactose binds directly to the promoter region, blocking RNA polymerase from initiating transcription",
			"The repressor protein binds tightly to the operator, terminating transcription of structural genes",
			"Allolactose binds to the \\textit{lac} repressor protein, altering its conformation so it cannot bind the operator, enabling RNA polymerase to transcribe \\textit{lacZ}, \\textit{lacY}, and \\textit{lacA}",
			"cAMP levels drop to zero, repressing the binding of catabolite activator protein (CAP) to the promoter",
		],
		correctOption: 2,
		explanation:
			"Lactose is converted by basal $\\beta$-galactosidase into allolactose, which serves as the physiological inducer. Allolactose binds allosterically to the active repressor protein (synthesized constitutively by the \\textit{i} gene), causing a conformational change that prevents the repressor from binding the operator ($O$) gene. With the operator clear and high cAMP-CAP enhancing promoter binding in the absence of glucose, RNA polymerase transcribes the polycistronic mRNA encoding $\\beta$-galactosidase (\\textit{Z}), permease (\\textit{Y}), and transacetylase (\\textit{A}).",
	},
	{
		id: 60,
		text: "In a stable, randomly mating population in Hardy-Weinberg equilibrium, the frequency of individuals affected by an autosomal recessive disorder ($aa$) is $9\\%$. The percentage of the population that are heterozygous carriers ($Aa$) of the recessive allele is:",
		options: ["$21\\%$", "$42\\%$", "$49\\%$", "$18\\%$"],
		correctOption: 1,
		explanation:
			"According to the Hardy-Weinberg principle: $p^2 + 2pq + q^2 = 1$ and $p + q = 1$, where $q$ is the frequency of the recessive allele $a$ and $p$ is the frequency of the dominant allele $A$. Given the frequency of the homozygous recessive phenotype $q^2 = 0.09 \\implies q = \\sqrt{0.09} = 0.30$. The dominant allele frequency is $p = 1 - q = 1 - 0.30 = 0.70$. The frequency of heterozygous carriers ($Aa$) is $2pq = 2 \\times 0.70 \\times 0.30 = 0.42 = 42\\%$.",
	},
];
