import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { db } from '$lib/fetching/db';

// TODO:
// -> Maybe add referral query options
export const POST: RequestHandler = async ({ request }) => {
	const query = await request.json();

	// let data = await db.post.findFirst({});
	let data = await db.user.findUnique({
		where: {
			username: query,
		},
		select: {
			uid: true,
			firstName: true,
			lastName: true,
			email: false,
			profilePicture: true,
			created_at: true,
			username: true,
			account_type: true,
			posts: {
				select: {
					title: true,
					description: true,
					id: true,
					priceHistory: {
						select: {
							eur: true,
							price: true,
						},
					},
					images: {
						take: 1,
						where: {
							index: {
								equals: 0,
							},
						},
						select: {
							index: true,
							publicId: true,
						},
					},
				},
			},
			sellerInfo: {
				select: {
					coverPicture: true,
					mainColor: true,
					status: true,
				},
			},
		},
	});

	if (data) {
		return new Response(JSON.stringify(data));
	}

	throw error(404, 'Account not found.');
};
