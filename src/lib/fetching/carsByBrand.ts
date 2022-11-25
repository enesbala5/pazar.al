import carBrands from '$lib/data/carBrands';

export const getCarModelsByBrand = (brandName: string) => {
	console.log(brandName);
	const selectedBrand = carBrands.find((brand) => brand.brand === brandName);
	console.log(selectedBrand);
	
	return selectedBrand?.models ?? [];
};
