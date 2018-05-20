<template>
	<div class="wrapper">
		<input type="text" :value="text" @input="retVal">
		<div class="name">
			<span>welcome to my home</span>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			text:String
		},
		methods:{
			retVal(e){
				this.$emit('get-val', e.target.value);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.name{
		span{
			color:red;
		}
	}
</style>