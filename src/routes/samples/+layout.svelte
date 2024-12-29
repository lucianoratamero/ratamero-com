<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	const children_render = $derived(children);
</script>

<article class="mx-auto p-2 flex w-full max-w-3xl flex-col items-start justify-center sm:p-4">
	<div id="sample-wrapper" class="prose mt-12 w-full max-w-none dark:prose-invert">
		{@render children_render?.()}
	</div>
</article>

<style global lang="postcss">
	#sample-wrapper {
		& h1,
		& h2,
		& h3,
		& h4,
		& h5,
		& h6,
		& p {
			@apply m-0;
		}

		& input,
		& textarea {
			@apply w-full border border-gray-300 shadow-sm px-2;
		}
	}
</style>
