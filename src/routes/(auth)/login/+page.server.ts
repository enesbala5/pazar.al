import { invalid, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import type { Action, Actions, PageServerLoad } from './$types';
import type { User } from '@prisma/client';

import { db } from '$lib/fetching/db';
import { nav } from '$lib/userPreferences/nav';

let redirectRegister = false;

export const load: PageServerLoad = async ({ locals }) => {
	if (redirectRegister && locals.user) {
		throw redirect(302, nav.index);
	}
	if (!redirectRegister && locals.user) {
		throw redirect(302, nav.welcomeScreen);
	}
};

// const login: Action = async ({ cookies, request }) => {
// 	const data = await request.formData();
// 	const fromRegister = data.get('fromRegister');

// 	if (fromRegister) {
// 		return invalid(400, { invalid: true });
// 	}

// 	console.log('fromRegister', fromRegister);

// 	const email = data.get('email');
// 	const password = data.get('password');

// 	if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
// 		return invalid(400, { invalid: true });
// 	}

// 	const user = await db.user.findUnique({
// 		where: {
// 			email,
// 		},
// 	});

// 	if (!user) {
// 		return invalid(400, { credentials: true });
// 	}

// 	const userPassword = await bcrypt.compare(password, user.passwordHash);

// 	if (!userPassword) {
// 		return invalid(400, { credentials: true });
// 	}

// 	const authenticatedUser = await db.user.update({
// 		where: { email: user.email },
// 		data: {
// 			userAuthToken: crypto.randomUUID(),
// 		},
// 	});

// 	cookies.set('session', authenticatedUser.userAuthToken, {
// 		path: nav.index,
// 		// httpOnly: true,
// 		// sameSite: 'strict',
// 		maxAge: 60 * 60 * 24 * 30,

// 		// TODO: Enable in FINAL BUILD
// 		// secure: process.env.NODE_ENV === 'production',
// 	});

// 	if (fromRegister === 'true') {
// 		throw redirect(302, nav.welcomeScreen);
// 	}

// 	throw redirect(302, nav.index);
// };

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const fromRegister = data.get('fromRegister');
		const isFromRegister = fromRegister === 'true';

		redirectRegister = isFromRegister;

		const password = data.get('password');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return invalid(400, { invalid: true });
		}

		const user: User | null = await db.user.findUnique({
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

		if (redirectRegister) {
			throw redirect(302, nav.welcomeScreen);
		} else {
			throw redirect(302, nav.index);
		}
	},
};
