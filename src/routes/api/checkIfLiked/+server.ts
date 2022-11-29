import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { db } from '$lib/fetching/db';

// TODO:
// -> Maybe add referral query options
export const POST: RequestHandler = async ({ request, locals }) => {
	if (!locals?.user) {
		return new Response(JSON.stringify(false));
		// throw error(202, 'You are not logged in.');
	}

	const postId = await request.json();

	const response = await db.post.count({
		where: {
			AND: [
				{
					id: {
						equals: postId,
					},
				},
				{
					postLikes: {
						some: {
							uid: locals.user.uid,
						},
					},
				},
			],
		},
	});

	if (response > 0) {
		return new Response(JSON.stringify(true));
	}

	return new Response(JSON.stringify(false));
};
