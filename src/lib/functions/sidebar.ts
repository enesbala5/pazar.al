import { sidebarOpen, scrollingAllowed } from '$lib/userState/preferences';

const getSidebarState = () => {
	let sidebarState: boolean = false;
	sidebarOpen.subscribe((state) => {
		sidebarState = state;
	});

	let scrollableState: boolean = false;
	scrollingAllowed.subscribe((state) => {
		scrollableState = state;
	});

	return { sidebarState, scrollableState };
};

export const toggleSidebar = () => {
	let { sidebarState, scrollableState } = getSidebarState();
	sidebarOpen.set(!sidebarState);
	scrollingAllowed.set(!scrollableState);
};

export const closeSidebar = () => {
	sidebarOpen.set(false);
	scrollingAllowed.set(true);
};

export const openSidebar = () => {
	sidebarOpen.set(true);
	scrollingAllowed.set(false);
};
