import { nav } from '$lib/userState/nav';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (async ({ request, cookies }) => {
	const { darkMode } = await request.json();
	console.log(darkMode, typeof darkMode);

	const darkModeCookieValueString = String(darkMode);
	cookies.set('darkMode', darkModeCookieValueString, {
		path: nav.index,
	});
	return json(`Set theme to: ${darkModeCookieValueString} || ${darkMode}`);
}) satisfies RequestHandler;

// cookies.set('session', authenticatedUser.userAuthToken, {
// 			path: nav.index,
// 			// httpOnly: true,
// 			// sameSite: 'strict',
// 			maxAge: 60 * 60 * 24 * 30,

// 			// TODO: Enable in FINAL BUILD
// 			// secure: process.env.NODE_ENV === 'production',
// 		});
