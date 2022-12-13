import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { nav } from '$lib/userPreferences/nav';
import type { searchQuery } from '$lib/types/query';
import type { Page } from '@sveltejs/kit';
import { pageParamParse } from './conversions';

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
		});
	}
	return params;
}

export function insertParams(page: Page, params: searchQuery, url: string = nav.kerkim) {
	if (browser) {
		let paramsString: any[] = [];
		for (const param in params) {
			paramsString.push([param, String(params[param as keyof searchQuery])]);
		}
		const urlAddition = new URLSearchParams(paramsString).toString();

		let newPath = url + '?' + urlAddition;

		goto(newPath);
	}
}
