var net = require("net");
var fs = require("fs");

var globalConf = require("./conf");

var server = net.createServer();
// server.listen(12306, "127.0.0.1");
server.listen(globalConf.port, "127.0.0.1");

server.on("listening", function() {
    console.log("服务已启动");
})

server.on("connection", function(socket) {
    socket.on("data", function(data) {
        // console.log(data.toString());
        var url = data.toString().split("\r\n")[0].split(" ")[1];
        // console.log(url);
        try{
            // var data = fs.readFileSync("index.html");//相对路径
            // var dataFile = fs.readFileSync(__dirname + globalConf.path + url);//绝对路径
            var dataFile = fs.readFileSync(globalConf['basePath'] + url);
            // console.log(dataFile.toString());
            // socket.write("HTTP/1.1 200OK\r\n\r\n" + dataFile.toString());
            socket.write("HTTP/1.1 200OK\r\n\r\n");
            socket.write(dataFile);
        }catch(e) {
            // console.log("找不到文件");
            socket.write("HTTP/1.1 404NotFound\r\n\r\n<html><body><h1>404 Not Found</h1></body></html>");
        }
        socket.end();
    })
})