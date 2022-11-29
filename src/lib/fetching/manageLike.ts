import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { nav } from '$lib/userPreferences/nav';

export const checkIfLiked = async (postId: string) => {
	let checkIfLikedUrl = nav.api.checkIfLiked;

	const isLikedResponse = await fetch(checkIfLikedUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(postId),
	});

	const isLiked = await isLikedResponse.json();
	return isLiked;
};

export default async (postId: string, isLiked: boolean) => {
	let error: boolean;
	// const isLiked = await checkIfLiked(postId);

	if (!isLiked) {
		// ! LIKE POST
		let url = nav.api.likePost;

		const response = await fetch(url, {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Basic' + Credential,
			}),
			cache: 'default',
			body: JSON.stringify(postId),
		});

		if (!response.ok) {
			error = true;
		}

		console.log('liked post | response: ', await response.json());
	} else {
		// ! DISLIKE POST
		let url = nav.api.dislikePost;

		const response = await fetch(url, {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Basic' + Credential,
			}),
			cache: 'default',
			body: JSON.stringify(postId),
		});

		if (!response.ok) {
			error = true;
		}

		console.log('disliked post | response: ', await response.json());

		let count = 0;
		if (count < 3) {
			setInterval(() => {
				if (error) {
					console.log(count, { error });

					count = 999;
					return true;
				}
			}, 2000);
		}
	}
};
