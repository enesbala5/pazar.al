import { db } from '$lib/fetching/db';
import { nav } from '$lib/userState/nav';
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
	const firstName = data.get('firstName');
	const lastName = data.get('lastName');
	const email = data.get('email');
	const password = data.get('password');
	const business = data.get('business');

	// convert business (dataForm) -> boolean
	const isBusiness = business === 'true';

	if (
		typeof email !== 'string' ||
		typeof password !== 'string' ||
		typeof firstName !== 'string' ||
		typeof lastName !== 'string' ||
		!email ||
		!password ||
		!firstName
	) {
		return invalid(400, { invalid: true });
	}

	const user = await db.user.findUnique({
		where: { email },
	});

	if (user) {
		console.log('user exists');
		return invalid(400, { user: true });
	}

	console.log('creating');

	await db.user.create({
		data: {
			firstName,
			lastName,
			email,
			passwordHash: await bcrypt.hash(password, 10),
			userAuthToken: crypto.randomUUID(),
			account_type: isBusiness ? 'Seller' : 'Personal',
			role: 'USER',
		},
	});

	return invalid(400, { email: email, password: password });
	throw redirect(303, nav.welcomeScreen);
};

export const actions: Actions = { register };
