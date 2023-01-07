export const toggleBoolean = (object: boolean) => {
	return !object;
};

export function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// TODO: CHECK IF WORKING PROPERLY
// Change return from eg. '2' to '2.00'
export const formatPrice = (num: any) => {
	// let withDecimals = parseFloat(num).toFixed(2).toLocaleString();
	const response = parseFloat(num).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	return response;
};
