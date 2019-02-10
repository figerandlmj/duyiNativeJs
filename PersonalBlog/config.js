var fs = require("fs");

var globalConfig = {};

var conf = fs.readFileSync("./server.conf");

var configArr = conf.toString().split("\r\n");

// console.log(configArr);

for(var i = 0; i < configArr.length; i ++) {
	var temp = configArr[i].split("=");
	globalConfig[temp[0]] = temp[1].trim();
}

// console.log(globalConfig);

module.exports = globalConfig;