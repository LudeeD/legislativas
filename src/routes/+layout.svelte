<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

export const prerender = true;

{@render children()}
