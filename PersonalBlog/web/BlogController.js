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


function queryBlogByPage(request, response) {
	var params = url.parse(request.url, true).query;
    BlogDao.queryBlogByPage(parseInt(params.page), parseInt(params.pageSize), function(result) {
    	for(var i = 0; i < result.length; i ++) {
        	result[i].content = result[i].content.replace(/<img[\w\W]*">/, "");
        	result[i].content = result[i].content.replace(/<[^<>]+>/g, "");
        	result[i].content = result[i].content.substring(0, 300);
		}
    	response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}
path.set("/queryBlogByPage", queryBlogByPage);

function queryBlogCount(request, response) {
    BlogDao.queryBlogCount(function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}
path.set("/queryBlogCount", queryBlogCount);

function queryBlogById(request, response) {
    var params = url.parse(request.url, true).query;
    BlogDao.queryBlogById(parseInt(params.bid), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
        BlogDao.addViews(parseInt(params.bid), function(result){});
    });
}
path.set("/queryBlogById", queryBlogById);

function queryAllBlog(request, response) {
    BlogDao.queryAllBlog(function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}
path.set("/queryAllBlog", queryAllBlog);

function queryHotBlog(request, response) {
    var params = url.parse(request.url, true).query;
    BlogDao.queryHotBlog(parseInt(params.size), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}
path.set("/queryHotBlog", queryHotBlog);

function queryBlogByTag(request, response) {
    var params = url.parse(request.url, true).query;
    TagBlogMappingDao.queryBlogByTag(parseInt(params.tagId), parseInt(params.page), parseInt(params.pageSize), function(result) {
        var blogList = [];
        for(var i = 0; i < result.length; i ++) {
            BlogDao.queryBlogById(result[i].blog_id, function(result2) {
                result2[0].content = result2[0].content.replace(/<img[\w\W]*">/, "");
                result2[0].content = result2[0].content.replace(/<[^<>]+>/g, "");
                result2[0].content = result2[0].content.substring(0, 300);
            	blogList.push(result2[0]);
                if(blogList.length == result.length) {
                    response.writeHead(200);
                    response.write(respUtil.writeResult("success", "查询成功", blogList));
                    response.end();
                }
            });
		}
    });
}
path.set("/queryBlogByTag", queryBlogByTag);

function queryBlogCountByTag(request, response) {
    var params = url.parse(request.url, true).query;
    TagBlogMappingDao.queryBlogCountByTag(parseInt(params.tagId), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}
path.set("/queryBlogCountByTag", queryBlogCountByTag);

module.exports.path = path;