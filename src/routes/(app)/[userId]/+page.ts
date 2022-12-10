import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import { nav } from '$lib/userPreferences/nav';
import type { PageUser } from '$lib/types/page';

export const loadUser = async (fetch: any, query: any) => {
	let getPostUrl = nav.api.getPost;
	let checkIfLikedUrl = nav.api.checkIfLiked;

	const response = await fetch(getPostUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(query.id),
	});

	const isLikedResponse = await fetch(checkIfLikedUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(query.id),
	});

	// if (!response.ok) {
	// throw error(202, 'Postimi not found.');
	// }

	const post = await response.json();
	const isLiked = await isLikedResponse.json();

	const finalResponse = {
		data: post,
		isLiked: isLiked,
	};

	return finalResponse;
};

export const load: PageLoad<PageUser> = async ({ params, fetch }) => {
	return {
		firstName: '',
		lastName: '',
		account_type: 'Personal',
		email: '',
		profilePicture: '',
		role: 'USER',
		sellerInfo: {
			bid: '',
			coverPicture: '',
			mainColor: '',
			status: 'Normal',
			userUid: '',
		},
	};
};
