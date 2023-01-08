import type { PageLoad } from './$types';

import type { searchQuery } from '$lib/types/query';
import { nav } from '$lib/userState/nav';
import type { Product } from '$lib/types/product';
import type { PageUser } from '$lib/types/page';
import { error } from '@sveltejs/kit';

interface FullUserInfo extends Product {
	author: PageUser;
}

type GetPostQuery = FullUserInfo;

export interface PostimPageRequest {
	data: GetPostQuery;
}

const loadFromApi = async (
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

	const post = await response.json();

	const finalResponse: PostimPageRequest = {
		data: post,
	};

	return finalResponse;
};

const checkIfCurrentUserIsAuthor = (
	authorUid: string | undefined,
	currentUserUid: string | undefined
) => {
	if (authorUid !== undefined && currentUserUid !== undefined) {
		return authorUid === currentUserUid;
	}
	return false;
};

export const load: PageLoad<PostimPageRequest> = async ({ params, fetch, locals }: any) => {
	const data: PostimPageRequest = await loadFromApi(fetch, params);
	let currentUserIsAuthor = checkIfCurrentUserIsAuthor(data?.data?.author?.uid, locals?.user?.uid);

	if (currentUserIsAuthor) {
		return { ...data };
	}
	return undefined;
};
