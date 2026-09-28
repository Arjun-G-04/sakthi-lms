import type { Question } from "#/components/CbtSimulator/types";

export const botanyPart2Questions: Question[] = [
	{
		id: 114,
		text: "If a double-stranded DNA sample contains $18\\%$ cytosine, what is the calculated percentage of adenine in this sample according to Chargaff's rules?",
		options: ["$32\\%$", "$18\\%$", "$36\\%$", "$64\\%$"],
		correctOption: 0,
		explanation:
			"According to Chargaff's rules for double-stranded DNA: $G = C$ and $A = T$, with $A + T + G + C = 100\\%$. Since $C = 18\\%$, $G = 18\\%$, so $G + C = 36\\%$. Therefore, $A + T = 100\\% - 36\\% = 64\\%$. Because $A = T$, the percentage of adenine is $A = 64\\%/2 = 32\\%$.",
	},
	{
		id: 115,
		text: "A typical nucleosome in chromatin contains approximately 200 base pairs of DNA wrapped around an octamer core of basic histone proteins. The histone octamer is composed of two copies each of:",
		options: [
			"H2A, H2B, H3, and H4",
			"H1, H2A, H2B, and H3",
			"H1, H2A, H3, and H4",
			"H1, H2B, H3, and H4",
		],
		correctOption: 0,
		explanation:
			"The core of the nucleosome is an octamer composed of two molecules each of the four core histones: H2A, H2B, H3, and H4. Histone H1 binds to the linker DNA sealing the entry and exit points of the DNA strand.",
	},
	{
		id: 116,
		text: "In Frederick Griffith's (1928) transformation experiments with *Streptococcus pneumoniae*, which combination injected into mice resulted in death from pneumonia and recovery of living virulent bacteria?",
		options: [
			"Heat-killed S strain + Live R strain",
			"Heat-killed S strain + Heat-killed R strain",
			"Heat-killed R strain + Live S strain",
			"Live R strain alone",
		],
		correctOption: 0,
		explanation:
			"Griffith injected a mixture of heat-killed virulent S strain (smooth, encapsulated) and live non-virulent R strain (rough, non-encapsulated) into mice. The mice died of pneumonia, and living virulent S strain bacteria were recovered from their blood, proving that some transforming principle transferred genetic capability from dead S cells into live R cells.",
	},
	{
		id: 117,
		text: "Oswald Avery, Colin MacLeod, and Maclyn McCarty (1944) established that the transforming principle was DNA by demonstrating that transformation of R strain to S strain was abolished only when the extract was pre-treated with:",
		options: [
			"Deoxyribonuclease (DNase)",
			"Ribonuclease (RNase)",
			"Protease",
			"Lipase",
		],
		correctOption: 0,
		explanation:
			"Avery, MacLeod, and McCarty discovered that digestion of heat-killed S-strain extracts with proteases and RNase did not inhibit transformation. However, treatment with DNase completely destroyed transforming activity, demonstrating that DNA is the hereditary substance.",
	},
	{
		id: 118,
		text: "In the Hershey-Chase blender experiment (1952) using T2 bacteriophage and *E. coli*, radioactive $^{32}\\text{P}$ and $^{35}\\text{S}$ were recovered respectively in:",
		options: [
			"Bacterial pellet (inside cells) and Supernatant (viral protein ghosts)",
			"Supernatant and Bacterial pellet",
			"Both in the bacterial pellet",
			"Both in the culture supernatant",
		],
		correctOption: 0,
		explanation:
			"DNA contains phosphorus but no sulfur, so it was labeled with $^{32}\\text{P}$. Proteins contain sulfur (methionine, cysteine) but no phosphorus, so they were labeled with $^{35}\\text{S}$. After infection, blending, and centrifugation, $^{32}\\text{P}$ was found inside the pellet of bacterial cells, while $^{35}\\text{S}$ remained in the supernatant with viral protein coats.",
	},
	{
		id: 119,
		text: "In Meselson and Stahl's experiment proving semiconservative replication, *E. coli* cells grown in $^{15}\\text{NH}_4\\text{Cl}$ were shifted to $^{14}\\text{NH}_4\\text{Cl}$ medium for two generations (40 minutes). What was the proportion of hybrid ($^{15}\\text{N}/^{14}\\text{N}$) to light ($^{14}\\text{N}/^{14}\\text{N}$) DNA molecules observed after 40 minutes?",
		options: ["$1:1$", "$1:3$", "$3:1$", "$0:1$"],
		correctOption: 0,
		explanation:
			"Initially all DNA is heavy ($^{15}\\text{N}/^{15}\\text{N}$). After generation 1 (20 min), all molecules are hybrid ($^{15}\\text{N}/^{14}\\text{N}$). In generation 2 (40 min), each hybrid molecule replicates semiconservatively in $^{14}\\text{N}$ medium, producing equal numbers of hybrid ($^{15}\\text{N}/^{14}\\text{N}$) and light ($^{14}\\text{N}/^{14}\\text{N}$) duplexes ($50\\%$ each), yielding a $1:1$ ratio.",
	},
	{
		id: 120,
		text: "During DNA replication in *E. coli*, which enzyme synthesizes short complementary RNA primers required for the initiation of DNA synthesis by DNA polymerase III?",
		options: ["Primase", "DNA ligase", "Topoisomerase", "Helicase"],
		correctOption: 0,
		explanation:
			"DNA polymerases cannot initiate polynucleotide synthesis *de novo*; they require a free 3'-OH group. RNA primase (an RNA polymerase) synthesizes short RNA primers ($\\sim 10$ nucleotides) complementary to the template strand to provide the 3'-OH primer terminus.",
	},
	{
		id: 121,
		text: "On the lagging template strand during replication, DNA synthesis is discontinuous and produces Okazaki fragments. These fragments are synthesized in the:",
		options: [
			"$5' \\rightarrow 3'$ direction, away from the replication fork",
			"$3' \\rightarrow 5'$ direction, toward the replication fork",
			"$5' \\rightarrow 3'$ direction, toward the replication fork",
			"$3' \\rightarrow 5'$ direction, away from the replication fork",
		],
		correctOption: 0,
		explanation:
			"DNA polymerases can only catalyze polymerization in the $5' \\rightarrow 3'$ direction. On the lagging template strand (which has $5' \\rightarrow 3'$ polarity in the direction of fork movement), synthesis proceeds discontinuously away from the advancing replication fork in the $5' \\rightarrow 3'$ direction.",
	},
	{
		id: 122,
		text: "In prokaryotes, the RNA polymerase holoenzyme requires which subunit factor for specific recognition and binding to the promoter region during initiation of transcription?",
		options: [
			"Sigma ($\\sigma$) factor",
			"Rho ($\\rho$) factor",
			"Alpha ($\\alpha$) subunit",
			"Beta ($\\beta$) subunit",
		],
		correctOption: 0,
		explanation:
			"The core RNA polymerase enzyme ($\\alpha_2\\beta\\beta'\\omega$) is capable of non-specific transcription, but requires the sigma ($\\sigma$) initiation factor to form the holoenzyme and specifically bind to promoter consensus sequences (-10 Pribnow box and -35 sequence). Termination is mediated by rho ($\\rho$) factor.",
	},
	{
		id: 123,
		text: "Match the eukaryotic RNA polymerases in Column I with the respective RNAs they transcribe in Column II:\\nColumn I:\\n(A) RNA Polymerase I\\n(B) RNA Polymerase II\\n(C) RNA Polymerase III\\nColumn II:\\n(1) hnRNA (precursor of mRNA)\\n(2) 28S, 18S, 5.8S rRNAs\\n(3) tRNA, 5S rRNA, snRNAs",
		options: [
			"(A)-(2), (B)-(1), (C)-(3)",
			"(A)-(1), (B)-(2), (C)-(3)",
			"(A)-(3), (B)-(1), (C)-(2)",
			"(A)-(2), (B)-(3), (C)-(1)",
		],
		correctOption: 0,
		explanation:
			"In eukaryotic nucleus: RNA Polymerase I transcribes ribosomal RNAs (28S, 18S, and 5.8S); RNA Polymerase II transcribes heterogeneous nuclear RNA (hnRNA, precursor of mRNA); RNA Polymerase III transcribes tRNA, 5S rRNA, and snRNAs (small nuclear RNAs).",
	},
	{
		id: 124,
		text: "Post-transcriptional modification of eukaryotic primary transcripts (hnRNA) involves:",
		options: [
			"Addition of 7-methylguanosine triphosphate cap at 5'-end and polyadenylate tail at 3'-end, along with splicing of introns",
			"Addition of polyadenylate tail at 5'-end and methylguanosine cap at 3'-end",
			"Removal of exons and joining of introns by spliceosomes",
			"Direct translation without any chemical modification",
		],
		correctOption: 0,
		explanation:
			"Eukaryotic hnRNA undergoes capping (addition of 7-methylguanosine triphosphate to the 5'-end via an unusual 5'-to-5' triphosphate linkage), tailing (polyadenylation of 200-300 adenylate residues at the 3'-end), and splicing (removal of non-coding introns and ligation of coding exons by spliceosomes).",
	},
	{
		id: 125,
		text: "The genetic code is described as 'degenerate' because:",
		options: [
			"Multiple distinct codons can code for the same single amino acid",
			"One codon can code for multiple different amino acids",
			"Codons overlap along the mRNA reading frame",
			"Some codons do not code for any amino acid",
		],
		correctOption: 0,
		explanation:
			"Degeneracy of the genetic code means that 61 codons specify only 20 standard amino acids; consequently, most amino acids (except methionine and tryptophan) are specified by more than one codon (e.g. leucine, serine, and arginine each have 6 synonymous codons).",
	},
	{
		id: 126,
		text: "Which of the following triplets acts as an initiator codon during eukaryotic and prokaryotic translation, and what amino acid does it specify?",
		options: [
			"AUG, specifies Methionine",
			"UAA, specifies Leucine",
			"UGA, specifies Tryptophan",
			"UAG, specifies Formylmethionine",
		],
		correctOption: 0,
		explanation:
			"AUG has dual functions: it acts as the primary initiation start codon and codes for the amino acid methionine (formyl-methionine in prokaryotes). UAA (ochre), UAG (amber), and UGA (opal) are non-sense stop codons that terminate translation.",
	},
	{
		id: 127,
		text: "The secondary cloverleaf model of transfer RNA (tRNA) possesses an amino acid acceptor end that terminates with the conserved sequence:",
		options: [
			"$5'-\\text{CCA}-3'$",
			"$3'-\\text{ACC}-5'$",
			"$5'-\\text{GGC}-3'$",
			"$5'-\\text{UAA}-3'$",
		],
		correctOption: 0,
		explanation:
			"Every functional tRNA molecule terminates at its 3' acceptor stem with the invariant sequence $5'-\\text{CCA}-3'$. The carboxyl group of the cognate amino acid is esterified to the 3'-OH (or 2'-OH) group of the terminal adenosine residue during aminoacylation.",
	},
	{
		id: 128,
		text: "During the elongation phase of bacterial translation, peptide bond formation between adjacent amino acids is catalyzed by the ribozyme peptidyl transferase, which is an integral component of:",
		options: [
			"23S rRNA of the 50S large ribosomal subunit",
			"16S rRNA of the 30S small ribosomal subunit",
			"5S rRNA of the 50S subunit",
			"Initiation factor IF-3",
		],
		correctOption: 0,
		explanation:
			"Peptidyl transferase is a catalytic RNA (ribozyme) comprised of 23S rRNA in the bacterial 50S large ribosomal subunit (and 28S rRNA in eukaryotes). It forms peptide bonds without requiring protein catalytic enzymes.",
	},
	{
		id: 129,
		text: "In the *lac* operon of *Escherichia coli*, the structural genes *z*, *y*, and *a* encode respectively:",
		options: [
			"$\\beta$-galactosidase, permease, and transacetylase",
			"Permease, $\\beta$-galactosidase, and transacetylase",
			"Transacetylase, permease, and $\\beta$-galactosidase",
			"$\\beta$-galactosidase, transacetylase, and repressor",
		],
		correctOption: 0,
		explanation:
			"In the *lac* operon: *lacZ* encodes $\\beta$-galactosidase (hydrolyzes lactose into glucose and galactose); *lacY* encodes permease (increases cell membrane permeability to $\\beta$-galactosides); *lacA* encodes transacetylase (transfers an acetyl group to $\\beta$-galactosides).",
	},
	{
		id: 130,
		text: "The *lac* operon is under negative control. When an inducer (allolactose) is present in the growth medium:",
		options: [
			"It binds to the repressor protein, inactivating it so it cannot bind the operator, thereby permitting RNA polymerase transcription",
			"It binds to RNA polymerase, enhancing promoter clearance",
			"It binds directly to the operator, preventing repressor binding",
			"It hydrolyzes the promoter sequence",
		],
		correctOption: 0,
		explanation:
			"The *lacI* gene produces an active repressor protein that constitutively binds the operator region, blocking RNA polymerase from transcribing the structural genes. When lactose is present, its isomer allolactose acts as inducer, binding to the repressor and inducing an allosteric conformational change that causes it to release the operator, turning on transcription.",
	},
	{
		id: 131,
		text: "In the Human Genome Project (HGP), the two major sequencing strategies employed were ESTs and Sequence Annotation. 'Expressed Sequence Tags' (ESTs) refers to:",
		options: [
			"Identifying all genes that are expressed as functional RNA transcripts",
			"Sequencing the entire genome blindly, including all introns and repetitive DNA",
			"Mapping polymorphic restriction endonuclease cleavage sites",
			"Sequencing only mitochondrial DNA",
		],
		correctOption: 0,
		explanation:
			"The EST approach focused exclusively on identifying and sequencing all parts of the genome that are actively transcribed into RNA (cDNAs). The alternative method, Sequence Annotation, sequenced the whole genome blindly and later assigned functional annotations to coding and non-coding regions.",
	},
	{
		id: 132,
		text: "According to the key findings of the Human Genome Project (HGP), which human chromosome contains the greatest number of genes and which contains the fewest?",
		options: [
			"Chromosome 1 (2968 genes) and Chromosome Y (231 genes)",
			"Chromosome 1 (2000 genes) and Chromosome X (100 genes)",
			"Chromosome X (3000 genes) and Chromosome Y (50 genes)",
			"Chromosome 21 (2500 genes) and Chromosome Y (500 genes)",
		],
		correctOption: 0,
		explanation:
			"The Human Genome Project revealed that the human genome contains approximately $3.1647 \\times 10^9$ nucleotide base pairs. Chromosome 1 has the most genes (2968), and the Y chromosome has the fewest genes (231).",
	},
	{
		id: 133,
		text: "Variable Number of Tandem Repeats (VNTRs) used as hybridization probes in Southern blot DNA fingerprinting belong to a category of satellite DNA termed:",
		options: [
			"Minisatellites",
			"Microsatellites",
			"Transposons",
			"Centromeric repeats",
		],
		correctOption: 0,
		explanation:
			"VNTRs belong to minisatellite DNA. They consist of tandem repeat units ranging from 10 to 100 base pairs that are repeated multiple times in tandem arrays. The high degree of copy-number polymorphism among individuals forms the basis of Alec Jeffreys' DNA fingerprinting technique.",
	},
	{
		id: 134,
		text: "The central dogma of molecular biology was proposed by Francis Crick. In certain retroviruses such as HIV, genetic information flows in the reverse direction via the enzyme:",
		options: [
			"Reverse transcriptase (RNA-dependent DNA polymerase)",
			"DNA-dependent RNA polymerase",
			"RNA replicase",
			"Terminal transferase",
		],
		correctOption: 0,
		explanation:
			"Francis Crick proposed the Central Dogma: $\\text{DNA} \\rightarrow \\text{mRNA} \\rightarrow \\text{Protein}$. Temin and Baltimore discovered reverse transcription (Teminism) in retroviruses, where RNA is copied back into complementary DNA (cDNA) by the enzyme reverse transcriptase (RNA-dependent DNA polymerase).",
	},
	{
		id: 135,
		text: "DNA is chemically more stable and a better genetic material than RNA because:",
		options: [
			"DNA lacks the reactive 2'-OH group on its pentose sugar and contains thymine instead of uracil",
			"DNA has a single-stranded structure resistant to nucleases",
			"RNA has 5-methyluracil conferring extra reactivity",
			"DNA replication is entirely error-free without mutational capacity",
		],
		correctOption: 0,
		explanation:
			"RNA is labile and easily degraded because of the reactive 2'-OH group on ribose, which acts as an internal nucleophile. DNA contains 2'-deoxyribose (lacking 2'-OH) and thymine (5-methyluracil), both of which impart significantly higher chemical and thermodynamic stability.",
	},
];
