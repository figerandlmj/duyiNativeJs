var DBUtil = require("./DBUtil");

function queryStudentByPage(offset, limit, success) {
    var sql = "select * from student limit ?, ?;";
    var queryParams = [offset, limit];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(sql, queryParams, function(error, result) {
        // console.log(result);
        if(error == null) {
            success(result);
        }else{
            console.log(error);
        }
    });
    connection.end();
}

function queryStudentCount(success) {
    var sql = "select count(1) as count from student;";

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(sql, function(error, result) {
        // console.log(result);
        if(error == null) {
            success(result);
        }else{
            console.log(error);
        }
    });
    connection.end();
}

module.exports = {
    queryStudentByPage: queryStudentByPage,
    queryStudentCount: queryStudentCount
};



