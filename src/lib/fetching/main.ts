import type { searchQuery } from '$lib/types/query';
import { nav } from '$lib/userPreferences/nav';
import { error } from '@sveltejs/kit';

export const getLatestPosts = async (params: searchQuery) => {
	let url = nav.api.getLatestPosts;
	console.log(JSON.stringify(params));

	const response = await fetch(url, {
		method: 'POST',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Basic ' + Credential,
		}),
		cache: 'no-cache',
		body: JSON.stringify(params),
	});

	if (!response.ok) {
		throw error(404, 'Posts not found');
	}

	const data = await response.json();
	return await data;
};
