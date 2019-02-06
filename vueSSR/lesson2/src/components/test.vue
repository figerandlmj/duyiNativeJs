<template>
	<div class="wrapper">
		<input type="text" name="" v-model="msg">
		<br>
		<span>{{msg}}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'test'
			}
		}
	}
</script>