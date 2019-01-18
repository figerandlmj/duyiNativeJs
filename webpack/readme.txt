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

	// login.js
	var module = require('module.js');
	console.log(module.add(1, 2));

	// module.js
	module.exports = {
		add: function(a, b) {
			return a + b;
		}
	}


2. AMD  应用于require.js  异步加载模块，允许指定回调函数
	依赖前置，提前加载

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

3. CMD  应用seaJs  
	就近加载 按需加载

	difine定义一个模块
	require加载模块

	// index.html
	seajs.use('main.js');

	// main.js
	define(function(require, exports, module) {
		var module1 = require('module1');
		console.log(module1);
	})

	// module1.js
	define(function(require, exports, module) {
		var arr = [1, 2, 3];
		exports.module1 = arr;
	})

4. es6   自带模块化  浏览器不支持 babel进行转化

	export导出模块
	import引入模块

	import tool from './js/tool.js';

	// tool.js
	export class show{
		constructor(){
			this.age = 18;
		}
		showAge() {
			return this.age;
		}
	}


前端工程化

	requireJs 模块加载器
	grunt     构建工具

	自动化构建工具  编译、压缩、合并
		grunt yeoman  gulp  webpack

	webpack  自动化构建  模块化功能  弥补了CommonJs缺陷，同时兼容AMD和CMD


	开发模式  监听文件变化，自动打包合并
	生产模式  文件压缩 文件md5名修改 替换html

	node.js环境安装  包含了npm命令  node -v （8.9.4）

	全局安装  npm install webpack@3.5.5 -g   webpack -v

	webpackdemo
		npm init  项目初始化
		webpack.config.js  配置文件
			module.exports = {
				entry: './src/js/entry.js',
				output: {
					// filename: 'index-[chunkhash:8].js',
					filename: 'login.js',
					path: __dirname + '/out', //绝对路径
					publicPath: './out'
				},
				module: {
					rules: [
						{
							test: /.js$/,
							use: ['babel-loader']
						},
						{
							test: /.css$/,
							use: ['style-loader', 'css-loader']
						},
						{
							test: /.jpg|png|gif|svg$/,
							// use: ['url-loader?limit=8192&name=/img/[name].[ext]']
							use: ['url-loader?limit=3072&name=/img/[name].[ext]']
						}
					]
				}
			}

			[hash:8]      任一模块变化时的hash前8位
			[chunkhash:8] 当前模块变化时的hash

			publicPath: './out'  公共资源打包路径

		webpack 打包命令
		webpack -w  文件改变时自动打包

		--save     dependencies    运行时依赖    jquery react ...
		--save-dev devDependencies 开发时的依赖  babel 

		loader 
			js
			npm install babel-core babel-loader --save-dev
			css
			npm install css-loader style-loader --save-dev
			img
			npm install url-loader file-loader --save-dev
			less
			npm install less-loader less --save-dev

		npm install webpack@3.5.5 --save-dev  局部安装webpack
		
		插件
			压缩代码
			npm install uglifyjs-webpack-plugin --save-dev
			提取公共模块
			webpack.optimize.CommonsChunkPlugin
			独立出css样式
			npm install extract-text-webpack-plugin --save-dev

		安装node.js express服务器
			npm install webpack-dev-server@2.9.7 -g 
			http://localhost:8080/ 
		开启服务器页面自动打包刷新
			webpack-dev-server --progress --colors --watch 
		方便错误查询 
			webpack-dev-server --devtool eval-source-map

		jquery挂载全局
			npm install jquery --save  安装jquery插件
			var providePlugin = new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery'
			});



less  动态样式语言  css预处理语言

	变量、继承、运算、函数

















