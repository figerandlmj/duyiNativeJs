var dbutil = require("./dbutil");

function queryAllStudent(success) {
    var querySql = "select * from student";
    var connection = dbutil.createConnection();
    connection.connect();//连接
    connection.query(querySql, function(error, result) {
        if(error == null) {
            console.log(result);
            success && success(result);
        }else {
            console.log(error);
        }
    });
    connection.end();//关闭
}

function queryStudentByClassAndAge(classNum, age, success) {
    // var querySql = "select * from student where class = " + classNum + ";";
    // var querySql = "select * from student where class = ?;";//防止注入
    var querySql = "select * from student where class = ? and age = ?;";//防止注入
    var queryParam = [classNum, age];
    var connection = dbutil.createConnection();
    connection.connect();//连接
    // connection.query(querySql, classNum, function(error, result) {
    connection.query(querySql, queryParam, function(error, result) {
        if(error == null) {
            console.log(result);
            success && success(result);
        }else {
            console.log(error);
        }
    });
    connection.end();//关闭
}

function queryStudentByStuNum(stuNum, success) {
    var querySql = "select * from student where stu_num = ?;";
    var connection = dbutil.createConnection();
    connection.connect();//连接
    connection.query(querySql, stuNum, function(error, result) {
        if(error == null) {
            console.log(result);
            success && success(result);
        }else {
            console.log(error);
        }
    });
    connection.end();//关闭
}

// queryStudentByClass(1, 19);

module.exports = {
    "queryAllStudent": queryAllStudent,
    "queryStudentByClassAndAge": queryStudentByClassAndAge,
    "queryStudentByStuNum": queryStudentByStuNum
}



