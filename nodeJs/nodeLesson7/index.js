var http = require("http");
var url = require("url");
var fs = require("fs");
var globalConfig = require("./config");
var loader = require("./loader");
var log = require(".log");

http.createServer(function(request, response) {
    // console.log(request.url);
    //路径
    var pathname = url.parse(request.url).pathname;
    // console.log(pathname);
    //参数
    // var params = url.parse(request.url).query;
    // console.log(params);
    var params = url.parse(request.url, true).query;
    // console.log(params);

    log("url:" + pathname);
    log("params:" + JSON.stringify(params));

    var isStatic = isStaticRequest(pathname);
    // console.log(isStatic);
    if(isStatic) {
        //静态文件请求
        // console.log(globalConfig.page_path + pathname)
        try{
            var data = fs.readFileSync(globalConfig.page_path + pathname);
            response.writeHead(200);
            response.write(data);
            response.end();
        }catch(e) {
            response.writeHead(404);
            response.write("<html><body>404 Not Found</body></html>");
            response.end();
        }
    }else{
        //动态请求
        if(loader.get(pathname) !=null) {
            try{
                loader.get(pathname)(request, response);
            }catch(e) {
                response.writeHead(500);
                response.write("<html><body>500 BadServer</body></html>");
                response.end();
            }
        }else{
            response.writeHead(404);
            response.write("<html><body>404 Not Found</body></html>");
            response.end();
        }
    }
}).listen(globalConfig.port);

log("服务已启动");

//判断请求的资源类型，静态资源/动态资源
function isStaticRequest(pathname) {
    for(var i = 0; i < globalConfig.static_file_type.length; i ++) {
        // console.log(globalConfig.static_file_type[i]);
        var temp = globalConfig.static_file_type[i];
        if(pathname.indexOf(temp) == pathname.length - temp.length) {
            return true;
        }
    }
    return false;
}