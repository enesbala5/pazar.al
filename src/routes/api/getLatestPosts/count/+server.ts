import { error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */

// TODO:
// -> Add other search options to query
export async function POST({ request }) {
	const query = await request.json();

	let count = await prisma.post.count({
		where: {
			AND: [
				{
					title: {
						contains: query,
					},
				},
				{
					archived: {
						equals: false,
					},
				},
			],
		},
	});

	return new Response(JSON.stringify(count));
}
