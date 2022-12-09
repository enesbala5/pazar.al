import { writable } from 'svelte/store';

export const card = writable<boolean>(true);
export const darkMode = writable<boolean>(false);

export const modalOpen = writable<boolean>(false);
export const scrollingAllowed = writable<boolean>(true);
