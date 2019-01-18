var fs = require("fs");
//异步读
// fs.readFile("./server.conf", function(err, data) {
//     //成功data有值，失败err有值
// });
//同步读
var conf = fs.readFileSync("./server.conf");
// console.log(conf.toString());
var confArr = conf.toString().split("\r\n");
// console.log(confArr);
var globalConfig = {};

for(var i = 0; i < confArr.length; i ++) {
    var temp = confArr[i].split("=");
    globalConfig[temp[0]] = temp[1];
}
// console.log(globalConfig);
if(globalConfig.static_file_type) {
    globalConfig.static_file_type = globalConfig.static_file_type.split("|");
}else{
    throw new Error("配置文件异常，缺少static_file_type");
}

module.exports = globalConfig;
