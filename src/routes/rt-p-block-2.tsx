import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Simulator } from "#/components/CbtSimulator/Simulator";
import { pBlock2Questions } from "#/components/PBlock2Simulator/questions";

export const Route = createFileRoute("/rt-p-block-2")({
	head: () => ({
		links: [
			{
				rel: "stylesheet",
				href: "https://cdn.jsdelivr.net/npm/katex@0.17.0/dist/katex.min.css",
			},
		],
	}),
	component: TestPage,
});

function TestPage() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<main className="relative min-h-screen text-[#1a2840] py-6 px-4 sm:px-6 lg:px-8">
			{/* Parchment background margins consistent with the app theme */}
			<div className="mx-auto max-w-[1440px] space-y-4 relative z-10">
				{/* Render simulator only after client mount */}
				{isMounted ? (
					<Simulator
						testName="p-block (Test 2)"
						subtitle="Class 11 Chemistry | Chapter Assessment 2"
						chaptersCovered={["p-block"]}
						questions={pBlock2Questions}
					/>
				) : (
					<div className="min-h-[400px] flex flex-col items-center justify-center rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-8 text-center shadow-xs">
						<div className="h-8 w-8 animate-spin rounded-full border-4 border-[#b8872a] border-t-transparent" />
						<p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#1a2840]/60">
							Initialising CBT Exam Terminal...
						</p>
					</div>
				)}
			</div>
		</main>
	);
}
