import type { Question } from "#/components/CbtSimulator/types";

export const iatPhysicsQuestions: Question[] = [
	{
		id: 1,
		text: "An electric dipole consists of two point charges $+q$ and $-q$ separated by a distance $2a$. It is placed in a non-uniform electric field oriented along the $x$-axis whose magnitude increases uniformly with $x$, such that $\\vec{E} = (E_0 + \\alpha x)\\hat{i}$. If the dipole is aligned parallel to the field (pointing along $+\\hat{i}$ with its center at $x_0$), the net electrostatic force acting on the dipole is:",
		options: [
			"$q\\alpha a\\,\\hat{i}$",
			"$2q\\alpha a\\,\\hat{i}$",
			"Zero",
			"$(2qE_0 + 2q\\alpha a)\\,\\hat{i}$",
		],
		correctOption: 1,
		explanation:
			"The position of charge $+q$ is $x_0 + a$ and charge $-q$ is $x_0 - a$. The force on $+q$ is $\\vec{F}_+ = q[E_0 + \\alpha(x_0 + a)]\\hat{i}$. The force on $-q$ is $\\vec{F}_- = -q[E_0 + \\alpha(x_0 - a)]\\hat{i}$. The net force is $\\vec{F}_{\\text{net}} = \\vec{F}_+ + \\vec{F}_- = q\\alpha[(x_0 + a) - (x_0 - a)]\\hat{i} = 2q\\alpha a\\,\\hat{i} = p\\alpha\\,\\hat{i}$, where $p = 2qa$ is the dipole moment.",
	},
	{
		id: 2,
		text: "A parallel plate capacitor of plate area $A$ and separation $d$ is charged to a potential difference $V_0$ by a battery and then disconnected. Two dielectric slabs of dielectric constants $K_1$ and $K_2$, each having thickness $d/2$ and area $A$, are inserted between the plates filling the space completely. The new potential difference across the capacitor is:",
		options: [
			"$V_0\\left(\\frac{K_1 K_2}{K_1 + K_2}\\right)$",
			"$\\frac{2V_0}{K_1 + K_2}$",
			"$\\frac{V_0}{2}\\left(\\frac{K_1 + K_2}{K_1 K_2}\\right)$",
			"$V_0\\left(\\frac{K_1 + K_2}{2}\\right)$",
		],
		correctOption: 2,
		explanation:
			"Initial charge is $Q = C_0 V_0 = \\frac{\\epsilon_0 A}{d}V_0$. Since the battery is disconnected, $Q$ remains constant. The two slabs in series form two capacitors $C_1 = \\frac{K_1 \\epsilon_0 A}{d/2} = \\frac{2K_1 \\epsilon_0 A}{d} = 2K_1 C_0$ and $C_2 = 2K_2 C_0$. Equivalent capacitance is $C_{\\text{eq}} = \\frac{C_1 C_2}{C_1 + C_2} = \\frac{2K_1 K_2}{K_1 + K_2}C_0$. New potential difference is $V = \\frac{Q}{C_{\\text{eq}}} = \\frac{C_0 V_0}{\\frac{2K_1 K_2}{K_1 + K_2}C_0} = \\frac{V_0}{2}\\left(\\frac{K_1 + K_2}{K_1 K_2}\\right)$.",
	},
	{
		id: 3,
		text: "A parallel-plate capacitor with square plates of side $L$ and plate separation $d$ is held at a constant potential difference $V$ by a battery. A dielectric slab of dielectric constant $K$ and thickness $d$ is inserted a distance $x$ between the plates along the direction parallel to one edge. The electrostatic force exerted by the capacitor on the dielectric slab is:",
		options: [
			"$\\frac{\\epsilon_0 L (K - 1) V^2}{2d}$ directed inward",
			"$\\frac{\\epsilon_0 L (K - 1) V^2}{d}$ directed outward",
			"$\\frac{\\epsilon_0 L^2 K V^2}{2d^2}$ directed inward",
			"Zero, because the battery maintains constant potential",
		],
		correctOption: 0,
		explanation:
			"The system consists of two capacitors in parallel: one with dielectric of width $x$ and one with vacuum of width $(L - x)$. Total capacitance is $C(x) = \\frac{\\epsilon_0 K L x}{d} + \\frac{\\epsilon_0 L (L - x)}{d} = \\frac{\\epsilon_0 L}{d}[(K - 1)x + L]$. At constant voltage $V$, the electrostatic force is $F = +\\frac{1}{2}V^2 \\frac{dC}{dx} = \\frac{1}{2}V^2 \\frac{\\epsilon_0 L (K - 1)}{d}$. Since $K > 1$, $F > 0$, pulling the slab into the capacitor (inward force).",
	},
	{
		id: 4,
		text: "Twelve identical resistors, each of resistance $R$, are connected along the edges of a cube. The equivalent resistance between two diagonally opposite vertices of a face of the cube (face-diagonal) is:",
		options: [
			"$\\frac{5}{6}R$",
			"$\\frac{7}{12}R$",
			"$\\frac{4}{3}R$",
			"$\\frac{3}{4}R$",
		],
		correctOption: 3,
		explanation:
			"By exploiting symmetry across the plane bisecting the face diagonal: nodes with equal electric potential can be identified or connected. For a cube network of equal resistors $R$: (1) between space-diagonal vertices: $R_{\\text{eq}} = \\frac{5}{6}R$; (2) between face-diagonal vertices: $R_{\\text{eq}} = \\frac{3}{4}R$; (3) between vertices of a single edge: $R_{\\text{eq}} = \\frac{7}{12}R$. Hence, for face-diagonal terminals, $R_{\\text{eq}} = \\frac{3}{4}R$.",
	},
	{
		id: 5,
		text: "A cylindrical metallic conductor carries a steady direct current. If the temperature of the conductor is increased while keeping the current constant, how do the electron drift velocity $v_d$ and the electric field $E$ inside the conductor change?",
		options: [
			"$v_d$ remains unchanged; $E$ increases",
			"$v_d$ decreases; $E$ increases",
			"$v_d$ increases; $E$ remains unchanged",
			"$v_d$ decreases; $E$ decreases",
		],
		correctOption: 0,
		explanation:
			"Current is given by $I = n e A v_d$. For a metallic conductor, the conduction electron density $n$ and cross-sectional area $A$ are essentially independent of temperature. Thus, if current $I$ is constant, drift velocity $v_d = \\frac{I}{neA}$ remains unchanged. However, increased temperature increases lattice vibrations, reducing the relaxation time $\\tau$, so resistivity $\\rho$ increases. Since $E = \\rho j$ and current density $j = I/A$ is constant, the electric field $E$ must increase.",
	},
	{
		id: 6,
		text: "In a potentiometer experiment, a cell of internal resistance $r$ is balanced across a length $l_1$ on the potentiometer wire when the external circuit is open. When a shunt resistance $R$ is connected across the terminals of the cell, the balance point shifts to a length $l_2$. The internal resistance $r$ of the cell is:",
		options: [
			"$R\\left(\\frac{l_1 - l_2}{l_1}\\right)$",
			"$R\\left(\\frac{l_2}{l_1 - l_2}\\right)$",
			"$R\\left(\\frac{l_1 - l_2}{l_2}\\right)$",
			"$\\frac{R l_1 l_2}{l_1 + l_2}$",
		],
		correctOption: 2,
		explanation:
			"In open circuit, the potentiometer measures EMF: $\\mathcal{E} \\propto l_1$. In closed circuit with shunt resistor $R$, it measures terminal potential difference: $V = \\frac{\\mathcal{E} R}{R + r} \\propto l_2$. Taking ratio: $\\frac{\\mathcal{E}}{V} = \\frac{R + r}{R} = 1 + \\frac{r}{R} = \\frac{l_1}{l_2} \\implies \\frac{r}{R} = \\frac{l_1 - l_2}{l_2} \\implies r = R\\left(\\frac{l_1 - l_2}{l_2}\\right)$.",
	},
	{
		id: 7,
		text: "A particle of mass $m$ and positive charge $q$ enters a region of uniform magnetic field $\\vec{B} = B_0\\,\\hat{k}$ with initial velocity $\\vec{v} = v_{0x}\\,\\hat{i} + v_{0z}\\,\\hat{k}$. The trajectory of the particle is a helix. The pitch of this helix (distance travelled along the field during one revolution) is:",
		options: [
			"$\\frac{2\\pi m v_{0x}}{q B_0}$",
			"$\\frac{2\\pi m v_{0z}}{q B_0}$",
			"$\\frac{2\\pi m \\sqrt{v_{0x}^2 + v_{0z}^2}}{q B_0}$",
			"$\\frac{\\pi m v_{0z}}{q B_0}$",
		],
		correctOption: 1,
		explanation:
			"The magnetic force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ acts entirely in the $xy$-plane perpendicular to $\\vec{B}$. The velocity component parallel to the field $v_\\parallel = v_{0z}$ remains constant. The perpendicular component $v_\\perp = v_{0x}$ executes uniform circular motion with time period $T = \\frac{2\\pi m}{q B_0}$. The pitch is the axial distance traversed in one period: $p = v_\\parallel T = v_{0z} \\left(\\frac{2\\pi m}{q B_0}\\right) = \\frac{2\\pi m v_{0z}}{q B_0}$.",
	},
	{
		id: 8,
		text: "A long straight solid cylindrical wire of radius $R$ carries a steady current $I$ that is distributed non-uniformly across its cross section such that the current density is $j(r) = c r$, where $r$ is the radial distance from the cylinder axis and $c$ is a constant. The magnitude of the magnetic field $B(r)$ at an interior point ($r < R$) is proportional to:",
		options: ["$r$", "$r^3$", "$1/r$", "$r^2$"],
		correctOption: 3,
		explanation:
			"Using Ampere's circuital law: $\\oint \\vec{B}\\cdot d\\vec{l} = B(r)(2\\pi r) = \\mu_0 I_{\\text{encl}}$. The enclosed current inside radius $r$ is $I_{\\text{encl}} = \\int_0^r j(r') (2\\pi r' dr') = 2\\pi c \\int_0^r r'^2 dr' = \\frac{2\\pi c r^3}{3}$. Equating: $B(r)(2\\pi r) = \\mu_0 \\left(\\frac{2\\pi c r^3}{3}\\right) \\implies B(r) = \\frac{\\mu_0 c r^2}{3}$. Therefore, $B(r) \\propto r^2$.",
	},
	{
		id: 9,
		text: "Two identical thin circular coaxial coils of radius $R$, each having $N$ turns and carrying equal steady currents $I$ in the same direction, are separated by an axial distance equal to their radius $R$ (Helmholtz coil configuration). At the midpoint on the axis between the two coils, the axial magnetic field gradient $\\frac{dB}{dx}$ and its second derivative $\\frac{d^2B}{dx^2}$ are:",
		options: [
			"$\\frac{dB}{dx} \\neq 0$ and $\\frac{d^2B}{dx^2} = 0$",
			"$\\frac{dB}{dx} = 0$ and $\\frac{d^2B}{dx^2} > 0$",
			"$\\frac{dB}{dx} = 0$ and $\\frac{d^2B}{dx^2} = 0$",
			"$\\frac{dB}{dx} = 0$ and $\\frac{d^2B}{dx^2} < 0$",
		],
		correctOption: 2,
		explanation:
			"The Helmholtz coil arrangement sets coil separation equal to the coil radius $R$. By symmetry, the first derivative $\\frac{dB}{dx}$ at the midpoint ($x = 0$) vanishes. Setting the separation $d = R$ specifically eliminates the second derivative $\\frac{d^2B}{dx^2} = 0$ at the center, making the magnetic field exceptionally uniform across a wide central region.",
	},
	{
		id: 10,
		text: "A galvanometer with coil resistance $G = 50\\,\\Omega$ shows full-scale deflection for a current of $I_g = 2\\text{ mA}$. To convert it into a voltmeter capable of reading up to $10\\text{ V}$, the resistance that must be connected in series with the galvanometer is:",
		options: [
			"$4950\\,\\Omega$",
			"$5000\\,\\Omega$",
			"$49.5\\,\\Omega$",
			"$5050\\,\\Omega$",
		],
		correctOption: 0,
		explanation:
			"For full-scale deflection voltage $V$: $V = I_g(G + R) \\implies G + R = \\frac{V}{I_g} = \\frac{10}{2 \\times 10^{-3}} = 5000\\,\\Omega$. Therefore, the series resistance required is $R = 5000 - G = 5000 - 50 = 4950\\,\\Omega$.",
	},
	{
		id: 11,
		text: "A small bar magnet of magnetic dipole moment $\\vec{M}$ is placed in a non-uniform magnetic field $\\vec{B}$. The potential energy $U$ and the net translational force $\\vec{F}$ acting on the dipole are given by:",
		options: [
			"$U = +\\vec{M}\\cdot\\vec{B}$ and $\\vec{F} = -\\nabla(\\vec{M}\\cdot\\vec{B})$",
			"$U = -\\vec{M}\\cdot\\vec{B}$ and $\\vec{F} = \\vec{M}\\times\\vec{B}$",
			"$U = |\\vec{M}\\times\\vec{B}|$ and $\\vec{F} = 0$",
			"$U = -\\vec{M}\\cdot\\vec{B}$ and $\\vec{F} = \\nabla(\\vec{M}\\cdot\\vec{B})$",
		],
		correctOption: 3,
		explanation:
			"The potential energy of a magnetic dipole in a field is $U = -\\vec{M}\\cdot\\vec{B}$. In a non-uniform field, the translational force is the negative gradient of potential energy: $\\vec{F} = -\\nabla U = -\\nabla(-\\vec{M}\\cdot\\vec{B}) = \\nabla(\\vec{M}\\cdot\\vec{B})$. When $\\vec{M}$ is constant, this simplifies to $(\\vec{M}\\cdot\\nabla)\\vec{B}$.",
	},
	{
		id: 12,
		text: "Which of the following statements concerning magnetic properties of materials is correct?",
		options: [
			"Diamagnetic materials possess permanent atomic magnetic dipole moments that align anti-parallel to the external field",
			"Superconductors exhibit perfect diamagnetism with magnetic susceptibility $\\chi = -1$ and relative permeability $\\mu_r = 0$",
			"The magnetic susceptibility of a paramagnetic substance is independent of temperature",
			"Ferromagnetic materials follow Curie's law $\\chi = C/T$ at all temperatures below their Curie point",
		],
		correctOption: 1,
		explanation:
			"Superconductors expel all interior magnetic field lines (the Meissner effect). For a perfect superconductor, inside $\\vec{B} = \\mu_0(\\vec{H} + \\vec{M}) = 0 \\implies \\vec{M} = -\\vec{H}$, which yields magnetic susceptibility $\\chi = \\frac{M}{H} = -1$ and relative permeability $\\mu_r = 1 + \\chi = 0$. Diamagnetic atoms have no permanent dipole moment; susceptibility of paramagnets follows Curie's law $\\chi \\propto 1/T$; and ferromagnets follow the Curie-Weiss law above the Curie point.",
	},
	{
		id: 13,
		text: "A uniform magnetic field is confined to a cylindrical region of radius $R$ and is directed perpendicularly into the plane of the paper. If the magnetic field magnitude increases at a constant rate $\\frac{dB}{dt} = \\alpha$, the magnitude of the induced electric field at a distance $r$ from the cylinder axis ($r > R$) is:",
		options: [
			"$\\frac{\\alpha r}{2}$",
			"$\\frac{\\alpha R}{2}$",
			"Zero",
			"$\\frac{\\alpha R^2}{2r}$",
		],
		correctOption: 3,
		explanation:
			"By Faraday's law of induction in integral form: $\\oint \\vec{E}\\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$. For a concentric circular path of radius $r > R$, the line integral is $E(2\\pi r)$. The total magnetic flux through this loop is restricted to the cylinder of radius $R$: $\\Phi_B = B(\\pi R^2)$. Thus, $\\frac{d\\Phi_B}{dt} = \\pi R^2 \\frac{dB}{dt} = \\pi R^2 \\alpha$. Equating magnitudes: $E(2\\pi r) = \\pi R^2 \\alpha \\implies E = \\frac{\\alpha R^2}{2r}$.",
	},
	{
		id: 14,
		text: "A conducting metal rod of mass $m$ and length $L$ can slide without friction on two long parallel horizontal conducting rails placed a distance $L$ apart in a uniform vertical upward magnetic field $B$. The rails are connected at one end through an ideal resistor $R$. If the rod is given an initial velocity $v_0$ directed away from the resistor at $t = 0$, the total distance $x_{\\infty}$ travelled by the rod before coming to rest is:",
		options: [
			"$\\frac{2m v_0 R}{B^2 L^2}$",
			"$\\frac{m v_0 R}{B^2 L^2}$",
			"$\\frac{m v_0^2 R}{2B^2 L^2}$",
			"$\\frac{m v_0 R}{2B L}$",
		],
		correctOption: 1,
		explanation:
			"At instantaneous velocity $v$, motional EMF is $\\mathcal{E} = B L v$, induced current is $I = \\frac{BLv}{R}$, and the magnetic retarding force is $F = I L B = \\frac{B^2 L^2 v}{R}$. The equation of motion is $m \\frac{dv}{dt} = -\\frac{B^2 L^2}{R}v \\implies m \\frac{dv}{dx} v = -\\frac{B^2 L^2}{R}v \\implies m dv = -\\frac{B^2 L^2}{R} dx$. Integrating from $v = v_0$ to $v = 0$: $m(0 - v_0) = -\\frac{B^2 L^2}{R} x_\\infty \\implies x_\\infty = \\frac{m v_0 R}{B^2 L^2}$.",
	},
	{
		id: 15,
		text: "A circuit contains an ideal inductor of inductance $L$ connected in series with a resistor of resistance $R$ and a battery of constant EMF $\\mathcal{E}$. The switch is closed at $t = 0$. The time at which the rate of energy dissipation as heat in the resistor equals the rate of energy storage in the magnetic field of the inductor is:",
		options: [
			"$\\frac{L}{2R}\\ln 2$",
			"$\\frac{L}{R}\\ln 3$",
			"$\\frac{L}{R}\\ln 2$",
			"$\\frac{2L}{R}\\ln 2$",
		],
		correctOption: 2,
		explanation:
			"Current growth: $I(t) = I_0(1 - e^{-t/\\tau})$ where $I_0 = \\frac{\\mathcal{E}}{R}$ and $\\tau = \\frac{L}{R}$. Rate of heat dissipation in resistor is $P_R = I^2 R$. Rate of magnetic energy storage is $P_L = \\frac{d}{dt}\\left(\\frac{1}{2}L I^2\\right) = L I \\frac{dI}{dt}$. Equating $P_R = P_L \\implies I^2 R = L I \\frac{dI}{dt} \\implies I R = L \\frac{dI}{dt}$. Since $L \\frac{dI}{dt} = \\mathcal{E} - I R$, we have $I R = \\mathcal{E} - I R \\implies I R = \\frac{\\mathcal{E}}{2} \\implies I(t) = \\frac{I_0}{2}$. Substituting into current formula: $1 - e^{-t/\\tau} = \\frac{1}{2} \\implies e^{-t/\\tau} = \\frac{1}{2} \\implies t = \\tau \\ln 2 = \\frac{L}{R}\\ln 2$.",
	},
];
