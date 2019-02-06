<template>
	<div class="wrapper">
		<div class="content-1">
			{{value}}
		</div>
		<div class="msg">{{msg}}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: 'home'
			}
		},
		// created() {
		// 	this.$store.dispatch('getMsg')
		// },
		serverRequest(store) {
			return store.dispatch('getMsg')
		},
		computed: {
			msg() {
				return this.$store.state.msg
			}
		}
	}
</script>