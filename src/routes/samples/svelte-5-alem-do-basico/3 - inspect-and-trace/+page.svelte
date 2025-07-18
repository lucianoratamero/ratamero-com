<script>
	import Butterfly from './Butterfly.svelte';

	let count = $state(0);
	let dobro = $derived(count * 2);
	let vezes_4 = $derived(dobro * 2);
	let vezes_8 = $derived(vezes_4 * 2);

	// $inspect(vezes_4);

	$effect(() => {
		// $inspect.trace();

		if (vezes_8 > 20) {
			alert('voou já era');
		}
	});
</script>

<Butterfly onflap={() => (count += 1)} />
