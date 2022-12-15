import { nav } from '$lib/userState/nav';
import i18n, { type Config, type Parser } from 'sveltekit-i18n';
import lang from './lang.json';

export const config: Config = {
	fallbackLocale: 'sq',
	translations: {
		en: { lang },
		sq: { lang },
	},
	loaders: [
		{
			locale: 'en',
			key: 'register',
			routes: [nav.register],
			loader: async () => (await import('./en/register.json')).default,
		},
		{
			locale: 'sq',
			key: 'register',
			routes: [nav.register],
			loader: async () => (await import('./sq/register.json')).default,
		},
		{
			locale: 'en',
			key: 'login',
			routes: [nav.login],
			loader: async () => (await import('./en/login.json')).default,
		},
		{
			locale: 'sq',
			key: 'login',
			routes: [nav.login],
			loader: async () => (await import('./sq/login.json')).default,
		},
		{
			locale: 'en',
			key: 'generic',
			routes: [nav.register, nav.login],
			loader: async () => (await import('./en/generic.json')).default,
		},
		{
			locale: 'sq',
			key: 'generic',
			routes: [nav.register, nav.login],
			loader: async () => (await import('./sq/generic.json')).default,
		},
	],
};

export const { t, loading, locales, locale, loadTranslations, setLocale } = new i18n<
	Parser.Params<{ item?: string }>
>(config);

loading.subscribe(($loading) => $loading);
