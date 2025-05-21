<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<main class="flex flex-col grow justify-center sm:px-6">
	<article
		class="prose hover:prose-a:text-sky-700 prose-ul:list-disc dark:prose-invert mx-auto flex max-w-3xl flex-col items-start justify-center border-zinc-200 pb-16 dark:border-zinc-700 sm:px-6 2xl:prose-xl"
	>
		{@render children()}
	</article>
</main>
