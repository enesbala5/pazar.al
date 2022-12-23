<script lang="ts">
	export let classNames: string;

	export let liked: boolean = false;
	export let inverted: boolean = false;
	import Heart from '~icons/feather/heart';
</script>

<!-- <svg xmlns="http://www.w3.org/2000/svg" class={classNames} viewBox="0 0 23.903 21.232">
	<path
		id="Path_85"
		data-name="Path 85"
		d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
		transform="translate(-0.049 -1.498)"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="3"
	/>
</svg> -->
<!-- * OLD -->
<!-- <Heart /> -->

<svg
	xmlns="http://www.w3.org/2000/svg"
	class=" border-box 
	{liked
		? 'group-hover:hoverFill fill-red-500 stroke-red-500 group-hover:stroke-red-500'
		: `${
				inverted
					? 'group-hover:hoverFill fill-transparent stroke-neutral-100 dark:stroke-neutral-100'
					: 'group-hover:hoverFill fill-transparent stroke-neutral-700 group-hover:fill-neutral-900 dark:group-hover:fill-neutral-600'
		  } dark:stroke-neutral-100 `} {classNames}"
	viewBox="0 0 22.903 20.232"
>
	<path
		id="heart"
		d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
		transform="translate(-0.549 -1.998)"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
	/>
</svg>

<style>
	.hoverFill {
		fill-opacity: 20%;
	}
</style>
