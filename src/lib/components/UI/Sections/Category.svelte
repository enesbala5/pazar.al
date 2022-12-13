<script lang="ts">
	import type { Category, CategoryId } from '$lib/data/categories';
	import { filterCategory, gotoCategory } from '$lib/functions/navigation';
	export let imgLink: string;
	export let imgAlt: string | undefined = undefined;

	export let category: CategoryId;

	const c: Category | undefined = filterCategory(category);
</script>

{#if c !== undefined}
	<div class=" flex w-full min-w-[8rem] flex-col items-center space-y-4 text-center md:min-w-0">
		<div
			class="flex aspect-square h-full w-full items-center justify-center overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"
		>
			<img
				src={imgLink}
				on:click={() => gotoCategory(c)}
				on:keydown={() => gotoCategory(c)}
				alt={imgAlt !== undefined ? imgAlt : c.label}
				class=" max-h-[80%] max-w-[90%] cursor-pointer object-cover"
			/>
		</div>
		<p on:click={() => gotoCategory(c)} on:keydown={() => gotoCategory(c)} class="cursor-pointer">
			{c.label}
		</p>
	</div>
{/if}
{#if c === undefined}
	<!-- LOADING OR ERROR MAYBE -->
{/if}
