var fs = require("fs");
var globalConfig = require("./config.js");

// var controllerSet = [];
var pathMap = new Map();

//读取路径下所有东西
var files = fs.readdirSync(globalConfig.web_path);
// console.log(files);
for(var i = 0; i < files.length; i ++) {
    var temp = require("./" + globalConfig.web_path + "/" + files[i]);
    if(temp.path) {
        for(var [k, v] of temp.path){
            // console.log(k);
            // console.log(v);
            if(pathMap.get(k) == null) {
                pathMap.set(k, v);
            }else {
                //不能有相同的请求路径
                throw new Error("url path异常，url：" + k);
            }
        }
        // controllerSet.push(temp);
    }
}
// console.log(pathMap);
module.exports = pathMap;