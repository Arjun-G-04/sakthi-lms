import type { Question } from "#/components/CbtSimulator/types";

export const lawsOfMotionQuestionsPart2: Question[] = [
	{
		id: 31,
		text: "Which of the following correctly accounts for the physical origin of rolling friction between a wheel and a flat surface?",
		options: [
			"Molecular adhesion alone across the contact area",
			"Localised deformation of the surfaces in contact creating resistance to roll",
			"Continuous breaking of covalent bonds between wheel and road",
			"Aerodynamic drag acting along the bottom edge of the tyre",
		],
		correctOption: 1,
		explanation:
			"When a body rolls, both the body and the supporting surface undergo slight elastic deformation at the contact region. This creates a small resisting torque/depression whose slope must be continuously climbed, resulting in rolling friction ($\\mu_r \\ll \\mu_k < \\mu_s$).",
	},
	{
		id: 32,
		text: "A particle of mass $m$ moves with uniform speed $v$ along a circular path of radius $r$. The work done by the centripetal force on the particle during one complete revolution is:",
		options: [
			"$2\\pi r \\left(\\frac{m v^2}{r}\\right)$",
			"$\\frac{1}{2} m v^2$",
			"Zero",
			"$m v^2$",
		],
		correctOption: 2,
		explanation:
			"Centripetal force is directed radially inward toward the centre, whereas instantaneous displacement is directed tangentially. Because $\\vec{F}_c \\perp d\\vec{r}$ at every instant, work done $W = \\int \\vec{F}_c \\cdot d\\vec{r} = \\int F_c \\, ds \\cos 90^\\circ = 0$.",
	},
	{
		id: 33,
		text: "A car negotiates a level circular bend of radius $25\\text{ m}$. If the coefficient of static friction between tyres and road is $\\mu_s = 0.4$, the maximum speed at which the car can take the turn without skidding is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$5\\text{ m/s}$",
			"$10\\text{ m/s}$",
			"$15\\text{ m/s}$",
			"$20\\text{ m/s}$",
		],
		correctOption: 1,
		explanation:
			"On a flat horizontal circular road, the necessary centripetal force is supplied entirely by static friction: $\\frac{m v^2}{r} \\le \\mu_s mg \\implies v_{max} = \\sqrt{\\mu_s r g} = \\sqrt{0.4 \\times 25 \\times 10} = \\sqrt{100} = 10\\text{ m/s}$.",
	},
	{
		id: 34,
		text: "A curved road of radius $20\\text{ m}$ is banked for vehicles moving at a design speed of $10\\text{ m/s}$ so that no lateral friction is required. The angle of banking $\\theta$ is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$\\tan^{-1}(0.25)$",
			"$\\tan^{-1}(0.50)$",
			"$\\tan^{-1}(0.75)$",
			"$\\tan^{-1}(1.00)$",
		],
		correctOption: 1,
		explanation:
			"For frictionless banking, horizontal component of normal force supplies centripetal force: $N \\sin\\theta = \\frac{m v^2}{r}$ and $N \\cos\\theta = mg$. Dividing gives $\\tan\\theta = \\frac{v^2}{rg} = \\frac{10^2}{20 \\times 10} = \\frac{100}{200} = 0.50 \\implies \\theta = \\tan^{-1}(0.50)$.",
	},
	{
		id: 35,
		text: "For a curved road of radius $r$ banked at angle $\\theta$ with coefficient of static friction $\\mu_s$, the maximum permissible safe speed $v_{max}$ to avoid skidding outward is given by:",
		options: [
			"$\\sqrt{rg \\left(\\frac{\\mu_s + \\tan\\theta}{1 - \\mu_s \\tan\\theta}\\right)}$",
			"$\\sqrt{rg \\left(\\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s \\tan\\theta}\\right)}$",
			"$\\sqrt{rg (\\mu_s + \\tan\\theta)}$",
			"$\\sqrt{\\frac{rg}{\\mu_s \\tan\\theta}}$",
		],
		correctOption: 0,
		explanation:
			"At maximum safe speed, limiting static friction acts downward along the incline. Balancing vertical and horizontal force components yields $v_{max} = \\sqrt{rg \\left(\\frac{\\mu_s + \\tan\\theta}{1 - \\mu_s \\tan\\theta}\\right)}$.",
	},
	{
		id: 36,
		text: "A cyclist negotiating a sharp circular curve of radius $r$ with velocity $v$ bends inward from the vertical by an angle $\\theta$ given by:",
		options: [
			"$\\tan\\theta = \\frac{rg}{v^2}$",
			"$\\tan\\theta = \\frac{v^2}{rg}$",
			"$\\tan\\theta = \\frac{v}{rg}$",
			"$\\tan\\theta = \\frac{v^2 g}{r}$",
		],
		correctOption: 1,
		explanation:
			"To avoid toppling, the torque about the cyclist's centre of gravity must vanish. Normal force $N$ and friction $f_s$ combine into a resultant ground reaction directed through the centre of mass at angle $\\theta$ with vertical, where $\\tan\\theta = \\frac{f_s}{N} = \\frac{m v^2 / r}{mg} = \\frac{v^2}{rg}$.",
	},
	{
		id: 37,
		text: "A stunt motorcyclist rides around the inside of a vertical hollow cylindrical drum ('Well of Death') of radius $R$. If the coefficient of static friction between tyres and wall is $\\mu_s$, the minimum speed $v_{min}$ required to prevent slipping downward is:",
		options: [
			"$\\sqrt{\\mu_s R g}$",
			"$\\sqrt{\\frac{R g}{\\mu_s}}$",
			"$\\frac{R g}{\\mu_s}$",
			"$\\sqrt{\\frac{\\mu_s g}{R}}$",
		],
		correctOption: 1,
		explanation:
			"Normal reaction from the vertical cylinder wall provides centripetal acceleration: $N = \\frac{m v^2}{R}$. Upward static friction must support weight: $f_s = \\mu_s N \\ge mg \\implies \\mu_s \\frac{m v^2}{R} \\ge mg \\implies v \\ge \\sqrt{\\frac{R g}{\\mu_s}}$. Thus $v_{min} = \\sqrt{\\frac{R g}{\\mu_s}}$.",
	},
	{
		id: 38,
		text: "A conical pendulum consists of a bob of mass $m$ revolving in a horizontal circle at the end of a string of length $L$ inclined at angle $\\theta$ to the vertical. Its time period of revolution is:",
		options: [
			"$2\\pi \\sqrt{\\frac{L}{g}}$",
			"$2\\pi \\sqrt{\\frac{L \\cos\\theta}{g}}$",
			"$2\\pi \\sqrt{\\frac{L \\sin\\theta}{g}}$",
			"$2\\pi \\sqrt{\\frac{L \\tan\\theta}{g}}$",
		],
		correctOption: 1,
		explanation:
			"String tension resolves into $T \\cos\\theta = mg$ and $T \\sin\\theta = m \\omega^2 r$, where $r = L \\sin\\theta$. Thus $\\omega^2 = \\frac{g}{L \\cos\\theta}$. The time period is $T_{period} = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{L \\cos\\theta}{g}}$.",
	},
	{
		id: 39,
		text: "A small stone of mass $m$ tied to an inextensible light string of length $R$ is whirled in a vertical circle. The minimum speed at the lowest point required to complete the loop is:",
		options: [
			"$\\sqrt{2gR}$",
			"$\\sqrt{3gR}$",
			"$\\sqrt{5gR}$",
			"$\\sqrt{gR}$",
		],
		correctOption: 2,
		explanation:
			"At the highest point, tension $T \\ge 0 \\implies v_{top} \\ge \\sqrt{gR}$. By conservation of mechanical energy: $\\frac{1}{2}m v_{low}^2 = \\frac{1}{2}m v_{top}^2 + mg(2R) = \\frac{1}{2}mgR + 2mgR = \\frac{5}{2}mgR \\implies v_{low} = \\sqrt{5gR}$.",
	},
	{
		id: 40,
		text: "For a body performing vertical circular motion on a light string of length $R$, the difference between the tension in the string at the lowest point ($T_L$) and at the highest point ($T_H$) is:",
		options: ["$2mg$", "$4mg$", "$6mg$", "$8mg$"],
		correctOption: 2,
		explanation:
			"At the lowest point: $T_L - mg = \\frac{m v_L^2}{R} \\implies T_L = mg + \\frac{m v_L^2}{R}$. At the highest point: $T_H + mg = \\frac{m v_H^2}{R} \\implies T_H = \\frac{m v_H^2}{R} - mg$. From conservation of energy, $v_L^2 - v_H^2 = 4gR$. Therefore, $T_L - T_H = 2mg + \\frac{m(v_L^2 - v_H^2)}{R} = 2mg + 4mg = 6mg$.",
	},
	{
		id: 41,
		text: "A plumb bob suspended from the roof of a train compartment is deflected backward at an angle $\\theta$ from the vertical when the train accelerates horizontally with acceleration $a$. The angle $\\theta$ is given by:",
		options: [
			"$\\tan^{-1}\\left(\\frac{g}{a}\\right)$",
			"$\\tan^{-1}\\left(\\frac{a}{g}\\right)$",
			"$\\sin^{-1}\\left(\\frac{a}{g}\\right)$",
			"$\\cos^{-1}\\left(\\frac{a}{g}\\right)$",
		],
		correctOption: 1,
		explanation:
			"In the non-inertial frame of the accelerating train, a backward pseudo force $ma$ acts on the bob. In equilibrium: $T \\sin\\theta = ma$ and $T \\cos\\theta = mg$. Dividing gives $\\tan\\theta = \\frac{a}{g} \\implies \\theta = \\tan^{-1}\\left(\\frac{a}{g}\\right)$.",
	},
	{
		id: 42,
		text: "A block of mass $m$ rests on a smooth inclined wedge of inclination $\\theta$. The horizontal acceleration $a$ that must be given to the wedge so that the block remains stationary relative to the wedge is:",
		options: [
			"$g \\sin\\theta$",
			"$g \\cos\\theta$",
			"$g \\tan\\theta$",
			"$g \\cot\\theta$",
		],
		correctOption: 2,
		explanation:
			"In the reference frame of the wedge accelerating rightward with acceleration $a$, a leftward pseudo force $ma$ acts on the block. Balancing forces along the incline: $ma \\cos\\theta = mg \\sin\\theta \\implies a = g \\frac{\\sin\\theta}{\\cos\\theta} = g \\tan\\theta$.",
	},
	{
		id: 43,
		text: "A uniform rope of total mass $M$ and length $L$ is pulled horizontally along a smooth floor by applying a force $F$ at one end. The tension in the rope at a distance $x$ from the pulled end is:",
		options: [
			"$F \\left(1 - \\frac{x}{L}\\right)$",
			"$F \\left(\\frac{x}{L}\\right)$",
			"$F \\left(1 + \\frac{x}{L}\\right)$",
			"$\\frac{F}{2}$",
		],
		correctOption: 0,
		explanation:
			"Acceleration of the entire rope is $a = \\frac{F}{M}$. The segment behind distance $x$ has length $(L - x)$ and mass $m' = M \\frac{L - x}{L}$. Tension $T$ at point $x$ must accelerate this trailing portion: $T = m' a = M \\left(\\frac{L - x}{L}\\right) \\frac{F}{M} = F \\left(1 - \\frac{x}{L}\\right)$.",
	},
	{
		id: 44,
		text: "Sand drops vertically at a steady rate of $\\frac{dm}{dt} = 2\\text{ kg/s}$ onto a conveyor belt moving horizontally with constant speed $v = 3\\text{ m/s}$. The extra horizontal force needed to keep the conveyor belt moving at the same speed is:",
		options: [
			"$3\\text{ N}$",
			"$6\\text{ N}$",
			"$9\\text{ N}$",
			"$18\\text{ N}$",
		],
		correctOption: 1,
		explanation:
			"The extra force required is $F = v \\frac{dm}{dt}$. Here $v = 3\\text{ m/s}$ and $\\frac{dm}{dt} = 2\\text{ kg/s}$. Thus $F = 3 \\times 2 = 6\\text{ N}$. (Note: Rate of work done by force is $Fv = 18\\text{ W}$, while rate of kinetic energy gained by sand is $\\frac{1}{2}\\frac{dm}{dt}v^2 = 9\\text{ W}$; remainder is dissipated as heat).",
	},
	{
		id: 45,
		text: "A spring balance is attached to the ceiling. A light cord passing over a light frictionless pulley attached to the balance hook carries two equal masses of $5\\text{ kg}$ each at its ends. The reading of the spring balance is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$0\\text{ N}$",
			"$50\\text{ N}$",
			"$100\\text{ N}$",
			"$200\\text{ N}$",
		],
		correctOption: 2,
		explanation:
			"Since both masses are equal ($5\\text{ kg}$), the system is in static equilibrium with $a = 0$. Tension in the cord is $T = mg = 5 \\times 10 = 50\\text{ N}$. The pulley is pulled downward by two segments of the cord, so the total downward pull on the spring balance is $2T = 2 \\times 50 = 100\\text{ N}$.",
	},
	{
		id: 46,
		text: "A uniform chain of length $L$ lies on a rough horizontal tabletop. If the coefficient of static friction is $\\mu_s$, the maximum fraction of its length that can hang over the edge without the chain sliding off is:",
		options: [
			"$\\frac{\\mu_s}{1 + \\mu_s}$",
			"$\\frac{1}{1 + \\mu_s}$",
			"$\\frac{\\mu_s}{1 - \\mu_s}$",
			"$\\mu_s$",
		],
		correctOption: 0,
		explanation:
			"Let hanging length be $l$. Mass of hanging part is $\\lambda l$ and mass on table is $\\lambda (L - l)$, where $\\lambda$ is linear mass density. For equilibrium, downward weight of hanging part $\\le$ max friction on table: $(\\lambda l)g \\le \\mu_s [\\lambda (L - l)]g \\implies l \\le \\mu_s(L - l) \\implies l(1 + \\mu_s) \\le \\mu_s L \\implies \\frac{l}{L} \\le \\frac{\\mu_s}{1 + \\mu_s}$.",
	},
	{
		id: 47,
		text: "Two bodies of masses $m_1 = 1\\text{ kg}$ and $m_2 = 4\\text{ kg}$ have equal kinetic energies. The ratio of their linear momenta $\\frac{p_1}{p_2}$ is:",
		options: ["$1 : 4$", "$1 : 2$", "$2 : 1$", "$4 : 1$"],
		correctOption: 1,
		explanation:
			"Linear momentum and kinetic energy are related by $p = \\sqrt{2mE_k}$. Given $E_{k1} = E_{k2}$, we have $\\frac{p_1}{p_2} = \\frac{\\sqrt{2 m_1 E_k}}{\\sqrt{2 m_2 E_k}} = \\sqrt{\\frac{m_1}{m_2}} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2}$.",
	},
	{
		id: 48,
		text: "A bomb of mass $9\\text{ kg}$ initially at rest explodes into two pieces of masses $3\\text{ kg}$ and $6\\text{ kg}$. If the velocity of the $3\\text{ kg}$ mass is $16\\text{ m/s}$, the kinetic energy of the $6\\text{ kg}$ mass is:",
		options: [
			"$192\\text{ J}$",
			"$384\\text{ J}$",
			"$96\\text{ J}$",
			"$576\\text{ J}$",
		],
		correctOption: 0,
		explanation:
			"By momentum conservation: $m_1 v_1 + m_2 v_2 = 0 \\implies 3 \\times 16 + 6 \\times v_2 = 0 \\implies v_2 = -8\\text{ m/s}$. The kinetic energy of the $6\\text{ kg}$ piece is $E_k = \\frac{1}{2} m_2 v_2^2 = \\frac{1}{2} \\times 6 \\times (-8)^2 = 3 \\times 64 = 192\\text{ J}$.",
	},
	{
		id: 49,
		text: "A water jet issuing from a nozzle of cross-sectional area $A$ with velocity $v$ strikes a flat wall perpendicularly and splashes down without rebounding. The force exerted on the wall by the stream is (density of water is $\\rho$):",
		options: [
			"$\\frac{1}{2} \\rho A v^2$",
			"$\\rho A v^2$",
			"$2 \\rho A v^2$",
			"$\\rho A v$",
		],
		correctOption: 1,
		explanation:
			"Mass striking the wall per second is $\\frac{dm}{dt} = \\rho A v$. Initial momentum per second is $(\\rho A v)v = \\rho A v^2$. Since water loses all perpendicular velocity upon hitting the wall, rate of change of momentum is $F = \\rho A v^2$.",
	},
	{
		id: 50,
		text: "A machine gun fires $360$ bullets per minute, each having a mass of $20\\text{ g}$ and muzzle velocity of $500\\text{ m/s}$. The average recoil force required to hold the gun in position is:",
		options: [
			"$30\\text{ N}$",
			"$60\\text{ N}$",
			"$120\\text{ N}$",
			"$180\\text{ N}$",
		],
		correctOption: 1,
		explanation:
			"Rate of firing bullets per second is $n = \\frac{360}{60} = 6\\text{ bullets/s}$. Momentum carried away by each bullet is $p = mv = 0.020\\text{ kg} \\times 500\\text{ m/s} = 10\\text{ kg m/s}$. Total momentum rate (force) is $F = n \\times p = 6 \\times 10 = 60\\text{ N}$.",
	},
	{
		id: 51,
		text: "A block of mass $10\\text{ kg}$ lies on a rough horizontal surface with coefficient of static friction $\\mu_s = 0.3$. If a horizontal force of $20\\text{ N}$ is applied to the block, the magnitude of the frictional force acting on the block is ($g = 10\\text{ m/s}^2$):",
		options: ["$30\\text{ N}$", "$20\\text{ N}$", "$10\\text{ N}$", "Zero"],
		correctOption: 1,
		explanation:
			"Limiting friction $f_L = \\mu_s mg = 0.3 \\times 10 \\times 10 = 30\\text{ N}$. The applied force $F = 20\\text{ N} < f_L$, so the block remains stationary. Because static friction matches the applied force up to limiting value, $f_s = F_{applied} = 20\\text{ N}$.",
	},
	{
		id: 52,
		text: "Ball bearings are widely utilized in rotating machinery (such as bicycle hubs and motors) primarily because:",
		options: [
			"They decrease the normal contact force between surfaces",
			"They convert sliding friction into much smaller rolling friction",
			"They completely eliminate friction through magnetism",
			"They reduce the rotational inertia of the wheel",
		],
		correctOption: 1,
		explanation:
			"Rolling friction is typically orders of magnitude smaller than sliding friction ($\\mu_r \\ll \\mu_k$). Inserting spherical or cylindrical ball bearings between axles and housings replaces sliding contact with rolling contact, dramatically reducing frictional dissipation.",
	},
	{
		id: 53,
		text: "A body travels along a circular path of radius $2\\text{ m}$. At an instant when its speed is $4\\text{ m/s}$, its speed is increasing at a rate of $6\\text{ m/s}^2$. The magnitude of the resultant acceleration of the body at this instant is:",
		options: [
			"$8\\text{ m/s}^2$",
			"$10\\text{ m/s}^2$",
			"$14\\text{ m/s}^2$",
			"$2\\text{ m/s}^2$",
		],
		correctOption: 1,
		explanation:
			"Centripetal acceleration is $a_c = \\frac{v^2}{r} = \\frac{4^2}{2} = 8\\text{ m/s}^2$. Tangential acceleration is $a_t = \\frac{dv}{dt} = 6\\text{ m/s}^2$. Because $a_c$ and $a_t$ are mutually perpendicular: $a_{net} = \\sqrt{a_c^2 + a_t^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10\\text{ m/s}^2$.",
	},
	{
		id: 54,
		text: "Which of the following frames of reference is strictly an INERTIAL frame of reference?",
		options: [
			"A frame attached to a rotating merry-go-round",
			"A frame attached to an elevator falling freely under gravity",
			"A frame moving with uniform linear velocity relative to an inertial frame",
			"A frame attached to an aircraft undergoing a circular banked turn",
		],
		correctOption: 2,
		explanation:
			"An inertial frame is one in which Newton's laws hold without pseudo forces (frame acceleration is zero). Any frame in uniform (non-accelerated) rectilinear translation relative to an established inertial frame is also an inertial frame. Rotating and accelerating frames are non-inertial.",
	},
	{
		id: 55,
		text: "An elevator of total mass $1000\\text{ kg}$ is descending with an initial speed and slows down (retardation) at a uniform rate of $2\\text{ m/s}^2$. The tension in the supporting cable during this retardation is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$8000\\text{ N}$",
			"$10{,}000\\text{ N}$",
			"$12{,}000\\text{ N}$",
			"$2000\\text{ N}$",
		],
		correctOption: 2,
		explanation:
			"Downwards velocity with retardation means the acceleration vector points upwards ($a = 2\\text{ m/s}^2$ upward). Equation of motion: $T - mg = ma \\implies T = m(g + a) = 1000 \\times (10 + 2) = 12{,}000\\text{ N}$.",
	},
	{
		id: 56,
		text: "In an Atwood machine, masses of $2\\text{ kg}$ and $3\\text{ kg}$ are connected by a light string over a frictionless pulley fixed to a ceiling. The total downward reaction force exerted on the pulley's supporting hook is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$24\\text{ N}$",
			"$48\\text{ N}$",
			"$50\\text{ N}$",
			"$25\\text{ N}$",
		],
		correctOption: 1,
		explanation:
			"Tension in the string is $T = \\frac{2 m_1 m_2}{m_1 + m_2} g = \\frac{2 \\times 2 \\times 3}{2 + 3} \\times 10 = 24\\text{ N}$. The total downward force exerted on the pulley hook by both string segments is $2T = 2 \\times 24 = 48\\text{ N}$.",
	},
	{
		id: 57,
		text: "A block $A$ of mass $3\\text{ kg}$ rests on a frictionless horizontal tabletop and is connected by a light string passing over a smooth pulley to a hanging block $B$ of mass $2\\text{ kg}$. The acceleration of the system is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$2.0\\text{ m/s}^2$",
			"$4.0\\text{ m/s}^2$",
			"$6.0\\text{ m/s}^2$",
			"$10.0\\text{ m/s}^2$",
		],
		correctOption: 1,
		explanation:
			"Net driving force along string is weight of hanging block: $m_B g$. Total mass accelerated is $m_A + m_B$. Thus $a = \\frac{m_B g}{m_A + m_B} = \\frac{2 \\times 10}{3 + 2} = \\frac{20}{5} = 4.0\\text{ m/s}^2$.",
	},
	{
		id: 58,
		text: "A body of mass $m$ tied to a string of length $r$ is rotated in a vertical circle. At the instant when the string is horizontal, the tension in the string is (assuming minimum speed $\\sqrt{5gr}$ at the bottom):",
		options: ["$mg$", "$2mg$", "$3mg$", "$5mg$"],
		correctOption: 2,
		explanation:
			"When string is horizontal, height gained from lowest point is $h = r$. By conservation of energy: $v_{horiz}^2 = v_L^2 - 2gr = 5gr - 2gr = 3gr$. Since gravity acts vertically downward, string tension alone supplies centripetal force horizontally: $T = \\frac{m v_{horiz}^2}{r} = \\frac{m(3gr)}{r} = 3mg$.",
	},
	{
		id: 59,
		text: "A block of mass $m$ is pressed against a vertical wall with a force $P$ acting at an angle $\\alpha$ above the horizontal. The normal force exerted by the wall on the block is:",
		options: [
			"$P \\cos\\alpha$",
			"$P \\sin\\alpha$",
			"$P \\cos\\alpha + mg$",
			"$P \\sin\\alpha - mg$",
		],
		correctOption: 0,
		explanation:
			"Normal reaction $N$ is perpendicular to the wall (horizontal direction). The horizontal component of applied force is $P \\cos\\alpha$ pointing into the wall. Since there is no acceleration perpendicular to the wall, $N = P \\cos\\alpha$.",
	},
	{
		id: 60,
		text: "Two masses $m_1 = 1\\text{ kg}$ and $m_2 = 2\\text{ kg}$ are connected by an ideal spring and placed on a frictionless horizontal floor. The $2\\text{ kg}$ mass is given an acceleration of $3\\text{ m/s}^2$ towards the right. At that instant, the acceleration of the $1\\text{ kg}$ mass is:",
		options: [
			"$6\\text{ m/s}^2$ towards the right",
			"$6\\text{ m/s}^2$ towards the left",
			"$3\\text{ m/s}^2$ towards the left",
			"$0\\text{ m/s}^2$",
		],
		correctOption: 1,
		explanation:
			"In this two-body system without external horizontal forces on the whole system, the interaction is purely due to the spring. By Newton's third law, the force exerted by the spring on $m_1$ is equal and opposite to the force exerted on $m_2$: $\\vec{F}_1 = -\\vec{F}_2$. Since $\\vec{F}_2 = m_2 \\vec{a}_2 = 2 \\times (+3\\text{ m/s}^2) = +6\\text{ N}$ (towards the right), the spring force on $m_1$ is $\\vec{F}_1 = -6\\text{ N}$ (towards the left). Therefore, $\\vec{a}_1 = \\frac{\\vec{F}_1}{m_1} = \\frac{-6\\text{ N}}{1\\text{ kg}} = -6\\text{ m/s}^2$, which is $6\\text{ m/s}^2$ towards the left.",
	},
];
