import type { Category, CategoryId } from '$lib/data/categories';
import { filterCategory } from '$lib/functions/navigation';
import { getParamsFromLoad } from '$lib/functions/paramHandlingLoad';
import type { searchQuery } from '$lib/types/query';
import type { PageLoad } from './$types';

export const load = (({ url }) => {
	const params: searchQuery = getParamsFromLoad(url.searchParams);

	if (params.isCategory) {
		const categoryId = params.id;
		const category: Category | undefined = filterCategory(categoryId);

		return {
			category,
		};
	}
}) satisfies PageLoad;
