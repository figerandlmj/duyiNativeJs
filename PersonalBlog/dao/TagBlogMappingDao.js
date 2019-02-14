var dbutil = require("./DBUtil.js");

function insertTagBlogMapping(tagId, blogId, ctime, utime, success) {
	var insertSql = "insert into tag_blog_mapping (`tag_id`, `blog_id`, `ctime`, `utime`) values (?, ?, ?, ?);";
	var params = [tagId, blogId, ctime, utime];

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

// function queryTag(tag, success) {
// 	var querySql = "select * from tags where tag = ?;";
// 	var params = [tag];

// 	var connection = dbutil.createConnection();
// 	connection.connect();

// 	connection.query(querySql, params, function(error, result) {
// 		if(error == null) {
// 			success(result);
// 		}else{
// 			console.log(error);
// 		}
// 	});
// 	connection.end();
// }

module.exports = {
	insertTagBlogMapping: insertTagBlogMapping,
	// queryTag: queryTag
}