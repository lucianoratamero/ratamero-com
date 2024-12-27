<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<article
	class="container prose mx-auto mb-12 hover:prose-a:text-sky-700
  prose-ul:list-disc
  dark:prose-invert
  "
>
	{@render children()}
</article>
