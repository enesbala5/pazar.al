import type { searchQuery } from '$lib/types/query';
import { error } from '@sveltejs/kit';

import { db } from '$lib/fetching/db';
import type { RequestHandler } from './$types';

const getKeywords = (searchQuery: string | undefined) => {
	if (searchQuery === undefined) {
		return [];
	}
	return searchQuery.split(' ');
};

// TODO:
// -> Add other search options to query
export const POST: RequestHandler = async ({ request }) => {
	const query: searchQuery = await request.json();

	let pageNumber = 1;
	const itemsPerPage: number = 15;

	if (query.faqja !== undefined) {
		pageNumber = Number(query.faqja);
	} else {
		pageNumber = 1;
	}

	let itemsToSkip = pageNumber * itemsPerPage - itemsPerPage;
	let keywords: string[] = getKeywords(query.id);

	let data = await db.post.findMany({
		take: itemsPerPage,
		skip: itemsToSkip,
		where: {
			OR: [
				{
					title: {
						contains: query.id,
					},
				},
				{
					title: {
						in: keywords,
					},
				},
			],
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

	return new Response(JSON.stringify({}));
};
