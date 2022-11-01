/// <reference types="@sveltejs/kit" />

import type { Prisma, Role } from '@prisma/client';

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
	interface Locals {
		user: {
			name: string;
			surname: string;
			email: string;
			role: Role;
		};
		language: string;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
