import { error } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
	const name = 'Developed by: Enes Bala';
	return new Response(String(name));
};
