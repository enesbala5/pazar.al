
export const loadFromApi = async (
	fetch: {
		(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>;
		(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>;
		(
			arg0: string,
			arg1: {
				method: string;
				headers: { 'Content-Type': string };
				body: string;
			}
		): Promise<any>;
	},
	query: string,
	apiUrl: string,
	count: boolean = false
) => {
	let url = `/api/${apiUrl}`;
	if (count) {
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			cache: 'force-cache',
			body: JSON.stringify(query),
		})
			.then((response: any) => response.json())
			.then((data: any) => {
				console.log(data);
				return data;
			});
	} else {
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			cache: 'no-cache',
			body: JSON.stringify(query),
		})
			.then((response: any) => response.json())
			.then((data: any) => {
				console.log(data);
				return data;
			});
	}
};

export async function load({ params, fetch, load }) {
	// const newPost = await prisma.post.create({
	// 	data: {
	// 		title: 'Range Rover 2022',
	// 		description: 'Super mjet 2',
	// 		price: 100,
	// 		eur: true,
	// 		old_price: 100,
	// 		city: 'Tirana',
	// 		country: 'Albania',
	// 		category: 'Makine',
	// 	},
	// });

	console.log(load);

	return {
		kerkim: params.id ?? '',
		count: await loadFromApi(fetch, params.id, 'getLatestPosts/count', true),
		data: await loadFromApi(fetch, params.id, 'getLatestPosts'),
	};
}
