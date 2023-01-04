/**
 * Callback when anything other than the element is clicked
 *
 * Usage:
 * use:clickOutside
 * Callback: on:outclick={() => closeModal()
 */

export function clickOutside(node: any): any {
	const handleClick = (event: any) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent('outclick'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		},
	};
}
