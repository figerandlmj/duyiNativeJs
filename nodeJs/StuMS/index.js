var http = require("http");
var url = require("url");
var fs = require("fs");
var studentService = require("./service/studentService");

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    // console.log(pathname);
    var isStatic = isStaticRequest(pathname);
    if(isStatic) {
        try{
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
        var params = url.parse(request.url, true).query;
        // console.log(params);
        if(pathname == "/getStudentPage") {
            studentService.queryStudentByPage(parseInt(params.offset), parseInt(params.limit), function(result) {
                studentService.queryStudentCount(function(countResult) {
                    response.writeHead(200, {
                        "Content-Type": "application/json",
                        "charset": "utf8"
                    });
                    response.write(JSON.stringify({
                        total: countResult[0].count,
                        rows: result
                    }));
                    response.end();
                });
            })
        }
    }
}).listen(12306);

function isStaticRequest(pathname) {
    var staticFile = [".html", ".css", ".js", ".png", ".jpg", ".jpeg", ".gif", ".json"];
    for(var i = 0; i < staticFile.length; i ++) {
        var temp = staticFile[i];
        if(pathname.indexOf(temp) == (pathname.length - temp.length)) {
            return true;
        }
    }
    return false;
}