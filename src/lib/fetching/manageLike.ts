import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { nav } from '$lib/userState/nav';
import type { Alert } from '$lib/userState/alerts';

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

/**
 * Function to manage liked posts
 *
 * @var postId: string -> UUID of POST
 * @var isLiked: boolean -> If post is Liked or Not
 */
export default async (postId: string, isLiked: boolean) => {
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
			const error: Alert = {
				id: Math.random(),
				title: 'Something went wrong.',
				message: 'Please try again later.',
				type: 'error',
				selfDismissable: true,
			};
			return { updatedLikes: false, error };
		}

		const data = await response.json();
		console.log('liked post | response: ', data);

		if (data?.message == 'You are not logged in') {
			const error: Alert = {
				id: Math.random(),
				title: 'You are not logged in.',
				message: 'Please sign in or register to like posts.',
				type: 'error',
				selfDismissable: true,
			};
			return { updatedLikes: false, error };
		}
		return { updatedLikes: true };
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
			const error: Alert = {
				id: Math.random(),
				title: 'Something went wrong.',
				message: 'Please try again later.',
				type: 'error',
				selfDismissable: true,
			};
			return { updatedLikes: false, error };
		}

		const data = await response.json();
		console.log('disliked post | response: ', data);

		if (data?.message == 'You are not logged in') {
			const error: Alert = {
				id: Math.random(),
				title: 'You are not logged in.',
				message: 'Please sign in or register to like posts.',
				type: 'error',
				selfDismissable: true,
			};
			return { updatedLikes: false, error };
		}

		return { updatedLikes: true };
	}
};
