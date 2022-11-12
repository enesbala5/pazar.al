<script lang="ts">
	import { page } from '$app/stores';
	import Settings from '$lib/components/logos/user/filters/Settings.svelte';
	import UserSettings from '$lib/components/logos/user/generic/UserSettings.svelte';
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import type { PageUser } from '$lib/types/page';

	const user: PageUser | undefined = $page.data.user ?? undefined;
</script>

<article class="mt-12 px-4 lg:mx-auto lg:w-10/12">
	<section
		class="flex items-center space-x-4 rounded-l-full bg-gradient-to-r from-neutral-800 to-neutral-900 lg:space-x-12"
	>
		<div
			class="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-700 p-8"
		>
			<p class="text-8xl">E</p>
		</div>
		<div>
			<h1 class="text-6xl font-medium">{user?.firstName} {user?.lastName}</h1>
			<p class="mt-2 opacity-70">Anetar i Pazar.al</p>
			<!-- TODO: Duplicate of NAV button -->
			<!-- <div class="mt-6 flex items-center space-x-2">
				<button class="buttonPrimary  text-sm">Krijoni nje postim</button>
				<button class="buttonSecondary  text-sm">Dilni nga llogaria</button>
			</div> -->
		</div>
	</section>

	<!-- USER ACTIONS -->
	<section class="mt-24 flex justify-between space-x-8">
		<div class="w-2/3">
			<!-- <p class="mb-6 text-lg font-medium">Veprimtaria</p> -->
			<div class="grid grid-cols-2 gap-4">
				<div class="flex justify-between rounded-md bg-neutral-800 p-2">
					<div
						class="flex aspect-square grow items-center justify-center rounded-md bg-neutral-900 p-2"
					>
						<div class="h-10 w-10">
							<Heart classNames="w-full h-full fill-white" />
						</div>
					</div>
					<div class="flex w-full grow items-center py-4 px-4">
						<p class="w-1/2 text-xl font-medium">Postimet e Pelqyera</p>
					</div>
				</div>

				<div class="flex justify-between rounded-md bg-neutral-800 p-2">
					<div
						class="flex aspect-square grow items-center justify-center rounded-md bg-neutral-900 p-2"
					>
						<div class="h-10 w-10">
							<Heart classNames="w-full h-full fill-white" />
						</div>
					</div>
					<div class="flex w-full grow items-center py-4 px-4">
						<p class="w-1/2 text-xl font-medium">Postimet e Kontaktuar</p>
					</div>
				</div>
			</div>
		</div>
		<!-- secondary -->
		<div class="w-1/3 rounded-md border border-neutral-800 bg-neutral-900 p-4">
			<p class="mb-4 text-lg font-medium">Menaxho Llogarine</p>

			<hr class="mb-4 border-neutral-800 " />
			<p class="mb-4 text-base opacity-80">Aksionet Kryesore</p>
			<div class="flex flex-col items-center space-y-3">
				<div class="flex w-full space-x-4 rounded-full bg-neutral-800 py-2.5 px-4">
					<UserSettings classNames="w-6 h-6" />
					<p>Cilesimet</p>
				</div>
				<div class="flex w-full space-x-4 rounded-full bg-neutral-800 py-2.5 px-4">
					<UserSettings classNames="w-6 h-6" />
					<p>Gjuha / Language</p>
				</div>
			</div>
		</div>

		<div />
	</section>
</article>
