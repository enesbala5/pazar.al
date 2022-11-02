import { db } from '$lib/fetching/db';
import { nav } from '$lib/userPreferences/nav';
import { invalid, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';

import type { Action, Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, nav.index);
	}
};

const register: Action = async ({ request }) => {
	const data = await request.formData();
	const name = data.get('name');
	const surname = data.get('surname');
	const email = data.get('email');
	const password = data.get('password');

	if (
		typeof email !== 'string' ||
		typeof password !== 'string' ||
		typeof name !== 'string' ||
		typeof surname !== 'string' ||
		!email ||
		!password ||
		!name ||
		!surname
	) {
		return invalid(400, { invalid: true });
	}

	const user = await db.user.findUnique({
		where: { email },
	});

	if (user) {
		return invalid(400, { user: true });
	}

	await db.user.create({
		data: {
			name,
			surname,
			email,
			passwordHash: await bcrypt.hash(password, 10),
			userAuthToken: crypto.randomUUID(),
			role: 'USER',
		},
	});

	throw redirect(303, nav.login);
};

export const actions: Actions = { register };
