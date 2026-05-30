CREATE TABLE `chapter_progress` (
	`chapter_key` text PRIMARY KEY NOT NULL,
	`subject` text NOT NULL,
	`class_level` text NOT NULL,
	`chapter_title` text NOT NULL,
	`notes` text DEFAULT 'Yet to begin' NOT NULL,
	`exercise` text DEFAULT 'Yet to begin' NOT NULL,
	`level1` text DEFAULT 'Yet to begin' NOT NULL,
	`level2` text DEFAULT 'Yet to begin' NOT NULL,
	`mb` text DEFAULT 'Yet to begin' NOT NULL,
	`status` text DEFAULT 'Weak' NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
