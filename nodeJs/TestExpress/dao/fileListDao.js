var DBUtil = require("./DBUtil");

function insertFileList(fileName, fileSize, filePath, stuNum, success) {
    var sql = "insert into file_list(file_name, file_size, file_path, stu_num) values(?,?,?,?);";
    var params = [fileName, fileSize, filePath, stuNum];

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


module.exports = {
    insertFileList: insertFileList
};



