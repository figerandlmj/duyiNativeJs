var fs = require("fs");

//加载配置文件
var globalConf = {};
var conf = fs.readFileSync("server.conf");
var confs = conf.toString().split("\r\n");
for(var i = 0; i < confs.length; i++) {
    var tempConf = confs[i].split("=");
    if(tempConf.length < 2) {
        continue;
    }else{
        globalConf[tempConf[0]] = tempConf[1];
    }
}
if(globalConf['path_position'] == 'relative') {
    //相对路径
    // path=/web
    // path_position=relative
    globalConf.basePath = __dirname + globalConf.path;
}else {
    // 绝对路径
    globalConf.basePath = globalConf.path;
}
// console.log(globalConf);
module.exports = globalConf;