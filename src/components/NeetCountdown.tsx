import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function NeetCountdown() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		isOver: false,
	});

	useEffect(() => {
		// Target date is May 2, 2027 at 14:00 (2:00 PM IST)
		const targetDate = new Date("2027-05-02T14:00:00+05:30");

		function calculateTimeLeft() {
			const now = new Date();
			const difference = targetDate.getTime() - now.getTime();

			if (difference <= 0) {
				return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
			}

			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
				isOver: false,
			};
		}

		setTimeLeft(calculateTimeLeft());

		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative overflow-hidden rounded-[18px] border border-[#1a2840]/12 bg-[#fdfaf4] shadow-[0_2px_12px_rgba(26,40,64,0.07),inset_0_1px_0_rgba(255,255,255,0.9)]">
			{/* Brass top accent stripe */}
			<div className="h-[2px] w-full bg-gradient-to-r from-[#b8872a]/40 via-[#d4a443]/70 to-[#b8872a]/40" />
			<div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4">
				<div className="flex items-center gap-3">
					<div className="grid h-9 w-9 place-items-center rounded-[10px] border border-[#1a2840]/12 bg-[#1a2840]/6 text-[#b8872a]">
						<Clock className="h-4 w-4" />
					</div>
					<div>
						<p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#1a2840]">
							NEET 2027 Countdown
						</p>
						<p className="text-[10px] text-[#1a2840]/45 tracking-wide">
							Target: May 2, 2027
						</p>
					</div>
				</div>

				{timeLeft.isOver ? (
					<span className="text-sm font-bold uppercase tracking-widest text-[#c0392b]">
						Exam is underway or completed!
					</span>
				) : (
					<div className="flex items-center gap-2 sm:gap-3">
						<CountdownUnit value={timeLeft.days} label="Days" />
						<span className="text-lg font-semibold text-[#b8872a]/50 animate-pulse">
							:
						</span>
						<CountdownUnit value={timeLeft.hours} label="Hrs" />
						<span className="text-lg font-semibold text-[#b8872a]/50 animate-pulse">
							:
						</span>
						<CountdownUnit value={timeLeft.minutes} label="Mins" />
						<span className="text-lg font-semibold text-[#b8872a]/50 animate-pulse">
							:
						</span>
						<CountdownUnit value={timeLeft.seconds} label="Secs" />
					</div>
				)}
			</div>
		</div>
	);
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
	return (
		<div className="flex flex-col items-center min-w-[48px]">
			<span className="display-title text-2xl font-600 text-[#1a2840] sm:text-3xl tabular-nums">
				{value.toString().padStart(2, "0")}
			</span>
			<span className="text-[9px] font-bold uppercase tracking-widest text-[#1a2840]/38 mt-0.5">
				{label}
			</span>
		</div>
	);
}
