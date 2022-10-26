/** @type {import('./$types').PageLoad} */
import type { searchQuery } from '$lib/types/query';

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

export async function load({ params, fetch }) {
	return {
		kerkim: params.id ?? '',
		pageNumber: Number(params.faqja),
		count: await loadCount(fetch, params.id),
		data: await loadFromApi(fetch, params),
	};
}
