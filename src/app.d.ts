/// <reference types="@sveltejs/kit" />

import type { Prisma } from '@prisma/client';

// src/app.d.ts

/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Supabase {
		Database: import('./DatabaseDefinitions').Database;
		SchemaName: 'public';
	}

	type role = 'USER' | 'ADMIN';
	interface Locals {
		user: {
			name: string;
			role: role;
		};
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
