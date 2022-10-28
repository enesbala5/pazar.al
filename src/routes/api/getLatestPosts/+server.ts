import type { searchQuery } from '$lib/types/query';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
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

	// console.log('query faqja: ', query);

	let pageNumber = 1;
	const itemsPerPage: number = 3;

	if (query.faqja !== '') {
		pageNumber = Number(query.faqja);
	} else {
		pageNumber = 1;
	}

	let itemsToSkip = pageNumber * itemsPerPage - itemsPerPage;
	console.log('itemsToSkip', itemsToSkip);

	let keywords: string[] = getKeywords(query.id);

	let data = await prisma.post.findMany({
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
	});

	return new Response(JSON.stringify(data));
};
