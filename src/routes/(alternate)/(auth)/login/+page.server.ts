import { invalid, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import type { Action, Actions, PageServerLoad } from './$types';
import type { User } from '@prisma/client';

import { db } from '$lib/fetching/db';
import { nav } from '$lib/userPreferences/nav';

let redirectRegister = false;

const updateUserAuthToken = async (emailProvided: boolean, emailOrUsername: string) => {
	if (emailProvided) {
		const authenticatedUser = await db.user.update({
			where: { email: emailOrUsername },
			data: {
				userAuthToken: crypto.randomUUID(),
			},
		});
		return authenticatedUser;
	}
	const authenticatedUser = await db.user.update({
		where: { username: emailOrUsername },
		data: {
			userAuthToken: crypto.randomUUID(),
		},
	});
	return authenticatedUser;
};

const getUser = async (emailProvided: boolean, emailOrUsername: string) => {
	if (emailProvided) {
		const user: User | null = await db.user.findUnique({
			where: {
				email: emailOrUsername,
			},
		});
		return user;
	}
	const user: User | null = await db.user.findUnique({
		where: {
			username: emailOrUsername,
		},
	});
	return user;
};

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, nav.index);
	}
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const emailOrUsername = data.get('emailOrUsername');
		const fromRegister = data.get('fromRegister');
		const isFromRegister = fromRegister === 'true';

		let emailProvided: boolean = emailOrUsername?.toString().includes('@') ?? false;

		redirectRegister = isFromRegister;

		const password = data.get('password');

		if (
			typeof emailOrUsername !== 'string' ||
			typeof password !== 'string' ||
			!emailOrUsername ||
			!password
		) {
			return invalid(400, { invalid: true });
		}

		const user: User | null = await getUser(emailProvided, emailOrUsername);

		if (!user) {
			return invalid(400, { credentials: true });
		}

		const userPassword = await bcrypt.compare(password, user.passwordHash);
		if (!userPassword) {
			return invalid(400, { credentials: true });
		}

		const authenticatedUser = await updateUserAuthToken(emailProvided, emailOrUsername);

		cookies.set('session', authenticatedUser.userAuthToken, {
			path: nav.index,
			// httpOnly: true,
			// sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 30,

			// TODO: Enable in FINAL BUILD
			// secure: process.env.NODE_ENV === 'production',
		});

		if (isFromRegister) {
			throw redirect(302, nav.welcomeScreen);
		} else {
			throw redirect(302, nav.index);
		}
	},
};
