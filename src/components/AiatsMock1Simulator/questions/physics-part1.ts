import type { Question } from "#/components/CbtSimulator/types";

export const physicsPart1Questions: Question[] = [
	{
		id: 1,
		text: "A copper wire of length $L$ and radius $r$ has resistance $R$. If it is stretched uniformly such that its length increases by $0.2\\%$, the percentage increase in its resistance is:",
		options: ["$0.1\\%$", "$0.2\\%$", "$0.4\\%$", "$0.8\\%$"],
		correctOption: 2,
		explanation:
			"Volume remains constant during uniform stretching: $V = A L = \\text{constant} \\implies A = V/L$. Resistance $R = \\rho L/A = \\rho L^2/V$. For small fractional changes: $\\frac{\\Delta R}{R} \\approx 2 \\frac{\\Delta L}{L}$. Here $\\frac{\\Delta L}{L} = 0.2\\%$, hence $\\frac{\\Delta R}{R} = 2 \\times 0.2\\% = 0.4\\%$.",
	},
	{
		id: 2,
		text: "Two cells of emf $E_1 = 6\\text{ V}$ and $E_2 = 4\\text{ V}$ with internal resistances $r_1 = 1\\,\\Omega$ and $r_2 = 2\\,\\Omega$ respectively are connected in parallel with their like terminals connected together. The equivalent emf and equivalent internal resistance of the combination are:",
		options: [
			"$5.33\\text{ V}$ and $0.67\\,\\Omega$",
			"$5.00\\text{ V}$ and $1.50\\,\\Omega$",
			"$4.67\\text{ V}$ and $0.67\\,\\Omega$",
			"$5.33\\text{ V}$ and $3.00\\,\\Omega$",
		],
		correctOption: 0,
		explanation:
			"Equivalent internal resistance $r_{\\text{eq}} = \\frac{r_1 r_2}{r_1 + r_2} = \\frac{1 \\times 2}{1 + 2} = \\frac{2}{3}\\,\\Omega \\approx 0.67\\,\\Omega$. Equivalent emf $E_{\\text{eq}} = \\frac{\\frac{E_1}{r_1} + \\frac{E_2}{r_2}}{\\frac{1}{r_1} + \\frac{1}{r_2}} = \\frac{6/1 + 4/2}{1/1 + 1/2} = \\frac{8}{3/2} = \\frac{16}{3} \\approx 5.33\\text{ V}$.",
	},
	{
		id: 3,
		text: "In a metre bridge experiment, the null point is obtained at $40\\text{ cm}$ from the left end when a resistance of $3\\,\\Omega$ is placed in the left gap and an unknown resistance $X$ in the right gap. To shift the null point to $50\\text{ cm}$, the resistance that should be connected in parallel with $X$ is:",
		options: [
			"$9\\,\\Omega$",
			"$4.5\\,\\Omega$",
			"$6\\,\\Omega$",
			"$3\\,\\Omega$",
		],
		correctOption: 0,
		explanation:
			"Initially: $\\frac{R}{X} = \\frac{l_1}{100 - l_1} \\implies \\frac{3}{X} = \\frac{40}{60} = \\frac{2}{3} \\implies X = 4.5\\,\\Omega$. For null point at $50\\text{ cm}$, effective right gap resistance must equal left gap resistance $R' = 3\\,\\Omega$. Let $S$ be connected in parallel with $X$: $\\frac{X S}{X + S} = 3 \\implies \\frac{4.5 S}{4.5 + S} = 3 \\implies 4.5S = 13.5 + 3S \\implies 1.5S = 13.5 \\implies S = 9\\,\\Omega$.",
	},
	{
		id: 4,
		text: "A potentiometer wire of length $10\\text{ m}$ and resistance $20\\,\\Omega$ is connected in series with a battery of emf $5\\text{ V}$ and negligible internal resistance and a resistance $R$. If a potential gradient of $0.5\\text{ mV/cm}$ is required along the wire, the value of series resistance $R$ is:",
		options: [
			"$180\\,\\Omega$",
			"$200\\,\\Omega$",
			"$230\\,\\Omega$",
			"$250\\,\\Omega$",
		],
		correctOption: 0,
		explanation:
			"Required potential gradient $k = 0.5\\text{ mV/cm} = 0.05\\text{ V/m}$. Total potential drop across wire of length $10\\text{ m}$ is $V_w = k L = 0.05 \\times 10 = 0.5\\text{ V}$. Current in wire $I = \\frac{V_w}{R_w} = \\frac{0.5}{20} = 0.025\\text{ A}$. Total circuit resistance $\\frac{E}{I} = \\frac{5}{0.025} = 200\\,\\Omega$. Therefore $R = 200 - R_w = 200 - 20 = 180\\,\\Omega$.",
	},
	{
		id: 5,
		text: "Statement I: Drift velocity of electrons in a metallic conductor is inversely proportional to the relaxation time $\\tau$.\\nStatement II: When temperature of a metal increases, the amplitude of vibration of lattice ions increases, resulting in decreased relaxation time and increased resistivity.",
		options: [
			"Both Statement I and Statement II are correct",
			"Both Statement I and Statement II are incorrect",
			"Statement I is correct but Statement II is incorrect",
			"Statement I is incorrect but Statement II is correct",
		],
		correctOption: 3,
		explanation:
			"Drift velocity is given by $v_d = \\frac{e E \\tau}{m}$, which is directly proportional to relaxation time $\\tau$. Hence Statement I is incorrect. With increasing temperature, thermal vibrations of lattice ions increase, collisions become more frequent, so $\\tau$ decreases. Resistivity $\\rho = \\frac{m}{n e^2 \\tau}$ increases. Hence Statement II is correct.",
	},
	{
		id: 6,
		text: "Twelve identical wires, each of resistance $r$, are connected to form a skeleton cube. The equivalent resistance between two diagonally opposite body corners of the cube is:",
		options: [
			"$\\frac{5}{6}r$",
			"$\\frac{3}{4}r$",
			"$\\frac{7}{12}r$",
			"$\\frac{4}{3}r$",
		],
		correctOption: 0,
		explanation:
			"Let current $I$ enter at corner A and leave at opposite body diagonal corner B'. Due to 3-fold symmetry, current splits equally into 3 branches entering A ($I/3$ each), then each splits into 2 branches ($I/6$ each), and finally recombines into 3 branches ($I/3$ each) before leaving B'. Potential difference $V = \\frac{I}{3}r + \\frac{I}{6}r + \\frac{I}{3}r = I r \\left(\\frac{1}{3} + \\frac{1}{6} + \\frac{1}{3}\\right) = \\frac{5}{6} I r$. Hence $R_{\\text{eq}} = \\frac{5}{6}r$.",
	},
	{
		id: 7,
		text: "A carbon resistor has coloured rings in the order: Brown, Black, Orange, Silver. Its resistance value according to the colour code is:",
		options: [
			"$(10 \\pm 5\\%) \\times 10^3\\,\\Omega$",
			"$(10 \\pm 10\\%) \\times 10^3\\,\\Omega$",
			"$(1.0 \\pm 10\\%) \\times 10^3\\,\\Omega$",
			"$(20 \\pm 10\\%) \\times 10^3\\,\\Omega$",
		],
		correctOption: 1,
		explanation:
			"Colour code: Brown = 1, Black = 0, Orange = $10^3$ (multiplier), Silver = $\\pm 10\\%$ tolerance. Resistance $R = 10 \\times 10^3\\,\\Omega \\pm 10\\% = (10 \\pm 10\\%) \\times 10^3\\,\\Omega$.",
	},
	{
		id: 8,
		text: "An electric kettle has two heating coils. When one coil is used, water boils in $6\\text{ minutes}$. When the other coil is used, water boils in $12\\text{ minutes}$. If both coils are connected in parallel across the same source, the time taken to boil the same quantity of water will be:",
		options: [
			"$4\\text{ min}$",
			"$9\\text{ min}$",
			"$18\\text{ min}$",
			"$3\\text{ min}$",
		],
		correctOption: 0,
		explanation:
			"Heat required $H$ is constant: $H = \\frac{V^2}{R_1} t_1 = \\frac{V^2}{R_2} t_2$. When connected in parallel, $R_p = \\frac{R_1 R_2}{R_1 + R_2}$. Then $H = \\frac{V^2}{R_p} t_p \\implies \\frac{1}{t_p} = \\frac{1}{t_1} + \\frac{1}{t_2} = \\frac{1}{6} + \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4} \\implies t_p = 4\\text{ minutes}$.",
	},
	{
		id: 9,
		text: "Assertion (A): Manganin and constantan are standard materials used for making standard resistance coils.\\nReason (R): They possess high electrical resistivity and very small, nearly negligible temperature coefficient of resistance.",
		options: [
			"Both (A) and (R) are true and (R) is the correct explanation of (A)",
			"Both (A) and (R) are true but (R) is not the correct explanation of (A)",
			"(A) is true but (R) is false",
			"(A) is false but (R) is true",
		],
		correctOption: 0,
		explanation:
			"Standard resistance coils require resistance to remain invariant under ordinary temperature fluctuations and require compact physical size. Manganin and constantan satisfy both conditions due to high resistivity (compact length) and near-zero temperature coefficient of resistance $\\alpha$.",
	},
	{
		id: 10,
		text: "A galvanometer of resistance $50\\,\\Omega$ gives full scale deflection for a current of $2\\text{ mA}$. To convert it into a voltmeter reading up to $10\\text{ V}$, the required series resistance is:",
		options: [
			"$4950\\,\\Omega$",
			"$5000\\,\\Omega$",
			"$4900\\,\\Omega$",
			"$5050\\,\\Omega$",
		],
		correctOption: 0,
		explanation:
			"For conversion to voltmeter: $V = I_g (G + R) \\implies R = \\frac{V}{I_g} - G = \\frac{10}{2 \\times 10^{-3}} - 50 = 5000 - 50 = 4950\\,\\Omega$.",
	},
	{
		id: 11,
		text: "A non-uniform wire of varying cross-section carries a steady current. Along the direction of current flow in the wire, which of the following quantities remains constant?",
		options: ["Current density", "Electric field", "Drift velocity", "Current"],
		correctOption: 3,
		explanation:
			"For steady flow of charge, current $I$ through any cross-section is invariant by conservation of charge. Current density $j = I/A$, electric field $E = j/\\sigma$, and drift velocity $v_d = j/(n e)$ all vary inversely with cross-sectional area $A$.",
	},
	{
		id: 12,
		text: "In a potentiometer arrangement, a cell of emf $1.25\\text{ V}$ gives a balance point at $35.0\\text{ cm}$ length of the wire. If the cell is replaced by another cell and the balance point shifts to $63.0\\text{ cm}$, the emf of the second cell is:",
		options: [
			"$2.00\\text{ V}$",
			"$2.25\\text{ V}$",
			"$2.50\\text{ V}$",
			"$2.75\\text{ V}$",
		],
		correctOption: 1,
		explanation:
			"At null point with open external cell circuit, emf is proportional to balancing length: $\\frac{E_2}{E_1} = \\frac{l_2}{l_1} \\implies E_2 = E_1 \\times \\frac{l_2}{l_1} = 1.25 \\times \\frac{63.0}{35.0} = 1.25 \\times 1.8 = 2.25\\text{ V}$.",
	},
	{
		id: 13,
		text: "An electron and a proton having the same kinetic energy enter perpendicularly into a uniform magnetic field. If $r_e$ and $r_p$ are the radii of their circular paths, then:",
		options: [
			"$r_e = r_p$",
			"$r_e > r_p$",
			"$r_e < r_p$",
			"$r_e = \\sqrt{m_p/m_e}\\, r_p$",
		],
		correctOption: 2,
		explanation:
			"Radius of orbit in magnetic field: $r = \\frac{p}{q B} = \\frac{\\sqrt{2 m K}}{q B}$. Since $K$, $q$, and $B$ are identical for electron and proton: $r \\propto \\sqrt{m}$. Because $m_e \\ll m_p$, it follows that $r_e < r_p$.",
	},
	{
		id: 14,
		text: "A long straight wire carrying a current of $30\\text{ A}$ is placed along the z-axis. The magnetic field at a point $(3\\text{ cm}, 4\\text{ cm}, 0)$ is:",
		options: [
			"$1.2 \\times 10^{-4}\\text{ T}$",
			"$0.8 \\times 10^{-4}\\text{ T}$",
			"$1.5 \\times 10^{-4}\\text{ T}$",
			"$2.0 \\times 10^{-4}\\text{ T}$",
		],
		correctOption: 0,
		explanation:
			"Distance from z-axis to $(3, 4, 0)$ is $d = \\sqrt{3^2 + 4^2} = 5\\text{ cm} = 0.05\\text{ m}$. Magnetic field due to infinitely long straight wire: $B = \\frac{\\mu_0 I}{2\\pi d} = \\frac{4\\pi \\times 10^{-7} \\times 30}{2\\pi \\times 0.05} = \\frac{2 \\times 10^{-7} \\times 30}{0.05} = 1.2 \\times 10^{-4}\\text{ T}$.",
	},
	{
		id: 15,
		text: "A circular coil of radius $R$ carries an electric current $I$. The magnetic field on its axis at a distance $x = \\sqrt{3}R$ from its centre is related to the magnetic field at its centre $B_0$ by:",
		options: [
			"$B = \\frac{B_0}{8}$",
			"$B = \\frac{B_0}{4}$",
			"$B = \\frac{B_0}{2}$",
			"$B = \\frac{B_0}{16}$",
		],
		correctOption: 0,
		explanation:
			"Axial magnetic field: $B_{\\text{axis}} = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$. Central field: $B_0 = \\frac{\\mu_0 I}{2R}$. For $x = \\sqrt{3}R$, $R^2 + x^2 = 4R^2$, so $(R^2 + x^2)^{3/2} = (4R^2)^{3/2} = 8R^3$. Thus $B_{\\text{axis}} = \\frac{\\mu_0 I R^2}{2 \\times 8R^3} = \\frac{1}{8}\\left(\\frac{\\mu_0 I}{2R}\\right) = \\frac{B_0}{8}$.",
	},
	{
		id: 16,
		text: "Two parallel long straight conductors separated by $10\\text{ cm}$ carry currents $I_1 = 5\\text{ A}$ and $I_2 = 10\\text{ A}$ in opposite directions. The force per unit length acting between them is:",
		options: [
			"$1.0 \\times 10^{-4}\\text{ N/m}$, attractive",
			"$1.0 \\times 10^{-4}\\text{ N/m}$, repulsive",
			"$2.0 \\times 10^{-4}\\text{ N/m}$, attractive",
			"$2.0 \\times 10^{-4}\\text{ N/m}$, repulsive",
		],
		correctOption: 1,
		explanation:
			"Force per unit length $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = \\frac{4\\pi \\times 10^{-7} \\times 5 \\times 10}{2\\pi \\times 0.10} = \\frac{2 \\times 10^{-7} \\times 50}{0.10} = 1.0 \\times 10^{-4}\\text{ N/m}$. Antiparallel currents repel each other.",
	},
	{
		id: 17,
		text: "A square loop of side $a$ carries a current $I$. The magnetic field induction at the geometric centre of the square loop is:",
		options: [
			"$\\frac{2\\sqrt{2}\\,\\mu_0 I}{\\pi a}$",
			"$\\frac{\\sqrt{2}\\,\\mu_0 I}{\\pi a}$",
			"$\\frac{\\mu_0 I}{2\\pi a}$",
			"$\\frac{4\\sqrt{2}\\,\\mu_0 I}{\\pi a}$",
		],
		correctOption: 0,
		explanation:
			"Distance from centre to each side is $d = a/2$. Angles subtended by ends of each side are $\\theta_1 = \\theta_2 = 45^\\circ$. Field due to one side: $B_1 = \\frac{\\mu_0 I}{4\\pi (a/2)} [\\sin 45^\\circ + \\sin 45^\\circ] = \\frac{\\mu_0 I}{2\\pi a} \\times \\frac{2}{\\sqrt{2}} = \\frac{\\sqrt{2}\\,\\mu_0 I}{2\\pi a}$. All four sides contribute fields in the same direction: $B_{\\text{total}} = 4 B_1 = 4 \\times \\frac{\\sqrt{2}\\,\\mu_0 I}{2\\pi a} = \\frac{2\\sqrt{2}\\,\\mu_0 I}{\\pi a}$.",
	},
	{
		id: 18,
		text: "In a cyclotron, the resonance frequency of accelerating electric field does not depend on:",
		options: [
			"Magnetic field magnitude",
			"Specific charge of particle",
			"Radius of the dees",
			"Charge of accelerated particle",
		],
		correctOption: 2,
		explanation:
			"Cyclotron frequency is $\\nu_c = \\frac{q B}{2\\pi m}$. It depends on magnetic field $B$, particle charge $q$, and mass $m$ (specific charge $q/m$), but is strictly independent of particle orbital radius and kinetic energy (in the non-relativistic regime).",
	},
	{
		id: 19,
		text: "A galvanometer coil has resistance $25\\,\\Omega$ and gives a full scale deflection for $10\\text{ mA}$. To convert it into an ammeter capable of measuring currents up to $5\\text{ A}$, the required shunt resistance is:",
		options: [
			"$\\approx 0.050\\,\\Omega$",
			"$\\approx 0.025\\,\\Omega$",
			"$\\approx 0.100\\,\\Omega$",
			"$\\approx 0.500\\,\\Omega$",
		],
		correctOption: 0,
		explanation:
			"Shunt resistance $S = \\frac{I_g G}{I - I_g} = \\frac{0.010 \\times 25}{5 - 0.010} = \\frac{0.25}{4.99} \\approx 0.0501\\,\\Omega$.",
	},
	{
		id: 20,
		text: "A helical coil (solenoid) carrying current $I$ contracts along its length. The primary reason for this contraction is:",
		options: [
			"Adjacent turns carry antiparallel currents and repel each other",
			"Adjacent turns carry parallel currents in the same direction and attract each other",
			"Electrostatic forces between like charges on adjacent turns",
			"Induced eddy currents resisting the magnetic flux",
		],
		correctOption: 1,
		explanation:
			"In a current-carrying solenoid, electric current flows in the same direction in all adjacent circular loops. Parallel currents flowing in the same direction attract each other magnetically, causing mutual attraction between consecutive turns and axial contraction of the solenoid.",
	},
	{
		id: 21,
		text: "Statement I: A charged particle moving in a uniform magnetic field experiences no change in its kinetic energy.\\nStatement II: The magnetic Lorentz force $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ is always perpendicular to instantaneous velocity vector $\\vec{v}$, so magnetic power delivered is zero.",
		options: [
			"Both Statement I and Statement II are correct",
			"Both Statement I and Statement II are incorrect",
			"Statement I is correct but Statement II is incorrect",
			"Statement I is incorrect but Statement II is correct",
		],
		correctOption: 0,
		explanation:
			"Lorentz magnetic force is $\\vec{F} = q(\\vec{v} \\times \\vec{B})$. Power $P = \\vec{F} \\cdot \\vec{v} = q(\\vec{v} \\times \\vec{B}) \\cdot \\vec{v} = 0$, because $(\\vec{v} \\times \\vec{B}) \\perp \\vec{v}$. By the work-energy theorem, $W = \\Delta K = 0$, meaning speed and kinetic energy remain constant.",
	},
	{
		id: 22,
		text: "A current loop of magnetic moment $\\vec{M}$ is placed in a uniform magnetic field $\\vec{B}$. The work done in rotating the loop from stable equilibrium position to unstable equilibrium position is:",
		options: ["$0$", "$M B$", "$2 M B$", "$-2 M B$"],
		correctOption: 2,
		explanation:
			"Potential energy of magnetic dipole is $U(\\theta) = -M B \\cos\\theta$. Stable equilibrium occurs when $\\vec{M} \\parallel \\vec{B}$ ($\\theta_1 = 0^\\circ \\implies U_1 = -MB$). Unstable equilibrium occurs when $\\vec{M}$ is antiparallel to $\\vec{B}$ ($\\theta_2 = 180^\\circ \\implies U_2 = +MB$). Work done by external agent $W_{\\text{ext}} = U_2 - U_1 = MB - (-MB) = 2MB$.",
	},
	{
		id: 23,
		text: "A particle of charge $q$ and mass $m$ is projected with velocity $\\vec{v} = v_0\\hat{i} + v_0\\hat{k}$ in a magnetic field $\\vec{B} = B_0\\hat{k}$. The pitch of the resulting helical path is:",
		options: [
			"$\\frac{2\\pi m v_0}{q B_0}$",
			"$\\frac{\\pi m v_0}{q B_0}$",
			"$\\frac{4\\pi m v_0}{q B_0}$",
			"$\\frac{\\sqrt{2}\\pi m v_0}{q B_0}$",
		],
		correctOption: 0,
		explanation:
			"Velocity component parallel to $\\vec{B}$ is $v_{\\parallel} = v_0$. Velocity perpendicular to $\\vec{B}$ is $v_{\\perp} = v_0$. Time period of circular motion $T = \\frac{2\\pi m}{q B_0}$. Pitch of helix is the linear distance traversed along field in one period: $p = v_{\\parallel} T = v_0 \\left(\\frac{2\\pi m}{q B_0}\\right) = \\frac{2\\pi m v_0}{q B_0}$.",
	},
];
