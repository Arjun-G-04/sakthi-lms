import type { Question } from "#/components/CbtSimulator/types";

export const lawsOfMotionQuestionsPart1: Question[] = [
	{
		id: 1,
		text: "According to Galileo's thought experiments on an inclined plane, in the ideal situation where friction is completely absent, a marble rolling down an incline and then up another incline of equal slope will:",
		options: [
			"Reach the same vertical height from which it was released",
			"Travel twice the distance on the second incline",
			"Reach half the initial vertical height",
			"Continuously accelerate indefinitely on the second plane",
		],
		correctOption: 0,
		explanation:
			"Galileo deduced that in the absence of friction, a body released from rest on an inclined plane reaches the exact same vertical height on an opposing incline regardless of the incline's slope. If the second plane is made horizontal, the body continues to move indefinitely with uniform velocity.",
	},
	{
		id: 2,
		text: "A cricket ball of mass $150\\text{ g}$ moving with a speed of $20\\text{ m/s}$ is caught by a player in $0.1\\text{ s}$. The average force exerted by the player's hands on the ball is:",
		options: [
			"$15\\text{ N}$",
			"$30\\text{ N}$",
			"$300\\text{ N}$",
			"$1.5\\text{ N}$",
		],
		correctOption: 1,
		explanation:
			"Average force is the rate of change of linear momentum: $F = \\frac{\\Delta p}{\\Delta t} = \\frac{m(v - u)}{\\Delta t}$. Here $m = 0.15\\text{ kg}$, $u = 20\\text{ m/s}$, $v = 0\\text{ m/s}$, and $\\Delta t = 0.1\\text{ s}$. Magnitude of average force $|F| = \\frac{0.15 \\times 20}{0.1} = 30\\text{ N}$.",
	},
	{
		id: 3,
		text: "A force acting on a particle of mass $m$ varies with time $t$ such that the area under the force-time ($F-t$) graph between $t = 0$ and $t = T$ represents:",
		options: [
			"Work done on the particle",
			"Change in kinetic energy of the particle",
			"Change in momentum (impulse) of the particle",
			"Power delivered to the particle",
		],
		correctOption: 2,
		explanation:
			"From Newton's second law, $F = \\frac{dp}{dt} \\implies dp = F dt$. Integrating both sides gives $\\Delta p = \\int F dt$. The integral $\\int F dt$ is the area under the $F-t$ curve, which gives the impulse or change in linear momentum.",
	},
	{
		id: 4,
		text: "A rubber ball of mass $m$ strikes a rigid vertical wall normally with speed $v$ and rebounds elastically with the same speed $v$. The magnitude of the impulse imparted by the wall to the ball is:",
		options: ["Zero", "$mv$", "$2mv$", "$\\frac{1}{2}mv$"],
		correctOption: 2,
		explanation:
			"Impulse $J = \\Delta p = p_f - p_i$. Taking direction towards the wall as positive: $p_i = +mv$ and $p_f = -mv$. Thus $\\Delta p = -mv - (+mv) = -2mv$. The magnitude of impulse imparted to the ball is $|\\Delta p| = 2mv$.",
	},
	{
		id: 5,
		text: "A rifle of mass $4\\text{ kg}$ fires a bullet of mass $50\\text{ g}$ with a muzzle velocity of $400\\text{ m/s}$. The recoil velocity of the rifle is:",
		options: [
			"$-5\\text{ m/s}$",
			"$-0.5\\text{ m/s}$",
			"$-50\\text{ m/s}$",
			"$-2\\text{ m/s}$",
		],
		correctOption: 0,
		explanation:
			"By conservation of linear momentum: $P_{initial} = P_{final} = 0 \\implies M_{rifle} V + m_{bullet} v = 0$. Substituting values: $4 \\times V + (0.050) \\times 400 = 0 \\implies 4V + 20 = 0 \\implies V = -5\\text{ m/s}$. The negative sign indicates recoil in the opposite direction.",
	},
	{
		id: 6,
		text: "A gun of mass $M$ fires a bullet of mass $m$. If the momentum of the bullet and gun system is conserved, the ratio of the kinetic energy of the bullet ($E_b$) to that of the gun ($E_g$) is:",
		options: ["$\\frac{m}{M}$", "$\\frac{M}{m}$", "$\\frac{M^2}{m^2}$", "$1$"],
		correctOption: 1,
		explanation:
			"Since magnitudes of linear momentum are equal ($p_b = p_g = p$), kinetic energy is related to momentum by $E = \\frac{p^2}{2m_{body}}$. Therefore, $\\frac{E_b}{E_g} = \\frac{p^2 / (2m)}{p^2 / (2M)} = \\frac{M}{m}$. Because $M \\gg m$, the bullet carries most of the kinetic energy.",
	},
	{
		id: 7,
		text: "A rocket of initial mass $6000\\text{ kg}$ is set for vertical firing. If the exhaust speed of gases relative to the rocket is $1000\\text{ m/s}$, the rate of combustion of fuel required to give it an initial upward acceleration of $20\\text{ m/s}^2$ is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$60\\text{ kg/s}$",
			"$120\\text{ kg/s}$",
			"$180\\text{ kg/s}$",
			"$240\\text{ kg/s}$",
		],
		correctOption: 2,
		explanation:
			"The upward thrust is $F_{th} = v_{rel} \\left(-\\frac{dm}{dt}\\right)$. Net equation of motion: $F_{th} - mg = ma \\implies v_{rel} \\left(-\\frac{dm}{dt}\\right) = m(g + a)$. Substituting values: $1000 \\times \\left(-\\frac{dm}{dt}\\right) = 6000 \\times (10 + 20) = 6000 \\times 30 = 180{,}000 \\implies -\\frac{dm}{dt} = 180\\text{ kg/s}$.",
	},
	{
		id: 8,
		text: "A man of mass $70\\text{ kg}$ stands on a weighing scale inside a lift that is ascending with a uniform acceleration of $3\\text{ m/s}^2$. The reading of the weighing scale is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$490\\text{ N}$",
			"$700\\text{ N}$",
			"$910\\text{ N}$",
			"$210\\text{ N}$",
		],
		correctOption: 2,
		explanation:
			"For an elevator accelerating upwards with acceleration $a$, the normal reaction force $N = m(g + a)$. Substituting values: $N = 70 \\times (10 + 3) = 70 \\times 13 = 910\\text{ N}$.",
	},
	{
		id: 9,
		text: "If the cable supporting an elevator breaks, allowing the elevator and its occupants to fall freely under gravity, the apparent weight of a person of mass $m$ inside the elevator becomes:",
		options: ["$mg$", "$2mg$", "Zero", "Infinite"],
		correctOption: 2,
		explanation:
			"In free fall, the downward acceleration of the lift is $a = g$. The normal reaction $N = m(g - a) = m(g - g) = 0$. The person experiences total weightlessness (apparent weight is zero).",
	},
	{
		id: 10,
		text: "Three concurrent coplanar forces of magnitudes $6\\text{ N}$, $8\\text{ N}$, and $F_3$ act on a body and keep it in equilibrium. If the $6\\text{ N}$ and $8\\text{ N}$ forces act at right angles to each other, the magnitude of $F_3$ is:",
		options: [
			"$2\\text{ N}$",
			"$10\\text{ N}$",
			"$14\\text{ N}$",
			"$\\sqrt{28}\\text{ N}$",
		],
		correctOption: 1,
		explanation:
			"For equilibrium, $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0 \\implies \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$. Since $\\vec{F}_1 \\perp \\vec{F}_2$, $|\\vec{F}_1 + \\vec{F}_2| = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ N}$. Therefore, $|\\vec{F}_3| = 10\\text{ N}$.",
	},
	{
		id: 11,
		text: "A mass $m$ is suspended from a ceiling by a light string. A horizontal force $F$ is applied to the mass so that the string makes an angle $\\theta$ with the vertical in equilibrium. The magnitude of force $F$ is:",
		options: [
			"$mg \\sin\\theta$",
			"$mg \\cos\\theta$",
			"$mg \\tan\\theta$",
			"$mg \\cot\\theta$",
		],
		correctOption: 2,
		explanation:
			"Resolving forces in equilibrium: Vertically, $T \\cos\\theta = mg$. Horizontally, $T \\sin\\theta = F$. Dividing the two equations gives $\\frac{T \\sin\\theta}{T \\cos\\theta} = \\frac{F}{mg} \\implies \\tan\\theta = \\frac{F}{mg} \\implies F = mg \\tan\\theta$.",
	},
	{
		id: 12,
		text: "Three blocks of masses $m_1 = 2\\text{ kg}$, $m_2 = 3\\text{ kg}$, and $m_3 = 5\\text{ kg}$ are placed in contact on a frictionless horizontal floor. A horizontal force $F = 30\\text{ N}$ is applied on $m_1$ pushing the system forward. The contact force between $m_2$ and $m_3$ is:",
		options: [
			"$6\\text{ N}$",
			"$9\\text{ N}$",
			"$15\\text{ N}$",
			"$24\\text{ N}$",
		],
		correctOption: 2,
		explanation:
			"Common acceleration of the system is $a = \\frac{F}{m_1 + m_2 + m_3} = \\frac{30}{2 + 3 + 5} = 3\\text{ m/s}^2$. The normal contact force between $m_2$ and $m_3$ accelerates block $m_3$ alone: $N_{23} = m_3 a = 5 \\times 3 = 15\\text{ N}$.",
	},
	{
		id: 13,
		text: "Two bodies of masses $4\\text{ kg}$ and $6\\text{ kg}$ are tied to the ends of a light string lying on a smooth horizontal table. A horizontal pulling force of $20\\text{ N}$ is applied to the $6\\text{ kg}$ body. The tension in the connecting string is:",
		options: [
			"$8\\text{ N}$",
			"$12\\text{ N}$",
			"$20\\text{ N}$",
			"$4\\text{ N}$",
		],
		correctOption: 0,
		explanation:
			"Acceleration of the system is $a = \\frac{F}{m_1 + m_2} = \\frac{20}{4 + 6} = 2\\text{ m/s}^2$. Tension $T$ in the string pulls the rear mass ($4\\text{ kg}$): $T = m_1 a = 4 \\times 2 = 8\\text{ N}$.",
	},
	{
		id: 14,
		text: "Two masses $m_1 = 3\\text{ kg}$ and $m_2 = 5\\text{ kg}$ are connected at the two ends of a light inextensible string passing over a frictionless, massless pulley (Atwood machine). The acceleration of the masses is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$1.25\\text{ m/s}^2$",
			"$2.5\\text{ m/s}^2$",
			"$5.0\\text{ m/s}^2$",
			"$0.625\\text{ m/s}^2$",
		],
		correctOption: 1,
		explanation:
			"In an Atwood machine, $a = \\frac{m_2 - m_1}{m_1 + m_2} g = \\frac{5 - 3}{5 + 3} \\times 10 = \\frac{2}{8} \\times 10 = 2.5\\text{ m/s}^2$.",
	},
	{
		id: 15,
		text: "For the same Atwood machine setup with masses $3\\text{ kg}$ and $5\\text{ kg}$ over a frictionless pulley, the tension in the string during motion is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$37.5\\text{ N}$",
			"$40.0\\text{ N}$",
			"$75.0\\text{ N}$",
			"$18.75\\text{ N}$",
		],
		correctOption: 0,
		explanation:
			"Tension in an Atwood machine string is $T = \\frac{2 m_1 m_2}{m_1 + m_2} g = \\frac{2 \\times 3 \\times 5}{3 + 5} \\times 10 = \\frac{30}{8} \\times 10 = 37.5\\text{ N}$.",
	},
	{
		id: 16,
		text: "A block slides down a smooth inclined plane of inclination $30^\\circ$. If $g = 10\\text{ m/s}^2$, the acceleration of the block down the incline is:",
		options: [
			"$10\\text{ m/s}^2$",
			"$8.66\\text{ m/s}^2$",
			"$5.0\\text{ m/s}^2$",
			"$2.5\\text{ m/s}^2$",
		],
		correctOption: 2,
		explanation:
			"On a frictionless inclined plane, the component of gravity acting parallel to the incline is $mg \\sin\\theta$. Thus, $a = g \\sin\\theta = 10 \\times \\sin 30^\\circ = 10 \\times 0.5 = 5.0\\text{ m/s}^2$.",
	},
	{
		id: 17,
		text: "A smooth inclined plane has length $s$ and height $h$. The time taken by a body starting from rest to slide down the incline is proportional to:",
		options: [
			"$\\frac{s}{\\sqrt{h}}$",
			"$\\frac{h}{\\sqrt{s}}$",
			"$\\sqrt{s h}$",
			"$\\frac{1}{\\sqrt{s h}}$",
		],
		correctOption: 0,
		explanation:
			"Acceleration down incline is $a = g \\sin\\theta = g \\frac{h}{s}$. From kinematics, $s = \\frac{1}{2} a t^2 \\implies t = \\sqrt{\\frac{2s}{a}} = \\sqrt{\\frac{2s}{g(h/s)}} = s\\sqrt{\\frac{2}{gh}} \\propto \\frac{s}{\\sqrt{h}}$.",
	},
	{
		id: 18,
		text: "A monkey of mass $40\\text{ kg}$ climbs up a vertical rope which can withstand a maximum tension of $600\\text{ N}$. The maximum acceleration with which the monkey can climb up without breaking the rope is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$2.5\\text{ m/s}^2$",
			"$5.0\\text{ m/s}^2$",
			"$7.5\\text{ m/s}^2$",
			"$15.0\\text{ m/s}^2$",
		],
		correctOption: 1,
		explanation:
			"When climbing up with acceleration $a$, the tension in the rope is $T = m(g + a)$. For the rope not to break: $T \\le T_{max} \\implies 40(10 + a) \\le 600 \\implies 10 + a \\le 15 \\implies a \\le 5.0\\text{ m/s}^2$.",
	},
	{
		id: 19,
		text: "Which of the following statements regarding action and reaction force pairs (Newton's third law) is INCORRECT?",
		options: [
			"Action and reaction forces act on two different bodies",
			"Action and reaction forces occur simultaneously without cause-and-effect delay",
			"Action and reaction forces cancel each other out to give zero net force on either body",
			"Action and reaction forces are always of the same physical nature",
		],
		correctOption: 2,
		explanation:
			"Action and reaction act on two entirely different bodies, so they never cancel each other out. Net force on an individual body depends only on external forces acting directly on that body.",
	},
	{
		id: 20,
		text: "When a horse pulls a cart forward, the force that causes the horse to move forward is:",
		options: [
			"The force the horse exerts on the cart",
			"The force the cart exerts on the horse",
			"The force the horse exerts on the ground",
			"The force the ground exerts on the horse",
		],
		correctOption: 3,
		explanation:
			"The horse pushes backward against the ground with its hooves. By Newton's third law, the ground exerts an equal and opposite forward reaction force on the horse's hooves, which propels the horse forward.",
	},
	{
		id: 21,
		text: "A wooden block of mass $2\\text{ kg}$ rests on a rough horizontal surface with coefficients of friction $\\mu_s = 0.5$ and $\\mu_k = 0.4$. If a horizontal force of $6\\text{ N}$ is applied to the block, the frictional force developed is ($g = 10\\text{ m/s}^2$):",
		options: ["$10\\text{ N}$", "$8\\text{ N}$", "$6\\text{ N}$", "Zero"],
		correctOption: 2,
		explanation:
			"Limiting static friction is $f_{L} = \\mu_s N = \\mu_s mg = 0.5 \\times 2 \\times 10 = 10\\text{ N}$. Because the applied force ($6\\text{ N}$) is less than limiting friction ($10\\text{ N}$), the block remains at rest. Since static friction is self-adjusting, $f_s = F_{applied} = 6\\text{ N}$.",
	},
	{
		id: 22,
		text: "If $\\lambda$ is the angle of friction and $\\theta$ is the angle of repose for a given pair of contact surfaces, the relationship between them is:",
		options: [
			"$\\lambda > \\theta$",
			"$\\lambda < \\theta$",
			"$\\lambda = \\theta$",
			"$\\lambda + \\theta = 90^\\circ$",
		],
		correctOption: 2,
		explanation:
			"Angle of friction $\\lambda$ satisfies $\\tan\\lambda = \\mu_s$. Angle of repose $\\theta$ is the incline angle at which a body just begins to slide down under gravity, satisfying $\\tan\\theta = \\mu_s$. Therefore, $\\tan\\lambda = \\tan\\theta \\implies \\lambda = \\theta$.",
	},
	{
		id: 23,
		text: "Pulling a lawn mower is easier than pushing it on a level lawn because:",
		options: [
			"Pulling decreases the normal reaction and hence decreases friction",
			"Pushing decreases the normal reaction and hence decreases friction",
			"Pulling converts kinetic friction into rolling friction",
			"Pushing reduces the gravitational force acting on the mower",
		],
		correctOption: 0,
		explanation:
			"When pulling at an angle $\\theta$ above the horizontal, the vertical component $F \\sin\\theta$ acts upward, reducing normal reaction: $N = mg - F \\sin\\theta \\implies f_k = \\mu(mg - F \\sin\\theta)$. When pushing at angle $\\theta$ below horizontal, $N = mg + F \\sin\\theta$, which increases friction.",
	},
	{
		id: 24,
		text: "The minimum force required to drag a body of mass $m$ along a rough horizontal plane with coefficient of friction $\\mu$ is:",
		options: [
			"$\\mu mg$",
			"$\\frac{\\mu mg}{\\sqrt{1 + \\mu^2}}$",
			"$\\frac{\\mu mg}{1 + \\mu^2}$",
			"$\\mu mg \\sqrt{1 + \\mu^2}$",
		],
		correctOption: 1,
		explanation:
			"To pull with minimum force, pull at angle $\\theta$ above horizontal. $F = \\frac{\\mu mg}{\\cos\\theta + \\mu \\sin\\theta}$. Denominator is maximum when $\\theta = \\tan^{-1}\\mu$, where $\\cos\\theta + \\mu \\sin\\theta = \\sqrt{1 + \\mu^2}$. Thus $F_{min} = \\frac{\\mu mg}{\\sqrt{1 + \\mu^2}}$.",
	},
	{
		id: 25,
		text: "A block of mass $m$ is placed on an inclined plane of inclination $\\theta$. If the coefficient of static friction is $\\mu$, the block will remain at rest without sliding provided:",
		options: [
			"$\\theta \\le \\tan^{-1}(\\mu)$",
			"$\\theta \\ge \\tan^{-1}(\\mu)$",
			"$\\theta = \\sin^{-1}(\\mu)$",
			"$\\theta = \\cos^{-1}(\\mu)$",
		],
		correctOption: 0,
		explanation:
			"Downplane gravitational component is $mg \\sin\\theta$ and max static friction is $\\mu mg \\cos\\theta$. For equilibrium, $mg \\sin\\theta \\le \\mu mg \\cos\\theta \\implies \\tan\\theta \\le \\mu \\implies \\theta \\le \\tan^{-1}(\\mu)$.",
	},
	{
		id: 26,
		text: "A block slides down an inclined plane of inclination $45^\\circ$ with an acceleration of $\\frac{g}{2\\sqrt{2}}$. The coefficient of kinetic friction $\\mu_k$ between the block and the plane is:",
		options: ["$0.25$", "$0.50$", "$0.75$", "$0.20$"],
		correctOption: 1,
		explanation:
			"Acceleration down a rough incline is $a = g(\\sin\\theta - \\mu_k \\cos\\theta)$. For $\\theta = 45^\\circ$, $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{1}{\\sqrt{2}}$. Thus $a = \\frac{g}{\\sqrt{2}}(1 - \\mu_k)$. Given $a = \\frac{g}{2\\sqrt{2}} \\implies 1 - \\mu_k = \\frac{1}{2} \\implies \\mu_k = 0.50$.",
	},
	{
		id: 27,
		text: "A body takes $n$ times as much time to slide down a rough inclined plane of inclination $\\theta$ as it takes to slide down an identical perfectly smooth inclined plane. The coefficient of friction $\\mu$ is:",
		options: [
			"$\\tan\\theta \\left(1 - \\frac{1}{n^2}\\right)$",
			"$\\tan\\theta \\left(1 - \\frac{1}{n}\\right)$",
			"$\\cot\\theta \\left(1 - \\frac{1}{n^2}\\right)$",
			"$\\cot\\theta \\left(1 - \\frac{1}{n}\\right)$",
		],
		correctOption: 0,
		explanation:
			"For smooth incline, $a_s = g \\sin\\theta \\implies t_s = \\sqrt{\\frac{2s}{g \\sin\\theta}}$. For rough incline, $a_r = g(\\sin\\theta - \\mu \\cos\\theta) \\implies t_r = \\sqrt{\\frac{2s}{g(\\sin\\theta - \\mu \\cos\\theta)}}$. Given $t_r = n t_s \\implies \\frac{a_s}{a_r} = n^2 \\implies \\frac{\\sin\\theta}{\\sin\\theta - \\mu \\cos\\theta} = n^2 \\implies \\mu = \\tan\\theta\\left(1 - \\frac{1}{n^2}\\right)$.",
	},
	{
		id: 28,
		text: "A car travelling at $20\\text{ m/s}$ along a straight horizontal level road comes to rest after skidding through a distance $s$ upon braking. If the coefficient of kinetic friction between the tyres and road is $\\mu_k = 0.5$, the stopping distance $s$ is ($g = 10\\text{ m/s}^2$):",
		options: [
			"$20\\text{ m}$",
			"$40\\text{ m}$",
			"$50\\text{ m}$",
			"$80\\text{ m}$",
		],
		correctOption: 1,
		explanation:
			"Retardation due to friction is $a = \\mu_k g = 0.5 \\times 10 = 5\\text{ m/s}^2$. From $v^2 = u^2 - 2as \\implies 0 = 20^2 - 2(5)s \\implies 10s = 400 \\implies s = 40\\text{ m}$.",
	},
	{
		id: 29,
		text: "When a person walks forward on a rough horizontal surface, the direction of the frictional force exerted by the ground on the person's feet is:",
		options: [
			"Opposite to the direction of motion (backward)",
			"In the direction of motion (forward)",
			"Perpendicular to the direction of motion",
			"Zero, because normal reaction balances gravity",
		],
		correctOption: 1,
		explanation:
			"To walk forward, the foot pushes backward against the ground. The tendency of relative sliding of the foot is backward. Static friction opposes this relative motion by acting forward on the foot, propelling the person ahead.",
	},
	{
		id: 30,
		text: "A block of mass $m$ is held stationary against a rough vertical wall by applying a horizontal force $F$. If the coefficient of static friction is $\\mu$, the minimum horizontal force $F$ required to prevent the block from sliding down is:",
		options: [
			"$\\mu mg$",
			"$\\frac{mg}{\\mu}$",
			"$\\frac{\\mu}{mg}$",
			"$\\frac{mg}{1 + \\mu}$",
		],
		correctOption: 1,
		explanation:
			"Normal reaction is $N = F$. Maximum upward static friction is $f_s = \\mu N = \\mu F$. To balance the downward weight $mg$: $\\mu F \\ge mg \\implies F \\ge \\frac{mg}{\\mu}$. Thus the minimum force required is $F_{min} = \\frac{mg}{\\mu}$.",
	},
];
