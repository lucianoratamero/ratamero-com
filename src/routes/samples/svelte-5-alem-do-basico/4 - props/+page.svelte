<script lang="ts">
	import ChildComponent from './ChildComponent.svelte';

	let name = $state('world');
	const onsave = (value: string) => {
		name = value;
	};
</script>

<h1>Hello {name}!</h1>
<input bind:value={name} />

<ChildComponent {name} {onsave} />
