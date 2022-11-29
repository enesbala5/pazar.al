import type { AccountType, Role, SellerInformation } from '@prisma/client';

export type PageUser = {
	firstName: string;
	lastName: string;
	email: string;
	account_type: AccountType;
	sellerInfo: SellerInformation | null;
	role: Role;
	profilePicture: string | null;
};
