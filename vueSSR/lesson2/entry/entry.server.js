import createApp from "../src/main";

export default (config) => {
    return new Promise((resolve, reject) => {
        let app = createApp();

        app.$router.push(config.url)

        let components = app.$router.getMatchedComponents()
        if(components.length < 0) {
        	reject({
        		code: 500
        	})
        }
        Promise.all(components.map(component => {
        	if(component.serverRequest) {
        		return component.serverRequest(app.$store)
        	}
        })).then(() => {
        	config.state = app.$store.state
        	resolve(app)
        })
        // resolve(app);
    })
}