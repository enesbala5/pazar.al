import { modalOpen, scrollingAllowed } from '$lib/userPreferences/preferences';

const getModalState = () => {
	let modalState: boolean = false;
	modalOpen.subscribe((state) => {
		modalState = state;
	});

	let scrollableState: boolean = false;
	scrollingAllowed.subscribe((state) => {
		scrollableState = state;
	});

	return { modalState, scrollableState };
};

export const toggleModal = () => {
	let { modalState, scrollableState } = getModalState();
	modalOpen.set(!modalState);
	scrollingAllowed.set(!scrollableState);
};

export const closeModal = () => {
	modalOpen.set(false);
	scrollingAllowed.set(true);
};

export const openModal = () => {
	modalOpen.set(true);
	scrollingAllowed.set(false);
};
