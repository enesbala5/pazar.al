import { db } from '$lib/fetching/db';
import { nav } from '$lib/userPreferences/nav';
import { invalid, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

import type { Action, Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, nav.index);
	}
};

const register: Action = async ({ request }) => {
	const data = await request.formData();
	const username = data.get('username');
	const email = data.get('email');
	const password = data.get('password');

	console.log({ username, password });

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return invalid(400, { invalid: true });
	}

	const user = await db.user.findUnique({
		where: { username },
	});

	if (user) {
		return invalid(400, { user: true });
	}

	await db.user.create({
		data: {
			username,
			passwordHash: await bcrypt.hash(password, 10),
			userAuthToken: crypto.randomUUID(),
			role: 'USER',
		},
	});

	throw redirect(303, nav.login);
};

export const actions: Actions = { register };
