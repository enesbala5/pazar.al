import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { db } from '$lib/fetching/db';

// TODO:
// -> Maybe add referral query options
export const POST: RequestHandler = async ({ request, locals }) => {
	console.log(locals);

	if (!locals?.user) {
		throw error(202, 'You are not logged in.');
	}

	const postId = await request.json();
	console.log('request: ', postId);

	const currentPost = await db.post.count({
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

	if (currentPost) {
		throw error(202, currentPost);
	}

	throw error(202, { response: 'not found??', currentPost });
};
