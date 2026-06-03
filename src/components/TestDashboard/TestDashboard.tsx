import { Filter, Plus, TrendingUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { TestChart } from "#/components/TestDashboard/TestChart";
import { TestHistoryTable } from "#/components/TestDashboard/TestHistoryTable";
import { TestRegistryModal } from "#/components/TestDashboard/TestRegistryModal";
import {
	type ChartPoint,
	type FormTestState,
	getScoreColor,
	type TestType,
} from "#/components/TestDashboard/utils";
import {
	addTestPerformance,
	deleteTestPerformance,
	loadTestPerformances,
} from "#/lib/test-performance.functions";

type TestDashboardProps = {
	initialTests: TestType[];
};

export function TestDashboard({ initialTests }: TestDashboardProps) {
	const [tests, setTests] = useState<TestType[]>(initialTests);
	const [showAddForm, setShowAddForm] = useState(false);
	const [submittingTest, setSubmittingTest] = useState(false);
	const [newTest, setNewTest] = useState<FormTestState>({
		testDate: new Date().toISOString().split("T")[0],
		testName: "",
		durationMinutes: 180,
		totalMarks: 720,
		scoredMarks: 0,
		testType: "",
		chaptersCovered: [] as string[],
	});

	const [hiddenTypes, setHiddenTypes] = useState<Record<string, boolean>>({});
	const [chartMode, setChartMode] = useState<"single" | "multi">("single");
	const [recentAvgFilter, setRecentAvgFilter] = useState<string>("All Types");
	const [hoveredPoint, setHoveredPoint] = useState<ChartPoint | null>(null);

	useEffect(() => {
		setTests(initialTests);
	}, [initialTests]);

	const existingTypes = useMemo(() => {
		const types = new Set<string>(tests.map((t) => t.testType));
		return Array.from(types);
	}, [tests]);

	const recentAvg = useMemo(() => {
		const filtered =
			recentAvgFilter === "All Types"
				? tests
				: tests.filter((t) => t.testType === recentAvgFilter);

		const sorted = [...filtered].sort(
			(a, b) => new Date(a.testDate).getTime() - new Date(b.testDate).getTime(),
		);
		const last3 = sorted.slice(-3);
		if (last3.length === 0) return null;

		const totalScored = last3.reduce((sum, t) => sum + t.scoredMarks, 0);
		const totalPossible = last3.reduce((sum, t) => sum + t.totalMarks, 0);
		const percent =
			totalPossible > 0 ? Math.round((totalScored / totalPossible) * 100) : 0;
		return { percent, count: last3.length };
	}, [tests, recentAvgFilter]);

	const activeTests = useMemo(() => {
		return tests.filter((t) => !hiddenTypes[t.testType]);
	}, [tests, hiddenTypes]);

	const sortedActive = useMemo(() => {
		return [...activeTests].sort(
			(a, b) => new Date(a.testDate).getTime() - new Date(b.testDate).getTime(),
		);
	}, [activeTests]);

	const parsedPoints = useMemo(() => {
		return sortedActive.map((t, idx) => {
			const percent = Math.round((t.scoredMarks / t.totalMarks) * 100);
			const timestamp = new Date(t.testDate).getTime();
			return {
				...t,
				percent,
				timestamp,
				index: idx,
			};
		});
	}, [sortedActive]);

	const timeBounds = useMemo(() => {
		if (parsedPoints.length === 0) return { min: 0, max: 0 };
		const times = parsedPoints.map((p) => p.timestamp);
		return { min: Math.min(...times), max: Math.max(...times) };
	}, [parsedPoints]);

	async function handleAddTest(e: React.FormEvent) {
		e.preventDefault();
		if (!newTest.testName.trim() || !newTest.testType.trim()) {
			alert("Please enter test name and test type!");
			return;
		}
		if (
			newTest.totalMarks <= 0 ||
			newTest.scoredMarks < 0 ||
			newTest.scoredMarks > newTest.totalMarks
		) {
			alert("Please enter valid marks values!");
			return;
		}

		setSubmittingTest(true);
		try {
			await addTestPerformance({
				data: {
					testDate: newTest.testDate,
					testName: newTest.testName.trim(),
					chaptersCovered: newTest.chaptersCovered,
					durationMinutes: Number(newTest.durationMinutes),
					totalMarks: Number(newTest.totalMarks),
					scoredMarks: Number(newTest.scoredMarks),
					testType: newTest.testType.trim(),
				},
			});

			const updated = await loadTestPerformances();
			setTests(updated);

			setNewTest({
				testDate: new Date().toISOString().split("T")[0],
				testName: "",
				durationMinutes: 180,
				totalMarks: 720,
				scoredMarks: 0,
				testType: "",
				chaptersCovered: [],
			});
			setShowAddForm(false);
		} catch (error) {
			console.error("Failed to add test", error);
			alert(
				"Error adding test: " +
					(error instanceof Error ? error.message : String(error)),
			);
		} finally {
			setSubmittingTest(false);
		}
	}

	async function handleDeleteTest(id: number) {
		if (
			!confirm("Are you sure you want to delete this test performance entry?")
		)
			return;

		const backup = [...tests];
		setTests((prev) => prev.filter((t) => t.id !== id));

		try {
			await deleteTestPerformance({ data: id });
		} catch (error) {
			console.error("Failed to delete test", error);
			setTests(backup);
			alert(
				"Error deleting test: " +
					(error instanceof Error ? error.message : String(error)),
			);
		}
	}

	return (
		<section className="space-y-6">
			{/* Header row */}
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<div className="h-px flex-1 w-12 bg-[#1a2840]/10" />
					<p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#b8872a]">
						Test Performance Hub
					</p>
				</div>
				<button
					type="button"
					onClick={() => setShowAddForm(!showAddForm)}
					className="flex items-center gap-2 rounded-[16px] border border-[#1a2840]/15 bg-[#1a2840] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#fdfaf4] hover:bg-[#1a2840]/85 transition duration-200 shadow-[0_2px_8px_rgba(26,40,64,0.2)]"
				>
					<Plus className="h-4 w-4" />
					Log Test Outcome
				</button>
			</div>

			<TestRegistryModal
				showAddForm={showAddForm}
				setShowAddForm={setShowAddForm}
				newTest={newTest}
				setNewTest={setNewTest}
				submittingTest={submittingTest}
				onSubmit={handleAddTest}
				existingTypes={existingTypes}
			/>

			{/* Main chart + sidebar grid */}
			<div className="grid gap-6 lg:grid-cols-[1fr_360px]">
				<TestChart
					parsedPoints={parsedPoints}
					timeBounds={timeBounds}
					chartMode={chartMode}
					setChartMode={setChartMode}
					hoveredPoint={hoveredPoint}
					setHoveredPoint={setHoveredPoint}
					hiddenTypes={hiddenTypes}
					setHiddenTypes={setHiddenTypes}
					existingTypes={existingTypes}
				/>

				{/* Sidebar: Recent Average */}
				<aside className="space-y-6">
					<div className="relative overflow-hidden rounded-[24px] border-2 border-[#1a2840]/10 bg-[#fdfaf4]/90 shadow-[0_4px_6px_rgba(26,40,64,0.05),0_12px_32px_rgba(26,40,64,0.08),inset_0_1px_0_rgba(255,255,255,0.95)]">
						{/* Brass accent stripe */}
						<div className="h-[2px] w-full bg-gradient-to-r from-[#b8872a]/40 via-[#d4a443]/70 to-[#b8872a]/40" />
						<div className="p-5">
							<div className="flex items-center justify-between border-b border-[#1a2840]/8 pb-3">
								<div className="flex items-center gap-2">
									<TrendingUp className="h-4 w-4 text-[#b8872a]" />
									<p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#1a2840]">
										Recent Average
									</p>
								</div>

								<div className="flex items-center gap-1 shrink-0">
									<Filter className="h-3 w-3 text-[#1a2840]/30" />
									<select
										value={recentAvgFilter}
										onChange={(e) => setRecentAvgFilter(e.target.value)}
										className="rounded-lg border border-[#1a2840]/10 bg-[#fdfaf4] px-2 py-1 text-[9px] font-black uppercase tracking-wider text-[#b8872a] focus:outline-none"
									>
										<option value="All Types">All Categories</option>
										{existingTypes.map((type) => (
											<option key={type} value={type}>
												{type}
											</option>
										))}
									</select>
								</div>
							</div>

							{recentAvg ? (
								<div className="py-6 text-center space-y-4">
									<div className="flex items-center justify-center">
										<div
											className="grid h-36 w-36 place-items-center rounded-full border-2 border-[#1a2840]/10 bg-[#fdfaf4] shadow-[inset_0_0_0_1px_rgba(26,40,64,0.05),0_8px_24px_rgba(26,40,64,0.1)]"
											style={{
												boxShadow: `0 0 28px ${getScoreColor(recentAvg.percent).color}18`,
											}}
										>
											<div className="flex flex-col items-center">
												<span className="text-[10px] font-bold text-[#1a2840]/50 uppercase tracking-widest leading-none">
													Last {recentAvg.count}
												</span>
												<span
													className={`display-title text-5xl font-bold mt-2 leading-none ${
														getScoreColor(recentAvg.percent).text
													}`}
												>
													{recentAvg.percent}%
												</span>
												<span className="text-[8px] font-black text-[#b8872a]/70 uppercase tracking-widest mt-2 leading-none">
													Average
												</span>
											</div>
										</div>
									</div>
									<p className="text-[11px] text-[#1a2840]/60 px-4 leading-relaxed body-serif">
										Calculated average of the last {recentAvg.count} logged
										tests of type{" "}
										<span className="text-[#b8872a] font-bold">
											{recentAvgFilter}
										</span>
										.
									</p>
								</div>
							) : (
								<div className="py-12 text-center text-[#1a2840]/45 space-y-2">
									<p className="text-xs font-semibold">
										No Recent Data Available
									</p>
									<p className="text-[10px] leading-relaxed max-w-[200px] mx-auto body-serif text-[#1a2840]/55">
										Log at least 1 test of type {recentAvgFilter} to draw
										statistics.
									</p>
								</div>
							)}
						</div>
					</div>
				</aside>
			</div>

			<TestHistoryTable tests={tests} onDelete={handleDeleteTest} />
		</section>
	);
}
