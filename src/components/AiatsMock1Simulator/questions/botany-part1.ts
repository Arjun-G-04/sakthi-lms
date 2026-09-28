import type { Question } from "#/components/CbtSimulator/types";

export const botanyPart1Questions: Question[] = [
	{
		id: 91,
		text: "In a dihybrid test cross involving two independently assorting genes ($AaBb \\times aabb$), the expected phenotypic ratio of the offspring is:",
		options: ["$9:3:3:1$", "$1:1:1:1$", "$3:1$", "$1:2:1$"],
		correctOption: 1,
		explanation:
			"A dihybrid test cross between a heterozygous parent ($AaBb$) and a homozygous recessive tester ($aabb$) produces four types of gametes ($AB, Ab, aB, ab$) from the heterozygote in equal frequencies ($1:1:1:1$), and only one type of gamete ($ab$) from the tester. Consequently, the resulting four phenotypes ($AaBb, Aabb, aaBb, aabb$) appear in a $1:1:1:1$ ratio.",
	},
	{
		id: 92,
		text: "When a true-breeding red-flowered Snapdragon (*Antirrhinum majus*) is crossed with a true-breeding white-flowered plant, all $F_1$ progeny are pink. When the $F_1$ plants are self-pollinated, the phenotypic and genotypic ratios in the $F_2$ generation are:",
		options: [
			"Phenotypic $3:1$, Genotypic $1:2:1$",
			"Phenotypic $1:2:1$, Genotypic $1:2:1$",
			"Phenotypic $9:3:3:1$, Genotypic $1:2:1$",
			"Phenotypic $1:1$, Genotypic $1:1$",
		],
		correctOption: 1,
		explanation:
			"Flower colour in *Antirrhinum majus* exhibits incomplete dominance. The cross $RR$ (Red) $\\times$ $rr$ (White) yields $Rr$ (Pink) in $F_1$. Selfing $Rr \\times Rr$ gives $1 RR$ (Red) : $2 Rr$ (Pink) : $1 rr$ (White). Both the genotypic and phenotypic ratios are identical: $1:2:1$.",
	},
	{
		id: 93,
		text: "A man with blood group A marries a woman with blood group B. Their first child has blood group O. What are the chances that their next child will have blood group AB?",
		options: ["$0\\%$", "$25\\%$", "$50\\%$", "$75\\%$"],
		correctOption: 1,
		explanation:
			"Since the child has blood group O (genotype $i i$), each parent must contribute a recessive allele $i$. Therefore, the father's genotype is $I^A i$ and the mother's genotype is $I^B i$. Crossing $I^A i \\times I^B i$ yields genotypes: $I^A I^B$ (AB), $I^A i$ (A), $I^B i$ (B), and $i i$ (O) in equal probability ($1/4$ each). Thus, probability of blood group AB is $25\\%$.",
	},
	{
		id: 94,
		text: "Starch grain size in pea seeds demonstrates incomplete dominance, while seed shape demonstrates complete dominance governed by the same gene locus ($B$). A seed with genotype $Bb$ will have:",
		options: [
			"Round seeds with large starch grains",
			"Round seeds with intermediate-sized starch grains",
			"Wrinkled seeds with small starch grains",
			"Wrinkled seeds with large starch grains",
		],
		correctOption: 1,
		explanation:
			"For seed shape, allele $B$ is completely dominant over $b$, so heterozygous $Bb$ seeds are round. For starch grain size, allele $B$ exhibits incomplete dominance: $BB$ produces large starch grains, $bb$ produces small starch grains, and $Bb$ produces intermediate-sized starch grains.",
	},
	{
		id: 95,
		text: "In his classic mapping experiments with *Drosophila melanogaster*, T.H. Morgan observed that the proportion of parental phenotypes was much higher than recombinant types for certain linked genes. The recombination frequency between gene *y* (yellow body) and *w* (white eye) was:",
		options: ["$1.3\\%$", "$37.2\\%$", "$9.8\\%$", "$50.0\\%$"],
		correctOption: 0,
		explanation:
			"Morgan found that the genes for yellow body ($y$) and white eye ($w$) were tightly linked on the X chromosome with only $1.3\\%$ recombination. In contrast, white eye ($w$) and miniature wing ($m$) showed $37.2\\%$ recombination because they are located farther apart on the chromosome.",
	},
	{
		id: 96,
		text: "Who among the following scientists first utilized recombination frequencies between gene pairs on the same chromosome to construct genetic linkage maps?",
		options: [
			"Gregor Johann Mendel",
			"Alfred Sturtevant",
			"Walter Sutton",
			"Thomas Hunt Morgan",
		],
		correctOption: 1,
		explanation:
			"Alfred Sturtevant, a student of T.H. Morgan, used the frequency of recombination between gene pairs on the same chromosome as a measure of the physical distance between them and constructed the first genetic map.",
	},
	{
		id: 97,
		text: "How many linkage groups are present in *Pisum sativum* (garden pea) and *Drosophila melanogaster* respectively?",
		options: ["$7$ and $4$", "$14$ and $8$", "$7$ and $8$", "$14$ and $4$"],
		correctOption: 0,
		explanation:
			"The number of linkage groups in an organism corresponds to its haploid chromosomal number ($n$). For garden pea (*Pisum sativum*), $2n = 14 \\implies n = 7$ linkage groups. For fruit fly (*Drosophila melanogaster*), $2n = 8 \\implies n = 4$ linkage groups.",
	},
	{
		id: 98,
		text: "Sex determination in honeybees is haplodiploid. In this system:",
		options: [
			"Males (drones) develop parthenogenetically from unfertilized eggs and are haploid ($n = 16$)",
			"Females (queens and workers) are haploid while males are diploid",
			"Males produce sperms by meiotic division",
			"Males have fathers and can have sons",
		],
		correctOption: 0,
		explanation:
			"In honeybees, females (queens and workers) are diploid ($2n = 32$) developing from fertilized eggs. Males (drones) develop by unfertilized parthenogenesis and are haploid ($n = 16$). Drones produce sperm by mitosis (not meiosis). Drones have no father and cannot have sons, but they have grandfathers and can have grandsons.",
	},
	{
		id: 99,
		text: "A normal-visioned woman whose father was colour-blind marries a man with normal vision. What is the probability that their first son will be colour-blind?",
		options: ["$0\\%$", "$25\\%$", "$50\\%$", "$100\\%$"],
		correctOption: 2,
		explanation:
			"Colour blindness is an X-linked recessive trait ($X^c$). The woman's father was colour-blind ($X^c Y$), so she must have inherited his mutant allele and is a carrier ($X^C X^c$). Her husband has normal vision ($X^C Y$). A son inherits the Y chromosome from father and either $X^C$ or $X^c$ from mother with equal probability ($1/2$). Therefore, the probability that a son is colour-blind is $50\\%$.",
	},
	{
		id: 100,
		text: "Sickle-cell anemia is caused by a point mutation in the gene encoding the $\\beta$-globin chain of hemoglobin. This mutation results in the substitution of:",
		options: [
			"Glutamic acid by Valine at position 6 of $\\beta$-globin chain",
			"Valine by Glutamic acid at position 6 of $\\beta$-globin chain",
			"Glutamic acid by Valine at position 6 of $\\alpha$-globin chain",
			"Glycine by Alanine at position 6 of $\\beta$-globin chain",
		],
		correctOption: 0,
		explanation:
			"Sickle cell anemia is caused by a single base substitution (transversion) in the $\\beta$-globin gene from GAG to GUG at the 6th codon of mRNA, resulting in the substitution of polar glutamic acid (Glu) by non-polar valine (Val) at the 6th position of the $\\beta$-globin polypeptide chain.",
	},
	{
		id: 101,
		text: "Assertion (A): Phenylketonuria is a classical inborn error of metabolism demonstrating pleiotropy.\\nReason (R): Mutation in a single gene encoding phenylalanine hydroxylase results in multiple phenotypic manifestations including mental retardation, reduction in hair, and skin pigmentation.",
		options: [
			"Both (A) and (R) are true and (R) is the correct explanation of (A)",
			"Both (A) and (R) are true but (R) is not the correct explanation of (A)",
			"(A) is true but (R) is false",
			"(A) is false but (R) is true",
		],
		correctOption: 0,
		explanation:
			"Pleiotropy refers to a single gene influencing multiple unrelated phenotypic traits. In phenylketonuria, mutation in the PAH gene on chromosome 12 impairs conversion of phenylalanine to tyrosine, leading to accumulation of phenylalanine and phenylpyruvic acid, causing mental retardation, decreased melanin (hypopigmentation of hair and skin), and eczema.",
	},
	{
		id: 102,
		text: "A person affected with Klinefelter's syndrome typically possesses which of the following karyotypes and physical characteristics?",
		options: [
			"$47, XXY$; overall masculine development with gynecomastia and sterile gonads",
			"$45, XO$; sterile female with webbed neck and rudimentary ovaries",
			"$47, XYY$; abnormally tall fertile male",
			"$47, XXX$; sterile female with mental retardation",
		],
		correctOption: 0,
		explanation:
			"Klinefelter's syndrome is caused by the presence of an additional X chromosome in males, yielding karyotype $47, XXY$. Affected individuals have masculine body development, but display feminine features such as development of breasts (gynecomastia) and are sterile with azoospermia.",
	},
	{
		id: 103,
		text: "Turner's syndrome in humans is an example of aneuploidy resulting from monosomy of sex chromosomes. Its karyotype is:",
		options: [
			"$45$ with $XO$",
			"$47$ with $XXY$",
			"$47$ with trisomy $21$",
			"$44$ with $YO$",
		],
		correctOption: 0,
		explanation:
			"Turner's syndrome is caused by the absence of one of the X chromosomes in females, resulting in a monosomic karyotype of $45, XO$ (44 autosomes + X). Females are sterile with rudimentary ovaries, lack of secondary sexual characteristics, and short stature.",
	},
	{
		id: 104,
		text: "In a plant, height is controlled by three additive polygenic pairs ($A, B, C$). The minimum height of homozygous recessive plant ($aabbcc$) is $10\\text{ cm}$ and the maximum height of homozygous dominant plant ($AABBCC$) is $34\\text{ cm}$. What is the expected height of a plant with genotype $AaBbCc$?",
		options: [
			"$22\\text{ cm}$",
			"$24\\text{ cm}$",
			"$18\\text{ cm}$",
			"$20\\text{ cm}$",
		],
		correctOption: 0,
		explanation:
			"Total contribution of 6 dominant alleles $= 34 - 10 = 24\\text{ cm}$. Contribution of each dominant allele $= 24/6 = 4\\text{ cm}$. The plant $AaBbCc$ has exactly 3 dominant alleles ($A, B, C$). Expected height $= 10\\text{ cm} + (3 \\times 4\\text{ cm}) = 10 + 12 = 22\\text{ cm}$.",
	},
	{
		id: 105,
		text: "In the human pedigree below representing an autosomal recessive disorder, two unaffected carrier parents ($Aa \\times Aa$) have a child. What is the probability that an unaffected offspring born to these parents is a carrier of the disorder?",
		options: ["$1/2$", "$2/3$", "$1/4$", "$3/4$"],
		correctOption: 1,
		explanation:
			"Among the offspring of $Aa \\times Aa$, genotypic distribution is $1 AA : 2 Aa : 1 aa$. Since the individual is known to be unaffected (excluding $aa$), the sample space is restricted to $1 AA + 2 Aa = 3$ possibilities. Among these, the probability of being a carrier ($Aa$) is $2/3$ ($66.7\\%$).",
	},
	{
		id: 106,
		text: "Which of the following statements regarding Down's syndrome is incorrect?",
		options: [
			"It is caused by the presence of an additional copy of chromosome 21 (trisomy 21)",
			"It was first described by Langdon Down in 1866",
			"The affected individual has a broad flat face, furrowed tongue, and partially open mouth",
			"Affected individuals possess normal intellectual development and fully fertile gonads",
		],
		correctOption: 3,
		explanation:
			"Individuals with Down's syndrome typically suffer from physical, psychomotor, and mental retardation, short stature with a small round head, and are usually infertile.",
	},
	{
		id: 107,
		text: "Female heterogamety (where females produce two distinct types of gametes) is found in:",
		options: [
			"Birds (ZZ male, ZW female)",
			"Humans",
			"Drosophila",
			"Grasshopper",
		],
		correctOption: 0,
		explanation:
			"In birds, females possess two different sex chromosomes ($ZW$) and produce two types of eggs ($Z$ and $W$), demonstrating female heterogamety. Males are homogametic ($ZZ$). In humans and Drosophila, males are heterogametic ($XY$). In grasshoppers, males are $XO$.",
	},
	{
		id: 108,
		text: "Thalassemia differs from sickle-cell anemia in that:",
		options: [
			"Thalassemia is a quantitative disorder of synthesizing too few globin molecules, while sickle-cell anemia is a qualitative disorder of synthesizing an aberrant globin polypeptide",
			"Thalassemia is an X-linked recessive disorder while sickle-cell anemia is autosomal",
			"Thalassemia is a qualitative disorder while sickle-cell anemia is quantitative",
			"Thalassemia affects only $\\alpha$-chain while sickle-cell affects only $\\beta$-chain",
		],
		correctOption: 0,
		explanation:
			"Thalassemia is a quantitative problem where reduced synthesis of one of the globin chains ($\\alpha$ or $\\beta$) leads to abnormal hemoglobin formation. Sickle-cell anemia is a qualitative problem where a mutant globin chain with an abnormal amino acid sequence is synthesized.",
	},
	{
		id: 109,
		text: "How many types of genetically distinct gametes can be produced by an organism with the genotype $AaBbCcDd$ if genes $A$ and $B$ are completely linked on the same chromosome with no crossing over, while $C$ and $D$ assort independently?",
		options: ["$8$", "$16$", "$4$", "$32$"],
		correctOption: 0,
		explanation:
			"Because genes $A$ and $B$ are completely linked, the pair $(AB)$ acts as a single segregating unit with 2 gametic choices (assuming $AB$ on one homologue, $ab$ on the other: $AB$ or $ab$). Heterozygotes $Cc$ and $Dd$ each independently produce 2 choices. Total gamete combinations $= 2 \\times 2 \\times 2 = 2^3 = 8$.",
	},
	{
		id: 110,
		text: "Which of the following physical mutagenic agents causes formation of thymine-thymine dimers in DNA?",
		options: [
			"Ultraviolet (UV) radiation",
			"Gamma rays",
			"X-rays",
			"5-Bromouracil",
		],
		correctOption: 0,
		explanation:
			"UV radiation is non-ionizing radiation absorbed maximally by nucleic acid bases at $260\\text{ nm}$, inducing photochemical cross-linking of adjacent pyrimidines on the same strand to form cyclobutane pyrimidine dimers (primarily thymine dimers).",
	},
	{
		id: 111,
		text: "Statement I: Sutton and Boveri argued that the pairing and separation of a pair of chromosomes would lead to the segregation of a pair of factors they carried.\\nStatement II: Chromosomes as well as genes occur in pairs in diploid organisms, and homologous chromosomes segregate at meiotic anaphase I.",
		options: [
			"Both Statement I and Statement II are correct and Statement II explains Statement I",
			"Both Statement I and Statement II are correct but Statement II does not explain Statement I",
			"Statement I is correct but Statement II is incorrect",
			"Statement I is incorrect but Statement II is correct",
		],
		correctOption: 0,
		explanation:
			"Walter Sutton and Theodore Boveri united the knowledge of chromosomal segregation during meiosis with Mendelian principles, establishing the Chromosomal Theory of Inheritance. Both chromosomes and genes occur in pairs, and homologous chromosomes separate during Anaphase I.",
	},
	{
		id: 112,
		text: "A true-breeding garden pea plant with terminal flowers ($aa$) is crossed with a plant heterozygous for axial flowers ($Aa$). What percentage of progeny will have axial flowers?",
		options: ["$50\\%$", "$100\\%$", "$25\\%$", "$75\\%$"],
		correctOption: 0,
		explanation:
			"This is a monohybrid test cross: $Aa \\times aa$. Progeny genotypes are $1/2 Aa$ (axial flowers) and $1/2 aa$ (terminal flowers). Thus, $50\\%$ of progeny will have axial flowers.",
	},
	{
		id: 113,
		text: "In Drosophila, the sex is determined by the ratio of X chromosomes to sets of autosomes (Genic Balance Theory of Bridges). An individual with karyotype $2A + XXY$ develops as a:",
		options: ["Normal fertile female", "Intersex", "Metamale", "Sterile male"],
		correctOption: 0,
		explanation:
			"In *Drosophila*, sex depends on the $X:A$ ratio: $X/A = 1.0$ produces female, and $X/A = 0.5$ produces male. The $Y$ chromosome contains fertility factors but does not determine maleness. Here $X/A = 2/2 = 1.0$, so the fly develops as a female.",
	},
];
