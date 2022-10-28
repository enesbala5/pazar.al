import { error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import type { RequestHandler } from './$types';

// TODO:
// -> Add other search options to query
export const POST: RequestHandler = async ({ request }) => {
	const query = await request.json();
	console.log('query count', query);

	let count = await prisma.post.count({
		where: {
			AND: [
				{
					title: {
						contains: query,
					},
				},
				{
					archived: {
						equals: false,
					},
				},
			],
		},
	});

	console.log('count', count);

	if (count) {
		return new Response(String(count));
	}

	throw error(404, 'Post Not Found');
};
