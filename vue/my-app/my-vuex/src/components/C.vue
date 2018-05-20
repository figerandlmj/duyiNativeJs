<template>
	<div class="wrapper">
		<div class="left">
			<a-one @tellC="tellC"></a-one>
		</div>
		<div class="right">
			<b-one :msg="msg"></b-one>
		</div>
	</div>
</template>

<script>
	import aOne from './aOne.vue'
	import bOne from './bOne.vue'
	export default {
		data(){
			return{
				msg:''
			}
		},
		components:{
			aOne,
			bOne
		},
		methods:{
			tellC(val){
				// console.log(val)
				this.msg = val;
			}
		}
	}
</script>

<style lang="less" scoped>
	.wrapper{
		display:flex;
		.left,
		.right{
			width: 300px;
			border: 1px solid lime;
			margin-right: 30px;
		}
	}
</style>