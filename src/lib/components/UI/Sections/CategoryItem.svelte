<script lang="ts">
	import type { Category, CategoryId } from '$lib/data/categories';
	import { filterCategory, getSearchUrl } from '$lib/functions/navigation';
	// Types
	import type { Size } from '$lib/types/size';
	import Badge from '../Important/Badge.svelte';

	// Props
	// Image - Will probably get included in category array later so might have to refactor and change this part
	export let imgLink: string = '';
	export let imgAlt: string | undefined = undefined;

	export let imageIndex: number = 0;

	export let categoryId: CategoryId;
	export let size: Size = 'base';

	const c: Category | undefined = filterCategory(categoryId);

	const getCategoryUrl = () => {
		const response = getSearchUrl(
			{
				id: '',
				isCategory: true,
			},
			15,
			categoryId ?? '',
			true
		);
		return response;
	};

	let categoryLink: any = getCategoryUrl();

	$: categoryId, (categoryLink = getCategoryUrl());
</script>

{#if c !== undefined}
	{#if size === 'xs'}
		<Badge margin link={categoryLink} type="link" title={c.name} />
	{/if}
	{#if size !== 'xs'}
		<div
			class="
	{size === 'xs'
				? 'flex h-16 w-fit items-center'
				: size === 'sm'
				? 'w-full'
				: 'flex w-full min-w-[8rem] flex-col items-center space-y-4 text-center md:min-w-0'}
	"
		>
			<div
				class="
			{size === 'xs' ? 'rounded-md' : size === 'sm' ? '' : 'rounded-full'}
			flex aspect-square h-full w-full items-center justify-center overflow-hidden bg-neutral-200 dark:bg-neutral-800"
			>
				<a href={categoryLink}>
					<img
						src={imgLink !== '' ? imgLink : c.images !== undefined ? c.images[imageIndex].link : ''}
						alt={imgAlt !== undefined ? imgAlt : c.label}
						class=" max-h-[80%] max-w-[90%] cursor-pointer object-cover"
					/>
				</a>
			</div>
			<a href={categoryLink}>
				{c.label}
			</a>
		</div>
	{/if}
{/if}
{#if c === undefined}
	<!-- LOADING OR ERROR MAYBE -->
{/if}

<!-- ! Backup -->
<!-- 
{#if c !== undefined}
	<div
		class="
	{size === 'xs'
			? 'flex h-16 w-fit items-center'
			: size === 'sm'
			? 'w-full'
			: 'flex w-full min-w-[8rem] flex-col items-center space-y-4 text-center md:min-w-0'}
	"
	>
		<div
			class="
			{size === 'xs' ? 'rounded-md' : size === 'sm' ? '' : 'rounded-full'}
			flex aspect-square h-full w-full items-center justify-center overflow-hidden bg-neutral-200 dark:bg-neutral-800"
		>
			<img
				src={imgLink !== '' ? imgLink : c.images !== undefined ? c.images[imageIndex].link : ''}
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
<!-- {/if} -->
