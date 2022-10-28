export {};

export const faqjaParamParse = (value: string) => {
	const num = parseFloat(value);
	return Number.isNaN(num) ? 1 : num;
};
