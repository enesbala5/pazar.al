import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import { nav } from '$lib/userState/nav';
import type { PageUser } from '$lib/types/page';
type maybePageUser = PageUser | null;

const loadUser = async (fetch: any, query: any) => {
	const response = await fetch(`${nav.api.getUser}/${nav.api.getUserOptions.byId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(query),
	});

	if (!response.ok) {
		return null;
	}

	const userInfo = await response.json();

	return userInfo;
};

export const load: PageLoad<PageUser> = async ({ fetch, locals }: any) => {
	const user: Awaited<Promise<PageUser | null>> = await loadUser(fetch, locals.user.uid);

	if (user === null) {
		throw error(404, 'Account not found.');
	}

	return user;
};
