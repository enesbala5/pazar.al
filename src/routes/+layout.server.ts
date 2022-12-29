import { darkMode } from '$lib/userState/preferences';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	// darkMode.set(locals.darkMode);
	// console.log('locals.darkMode: ', locals.darkMode);

	return {
		user: locals.user,
		darkMode: locals.darkMode,
	};
};
