<script>
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
</script>

<Nav />
<main class="container prose max-w-none">
	<slot />
</main>
