<script lang="ts">
	import './CustomElement.svelte';

	let count = $state(0);

	const reset = () => {
		document.querySelector('counter-buttons').dispatchEvent(
			new CustomEvent('reset', {
				composed: true
			})
		);
	};
</script>

<counter-buttons
	ondecrement={() => (count -= 1)}
	onincrement={() => (count += 1)}
	oninternalreset={() => (count = 0)}
></counter-buttons>

<p>count: {count}</p>
<button onclick={reset}>reset</button>
