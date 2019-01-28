var express = require("express");
var globalConfig = require("./config");
var loader = require("./loader");
var cookie = require("cookie-parser");
var multer = require("multer");

var app = new express();

var uploadSinger = multer({
    dest: "./file/"
});

app.use(express.static(globalConfig.page_path));

app.use(cookie());

app.get("/api/*", function(request, response, next) {
   // console.log(request.cookies);
   if(request.cookies.id) {
       next();
   }else{
       //重定向
       response.redirect("/login.html");
   }
});

app.get("/api/getAllStudent",loader.get("/api/getAllStudent"));
app.get("/api/addStudent",loader.get("/api/addStudent"));
app.get("/login", loader.get("/login"));

//uploadSinger.single("file") 定义哪个字段是上传文件
app.post("/upload", uploadSinger.single("file"), loader.get("/upload"));
app.get("/getPic", loader.get("/getPic"));

app.listen(globalConfig.port);