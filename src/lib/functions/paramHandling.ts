import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { nav } from '$lib/userState/nav';
import type { searchQuery } from '$lib/types/query';
import type { Page } from '@sveltejs/kit';
import { pageParamParse } from './conversions';
import { page } from '$app/stores';

export function getParams(page: Page) {
	let params: any = {};
	if (browser) {
		page.url.searchParams.forEach((value, key) => {
			if (key === 'id') {
				params.id = value;
			}
			if (key === 'page') {
				params.page = pageParamParse(value);
			}
			if (key === 'itemsPerPage') {
				params.itemsPerPage = pageParamParse(value);
			}
			if (key === 'isCategory') {
				params.isCategory = pageParamParse(value);
			}
		});
	}
	return params;
}

export function insertParams(
	page: Page | any,
	params: searchQuery,
	url: string = nav.search,
	returnUrl: boolean = false
) {
	if (params.isCategory === false) {
		delete params['isCategory'];
	}
	if (browser) {
		let paramsString: any[] = [];
		for (const param in params) {
			paramsString.push([param, String(params[param as keyof searchQuery])]);
		}
		const urlAddition = new URLSearchParams(paramsString).toString();

		let newPath = url + '?' + urlAddition;

		if (returnUrl) {
			return newPath;
		}

		goto(newPath);
	}
}

export const updateParamsField = (
	searchInput: string,
	params: any,
	itemsPerPage: number,
	resetPage: boolean = true,
	isCategory: boolean = false
) => {
	if (searchInput !== '') {
		params.id = searchInput;
	}
	if (resetPage) {
		params.page = 1;
	}
	if (itemsPerPage !== undefined) {
		params.itemsPerPage = itemsPerPage;
	}
	if (isCategory) {
		params.isCategory = true;
	}
	if (!isCategory) {
		params.isCategory = false;
	}
	return params;
};

export const searchProduct = (
	params: searchQuery,
	itemsPerPage: number,
	searchInputLocalScope: string,
	resetPage: boolean = true,
	isCategory: boolean = false,
	returnUrl: boolean = false,
	url: string
) => {
	let pageStore;
	page.subscribe((value) => {
		pageStore = value;
	});
	if (searchInputLocalScope !== params.id && searchInputLocalScope !== '') {
		// update params object with local values
		params = updateParamsField(searchInputLocalScope, params, itemsPerPage, resetPage, isCategory);
		const returnUrlResponse = insertParams(pageStore, params, url, returnUrl);
		return returnUrlResponse;
	}
};
