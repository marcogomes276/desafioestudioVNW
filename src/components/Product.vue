<template>
	<div id="Appproduct">
		<div class="container">
			<section class="container__partup">
				<img class="container__partup--rightcomputer" src="../assets/pc1.jpg">
				<div class="container__partup">
					<h1 class="container__partup--title">OUR PRODUCT</h1>
					<p class="container__partup--subtitlepart1">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
					<p class="container__partup--subtitlepart2">Quisque volutpat mattis eros.</p>
					<p class="container__partup--subtitlepart3">Nullam malesuada erat ut turpis.</p>
					<button class="container__partup--holdtight">Read more</button>
				</div>
			</section>
			<section class="container__partlow">
				<div class="container__partlow">
					<h1 class="container__partlow--title">PRODUCT DESCRIPTIONS</h1>
					<p class="container__partlow--subtitlepart">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
					<p class="container__partlow--subtitlepart">Quisque volutpat mattis eros.</p>
					<p class="container__partlow--subtitlepart"> Nullam malesuada erat ut turpis.</p>
					<button class="container__partlow--holdtight">Read more</button>
				</div>
				<img class="container__partlow--leftcomputer" src="../assets/pc2.jpg">
			</section>
		</div>
	</div>
</template>
<script></script>
<style scoped>
	#Appproduct{

	}
	.container{
		min-height: 100vh;
	}
	.container__partup{
		display: flex;
		flex-direction: row;
	}
	.container__partup{
		display: flex;
		flex-direction: column;
	}
	.container__partup--title{

	}
	.container__partlow--subtitlepart{
		font-size: 20px;
	}
</style>