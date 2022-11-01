import type { Role } from '@prisma/client';

export type PageUser = {
	name: string;
	surname: string;
	email: string;
	role: Role;
};
