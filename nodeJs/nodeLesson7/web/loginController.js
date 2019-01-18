var path = new Map();

function getData(request, response) {
    // console.log(request);
    // response.writeHead(200);
    // response.write("hello");
    // response.end();

    // 如果程序出错
    throw new Error("一个程序错误");
}
path.set("/getData", getData);

function getData2(request, response) {

}
path.set("/getData2", getData2);

module.exports.path = path;