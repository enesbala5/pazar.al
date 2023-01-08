<script lang="ts">
	import PhoneIcon from '~icons/feather/phone';
	import LifebuoyIcon from '~icons/feather/life-buoy';
	import BookIcon from '~icons/feather/book';

	const supportLinks = [
		{
			name: 'Sales',
			href: '#',
			description:
				'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
			icon: PhoneIcon,
		},
		{
			name: 'Technical Support',
			href: '#',
			description:
				'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
			icon: LifebuoyIcon,
		},
		{
			name: 'Media Inquiries',
			href: '#',
			description:
				'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
			icon: BookIcon,
		},
	];

	// Icons
	import UserSettings from '$lib/components/logos/user/generic/UserSettings.svelte';
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import Settings from '$lib/components/logos/user/filters/Settings.svelte';
	import Globe from '~icons/feather/globe';
	// Data
	import { page } from '$app/stores';
	import type { PageUser } from '$lib/types/page';
	import type { PageData } from './$types';
	import { nav } from '$lib/userState/nav';
	import { goto } from '$app/navigation';
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import PostGrid from '$lib/components/UI/Sections/PostGrid.svelte';
	import { card } from '$lib/userState/preferences';
	import PostDisplay from '$lib/components/UI/Sections/PostDisplay.svelte';
	import Logout from '$lib/components/auth/Logout.svelte';

	import ReturnButton from '$lib/components/UI/Buttons/ReturnButton.svelte';
	import Alert from '$lib/components/UI/Important/Alert.svelte';
	export let data: PageData;

	let user: PageUser | undefined = data ?? undefined;
	let loggedInUser: PageUser | undefined = $page.data.user ?? undefined;

	$: loggedInUser = $page.data.user;
	$: user = data;

	let loggedIn: boolean = loggedInUser?.uid === user?.uid;
	$: (user, loggedInUser), (loggedIn = loggedInUser?.uid === user?.uid);
</script>

{#if user !== undefined && user.posts !== undefined && user.posts.length > 0}
	<PostDisplay posts={user.posts} classNames="" />
{/if}

<div class="flex h-full min-h-[85vh] items-center justify-center lg:w-1/2 ">
	<div>
		<h1 class="headline text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
			Something has gone wrong.
		</h1>
		<div class="mt-8">
			<Alert title={'No posts available'} message={''} type="error" />
			<!-- <p>{$page.status} - {$page.error?.message}</p> -->
		</div>
		<div class="mt-16 flex items-center space-x-2 ">
			<a class="buttonPrimary buttonBase" href={nav.createListing}>Create new Post</a>
			<ReturnButton buttonSize="buttonBase" buttonType="buttonSecondary" />
			<!-- <Logout>
				<button type="submit" class="buttonSecondary buttonBase">Log Out</button>
			</Logout> -->
		</div>
	</div>
</div>
