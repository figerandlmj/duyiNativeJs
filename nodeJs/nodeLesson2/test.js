console.log('wo shi test');
var a = 123;
var b = 'abc';
//开闭原则 对修改关闭 对扩展开放
// module.exports.a = a;
// module.exports.b = b;

//简写
// exports.a = a;
// exports.b = b;

//module.exports 和 exports区别
// module.exports.a = a;
// exports.b = b;

//当exports和module.exports指向不同对象时导出的是module.exports
// module.exports = a;
// exports = b;

var x ={};
var y ={};
console.log(x == y);//false

console.log(module.exports);
console.log(exports);
//exports和module.exports指向同一对象
console.log(module.exports == exports);//true