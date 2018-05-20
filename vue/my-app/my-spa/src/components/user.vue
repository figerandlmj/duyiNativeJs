<template>
	<div>
		<span>我是{{name}}</span>
		<!-- <router-link :key="item.id" v-for="item in userList" :to="{path:'/user/' + item.id}">{{item.name}}</router-link> -->
		<router-link :key="item.id" v-for="item in userList" :to="{path:'/user', query:{name:item.name}}">{{item.name}}</router-link>
		<div class="content">
			<div>姓名：{{userInfo.name}}</div>
			<div>姓别：{{userInfo.sex}}</div>
			<div>爱好：{{userInfo.hobbit}}</div>
		</div>
	</div>
</template>

<script>
	const userList = [{
		id:666,
		name:'cg',
		hobbit:'basebal',
		sex:'male'
	},
	{
		id:888,
		name:'dg',
		hobbit:'pingpeng',
		sex:'male'
	},
	{
		id:999,
		name:'stg',
		hobbit:'read',
		sex:'mail'
	}]
	export default{
		created(){
			console.log(this.$route);
			var temp = this.userList.filter(item => this.$route.params.id == item.id);
			if(temp.length > 0){
				this.userInfo = temp[0];
			}
		},
		watch: {
			$route(){
				console.log(this.$route);
				var temp = this.userList.filter(item => this.$route.params.id == item.id);
				if(temp.length > 0){
					this.userInfo = temp[0];
				}
			}
		},
		data(){
			return {
				name:'user',
				userList,
				userInfo:{
					name:'',
					hobbit:'',
					sex:''
				}
			}
		}
	}
</script>