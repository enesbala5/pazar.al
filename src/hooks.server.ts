import type { Handle } from '@sveltejs/kit';
import { locale } from '$lib/lang';

import { db } from '$lib/fetching/db';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	const language = event.cookies.get('language');

	if (language) {
		locale.set(language);

		// Attach user setting into local env (this is optional)
		event.locals.language = language;
	}

	if (!session) {
		return await resolve(event);
	}

	const user = await db.user.findUnique({
		where: { userAuthToken: session },
		select: {
			uid: true,
			firstName: true,
			lastName: true,
			username: true,
			email: true,
			role: true,
			account_type: true,
		},
	});

	if (user) {
		event.locals.user = {
			uid: user.uid,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			username: user.username,
			role: user.role,
			account_type: user.account_type,
		};
	}

	return await resolve(event);
};
