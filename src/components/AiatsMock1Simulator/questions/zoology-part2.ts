import type { Question } from "#/components/CbtSimulator/types";

export const zoologyPart2Questions: Question[] = [
	{
		id: 158,
		text: "According to astronomical and geological estimations, the universe originated approximately 20 billion years ago (bya) via the Big Bang. The Earth and life on Earth originated approximately:",
		options: [
			"$4.5\\text{ bya}$ and $4.0\\text{ bya}$ respectively",
			"$4.5\\text{ bya}$ and $2.0\\text{ bya}$ respectively",
			"$5.0\\text{ bya}$ and $1.0\\text{ bya}$ respectively",
			"$3.0\\text{ bya}$ and $500\\text{ mya}$ respectively",
		],
		correctOption: 0,
		explanation:
			"Earth is estimated to have formed about $4.5$ billion years ago in the solar system. There was no atmosphere on early Earth. Life appeared approximately 500 million years after the formation of Earth, i.e., almost $4$ billion years ago.",
	},
	{
		id: 159,
		text: "Louis Pasteur conclusively disproved the spontaneous generation theory (abiogenesis) of life by demonstrating that:",
		options: [
			"Life did not arise from heat-killed yeast in a swan-neck flask whose entry of airborne microorganisms was physically blocked",
			"Microorganisms emerged spontaneously in unheated organic broth",
			"Electric discharge produced purines and pyrimidines",
			"Maggots emerged on rotting meat kept in sterile open containers",
		],
		correctOption: 0,
		explanation:
			"Louis Pasteur used pre-sterilized swan-neck flasks containing nutrient broth. In flasks with unbroken curved necks, no organisms appeared because airborne dust particles were trapped in the bend. In flasks broken open to air, living organisms developed from pre-existing airborne microbes, proving *omne vivum ex vivo*.",
	},
	{
		id: 160,
		text: "In S.L. Miller's classic 1953 chemical evolution experiment simulating the prebiotic atmosphere of primitive Earth, an electric discharge was passed at $800^\\circ\\text{C}$ through a gaseous mixture consisting of:",
		options: [
			"$\\text{CH}_4, \\text{H}_2, \\text{NH}_3$, and water vapour",
			"$\\text{CO}_2, \\text{O}_2, \\text{NH}_3$, and water vapour",
			"$\\text{CH}_4, \\text{O}_2, \\text{N}_2$, and water vapour",
			"$\\text{CO}, \\text{H}_2, \\text{N}_2$, and water vapour",
		],
		correctOption: 0,
		explanation:
			"Stanley Miller created electric discharge in a closed flask containing methane ($\\text{CH}_4$), ammonia ($\\text{NH}_3$), hydrogen ($\\text{H}_2$), and water vapour at $800^\\circ\\text{C}$ in a reducing atmosphere lacking free oxygen. He observed the synthesis of several amino acids, including glycine, alanine, and aspartic acid.",
	},
	{
		id: 161,
		text: "The thorn of *Bougainvillea* and the tendril of *Cucurbita* are classic biological examples of:",
		options: [
			"Homologous organs arising from divergent evolution",
			"Analogous organs arising from convergent evolution",
			"Vestigial organs without functional importance",
			"Atavistic structures",
		],
		correctOption: 0,
		explanation:
			"Both thorns of *Bougainvillea* and tendrils of *Cucurbita* are modified axillary buds that share identical fundamental anatomical structure and embryonic origin, but have diverged to perform different functions (defense vs climbing). This exemplifies homology resulting from divergent evolution.",
	},
	{
		id: 162,
		text: "Which of the following pairs represents analogous structures resulting from convergent evolution?",
		options: [
			"Eye of the octopus and eye of a mammal",
			"Forelimbs of whales and forelimbs of bats",
			"Heart of fish and heart of amphibians",
			"Forelimbs of cheetah and arms of humans",
		],
		correctOption: 0,
		explanation:
			"The eye of an octopus and the eye of a mammal have different embryonic origins and structural designs (retina in octopus is direct; in vertebrates it is inverted), but perform the identical function of vision. They are analogous structures developed through convergent evolution.",
	},
	{
		id: 163,
		text: "Industrial melanism observed in the peppered moth (*Biston betularia*) in England after the Industrial Revolution illustrates natural selection because:",
		options: [
			"Melanic (dark) moths possessed higher survival on soot-blackened tree trunks as predatory birds could not easily spot them",
			"Industrial pollution induced directed somatic mutations that converted white moths into black moths",
			"White moths transformed into black moths through inheritance of acquired industrial soot",
			"Dark moths laid significantly more eggs than white moths in unpolluted forests",
		],
		correctOption: 0,
		explanation:
			"Before industrialization, white-winged moths were camouflaged against light-coloured lichens on tree trunks. Industrial smoke killed lichens and blackened bark with soot, giving dark melanic moths a cryptic camouflage advantage against predatory birds. Consequently, natural selection favoured dark moths in polluted industrial regions.",
	},
	{
		id: 164,
		text: "Adaptive radiation refers to:",
		options: [
			"Evolution of different species starting from a common point and radiating to distinct geographical or ecological niches",
			"Migration of species from mainland to oceanic islands",
			"Independent development of similar adaptations in unrelated evolutionary lineages",
			"Rapid development of resistance against industrial pesticides",
		],
		correctOption: 0,
		explanation:
			"Adaptive radiation is the evolutionary process whereby an ancestral species diversifies into multiple diverse descendant species, each adapted to exploit different ecological niches. Examples include Darwin's finches on the Galapagos Islands and Australian marsupials.",
	},
	{
		id: 165,
		text: "Which of the following Australian marsupials corresponds evolutionarily to the placental wolf through convergent parallel evolution?",
		options: [
			"Tasmanian wolf (Thylacine)",
			"Tasmanian tiger cat",
			"Wombat",
			"Banded anteater (Numbat)",
		],
		correctOption: 0,
		explanation:
			"Placental mammals and Australian marsupials underwent parallel adaptive radiations in geographically isolated continents. The placental wolf is the ecological and morphological analogue of the Australian marsupial Tasmanian wolf (*Thylacinus cynocephalus*).",
	},
	{
		id: 166,
		text: "According to Hugo de Vries' Mutation Theory, the primary driving force of speciation is:",
		options: [
			"Mutations that are single-step, large, random, and directionless (saltation)",
			"Minor, gradual, continuous variations in a definite direction",
			"Inheritance of acquired characters caused by use and disuse",
			"Selective survival of individuals with smallest phenotypic deviations",
		],
		correctOption: 0,
		explanation:
			"Based on his work on the evening primrose (*Oenothera lamarckiana*), Hugo de Vries proposed that evolution occurs via sudden, discontinuous, large, and directionless genetic changes called mutations. He termed single-step large mutations leading to speciation as 'saltation'.",
	},
	{
		id: 167,
		text: "In a stable randomly mating diploid population in genetic equilibrium, the frequencies of alleles $A$ and $a$ are $p$ and $q$ respectively. If the frequency of homozygous dominant individuals ($AA$) is $0.49$, what is the calculated frequency of heterozygous individuals ($Aa$)?",
		options: ["$0.42$", "$0.21$", "$0.09$", "$0.70$"],
		correctOption: 0,
		explanation:
			"According to the Hardy-Weinberg equation $p^2 + 2pq + q^2 = 1$. Given $p^2 = 0.49 \\implies p = \\sqrt{0.49} = 0.7$. Since $p + q = 1 \\implies q = 1 - 0.7 = 0.3$. Frequency of heterozygotes $2pq = 2 \\times 0.7 \\times 0.3 = 0.42$.",
	},
	{
		id: 168,
		text: "When natural selection favours both phenotypic extremes while eliminating intermediate phenotypes, the resulting bell-shaped curve splits into two distinct peaks. This mode of selection is termed:",
		options: [
			"Disruptive selection",
			"Stabilizing selection",
			"Directional selection",
			"Balancing selection",
		],
		correctOption: 0,
		explanation:
			"In disruptive selection, individuals at both extremes of the phenotypic spectrum are favoured over intermediate phenotypes. This splits a single unimodal distribution into a bimodal distribution with two distinct peaks, often leading to polymorphism and speciation.",
	},
	{
		id: 169,
		text: "Genetic drift operates most significantly and causes profound changes in allele frequencies in:",
		options: [
			"Small, isolated populations",
			"Very large, panmictic populations",
			"Slowly reproducing non-motile species",
			"Populations undergoing intense artificial hybridization",
		],
		correctOption: 0,
		explanation:
			"Genetic drift (the Sewall Wright effect) refers to random fluctuations in allele frequencies from one generation to the next due to sampling error. Its magnitude is inversely proportional to population size; it produces drastic evolutionary changes and fixation/loss of alleles in small populations.",
	},
	{
		id: 170,
		text: "When a small subpopulation migrates and colonizes a new geographical habitat, the resulting founder population exhibits markedly different allele frequencies compared to the original parental gene pool. This evolutionary phenomenon is called:",
		options: [
			"Founder effect",
			"Bottleneck effect",
			"Industrial melanism",
			"Heterosis",
		],
		correctOption: 0,
		explanation:
			"When a few individuals colonize a new isolated area, their gene pool may not represent the parental population's allele frequencies purely by chance. As this founding colony expands, its descendants carry the altered frequencies, demonstrating the Founder effect.",
	},
	{
		id: 171,
		text: "The Coelacanth (*Latimeria*), caught in South Africa in 1938, was a living specimen of lobe-finned fish that provided evolutionary evidence because:",
		options: [
			"Lobe-finned fishes were direct ancestors of the first terrestrial amphibians",
			"It was the first reptile to lay shelled cleidoic eggs",
			"It is the living ancestor of modern placental mammals",
			"It was the direct progenitor of modern birds",
		],
		correctOption: 0,
		explanation:
			"The Coelacanth is a lobe-finned fish thought to be extinct. Lobe-finned fishes possessed stout, fleshy fins with bony internal skeletons that enabled them to move on land, representing the evolutionary transitional link from aquatic fishes to the first terrestrial amphibians.",
	},
	{
		id: 172,
		text: "Dinosaurs suddenly disappeared from the face of the Earth approximately:",
		options: [
			"65 million years ago (mya)",
			"200 million years ago (mya)",
			"350 million years ago (mya)",
			"15 million years ago (mya)",
		],
		correctOption: 0,
		explanation:
			"About 65 million years ago, at the Cretaceous-Paleogene boundary, the dinosaurs abruptly vanished from Earth. Possible scientific explanations include extraterrestrial asteroid impact and dramatic climatic shifts.",
	},
	{
		id: 173,
		text: "Which of the following hominid ancestors lived approximately 15 million years ago, walked erect, and was distinctly more ape-like compared to *Ramapithecus*?",
		options: [
			"*Dryopithecus*",
			"*Australopithecus*",
			"*Homo habilis*",
			"*Homo erectus*",
		],
		correctOption: 0,
		explanation:
			"About 15 mya, primates called *Dryopithecus* and *Ramapithecus* existed. They were hairy and walked like gorillas and chimpanzees. *Ramapithecus* was more man-like in dental morphology, while *Dryopithecus* was distinctly more ape-like.",
	},
	{
		id: 174,
		text: "Fossils of *Australopithecines* were discovered in East African grasslands. They lived about 2 mya and:",
		options: [
			"Hunted with stone weapons and predominantly ate fruits, with brain capacity $\\approx 500\\text{ cc}$",
			"Were strict carnivores with brain capacity $1400\\text{ cc}$",
			"Buried their dead and made elaborate cave art",
			"Discovered fire and cultivated crops",
		],
		correctOption: 0,
		explanation:
			"*Australopithecines* lived in East African grasslands about 2 mya. Evidence shows they hunted with primitive stone tools but primarily ate fruit. Their cranial capacity was approximately $450 - 500\\text{ cc}$, and they walked upright.",
	},
	{
		id: 175,
		text: "The first human-like hominid species known as the 'tool maker' was *Homo habilis*. Its cranial capacity was in the range of:",
		options: [
			"$650 - 800\\text{ cc}$",
			"$900\\text{ cc}$",
			"$1400\\text{ cc}$",
			"$400 - 500\\text{ cc}$",
		],
		correctOption: 0,
		explanation:
			"*Homo habilis* was the first human-like hominid ancestor. Its brain capacity was between $650$ and $800\\text{ cc}$. They probably did not eat meat.",
	},
	{
		id: 176,
		text: "Fossils discovered in Java in 1891 revealed the next evolutionary stage, *Homo erectus*, which lived about 1.5 mya. *Homo erectus* had a brain capacity of approximately:",
		options: [
			"$900\\text{ cc}$",
			"$650\\text{ cc}$",
			"$1400\\text{ cc}$",
			"$1650\\text{ cc}$",
		],
		correctOption: 0,
		explanation:
			"*Homo erectus* fossils (Java man) date to around 1.5 million years ago. *Homo erectus* had a cranial capacity of approximately $900\\text{ cc}$ and ate meat.",
	},
	{
		id: 177,
		text: "Neanderthal man (*Homo neanderthalensis*) lived near East and Central Asia between 100,000 and 40,000 years ago. Key characteristics of Neanderthal man included:",
		options: [
			"Brain capacity of $1400\\text{ cc}$, used animal hides to protect bodies, and buried their dead",
			"Brain capacity of $900\\text{ cc}$ and strict herbivory",
			"Living exclusively in trees without upright bipedal posture",
			"Practicing modern agriculture 50,000 years ago",
		],
		correctOption: 0,
		explanation:
			"The Neanderthal man with a brain size of $1400\\text{ cc}$ lived in near east and central Asia between $100,000 - 40,000$ years before present. They used hides to protect their bodies and buried their dead, showing ritualistic and cultural behaviour.",
	},
	{
		id: 178,
		text: "Pre-historic cave art was developed by modern *Homo sapiens* around:",
		options: [
			"18,000 years ago",
			"100,000 years ago",
			"10,000 years ago",
			"50,000 years ago",
		],
		correctOption: 0,
		explanation:
			"Pre-historic cave art developed about 18,000 years ago (such as rock paintings in Bhimbetka rock shelters in Madhya Pradesh). Agriculture and human settlements began around 10,000 years ago.",
	},
	{
		id: 179,
		text: "Statement I: According to Darwin, organic evolution occurs via gradual, continuous, and directional variations over generations.\\nStatement II: Thomas Malthus' essay on population growth influenced Darwin's conceptualization that populations grow exponentially while resources remain finite, resulting in a struggle for existence.",
		options: [
			"Both Statement I and Statement II are correct and Statement II explains Darwin's reasoning",
			"Both Statement I and Statement II are correct but Statement II does not explain Darwin's reasoning",
			"Statement I is correct but Statement II is incorrect",
			"Statement I is incorrect but Statement II is correct",
		],
		correctOption: 0,
		explanation:
			"Both statements are correct. Darwin was deeply influenced by Thomas Malthus' work on population dynamics. Recognizing that food and resources are limiting while reproductive capacity is immense, Darwin concluded that individuals with advantageous hereditary variations survive and reproduce preferentially.",
	},
	{
		id: 180,
		text: "Which of the following factors does not disturb Hardy-Weinberg genetic equilibrium in a biological population?",
		options: [
			"Random mating within a very large population",
			"Gene migration or gene flow",
			"Genetic drift",
			"Natural selection",
		],
		correctOption: 0,
		explanation:
			"Five major factors are known to disturb Hardy-Weinberg equilibrium: gene migration/flow, genetic drift, mutation, genetic recombination, and natural selection. Random mating within an infinitely large population without selection or mutation maintains Hardy-Weinberg equilibrium.",
	},
];
