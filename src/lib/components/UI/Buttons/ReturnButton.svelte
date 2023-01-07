<script lang="ts">
	import ReturnIcon from '~icons/feather/corner-up-left';

	export let buttonType: 'buttonPrimary' | 'buttonSecondary' = 'buttonSecondary';
	export let buttonSize: 'buttonXs' | 'buttonSm' | 'buttonBase' | 'buttonLg' | 'buttonXl' =
		'buttonSm';
</script>

<button
	on:click={() => {
		history.back();
	}}
	class="{buttonType} {buttonSize} flex items-center space-x-2 px-4"
>
	<ReturnIcon class="h-4 w-4" />
	<p>Return</p></button
>
