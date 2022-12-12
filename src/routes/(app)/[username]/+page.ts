import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import { nav } from '$lib/userPreferences/nav';
import type { PageUser } from '$lib/types/page';
type maybePageUser = PageUser | null;

export const loadUser = async (fetch: any, query: any) => {
	console.log(query);

	const response = await fetch(nav.api.getUser, {
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

export const load: PageLoad<PageUser> = async ({ params, fetch }) => {
	console.log(params.username);

	const user: Awaited<Promise<PageUser | null>> = await loadUser(fetch, params.username);

	if (user === null) {
		throw error(202, 'Account not found.');
	}
	return user;

	// return {
	// 	firstName: '',
	// 	lastName: '',
	// 	account_type: 'Personal',
	// 	email: '',
	// 	username: '',
	// 	profilePicture: '',
	// 	role: 'USER',
	// 	sellerInfo: {
	// 		bid: '',
	// 		coverPicture: '',
	// 		mainColor: '',
	// 		status: 'Normal',
	// 		userUid: '',
	// 	},
	// };
};
