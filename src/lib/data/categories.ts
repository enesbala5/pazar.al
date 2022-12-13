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
	'gaming',
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

interface subCategoriesLocation {
	id: CategoryId;
	parentCategory: CategoryId;
}

export const subCategoriesIds: subCategoriesLocation[] = [
	{
		id: 'gaming',
		parentCategory: 'elektronike',
	},
];

export type CategoryId = typeof categoryIds[number];

export interface Category {
	name: string;
	label: string;
	id: CategoryId;
	subcategories?: Category[];
}

const categories: Category[] = [
	{
		name: 'Automjete',
		label: 'Automjete',
		id: 'automjete',
	},
	{
		name: 'Rroba & Veshje',
		label: 'Rroba & Veshje',
		id: 'veshje',
	},
	{
		name: 'Kepuce',
		label: 'Kepuce',
		id: 'kepuce',
	},
	{
		name: 'Imobiliare',
		label: 'Imobiliare',
		id: 'imobiliare',
	},
	{
		name: 'Paisje Elektronike',
		label: 'Paisje Elektronike',
		id: 'elektronike',
		subcategories: [
			{
				id: 'gaming',
				name: 'Gaming Console',
				label: 'Gaming Consoles',
			},
		],
	},
	{
		name: 'Paisje Shtepiake',
		label: 'Paisje Shtepiake',
		id: 'shtepiake',
	},
	{
		name: 'Motocikleta',
		label: 'Motocikleta',
		id: 'motocikleta',
	},
	{
		name: 'Bicikleta',
		label: 'Bicikleta',
		id: 'bicikleta',
	},

	// 'Telefona Celular',
	// 'Mobilje',
	// 'Materiale Ndertimi',
	// 'Ambient Biznesi',
];

export default categories;
