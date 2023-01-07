import type { Cities, Countries, Image, Post, PriceHistory } from '@prisma/client';

export interface ProductPriceHistory {
	price: number;
	eur: boolean;
}

export interface Product {
	id: string;
	title: string;
	description: string;
	priceHistory: ProductPriceHistory[];
	city: Cities;
	country?: Countries;
	category?: string;
	disabled?: boolean;
	tags?: ProductTag[];
	images?: Image[];
}

export interface ProductTag {
	id: number;
	name: string;
	value: string;
	required?: boolean;
}
