import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { db } from '$lib/fetching/db';

// TODO:
// -> Maybe add referral query options
export const POST: RequestHandler = async ({ request }) => {
	const query = await request.json();

	let data = await db.post.findFirst({
		where: {
			AND: [
				{
					id: query,
				},
				{
					archived: false,
				},
			],
		},
		include: {
			author: {
				select: {
					firstName: true,
					lastName: true,
					account_type: true,
					profilePicture: true,
					email: true,
					sellerInfo: {
						select: {
							coverPicture: true,
							mainColor: true,
							status: true,
						},
					},
				},
			},
			tags: {
				select: {
					name: true,
					value: true,
				},
			},
			priceHistory: {
				select: {
					eur: true,
					price: true,
				}
			}
		},
	});

	if (data) {
		return new Response(JSON.stringify(data));
	}

	throw error(404, 'Post Not Found');
};
