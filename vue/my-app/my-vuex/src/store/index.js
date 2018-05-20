import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	msg:'abc123'
}

const mutations = {
	changeMsg(state, str){
		state.msg = str;
	}
}

const getters = {
	msg2(state){
		return state.msg.split('').join('-');
	}
}

const actions = {
	// changeM(ctx, val){
	// 	console.log(ctx);
	// 	setTimeout(function(){
	// 		ctx.commit('changeMsg', val);
	// 	},1000)
	// }
	changeM({commit}, val){
		setTimeout(function(){
			commit('changeMsg', val);
		},1000)
	}
}
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	module:{
		// home:{
		// 	state,
		// 	getters,
		// 	mutations,
		// 	actions
		// },
		// about:{
		// 	state,
		// 	getters,
		// 	mutations,
		// 	actions
		// }
	}
})