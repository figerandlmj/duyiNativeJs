var BlogDao = require("../dao/BlogDao.js");
var TagsDao = require("../dao/TagsDao.js");
var TagBlogMappingDao = require("../dao/TagBlogMappingDao.js");
var timeUtil = require("../util/TimeUtil.js");
var respUtil = require("../util/RespUtil.js");
var url = require("url");

var path = new Map();

function editBlog(request, response) {
	var params = url.parse(request.url, true).query;
	var tags = params.tags.replace(/ /g, "").replace("，", ",");
	request.on("data", function(data) {
		// console.log(data.toString());
		BlogDao.insertBlog(params.title, data.toString(), tags, 0, timeUtil.getNow(), timeUtil.getNow(), function(result) {
			response.writeHead(200);
			response.write(respUtil.writeResult("success", "添加成功", null));
			response.end();
			var blogId = result.insertId;
			var tagList = tags.split(",");
			for(var i = 0; i < tagList.length; i ++) {
				if(tagList[i] == "") {
					continue;
				}
				queryTag(tagList[i], blogId);
			}
		});
	});
}
path.set("/editBlog", editBlog);

function queryTag(tag, blogId) {
	TagsDao.queryTag(tag, function(result) {
		if(result == null || result.length == 0) {
			insertTag(tag, blogId);
		}else{
			insertTagBlogMapping(result[0].id, blogId);
		}
	})
}

function insertTag(tag, blogId) {
	TagsDao.insertTag(tag, timeUtil.getNow(), timeUtil.getNow(), function(result) {
		insertTagBlogMapping(result.insertId, blogId);
	})
}

function insertTagBlogMapping(tagId, blogId) {
	TagBlogMappingDao.insertTagBlogMapping(tagId, blogId, timeUtil.getNow(), timeUtil.getNow(), function(result) {})
}


// function queryBlog(request, response) {
// 	request.on("data", function(data) {
// 		// console.log(data.toString());
// 		BlogDao.queryBlog(function(result) {
// 			response.writeHead(200);
// 			response.write(respUtil.writeResult("success", "查询成功", result));
// 			response.end();
// 		});
// 	});
// }
path.set("/queryBlog", queryBlog);

module.exports.path = path;