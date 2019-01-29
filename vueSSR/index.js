var http = require("http");
var Vue = require("vue");
var serverRender = require("vue-server-renderer");
var fs = require("fs");

//创建vue实例
var app = new Vue({
   template: `<div>
         <my-component></my-component>
        </div>` ,
   components: {
       myComponent: {
           template: `<div>welcome vue ssr !!!</div>`
       }
   }
});

//创建renter实例
var renderer = serverRender.createRenderer({
    template: fs.readFileSync("./index.html", "utf-8")
});

//将vue实例转换成html字符串
// renderer.renderToString(app, function(err, html) {
//     if(err == null) {
//         console.log(html);
//     }else{
//         console.log(err);
//     }
// });

http.createServer((req, res) => {
    // var html = "welcome vue ssr";
    renderer.renderToString(app, {
        init: `<script>console.log("hello")</script>`
    }, function(err, html) {
        if(err == null) {
            console.log(html);
            res.end(html);
        }else{
            console.log(err);
        }
    });
}).listen(12306);