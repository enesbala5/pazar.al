// Data
import { db } from '$lib/fetching/db';
// SvelteKit Functions
import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
// Types
type maybePageUser = PageUser | null;
import type { Product } from '$lib/types/product';
import type { searchQuery } from '$lib/types/query';
// SvelteKit Types
import type { ServerLoad } from '@sveltejs/kit/types/internal';
import type { PageUser } from '$lib/types/page';

// TODO:
// -> Add other search options to query
const getLikedPostsByUser: any = async (query: searchQuery) => {
	let pageNumber = query.page !== undefined ? Number(query.page) : 1;
	const itemsPerPage: number = query.itemsPerPage !== undefined ? Number(query.itemsPerPage) : 15;

	let itemsToSkip = pageNumber * itemsPerPage - itemsPerPage;

	// let data = await db.post.findMany({
	// 	take: itemsPerPage,
	// 	skip: itemsToSkip,
	// 	where: {
	// 		title: {
	// 			contains: query.id,
	// 		},
	// 	},
	// 	include: {
	// 		priceHistory: true,
	// 	},
	// });

	let data = await db.user.findFirst({
		where: {
			username: query.id,
		},
		select: {
			posts: true
		},
	});

	if (data) {
		return data;
	}

	return {};
};

// -----------------------------------------------------

export const load: ServerLoad = async ({ params, locals }) => {
	const username = params.username;

	const user: PageUser | undefined = locals.user ?? undefined;

	if (user == undefined) {
		throw error(404, 'Account not found.');
	}

	if (username !== user.username) {
		throw redirect(302, `/${username}`);
	}

	console.log(user);

	const likedPosts: Awaited<Promise<PageUser | null>> = await getLikedPostsByUser({
		id: username,
		itemsPerPage: 15,
		page: 1,
	});

	console.log(likedPosts);

	return { likedPosts };

	// console.log(username, locals);
	// if (user === undefined) {
	// 	throw redirect(302, nav.index);
	// }
	// if (user.username && user.username !== '') {
	// }
};
