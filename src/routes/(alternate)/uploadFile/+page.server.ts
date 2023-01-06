import { db } from '$lib/fetching/db';
import { nav } from '$lib/userState/nav';
import { invalid, redirect } from '@sveltejs/kit';
import type { Tag } from '@prisma/client';
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

const uploadFile: Action = async ({ request, locals }) => {
	const data = await request.formData();
	const uploadedImages = data.get('uploadedImages');

	console.log('logging data', uploadedImages);

	// throw redirect(303, `${nav.post}/${newPost.id}`);
};

export const actions: Actions = { uploadFile };
