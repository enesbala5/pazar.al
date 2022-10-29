import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import type { Post } from '@prisma/client';
import type { searchQuery } from '$lib/types/query';

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
	let url = '/api/getPost';
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(query.id),
	});

	if (!response.ok) {
		throw error(404, 'Postimi nuk u gjet');
	}

	const data = await response.json();
	return data;
};

export const load: PageLoad = async ({ params, fetch }) => {
	const data = await loadFromApi(fetch, params);
	return data;
};
