import { writable } from 'svelte/store';

export const card = writable<boolean>(true);
export const darkMode = writable<boolean>(true);
