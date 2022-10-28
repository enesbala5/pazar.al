import type { searchQuery } from '$lib/types/query';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

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
	completeQuery: searchQuery
) => {
	let url = `/api/getLatestPosts`;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		cache: 'no-cache',
		body: JSON.stringify(completeQuery),
	});

	if (!response.ok) {
		return {};
	}

	const data = await response.json();
	return await data;
};

const loadCount = async (
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
	query: {}
) => {
	let url = `/api/getLatestPosts/count`;
	console.log('+page.ts query (kerkim): ', query);

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		cache: 'default',
		body: JSON.stringify(query),
	});

	if (!response.ok) {
		return {};
	}

	const data = await response.json();
	return await data;
};

export const load: PageLoad = async ({ params, fetch }) => {
	console.log('params kerkim/id/faqja', params);

	let pageNumberParam = 1;

	if (params.faqja !== '') {
		pageNumberParam = Number(params.faqja);
	}

	return {
		kerkim: params.id ?? '',
		pageNumber: pageNumberParam,
		data: await loadFromApi(fetch, params),
		count: await loadCount(fetch, params.id),
	};
};
