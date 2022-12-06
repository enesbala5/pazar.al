import { fetchCurrencies } from '$lib/fetching/currencies';
import { currencies, type CurrencyArray } from '$lib/userPreferences/currencies';

export {};

export const faqjaParamParse = (value: string, replacementValue: number = 1) => {
	const num = parseFloat(value);
	return Number.isNaN(num) ? replacementValue : num;
};

export type CurrenciesType = 'EUR' | 'ALL';
interface currencyConversionReturn {
	currency: CurrenciesType;
	amount: number;
}

export const currencyConversion = async (
	from: CurrenciesType,
	to: CurrenciesType,
	amount: number
) => {
	// ? State
	let response: currencyConversionReturn;
	let currencyRequestedNegative: boolean = false;

	// * Get Array from Store
	let currencyStore: CurrencyArray[] = [];
	currencies.subscribe((currencyArray) => {
		currencyStore = currencyArray;
	});

	// * Check if 'from' or 'to' is already in Array
	let currencyRequested = currencyStore.find((currency) => {
		let fromPresent = from === currency.from || from === currency.to;
		let toPresent = to === currency.from || to === currency.to;

		if (fromPresent && toPresent) {
			if (from === currency.to) currencyRequestedNegative = true;
			return currency;
		}
	});

	// * Add Currency Exchange Rates to Store
	if (currencyRequested) {
		console.log('currencyRequested', currencyRequested);
		response = {
			currency: to,
			amount: currencyConversionEquation(
				amount,
				currencyRequested.exchangeRate,
				currencyRequestedNegative
			),
		};
		return response;
	} else {
		const data = await fetchCurrencies(from, to);

		if (data == undefined) return;

		currencies.set([
			...currencyStore,
			{
				from,
				to,
				exchangeRate: data?.exchangeRate,
			},
		]);
		response = {
			currency: to,
			amount: currencyConversionEquation(amount, data?.exchangeRate),
		};
		return response;
	}
};

const currencyConversionEquation = (
	amount: number,
	exchangeRate: number,
	negative: boolean = false
) => {
	if (!negative) return amount * exchangeRate;
	return amount / exchangeRate;
};
