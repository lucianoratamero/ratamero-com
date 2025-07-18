<svelte:options customElement="counter-buttons" />

<script lang="ts">
	function dispatch(type) {
		$host().dispatchEvent(new CustomEvent(type));
	}

	const reset = (event: Event) => {
		console.log(event);
		$host().dispatchEvent(new CustomEvent('reset'));
	};

	$effect(() => {
		$host().addEventListener('reset', reset);

		return $host().removeEventListener('reset', reset);
	});
</script>

<button onclick={() => dispatch('decrement')}>decrement</button>
<button onclick={() => dispatch('increment')}>increment</button>
