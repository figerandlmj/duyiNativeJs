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
            // console.log(error);
            throw new Error(error);
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
            // console.log(error);
            throw new Error(error);
        }
    });
    connection.end();
}

function insertStudent(stuNum, name, age, stuClass, pwd, ctime, success) {
    var sql = "insert into student(stu_num,name,age,class,pwd,ctime) values(?,?,?,?,?,?);";
    var params = [stuNum, name, age, stuClass, pwd, ctime];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(sql, params, function(error, result) {
        // console.log(result);
        if(error == null) {
            success(result);
        }else{
            // console.log(error);
            throw new Error(error);
        }
    });
    connection.end();
}
function queryStudentByStuNum(stuNum, success) {
    var sql = "select * from student where stu_num = ?;";

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(sql, stuNum, function(error, result) {
        // console.log(result);
        if(error == null) {
            success(result);
        }else{
            // console.log(error);
            throw new Error(error);
        }
    });
    connection.end();
}


module.exports = {
    queryStudentByPage: queryStudentByPage,
    queryStudentCount: queryStudentCount,
    insertStudent: insertStudent,
    queryStudentByStuNum: queryStudentByStuNum
};



