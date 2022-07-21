<script lang="ts">
	const handleSubmit: svelte.JSX.EventHandler<SubmitEvent, HTMLFormElement> = () => {};
</script>

<svelte:head>
	<title>Worlde Leaderboard</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse prose">
		<div class="text-center">
			<h1 class="lg:leading-relaxed lg:text-5xl">
				Welcome to <br class="hidden lg:block lg:tracking-wide" /> Wordle Leaderboard
			</h1>
			<p class="py-6" />
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<form action="">
					<div class="form-control">
						<label class="label" for="email">
							<span class="label-text">Email</span>
						</label>
						<input
							name="email"
							type="email"
							placeholder="example@website.com"
							aria-label="email"
							required
							class="input input-bordered"
							id="email"
						/>
					</div>
					<div class="form-control">
						<label class="label" for="password">
							<span class="label-text">Password</span>
						</label>
						<input type="text" placeholder="password" class="input input-bordered" id="password" />
						<label class="label" for="forgot_link">
							<a href="/password_reset" class="label-text-alt link link-hover py-2" id="forgot_link"
								>Forgot password?</a
							>
						</label>
					</div>
					<div class="form-control mt-6">
						<button class="btn btn-primary">Login</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.hero {
		place-items: stretch;
	}
</style>
