var fs = require("fs");
var globalConfig = require("./config.js");

var filterSet = [];

//读取路径下所有东西
var files = fs.readdirSync(globalConfig.filter_path);
// console.log(files);
for(var i = 0; i < files.length; i ++) {
    var temp = require("./" + globalConfig.filter_path + "/" + files[i]);
    filterSet.push(temp);
}

module.exports = filterSet;