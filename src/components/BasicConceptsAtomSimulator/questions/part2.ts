import type { Question } from "#/components/CbtSimulator/types";

export const basicConceptsAtomQuestionsPart2: Question[] = [
	{
		id: 31,
		text: "In cathode ray tube experiments, J.J. Thomson determined the specific charge ($e/m$ ratio) of cathode ray particles. The specific charge was observed to be:",
		options: [
			"Dependent on the nature of gas enclosed in the discharge tube",
			"Dependent on the metal used for cathode electrodes",
			"Independent of both the enclosed gas and cathode electrode material",
			"Dependent on the intensity of applied high voltage",
		],
		correctOption: 2,
		explanation:
			"The charge to mass ratio ($e/m = 1.758820 \\times 10^{11}\\text{ C/kg}$) of cathode ray particles was found to be constant and completely independent of the gas present in the tube or the material of the electrodes, proving that electrons are universal fundamental constituents of all atoms.",
	},
	{
		id: 32,
		text: "Which of the following groups contains only isoelectronic species?",
		options: [
			"$\\text{N}^{3-}, \\text{O}^{2-}, \\text{F}^{-}, \\text{Na}^{+}$",
			"$\\text{O}^{2-}, \\text{F}^{-}, \\text{Cl}^{-}, \\text{Na}^{+}$",
			"$\\text{Na}^{+}, \\text{Mg}^{2+}, \\text{Al}^{3+}, \\text{Cl}^{-}$",
			"$\\text{K}^{+}, \\text{Ca}^{2+}, \\text{Sc}^{3+}, \\text{Na}^{+}$",
		],
		correctOption: 0,
		explanation:
			"Isoelectronic species contain the exact same number of electrons. In $\\text{N}^{3-} (7+3=10)$, $\\text{O}^{2-} (8+2=10)$, $\\text{F}^{-} (9+1=10)$, and $\\text{Na}^{+} (11-1=10)$, each ion has 10 electrons with the ground state electronic configuration $1s^2 2s^2 2p^6$.",
	},
	{
		id: 33,
		text: "The energy associated with one mole of photons of electromagnetic radiation having a frequency of $5.00 \\times 10^{14}\\text{ Hz}$ is: $[h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s},\\; N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}]$",
		options: [
			"$199.5\\text{ kJ/mol}$",
			"$3.313 \\times 10^{-19}\\text{ J/mol}$",
			"$1.995 \\times 10^{5}\\text{ kJ/mol}$",
			"$120.4\\text{ kJ/mol}$",
		],
		correctOption: 0,
		explanation:
			"Energy of one photon: $E = h\\nu = (6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}) \\times (5.00 \\times 10^{14}\\text{ s}^{-1}) = 3.313 \\times 10^{-19}\\text{ J}$. For one mole of photons: $E_{\\text{mole}} = N_A \\times E = (6.022 \\times 10^{23}\\text{ mol}^{-1}) \\times (3.313 \\times 10^{-19}\\text{ J}) \\approx 199.5 \\times 10^3\\text{ J/mol} = 199.5\\text{ kJ/mol}$.",
	},
	{
		id: 34,
		text: "The work function of a photosensitive metal is $4.00\\text{ eV}$. The threshold wavelength ($\\lambda_0$) required to initiate photoelectric emission is: $[hc \\approx 1240\\text{ eV}\\cdot\\text{nm}]$",
		options: [
			"$310\\text{ nm}$",
			"$620\\text{ nm}$",
			"$155\\text{ nm}$",
			"$400\\text{ nm}$",
		],
		correctOption: 0,
		explanation:
			"Threshold wavelength $\\lambda_0 = \\frac{hc}{W_0} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{4.00\\text{ eV}} = 310\\text{ nm} = 3100\\text{ \\AA}$. Light with wavelength greater than $310\\text{ nm}$ will not possess sufficient photon energy to eject photoelectrons.",
	},
	{
		id: 35,
		text: "When light of frequency $2\\nu_0$ is incident on a metal with threshold frequency $\\nu_0$, the maximum velocity of photoelectrons is $v_1$. When the incident frequency is increased to $5\\nu_0$, the maximum velocity is $v_2$. The ratio $v_1 / v_2$ is:",
		options: ["$1 : 4$", "$1 : 2$", "$1 : \\sqrt{2}$", "$2 : 5$"],
		correctOption: 1,
		explanation:
			"From Einstein's photoelectric equation: $K.E._{\\text{max}} = \\frac{1}{2}mv^2 = h(\\nu - \\nu_0)$. In case 1: $\\frac{1}{2}mv_1^2 = h(2\\nu_0 - \\nu_0) = h\\nu_0$. In case 2: $\\frac{1}{2}mv_2^2 = h(5\\nu_0 - \\nu_0) = 4h\\nu_0$. Dividing equations: $\\frac{v_1^2}{v_2^2} = \\frac{h\\nu_0}{4h\\nu_0} = \\frac{1}{4} \\implies \\frac{v_1}{v_2} = \\frac{1}{2}$.",
	},
	{
		id: 36,
		text: "The radius of the second Bohr orbit ($n=2$) for a $\\text{Li}^{2+}$ ion is: $[a_0 = 0.529\\text{ \\AA}]$",
		options: [
			"$0.705\\text{ \\AA}$",
			"$1.058\\text{ \\AA}$",
			"$0.353\\text{ \\AA}$",
			"$2.116\\text{ \\AA}$",
		],
		correctOption: 0,
		explanation:
			"Bohr radius formula for hydrogen-like species: $r_n = a_0 \\frac{n^2}{Z}$. For $\\text{Li}^{2+}$, atomic number $Z = 3$ and principal quantum number $n = 2$. $r_2 = 0.529 \\times \\frac{2^2}{3} = 0.529 \\times \\frac{4}{3} \\approx 0.7053\\text{ \\AA}$.",
	},
	{
		id: 37,
		text: "The velocity of an electron in the first Bohr orbit of a hydrogen atom is $v$. The velocity of an electron in the third Bohr orbit of a $\\text{He}^+$ ion is:",
		options: ["$\\frac{2}{3}v$", "$\\frac{3}{2}v$", "$\\frac{4}{9}v$", "$v$"],
		correctOption: 0,
		explanation:
			"Velocity in Bohr orbit: $v_n = v_0 \\frac{Z}{n}$, where $v_0$ is the velocity in H atom ground state ($n=1, Z=1$). For $\\text{He}^+$, $Z = 2$ and $n = 3$. Therefore, $v_3 = v_0 \\frac{2}{3} = \\frac{2}{3}v$.",
	},
	{
		id: 38,
		text: "The ground state energy of hydrogen atom is $-13.6\\text{ eV}$. The energy of the electron in the second excited state of a $\\text{Be}^{3+}$ ion is:",
		options: [
			"$-24.2\\text{ eV}$",
			"$-54.4\\text{ eV}$",
			"$-13.6\\text{ eV}$",
			"$-6.04\\text{ eV}$",
		],
		correctOption: 0,
		explanation:
			"The second excited state corresponds to $n = 3$ (since ground state is $n=1$, first excited state is $n=2$). For $\\text{Be}^{3+}$, atomic number $Z = 4$. Energy formula: $E_n = -13.6 \\frac{Z^2}{n^2}\\text{ eV} = -13.6 \\times \\frac{4^2}{3^2} = -13.6 \\times \\frac{16}{9} \\approx -24.18\\text{ eV}$.",
	},
	{
		id: 39,
		text: "The ionization energy required to remove an electron completely from the ground state of a $\\text{He}^+$ ion is:",
		options: [
			"$13.6\\text{ eV}$",
			"$27.2\\text{ eV}$",
			"$54.4\\text{ eV}$",
			"$122.4\\text{ eV}$",
		],
		correctOption: 2,
		explanation:
			"Ionization energy is the energy required for transition from $n = 1$ to $n = \\infty$: $I.E. = E_\\infty - E_1 = 0 - \\left(-13.6 \\frac{Z^2}{1^2}\\right) = 13.6 \\times Z^2\\text{ eV}$. For $\\text{He}^+$, $Z = 2$, so $I.E. = 13.6 \\times 2^2 = 54.4\\text{ eV}$.",
	},
	{
		id: 40,
		text: "The shortest wavelength (series limit) in the Balmer series of the hydrogen atomic emission spectrum is given by: $[R_H = \\text{Rydberg constant}]$",
		options: [
			"$\\frac{4}{R_H}$",
			"$\\frac{1}{R_H}$",
			"$\\frac{9}{R_H}$",
			"$\\frac{16}{R_H}$",
		],
		correctOption: 0,
		explanation:
			"Balmer series corresponds to transitions ending at $n_1 = 2$. The shortest wavelength corresponds to maximum energy, which occurs at the series limit ($n_2 = \\infty$). Rydberg equation: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{2^2} - \\frac{1}{\\infty^2}\\right) = \\frac{R_H}{4} \\implies \\lambda = \\frac{4}{R_H}$.",
	},
	{
		id: 41,
		text: "In a sample of hydrogen atoms, electrons are excited to the $n = 5$ energy level. When they de-excite to the ground state ($n = 1$), the maximum number of distinct spectral lines emitted is:",
		options: ["$5$", "$10$", "$15$", "$8$"],
		correctOption: 1,
		explanation:
			"Number of emitted spectral lines: $N = \\frac{\\Delta n (\\Delta n + 1)}{2} = \\frac{(n_2 - n_1)(n_2 - n_1 + 1)}{2}$. Here $n_2 = 5$ and $n_1 = 1$, so $\\Delta n = 4$. $N = \\frac{4 \\times 5}{2} = 10\\text{ lines}$.",
	},
	{
		id: 42,
		text: "Which of the following electronic transitions in a hydrogen atom emits a photon of the highest frequency?",
		options: [
			"$n = 2 \\to n = 1$",
			"$n = 3 \\to n = 2$",
			"$n = 4 \\to n = 3$",
			"$n = 5 \\to n = 4$",
		],
		correctOption: 0,
		explanation:
			"Frequency $\\nu = \\frac{\\Delta E}{h}$. Energy gap for $n=2 \\to n=1$: $\\Delta E = 13.6 \\left(1 - \\frac{1}{4}\\right) = 10.2\\text{ eV}$. For $n=3 \\to n=2$: $\\Delta E = 13.6 \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 1.89\\text{ eV}$. Since $10.2\\text{ eV}$ is greater than any transition between higher energy levels, the $n = 2 \\to n = 1$ transition emits the highest frequency radiation (ultraviolet Lyman series).",
	},
	{
		id: 43,
		text: "An electron is accelerated from rest through a potential difference of $100\\text{ V}$. Its de Broglie wavelength is approximately:",
		options: [
			"$0.123\\text{ nm}$",
			"$1.23\\text{ nm}$",
			"$0.0123\\text{ nm}$",
			"$0.246\\text{ nm}$",
		],
		correctOption: 0,
		explanation:
			"For an electron accelerated through potential difference $V$, de Broglie wavelength is: $\\lambda = \\frac{1.227}{\\sqrt{V}}\\text{ nm}$. For $V = 100\\text{ V}$, $\\lambda = \\frac{1.227}{\\sqrt{100}} = \\frac{1.227}{10} = 0.1227\\text{ nm} = 1.227\\text{ \\AA}$.",
	},
	{
		id: 44,
		text: "A proton and an $\\alpha$-particle are accelerated from rest through the same potential difference $V$. The ratio of their de Broglie wavelengths $\\lambda_p / \\lambda_\\alpha$ is: $[m_\\alpha = 4m_p,\\; q_\\alpha = 2q_p]$",
		options: ["$2\\sqrt{2} : 1$", "$1 : 2\\sqrt{2}$", "$4 : 1$", "$2 : 1$"],
		correctOption: 0,
		explanation:
			"de Broglie wavelength: $\\lambda = \\frac{h}{\\sqrt{2mqV}} \\implies \\lambda \\propto \\frac{1}{\\sqrt{mq}}$. Ratio: $\\frac{\\lambda_p}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha q_\\alpha}{m_p q_p}} = \\sqrt{\\frac{4m_p \\times 2q_p}{m_p \\times q_p}} = \\sqrt{8} = 2\\sqrt{2}$.",
	},
	{
		id: 45,
		text: "A dust particle of mass $1.0 \\times 10^{-6}\\text{ kg}$ has its velocity known to within $1.0 \\times 10^{-4}\\text{ m/s}$. The minimum uncertainty in its position according to Heisenberg's uncertainty principle is: $[h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}]$",
		options: [
			"$5.27 \\times 10^{-25}\\text{ m}$",
			"$1.05 \\times 10^{-24}\\text{ m}$",
			"$6.63 \\times 10^{-24}\\text{ m}$",
			"$3.31 \\times 10^{-25}\\text{ m}$",
		],
		correctOption: 0,
		explanation:
			"Heisenberg uncertainty principle: $\\Delta x \\cdot m \\Delta v \\ge \\frac{h}{4\\pi} \\implies \\Delta x \\ge \\frac{h}{4\\pi m \\Delta v}$. Substituting: $\\Delta x = \\frac{6.626 \\times 10^{-34}}{4 \\times 3.1416 \\times (1.0 \\times 10^{-6}) \\times (1.0 \\times 10^{-4})} = \\frac{6.626 \\times 10^{-34}}{1.2566 \\times 10^{-9}} \\approx 5.27 \\times 10^{-25}\\text{ m}$.",
	},
	{
		id: 46,
		text: "If the uncertainty in position and momentum of a subatomic particle are equal, the minimum uncertainty in its velocity is:",
		options: [
			"$\\frac{1}{2m}\\sqrt{\\frac{h}{\\pi}}$",
			"$\\frac{1}{m}\\sqrt{\\frac{h}{\\pi}}$",
			"$\\frac{1}{2m}\\sqrt{\\frac{h}{2\\pi}}$",
			"$\\frac{h}{4\\pi m}$",
		],
		correctOption: 0,
		explanation:
			"Given $\\Delta x = \\Delta p$. From Heisenberg's principle: $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi} \\implies (\\Delta p)^2 \\ge \\frac{h}{4\\pi} \\implies \\Delta p \\ge \\sqrt{\\frac{h}{4\\pi}} = \\frac{1}{2}\\sqrt{\\frac{h}{\\pi}}$. Since $\\Delta p = m\\Delta v$, $\\Delta v = \\frac{\\Delta p}{m} \\ge \\frac{1}{2m}\\sqrt{\\frac{h}{\\pi}}$.",
	},
	{
		id: 47,
		text: "The number of radial nodes, angular nodes, and total nodes for a $4d$ atomic orbital are respectively:",
		options: ["$1, 2, 3$", "$2, 1, 3$", "$1, 1, 2$", "$2, 2, 4$"],
		correctOption: 0,
		explanation:
			"For a $4d$ orbital: $n = 4$ and $l = 2$. Radial nodes $= n - l - 1 = 4 - 2 - 1 = 1$. Angular nodes $= l = 2$. Total nodes $= n - 1 = 4 - 1 = 3$. Hence, the respective values are 1, 2, and 3.",
	},
	{
		id: 48,
		text: "The orbital angular momentum of an electron in a $3p$ orbital is given by:",
		options: [
			"$\\frac{h}{\\sqrt{2}\\pi}$",
			"$\\sqrt{2}\\frac{h}{\\pi}$",
			"$\\sqrt{6}\\frac{h}{2\\pi}$",
			"$\\frac{h}{2\\pi}$",
		],
		correctOption: 0,
		explanation:
			"Orbital angular momentum formula: $L = \\sqrt{l(l+1)}\\frac{h}{2\\pi}$. For a $p$ orbital, azimuthal quantum number $l = 1$. $L = \\sqrt{1(1+1)}\\frac{h}{2\\pi} = \\sqrt{2}\\frac{h}{2\\pi} = \\frac{h}{\\sqrt{2}\\pi}$.",
	},
	{
		id: 49,
		text: "Which of the following sets of quantum numbers $(n, l, m_l, m_s)$ is NOT permissible for an electron in an atom?",
		options: [
			"$3, 2, -1, +\\frac{1}{2}$",
			"$4, 0, 0, -\\frac{1}{2}$",
			"$3, 3, +1, +\\frac{1}{2}$",
			"$2, 1, -1, -\\frac{1}{2}$",
		],
		correctOption: 2,
		explanation:
			"For any principal quantum number $n$, the azimuthal quantum number $l$ can take integer values from $0$ to $n - 1$. For $n = 3$, allowed values of $l$ are $0, 1, 2$. A value of $l = 3$ is forbidden, making set ($3, 3, +1, +1/2$) impermissible.",
	},
	{
		id: 50,
		text: "The maximum number of electrons that can be accommodated in a subshell characterized by azimuthal quantum number $l$ is:",
		options: ["$2l + 1$", "$4l + 2$", "$2n^2$", "$2(2l - 1)$"],
		correctOption: 1,
		explanation:
			"The number of orbitals in a subshell is $(2l + 1)$. According to Pauli's exclusion principle, each orbital can hold at most 2 electrons with opposite spins. Therefore, the maximum number of electrons in the subshell is $2(2l + 1) = 4l + 2$.",
	},
	{
		id: 51,
		text: "According to the $(n + l)$ rule (Aufbau principle), the correct arrangement of orbitals $4d, 5p, 5f, 6s$ in increasing order of energy is:",
		options: [
			"$4d < 5p < 6s < 5f$",
			"$4d < 6s < 5p < 5f$",
			"$6s < 4d < 5p < 5f$",
			"$5p < 4d < 6s < 5f$",
		],
		correctOption: 0,
		explanation:
			"Compute $(n + l)$: $4d: 4 + 2 = 6$; $5p: 5 + 1 = 6$; $6s: 6 + 0 = 6$; $5f: 5 + 3 = 8$. For orbitals with identical $(n + l) = 6$, energy increases with increasing $n$ ($4d < 5p < 6s$). Orbital $5f$ has $(n+l) = 8$ and highest energy. Hence: $4d < 5p < 6s < 5f$.",
	},
	{
		id: 52,
		text: "The ground state electronic configuration of nitrogen ($Z = 7$) is $1s^2 2s^2 2p_x^1 2p_y^1 2p_z^1$ rather than $1s^2 2s^2 2p_x^2 2p_y^1 2p_z^0$. This is governed by:",
		options: [
			"Aufbau principle",
			"Pauli exclusion principle",
			"Hund's rule of maximum multiplicity",
			"Heisenberg uncertainty principle",
		],
		correctOption: 2,
		explanation:
			"Hund's rule of maximum multiplicity states that electron pairing in degenerate orbitals ($2p_x, 2p_y, 2p_z$) does not take place until each orbital is singly occupied with electrons having parallel spins. This minimizes inter-electronic repulsion and maximizes exchange energy.",
	},
	{
		id: 53,
		text: "The statement 'No two electrons in an atom can have identical values for all four quantum numbers' is known as:",
		options: [
			"Aufbau principle",
			"Pauli's exclusion principle",
			"Hund's rule",
			"Bohr's quantization condition",
		],
		correctOption: 1,
		explanation:
			"Pauli's exclusion principle states that no two electrons in an atom can have the same four quantum numbers. If two electrons reside in the same orbital (same $n, l, m_l$), they must have opposite spins ($m_s = +1/2$ and $-1/2$).",
	},
	{
		id: 54,
		text: "The spin-only magnetic moment of a $\\text{Cr}^{3+}$ ion ($Z = 24$) in Bohr Magnetons (BM) is approximately:",
		options: [
			"$3.87\\text{ BM}$",
			"$4.90\\text{ BM}$",
			"$2.83\\text{ BM}$",
			"$1.73\\text{ BM}$",
		],
		correctOption: 0,
		explanation:
			"Electronic configuration of Cr ($Z = 24$): $[\\text{Ar}] 3d^5 4s^1$. Loss of 3 electrons gives $\\text{Cr}^{3+}: [\\text{Ar}] 3d^3$. Number of unpaired electrons $n = 3$. Spin-only magnetic moment $\\mu = \\sqrt{n(n + 2)} = \\sqrt{3(5)} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
	},
	{
		id: 55,
		text: "The exceptional ground-state electronic configurations of Chromium ($[\\text{Ar}] 3d^5 4s^1$) and Copper ($[\\text{Ar}] 3d^{10} 4s^1$) are primarily attributed to:",
		options: [
			"Relativistic contraction of s-orbitals",
			"Higher shielding by 4s electrons",
			"Symmetrical electron distribution and high exchange energy of half-filled and completely filled subshells",
			"Extremely low effective nuclear charge",
		],
		correctOption: 2,
		explanation:
			"Half-filled ($d^5$) and completely filled ($d^{10}$) degenerate subshells possess greater stability due to: (1) Symmetrical distribution of electron charge density, and (2) Maximum exchange energy resulting from the exchange of positions among electrons with parallel spins.",
	},
	{
		id: 56,
		text: "Which of the following atomic orbitals possesses two conical nodal surfaces rather than planar nodal surfaces?",
		options: ["$d_{xy}$", "$d_{x^2 - y^2}$", "$d_{z^2}$", "$d_{yz}$"],
		correctOption: 2,
		explanation:
			"The $d_{z^2}$ orbital consists of a dumbbell along the $z$-axis surrounded by a donut-shaped ring (torus) in the $xy$-plane. It has no planar nodes; instead, its probability density drops to zero along two conical nodal surfaces inclined at an angle of $\\approx 54.7^\\circ$ relative to the $z$-axis.",
	},
	{
		id: 57,
		text: "The splitting of atomic spectral emission lines into multiple fine components in the presence of an external magnetic field is known as the:",
		options: [
			"Stark effect",
			"Zeeman effect",
			"Compton effect",
			"Raman effect",
		],
		correctOption: 1,
		explanation:
			"The splitting of spectral lines under an external magnetic field is called the Zeeman effect. In contrast, splitting under an external electric field is called the Stark effect.",
	},
	{
		id: 58,
		text: "If the kinetic energy of a free electron is increased to four times its initial value, its de Broglie wavelength:",
		options: [
			"Doubles",
			"Is halved",
			"Becomes four times",
			"Remains unchanged",
		],
		correctOption: 1,
		explanation:
			"The de Broglie wavelength is related to kinetic energy $K$ by $\\lambda = \\frac{h}{\\sqrt{2mK}} \\implies \\lambda \\propto \\frac{1}{\\sqrt{K}}$. If $K' = 4K$, then $\\lambda' = \\frac{\\lambda}{\\sqrt{4}} = \\frac{\\lambda}{2}$. The wavelength is halved.",
	},
	{
		id: 59,
		text: "Louis de Broglie justified Bohr's second postulate of angular momentum quantization ($mvr = \\frac{nh}{2\\pi}$) by proposing that:",
		options: [
			"Electrons in stable orbits behave as stationary standing waves whose orbit circumference equals an integral number of wavelengths ($2\\pi r = n\\lambda$)",
			"Electrons emit radiation continuously while traversing circular orbits",
			"Electrons spiral into the nucleus under electromagnetic drag",
			"Nuclear electrostatic forces neutralize centrifugal acceleration only at specific radii",
		],
		correctOption: 0,
		explanation:
			"de Broglie proposed that an electron in a stable Bohr orbit forms a stationary standing wave. Constructive interference requires the circumference to equal an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$. Substituting $\\lambda = \\frac{h}{mv}$ yields $2\\pi r = n \\frac{h}{mv} \\implies mvr = \\frac{nh}{2\\pi}$, deriving Bohr's quantization condition.",
	},
	{
		id: 60,
		text: "In the quantum mechanical model of the atom, the physical significance of $|\\psi|^2$ at any point $(x, y, z)$ around the nucleus represents the:",
		options: [
			"Exact velocity of the electron",
			"Probability density of locating the electron per unit volume",
			"Total electrostatic potential energy of the orbital",
			"Definite trajectory path followed by the orbiting particle",
		],
		correctOption: 1,
		explanation:
			"According to Max Born's probabilistic interpretation of quantum mechanics, while the wave function $\\psi$ itself has no direct physical meaning, $|\\psi|^2$ represents the probability density, which is the probability of finding the electron per unit volume in the vicinity of that point.",
	},
];
