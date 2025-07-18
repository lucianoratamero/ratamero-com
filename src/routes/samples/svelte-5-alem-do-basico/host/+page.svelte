<script lang="ts">
	import './CustomElement.svelte';

	let count = $state(0);
</script>

<counter-buttons ondecrement={() => (count -= 1)} onincrement={() => (count += 1)}
></counter-buttons>

<p>count: {count}</p>
