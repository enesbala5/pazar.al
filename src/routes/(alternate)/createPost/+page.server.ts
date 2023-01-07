import { db } from '$lib/fetching/db';
import { nav } from '$lib/userState/nav';
import { invalid, redirect } from '@sveltejs/kit';
import type { Image, Tag } from '@prisma/client';
import type { Selection } from '$lib/types/selection';

import type { Action, Actions, PageServerLoad } from './$types';
import type { ImageDatabaseStructure } from '$lib/upload/cloudinary';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, nav.login);
	}
};
const parseSelection = (selectItem: string): string => {
	let parsedSelectItem: Selection = JSON.parse(selectItem);
	return parsedSelectItem.value;
};
const parseTags = (unparsed: Tag[] | any): Tag[] => {
	const parsedTags = unparsed.map((unparsedTag: any) => {
		return { name: unparsedTag.name, value: unparsedTag.value };
	});
	return parsedTags;
};

const createPost: Action = async ({ request, locals }) => {
	const data = await request.formData();
	// Getting input values
	const title = data.get('title');
	const description = data.get('description');
	const eur = data.get('eur');
	const category = data.get('category');
	const city = data.get('city');
	const country = data.get('country');
	const price = data.get('price');
	const tags: any = data.get('tags');
	const uploadedImages: any = data.get('uploadedImages');

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
	// -> Tags
	const tagsArray: [] = JSON.parse(tags);
	const parsedTags = parseTags(tagsArray);
	// Images
	const uploadedImagesArray: ImageDatabaseStructure[] | [] = JSON.parse(uploadedImages);
	// Location
	const cityParsed: any = parseSelection(city);
	const countryParsed: any = parseSelection(country);
	// Category
	const categoryParsed = parseSelection(category);

	let dbImages: any = [];
	// index in uploadedImagesArray
	for (let i = 0; i < uploadedImagesArray?.length ?? 0; i++) {
		dbImages.push({
			index: i,
			id: uploadedImagesArray[i].data.asset_id,
			format: uploadedImagesArray[i].data.format,
			publicId: uploadedImagesArray[i].data.public_id,
			version: String(uploadedImagesArray[i].data.version),
		});
	}

	console.log('dbImages', dbImages);

	// Creating Post
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
			images: {
				createMany: {
					data: dbImages,
					skipDuplicates: true,
				},
			},
		},
	});

	console.log('finished');
	console.log('newPost: ', newPost);

	throw redirect(303, `${nav.post}/${newPost.id}`);
};

export const actions: Actions = { createPost };
