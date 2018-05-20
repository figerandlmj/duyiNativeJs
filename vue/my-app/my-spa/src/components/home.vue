<template>
	<div>
		<span>我是{{name}}</span>
	</div>
</template>

<script>
	export default{
		beforeRouteEnter(to, from, next){
			// console.log(from, to);
			console.log(this)
			next(vm => {
				vm.name = 'home 123'
			});
		},
		beforeCreate(){
			console.log('beforeCreate')
		},
		data(){
			return {
				name:'home'
			}
		}
	}
</script>