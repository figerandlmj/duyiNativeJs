import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default function createStore() {
	return new Vuex.Store({
		state: {
			msg: 'How are you?'
		},
		mutations: {
			setMsg(state, msg) {
				state.msg = msg
			}
		},
		actions: {
			getMsg({commit}) {
				// axios.get('http://localhost:12306/api/getMsg').then(res => commit('setMsg', res.data))
				return axios.get('http://localhost:12306/api/getMsg').then(res => commit('setMsg', res.data))
			}
		}
	})
}