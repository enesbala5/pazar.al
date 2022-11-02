import type { Handle } from '@sveltejs/kit';
import { locale } from '$lib/lang';

import { db } from '$lib/fetching/db';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	// const language = event.cookies.get('language');

	// console.log('cookies', session, language);

	// if (language) {
	// 	locale.set(language);

	// 	// Attach user setting into local env (this is optional)
	// 	event.locals.language = language;
	// }

	if (!session) {
		console.log('no session??');
		return await resolve(event);
	}

	console.log('there is session');

	// const user = await db.user.findUnique({
	// 	where: { userAuthToken: session },
	// 	select: {
	// 		name: true,
	// 		surname: true,
	// 		email: true,
	// 		role: true,
	// 	},
	// });

	// if (user) {
	// 	event.locals.user = {
	// 		name: user.name,
	// 		surname: user.surname,
	// 		email: user.email,
	// 		role: user.role,
	// 	};
	// }

	if (session) {
		event.locals.user = {
			name: 'Enes',
			surname: 'Bala',
			email: 'contact@enesbala.com',
			role: 'USER',
		};
	}

	console.log(event.locals);

	return await resolve(event);
};
