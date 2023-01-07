import type { Cities } from '@prisma/client';

export const cities = [
	{ value: 'BajramCurri', label: 'Bajram Curri' },
	{ value: 'Ballsh', label: 'Ballsh' },
	{ value: 'Belsh', label: 'Belsh' },
	{ value: 'Berat', label: 'Berat' },
	{ value: 'Bilisht', label: 'Bilisht' },
	{ value: 'Bulqize', label: 'Bulqize' },
	{ value: 'Burrel', label: 'Burrel' },
	{ value: 'Cerrik', label: 'Cerrik' },
	{ value: 'Corovode', label: 'Corovode' },
	{ value: 'Delvine', label: 'Delvine' },
	{ value: 'Divjake', label: 'Divjake' },
	{ value: 'Durres', label: 'Durres' },
	{ value: 'Erseke', label: 'Erseke' },
	{ value: 'Fier', label: 'Fier' },
	{ value: 'FusheKruje', label: 'Fushe Kruje' },
	{ value: 'Gjirokaster', label: 'Gjirokaster' },
	{ value: 'Gramsh', label: 'Gramsh' },
	{ value: 'Kamez', label: 'Kamez' },
	{ value: 'Kavaje', label: 'Kavaje' },
	{ value: 'Korce', label: 'Korce' },
	{ value: 'Kruje', label: 'Kruje' },
	{ value: 'Krume', label: 'Krume' },
	{ value: 'Kucove', label: 'Kucove' },
	{ value: 'Kukes', label: 'Kukes' },
	{ value: 'Lac', label: 'Lac' },
	{ value: 'Lezhe', label: 'Lezhe' },
	{ value: 'Libonik', label: 'Libonik' },
	{ value: 'Librazhd', label: 'Librazhd' },
	{ value: 'Lushnje', label: 'Lushnje' },
	{ value: 'Mamurras', label: 'Mamurras' },
	{ value: 'Patos', label: 'Patos' },
	{ value: 'Peqin', label: 'Peqin' },
	{ value: 'Permet', label: 'Permet' },
	{ value: 'Peshkopi', label: 'Peshkopi' },
	{ value: 'Pogradec', label: 'Pogradec' },
	{ value: 'Prrenjas', label: 'Prrenjas' },
	{ value: 'Puke', label: 'Puke' },
	{ value: 'Roskovec', label: 'Roskovec' },
	{ value: 'Rreshen', label: 'Rreshen' },
	{ value: 'Rrogozhine', label: 'Rrogozhine' },
	{ value: 'Sarande', label: 'Sarande' },
	{ value: 'Shengjin', label: 'Shengjin' },
	{ value: 'Shijak', label: 'Shijak' },
	{ value: 'Shkoder', label: 'Shkoder' },
	{ value: 'Sukth', label: 'Sukth' },
	{ value: 'Tepelene', label: 'Tepelene' },
	{ value: 'Tirane', label: 'Tirane' },
	{ value: 'Vlore', label: 'Vlore' },
];

export const parseCity = (city: Cities) => {
	const response = cities.filter((c) => {
		if (c.value === city) {
			return c;
		}
	});

	if (response !== undefined) {
		return response[0]?.label ?? '';
	}
	return city;
};
