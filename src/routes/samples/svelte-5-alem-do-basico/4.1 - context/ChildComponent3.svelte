<script>
	import { getContext } from 'svelte';

	let name = getContext('name');
</script>

<div>
	<p>Child component 3</p>
	<p>Hello {name.value}</p>
	<input bind:value={name.value} />
</div>

<style>
	div {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		border: 0.5rem solid;
	}
</style>
