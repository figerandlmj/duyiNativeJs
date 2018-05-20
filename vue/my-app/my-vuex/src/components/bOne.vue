<template>
	<div class="wrapper">
		<div>我是组件B1</div>
		<b-two :msg="msg"></b-two>
	</div>
</template>

<script>
	import bTwo from './bTwo.vue'

	export default {
		props:{
			msg:{
				type:String,
				default:''
			}
		},
		components:{
			bTwo
		}
	}
</script>