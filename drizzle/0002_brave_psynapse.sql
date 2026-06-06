CREATE TABLE `todos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`content` text NOT NULL,
	`completed` integer DEFAULT false NOT NULL,
	`week_start_date` text NOT NULL,
	`chapter_key` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
