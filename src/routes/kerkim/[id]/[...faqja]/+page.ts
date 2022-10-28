import type { searchQuery } from '$lib/types/query';
import type { PageLoad } from './$types';

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
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		cache: 'force-cache',
		body: JSON.stringify(query),
	})
		.then((response: any) => response.json())
		.then((data: any) => {
			return data;
		});
};

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

	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		cache: 'no-cache',
		body: JSON.stringify(completeQuery),
	})
		.then((response: any) => response.json())
		.then((data: any) => {
			return data;
		});
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
		count: await loadCount(fetch, params.id),
		data: await loadFromApi(fetch, params),
	};
};
