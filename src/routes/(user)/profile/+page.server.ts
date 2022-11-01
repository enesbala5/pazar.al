import type { PageUser } from '$lib/types/page';
import { nav } from '$lib/userPreferences/nav';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	console.log('AAAAAA', locals.user);

	const user: PageUser | undefined = locals.user ?? undefined;

	if (user?.role === undefined) {
		throw redirect(302, nav.index);
	}
};
