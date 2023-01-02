const categoryIds = [
	// ----------------------------------------
	'automjete',
	// ----------------------------------------
	'veshje',
	// ----------------------------------------
	'imobiliare',
	// ----------------------------------------
	'elektronike',
	// subcategory:
	'consoles',
	// ----------------------------------------
	'shtepiake',
	// ----------------------------------------
	'bicikleta',
	// ----------------------------------------
	'motocikleta',
	// ----------------------------------------
	'kepuce',
	// ----------------------------------------
] as const;

export type CategoryId = typeof categoryIds[number];

export interface Category {
	name: string;
	label: string;
	id: CategoryId;
	parentCategory?: CategoryId;
	subcategories?: CategoryId[];
	images?: Images[];
}

interface Images {
	link: string;
	alt?: string;
}

const categories: Category[] = [
	{
		name: 'Automjete',
		label: 'Automjete',
		id: 'automjete',
		images: [
			{
				alt: 'Car',
				link: 'images/categories/popular/cars.png',
			},
		],
	},
	{
		name: 'Rroba & Veshje',
		label: 'Rroba & Veshje',
		id: 'veshje',
		images: [
			{
				link: 'images/categories/popular/clothing.png',
				alt: 'Nike Sweatshirt',
			},
		],
	},
	{
		name: 'Kepuce',
		label: 'Kepuce',
		id: 'kepuce',
		images: [
			{
				link: 'images/categories/popular/shoes.png',
				alt: 'Nike Dunks',
			},
		],
	},
	{
		name: 'Imobiliare',
		label: 'Imobiliare',
		id: 'imobiliare',
		// images: [{}],
	},
	{
		name: 'Paisje Elektronike',
		label: 'Paisje Elektronike',
		id: 'elektronike',
		images: [
			{
				link: 'images/categories/popular/iphone.png',
				alt: 'iPhone 14 Pro Max',
			},
		],
		subcategories: ['consoles'],
	},
	{
		name: 'Paisje Shtepiake',
		label: 'Paisje Shtepiake',
		id: 'shtepiake',
		images: [
			{
				link: 'images/categories/popular/appliances.png',
				alt: 'Home Appliances',
			},
		],
	},
	{
		name: 'Motocikleta',
		label: 'Motocikleta',
		id: 'motocikleta',
		images: [
			{
				link: 'https://d29sx7s964xey6.cloudfront.net/52950879-ee2e-4b32-9cdc-3bc97a096004_SRS_Asphalt.136.1.png?auto=compress,format',
				alt: 'High-Quality Motorbike',
			},
		],
	},
	{
		name: 'Bicikleta',
		label: 'Bicikleta',
		id: 'bicikleta',
		images: [
			{
				link: 'http://cdn.shopify.com/s/files/1/0663/3760/3823/products/amsterdam-plus-electric-bike-black-21.png?v=1664801717',
				alt: 'Carbon Bike',
			},
		],
	},

	// ! SUBCATEGORIES

	{
		id: 'consoles',
		name: 'Gaming Console',
		label: 'Gaming Consoles',
		parentCategory: 'elektronike',
		images: [
			{
				link: 'images/categories/popular/playstation.png',
				alt: 'Playstation 5',
			},
		],
	},
];

export default categories;
