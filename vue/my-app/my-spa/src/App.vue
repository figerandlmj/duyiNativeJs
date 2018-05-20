<template>
	<div id="app">
		<ul>
    		<!-- <li><a href="#/home">home</a></li>
    		<li><a href="#/doc">doc</a></li>
    		<li><a href="#/about">about</a></li> -->

    		<!-- <li><router-link :to="{path:'/home'}" tag="span" activeClass="home">home</router-link></li> -->
    		<li><router-link :to="{name:'home'}" tag="span" activeClass="home">home</router-link></li>
    		<li><router-link to="/doc" activeClass="doc">doc</router-link></li>
    		<li><router-link to="/about" exact>about</router-link></li>
    		<li><router-link to="/user" exact>user</router-link></li>
    	</ul>
		<router-view name="left"></router-view>
		<router-view name="right"></router-view>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{

	}
</script>

<style>
	ul >li{
		display: inline-block;
		width: 100px;
		height: 100px;
		list-style: none;
		text-align: center;
	}
	ul li a{
		text-decoration: none;
		color: #000;
	}
	.active-link{
		color: red;
	}
	.home{
		color: green;
	}
	.doc{
		color: yellow;
	}
</style>