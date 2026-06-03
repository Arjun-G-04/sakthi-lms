import { RING_COLORS, RingMeter } from "#/components/ChapterTracker/RingMeter";
import type { StatusState } from "#/lib/chapter-catalog";
import type { ChapterBoardSection } from "#/lib/chapter-progress.functions";

export function SectionRingButton({
	section,
	active,
	onClick,
}: {
	section: ChapterBoardSection;
	active: boolean;
	onClick: () => void;
}) {
	const countStatus = (status: StatusState) => {
		return section.chapters.filter((chapter) => chapter.status === status)
			.length;
	};

	return (
		<button
			type="button"
			onClick={onClick}
			className={`relative flex flex-col items-center gap-3 rounded-[20px] border p-3.5 text-center transition-all duration-300 ${
				active
					? "bg-[#1a2840] text-[#fdfaf4] shadow-[0_8px_20px_rgba(26,40,64,0.2)]"
					: "bg-[#fdfaf4]/80 text-[#1a2840]/70 hover:bg-[#fdfaf4] hover:scale-[1.03] hover:shadow-[0_4px_12px_rgba(26,40,64,0.1)]"
			}`}
			style={{
				borderColor: active ? `${section.accent}55` : "rgba(26, 40, 64, 0.1)",
				boxShadow: active
					? `0 0 20px -6px ${section.accent}33, inset 0 1px 0 rgba(255,255,255,0.1)`
					: undefined,
			}}
		>
			<RingMeter
				size={88}
				segments={[
					{
						label: "Weak",
						value: countStatus("Weak"),
						total: section.chapters.length,
						color: RING_COLORS.Weak,
					},
					{
						label: "Medium",
						value: countStatus("Medium"),
						total: section.chapters.length,
						color: RING_COLORS.Medium,
					},
					{
						label: "Strong",
						value: countStatus("Strong"),
						total: section.chapters.length,
						color: RING_COLORS.Strong,
					},
				]}
				center={
					<div className="flex flex-col items-center text-center leading-none">
						<span
							className={`text-[9px] font-bold uppercase tracking-widest ${active ? "text-white/80" : "text-[#1a2840]/40"}`}
						>
							{section.subject.substring(0, 3)}
						</span>
						<span
							className={`text-sm font-black mt-1 ${active ? "text-white" : "text-[#1a2840]"}`}
						>
							{section.grade}
						</span>
					</div>
				}
				active={active}
			/>
			<div className="mt-1 flex flex-col items-center gap-1">
				<p
					className={`text-[11px] font-bold uppercase tracking-[0.15em] ${active ? "text-white" : "text-[#1a2840]/80"}`}
				>
					{section.subject}
				</p>
				<span
					className={`text-[9px] font-semibold tracking-[0.1em] uppercase ${active ? "text-white/70" : "text-[#1a2840]/45"}`}
				>
					Class {section.grade}
				</span>
			</div>
		</button>
	);
}
