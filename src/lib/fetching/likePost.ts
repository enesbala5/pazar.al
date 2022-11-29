import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { db } from '$lib/fetching/db';

export const POST: RequestHandler = async ({ request }) => {
	const postId = await request.json();

	db.post

};
