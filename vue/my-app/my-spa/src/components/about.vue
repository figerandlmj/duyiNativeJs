<template>
	<div>
		<span>我是{{name}}</span>
		<ul>
    		<li><router-link :to="{path:'/about/person'}" tag="span">person</router-link></li>
    		<li><router-link to="/about/hobbit">hobbit</router-link></li>
    		<li><router-link to="/about/com">com</router-link></li>
    	</ul>
    	<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				name:'about'
			}
		}
	}
</script>