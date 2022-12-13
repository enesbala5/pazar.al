<script>
	import Facebook from '$lib/components/logos/social/Facebook.svelte';

	export let signUp = false;
</script>

<button
	class="buttonBase buttonSecondaryWithIcon flex w-full items-center justify-center space-x-2.5"
>
	<Facebook classNames="h-5 w-5" />
	<p>{signUp ? 'Sign Up' : 'Sign In'} with Facebook</p>
</button>
