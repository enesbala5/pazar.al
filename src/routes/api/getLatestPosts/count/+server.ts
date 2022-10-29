import { error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import type { RequestHandler } from './$types';

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

	if (count) {
		return new Response(JSON.stringify(count));
	}

	throw error(404, 'Nuk ka postime qe pershtaten');
};
