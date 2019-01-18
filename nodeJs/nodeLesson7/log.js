var fs = require("fs");
var globalConfig = require("./config");

var fileName = globalConfig.log_path + globalConfig.log_name;

function log(data) {
    //异步
    // r 读 w 写 a 追加
    // fs.writeFile(fileName, data + "\r\n", {flag: 'a'}, function() {
    //     // console.log("+++++++++");
    // });

    //相当于
    fs.appendFile(fileName, data + "\r\n",function() {
        // console.log("+++++++++");
    });

    //同步
    // fs.writeFileSync(fileName,"logloglogloglog");

    // console.log("=============");

}
module.exports = log;
