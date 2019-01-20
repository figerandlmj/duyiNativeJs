var studentService = require("../service/studentService");
var url = require("url");

var path = new Map();

function getData(request, response) {
    // console.log(request);
    // response.writeHead(200);
    // response.write("hello");
    // response.end();

    // 如果程序出错
    // throw new Error("一个程序错误");

    studentService.queryAllStudent(function(result) {
        var resArr = [];
        for(var i = 0; i < result.length; i ++ ){
            resArr.push(result[i].name);
        }
        response.writeHead(200);
        response.write(resArr.toString());
        response.end();
    });
}
path.set("/getData", getData);


function login(request, response) {
    // var params = url.parse(request.url, true).query;//get请求时获取参数

    request.on("data", function(data) {//post请求时获取参数
        var dataStr = data.toString().split("&");
        var params = {};
        for(var i = 0; i < dataStr.length; i ++) {
            var temp = dataStr[i].split("=");
            params[temp[0]] = temp[1];
        }
        studentService.queryStudentByStuNum(params.stuNum, function(result) {
            var res = "";
            if(result == null || result.length == 0) {
                res = "Fail";
            }else {
                if(result[0].pwd == params.password) {
                    res = "OK";
                }else {
                    res = "Fail";
                }
            }
            // response.writeHead(200);
            // response.write(res);
            // response.end();

            // 第二种方式，直接跳转页面
            console.log(res);
            if(res == "OK"){
                response.writeHead(302, {"location": "/main.html", "Set-Cookie": "id=" + result[0].id});
            }else{
                response.writeHead(302, {"location": "/error.html"});
            }
            response.end();
        })
    })
}
path.set("/login", login);

module.exports.path = path;