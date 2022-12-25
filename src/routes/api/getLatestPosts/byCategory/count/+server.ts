import { error } from '@sveltejs/kit';
import { db } from '$lib/fetching/db';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const query = await request.json();
	let count = await db.post.count({
		where: {
			AND: [
				{
					category: query.id,
				},
				{
					archived: false,
				},
			],
		},
	});

	if (count) {
		return new Response(JSON.stringify(count));
	}

	throw error(404, 'Nuk ka postime qe pershtaten');
};
