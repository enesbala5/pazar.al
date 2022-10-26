import { error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */

// TODO:
// -> Add other search options to query
export async function POST({ request }) {
	const query = await request.json();

	console.log(query);

	let data = await prisma.post.findMany({
		take: 1,
		where: {
			title: {
				contains: query,
			},
		},
	});
	console.log('-------------------------------');

	return new Response(JSON.stringify(data));
}
