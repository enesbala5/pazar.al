import type { Product } from '$lib/types/product';
import type { searchQuery } from '$lib/types/query';
import { nav } from '$lib/userState/nav';
import { error } from '@sveltejs/kit';

export const getPosts = async (params: searchQuery) => {
	if (params.isCategory) {
		const data = await getPostsByCategory(params);
		return data;
	} else {
		const data = getLatestPosts(params);
		return data;
	}
};

export const getLatestPosts = async (params: searchQuery) => {
	let url = nav.api.getLatestPosts;

	const response = await fetch(url, {
		method: 'POST',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Basic ' + Credential,
		}),
		cache: 'no-cache',
		body: JSON.stringify(params),
	});

	if (!response.ok) {
		throw error(404, 'Posts not found');
	}

	const data = await response.json();
	return await data;
};

export const getPostsByCategory = async (params: searchQuery) => {
	let url = nav.api.getLatestPosts + nav.api.getLatestPostsOptions.byCategory;

	const response = await fetch(url, {
		method: 'POST',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Basic ' + Credential,
		}),
		cache: 'no-cache',
		body: JSON.stringify(params),
	});

	if (!response.ok) {
		throw error(404, 'Posts not found');
	}

	const data = await response.json();
	return await data;
};

export const getCount = async (params: searchQuery) => {
	let url = '';

	if (params.isCategory) {
		url = nav.api.getLatestPosts + nav.api.getLatestPostsOptions.byCategoryCount;
	} else {
		url = nav.api.count;
	}

	const response = await fetch(url, {
		method: 'POST',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Basic ' + Credential,
		}),
		cache: 'default',
		body: JSON.stringify(params.id),
	});

	if (!response.ok) {
		return 0;
	}

	const data = await response.json();
	return await data;
};
