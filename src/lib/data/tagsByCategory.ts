import { getCarModelsByBrand } from '$lib/fetching/carsByBrand';
import carBrands from './carBrands';

interface TagsByCategory {
	[key: string]: TagInCategory[];
}

export interface TagInCategory {
	name: string;
	required?: boolean;
	options?: number[] | string[];
}

// GET YEARS ARRAY
let years: number[] = [];
let currentYear = new Date().getFullYear();

for (let i = 0; i < 43; i++) {
	years.push(currentYear - i);
}

let carBrandsTextOnlyArray: string[] = [];
carBrands.forEach((carBrandObj) => {
	carBrandsTextOnlyArray.push(carBrandObj.brand);
});

let tags: TagsByCategory = {
	Automjete: [
		// Kilometrazhi
		{
			name: 'Kilometrazhi',
			required: true,
			options: [
				'0 - 4 999',
				'5 000 - 9 999',
				'10 000 - 14 999',
				'15 000 - 19 999',
				'20 000 - 24 999',
				'25 000 - 29 999',
				'30 000 - 34 999',
				'35 000 - 39 999',
				'40 000 - 44 999',
				'45 000 - 49 999',
				'50 000 - 54 999',
				'55 000 - 59 999',
				'60 000 - 64 999',
				'65 000 - 69 999',
				'70 000 - 74 999',
				'75 000 - 79 999',
				'85 000 - 84 999',
				'85 000 - 89 999',
				'90 000 - 94 999',
				'95 000 - 99 999',

				'100 000 - 109 999',
				'110 000 - 119 999',
				'120 000 - 129 999',
				'130 000 - 139 999',
				'140 000 - 149 999',
				'150 000 - 159 999',
				'160 000 - 169 999',
				'170 000 - 179 999',
				'180 000 - 189 999',
				'190 000 - 199 999',

				'200 000 - 249 999',
				'250 000 - 299 999',

				'300 000 - 349 999',
				'350 000 - 399 999',

				'400 000 - 449 999',
				'450 000 - 499 999',

				'500 000 +',
			],
		},
		// Targa
		{
			name: 'Targa/E doganuar në',
			required: true,
			options: ['Kosove', 'Maqedoni', 'Shqiperi', 'Te huaja'],
		},
		// Lloji i Marshit
		{
			name: 'Marsh',
			required: true,
			options: ['Automatik', 'Manual', 'Streptronic / Tipronic'],
		},
		// Lenda Djegese
		{
			name: 'Lenda Djegese',
			required: true,
			options: ['Benzin', 'Benzin / Gaz', 'Diezel', 'Elektrike', 'Hibrid', 'Tjera'],
		},
		// Viti
		{
			name: 'Viti',
			required: true,
			options: years,
		},
		// Marka / Lloji
		{
			name: 'Lloji / Marka',
			options: carBrandsTextOnlyArray,
			required: true,
		},
		// Modeli
		{
			name: 'Modeli',
			required: true,
		},
		// VIN
		{
			name: 'VIN',
		},
		{
			name: 'Other',
			options: ['Max Speed', 'Color', 'Company Values'],
		},
	],
};

export const getTagsByCategory = (categoryName: string) => {
	if (typeof categoryName === 'string') {
		if (categoryName in tags) {
			return tags[categoryName];
		} else {
			return [];
		}
	} else {
		return [];
	}
};
