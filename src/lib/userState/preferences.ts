import { browser } from '$app/environment';
import { getStores, page } from '$app/stores';

import { derived, writable } from 'svelte/store';
// import { session } from '$app/stores';

export const card = writable<boolean>(true);

// let darkModeCookieValue = false;

// if (browser) {
// 	page.subscribe((data) => {
// 		if (typeof data?.data?.darkMode == 'boolean') {
// 			darkModeCookieValue = data?.data?.darkMode;
// 		}
// 	});
// }

export const darkModeUnsynced = writable<boolean | undefined>(undefined);
export const darkMode = derived([page, darkModeUnsynced], ([$page, $darkModeUnsynced], set) => {
	if ($darkModeUnsynced !== undefined) {
		set($darkModeUnsynced);
		return;
	}
	if ($page.data.darkMode) {
		set($page.data.darkMode ?? false);
		return;
	}
});

export const modalOpen = writable<boolean>(false);
export const scrollingAllowed = writable<boolean>(true);
