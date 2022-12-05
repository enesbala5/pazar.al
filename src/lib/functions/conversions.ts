export {};

export const faqjaParamParse = (value: string, replacementValue: number = 1) => {
	const num = parseFloat(value);
	return Number.isNaN(num) ? replacementValue : num;
};

type Currencies = 'Eur' | 'Lek';

export const currencyConversion = (inputCurrency: Currencies, outputCurrency: Currencies) => {
	return 1;
};
