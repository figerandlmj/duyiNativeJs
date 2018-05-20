<template>
	<div class="wrapper">
		<div>我是组件A1</div>
		<a-two @tellme="tellme"></a-two>
	</div>
</template>

<script>
	import aTwo from './aTwo.vue'

	export default {
		components:{
			aTwo
		},
		methods:{
			tellme(val){
				// console.log(val);
				this.$emit('tellC', val);
			}
		}
	}
</script>