import Vue from 'vue'
import App from './App.vue'
import createRouter from './router.js'
import createStore from './store.js'

export default function createApp() {
    return new Vue({
    	router:createRouter(),
    	store: createStore(),
        render: h => h(App)
    })
}