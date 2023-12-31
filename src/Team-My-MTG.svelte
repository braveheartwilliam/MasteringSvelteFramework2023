<script>
	export let teamColor = 'green';
	export let teamScore = 20;
	export let teamLoser = '';
	function subtractScore() {
		if (teamScore > 0) {
			teamScore -= 1;
			if (teamScore === 0) {
				teamLoser = teamColor;
			}
		}
	}
	function addScore() {
		if (teamScore > 0) {
			teamScore += 1;
		}
	}
</script>

<div class="col">
	<div
		class="container"
		style="border-color: {teamColor};"
	>
		<h2 style="color: {teamColor};">
			Team {teamColor.charAt(0).toUpperCase()}{teamColor.slice(1)}: {teamScore}
		</h2>

		{#if teamLoser === ''}
			<button
				class="greenPlus"
				on:click={addScore}>+</button
			>
			<button
				class="redMinus"
				on:click={subtractScore}>-</button
			>
		{:else}
			<button class="greenPlus">+</button>
			<button class="redMinus">-</button>
		{/if}
	</div>
</div>

<style>
	.container {
		width: 40vw;
		height: 7rem;
		margin: 20px;
		border-width: 5px;
		border-style: dashed;
	}
	div.col {
		text-align: center;
		padding: 20px;
	}
	button {
		color: white;
	}
	.greenPlus {
		background-color: green;
	}
	.redMinus {
		background-color: red;
	}
</style>
