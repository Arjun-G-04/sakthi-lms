import { Quote, RotateCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const FALLBACK_QUOTES = [
	{
		quote:
			"The difference between ordinary and extraordinary is that little extra.",
		author: "Jimmy Johnson",
	},
	{
		quote: "It always seems impossible until it's done.",
		author: "Nelson Mandela",
	},
	{
		quote:
			"Success isn't overnight. It's when every day you get a little better than the day before. It all adds up.",
		author: "Dwayne Johnson",
	},
	{ quote: "Your focus decides your reality.", author: "Qui-Gon Jinn" },
	{
		quote: "Believe you can and you're halfway there.",
		author: "Theodore Roosevelt",
	},
	{
		quote: "Don't let what you cannot do interfere with what you can do.",
		author: "John Wooden",
	},
	{
		quote:
			"The only limit to our realization of tomorrow is our doubts of today.",
		author: "Franklin D. Roosevelt",
	},
];

export function HeroQuote() {
	const [quoteData, setQuoteData] = useState<{
		quote: string;
		author: string;
	} | null>(null);
	const [loading, setLoading] = useState(true);

	const getNewQuote = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch("https://dummyjson.com/quotes/random");
			if (!res.ok) throw new Error("API error");
			const data = await res.json();
			setQuoteData({ quote: data.quote, author: data.author });
		} catch (e) {
			console.warn("Quotes API failed, using NEET curated fallback quote", e);
			const randomIdx = Math.floor(Math.random() * FALLBACK_QUOTES.length);
			setQuoteData(FALLBACK_QUOTES[randomIdx]);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getNewQuote();
	}, [getNewQuote]);

	return (
		<div className="relative overflow-hidden rounded-[16px] border border-[#1a2840]/10 bg-[#f5eedc]/70 px-4 py-3.5 transition-all duration-300 hover:border-[#b8872a]/30 hover:bg-[#f5eedc] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
			{/* Left accent bar */}
			<div className="absolute left-0 inset-y-0 w-[3px] rounded-full bg-gradient-to-b from-[#b8872a]/60 via-[#d4a443]/80 to-[#b8872a]/30" />
			<div className="flex items-start gap-3 pl-2">
				<Quote className="mt-0.5 h-4 w-4 shrink-0 text-[#b8872a] opacity-70" />
				<div className="min-w-0 flex-1">
					{loading ? (
						<div className="space-y-2 animate-pulse py-1">
							<div className="h-2.5 w-3/4 rounded bg-[#1a2840]/10" />
							<div className="h-2 w-1/4 rounded bg-[#1a2840]/8" />
						</div>
					) : (
						<div>
							<p className="body-serif text-sm italic leading-relaxed text-[#1a2840]/80">
								&ldquo;{quoteData?.quote}&rdquo;
							</p>
							<p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-[#b8872a]/70">
								— {quoteData?.author}
							</p>
						</div>
					)}
				</div>
				<button
					type="button"
					onClick={getNewQuote}
					disabled={loading}
					className="rounded-lg p-1.5 text-[#1a2840]/35 hover:bg-[#1a2840]/6 hover:text-[#1a2840] transition duration-200"
					aria-label="Refresh Quote"
				>
					<RotateCw
						className={`h-3.5 w-3.5 ${loading ? "animate-spin text-[#b8872a]" : ""}`}
					/>
				</button>
			</div>
		</div>
	);
}
