前端三大主流框架
vue 虚拟dom 数据绑定 轻量级
react facebook 虚拟dom es6语法 jsx语法
angular google 1 pc端 2 4 typeScript js超集 数据绑定

架构设计模式
mvc 
mvp
mvvm: model view vueModel
	  数据  视图 vue实例层 连接dom和js


vue :

虚拟dom
生命周期
数据绑定
组件化

官网 vuejs.org

vue-cli 自动化构建
 npm install vue-cli -g
 vue -V
 vue list

 vue init webpack-simple vue4-1
 cd vue4-1
 npm install

 vue init webpack my-app
 cd my-app
 cnpm install
 npm start
 cnpm install node-sass --save-dev
 cnpm install sass-loader --save-dev
 npm install less-loader less --save-dev 


组件库
	http://element-cn.eleme.io/#/zh-CN

组件化
	高内聚低耦合
	代码利用率高
	代码维护性好

props 
	进行数据传递，单向数据流（父 -》 子），只读
	多功能输入框

	非父子组件同信（vuex）

	编译作用域

	插槽

	作用域插槽

SPA 单页面应用

vue-router
	路由

vuex 状态管理模式
	cnpm install vuex --save
	组件间数据传递
	数据共享store 公共状态

	vue浏览器调试插件
	github
	vue devtools

	state
		多个组件共享的状态（值）state  mapState
	getters
		组件共享状态，派生出来的
	mutations
		定义同步处理state当中的值，commit / mapMutations
	actions
		定义异步函数，调用mutations当中的方法，改变state当中的值 dispatch /mapActions
	module
		store 分成不同的模块




flow 静态类型检测

rollup 模块打包工具

Vue = 组件（数据） + 指令



