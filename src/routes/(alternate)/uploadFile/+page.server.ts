import { invalid, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import type { Actions, PageServerLoad } from './$types';
import type { User } from '@prisma/client';
import cloudinary from 'cloudinary';

const cl = cloudinary.v2;

cl.config({
	cloud_name: 'dfy2ewof6',
	api_key: '456488463241268',
	api_secret: 'hxFR3zJSUkjRTouifM7vXoCu4nw',
});

import { db } from '$lib/fetching/db';
import { nav } from '$lib/userState/nav';

let redirectRegister = false;

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, nav.index);
	}
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const emailOrUsername = data.get('emailOrUsername');

		throw redirect(302, nav.index);
	},
};
