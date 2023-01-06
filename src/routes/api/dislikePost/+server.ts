import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { db } from '$lib/fetching/db';

// TODO:
// -> Maybe add referral query options
export const POST: RequestHandler = async ({ request, locals }) => {
	console.log(locals);

	if (!locals?.user) {
		throw error(303, 'You are not logged in.');
	}

	const postId = await request.json();

	const response = await db.post.update({
		where: {
			id: postId,
		},
		data: {
			postLikes: {
				disconnect: {
					uid: locals.user.uid,
				},
			},
		},
	});

	if (response) {
		console.log(response);
		return new Response(JSON.stringify(true));
	}

	throw error(404, 'Post not found.');
};
