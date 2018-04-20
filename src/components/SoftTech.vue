<template>
	<div class="AppSite">
		<section class="container">
			<img class="container__image" src="../assets/logo1.png">
			<nav class="container__list">
				<ol class="container__list--content" v-on:click="SoftTechHome">HOME</ol>
				<ol class="container__list--content" v-on:click="Product">PRODUCT</ol>
				<ol class="container__list--content">SERVICE</ol>
				<ol class="container__list--content">BUSINESS</ol>
				<ol class="container__list--content">CONTACT</ol>
			</nav>
			<button class="container__list--action">SIGN IN</button>
		</section>
	</div> 
</template>
<script>
import SoftTechHome from '@/components/SoftTechHome'
import Product from '@/components/Product'

export default {
  name: 'HelloWorld',
  data () {
    return{

    }
  }
}
</script>
<style scoped>
#AppSite{
	background-color: red;
}
.container{
	/*background-color: blue;*/
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin: 10px;
}
.container__image{

}
.container__list{
	/*background-color: pink;*/
	display: flex;
	flex-direction: row;
	color: #82CA9C;
	margin-top: 10px;
	margin-left: 9em;
}
.container__list--content{
	/*background-color: tomato;*/
	margin: 10px;
	color: black;
}
.container__list--content:hover{
	color: #82CA9C;
}
.container__list--action{
	/*background-color: yellow;*/
	width: 12em;
	height: 5em;
	border: solid;
	border-color: #82CA9C;
	color: #82CA9C;
	background-color: #fff;
	border-radius: 50px;
}
.container__list--action:hover{
	background: #82CA9C;
	color: #fff;
}
</style>