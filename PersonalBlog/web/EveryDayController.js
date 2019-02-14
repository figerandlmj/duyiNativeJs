var everyDayDao = require("../dao/EveryDayDao.js");
var timeUtil = require("../util/TimeUtil.js");
var respUtil = require("../util/RespUtil.js");

var path = new Map();

function editEveryDay(request, response) {
	request.on("data", function(data) {
		// console.log(data.toString());
		everyDayDao.insertEveryDay(data.toString().trim(), timeUtil.getNow(), function(result) {
			response.writeHead(200);
			response.write(respUtil.writeResult("success", "添加成功", null));
			response.end();
		});
	});
}
path.set("/editEveryDay", editEveryDay);

function queryEveryDay(request, response) {
    everyDayDao.queryEveryDay(function(result) {
    	response.writeHead(200);
    	response.write(respUtil.writeResult("success", "查询成功", result));
    	response.end();
    });
}
path.set("/queryEveryDay", queryEveryDay);

module.exports.path = path;