import katex from "katex";

interface MathTextProps {
	text: string;
	className?: string;
}

export function MathText({ text, className = "" }: MathTextProps) {
	if (!text) return null;

	// Split by display math ($$...$$) first, then inline math ($...$)
	const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/g);

	return (
		<span className={className}>
			{parts.map((part, index) => {
				const isMath = part.startsWith("$");
				if (!isMath) {
					// Render regular text blocks
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: parts array is static
						<span key={index}>{part}</span>
					);
				}

				const isDisplay = part.startsWith("$$");
				const mathContent = isDisplay ? part.slice(2, -2) : part.slice(1, -1);

				try {
					const html = katex.renderToString(mathContent, {
						displayMode: isDisplay,
						throwOnError: false,
					});

					return (
						// biome-ignore lint/suspicious/noArrayIndexKey lint/security/noDangerouslySetInnerHtml: KaTeX static rendering is safe
						<span key={index} dangerouslySetInnerHTML={{ __html: html }} />
					);
				} catch (err) {
					console.error("KaTeX render error:", err);
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: parts array is static
						<span key={index}>{part}</span>
					);
				}
			})}
		</span>
	);
}
