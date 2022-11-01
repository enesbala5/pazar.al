<script>

	// Initializations:
	const githubUser = 'Ncookiez';
	const githubLink = `https://github.com/${githubUser}`;
	
</script>

<!-- #################################################################################################### -->

<footer>

	<!-- Footer Content -->
	<span>Made with </span>
	<i id="heart" />
	<span> by <a href="{githubLink}">Ncookie</a></span>

</footer>

<!-- #################################################################################################### -->

<style>
	#heart {
		width: 40px;
		height: 40px;
		margin: 0 -8px;
		background: transparent url('/images/heart.png') no-repeat;
		background-size: 2900%;
	}
	
	#heart:hover {
		background-position: right;
		animation: moveHeart 800ms steps(28) forwards;
	}
	
	@keyframes moveHeart {
		0% { background-position: left; }
		50% { background-position: right; }
		100% { background-position: right; }
	}
	
</style>