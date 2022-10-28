import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { nav } from '$lib/userPreferences/nav';
import type { searchQuery } from '$lib/types/query';
import type { Page } from '@sveltejs/kit';
import { faqjaParamParse } from './conversions';

export function getParams(page: Page) {
	let params: searchQuery = {};
	if (browser) {
		page.url.searchParams.forEach((value, key) => {
			if (key === 'id') {
				params.id = value;
			}
			if (key === 'faqja') {
				params.faqja = faqjaParamParse(value);
			}
		});
	}
	return params;
}

export function insertParams(page: Page, params: searchQuery) {
	if (browser) {
		let paramsString: any[] = [];
		for (const param in params) {
			paramsString.push([param, String(params[param as keyof searchQuery])]);
		}
		const url = new URLSearchParams(paramsString).toString();

		let newPath = nav.kerkim + '?' + url;

		goto(newPath);
	}
}
