import { db } from '$lib/fetching/db';
import type { PageUser } from '$lib/types/page';
import { nav } from '$lib/userPreferences/nav';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user: PageUser | undefined = locals.user ?? undefined;

	if (user === undefined) {
		throw redirect(302, nav.index);
	}

	if (user.username && user.username !== '') {
		throw redirect(302, `/${user.username}`);
	}
};
