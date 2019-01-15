var net = require('net');

var server = net.createServer();//创建服务
server.listen(12306, "127.0.0.1");//监听本机上12306端口

server.on("listening", function() {
    console.log("服务已启动")
    // console.log(server.address());
})

// server.on("connection", function(socket) {
//     console.log("有新的连接");
//     socket.on("data", function(data) {
//         console.log(data.toString());
//         socket.write("hello client");
//     })
//     socket.on("close", function() {
//         console.log("客户端已关闭");
//         server.close();
//     })
// })
//
// server.on("close", function() {
//     console.log("服务器已关闭");
// })