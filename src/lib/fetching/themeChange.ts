import { nav } from '$lib/userState/nav';
import { darkModeUnsynced } from '$lib/userState/preferences';

export const enableDarkMode = async () => {
	// darkMode.set(true);
	darkModeUnsynced.set(true);
	fetch(nav.theme, {
		method: 'POST',
		body: JSON.stringify({
			darkMode: true,
		}),
	});
};

export const disableDarkMode = async () => {
	// darkMode.set(false);
	darkModeUnsynced.set(false);

	fetch(nav.theme, {
		method: 'POST',
		body: JSON.stringify({
			darkMode: false,
		}),
	});
};
