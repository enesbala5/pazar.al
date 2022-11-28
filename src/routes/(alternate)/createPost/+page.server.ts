import { db } from '$lib/fetching/db';
import { nav } from '$lib/userPreferences/nav';
import { invalid, redirect } from '@sveltejs/kit';
import type { Cities, Tag } from '@prisma/client';
import type { Selection } from '$lib/types/selection';

import type { Action, Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, nav.login);
	}
};

const parseSelection = (selectItem: string): string => {
	let parsedSelectItem: Selection = JSON.parse(selectItem);
	return parsedSelectItem.value;
};

const createPost: Action = async ({ request, locals }) => {
	const data = await request.formData();

	const title = data.get('title');
	const description = data.get('description');
	const eur = data.get('eur');
	const category = data.get('category');
	const city = data.get('city');
	const country = data.get('country');
	const price = data.get('price');
	const tags: any = data.get('tags');

	// console.log(locals.user);

	// Return invalid if required info not filled in
	if (
		typeof title !== 'string' ||
		typeof description !== 'string' ||
		typeof price !== 'string' ||
		typeof eur !== 'string' ||
		typeof category !== 'string' ||
		typeof city !== 'string' ||
		typeof country !== 'string' ||
		typeof tags !== 'string' ||
		!title ||
		!description ||
		!price ||
		!eur ||
		!category ||
		!city ||
		!country
	) {
		return invalid(400, { invalid: true });
	}

	// * Parse Values
	const isEur = eur === 'true';
	const tagsArray: [] = JSON.parse(tags);

	const parseTags = (unparsed: Tag[] | any): Tag[] => {
		const parsedTags = unparsed.map((unparsedTag: any) => {
			return { name: unparsedTag.name, value: unparsedTag.value };
		});
		return parsedTags;
	};

	const parsedTags = parseTags(tagsArray);

	// ? Parse Selection
	// city: '{"value":"BajramCurri","label":"Bajram Curri"}',
	// CURRENT:
	// { id: 7, name: 'VIN', value: 'Shum mjet', required: true }

	const cityParsed: any = parseSelection(city);
	const countryParsed: any = parseSelection(country);

	const categoryParsed = parseSelection(category);

	// console.log({ cityParsed, countryParsed, categoryParsed, isEur, parsedTags });
	console.log(parsedTags);

	const newPost = await db.post.create({
		data: {
			title,
			description,
			category: categoryParsed,
			city: cityParsed,
			country: countryParsed,
			author: {
				connect: {
					uid: locals.user.uid,
				},
			},
			priceHistory: {
				create: {
					price: parseFloat(price),
					eur: isEur,
				},
			},
			tags: {
				create: parsedTags,
			},
		},
	});

	console.log('finished');

	// await db.post.create({
	// 	data: {
	// 		title: title,
	// 		description: description,
	// 		category: 'Automjete',
	// 		city: 'Ballsh',
	// 		country: 'Albania',
	// 		eur: true,
	// 		priceHistory: {
	// 			create: {
	// 				price: 100,
	// 			}
	// 		}
	// 	}
	// })

	// -----------

	// const user = await db.user.findUnique({
	// 	where: { email },
	// });

	// if (user) {
	// 	console.log('user exists');
	// 	return invalid(400, { user: true });
	// }

	// console.log('creating');

	// await db.user.create({
	// 	data: {
	// 		firstName,
	// 		lastName,
	// 		email,
	// 		passwordHash: await bcrypt.hash(password, 10),
	// 		userAuthToken: crypto.randomUUID(),
	// 		account_type: isBusiness ? 'Seller' : 'Personal',
	// 		role: 'USER',
	// 	},
	// });

	// return invalid(400, { email: email, password: password });
	// throw redirect(303, nav.welcomeScreen);
};

export const actions: Actions = { createPost };
