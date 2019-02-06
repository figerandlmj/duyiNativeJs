const Vue = require("vue");
const serverRenderer = require("vue-server-renderer");
const express = require("express");
const fs = require("fs");
const createApp = require("./dist/bundle.server")['default'];

let server = express();

server.use('/', express.static(__dirname + 'dist'))

// let app = new Vue({
//     template: `<div>
//         <input type="text" v-model="msg">
//         <br>
//         <span>{{msg}}</span>
//     </div>`,
//     data: {
//         msg: "hello world"
//     }
// });

let renderer = serverRenderer.createRenderer({
    template: fs.readFileSync("./index.html", "utf-8")
});

server.get('api/getMsg', (req, res)=> {
    res.end("I'm fine!");
})

server.get('*', (req, res) => {
    let config = {
        url: req.url
    }
    createApp(config).then(app => {
        let state = JSON.stringify(config.state)
        renderer.renderToString(app, {
            init: `<script src="/bundle.client.js"></script>`,
            change: `<script>window.__INITIAL_STATE__=${state}</script>`
        }, function(err, html) {
            res.end(html);
        })
    });
})

server.listen(12306, function() {
   console.log("server is running at 12306");
});
