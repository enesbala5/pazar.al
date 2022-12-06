import type { CurrenciesType } from '$lib/functions/conversions';

export const fetchCurrencies = async (from: CurrenciesType, to: CurrenciesType) => {
	const response = await fetch(`https://api.dev.me/v1-convert-currency?from=${from}&to=${to}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'x-api-key': '638b37cef3b14f6edeade1c8',
		},
	});
	if (!response.ok) {
		return undefined;
	}
	const data = await response.json();
	return data;
};
