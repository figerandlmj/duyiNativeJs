var net = require('net');

var socket = net.connect(12306, "127.0.0.1");//建立连接

socket.setTimeout(2000);

socket.on("connect", function() {
    console.log("客户端已连接服务器");
    // console.log(socket.remoteAddress);
    // console.log(socket.remotePort);
    // console.log(socket.localAddress);
    // console.log(socket.localPort);

})
socket.on("timeout", function() {
    console.log("超时啦");
    socket.end();
})

// socket.write("hello server");
//
// socket.on("data", function(data) {
//     console.log(data.toString());
//     socket.end();
// })
// socket.on("close", function() {
//     console.log("连接已关闭");
// })

socket.write("hello server");