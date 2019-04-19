import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  exactLinkActiveClass: 'exact-active',
  routes: [
    {
      path: '/home',
      name: 'home',
      components: {
        default: Home,
        academic: () => import('./components/community/Academic.vue')
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('./views/Learn.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('./views/Student.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/Community.vue'),
      redirect: '/community/academic',
      children: [
        {
          path: 'academic',
          name: 'academic',
          component: () => import('./components/community/Academic.vue')
        },
        {
          path: 'download',
          name: 'download',
          component: () => import('./components/community/Download.vue')
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import('./components/community/Personal.vue')
        },
      ]
    },
    {
      path: '/question/:id',
      name: 'question',
      component: () => import('./components/Question.vue')
    },
    {
      path: '/error.html',
      name: 'error',
      component: () => import('./components/Error.vue')
    },
    {
      path: '*',
      // redirect: '/home'
      redirect(to) {
        if(to.path == '/') {
          return '/home';
        }else{
          return '/error.html';
        }
      }
    },
  ]
})
