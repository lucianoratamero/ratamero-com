<script lang="ts">
	type Props = {
		title?: string;
		href?: string;
		stringData: string;
	};

	let { title = 'Untitled post', href = '#', stringData }: Props = $props();
</script>

<a
	class="w-full transform rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-pink-500 p-1 transition-all hover:scale-[1.01] md:w-1/3 hover:no-underline"
	{href}
	data-sveltekit-prefetch
>
	<div
		class="flex h-full flex-col justify-between rounded-lg p-4 bg-gradient-to-br from-cyan-50 to-pink-50 dark:bg-gradient-to-br dark:from-cyan-900 dark:via-cyan-950 dark:to-pink-950"
	>
		<div class="flex flex-col justify-between md:flex-row">
			<h4
				class="mb-6 w-full text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100 sm:mb-10 md:text-lg"
			>
				{title}
			</h4>
		</div>
		<div class="capsize flex items-center text-zinc-800 dark:text-zinc-200">
			{stringData}
		</div>
	</div>
</a>
