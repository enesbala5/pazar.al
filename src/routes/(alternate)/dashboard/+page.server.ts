import type { PageUser } from '$lib/types/page';
import { nav } from '$lib/userState/nav';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user: PageUser | undefined = locals.user ?? undefined;
	if (user === undefined) {
		throw redirect(302, nav.login);
	}
};
