<script lang="ts">
	import ReturnIcon from '~icons/feather/corner-up-left';
</script>

<button
	on:click={() => {
		history.back();
	}}
	class="buttonSecondary buttonSm flex items-center space-x-2 px-4"
>
	<ReturnIcon class="h-4 w-4" />
	<p>Return</p></button
>
