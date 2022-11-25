import type { Cities, Countries } from '@prisma/client';

export interface Product {
	pid: string;
	title: string;
	description: string;
	price: number;
	eur: boolean;
	city: Cities;
	country: Countries;
	disabled?: boolean;
}

export interface ProductTag {
	id: number;
	name: string;
	value: string;
	required?: boolean;
}
