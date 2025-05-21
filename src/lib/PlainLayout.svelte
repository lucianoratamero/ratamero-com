<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<main class="flex flex-col grow justify-center px-4 sm:px-8">
	<article
		class="prose hover:prose-a:text-sky-700 prose-ul:list-disc dark:prose-invert mx-auto flex max-w-3xl flex-col items-start justify-center border-zinc-200 px-4 pb-16 dark:border-zinc-700 sm:px-8 xl:max-w-5xl xl:prose-xl"
	>
		{@render children()}
	</article>
</main>
