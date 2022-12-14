/// <reference types="@sveltejs/kit" />

import type { AccountType, Prisma, Role, SellerInformation } from '@prisma/client';

// src/app.d.ts

/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		user: {
			uid: string;
			firstName?: string;
			lastName?: string;
			email: string;
			username?: string;
			account_type: AccountType;
			sellerInfo: SellerInformation | null;
			profilePicture?: string;
			role: Role;
		};
		language: string;
		darkMode: boolean;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
