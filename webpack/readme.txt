前端模块化：

功能拆分
更新和维护
全局变量污染

具有相同属性和方法的事物的集合

独立、完整、依赖关系

模块化的实现：

1.函数


2.对象写法


3.匿名函数、返回对象


4.依赖传入参数

模块化规范：
1. 	CommonJs    应用于nodeJs   webpack对其原生支持  
    浏览器不兼容CommonJs,需要工具转换    同步加载

每个文件是一个模块

exports/module.exports 导出需要暴露的接口
require同步加载所依赖的模块

// index.js
var module = require('module.js');
console.log(module.add(1, 2));

// module.js
module.exports = {
	add: function(a, b) {
		return a + b;
	}
}


2. AMD   应用于require.js  异步加载模块，允许指定回调函数

difine定义一个模块
require加载模块

// main.js
require(['jquery', 'math'], function() {
	console.log('hello');
})

//math.js
define(function() {
	add: function(a, b) {
		return a + b;
	}
})




