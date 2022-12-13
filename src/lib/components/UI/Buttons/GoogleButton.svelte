<script>
	import Google from '$lib/components/logos/social/Google.svelte';

	export let signUp = false;
</script>

<button
	class="buttonBase buttonSecondaryWithIcon flex w-full items-center justify-center space-x-2"
>
	<Google classNames="h-5 w-5" />
	<p>{signUp ? 'Sign Up' : 'Sign In'} with Google</p>
</button>
