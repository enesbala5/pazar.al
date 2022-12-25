import type { CategoryId } from '$lib/data/categories';

export interface searchQuery {
	id?: string;
	page?: number;
	itemsPerPage?: number;
	isCategory?: boolean;
}

export interface searchQueryCategories {
	id?: CategoryId;
	page?: number;
	itemsPerPage?: number;
}
