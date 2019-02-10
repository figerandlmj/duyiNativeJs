var express = require("express");
var globalConfig = require("./config.js");
var loader = require("./loader.js");

var app = new express();

app.use(express.static("./page/"));

app.post("/editEveryDay", loader.get("/editEveryDay"));
app.post("/queryEveryDay", loader.get("/queryEveryDay"));

app.post("/editBlog", loader.get("/editBlog"));


app.listen(globalConfig.port, function() {
	console.log("服务器已启动");
})