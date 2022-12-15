import { nav } from '$lib/userState/nav';
import { redirect } from '@sveltejs/kit';

import type { Actions, Action, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	throw redirect(302, '/');
};

export const actions: Actions = {
	default({ cookies }) {
		// remove the cookie
		cookies.set('session', '', {
			path: nav.index,
			expires: new Date(0),
		});

		// redirect user
		throw redirect(302, nav.login);
	},
};
