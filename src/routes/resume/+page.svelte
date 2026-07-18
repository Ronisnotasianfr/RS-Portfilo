<script>
	import { data, title } from '@data/resume';
	import { base } from '$app/paths';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<a href="{base}{data}" download>
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{:else}
			<Chip>Oops! No CV available at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
