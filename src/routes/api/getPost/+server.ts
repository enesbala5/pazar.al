import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// TODO:
// -> Add other search options to query
export const POST: RequestHandler = async ({ request }) => {
	const query = await request.json();

	let data = await prisma.post.findFirst({
		where: {
			AND: [
				{
					pid: query,
				},
				{
					archived: false,
				},
			],
		},
	});

	if (data) {
		return new Response(JSON.stringify(data));
	}

	throw error(404, 'Post Not Found');
};
