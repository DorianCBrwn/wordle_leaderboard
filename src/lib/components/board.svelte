<script>
	const handleClick = (e) => {
		console.log('clicked ' + e.target.id);
	};
</script>

<section class="flex flex-col ">
	<h1 class="text-center">LeaderBoard</h1>
	<div class="btn-group justify-center">
		<button class="btn" on:click={handleClick}>Daily</button>
		<button class="btn" on:click={handleClick}>Monthly</button>
		<button class="btn" on:click={handleClick}>All Time</button>
	</div>
</section>
