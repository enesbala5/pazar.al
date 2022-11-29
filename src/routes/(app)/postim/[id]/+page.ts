import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import type { searchQuery } from '$lib/types/query';
import { nav } from '$lib/userPreferences/nav';

export const loadFromApi = async (
	fetch: {
		(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>;
		(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>;
		(
			arg0: string,
			arg1: {
				method: string;
				headers: { 'Content-Type': string };
				body: string;
			}
		): Promise<any>;
	},
	query: searchQuery
) => {
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

	if (!response.ok) {
		throw error(404, 'Postimi not found.');
	}

	const data = await response.json();
	const isLiked = await isLikedResponse.json();
	console.log({ data, isLiked });

	return { data, isLiked };
};

export const load: PageLoad = async ({ params, fetch }) => {
	const data = await loadFromApi(fetch, params);
	return data;
};
