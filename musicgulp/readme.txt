模块化 降低耦合性

node.js  commonJS 
	导入 require 同步 阻塞  前端 服务器 http
	导出 module.exports

require.js  AMD 依赖前置 提前加载 
sea.js      CMD 就近加载 按需加载

es6  
	导入 import
	导出 export

UMD  统一规范接口

包  包管理工具 npm  yarn

淘宝镜像
	npm install -g cnpm --registry=https://registry.npm.taobao.org

gulp  task running  任务 gulpfile.js  流   grunt没有模块化

	图片处理
	
	npm install gulp@3.9.1 -g   全局安装
	npm install gulp@3.9.1 --save-dev  局部安装

	gulpfile.js  配置文件

	gulp html  运行html任务命令
	gulp       运行default任务

	plugins:
		html压缩
			cnpm install gulp-htmlclean --save-dev
		图片压缩	
			cnpm install gulp-imagemin --save-dev
		js压缩
			cnpm install gulp-uglify --save-dev
		删除调试代码
		cnpm install gulp-strip-debug --save-dev
		合并js
		cnpm install gulp-concat --save-dev
		解决js依赖
		cnpm install gulp-deporder --save-dev
		less
			cnpm install gulp-less --save-dev
		postcss  css前缀 压缩
			cnpm install gulp-postcss --save-dev
		css前缀autoprefixer
			cnpm install autoprefixer --save-dev
		css压缩cssnano
			cnpm install cssnano --save-dev
		服务器
			cnpm install gulp-connect --save-dev
		设置node模式以此来判断是开发环境还是生产环境进行代码压缩	
			export/set NODE_ENV=production
			echo $NODE_ENV  验证

内网穿透

height: 100vh;
vh  整个屏幕高度分成100份
vw

easy mock  创建假数据接口

fastclick  解决300ms延迟

stackoverflow.com 提问题

翻墙 极速 vpn

Google镜像

