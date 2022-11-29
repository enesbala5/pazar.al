import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { db } from '$lib/fetching/db';

// TODO:
// -> Maybe add referral query options
export const POST: RequestHandler = async ({ request, locals }) => {
	if (!locals?.user) {
		throw error(202, 'You are not logged in.');
	}

	const postId = await request.json();
	console.log('request: ', postId);

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
		throw error(202, true);
	}

	throw error(202, { response: false });
};
