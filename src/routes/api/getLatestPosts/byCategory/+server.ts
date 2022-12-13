import type { searchQuery } from '$lib/types/query';
import { error } from '@sveltejs/kit';

import { db } from '$lib/fetching/db';
import type { RequestHandler } from './$types';

// TODO:
// -> Add other search options to query
export const POST: RequestHandler = async ({ request }) => {
	const query: searchQuery = await request.json();
	console.log(query ?? '');

	let pageNumber = query.page !== undefined ? Number(query.page) : 1;
	const itemsPerPage: number = query.itemsPerPage !== undefined ? Number(query.itemsPerPage) : 15;

	let itemsToSkip = pageNumber * itemsPerPage - itemsPerPage;

	let data = await db.post.findMany({
		take: itemsPerPage,
		skip: itemsToSkip,
		where: {
			category: query.id,
			AND: [
				{
					archived: false,
				},
			],
		},
		include: {
			priceHistory: true,
		},
	});

	if (data) {
		return new Response(JSON.stringify(data));
	}

	return new Response(JSON.stringify(undefined));
};
