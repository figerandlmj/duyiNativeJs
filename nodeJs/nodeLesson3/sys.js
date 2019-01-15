function zyz(exports, require, module, __filename, __dirname) {
    //中间的内容是我们写的nodejs代码
    console.log(require);
    console.log(module);
    console.log(exports);
    console.log(__dirname);
    console.log(__filename);
    var a = 1;
    var b = 2;
    module.exports.a = a;
    module.exports.b = b;
    exports = a;
    return module.exports;
}