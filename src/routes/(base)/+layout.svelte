<script lang="ts">
	import BaseLayout from '$lib/BaseLayout.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

<BaseLayout>
	{@render children?.()}
</BaseLayout>
