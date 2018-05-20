<template>
	<div class="wrapper">
		<div class="name">我是组件B2</div>
		<span>我拿到的数据为{{msg}}</span>
		<div>mapState方法拿到的数据{{msg1}}</div>
		<div>getters拿到的数据{{msg2}}</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		// props:{
		// 	msg:{
		// 		type:String,
		// 		default:''
		// 	}
		// }

		computed:{
			msg(){
				return this.$store.state.msg;
			},
			...mapState({
				msg1:state => state.msg
			}),
			msg2(){
				return this.$store.getters.msg2;
			}
		}
	}
</script>