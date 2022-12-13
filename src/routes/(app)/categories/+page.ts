import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import { nav } from '$lib/userPreferences/nav';
import type { PageUser } from '$lib/types/page';
import type { Category } from '$lib/data/categories';
import { filterCategory } from '$lib/functions/navigation';
type maybePageUser = PageUser | null;

export const load: PageLoad<Category | undefined> = async ({ params, fetch }) => {
	// const category = filterCategory('automjete');
	// return category;
};
