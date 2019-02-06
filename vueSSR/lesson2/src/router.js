import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from './components/home.vue'
import about from './components/about.vue'
import test from './components/test.vue'

export default function createRouter() {
	return new VueRouter({
		model:'history',
		routes: [
			{
				path: '/',
				components: home
			},
			{
				path: '/about',
				components: about
			},
			{
				path: '/test',
				components: test
			}
		]
	})
}