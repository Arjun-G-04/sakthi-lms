CREATE TABLE `test_performances` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`test_date` text NOT NULL,
	`test_name` text NOT NULL,
	`chapters_covered` text NOT NULL,
	`duration_minutes` integer NOT NULL,
	`total_marks` integer NOT NULL,
	`scored_marks` integer NOT NULL,
	`test_type` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
