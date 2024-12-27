<script lang="ts">
	import '$lib/hljs-github-dark.css';
	import type { Snippet } from 'svelte';
	import '../tailwind.css';
	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children()}
