import type { AccountType, Role, SellerInformation } from '@prisma/client';
import type { Product } from '$lib/types/product';

export type PageUser = {
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	account_type: AccountType;
	sellerInfo: SellerInformation | null;
	role: Role;
	profilePicture: string | null;
	posts?: Product[];
};
