import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { db } from '$lib/fetching/db';

// TODO:
// -> Maybe add referral query options
export const POST: RequestHandler = async ({ request }) => {
	const query = await request.json();

	// if (data) {
	// 	return new Response(JSON.stringify(data));
	// }

	throw error(404, 'Post Not Found');
};

export const GET: RequestHandler = async ({ request }) => {
	await db.priceHistory.deleteMany();

	throw error(404, 'Post Not Found');
};
