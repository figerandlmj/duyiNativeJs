<template>
	<div class="wrapper">
		<div class="name">我是组件A2</div>
		<!-- <input type="text" v-model="msg"> -->
		<input type="text" :value="msg" @input="changeMsg">
	</div>
</template>

<script>
	import { mapMutations, mapActions } from 'vuex'
	export default {
		// data(){
		// 	return {
		// 		msg:''
		// 	}
		// },
		// watch:{
		// 	msg(){
		// 		this.$emit('tellme', this.msg);
		// 	}
		// }

		data(){
			return {
				msg1:''
			}
		},
		computed:{
			msg(){
				return this.$store.state.msg;
			}
		},
		methods:{
			changeMsg(e){
				let value = e.target.value;
				// this.$store.commit('changeMsg', value);
				// this._changeMsg(value);

				// 异步操作事件
				// this.$store.dispatch('changeM', value);
				this.changeM(value);
			},
			// ...mapMutations(['changeMsg'])
			...mapMutations({
				_changeMsg:'changeMsg'
			}),
			...mapActions({
				changeM:'changeM'
			})
		}
	}
</script>