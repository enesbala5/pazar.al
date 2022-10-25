/** @type {import('./$types').PageLoad} */

import { json, type ExternalFetch } from '@sveltejs/kit';

export const loadFromApi = async (
	fetch: {
		(
			input: RequestInfo | URL,
			init?: RequestInit | undefined
		): Promise<Response>;
		(
			input: RequestInfo | URL,
			init?: RequestInit | undefined
		): Promise<Response>;
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
	let url = '/api/getLatestPosts';
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(query),
	})
		.then((response: any) => response.json())
		.then((data: any) => {
			return data;
		});
};

export async function load({ params, fetch }) {
	// const newPost = await prisma.post.create({
	// 	data: {
	// 		title: 'Range Rover 2022',
	// 		description: 'Super mjet 2',
	// 		price: 100,
	// 		eur: true,
	// 		old_price: 100,
	// 		city: 'Tirana',
	// 		country: 'Albania',
	// 		category: 'Makine',
	// 	},
	// });

	return {
		kerkim: params.id ?? '',
		date: new Date().getTime(),
		data: await loadFromApi(fetch, params.id),
	};
}
