const Vue = require("vue");
const serverRenderer = require("vue-server-renderer");
const express = require("express");
const fs = require("fs");
const createApp = require("./dist/bundle.server")['default'];

let server = express();
let app = new Vue({
    template: `<div>
        <input type="text" v-model="msg">
        <br>
        <span>{{msg}}</span>
    </div>`,
    data: {
        msg: "hello world"
    }
});
let renderer = serverRenderer.createRenderer({
    template: fs.readFileSync("./index.html", "utf-8")
});

server.get('*', (req, res) => {
    createApp().then(app => {
        renderer.renderToString(app, function(err, html) {
            res.end(html);
        })
    });
})

server.listen(12306, function() {
   console.log("server is running at 12306");
});
