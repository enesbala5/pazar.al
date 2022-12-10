import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import type { searchQuery } from '$lib/types/query';
import { nav } from '$lib/userPreferences/nav';
import type { Product } from '$lib/types/product';
import type { SellerInformation } from '@prisma/client';
import type { PageUser } from '$lib/types/page';

interface FullUserInfo extends Product {
	author: PageUser;
}

type GetPostQuery = FullUserInfo;

export interface PostimPageRequest {
	data: GetPostQuery;
	isLiked: boolean;
}

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

	// if (!response.ok) {
	// throw error(202, 'Postimi not found.');
	// }

	const post = await response.json();
	const isLiked = await isLikedResponse.json();

	const finalResponse: PostimPageRequest = {
		data: post,
		isLiked: isLiked,
	};

	return finalResponse;
};

export const load: PageLoad<PostimPageRequest> = async ({ params, fetch }) => {
	const data: any = await loadFromApi(fetch, params);

	return { ...data };
};
