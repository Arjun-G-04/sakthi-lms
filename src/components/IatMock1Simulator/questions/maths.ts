import type { Question } from "#/components/CbtSimulator/types";

export const iatMathsQuestions: Question[] = [
	{
		id: 31,
		text: "Let $S = \\mathbb{Z} \\times (\\mathbb{Z} \\setminus \\{0\\})$. Define a relation $\\sim$ on $S$ by $(a, b) \\sim (c, d) \\iff ad = bc$. Which of the following statements is correct regarding this relation?",
		options: [
			"$\\sim$ is reflexive and symmetric, but not transitive",
			"$\\sim$ is reflexive and transitive, but not symmetric",
			"$\\sim$ is not an equivalence relation because division by zero occurs",
			"$\\sim$ is an equivalence relation on $S$",
		],
		correctOption: 3,
		explanation:
			"(1) Reflexivity: $(a, b) \\sim (a, b)$ since $ab = ba$, valid for all $(a, b) \\in S$. (2) Symmetry: If $(a, b) \\sim (c, d)$, then $ad = bc \\implies cb = da \\implies (c, d) \\sim (a, b)$. (3) Transitivity: If $(a, b) \\sim (c, d)$ and $(c, d) \\sim (e, f)$, then $ad = bc$ and $cf = de$. Multiplying gives $adcf = bcde$. Since $d \\neq 0$ and $c$ can be non-zero (if $c=0$, $a=e=0$ directly follows), cancelling $d$ gives $af = be$, so $(a, b) \\sim (e, f)$. Thus, $\\sim$ is an equivalence relation (this is the rigorous construction of the field of rational numbers $\\mathbb{Q}$).",
	},
	{
		id: 32,
		text: "Let $f: \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{1\\}$ be defined by $f(x) = \\frac{x - 1}{x - 2}$. The inverse function $f^{-1}(x)$ is given by:",
		options: [
			"$f^{-1}(x) = \\frac{x - 2}{x - 1}$",
			"$f^{-1}(x) = \\frac{2x + 1}{x - 1}$",
			"$f^{-1}(x) = \\frac{2x - 1}{x - 1}$",
			"$f^{-1}(x) = \\frac{x + 1}{x + 2}$",
		],
		correctOption: 2,
		explanation:
			"Let $y = f(x) = \\frac{x - 1}{x - 2}$. Solving for $x$ in terms of $y$: $y(x - 2) = x - 1 \\implies xy - 2y = x - 1 \\implies xy - x = 2y - 1 \\implies x(y - 1) = 2y - 1 \\implies x = \\frac{2y - 1}{y - 1}$. For any $y \\in \\mathbb{R} \\setminus \\{1\\}$, this gives a unique pre-image $x \\neq 2$. Thus $f$ is bijective, and $f^{-1}(x) = \\frac{2x - 1}{x - 1}$.",
	},
	{
		id: 33,
		text: "The value of the infinite series $\\sum_{n=1}^\\infty \\tan^{-1}\\left(\\frac{1}{n^2 + n + 1}\\right)$ is equal to:",
		options: [
			"$\\frac{\\pi}{2}$",
			"$\\frac{\\pi}{3}$",
			"$\\frac{\\pi}{4}$",
			"$\\pi$",
		],
		correctOption: 2,
		explanation:
			"Rewrite the argument using identity $\\tan^{-1}\\left(\\frac{x - y}{1 + xy}\\right) = \\tan^{-1} x - \\tan^{-1} y$. Here, $n^2 + n + 1 = 1 + n(n + 1)$, and the numerator $1 = (n + 1) - n$. Thus: $\\tan^{-1}\\left(\\frac{1}{n^2 + n + 1}\\right) = \\tan^{-1}\\left(\\frac{(n+1) - n}{1 + n(n+1)}\\right) = \\tan^{-1}(n + 1) - \\tan^{-1}(n)$. This is a telescoping sum: $S_N = \\sum_{n=1}^N [\\tan^{-1}(n+1) - \\tan^{-1}(n)] = \\tan^{-1}(N+1) - \\tan^{-1}(1)$. Taking the limit as $N \\to \\infty$: $S_\\infty = \\lim_{N \\to \\infty} \\tan^{-1}(N+1) - \\frac{\\pi}{4} = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$.",
	},
	{
		id: 34,
		text: "Let $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Using the Cayley-Hamilton theorem or characteristic polynomial of $A$, the inverse matrix $A^{-1}$ can be expressed as:",
		options: [
			"$\\frac{1}{2}(5I - A)$",
			"$A - 5I$",
			"$\\frac{1}{5}(A - 2I)$",
			"$\\frac{1}{2}(A - 5I)$",
		],
		correctOption: 3,
		explanation:
			"The characteristic equation of $A$ is $\\det(A - \\lambda I) = 0 \\implies (1 - \\lambda)(4 - \\lambda) - 6 = 0 \\implies \\lambda^2 - 5\\lambda - 2 = 0$. By the Cayley-Hamilton theorem, $A$ satisfies its own characteristic equation: $A^2 - 5A - 2I = 0$. Multiplying by $A^{-1}$: $A - 5I - 2A^{-1} = 0 \\implies 2A^{-1} = A - 5I \\implies A^{-1} = \\frac{1}{2}(A - 5I)$.",
	},
	{
		id: 35,
		text: "Let $A$ be an invertible $3 \\times 3$ matrix such that $\\det(A) = 3$. The determinant of the matrix $\\operatorname{adj}(\\operatorname{adj} A)$ is:",
		options: ["$27$", "$81$", "$9$", "$243$"],
		correctOption: 1,
		explanation:
			"For any $n \\times n$ square matrix $A$: $\\operatorname{adj}(\\operatorname{adj} A) = (\\det A)^{n-2} A$. Taking the determinant of both sides: $\\det(\\operatorname{adj}(\\operatorname{adj} A)) = \\det\\left((\\det A)^{n-2} A\\right) = \\left((\\det A)^{n-2}\\right)^n \\det(A) = (\\det A)^{n(n-2) + 1} = (\\det A)^{(n-1)^2}$. For $n = 3$: exponent is $(3 - 1)^2 = 4$. Given $\\det(A) = 3$: $\\det(\\operatorname{adj}(\\operatorname{adj} A)) = 3^4 = 81$.",
	},
	{
		id: 36,
		text: "Consider the real function $f(x)$ defined on $\\mathbb{R}$ by $f(x) = x^2 \\sin\\left(\\frac{1}{x}\\right)$ for $x \\neq 0$, and $f(0) = 0$. At the point $x = 0$, which of the following statements is true?",
		options: [
			"$f$ is differentiable at $x = 0$, and $f'(0) = 0$, but the derivative function $f'$ is discontinuous at $x = 0$",
			"$f$ is continuous at $x = 0$, but not differentiable at $x = 0$",
			"$f'$ exists and is continuous at $x = 0$",
			"$f$ is not continuous at $x = 0$",
		],
		correctOption: 0,
		explanation:
			"By definition of derivative at $x = 0$: $f'(0) = \\lim_{h \\to 0} \\frac{f(h) - f(0)}{h} = \\lim_{h \\to 0} \\frac{h^2 \\sin(1/h) - 0}{h} = \\lim_{h \\to 0} h \\sin(1/h) = 0$ (since $|\\sin(1/h)| \\le 1$). Thus $f'(0)$ exists and equals $0$. For $x \\neq 0$, using the product rule: $f'(x) = 2x \\sin(1/x) - \\cos(1/x)$. As $x \\to 0$, $2x\\sin(1/x) \\to 0$, but $\\cos(1/x)$ oscillates wildly between $-1$ and $+1$ with no limit. Hence $\\lim_{x \\to 0} f'(x)$ does not exist, meaning $f'(x)$ is discontinuous at $x = 0$.",
	},
	{
		id: 37,
		text: "Let $f(x) = x(x - 1)(x - 2)(x - 3)$. By Rolle's theorem, the number of distinct real roots of the derivative equation $f'(x) = 0$ is:",
		options: ["$3$", "$4$", "$2$", "$1$"],
		correctOption: 0,
		explanation:
			"$f(x)$ is a polynomial of degree 4, hence continuous on $\\mathbb{R}$ and differentiable everywhere. It has 4 distinct real roots: $x = 0, 1, 2, 3$ where $f(0) = f(1) = f(2) = f(3) = 0$. By Rolle's theorem, between any two consecutive roots of $f(x)$, there must exist at least one root of $f'(x) = 0$. Thus $f'(x) = 0$ has at least one root in $(0, 1)$, one in $(1, 2)$, and one in $(2, 3)$. Since $f'(x)$ is a cubic polynomial of degree 3, it can have at most 3 roots. Therefore, $f'(x) = 0$ has exactly 3 distinct real roots.",
	},
	{
		id: 38,
		text: "The acute angle of intersection $\\theta$ between the two parabolas $y^2 = 4x$ and $x^2 = 4y$ at the non-zero point of intersection $(4, 4)$ is:",
		options: [
			"$\\frac{\\pi}{4}$",
			"$\\tan^{-1}\\left(\\frac{3}{4}\\right)$",
			"$\\tan^{-1}\\left(\\frac{4}{3}\\right)$",
			"$\\frac{\\pi}{2}$",
		],
		correctOption: 1,
		explanation:
			"For the first curve $y^2 = 4x$: differentiating with respect to $x$ gives $2y \\frac{dy}{dx} = 4 \\implies m_1 = \\frac{2}{y}$. At $(4, 4)$: $m_1 = \\frac{2}{4} = \\frac{1}{2}$. For the second curve $x^2 = 4y$: differentiating gives $2x = 4 \\frac{dy}{dx} \\implies m_2 = \\frac{x}{2}$. At $(4, 4)$: $m_2 = \\frac{4}{2} = 2$. The angle between the tangents is $\\tan\\theta = \\left|\\frac{m_2 - m_1}{1 + m_1 m_2}\\right| = \\left|\\frac{2 - 1/2}{1 + (1/2)(2)}\\right| = \\frac{3/2}{2} = \\frac{3}{4}$. Hence $\\theta = \\tan^{-1}\\left(\\frac{3}{4}\\right)$.",
	},
	{
		id: 39,
		text: "For all $x > 0$, which of the following inequalities strictly holds?",
		options: [
			"$\\ln(1 + x) < \\frac{x}{1 + x} < x$",
			"$x < \\ln(1 + x) < \\frac{x}{1 + x}$",
			"$\\frac{x}{1 + x} < x < \\ln(1 + x)$",
			"$\\frac{x}{1 + x} < \\ln(1 + x) < x$",
		],
		correctOption: 3,
		explanation:
			"Consider $f(x) = x - \\ln(1 + x)$ for $x \\ge 0$. Then $f(0) = 0$ and $f'(x) = 1 - \\frac{1}{1 + x} = \\frac{x}{1 + x} > 0$ for $x > 0$. Thus $f(x)$ is strictly increasing for $x > 0$, so $f(x) > f(0) = 0 \\implies \\ln(1 + x) < x$. Next, consider $g(x) = \\ln(1 + x) - \\frac{x}{1 + x}$. Then $g(0) = 0$ and $g'(x) = \\frac{1}{1 + x} - \\frac{(1 + x)(1) - x(1)}{(1 + x)^2} = \\frac{1}{1 + x} - \\frac{1}{(1 + x)^2} = \\frac{x}{(1 + x)^2} > 0$ for $x > 0$. Thus $g(x)$ is strictly increasing, so $g(x) > g(0) = 0 \\implies \\frac{x}{1 + x} < \\ln(1 + x)$. Combining gives $\\frac{x}{1 + x} < \\ln(1 + x) < x$.",
	},
	{
		id: 40,
		text: "A right circular cone of maximum volume is inscribed in a sphere of fixed radius $R$. The ratio of the volume of this maximum inscribed cone to the volume of the sphere is:",
		options: [
			"$\\frac{4}{9}$",
			"$\\frac{16}{27}$",
			"$\\frac{8}{27}$",
			"$\\frac{1}{3}$",
		],
		correctOption: 2,
		explanation:
			"Let the height of the cone be $h$. The base radius $r$ satisfies $r^2 + (h - R)^2 = R^2 \\implies r^2 = R^2 - (h - R)^2 = 2Rh - h^2$. The volume of the cone is $V(h) = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (2Rh^2 - h^3)$. Setting $\\frac{dV}{dh} = 0$: $\\frac{1}{3}\\pi (4Rh - 3h^2) = 0 \\implies h = \\frac{4}{3}R$ (since $h \\neq 0$). The maximum cone volume is $V_{\\text{cone}} = \\frac{1}{3}\\pi \\left[2R\\left(\\frac{4R}{3}\\right)^2 - \\left(\\frac{4R}{3}\\right)^3\\right] = \\frac{1}{3}\\pi R^3 \\left[\\frac{32}{9} - \\frac{64}{27}\\right] = \\frac{1}{3}\\pi R^3 \\left(\\frac{32}{27}\\right) = \\frac{32}{81}\\pi R^3$. Volume of sphere is $V_{\\text{sphere}} = \\frac{4}{3}\\pi R^3$. Ratio: $\\frac{V_{\\text{cone}}}{V_{\\text{sphere}}} = \\frac{(32/81)\\pi R^3}{(4/3)\\pi R^3} = \\frac{32}{81} \\times \\frac{3}{4} = \\frac{8}{27}$.",
	},
	{
		id: 41,
		text: "The indefinite integral $\\int \\frac{dx}{x(x^6 + 1)}$ evaluates to:",
		options: [
			"$\\frac{1}{6}\\ln\\left|\\frac{x^6 + 1}{x^6}\\right| + C$",
			"$\\ln\\left|\\frac{x}{x^6 + 1}\\right| + C$",
			"$\\frac{1}{7}\\ln\\left|x^6 + 1\\right| + C$",
			"$\\frac{1}{6}\\ln\\left|\\frac{x^6}{x^6 + 1}\\right| + C$",
		],
		correctOption: 3,
		explanation:
			"Multiply numerator and denominator by $x^5$: $I = \\int \\frac{x^5 dx}{x^6(x^6 + 1)}$. Substitute $u = x^6 \\implies du = 6x^5 dx \\implies x^5 dx = \\frac{du}{6}$. The integral becomes: $I = \\frac{1}{6}\\int \\frac{du}{u(u + 1)} = \\frac{1}{6}\\int \\left(\\frac{1}{u} - \\frac{1}{u + 1}\\right) du = \\frac{1}{6}(\\ln|u| - \\ln|u + 1|) + C = \\frac{1}{6}\\ln\\left|\\frac{u}{u + 1}\\right| + C = \\frac{1}{6}\\ln\\left|\\frac{x^6}{x^6 + 1}\\right| + C$.",
	},
	{
		id: 42,
		text: "The value of the definite integral $I = \\int_0^\\pi \\frac{x \\sin x}{1 + \\cos^2 x}\\,dx$ is:",
		options: [
			"$\\frac{\\pi^2}{2}$",
			"$\\frac{\\pi}{4}$",
			"$\\frac{\\pi^2}{4}$",
			"$\\pi^2$",
		],
		correctOption: 2,
		explanation:
			"Using King's property $\\int_a^b f(x)dx = \\int_a^b f(a + b - x)dx$: $I = \\int_0^\\pi \\frac{(\\pi - x)\\sin(\\pi - x)}{1 + \\cos^2(\\pi - x)}dx = \\int_0^\\pi \\frac{(\\pi - x)\\sin x}{1 + \\cos^2 x}dx = \\pi \\int_0^\\pi \\frac{\\sin x}{1 + \\cos^2 x}dx - I$. Thus $2I = \\pi \\int_0^\\pi \\frac{\\sin x}{1 + \\cos^2 x}dx$. Substitute $u = \\cos x \\implies du = -\\sin x dx$. When $x = 0, u = 1$; when $x = \\pi, u = -1$: $2I = \\pi \\int_1^{-1} \\frac{-du}{1 + u^2} = \\pi \\int_{-1}^1 \\frac{du}{1 + u^2} = \\pi [\\tan^{-1}(u)]_{-1}^1 = \\pi\\left(\\frac{\\pi}{4} - \\left(-\\frac{\\pi}{4}\\right)\\right) = \\pi\\left(\\frac{\\pi}{2}\\right) = \\frac{\\pi^2}{2}$. Therefore, $I = \\frac{\\pi^2}{4}$.",
	},
	{
		id: 43,
		text: "The value of the limit $\\lim_{x \\to 0} \\frac{\\int_0^{x^2} \\sin(\\sqrt{t})\\,dt}{x^3}$ is equal to:",
		options: ["$\\frac{2}{3}$", "$\\frac{1}{3}$", "$1$", "$0$"],
		correctOption: 0,
		explanation:
			"This is an indeterminate form of type $\\frac{0}{0}$. Applying L'Hôpital's rule and the Leibniz differentiation rule: $\\frac{d}{dx}\\left(\\int_0^{x^2} \\sin(\\sqrt{t})\\,dt\\right) = \\sin(\\sqrt{x^2}) \\cdot \\frac{d}{dx}(x^2) = \\sin(x) \\cdot 2x$ (for $x > 0$). The denominator derivative is $\\frac{d}{dx}(x^3) = 3x^2$. The limit becomes: $\\lim_{x \\to 0} \\frac{2x \\sin x}{3x^2} = \\frac{2}{3} \\lim_{x \\to 0} \\frac{\\sin x}{x} = \\frac{2}{3}(1) = \\frac{2}{3}$.",
	},
	{
		id: 44,
		text: "The limit of the sum $S = \\lim_{n \\to \\infty} \\sum_{r=1}^n \\frac{n}{n^2 + r^2}$ is equal to:",
		options: ["$\\frac{\\pi}{2}$", "$\\frac{\\pi}{4}$", "$\\ln 2$", "$1$"],
		correctOption: 1,
		explanation:
			"Factor out $n^2$ from the denominator: $S = \\lim_{n \\to \\infty} \\sum_{r=1}^n \\frac{n}{n^2\\left(1 + \\left(\\frac{r}{n}\\right)^2\\right)} = \\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\frac{1}{1 + \\left(\\frac{r}{n}\\right)^2}$. This is the standard Riemann sum converging to the definite integral: $\\int_0^1 \\frac{1}{1 + x^2}\\,dx = [\\tan^{-1} x]_0^1 = \\tan^{-1}(1) - \\tan^{-1}(0) = \\frac{\\pi}{4}$.",
	},
	{
		id: 45,
		text: "The area of the region in the first quadrant bounded between the two parabolas $y^2 = 4ax$ and $x^2 = 4ay$ (where $a > 0$) is:",
		options: [
			"$\\frac{8}{3}a^2$",
			"$\\frac{16}{3}a^2$",
			"$\\frac{32}{3}a^2$",
			"$4a^2$",
		],
		correctOption: 1,
		explanation:
			"Points of intersection: Substitute $y = \\frac{x^2}{4a}$ into $y^2 = 4ax$: $\\left(\\frac{x^2}{4a}\\right)^2 = 4ax \\implies \\frac{x^4}{16a^2} = 4ax \\implies x(x^3 - 64a^3) = 0$. The roots are $x = 0$ and $x = 4a$. Between $x = 0$ and $x = 4a$, the upper curve is $y_1 = \\sqrt{4ax} = 2\\sqrt{a} x^{1/2}$ and the lower curve is $y_2 = \\frac{x^2}{4a}$. Area $= \\int_0^{4a} (y_1 - y_2) dx = \\int_0^{4a} \\left(2\\sqrt{a}x^{1/2} - \\frac{x^2}{4a}\\right) dx = \\left[2\\sqrt{a}\\frac{x^{3/2}}{3/2} - \\frac{x^3}{12a}\\right]_0^{4a} = \\frac{4\\sqrt{a}}{3}(4a)^{3/2} - \\frac{(4a)^3}{12a} = \\frac{4\\sqrt{a}}{3}(8 a\\sqrt{a}) - \\frac{64a^3}{12a} = \\frac{32a^2}{3} - \\frac{16a^2}{3} = \\frac{16a^2}{3}$.",
	},
];
