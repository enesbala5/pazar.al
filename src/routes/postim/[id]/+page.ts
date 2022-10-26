/** @type {import('./$types').PageLoad} */

import type { Post } from '@prisma/client';

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
	query: string
) => {
	let url = '/api/getPost';
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(query),
	})
		.then((response: any) => response.json())
		.then((data: Post) => {
			return data;
		});
};

export async function load({ params, fetch }) {
	return await loadFromApi(fetch, params.id);
}
