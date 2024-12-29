<script>
	import { setContext } from 'svelte';
	import ChildComponent from './ChildComponent.svelte';

	let name = $state({ value: 'world' });
	setContext('name', name);
</script>

<h1>Hello {name.value}!</h1>
<input bind:value={name.value} />

<ChildComponent />
