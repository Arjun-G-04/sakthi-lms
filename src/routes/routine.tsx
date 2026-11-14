import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Compass } from "lucide-react";
import { DailyRoutineModule } from "#/components/DailyRoutine/DailyRoutineModule";

export const Route = createFileRoute("/routine")({
	head: () => ({
		meta: [
			{
				title: "Daily Routine & Cognitive Track | Sakthi NEET 2027",
			},
			{
				name: "description",
				content:
					"Cognitive track presets, deep focus logging, and daily routine execution for Sakthi.",
			},
		],
	}),
	component: RoutinePage,
});

function RoutinePage() {
	return (
		<main className="relative min-h-screen text-[#1a2840] py-6 px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-[1440px] space-y-6 relative z-10">
				{/* Top bar with back link */}
				<div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1a2840]/10 pb-4">
					<div className="flex items-center gap-3">
						<Link
							to="/"
							className="inline-flex items-center gap-1.5 rounded-xl border border-[#1a2840]/15 bg-[#fdfaf4] px-3 py-1.5 text-xs font-bold text-[#1a2840] shadow-xs hover:border-[#b8872a] hover:bg-[#faf6ee] transition-colors"
						>
							<ArrowLeft className="h-3.5 w-3.5 text-[#b8872a]" />
							<span>Dashboard</span>
						</Link>
						<div className="h-4 w-px bg-[#1a2840]/15" />
						<div>
							<p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b8872a]">
								NEET 2027 Routine Control
							</p>
							<h1 className="text-xl sm:text-2xl font-bold text-[#1a2840]">
								Daily Routine & Cognitive Track
							</h1>
						</div>
					</div>

					<div className="flex items-center gap-2">
						<span className="inline-flex items-center gap-1 rounded-lg border border-[#2d5a3d]/20 bg-[#2d5a3d]/10 px-2.5 py-1 text-xs font-bold text-[#2d5a3d]">
							<Compass className="h-3.5 w-3.5" />
							<span>Circadian & Focus Aligned</span>
						</span>
					</div>
				</div>

				{/* Main Module Component */}
				<DailyRoutineModule />
			</div>
		</main>
	);
}
