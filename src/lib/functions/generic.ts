export const toggleBoolean = (object: boolean) => {
	return !object;
};

export function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
