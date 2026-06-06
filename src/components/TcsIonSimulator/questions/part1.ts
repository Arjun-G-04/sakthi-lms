export interface Question {
	id: number;
	text: string;
	options: string[];
	correctOption: number; // 0-indexed: 0=A, 1=B, 2=C, 3=D
	explanation: string;
	svgDiagram?: string;
}

export const questionsPart1: Question[] = [
	{
		id: 1,
		text: "A particle is executing Simple Harmonic Motion (SHM) of amplitude $A$ and angular frequency $\\omega$. At time $t = 0$, the particle is at $x = +A/2$ and moving towards the mean position. The equation of motion of this particle is given by:",
		options: [
			"$x(t) = A \\sin(\\omega t + \\pi/6)$",
			"$x(t) = A \\sin(\\omega t + 5\\pi/6)$",
			"$x(t) = A \\cos(\\omega t + \\pi/3)$",
			"$x(t) = A \\cos(\\omega t - \\pi/3)$",
		],
		correctOption: 1,
		explanation:
			"The general equation of SHM is:\n$$x(t) = A \\sin(\\omega t + \\phi)$$\nAt $t = 0$, we have:\n$$x(0) = A \\sin(\\phi) = \\frac{A}{2} \\implies \\sin(\\phi) = \\frac{1}{2}$$\nThus, $\\phi$ can be $\\pi/6$ or $5\\pi/6$ within the first cycle.\n\nThe velocity of the particle is given by:\n$$v(t) = \\frac{dx}{dt} = A\\omega \\cos(\\omega t + \\phi)$$\nAt $t = 0$, the initial velocity is:\n$$v(0) = A\\omega \\cos(\\phi)$$\nSince the particle is at $x = +A/2$ and moving towards the mean position ($x=0$), its velocity must be negative ($v(0) < 0$).\n* For $\\phi = \\pi/6$: $v(0) = A\\omega \\cos(\\pi/6) = A\\omega \\frac{\\sqrt{3}}{2} > 0$ (moving away from the mean position).\n* For $\\phi = 5\\pi/6$: $v(0) = A\\omega \\cos(5\\pi/6) = -A\\omega \\frac{\\sqrt{3}}{2} < 0$ (moving towards the mean position).\n\nTherefore, the phase constant must be $\\phi = 5\\pi/6$, yielding the equation:\n$$x(t) = A \\sin(\\omega t + 5\\pi/6)$$",
	},
	{
		id: 2,
		text: "A particle executes SHM. Its maximum velocity is $v_{\\text{max}}$ and its maximum acceleration is $a_{\\text{max}}$. The time period of its oscillation is:",
		options: [
			"$2\\pi \\left(\\frac{v_{\\text{max}}}{a_{\\text{max}}}\\right)$",
			"$2\\pi \\left(\\frac{a_{\\text{max}}}{v_{\\text{max}}}\\right)$",
			"$2\\pi \\sqrt{\\frac{v_{\\text{max}}}{a_{\\text{max}}}}$",
			"$2\\pi \\sqrt{\\frac{a_{\\text{max}}}{v_{\\text{max}}}}$",
		],
		correctOption: 0,
		explanation:
			"For a particle in SHM with amplitude $A$ and angular frequency $\\omega$:\n* Maximum velocity: $v_{\\text{max}} = A\\omega$\n* Maximum acceleration: $a_{\\text{max}} = A\\omega^2$\n\nDividing maximum velocity by maximum acceleration gives:\n$$\\frac{v_{\\text{max}}}{a_{\\text{max}}} = \\frac{A\\omega}{A\\omega^2} = \\frac{1}{\\omega}$$\nSince angular frequency is related to the time period by $\\omega = \\frac{2\\pi}{T}$, we have:\n$$\\frac{1}{\\omega} = \\frac{T}{2\\pi} \\implies T = 2\\pi \\left(\\frac{v_{\\text{max}}}{a_{\\text{max}}}\\right)$$",
	},
	{
		id: 3,
		text: "A particle executing SHM has a potential energy $U(x)$ and kinetic energy $K(x)$ at any displacement $x$. The ratio of kinetic energy to potential energy of the particle at a displacement equal to one-third of its amplitude ($x = A/3$) is:",
		options: ["$1 : 8$", "$8 : 1$", "$1 : 9$", "$9 : 1$"],
		correctOption: 1,
		explanation:
			"The potential energy $U$ and kinetic energy $K$ of a particle in SHM at displacement $x$ are:\n$$U = \\frac{1}{2} k x^2$$\n$$K = \\frac{1}{2} k (A^2 - x^2)$$\n\nSubstituting $x = A/3$:\n$$U = \\frac{1}{2} k \\left(\\frac{A}{3}\\right)^2 = \\frac{1}{2} k \\frac{A^2}{9}$$\n$$K = \\frac{1}{2} k \\left(A^2 - \\left(\\frac{A}{3}\\right)^2\\right) = \\frac{1}{2} k \\left(\\frac{8A^2}{9}\\right)$$\n\nTaking the ratio of kinetic energy to potential energy:\n$$\\frac{K}{U} = \\frac{\\frac{1}{2} k \\left(\\frac{8A^2}{9}\\right)}{\\frac{1}{2} k \\left(\\frac{A^2}{9}\\right)} = \\frac{8}{1} = 8 : 1$$",
	},
	{
		id: 4,
		text: "A body of mass $m = 0.5\\text{ kg}$ is attached to a horizontal spring of force constant $k = 200\\text{ N/m}$. The body is pulled a distance of $10\\text{ cm}$ from its equilibrium position and released. Find the positions $x$ (measured from equilibrium) where its kinetic energy is exactly equal to three times its potential energy.",
		options: [
			"$\\pm 5\\text{ cm}$",
			"$\\pm 2.5\\text{ cm}$",
			"$\\pm 7.07\\text{ cm}$",
			"$\\pm 8.66\\text{ cm}$",
		],
		correctOption: 0,
		explanation:
			"Given amplitude $A = 10\\text{ cm}$. We are looking for the positions $x$ where $K = 3U$.\n\nThe total mechanical energy $E$ is conserved:\n$$E = K + U = 3U + U = 4U$$\nWe know $U = \\frac{1}{2} k x^2$ and $E = \\frac{1}{2} k A^2$. Substituting these in:\n$$\\frac{1}{2} k A^2 = 4 \\left(\\frac{1}{2} k x^2\\right) \\implies A^2 = 4x^2$$\n$$x = \\pm \\frac{A}{2}$$\n\nSubstituting $A = 10\\text{ cm}$:\n$$x = \\pm \\frac{10\\text{ cm}}{2} = \\pm 5\\text{ cm}$$",
	},
	{
		id: 5,
		text: "A simple pendulum of length $L$ has a brass bob of density $\\rho$. The pendulum is suspended in a large container filled with a liquid of density $d$ (where $d < \\rho$). The time period of this pendulum in the liquid is $T'$, while its time period in air is $T$. The ratio $T'/T$ is given by:",
		options: [
			"$\\sqrt{\\frac{\\rho}{\\rho - d}}$",
			"$\\sqrt{\\frac{\\rho - d}{\\rho}}$",
			"$\\frac{\\rho}{\\rho - d}$",
			"$\\frac{\\rho - d}{\\rho}$",
		],
		correctOption: 0,
		explanation:
			"In air, the time period of a simple pendulum is:\n$$T = 2\\pi \\sqrt{\\frac{L}{g}}$$\nWhen submerged in a liquid of density $d$, the bob experiences a downward gravitational force $F_g = mg$ and an upward buoyant force $F_b = V d g$.\nSince mass $m = V \\rho$, the volume is $V = m/\\rho$, giving:\n$$F_b = \\left(\\frac{m}{\\rho}\\right) d g = mg \\left(\\frac{d}{\\rho}\\right)$$\nThe net downward force in the liquid is:\n$$F_{\\text{net}} = F_g - F_b = mg - mg \\left(\\frac{d}{\\rho}\\right) = mg \\left(1 - \\frac{d}{\\rho}\\right) = mg \\left(\\frac{\\rho - d}{\\rho}\\right)$$\nThus, the effective acceleration due to gravity is:\n$$g' = \\frac{F_{\\text{net}}}{m} = g \\left(\\frac{\\rho - d}{\\rho}\\right)$$\nThe new time period in liquid is $T' = 2\\pi \\sqrt{L/g'}$. Taking the ratio:\n$$\\frac{T'}{T} = \\sqrt{\\frac{g}{g'}} = \\sqrt{\\frac{\\rho}{\\rho - d}}$$",
	},
	{
		id: 6,
		text: "A simple pendulum of length $L$ is suspended from the ceiling of a lift. When the lift is at rest, the time period of the pendulum is $T$. If the lift accelerates vertically upwards with a constant acceleration equal to $g/3$, the new time period of the pendulum becomes:",
		options: [
			"$\\frac{T}{\\sqrt{3}}$",
			"$\\sqrt{\\frac{3}{4}} T$",
			"$\\sqrt{\\frac{4}{3}} T$",
			"$\\sqrt{3} T$",
		],
		correctOption: 1,
		explanation:
			"At rest, $T = 2\\pi \\sqrt{\\frac{L}{g}}$.\nWhen the lift accelerates upwards with $a = g/3$, a pseudo force acts downwards on the bob. The effective acceleration due to gravity is:\n$$g_{\\text{eff}} = g + a = g + \\frac{g}{3} = \\frac{4g}{3}$$\nThe new time period is:\n$$T' = 2\\pi \\sqrt{\\frac{L}{g_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{L}{\\frac{4g}{3}}} = \\sqrt{\\frac{3}{4}} \\left(2\\pi \\sqrt{\\frac{L}{g}}\\right) = \\sqrt{\\frac{3}{4}} T$$",
	},
	{
		id: 7,
		text: "A mass $m$ is suspended from a combination of two identical springs of spring constant $k$. When connected in parallel, the time period of vertical oscillation is $T_p$. When connected in series, the time period is $T_s$. The ratio $T_s / T_p$ is:",
		options: ["$1 : 2$", "$2 : 1$", "$1 : \\sqrt{2}$", "$\\sqrt{2} : 1$"],
		correctOption: 1,
		explanation:
			"1. **Parallel combination**: The effective spring constant is $k_p = k + k = 2k$. The time period is:\n$$T_p = 2\\pi \\sqrt{\\frac{m}{2k}}$$\n2. **Series combination**: The effective spring constant is $\\frac{1}{k_s} = \\frac{1}{k} + \\frac{1}{k} = \\frac{2}{k} \\implies k_s = \\frac{k}{2}$. The time period is:\n$$T_s = 2\\pi \\sqrt{\\frac{m}{k/2}} = 2\\pi \\sqrt{\\frac{2m}{k}}$$\n\nTaking the ratio of the time periods:\n$$\\frac{T_s}{T_p} = \\frac{2\\pi \\sqrt{\\frac{2m}{k}}}{2\\pi \\sqrt{\\frac{m}{2k}}} = \\sqrt{\\frac{2}{1/2}} = \\sqrt{4} = 2 = 2 : 1$$",
	},
	{
		id: 8,
		text: "A block of mass $m$ is placed on a smooth horizontal surface and connected between two springs of force constants $k_1$ and $k_2$ as shown in the diagram. The block is displaced slightly to one side and released. What is the time period of oscillation?",
		options: [
			"$2\\pi \\sqrt{\\frac{m}{k_1 + k_2}}$",
			"$2\\pi \\sqrt{\\frac{m(k_1 + k_2)}{k_1 k_2}}$",
			"$2\\pi \\sqrt{\\frac{m}{|k_1 - k_2|}}$",
			"$2\\pi \\sqrt{\\frac{m k_1 k_2}{k_1 + k_2}}$",
		],
		correctOption: 0,
		explanation:
			"When the block of mass $m$ is displaced to the right by a small distance $x$:\n* The left spring is stretched by $x$, pulling the block to the left with force $F_1 = -k_1 x$.\n* The right spring is compressed by $x$, pushing the block to the left with force $F_2 = -k_2 x$.\n\nThe net restoring force acting on the block is:\n$$F = F_1 + F_2 = -k_1 x - k_2 x = -(k_1 + k_2) x$$\nThis equation matches the harmonic form $F = -k_{\\text{eff}} x$, where the effective force constant is:\n$$k_{\\text{eff}} = k_1 + k_2$$\nThis behaves like a parallel spring system. The resulting time period of vertical/horizontal oscillations is:\n$$T = 2\\pi \\sqrt{\\frac{m}{k_1 + k_2}}$$",
		svgDiagram: `<svg width="220" height="80" viewBox="0 0 220 80" class="mx-auto my-2" role="img" aria-label="Horizontal block connected between two springs on opposite walls">
  <title>Spring Block System</title>
  <!-- Left Wall -->
  <line x1="10" y1="10" x2="10" y2="70" stroke="#1a2840" stroke-width="4" />
  <line x1="10" y1="10" x2="5" y2="15" stroke="#1a2840" stroke-width="1.5" />
  <line x1="10" y1="20" x2="5" y2="25" stroke="#1a2840" stroke-width="1.5" />
  <line x1="10" y1="30" x2="5" y2="35" stroke="#1a2840" stroke-width="1.5" />
  <line x1="10" y1="40" x2="5" y2="45" stroke="#1a2840" stroke-width="1.5" />
  <line x1="10" y1="50" x2="5" y2="55" stroke="#1a2840" stroke-width="1.5" />
  <line x1="10" y1="60" x2="5" y2="65" stroke="#1a2840" stroke-width="1.5" />
  <!-- Right Wall -->
  <line x1="210" y1="10" x2="210" y2="70" stroke="#1a2840" stroke-width="4" />
  <line x1="210" y1="10" x2="215" y2="15" stroke="#1a2840" stroke-width="1.5" />
  <line x1="210" y1="20" x2="215" y2="25" stroke="#1a2840" stroke-width="1.5" />
  <line x1="210" y1="30" x2="215" y2="35" stroke="#1a2840" stroke-width="1.5" />
  <line x1="210" y1="40" x2="215" y2="45" stroke="#1a2840" stroke-width="1.5" />
  <line x1="210" y1="50" x2="215" y2="55" stroke="#1a2840" stroke-width="1.5" />
  <line x1="210" y1="60" x2="215" y2="65" stroke="#1a2840" stroke-width="1.5" />
  <!-- Ground -->
  <line x1="10" y1="70" x2="210" y2="70" stroke="#1a2840" stroke-width="2" />
  <!-- Block -->
  <rect x="95" y="30" width="30" height="30" fill="#fdfaf4" stroke="#1a2840" stroke-width="2" />
  <text x="106" y="48" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1a2840">m</text>
  <!-- Left Spring (k1) -->
  <path d="M10,45 L25,45 L30,35 L38,55 L46,35 L54,55 L62,35 L70,55 L78,35 L86,55 L91,45 L95,45" fill="none" stroke="#b8872a" stroke-width="2" />
  <text x="45" y="25" font-family="sans-serif" font-size="10" fill="#b8872a">k₁</text>
  <!-- Right Spring (k2) -->
  <path d="M125,45 L130,45 L135,35 L143,55 L151,35 L159,55 L167,35 L175,55 L183,35 L191,55 L196,45 L210,45" fill="none" stroke="#2d5a3d" stroke-width="2" />
  <text x="160" y="25" font-family="sans-serif" font-size="10" fill="#2d5a3d">k₂</text>
</svg>`,
	},
	{
		id: 9,
		text: "A spring of force constant $k$ is cut into two parts whose lengths are in the ratio $1:3$. The spring constant of the shorter part is:",
		options: ["$k / 4$", "$4k / 3$", "$3k$", "$4k$"],
		correctOption: 3,
		explanation:
			"The spring constant $k$ of a spring is inversely proportional to its length $L$ ($k \\propto 1/L$).\n\nLet the original spring have length $L$. It is cut in the ratio $1:3$, meaning the two parts have lengths:\n$$L_1 = \\frac{1}{4} L \\quad (\\text{shorter part})$$\n$$L_2 = \\frac{3}{4} L \\quad (\\text{longer part})$$\n\nSince $k_1 L_1 = k L$:\n$$k_1 \\left(\\frac{L}{4}\\right) = k L \\implies k_1 = 4k$$\nTherefore, the spring constant of the shorter part is $4k$.",
	},
	{
		id: 10,
		text: "The acceleration-displacement ($a-x$) graph of a particle executing simple harmonic motion is a:",
		options: [
			"Straight line with positive slope passing through the origin",
			"Straight line with negative slope passing through the origin",
			"Parabola passing through the origin",
			"Circle centered at the origin",
		],
		correctOption: 1,
		explanation:
			"For a particle executing SHM, its acceleration $a$ is related to its displacement $x$ by:\n$$a = -\\omega^2 x$$\nComparing this with the equation of a straight line $y = mx + c$, we get:\n$$y = a, \\quad x = x, \\quad c = 0, \\quad m = -\\omega^2$$\nSince the slope $m = -\\omega^2$ is negative and there is no y-intercept ($c = 0$), the graph is a straight line with a negative slope passing through the origin.",
	},
	{
		id: 11,
		text: "The displacement of a particle executing SHM is given by $y = 3 \\sin(100t) + 4 \\cos(100t)$ (where $y$ is in cm and $t$ is in seconds). The amplitude of the oscillation is:",
		options: [
			"$5\\text{ cm}$",
			"$7\\text{ cm}$",
			"$1\\text{ cm}$",
			"$12\\text{ cm}$",
		],
		correctOption: 0,
		explanation:
			"The given equation of motion is of the form $y = A_1 \\sin(\\omega t) + A_2 \\cos(\\omega t)$, where $A_1 = 3\\text{ cm}$, $A_2 = 4\\text{ cm}$, and $\\omega = 100\\text{ rad/s}$.\n\nThis is the superposition of two orthogonal SHMs. The resultant amplitude $A$ is given by:\n$$A = \\sqrt{A_1^2 + A_2^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ cm}$$",
	},
	{
		id: 12,
		text: "A simple pendulum of length $L$ has a time period $T$. If the mass of the bob is doubled, and its length is halved, the new time period of the pendulum will be:",
		options: ["$T$", "$T / \\sqrt{2}$", "$\\sqrt{2} T$", "$2 T$"],
		correctOption: 1,
		explanation:
			"The time period of a simple pendulum is given by:\n$$T = 2\\pi \\sqrt{\\frac{L}{g}}$$\nThis formula shows that the time period depends only on the length $L$ and the local gravitational field $g$. It is completely independent of the mass $m$ of the bob.\n\nIf the length $L$ is halved ($L' = L/2$):\n$$T' = 2\\pi \\sqrt{\\frac{L'}{g}} = 2\\pi \\sqrt{\\frac{L/2}{g}} = \\frac{1}{\\sqrt{2}} \\left(2\\pi \\sqrt{\\frac{L}{g}}\\right) = \\frac{T}{\\sqrt{2}}$$\nChanging the mass of the bob has no effect.",
	},
	{
		id: 13,
		text: "The total mechanical energy of a particle executing simple harmonic motion of amplitude $A$ is $E$. When the displacement of the particle is half of its amplitude ($x = A/2$), its kinetic energy is:",
		options: ["$E / 4$", "$E / 2$", "$3E / 4$", "$\\sqrt{3}E / 2$"],
		correctOption: 2,
		explanation:
			"The total mechanical energy is $E = \\frac{1}{2} m \\omega^2 A^2$.\nThe kinetic energy at displacement $x$ is:\n$$K = \\frac{1}{2} m \\omega^2 (A^2 - x^2)$$\n\nSubstituting $x = A/2$:\n$$K = \\frac{1}{2} m \\omega^2 \\left(A^2 - \\left(\\frac{A}{2}\\right)^2\\right) = \\frac{1}{2} m \\omega^2 \\left(\\frac{3A^2}{4}\\right) = \\frac{3}{4} \\left(\\frac{1}{2} m \\omega^2 A^2\\right) = \\frac{3}{4} E$$",
	},
	{
		id: 14,
		text: "A simple pendulum of length $L$ is suspended inside a satellite orbiting the Earth. Its time period of oscillation inside the satellite will be:",
		options: [
			"Zero",
			"$T = 2\\pi \\sqrt{L/g}$",
			"Infinite",
			"Dependent on the orbit radius of the satellite",
		],
		correctOption: 2,
		explanation:
			"Inside an orbiting satellite, there is a state of weightlessness (the gravitational pull is exactly balanced by the centrifugal force in the satellite's reference frame).\n\nAs a result, the effective acceleration due to gravity is $g_{\\text{eff}} = 0$.\nThe time period of a simple pendulum is given by:\n$$T = 2\\pi \\sqrt{\\frac{L}{g_{\\text{eff}}}}$$\nSince $g_{\\text{eff}} = 0$, the time period becomes:\n$$T = 2\\pi \\sqrt{\\frac{L}{0}} = \\infty$$\nThe pendulum does not swing because there is no gravity to provide a restoring torque.",
	},
	{
		id: 15,
		text: "A cylinder of mass $M$ and cross-sectional area $A$ floats vertically in a liquid of density $d$. If it is pressed down slightly and released, it performs vertical SHM. The time period of its oscillation is:",
		options: [
			"$2\\pi \\sqrt{\\frac{M}{Adg}}$",
			"$2\\pi \\sqrt{\\frac{Adg}{M}}$",
			"$2\\pi \\sqrt{\\frac{M}{Ag}}$",
			"$2\\pi \\sqrt{\\frac{Mg}{Ad}}$",
		],
		correctOption: 0,
		explanation:
			"In equilibrium, the weight of the cylinder is balanced by the buoyancy force:\n$$Mg = A h d g \\implies M = A h d$$\nwhere $h$ is the submerged depth.\n\nWhen pressed down by a small distance $x$, the cylinder experiences an upward buoyant restoring force:\n$$F = -(\\text{additional volume submerged}) \\cdot d \\cdot g = -A x d g = -(Adg) x$$\nComparing this with $F = -kx$, the effective force constant is $k_{\\text{eff}} = Adg$.\n\nThe time period of oscillation is:\n$$T = 2\\pi \\sqrt{\\frac{M}{k_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{M}{Adg}}$$",
	},
	{
		id: 16,
		text: "A U-tube of uniform cross-section contains a liquid column of mass $M$ and total length $H$. If the liquid on one side is depressed by a small distance $x$ and released, the liquid column oscillates simple harmonically. The time period of oscillation of the liquid column is:",
		options: [
			"$2\\pi \\sqrt{\\frac{H}{g}}$",
			"$2\\pi \\sqrt{\\frac{H}{2g}}$",
			"$2\\pi \\sqrt{\\frac{2H}{g}}$",
			"$2\\pi \\sqrt{\\frac{Mg}{H}}$",
		],
		correctOption: 1,
		explanation:
			"Let the liquid have density $\\rho$ and cross-sectional area $A$. The mass is $M = A H \\rho$.\n\nWhen the liquid is depressed by $x$ in one limb, it rises by $x$ in the other, creating a height difference of $2x$.\nThis column difference exerts a restoring force:\n$$F = -\\text{weight of excess liquid column} = -(2x \\cdot A \\cdot \\rho) \\cdot g = -(2A\\rho g) x$$\nComparing this with $F = -kx$, the effective force constant is $k_{\\text{eff}} = 2A\\rho g$.\n\nThe time period is:\n$$T = 2\\pi \\sqrt{\\frac{M}{k_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{A H \\rho}{2 A \\rho g}} = 2\\pi \\sqrt{\\frac{H}{2g}}$$",
	},
	{
		id: 17,
		text: "A tunnel is dug along the diameter of the Earth. A body of mass $m$ is dropped into the tunnel. Neglecting friction and air resistance, the body will execute SHM. The time period of this oscillation is (where $R$ is the radius of the Earth and $g$ is gravity at the surface):",
		options: [
			"$2\\pi \\sqrt{\\frac{R}{g}}$",
			"$2\\pi \\sqrt{\\frac{2R}{g}}$",
			"$2\\pi \\sqrt{\\frac{R}{2g}}$",
			"Infinite",
		],
		correctOption: 0,
		explanation:
			"The gravitational force on a mass $m$ at distance $r$ from the Earth's center ($r < R$) is:\n$$F = -\\frac{G M_e m}{R^3} r = -\\frac{mg}{R} r$$\nsince $g = \\frac{G M_e}{R^2}$.\n\nBecause the restoring force is directly proportional to displacement $r$, the mass executes SHM with force constant $k_{\\text{eff}} = \\frac{mg}{R}$.\nThe time period of oscillation is:\n$$T = 2\\pi \\sqrt{\\frac{m}{k_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{m}{mg/R}} = 2\\pi \\sqrt{\\frac{R}{g}}$$\nFor $R \\approx 6400\\text{ km}$ and $g = 9.8\\text{ m/s}^2$, this gives $T \\approx 84.6\\text{ minutes}$.",
	},
	{
		id: 18,
		text: "A particle executes SHM with a time period $T$. The time taken by the particle to go directly from its mean position to a point at a displacement equal to half of its amplitude ($x = A/2$) is:",
		options: ["$T / 4$", "$T / 8$", "$T / 12$", "$T / 6$"],
		correctOption: 2,
		explanation:
			"Let the displacement be $x(t) = A \\sin(\\omega t)$, where $\\omega = \\frac{2\\pi}{T}$.\nThe particle starts from the mean position ($x = 0$) at $t = 0$.\n\nSetting $x(t) = A/2$:\n$$\\frac{A}{2} = A \\sin(\\omega t) \\implies \\sin(\\omega t) = \\frac{1}{2}$$\nThe minimum time corresponding to this phase angle is:\n$$\\omega t = \\frac{\\pi}{6}$$\nSubstituting $\\omega = \\frac{2\\pi}{T}$:\n$$\\left(\\frac{2\\pi}{T}\\right) t = \\frac{\\pi}{6} \\implies t = \\frac{T}{12}$$$",
	},
	{
		id: 19,
		text: "A particle executes SHM with a time period $T$. The time taken by the particle to go directly from $x = A/2$ to the positive extreme position $x = A$ is:",
		options: ["$T / 12$", "$T / 6$", "$T / 8$", "$T / 4$"],
		correctOption: 1,
		explanation:
			"The time taken to travel from the mean position ($x=0$) to the positive extreme position ($x=A$) is:\n$$t_{0 \\to A} = \\frac{T}{4}$$\nFrom the previous question, the time taken to travel from $x=0$ to $x=A/2$ is:\n$$t_{0 \\to A/2} = \\frac{T}{12}$$\n\nTherefore, the time taken to go from $x = A/2$ to $x = A$ is:\n$$t = t_{0 \\to A} - t_{0 \\to A/2} = \\frac{T}{4} - \\frac{T}{12} = \\frac{3T - T}{12} = \\frac{T}{6}$$$",
	},
	{
		id: 20,
		text: "The potential energy of a particle of mass $m$ executing SHM is given by $U(x) = ax^2 + bx$, where $a$ and $b$ are constants. The equilibrium position of the particle is at $x$ equal to:",
		options: ["Zero", "$-b / 2a$", "$b / 2a$", "$-b / a$"],
		correctOption: 1,
		explanation:
			"At the equilibrium position, the net force acting on the particle is zero.\nThe relationship between force $F$ and potential energy $U$ is:\n$$F = -\\frac{dU}{dx}$$\n\nGiven $U(x) = ax^2 + bx$:\n$$\\frac{dU}{dx} = 2ax + b$$\nSetting $F = 0$:\n$$-(2ax + b) = 0 \\implies 2ax = -b \\implies x = -\\frac{b}{2a}$$",
	},
	{
		id: 21,
		text: "The potential energy of a $1\\text{ kg}$ particle free to move along the x-axis is given by $U(x) = \\left(\\frac{x^4}{4} - \\frac{x^2}{2}\\right)\\text{ J}$. The total mechanical energy of the particle is $2\\text{ J}$. The maximum speed of the particle (in m/s) is:",
		options: ["$\\frac{3}{\\sqrt{2}}$", "$\\sqrt{5}$", "$2$", "$3$"],
		correctOption: 0,
		explanation:
			"Total mechanical energy is conserved: $E = K + U \\implies K = E - U$.\nFor the speed to be maximum, the kinetic energy must be maximum, which occurs where the potential energy $U(x)$ is minimum.\n\nTo find the minimum of $U(x) = \\frac{x^4}{4} - \\frac{x^2}{2}$:\n$$\\frac{dU}{dx} = x^3 - x = 0 \\implies x(x^2 - 1) = 0 \\implies x = 0, \\pm 1$$\nAnalyzing the second derivative $\\frac{d^2U}{dx^2} = 3x^2 - 1$:\n* At $x = 0$, $\\frac{d^2U}{dx^2} = -1 < 0$ (maximum).\n* At $x = \\pm 1$, $\\frac{d^2U}{dx^2} = 2 > 0$ (minimum).\n\nThe minimum potential energy is:\n$$U_{\\text{min}} = U(\\pm 1) = \\frac{1}{4} - \\frac{1}{2} = -\\frac{1}{4}\\text{ J}$$\nThe maximum kinetic energy is:\n$$K_{\\text{max}} = E - U_{\\text{min}} = 2 - \\left(-\\frac{1}{4}\\right) = \\frac{9}{4}\\text{ J}$$\nSince $K_{\\text{max}} = \\frac{1}{2} m v_{\\text{max}}^2$:\n$$\\frac{1}{2} (1\\text{ kg}) v_{\\text{max}}^2 = \\frac{9}{4} \\implies v_{\\text{max}}^2 = \\frac{9}{2} \\implies v_{\\text{max}} = \\frac{3}{\\sqrt{2}}\\text{ m/s}$$",
	},
	{
		id: 22,
		text: "For a particle executing simple harmonic motion, which of the following statements is correct?",
		options: [
			"The phase difference between displacement and velocity is $\\pi\\text{ rad}$.",
			"The phase difference between velocity and acceleration is $\\pi/2\\text{ rad}$.",
			"The phase difference between displacement and acceleration is zero.",
			"The average potential energy over one time period is equal to the total energy.",
		],
		correctOption: 1,
		explanation:
			"Let the displacement be $x = A \\sin(\\omega t)$.\n* Velocity: $v = \\frac{dx}{dt} = A\\omega \\cos(\\omega t) = A\\omega \\sin(\\omega t + \\pi/2)$.\n  The phase difference between displacement and velocity is $\\pi/2\\text{ rad}$.\n* Acceleration: $a = \\frac{dv}{dt} = -A\\omega^2 \\sin(\\omega t) = A\\omega^2 \\sin(\\omega t + \\pi)$.\n  The phase difference between displacement and acceleration is $\\pi\\text{ rad}$.\n* The phase difference between velocity and acceleration is:\n  $$\\Delta \\phi = \\pi - \\frac{\\pi}{2} = \\frac{\\pi}{2}\\text{ rad}$$\n\nHence, the statement 'The phase difference between velocity and acceleration is $\\pi/2\\text{ rad}$' is correct.",
	},
	{
		id: 23,
		text: "The average kinetic energy and average potential energy of a particle executing simple harmonic motion of amplitude $A$ over one complete cycle are respectively:",
		options: [
			"$\\frac{1}{2} kA^2$, $\\frac{1}{2} kA^2$",
			"$\\frac{1}{4} kA^2$, $\\frac{1}{4} kA^2$",
			"$0$, $\\frac{1}{2} kA^2$",
			"$\\frac{1}{2} kA^2$, $0$",
		],
		correctOption: 1,
		explanation:
			"The total mechanical energy of a particle in SHM is $E = \\frac{1}{2} k A^2$.\nOver one complete cycle:\n* The average value of $\\sin^2(\\omega t)$ is $1/2$.\n* The average value of $\\cos^2(\\omega t)$ is $1/2$.\n\nThis yields the time averages:\n$$\\langle K \\rangle = \\frac{1}{4} k A^2$$\n$$\\langle U \\rangle = \\frac{1}{4} k A^2$$\nBoth average energies are equal to $\\frac{1}{4} kA^2$.",
	},
	{
		id: 24,
		text: "A simple pendulum has a time period $T_1$ on the Earth's surface, and $T_2$ when taken to a height $R$ (equal to the radius of Earth) above the surface. The ratio $T_2 / T_1$ is:",
		options: ["$1 : 2$", "$2 : 1$", "$1 : 4$", "$4 : 1$"],
		correctOption: 1,
		explanation:
			"The acceleration due to gravity at height $h$ is:\n$$g_h = g \\frac{R^2}{(R+h)^2}$$\nAt $h = R$:\n$$g_h = g \\frac{R^2}{(2R)^2} = \\frac{g}{4}$$\nThe time period of a simple pendulum is $T \\propto \\frac{1}{\\sqrt{g}}$:\n$$\\frac{T_2}{T_1} = \\sqrt{\\frac{g}{g_h}} = \\sqrt{\\frac{g}{g/4}} = \\sqrt{4} = 2 = 2 : 1$$",
	},
	{
		id: 25,
		text: "Two simple pendulums of lengths $100\\text{ cm}$ and $121\\text{ cm}$ start oscillating in phase at some instant. After how many oscillations of the smaller pendulum will they again be in phase?",
		options: ["$9$", "$10$", "$11$", "$12$"],
		correctOption: 2,
		explanation:
			"The time period of a pendulum is $T \\propto \\sqrt{L}$.\nLet the shorter pendulum have length $L_1 = 100\\text{ cm}$ and time period $T_1$. Let the longer pendulum have length $L_2 = 121\\text{ cm}$ and time period $T_2$.\n$$\\frac{T_1}{T_2} = \\sqrt{\\frac{L_1}{L_2}} = \\sqrt{\\frac{100}{121}} = \\frac{10}{11}$$\nFor them to be back in phase, the shorter pendulum must complete $n$ oscillations in the same time the longer pendulum completes $n - 1$ oscillations:\n$$n T_1 = (n - 1) T_2 \\implies \\frac{T_1}{T_2} = \\frac{n-1}{n}$$\n$$\\frac{10}{11} = \\frac{n-1}{n} \\implies 10n = 11n - 11 \\implies n = 11$$",
	},
	{
		id: 26,
		text: "A particle executes SHM along a straight line. Its velocities at distances $x_1$ and $x_2$ from the mean position are $v_1$ and $v_2$ respectively. The time period of the oscillation is:",
		options: [
			"$2\\pi \\sqrt{\\frac{x_2^2 - x_1^2}{v_1^2 - v_2^2}}$",
			"$2\\pi \\sqrt{\\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}}$",
			"$2\\pi \\sqrt{\\frac{v_1^2 + v_2^2}{x_1^2 + x_2^2}}$",
			"$2\\pi \\sqrt{\\frac{x_1^2 + x_2^2}{v_1^2 + v_2^2}}$",
		],
		correctOption: 0,
		explanation:
			"In SHM, velocity and displacement are related by $v^2 = \\omega^2 (A^2 - x^2)$:\n1) $v_1^2 = \\omega^2 (A^2 - x_1^2)$\n2) $v_2^2 = \\omega^2 (A^2 - x_2^2)$\n\nSubtracting the second equation from the first:\n$$v_1^2 - v_2^2 = \\omega^2 (x_2^2 - x_1^2) \\implies \\omega^2 = \\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}$$\n$$\\omega = \\sqrt{\\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}}$$\nThe time period is:\n$$T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{x_2^2 - x_1^2}{v_1^2 - v_2^2}}$$",
	},
	{
		id: 27,
		text: "A mass $m$ connected to a spring of force constant $k$ oscillates with frequency $f$. If another mass $M$ is added to the first mass, the frequency of oscillation becomes $f/2$. The ratio $M/m$ is:",
		options: ["$1 : 1$", "$3 : 1$", "$4 : 1$", "$2 : 1$"],
		correctOption: 1,
		explanation:
			"The frequency of a spring-mass system is:\n$$f = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}$$\nWhen mass $M$ is added, the new frequency is:\n$$f' = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m+M}} = \\frac{f}{2}$$\nSquaring and taking the ratio:\n$$\\left(\\frac{f'}{f}\\right)^2 = \\frac{m}{m+M} = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$$\n$$4m = m + M \\implies M = 3m \\implies \\frac{M}{m} = 3 = 3 : 1$$",
	},
	{
		id: 28,
		text: "An empty plastic bottle of mass $m$ and uniform cross-sectional area $A$ floats in water (density $\\rho$) with a depth $h$ submerged. If we add some sand of mass $\\Delta m$ into the bottle, the bottle sinks slightly. If we push the bottle slightly more and release, it oscillates with a time period $T_{\\text{new}}$. Compared to the original time period $T_{\\text{orig}}$ (when it was empty), $T_{\\text{new}}$ is:",
		options: [
			"Larger than $T_{\\text{orig}}$",
			"Smaller than $T_{\\text{orig}}$",
			"Equal to $T_{\\text{orig}}$",
			"Dependent on the density of the sand added",
		],
		correctOption: 0,
		explanation:
			"The time period of a floating body in SHM is:\n$$T = 2\\pi \\sqrt{\\frac{M}{A \\rho g}}$$\nwhere $M$ is the total mass of the floating body.\n\nThe force constant $k_{\\text{eff}} = A \\rho g$ is determined by the fluid density $\\rho$, cross-section $A$, and $g$, which remain constant.\nAdding sand increases the oscillating mass from $m$ to $m + \\Delta m$.\nSince $T \\propto \\sqrt{M}$, the time period must increase ($T_{\\text{new}} > T_{\\text{orig}}$).",
	},
	{
		id: 29,
		text: "The amplitude of a damped oscillator becomes half of its initial value in $4\\text{ seconds}$. The time (in seconds) in which it will become $1/16$ of its initial value is:",
		options: ["$8$", "$12$", "$16$", "$24$"],
		correctOption: 2,
		explanation:
			"In a damped harmonic oscillator, amplitude decays exponentially:\n$$A(t) = A_0 e^{-\\gamma t}$$\nwhere $\\gamma = \\frac{b}{2m}$.\n\nGiven that $A(4) = A_0 e^{-4\\gamma} = \\frac{A_0}{2} \\implies e^{-4\\gamma} = \\frac{1}{2}$.\nWe seek the time $t$ where $A(t) = \\frac{A_0}{16}$:\n$$e^{-\\gamma t} = \\frac{1}{16} = \\left(\\frac{1}{2}\\right)^4$$\nSubstituting $e^{-4\\gamma} = 1/2$:\n$$e^{-\\gamma t} = \\left(e^{-4\\gamma}\\right)^4 = e^{-16\\gamma} \\implies t = 16\\text{ seconds}$$",
	},
	{
		id: 30,
		text: "Two linear simple harmonic motions of equal amplitudes $A$ and same frequency $\\omega$ are superposed at right angles to each other. If their phase difference is $\\pi/2$, the resultant motion of the particle is a:",
		options: [
			"Straight line inclined at $45^\\circ$ to the axes",
			"Circle of radius $A$",
			"Ellipse with major axis along x-axis",
			"Parabola",
		],
		correctOption: 1,
		explanation:
			"Let the two perpendicular SHMs be along the x and y axes:\n1) $x = A \\sin(\\omega t)$\n2) $y = A \\sin(\\omega t + \\pi/2) = A \\cos(\\omega t)$\n\nSquaring and adding both equations:\n$$x^2 + y^2 = A^2 \\sin^2(\\omega t) + A^2 \\cos^2(\\omega t) = A^2 (\\sin^2(\\omega t) + \\cos^2(\\omega t)) = A^2$$\nThis matches the standard equation of a circle $x^2 + y^2 = A^2$.\nThus, the resultant motion is circular with radius $A$.",
	},
];
