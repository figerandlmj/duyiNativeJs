import createApp from "../src/main";

let app = createApp();

if(window.__INITIAL_STATE__) {
	app.$store.replaceState(window.__INITIAL_STATE__)
}

window.onload = function() {
	app.$mount('#app')
}

