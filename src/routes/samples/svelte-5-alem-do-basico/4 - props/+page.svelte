<script>
	import ChildComponent from './ChildComponent.svelte';

	let name = $state('world');
	const onsave = (value) => {
		name = value;
	};
</script>

<h1>Hello {name}!</h1>
<input bind:value={name} />

<ChildComponent {name} {onsave} />
