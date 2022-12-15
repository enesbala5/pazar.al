import type { CurrenciesType } from '$lib/functions/conversions';
import { writable } from 'svelte/store';

export interface CurrencyArray {
	from: CurrenciesType;
	to: CurrenciesType;
	exchangeRate: number;
}

export const currencies = writable<CurrencyArray[]>([]);
