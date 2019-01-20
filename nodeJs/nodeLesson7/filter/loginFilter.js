var url = require("url");
var globalConfig = require("../config");

function loginFilter(request, response) {
    var pathname = url.parse(request.url).pathname;
    if(pathname == "/login.html" || pathname == "/error.html" || pathname == "/login" || isStaticRequest(pathname)) {
        console.log("放行");
        return true;
    }
    // cookie判断
    var cookie = request.headers.cookie;
    if(cookie) {
        var cookies = cookie.split(";");
        for(var i = 0; i <cookies.length; i ++) {
            if(cookies[i].split("=")[0].trim() == "id") {
                return true;
            }
        }
    }
    console.log("拦截");
    response.writeHead(302, {"location": "/login.html"});
    response.end();
    return false;
}

//判断请求的资源类型，静态资源/动态资源
function isStaticRequest(pathname) {
    for(var i = 0; i < globalConfig.static_file_type.length; i ++) {
        // console.log(globalConfig.static_file_type[i]);
        var temp = globalConfig.static_file_type[i];
        if(temp == ".html") {
            continue;
        }
        if(pathname.indexOf(temp) == pathname.length - temp.length) {
            return true;
        }
    }
    return false;
}

module.exports = loginFilter;