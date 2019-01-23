var studentDao = require("../dao/studentDao");

function queryStudentByPage(offset, limit, success) {
    studentDao.queryStudentByPage(offset, limit, success);
}
function queryStudentCount(success) {
    studentDao.queryStudentCount(success);
}

module.exports = {
    queryStudentByPage: queryStudentByPage,
    queryStudentCount: queryStudentCount
}