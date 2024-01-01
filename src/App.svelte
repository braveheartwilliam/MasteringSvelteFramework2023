<!-- NEED CORS EXTENSION IN BROWSER TO MAKE THIS WORK -->

<script>
	let teamRedColor = 'red';
	let teamBlueColor = 'blue';
	let teamWinnerReset = '';
	let teamLoser = '';
	let teamScoreRed = 20;
	let teamScoreBlue = 20;
	import Team from './Team-My-MTG.svelte';
	function resetGame() {
		teamScoreBlue = 20;
		teamScoreRed = 20;
		teamLoser = '';
	}
</script>

<main>
	<h1>MTGCounter App</h1>
	<div class="row">
		<Team
			bind:teamColor={teamRedColor}
			bind:teamLoser
			bind:teamScore={teamScoreRed}
		/>
		<Team
			bind:teamColor={teamBlueColor}
			bind:teamLoser
			bind:teamScore={teamScoreBlue}
		/>
	</div>
	<div class="col">
		{#if teamLoser === 'blue'}
			<h2
				class="winner"
				style="color:red"
			>
				Red Won
			</h2>
			<h2>
				<button
					on:click={resetGame}
					class="btn newGame">New Game</button
				>
			</h2>
		{:else if teamLoser === 'red'}
			<h2
				class="winner"
				style="color:blue"
			>
				Blue Won
			</h2>
			<div class="row">
				<h2>
					<button
						on:click={resetGame}
						class="btn newGame">New Game</button
					>
				</h2>
			</div>
		{:else}
			<button
				on:click={resetGame}
				class="btn reset">Reset Game</button
			>
		{/if}
	</div>
</main>

<style>
	div.row {
		display: flex;
		justify-content: center;
		margin-top: 0%;
		margin-bottom: 0%;
	}
	div.col {
		display: flex;
		flex-direction: column;
		flex-flow: column;
		justify-content: center;
	}
	.btn {
		width: 80vw;
		display: flex;
		justify-content: center;
		margin: auto;
		margin-top: 0.7rem;
		font-size: 1.2rem;
	}
	h1 {
		text-align: center;
	}
	h2 {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.winner {
		/* align-content: center;
		justify-content: center; */
		text-align: center;
	}

	.newGame {
		background-color: green;
		color: white;
		margin-top: 0%;
		/* transform: translateY(3rem); */
	}
	.reset {
		background-color: orange;
	}
</style>
