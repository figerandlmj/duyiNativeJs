import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../components/home.vue';
import doc from '../components/doc.vue';
import about from '../components/about.vue';

import person from '../components/person.vue';
import hobbit from '../components/hobbit.vue';
import com from '../components/com.vue';

import error from '../components/error.vue';

import user from '../components/user.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes:[{
		path:'*',
		// component:error
		redirect(to){
			// console.log(to);
			if(to.path == '/') {
				return '/home';
			}else{
				return '/error';
			}
		}
	},
	{
		path:'/error',
		component:error
	},
	{
		name:'home',
		path:'/home',
		// component:home
		components:{
			left:home,
			right:home,
			default:error
		},
		meta:{
			login:false
		},
		beforeEnter(to, from, next){
			// console.log(from, to);
			next();
			// if(to.meta.login){
			// 	next();
			// }else{
			// 	next('/user');
			// }
		}
	},
	{
		path:'/doc',
		component:doc,
		meta:{
			login:false
		}
	},
	{
		path:'/user/:id?',
		component:user
	},
	{
		path:'/about',
		component:about,
		children:[{
				path:'person',
				component:person
			},
			{
				path:'hobbit',
				component:hobbit
			},
			{
				path:'com',
				component:com
		}]
	}],
	mode:'hash', //hash abstract history
	linkActiveClass:'active-link'
})

router.beforeEach(function(to, from, next){
	// console.log(to, from);
	if(to.path === '/doc'){
		if(to.meta.login){
			next();
		}else{
			next('/home');
		}
	}else{
		next();
	}
})

export default router;
