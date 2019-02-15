var CommentDao = require("../dao/CommentDao.js");
var timeUtil = require("../util/TimeUtil.js");
var respUtil = require("../util/RespUtil.js");
var captcha = require("svg-captcha");
var url = require("url");

var path = new Map();

function addComment(request, response) {
    var params = url.parse(request.url, true).query;
    CommentDao.insertComment(params.bid, params.parent, params.parentName, params.userName, params.email, params.content, timeUtil.getNow(), timeUtil.getNow(), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "添加成功", null));
        response.end();
    });
}
path.set("/addComment", addComment);

function queryRandomCode(request, response) {
    var img = captcha.create({
        fontSize: 50,
        width: 100,
        height: 34
    });
    // console.log(img);
    // response.writeHead(200, {"Content-Type": "image/svg+xml"});
    // response.write(img.data);
    response.writeHead(200);
    response.write(respUtil.writeResult("success", "获取成功", img));
    response.end();
}
path.set("/queryRandomCode", queryRandomCode);

function queryCommentsByBlogId(request, response) {
    var params = url.parse(request.url, true).query;
    CommentDao.queryCommentsByBlogId(params.bid, function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}
path.set("/queryCommentsByBlogId", queryCommentsByBlogId);

function queryNewComment(request, response) {
    var params = url.parse(request.url, true).query;
    CommentDao.queryNewComment(parseInt(params.size), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}
path.set("/queryNewComment", queryNewComment);

module.exports.path = path;