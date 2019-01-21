var http = require("http");
var url = require("url");
var fs = require("fs");
var req = require("request");

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    // console.log(pathname);

    var isStatic = isStaticFile(pathname);
    if(isStatic) {
        console.log("静态文件");
        try {
            var data = fs.readFileSync("./page" + pathname);
            // console.log(data.toString());
            response.writeHead(200);
            response.write(data);
            response.end();
        }catch(e) {
            response.writeHead(404);
            response.write("<html><body>404 Not Found</body></html>");
            response.end();
        }
    }else {
        console.log("动态文件");
        if(pathname == "/api/chat") {
            var params = url.parse(request.url, true).query;
            var data = {
                "reqType":0,
                "perception": {
                    "inputText": {
                        "text": params.text
                    }
                },
                "userInfo": {
                    "apiKey": "b968d586e09a4bca9c846939872f45ef",
                    "userId": "123456"
                }
            };
            req({
                url: "http://openapi.tuling123.com/openapi/api/v2",
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                "body": JSON.stringify(data)
            }, function(error, resp, body) {
                if(!error && resp.statusCode == 200) {
                    var head = {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET",
                        "Access-Control-Allow-Headers": "x-request-with, content-type"
                    }
                    response.writeHead(200, head);
                    // console.log(body);
                    var obj = JSON.parse(body);
                    if(obj && obj.results && obj.results.length > 0 && obj.results[0].values) {
                        response.write(JSON.stringify(obj.results[0].values));
                        response.end();
                    }else {
                        response.write("{\"text\":\"不知道你说的啥\"}");
                        response.end();
                    }
                }else {
                    response.writeHead(400);
                    response.write("数据异常");
                    response.end();
                }
            })
        }else {
            response.writeHead(404);
            response.write("<html><body>404 Not Found</body></html>");
            response.end();
        }
    }
}).listen(12306);

function isStaticFile(pathname) {
    var staticFile = [".html", ".css", ".js", ".jpg", ".jpeg", ".png", ".gif", ".json", ".ico"];
    for(var i = 0; i < staticFile.length; i ++) {
        if(pathname.indexOf(staticFile[i]) == (pathname.length - staticFile[i].length)) {
            return true;
        }
    }
    return false;
}