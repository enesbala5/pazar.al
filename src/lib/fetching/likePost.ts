import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { nav } from '$lib/userPreferences/nav';

export default async (request: string) => {
	if (!request || typeof request !== 'string') {
		return;
	}

	let url = nav.api.likePost;

	const response = await fetch(url, {
		method: 'POST',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Basic ' + Credential,
		}),
		cache: 'default',
		body: JSON.stringify(request),
	});

	console.log(await response.json());
};

// export const checkIfLiked
