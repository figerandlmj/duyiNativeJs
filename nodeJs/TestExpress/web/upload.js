var fileListDao = require("../dao/fileListDao");
var path = new Map();

function upload(request, response) {
    console.log(request.file.mimeType);
    console.log(request.file.originalname);
    console.log(request.file.size);
    console.log(request.file.path);
    fileListDao.insertFileList(request.file.originalname, request.file.size, request.file.path, request.cookies.id, function(result) {
        console.log("写库完成");
        response.end(request.file.path);
    })
}
path.set("/upload", upload);

module.exports.path = path;