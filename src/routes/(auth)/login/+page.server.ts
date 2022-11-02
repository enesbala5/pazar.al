import { invalid, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import type { Action, Actions, PageServerLoad } from './$types';

import { db } from '$lib/fetching/db';
import { nav } from '$lib/userPreferences/nav';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, nav.index);
	}
};

const login: Action = async ({ cookies, request }) => {
	const data = await request.formData();
	const email = data.get('email');
	const password = data.get('password');

	if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
		return invalid(400, { invalid: true });
	}

	const user = await db.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) {
		return invalid(400, { credentials: true });
	}

	const userPassword = await bcrypt.compare(password, user.passwordHash);

	if (!userPassword) {
		return invalid(400, { credentials: true });
	}

	const authenticatedUser = await db.user.update({
		where: { email: user.email },
		data: {
			userAuthToken: crypto.randomUUID(),
		},
	});

	cookies.set('session', authenticatedUser.userAuthToken, {
		path: nav.index,
		// httpOnly: true,
		// sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 30,

		// TODO: Enable in FINAL BUILD
		// secure: process.env.NODE_ENV === 'production',
	});

	throw redirect(302, nav.index);
};

export const actions: Actions = {
	default: async ({ request, cookies }): Promise<any> => {
		// console.log(await request.formData());
		// throw redirect(302, '/');
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return invalid(400, { invalid: true });
		}

		const user = await db.user.findUnique({
			where: {
				email,
			},
		});

		if (!user) {
			return invalid(400, { credentials: true });
		}

		const userPassword = await bcrypt.compare(password, user.passwordHash);

		if (!userPassword) {
			return invalid(400, { credentials: true });
		}

		const authenticatedUser = await db.user.update({
			where: { email: user.email },
			data: {
				userAuthToken: crypto.randomUUID(),
			},
		});

		cookies.set('session', authenticatedUser.userAuthToken, {
			path: nav.index,
			// httpOnly: true,
			// sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 30,

			// TODO: Enable in FINAL BUILD
			// secure: process.env.NODE_ENV === 'production',
		});

		throw redirect(302, nav.index);
	},
	// login,
};
