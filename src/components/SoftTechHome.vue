<template>
	<div id="AppHome">
		<section class="container">
			<div class="container__texts">
				<h1 class="container__texts--title">Bring your Big Data to Life With Soft-Tech</h1>
				<p class="container__texts--paragraph">Blue Lance transforms your company’s data into rich visuals for you to collect and organize so you can focus on what matters to you. Stay in the know, spot trends as they happen, and push your business further.</p>
			</div>
			<div class="container__function">
				<input class="container__function--write" type="text" name="">
				<button class="container__function--toclick">Use it free</button>
			</div>
		</section>
	</div>
</template>
<script></script>
<style scoped>
	#AppHome{
		background-image: url(../assets/homebg.jpg);
		/*hyphens: eight: 100vh;*/
	}
	.container{
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;		
	}
	.container__texts{
		display: flex;
		flex-direction: column;
	}
	.container__texts--title{
		display: flex;
		justify-content: center;
		font-size: 46px;
		color: #fff;
	}
	.container__texts--paragraph{
		display: flex;
		text-align:center;
		font-size: 17px;
		color: #fff;
		margin: 1em 10em 5em 10em;
	}
	.inputcontainer__function{
		display: flex;
		flex-direction: row;
	}
	.container__function--write{
		width: 15em;
		height: 3em;
		border:solid;
		border-width: 1px;
		border-color: #DDDDDD;
	}
	.container__function--toclick{
		width: 7em;
		height: 3.2em;
		background-color: #82CA9C;
		color: #fff;
		border:none;	
	}
</style>