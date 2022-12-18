<script lang="ts">
	// sveltekit: import { page } from "$app/stores";

	export let classNames = '';
	export let text = 'Check out this post!';
	export let domain = 'https://pazar.vercel.app';
	export let path = '/'; // sveltekit: $page.url.pathname;
	export let title = path.split('/').splice(-1).toString(); // default to end of path

	let url = domain + path;

	let complete = false;

	async function handleClick() {
		console.log('AAFHAKHL');

		try {
			if (window.navigator.canShare) {
				await navigator.share({ title, text, url });
			} else {
				await navigator.clipboard.writeText(url);
				complete = true;
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>

<button on:click={handleClick} class={classNames}>
	<slot />
</button>
