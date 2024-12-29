<script lang="ts">
	type Props = {
		name: string;
		onsave: (value: string) => void;
	};

	let { name, onsave }: Props = $props();

	let local_name = $state(name);
</script>

<div>
	<h2>Child component</h2>
	<p>Hello {local_name}</p>
	<input bind:value={local_name} />
	<button onclick={() => onsave(local_name)}>Save</button>
</div>

<style>
	div {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		border: 0.5rem solid;
	}
</style>
