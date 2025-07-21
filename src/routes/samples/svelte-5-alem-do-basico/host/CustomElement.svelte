<svelte:options customElement="counter-buttons" />

<script lang="ts">
	function dispatch(type) {
		$host().dispatchEvent(new CustomEvent(type));
	}

	const internalReset = (event: Event) => {
		console.log(event);
		console.log($host());
		$host().dispatchEvent(new CustomEvent('internalreset'));
	};

	$effect(() => {
		$host().addEventListener('reset', (e) => internalReset(e));
		return $host().removeEventListener('reset', (e) => internalReset(e));
	});
</script>

<button onclick={() => dispatch('decrement')}>decrement</button>
<button onclick={() => dispatch('increment')}>increment</button>
