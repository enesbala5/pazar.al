import { subCategoriesIds, type Category, type CategoryId } from '$lib/data/categories';
import { nav } from '$lib/userState/nav';
import { goto } from '$app/navigation';
import categories from '$lib/data/categories';

export const gotoCategory = (category: Category) => {
	goto(`${nav.category}/?id=${category.id}`);
};

/**
 * Filter Category Function
 * -> 2 Levels of Depth
 *
 * || Category -> Subcategory -> Subcategory's Subcategory
 * @param id
 */
export const filterCategory = (id: CategoryId) => {
	const filteredCategory: Category | undefined = categories.find((cat) => {
		if (cat.id == id) return cat;
	});

	if (filteredCategory !== undefined) {
		return filteredCategory;
	}

	const subCategoryPointer = subCategoriesIds.find((pointer) => pointer.id === id);

	if (subCategoryPointer === undefined) return undefined;

	const subCategoryParent = categories.find((cat) => cat.id === subCategoryPointer.parentCategory);

	if (subCategoryParent === undefined) return undefined;

	if (
		(subCategoryParent.subcategories?.length ?? 0 > 0) &&
		subCategoryParent.subcategories !== undefined
	) {
		const subcategories = subCategoryParent.subcategories;

		const subcategory = subcategories.filter((subcat) => {
			if (subcat.id === id) {
				return subcat;
			}
		});

		return subcategory[0];
	}

	return undefined;
};
