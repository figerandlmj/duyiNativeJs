// console.log(require);
// console.log(module);
// console.log(exports);
console.log(__dirname);
console.log(__filename);
var a = 1;
var b = 2;
module.exports.a = a;
module.exports.b = b;

//nodejs模块是运行在一个函数中sys.js

//可以验证上面的说法
console.log(arguments);
console.log(arguments[0] == exports);//true
console.log(arguments[1] == require);//true
console.log(arguments[2] == module);//true
console.log(arguments[3] == __filename);//true
console.log(arguments[4] == __dirname);//true