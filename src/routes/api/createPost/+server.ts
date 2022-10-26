import { error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */

const createPost = async () => {
	const newPost = await prisma.post.create({
		data: {
			title: 'Range Rover 2022',
			description: 'Super mjet 2',
			price: 103589.99,
			eur: false,
			old_price: 103589.99,
			city: 'Tirana',
			country: 'Albania',
			category: 'Makine',
		},
	});
};

export async function GET({ url }) {
	// let data = await prisma.post.findMany();
	createPost();
	return new Response(String(true));
}
