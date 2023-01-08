<script>
	import { page } from '$app/stores';
	import Logout from '$lib/components/auth/Logout.svelte';

	import ReturnButton from '$lib/components/UI/Buttons/ReturnButton.svelte';
	import Alert from '$lib/components/UI/Important/Alert.svelte';
</script>

<div class="flex h-full min-h-[85vh] items-center justify-center lg:w-1/2 ">
	<div>
		<h1 class="headline text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
			Something has gone wrong.
		</h1>
		<div class="mt-8">
			<Alert title={$page.status} message={$page.error?.message} type="error" />
			<!-- <p>{$page.status} - {$page.error?.message}</p> -->
		</div>
		<div class="mt-16 flex items-center space-x-2 ">
			<ReturnButton buttonSize="buttonBase" buttonType="buttonPrimary" />
			<Logout>
				<button type="submit" class="buttonSecondary buttonBase">Log Out</button>
			</Logout>
		</div>
	</div>
</div>
