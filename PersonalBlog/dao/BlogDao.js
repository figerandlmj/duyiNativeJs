var dbutil = require("./DBUtil.js");

function insertBlog(title, content, tags, views, ctime, utime, success) {
	var insertSql = "insert into blog (`title`, `content`, `tags`, `views`, `ctime`, `utime`) values (?, ?, ?, ?, ?, ?);";
	var params = [title, content, tags, views, ctime, utime];

	var connection = dbutil.createConnection();
	connection.connect();

	connection.query(insertSql, params, function(error, result) {
		if(error == null) {
			success(result);
		}else{
			console.log(error);
		}
	});
	connection.end();
}

function queryBlog(success) {
	var querySql = "select * from every_day order by desc limit 1;";
	var params = [];

	var connection = dbutil.createConnection();
	connection.connect();

	connection.query(querySql, params, function(error, result) {
		if(error == null) {
			success(result);
		}else{
			console.log(error);
		}
	});
	connection.end();
}

module.exports = {
	insertBlog: insertBlog,
	queryBlog: queryBlog
}