import { pageParamParse } from './conversions';

export function getParamsFromLoad(searchParams: URLSearchParams) {
	let params: any = {};
	searchParams.forEach((value, key) => {
		if (key === 'id') {
			params.id = value;
		}
		if (key === 'page') {
			params.page = pageParamParse(value);
		}
		if (key === 'itemsPerPage') {
			params.itemsPerPage = pageParamParse(value);
		}
		if (key === 'isCategory') {
			params.isCategory = pageParamParse(value);
		}
	});
	return params;
}
