import carBrands from '$lib/data/carBrands';

export const getCarModelsByBrand = (brandName: string) => {
	const selectedBrand = carBrands.find((brand) => brand.brand === brandName);

	return selectedBrand?.models ?? [];
};
