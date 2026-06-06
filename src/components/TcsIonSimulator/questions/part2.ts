import type { Question } from "./part1";

export const questionsPart2: Question[] = [
	{
		id: 31,
		text: "A particle executes simple harmonic motion along the x-axis. The phase difference between the acceleration of the particle and its displacement from the mean position is:",
		options: [
			"Zero",
			"$\\pi/2\\text{ rad}$",
			"$\\pi\\text{ rad}$",
			"$3\\pi/2\\text{ rad}$",
		],
		correctOption: 2,
		explanation:
			"The acceleration of a particle in SHM is given by:\n$$a = -\\omega^2 x$$\nThis can be written in harmonic form as:\n$$a(t) = \\omega^2 A \\sin(\\omega t + \\pi)$$\nwhen the displacement is $x(t) = A \\sin(\\omega t)$.\nThe negative sign represents that the acceleration vector is always directed opposite to the displacement vector (towards the equilibrium/mean position).\nTherefore, the phase difference is exactly $\\pi\\text{ radians}$ (or $180^\\circ$).",
	},
	{
		id: 32,
		text: "Three springs of force constants $k$, $2k$, and $3k$ are connected in series. A block of mass $m$ is suspended from the combination. The effective spring constant of the system is:",
		options: ["$6k$", "$6k / 11$", "$11k / 6$", "$k / 6$"],
		correctOption: 1,
		explanation:
			"For springs connected in series, the reciprocal of the effective spring constant $k_{\\text{eff}}$ is the sum of the reciprocals of the individual spring constants:\n$$\\frac{1}{k_{\\text{eff}}} = \\frac{1}{k_1} = \\frac{1}{k} + \\frac{1}{2k} + \\frac{1}{3k}$$\nTaking the common denominator as $6k$:\n$$\\frac{1}{k_{\\text{eff}}} = \\frac{6 + 3 + 2}{6k} = \\frac{11}{6k}$$\nInverting this expression:\n$$k_{\\text{eff}} = \\frac{6k}{11}$$",
		svgDiagram: `<svg width="80" height="150" viewBox="0 0 80 150" class="mx-auto my-2" role="img" aria-label="Three vertical springs in series connected to a block">
  <title>Three Springs in Series</title>
  <!-- Ceiling -->
  <line x1="10" y1="10" x2="70" y2="10" stroke="#1a2840" stroke-width="4" />
  <line x1="10" y1="10" x2="15" y2="5" stroke="#1a2840" stroke-width="1.5" />
  <line x1="25" y1="10" x2="30" y2="5" stroke="#1a2840" stroke-width="1.5" />
  <line x1="40" y1="10" x2="45" y2="5" stroke="#1a2840" stroke-width="1.5" />
  <line x1="55" y1="10" x2="60" y2="5" stroke="#1a2840" stroke-width="1.5" />
  <!-- Spring 1 (k) -->
  <path d="M40,10 L40,20 L32,25 L48,30 L32,35 L48,40 L32,45 L40,50" fill="none" stroke="#b8872a" stroke-width="2" />
  <text x="55" y="35" font-family="sans-serif" font-size="10" fill="#b8872a">k</text>
  <!-- Spring 2 (2k) -->
  <path d="M40,50 L40,60 L32,65 L48,70 L32,75 L48,80 L32,85 L40,90" fill="none" stroke="#2d5a3d" stroke-width="2" />
  <text x="55" y="75" font-family="sans-serif" font-size="10" fill="#2d5a3d">2k</text>
  <!-- Spring 3 (3k) -->
  <path d="M40,90 L40,100 L32,105 L48,110 L32,115 L48,120 L32,125 L40,130" fill="none" stroke="#1a2840" stroke-width="2" />
  <text x="55" y="115" font-family="sans-serif" font-size="10" fill="#1a2840">3k</text>
  <!-- Mass m -->
  <rect x="25" y="130" width="30" height="15" fill="#fdfaf4" stroke="#1a2840" stroke-width="2" />
  <text x="36" y="142" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1a2840">m</text>
</svg>`,
	},
	{
		id: 33,
		text: "The potential energy of a particle of mass $m$ in a force field is given by $U(x) = U_0 (1 - \\cos(\\alpha x))$, where $U_0$ and $\\alpha$ are constants. For small displacements (small $x$), the time period of simple harmonic motion is:",
		options: [
			"$2\\pi \\sqrt{\\frac{m}{U_0 \\alpha^2}}$",
			"$2\\pi \\sqrt{\\frac{m}{U_0 \\alpha}}$",
			"$2\\pi \\sqrt{\\frac{m U_0}{\\alpha^2}}$",
			"$2\\pi \\sqrt{\\frac{m \\alpha^2}{U_0}}$",
		],
		correctOption: 0,
		explanation:
			"Given $U(x) = U_0 (1 - \\cos(\\alpha x))$.\nFor small displacements $x$, we can expand $\\cos(\\theta)$ using its Taylor series:\n$$\\cos(\\alpha x) \\approx 1 - \\frac{(\\alpha x)^2}{2} + \\dots$$\n\nSubstituting this approximation into $U(x)$:\n$$U(x) \\approx U_0 \\left(1 - \\left(1 - \\frac{\\alpha^2 x^2}{2}\\right)\\right) = \\frac{1}{2} (U_0 \\alpha^2) x^2$$\nComparing this with the standard SHM potential energy equation $U = \\frac{1}{2} k_{\\text{eff}} x^2$, we identify the effective force constant:\n$$k_{\\text{eff}} = U_0 \\alpha^2$$\nThe resulting time period of oscillations is:\n$$T = 2\\pi \\sqrt{\\frac{m}{k_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{m}{U_0 \\alpha^2}}$$",
	},
	{
		id: 34,
		text: "A trolley is moving on a horizontal road with a constant acceleration $a$. A simple pendulum of length $L$ is suspended from its ceiling. The time period of small oscillations of the pendulum is:",
		options: [
			"$2\\pi \\sqrt{\\frac{L}{g}}$",
			"$2\\pi \\sqrt{\\frac{L}{g+a}}$",
			"$2\\pi \\sqrt{\\frac{L}{g-a}}$",
			"$2\\pi \\sqrt{\\frac{L}{\\sqrt{g^2+a^2}}}$",
		],
		correctOption: 3,
		explanation:
			"In the reference frame of the accelerating trolley, the pendulum bob experiences:\n1. Gravitational force $mg$ acting vertically downwards.\n2. Pseudo force $ma$ acting horizontally in the opposite direction.\n\nThese perpendicular forces combine to give an effective acceleration due to gravity:\n$$g_{\\text{eff}} = \\sqrt{g^2 + a^2}$$\nTherefore, the time period of oscillation is:\n$$T = 2\\pi \\sqrt{\\frac{L}{g_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{L}{\\sqrt{g^2 + a^2}}}$$",
	},
	{
		id: 35,
		text: "A particle is executing SHM with frequency $\\nu$. The frequency with which its kinetic energy oscillates is:",
		options: ["$\\nu / 2$", "$\\nu$", "$2\\nu$", "$4\\nu$"],
		correctOption: 2,
		explanation:
			"Let the displacement of the particle in SHM be:\n$$x(t) = A \\sin(2\\pi \\nu t)$$\nThe velocity is:\n$$v(t) = A(2\\pi \\nu) \\cos(2\\pi \\nu t)$$\n\nKinetic energy is given by:\n$$K(t) = \\frac{1}{2} m v^2 = \\frac{1}{2} m A^2 (4\\pi^2 \\nu^2) \\cos^2(2\\pi \\nu t)$$\nUsing the identity $\\cos^2(\\theta) = \\frac{1 + \\cos(2\\theta)}{2}$:\n$$K(t) = m A^2 \\pi^2 \\nu^2 [1 + \\cos(2 \\cdot 2\\pi \\nu t)] = \\text{Constant} \\cdot [1 + \\cos(2\\pi (2\\nu) t)]$$\nThe time-dependent term in kinetic energy contains the frequency $2\\nu$.\nThus, kinetic energy oscillates at twice the frequency of displacement.",
	},
	{
		id: 36,
		text: "The maximum acceleration of a particle executing simple harmonic motion of amplitude $A$ and time period $T$ is:",
		options: [
			"$4\\pi^2 A / T$",
			"$4\\pi^2 A / T^2$",
			"$2\\pi A / T$",
			"$2\\pi^2 A / T^2$",
		],
		correctOption: 1,
		explanation:
			"The acceleration in SHM is related to displacement by $a = -\\omega^2 x$.\nThe maximum acceleration (magnitude) occurs at the extremes ($x = \\pm A$):\n$$a_{\\text{max}} = \\omega^2 A$$\n\nSince angular frequency is related to time period by $\\omega = \\frac{2\\pi}{T}$:\n$$a_{\\text{max}} = \\left(\\frac{2\\pi}{T}\\right)^2 A = \\frac{4\\pi^2 A}{T^2}$$",
	},
	{
		id: 37,
		text: "A simple pendulum of length $L$ is suspended from a peg on a vertical wall. Another peg is fixed on the wall at a distance $L/2$ directly below the suspension peg. If the pendulum is displaced slightly and released, it swings. What is the time period of this oscillation?",
		options: [
			"$2\\pi \\sqrt{\\frac{L}{g}}$",
			"$\\pi \\sqrt{\\frac{L}{g}} \\left(1 + \\frac{1}{\\sqrt{2}}\\right)$",
			"$\\pi \\sqrt{\\frac{L}{g}} (1 + \\sqrt{2})$",
			"$2\\pi \\sqrt{\\frac{L}{g}} \\left(1 + \\frac{1}{\\sqrt{2}}\\right)$",
		],
		correctOption: 1,
		explanation:
			"During one full oscillation:\n* On the side away from the second peg, the pendulum swings with its full length $L$. The half-cycle time is:\n  $$t_1 = \\frac{1}{2} \\left(2\\pi \\sqrt{\\frac{L}{g}}\\right) = \\pi \\sqrt{\\frac{L}{g}}$$\n* On the side of the second peg, the string hits the peg, so it swings with length $L - L/2 = L/2$. The half-cycle time is:\n  $$t_2 = \\frac{1}{2} \\left(2\\pi \\sqrt{\\frac{L/2}{g}}\\right) = \\pi \\sqrt{\\frac{L}{2g}} = \\frac{1}{\\sqrt{2}} \\pi \\sqrt{\\frac{L}{g}}$$\n\nThe total time period is the sum of these two half-periods:\n$$T = t_1 + t_2 = \\pi \\sqrt{\\frac{L}{g}} + \\frac{1}{\\sqrt{2}} \\pi \\sqrt{\\frac{L}{g}} = \\pi \\sqrt{\\frac{L}{g}} \\left(1 + \\frac{1}{\\sqrt{2}}\\right)$$",
	},
	{
		id: 38,
		text: "The bob of a simple pendulum is released from a position where the string makes an angle $\\theta$ with the vertical. If it rises to a maximum vertical height $h$ relative to its lowest position, the speed of the bob when it passes through the mean position is:",
		options: [
			"$\\sqrt{gh}$",
			"$\\sqrt{2gh}$",
			"$\\sqrt{gh / 2}$",
			"$2\\sqrt{gh}$",
		],
		correctOption: 1,
		explanation:
			"By the conservation of mechanical energy, the gravitational potential energy lost by the bob when swinging from its highest point to its lowest point (mean position) must equal the kinetic energy gained at the lowest point:\n$$\\Delta U = \\Delta K \\implies mgh = \\frac{1}{2} m v^2$$\n$$v^2 = 2gh \\implies v = \\sqrt{2gh}$$",
	},
	{
		id: 39,
		text: "A mass $m$ is suspended from two springs of force constants $k_1$ and $k_2$ connected in series. The time period of vertical oscillations is:",
		options: [
			"$2\\pi \\sqrt{\\frac{m}{k_1 + k_2}}$",
			"$2\\pi \\sqrt{\\frac{m(k_1 + k_2)}{k_1 k_2}}$",
			"$2\\pi \\sqrt{\\frac{m k_1 k_2}{k_1 + k_2}}$",
			"$2\\pi \\sqrt{\\frac{m}{|k_1 - k_2|}}$",
		],
		correctOption: 1,
		explanation:
			"For springs in series, the effective spring constant $k_{\\text{eff}}$ is:\n$$\\frac{1}{k_{\\text{eff}}} = \\frac{1}{k_1} + \\frac{1}{k_2} = \\frac{k_1 + k_2}{k_1 k_2} \\implies k_{\\text{eff}} = \\frac{k_1 k_2}{k_1 + k_2}$$\nThe time period is:\n$$T = 2\\pi \\sqrt{\\frac{m}{k_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{m}{\\frac{k_1 k_2}{k_1 + k_2}}} = 2\\pi \\sqrt{\\frac{m(k_1 + k_2)}{k_1 k_2}}$$",
	},
	{
		id: 40,
		text: "For a damped harmonic oscillator, the mechanical energy $E$ decreases exponentially with time. The relation for energy at any time $t$ is $E(t) = E_0 e^{-bt/m}$ (where $b$ is the damping constant and $m$ is mass). If the amplitude decreases to half of its initial value in time $\\tau$, the mechanical energy of the oscillator at time $t = \\tau$ will be:",
		options: ["$E_0 / 2$", "$E_0 / 4$", "$E_0 / 8$", "$E_0 / 16$"],
		correctOption: 1,
		explanation:
			"The total mechanical energy $E$ of an oscillator is proportional to the square of its amplitude:\n$$E \\propto A^2$$\nIf the amplitude at $t = \\tau$ is $A(\\tau) = \\frac{A_0}{2}$:\n$$E(\\tau) \\propto A(\\tau)^2 = \\left(\\frac{A_0}{2}\\right)^2 = \\frac{A_0^2}{4}$$\nSince the initial energy is $E_0 \\propto A_0^2$, the energy at $t = \\tau$ is:\n$$E(\\tau) = \\frac{E_0}{4}$$",
	},
	{
		id: 41,
		text: "The differential equation representing the motion of a particle is $\\frac{d^2x}{dt^2} + \\alpha x = 0$, where $\\alpha$ is a positive constant. The time period of this motion is:",
		options: [
			"$2\\pi / \\alpha$",
			"$2\\pi / \\sqrt{\\alpha}$",
			"$2\\pi \\alpha$",
			"$2\\pi \\sqrt{\\alpha}$",
		],
		correctOption: 1,
		explanation:
			"The standard differential equation of SHM is:\n$$\\frac{d^2x}{dt^2} + \\omega^2 x = 0$$\nComparing this with the given equation, we find:\n$$\\omega^2 = \\alpha \\implies \\omega = \\sqrt{\\alpha}$$\n\nThe time period of the motion is:\n$$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{\\sqrt{\\alpha}}$$",
	},
	{
		id: 42,
		text: "Two collinear simple harmonic motions are given by $x_1 = A \\sin(\\omega t)$ and $x_2 = A \\sin(\\omega t + \\pi/3)$. The amplitude of the resultant simple harmonic motion is:",
		options: ["$A$", "$\\sqrt{2} A$", "$\\sqrt{3} A$", "$2 A$"],
		correctOption: 2,
		explanation:
			"The amplitudes of the two components are $A_1 = A$ and $A_2 = A$, with a phase difference of $\\phi = \\pi/3$ ($60^\\circ$).\n\nThe amplitude of the resultant oscillation is:\n$$A_{\\text{res}} = \\sqrt{A_1^2 + A_2^2 + 2 A_1 A_2 \\cos(\\phi)}$$\n$$A_{\\text{res}} = \\sqrt{A^2 + A^2 + 2A^2 \\cos(\\pi/3)}$$\nSince $\\cos(\\pi/3) = 1/2$:\n$$A_{\\text{res}} = \\sqrt{2A^2 + 2A^2 \\left(\\frac{1}{2}\\right)} = \\sqrt{3A^2} = \\sqrt{3} A$$",
	},
	{
		id: 43,
		text: "The velocity of a particle executing simple harmonic motion is plotted against its displacement. The shape of the resulting curve is a/an:",
		options: ["Straight line", "Parabola", "Ellipse", "Hyperbola"],
		correctOption: 2,
		explanation:
			"In SHM, the displacement and velocity are:\n1. $x = A \\sin(\\omega t) \\implies \\frac{x}{A} = \\sin(\\omega t)$\n2. $v = A\\omega \\cos(\\omega t) \\implies \\frac{v}{A\\omega} = \\cos(\\omega t)$\n\nSquaring and adding these equations:\n$$\\left(\\frac{x}{A}\\right)^2 + \\left(\\frac{v}{A\\omega}\\right)^2 = \\sin^2(\\omega t) + \\cos^2(\\omega t) = 1$$\nThis matches the equation of an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, where $a = A$ and $b = A\\omega$.\nThus, the velocity-displacement graph is an ellipse.",
	},
	{
		id: 44,
		text: "A simple pendulum is constructed using a hollow spherical bob filled with water. A small leak is opened at the bottom of the bob, allowing water to drip out slowly. As water drains completely, the time period of the pendulum will:",
		options: [
			"Increase continuously",
			"Decrease continuously",
			"First increase and then decrease to its initial value",
			"First decrease and then increase to its initial value",
		],
		correctOption: 2,
		explanation:
			"The effective length $L$ of a simple pendulum is the distance from the suspension point to the center of gravity (CG) of the bob.\n1. Initially, when the sphere is full, the CG is at its geometric center.\n2. As water drains, the CG of the remaining bob shifts downwards, increasing the effective length $L$. Since $T = 2\\pi \\sqrt{L/g}$, the time period increases.\n3. As the bob becomes nearly empty, the CG shifts back upwards.\n4. When all water has drained, the CG returns to the geometric center of the empty hollow sphere, restoring $L$ and $T$ to their original values.\nTherefore, the time period first increases, then decreases back to its initial value.",
	},
	{
		id: 45,
		text: "If the length of a simple pendulum is increased by $44\\%$, what is the percentage increase in its time period?",
		options: ["$44\\%$", "$22\\%$", "$20\\%$", "$10\\%$"],
		correctOption: 2,
		explanation:
			"The time period of a pendulum is related to length by $T \\propto \\sqrt{L}$.\nLet the initial length be $L_1$ and initial period be $T_1$. The new length is:\n$$L_2 = L_1 + 0.44 L_1 = 1.44 L_1$$\nThe new time period is:\n$$T_2 \\propto \\sqrt{L_2} = \\sqrt{1.44 L_1} = 1.2 \\sqrt{L_1}$$\n$$T_2 = 1.2 T_1$$\n\nThe percentage increase in the time period is:\n$$\\% \\text{ Increase} = \\frac{T_2 - T_1}{T_1} \\cdot 100\\% = (1.2 - 1) \\cdot 100\\% = 20\\%$$",
	},
	{
		id: 46,
		text: "If the amplitude of a simple harmonic oscillator is doubled, which of the following quantities is also doubled?",
		options: [
			"Total Energy",
			"Maximum Velocity",
			"Force Constant",
			"Time Period",
		],
		correctOption: 1,
		explanation:
			"Let's review the dependence of each quantity on amplitude $A$:\n* Total energy $E = \\frac{1}{2} k A^2 \\propto A^2$ (quadrupled).\n* Maximum velocity $v_{\\text{max}} = A\\omega \\propto A$ (doubled).\n* Force constant $k = m\\omega^2$ is independent of amplitude.\n* Time period $T = 2\\pi/\\omega$ is independent of amplitude.\n\nThus, only the maximum velocity is doubled.",
	},
	{
		id: 47,
		text: "A spring-mass system oscillates vertically with a time period $T$. If the spring is cut into two equal halves and both halves are connected in parallel to support the same mass, the new time period of oscillation is:",
		options: ["$T$", "$T / 2$", "$T / \\sqrt{2}$", "$2 T$"],
		correctOption: 1,
		explanation:
			"Let the original spring have constant $k$, so $T = 2\\pi \\sqrt{m/k}$.\n1. Cutting the spring into two equal halves doubles the spring constant of each half ($k' = 2k$ since $k \\propto 1/L$).\n2. Connecting them in parallel gives an effective spring constant:\n   $$k_{\\text{eff}} = k' + k' = 2k + 2k = 4k$$\n3. The new time period is:\n   $$T' = 2\\pi \\sqrt{\\frac{m}{k_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{m}{4k}} = \\frac{1}{2} \\left(2\\pi \\sqrt{\\frac{m}{k}}\\right) = \\frac{T}{2}$$",
	},
	{
		id: 48,
		text: "The displacement of a particle is represented by $x = 3 \\sin(2t) + 4 \\cos(2t)$ (where $x$ is in meters and $t$ is in seconds). The maximum acceleration of the particle is:",
		options: [
			"$10\\text{ m/s}^2$",
			"$20\\text{ m/s}^2$",
			"$5\\text{ m/s}^2$",
			"$25\\text{ m/s}^2$",
		],
		correctOption: 1,
		explanation:
			"The equation of motion has angular frequency $\\omega = 2\\text{ rad/s}$.\nThe resultant amplitude is:\n$$A = \\sqrt{3^2 + 4^2} = 5\\text{ meters}$$\n\nThe maximum acceleration magnitude in SHM is:\n$$a_{\\text{max}} = \\omega^2 A = (2)^2 \\cdot 5 = 4 \\cdot 5 = 20\\text{ m/s}^2$$",
	},
	{
		id: 49,
		text: "A particle executes SHM along a straight line starting from the mean position. The ratio of the time taken to travel the first half of the amplitude ($x = 0$ to $x = A/2$) to the time taken to travel the remaining half ($x = A/2$ to $x = A$) is:",
		options: ["$1 : 1$", "$1 : 2$", "$2 : 1$", "$1 : \\sqrt{2}$"],
		correctOption: 1,
		explanation:
			"Let the time taken from $x = 0$ to $x = A/2$ be $t_1$, and from $x = A/2$ to $x = A$ be $t_2$.\n* From previous questions, $t_1 = \\frac{T}{12}$.\n* The total time to reach the extreme point is $t_{0 \\to A} = \\frac{T}{4}$.\n* Thus, $t_2 = t_{0 \\to A} - t_1 = \\frac{T}{4} - \\frac{T}{12} = \\frac{T}{6}$.\n\nTaking the ratio:\n$$\\frac{t_1}{t_2} = \\frac{T/12}{T/6} = \\frac{6}{12} = \\frac{1}{2} = 1 : 2$$",
	},
	{
		id: 50,
		text: "A particle is executing SHM. If its displacement from the mean position is $x$, its total mechanical energy is:",
		options: [
			"Proportional to $x$",
			"Proportional to $x^2$",
			"Zero",
			"Independent of $x$",
		],
		correctOption: 3,
		explanation:
			"The kinetic and potential energies at displacement $x$ in SHM are:\n$$K(x) = \\frac{1}{2} k (A^2 - x^2)$$\n$$U(x) = \\frac{1}{2} k x^2$$\n\nThe total mechanical energy $E$ is the sum:\n$$E = K(x) + U(x) = \\frac{1}{2} k (A^2 - x^2) + \\frac{1}{2} k x^2 = \\frac{1}{2} k A^2$$\nSince the amplitude $A$ and spring constant $k$ are fixed, the total energy is constant and completely independent of the displacement $x$.",
	},
	{
		id: 51,
		text: "Resonance is a special case of forced oscillations in which the amplitude of oscillation becomes extremely large. This occurs when the:",
		options: [
			"Damping coefficient is extremely high",
			"Frequency of the driving force is equal to the natural frequency of the oscillator",
			"Driving force is removed",
			"Amplitude of the driving force is zero",
		],
		correctOption: 1,
		explanation:
			"Forced oscillations occur when a periodic driving force of frequency $\\omega_d$ is applied. The amplitude depends on the difference between the driving frequency and the natural frequency $\\omega_0$.\n\nWhen $\\omega_d = \\omega_0$ (driving frequency matches the natural frequency), the energy transfer to the system is maximized, causing the amplitude to grow extremely large. This condition is known as resonance.",
	},
	{
		id: 52,
		text: "A hypothetical simple pendulum has a length equal to the radius of the Earth ($L = R \\approx 6400\\text{ km}$). The time period of oscillation of this pendulum is (where $g = 9.8\\text{ m/s}^2$):",
		options: [
			"$T = 2\\pi \\sqrt{R/g} \\approx 84.6\\text{ minutes}$",
			"$T = 2\\pi \\sqrt{R/2g} \\approx 60\\text{ minutes}$",
			"$T = \\text{Infinite}$",
			"$T = 2\\pi \\sqrt{2R/g} \\approx 120\\text{ minutes}$",
		],
		correctOption: 1,
		explanation:
			"For a pendulum of length comparable to the radius of Earth $R$, the gravitational force lines are not parallel. The general formula is:\n$$T = 2\\pi \\sqrt{\\frac{1}{g \\left(\\frac{1}{L} + \\frac{1}{R}\\right)}}$$\nHere, the length is equal to the Earth's radius, i.e., $L = R$:\n$$T = 2\\pi \\sqrt{\\frac{1}{g \\left(\\frac{1}{R} + \\frac{1}{R}\\right)}} = 2\\pi \\sqrt{\\frac{1}{g \\left(\\frac{2}{R}\\right)}} = 2\\pi \\sqrt{\\frac{R}{2g}}$$\nSubstituting $R = 6.4 \\times 10^6\\text{ m}$ and $g = 9.8\\text{ m/s}^2$:\n$$T = 2\\pi \\sqrt{\\frac{6.4 \\times 10^6}{19.6}} \\approx 3590\\text{ seconds} \\approx 60\\text{ minutes}$$",
	},
	{
		id: 53,
		text: "A spring-mass system is loaded with a block of mass $m$. The spring has a small but non-negligible mass $M_s$. The effective mass of the system that should be used in the time period formula $T = 2\\pi \\sqrt{m_{\\text{eff}} / k}$ is:",
		options: ["$m + M_s$", "$m + M_s / 2$", "$m + M_s / 3$", "$m + M_s / 4$"],
		correctOption: 2,
		explanation:
			"When calculating the kinetic energy of the system including a spring of mass $M_s$ stretching uniformly, the velocity of any element of the spring at distance $y$ from the suspension point is $v(y) = v_{\\text{block}} \\frac{y}{L}$.\n\nIntegrating the kinetic energy of all elements of the spring:\n$$K_{\\text{spring}} = \\int_0^L \\frac{1}{2} \\left(\\frac{M_s}{L} dy\\right) \\left(v_{\\text{block}} \\frac{y}{L}\\right)^2 = \\frac{1}{6} M_s v_{\\text{block}}^2$$\nAdding the block's kinetic energy $K_{\\text{block}} = \\frac{1}{2} m v_{\\text{block}}^2$:\n$$K_{\\text{total}} = \\frac{1}{2} \\left(m + \\frac{M_s}{3}\\right) v_{\\text{block}}^2$$\nThus, the effective mass is $m_{\\text{eff}} = m + \\frac{M_s}{3}$.",
	},
	{
		id: 54,
		text: "A spring of force constant $k$ is loaded with mass $m$ and oscillates with frequency $f$. If the spring is cut into two equal parts and one part is loaded with the same mass $m$, the new frequency of oscillation will be:",
		options: ["$f$", "$\\sqrt{2} f$", "$2 f$", "$f / \\sqrt{2}$"],
		correctOption: 1,
		explanation:
			"The frequency of a spring-mass system is:\n$$f = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}$$\n1. When the spring is cut into two equal halves, the spring constant of each half becomes $k' = 2k$ (since $k \\propto 1/L$).\n2. Loading one half with the same mass $m$ yields the new frequency:\n   $$f' = \\frac{1}{2\\pi} \\sqrt{\\frac{k'}{m}} = \\frac{1}{2\\pi} \\sqrt{\\frac{2k}{m}} = \\sqrt{2} \\left(\\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}\\right) = \\sqrt{2} f$$",
	},
	{
		id: 55,
		text: "A simple pendulum is suspended from the ceiling of a lift. The lift is falling freely under gravity. The time period of the pendulum inside the lift is:",
		options: [
			"$T = 2\\pi \\sqrt{L/g}$",
			"Zero",
			"Infinite",
			"$T = 2\\pi \\sqrt{L / 2g}$",
		],
		correctOption: 2,
		explanation:
			"In a freely falling lift, the downward acceleration is $a = g$. The effective acceleration due to gravity inside the lift's reference frame is:\n$$g_{\\text{eff}} = g - a = g - g = 0$$\nThe time period of the pendulum is:\n$$T = 2\\pi \\sqrt{\\frac{L}{g_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{L}{0}} = \\infty$$\nThe pendulum does not swing because there is no gravity to provide a restoring torque.",
	},
	{
		id: 56,
		text: "A simple pendulum has a bob which is a sphere containing a small negative charge $-q$. If a uniform electric field $E$ is applied vertically downwards, what happens to the time period of the pendulum?",
		options: ["Increases", "Decreases", "Remains the same", "Becomes infinite"],
		correctOption: 0,
		explanation:
			"When a downward electric field $E$ is applied, the negatively charged bob experiences an upward electrostatic force $F_e = qE$.\n\nThe net downward force on the bob of mass $m$ is:\n$$F_{\\text{net}} = mg - qE$$\nThis yields the effective acceleration due to gravity:\n$$g_{\\text{eff}} = g - \\frac{qE}{m}$$\nSince $g_{\\text{eff}} < g$, and the time period is $T = 2\\pi \\sqrt{\\frac{L}{g_{\\text{eff}}}}$, the time period of the pendulum increases.",
	},
	{
		id: 57,
		text: "The motion of a particle executing SHM is given by $x = A \\sin(\\omega t - \\pi/4)$. The kinetic energy of the particle is equal to its potential energy for the first time after $t = 0$ at:",
		options: [
			"$t = \\pi / 4\\omega$",
			"$t = \\pi / 2\\omega$",
			"$t = 3\\pi / 4\\omega$",
			"$t = \\pi / \\omega$",
		],
		correctOption: 1,
		explanation:
			"For kinetic energy to equal potential energy ($K = U$):\n$$\\frac{1}{2} k (A^2 - x^2) = \\frac{1}{2} k x^2 \\implies A^2 - x^2 = x^2 \\implies x = \\pm \\frac{A}{\\sqrt{2}}$$\n\nGiven $x(t) = A \\sin(\\omega t - \\pi/4)$:\nAt $t = 0$, we have $x(0) = A \\sin(-\\pi/4) = -\\frac{A}{\\sqrt{2}}$, which means $K = U$ initially.\n\nThe next time this occurs is when the phase satisfies:\n$$\\omega t - \\pi/4 = \\frac{\\pi}{4} \\implies \\omega t = \\frac{\\pi}{2} \\implies t = \\frac{\\pi}{2\\omega}$$",
	},
	{
		id: 58,
		text: "A simple pendulum of length $L$ is oscillating with a small amplitude. The bob is replaced by another bob of double the mass but same shape and size. The time period will:",
		options: [
			"Be doubled",
			"Be halved",
			"Remain unchanged",
			"Be increased by $\\sqrt{2}$ times",
		],
		correctOption: 2,
		explanation:
			"The time period of a simple pendulum is given by:\n$$T = 2\\pi \\sqrt{\\frac{L}{g}}$$\nThis formula does not depend on the mass $m$ of the bob. Replacing the bob with one of double the mass (while keeping size and shape identical to maintain the same air resistance) leaves the time period unchanged.",
	},
	{
		id: 59,
		text: "In a damped harmonic oscillation, the time in which the amplitude of oscillation decays to $1/e$ (approximately $36.8\\%$) of its initial value is called the:",
		options: [
			"Time period",
			"Half-life",
			"Relaxation time",
			"Damping coefficient",
		],
		correctOption: 2,
		explanation:
			"The amplitude of a damped oscillator decays as:\n$$A(t) = A_0 e^{-\\gamma t}$$\nwhere $\\gamma = \\frac{b}{2m}$.\nThe relaxation time $\\tau$ is defined as the time interval in which amplitude decays to $1/e$ of the initial value:\n$$A(\\tau) = A_0 e^{-\\gamma \\tau} = A_0 e^{-1} \\implies \\gamma \\tau = 1 \\implies \\tau = \\frac{1}{\\gamma} = \\frac{2m}{b}$$\nThis decay time is called the relaxation time.",
	},
	{
		id: 60,
		text: "Two simple harmonic motions are represented by $y_1 = 0.1 \\sin(100\\pi t + \\pi/3)$ and $y_2 = 0.1 \\cos(100\\pi t)$. The phase difference between the two motions is:",
		options: [
			"$\\pi/6\\text{ rad}$",
			"$\\pi/3\\text{ rad}$",
			"$\\pi/2\\text{ rad}$",
			"$5\\pi/6\\text{ rad}$",
		],
		correctOption: 0,
		explanation:
			"To find the phase difference, express both equations in sine format with positive amplitude:\n1) $y_1 = 0.1 \\sin(100\\pi t + \\pi/3)$\n2) $y_2 = 0.1 \\cos(100\\pi t) = 0.1 \\sin(100\\pi t + \\pi/2)$\n\nComparing the phases:\n$$\\Delta \\phi = \\phi_2 - \\phi_1 = \\left(100\\pi t + \\frac{\\pi}{2}\\right) - \\left(100\\pi t + \\frac{\\pi}{3}\\right) = \\frac{\\pi}{2} - \\frac{\\pi}{3} = \\frac{3\\pi - 2\\pi}{6} = \\frac{\\pi}{6}\\text{ rad}$$$",
	},
];
