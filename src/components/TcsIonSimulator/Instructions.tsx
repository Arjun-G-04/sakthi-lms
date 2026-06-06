interface InstructionsProps {
	onStart: () => void;
	title: string;
	subtitle?: string;
}

export function Instructions({ onStart, title, subtitle }: InstructionsProps) {
	return (
		<div className="mx-auto max-w-2xl rounded-2xl border border-[#1a2840]/12 bg-[#fdfaf4]/90 p-8 text-center shadow-md animate-fade-in relative z-10 space-y-6">
			<div>
				<span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b8872a]">
					Test Session Initialisation
				</span>
				<h2 className="display-title text-4xl font-bold text-[#1a2840] mt-2">
					{title}
				</h2>
				{subtitle && (
					<p className="body-serif text-xs text-[#1a2840]/60 mt-1">
						{subtitle}
					</p>
				)}
			</div>

			<div className="h-px w-full bg-[#1a2840]/10" />

			{/* Instructions list */}
			<div className="text-left space-y-3 text-xs leading-relaxed text-[#1a2840]/80 bg-[#f5eedc]/55 p-5 rounded-xl border border-[#1a2840]/8">
				<h4 className="font-bold text-[#1a2840] uppercase tracking-wider text-[10px] mb-2">
					Session Rules & Parameters:
				</h4>
				<ul className="list-disc pl-5 space-y-2 body-serif">
					<li>
						<strong>Total Questions</strong>: 60 multiple choice questions
						(MCQ).
					</li>
					<li>
						<strong>Time Limit</strong>: 60 minutes countdown. The test will
						auto-submit when the timer expires.
					</li>
					<li>
						<strong>NEET Marking Scheme</strong>: +4 marks for correct choice,
						-1 mark for incorrect choice, 0 marks for unattempted.
					</li>
					<li>
						<strong>Session Locking</strong>: You are locked into this active
						test session. Closing or reloading the tab will terminate the
						session and discard/submit your scores.
					</li>
					<li>
						<strong>Navigation</strong>: Click &quot;Save &amp; Next&quot; to
						record your choice and proceed, or click &quot;Mark for Review&quot;
						to flag a question. Use the palette on the right to navigate
						directly.
					</li>
				</ul>
			</div>

			<div className="pt-4">
				<button
					type="button"
					onClick={onStart}
					className="w-full sm:w-auto rounded-xl bg-[#2d5a3d] hover:bg-[#2d5a3d]/90 px-8 py-3.5 text-xs font-black uppercase tracking-widest text-[#fdfaf4] transition duration-200 shadow-[0_4px_12px_rgba(45,90,61,0.25)]"
				>
					Start Test Session
				</button>
			</div>
		</div>
	);
}
