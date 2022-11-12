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
			name: true,
			surname: true,
			email: true,
			role: true,
		},
	});

	if (user) {
		event.locals.user = {
			name: user.name,
			surname: user.surname,
			email: user.email,
			role: user.role,
		};
	}

	return await resolve(event);
};
