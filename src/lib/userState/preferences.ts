import { browser } from '$app/environment';
import { getStores, page } from '$app/stores';

import { derived, writable } from 'svelte/store';

// PRODUCT ITEM FORMAT
export type ProductItemFormat = 'card' | 'list' | 'minimized';
export const card = writable<ProductItemFormat>('card');

// DARK MODE
export const darkModeUnsynced = writable<boolean | undefined>(undefined);
export const darkMode = derived([page, darkModeUnsynced], ([$page, $darkModeUnsynced], set) => {
	if ($darkModeUnsynced !== undefined) {
		set($darkModeUnsynced);
		return;
	}
	if ($page?.data?.darkMode) {
		set($page?.data?.darkMode ?? false);
		return;
	}
});

// MODAL
export const modalOpen = writable<boolean>(false);
export const scrollingAllowed = writable<boolean>(true);
