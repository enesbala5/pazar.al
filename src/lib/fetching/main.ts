import type { searchQuery } from '$lib/types/query';
import { nav } from '$lib/userPreferences/nav';
import { error } from '@sveltejs/kit';

export const getLatestPosts = async (params: searchQuery) => {
	let url = nav.api.getLatestPosts;
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-cache',
		body: JSON.stringify(params),
	});

	if (!response.ok) {
		throw error(404, 'Posts not found');
		return;
	}

	const data = await response.json();
	return await data;
};
