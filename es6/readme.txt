1.let const 以及块级作用域 

	es以前 全局作用域  函数作用域

	let 块级作用域
		不存在变量提升  先声明后使用
		暂时性死区  声明之前使用就报错
		不允许重复声明
	const 常量 不可以改变的变量 也存在块级作用域性质

2.变量的解构赋值  模式匹配
	数组的解构赋值 
		强调有序
		let [a,b,c] = [1,2,3];
		let [a,[b,[c]]] = [1,[2,[3]]];

		解构不成功
		let [a,b] = [1];//a 1 b undefined
		不完全解构 
		let [a,b] = [1,2,3];//a 1 b 2
		支持默认值 先走对应匹配的模式，如果===undefined时走默认值
		let [a=10] = [20];//20
		let [a=10] = [];//10
		let [a=10] = [undefined];//10
		let [a=10] = [null];//null
		惰性赋值 可以找到模式匹配的值时就不执行默认值
		// let [x=y,y=1] = [];
		// console.log(x,y);//报错
		
		// let [x=y,y=1] = [2];
		// console.log(x,y);//2 1

	对象解构赋值 
		无序
		// let {foo,bar} = {foo:123,bar:234};
		// console.log(foo,bar);//123 234
		// let {foo,bar} = {bar:234,foo:123};
		// console.log(foo,bar);//123 234
		不完全解构 
		let {bar} = {foo:123,bar:234};
		console.log(bar);//234
		解构不成功
		// let {bar} = {foo:123};
		// console.log(bar);//undefined
		// let {bar} = {foo:123,bar:undefined};
		// console.log(bar);//undefined
		支持默认值 先走对应匹配的模式，如果===undefined时走默认值
		// let {x,y=3} = {x:1};
		// console.log(x,y);//1 3
		// let {x,y=3} = {x:1,y:undefined};
		// console.log(x,y);//1 3
		嵌套解构
		let obj = {
			p:[
				'hello',
				{y:123}
			]
		};
		let {p:[x,{y:aa}]} = obj;
		console.log(x,aa);//hello 123
		console.log(p,y);//报错
		多次解构
		let obj = {
			p:[
				'hello',
				{y:123}
			]
		};
		let {p,p:[x,{y}]} = obj;
		console.log(x,y);//hello 123
		console.log(p);//["hello", {y:123}]
	应用
		swap交换
		// let a = 1,
		// 	b = 2,
		// 	temp;
		// temp = a;
		// a = b;
		// b = temp;

		let a=1,b=2;
		[a,b] = [b,a];

		函数返回值的解构
		function methods() {
			return {
				add: function() {},
				sum: function() {}
			}
		}
		let {add,sum} = methods();


3.字符串的扩展
	模板字符串
		增强字符串
			var str = `life 
			is 
			shit!!!`;
		在字符串中添加变量或表达式
			var xm = {
				name: 'xiaoming',
				age: 18,
				height: 180
			};
			var {name,age,height} = xm;

			var str = 'name: ' + name + ' age: ' + age + ' height: ' + height;
			console.log(str);

			var newStr = `name: ${name} age: ${age} height: ${height}`;
			console.log(newStr);
	标签模板
		实质 函数调用的特殊形式
			var name = 'xiaoming',
				where = 'bj';
			function show() {
				console.log(arguments);
			}
			show`hello ${name} , welcome to ${where}`;
		应用 过滤html字符串 防xss攻击
			var name = '<script>alert("hello")<\/script>';
			safeHTML`<p>${name} welcome to bj</p>`;

			function safeHTML(data) {
				// ["<p>", " welcome to bj</p>"], name
				// console.log(arguments);
				// ["<p>", " welcome to bj</p>"]
				// console.log(data);

				var str = data[0];
				for(let i = 1; i < arguments.length; i ++) {
					var arg = String(arguments[i]);
					str += arg.replace(/&/g, '&amp').replace(/</g, '&lt').replace(/>/g, '&gt');
					str += data[i];
				}
				console.log(str);
			}

4.函数的扩展
	函数参数的默认值
		基本使用
			function Person(name, age = 18) {
				console.log(name, age);
			}
			Person('xm', 12);//12
			Person('xm');//18
			Person('xm', undefined);//18 
			Person('xm', 0);//0 
			Person('xm', null);//null
			Person('xm', false);//false
		与解构赋值结合使用
			function fn({x,y=5}){
				console.log(x,y);
			}
			fn({});//undefined 5
			fn({x:1});//1 5
			fn({x:1,y:2});//1 2
			fn();//报错 不构成解构赋值
		参数作用域以及注意事项
			function fn(x=5) {
				let x = 10;
			}
			fn();//报错
			// 报错
			// function fn(x, x, z=10){}

	REST参数（扩展运算符）
			function fn(...arg) {
				console.log(arg);
			}
			fn(1,2,3);//[1, 2, 3]
			// ...arg  1,2,3
			// arg     [1,2,3]

			function fn(...arg) {
				console.log(arg);
			}
			// fn.call(null, 1,2,3);//[1,2,3]
			// fn.apply(null,[1,2,3]);//[1,2,3]

			var arg = [1,2,3];
			fn.call(null, ...arg);//[1,2,3]
			fn.apply(null,arg);//[1,2,3]

	箭头函数
		基本使用
		var f = function(num) {
			return num;
		}
		var f = num => num;//参数为num
		var f = () => num;//没有参数
		var f = (num1,num2) => num1 + num2;
		var f = () => ({name:123});//返回值为对象时要加个()
		var fn = num => {
			num = num +1;
			return num * 5;
		}
		注意事项
			var age = 'window 18';
			var obj = {
				age: 18,
				getAge: () => this.age
			}
			console.log(obj.getAge());//'window 18'
			// this 指向obj的父级window
			// 没有arguments 通过...arg获取到参数
		嵌套的箭头函数
			function fn(str) {
				return function() {
					return str.split('')
				}
			}
			var fn = str => () => str.split('');
			console.log(fn('123')());

5.数组的扩展

	扩展运算符
		// ...[1,2,3] = 1,2,3

		var arr = [];
		var arr1 = [1,2,3];
		// arr.push(1,2,3);
		// Array.prototype.push.apply(arr, arr1);
		arr.push(...arr1);
		console.log(arr);

		var arr = ['abc'];
		var arr1 = [1,2,3];
		console.log(arr.concat(arr1));

		var arr = ['abc'];
		var arr1 = [1,2,3];
		var newArr = [...arr, ...arr1];
		console.log(newArr);

		var [x,...y] = [1,2,3,4,5];
		console.log(x,y)

		var strArr = [...'xiaoming'];//类数组转换为数组
		console.log(strArr);

	Array.from()
		类数组转换为数组
			var arr = Array.from('string');

			var obj = {
				'0': 'd',
				'1': 'y',
				'2': 'z',
				length: 3
			}
			var arr = Array.from(obj, function(item, index) {
				return item + index;
			});
			console.log(arr)
			var arr1 = Array.from(obj).map((item, index) => item + index);
			console.log(arr1)

			var divs = document.getElementsByTagName('div');
			var divTexts = Array.from(divs, item => item.innerText);

			var arr = [1,2,3];
			var arr1 = Array.from(arr);
			arr == arr1;//false

			function typeOf() {
				return Array.from(arguments, item => typeof item);
			}
			console.log(typeOf('1', false, NaN, null, []));
	Array.of()
		将一组数转换为数组
			// var arr = Array.of(1,2,3);
			var arr = Array.of(3);
			console.log(arr);
			// var arr1 = new Array(1,2,3);
			var arr1 = new Array(3);
			console.log(arr1);

	数组实例的方法copyWithin()
		按照一定的格式进行重写
			var arr = [1,2,3,4,5];
			// Array.prototype.copyWithin(target, start=0, end=this.length);
			// 从第0位开始被覆盖，用3-length的数覆盖 
			console.log(arr.copyWithin(0,3));//[4,5,3,4,5]
			console.log(arr);//[4,5,3,4,5]
	数组实例的方法
		fill()
			var arr = new Array(5);
			// arr.fill(7);//[7,7,7,7,7]
			arr.fill(7,3,4);//[,,,7,]
			console.log(arr);
		keys()
			var arr = [1,2,3,4,5];
			for(item of arr.keys()){//迭代器 for of 来循环key
				console.log(item);//0 1 2 3 4
			}
		values()
			var arr = [1,2,3,4,5];
			for(item of arr.values()){//chrome不支持，报错
				console.log(item);//1 2 3 4 5
			}
		entries()
			var arr = [1,2,3,4,5];
			for(item of arr.entries()){
				console.log(item);//[0, 1] [1, 2] [2, 3] [3, 4] [4, 5]
			}
			for([index,item] of arr.entries()){
				console.log(index,item);//0 1  1 2  2 3  3 4  4 5
			}
	数组实例的方法
		includes()
			var arr = [1,2,3,4,5];
			var num = arr.indexOf(6);//-1
			var num = arr.includes(2);//true
			var num = arr.includes(6);//false

			var arr = [NaN];
			var num = arr.indexOf(NaN);//-1
			var num = arr.includes(NaN);//true
		find()
			找到满足条件的第一个数
			var arr = [1,2,3,4,5];
			var num = arr.find(item => item > 4);//5
			var num = arr.find(item => item > 2);//3

		findIndex()
			找到满足条件的第一个数的下标
			var arr = [1,2,3,4,5];
			var num = arr.findIndex(item => item > 2);//2
			var num = arr.findIndex(item => item > 6);//-1

6.对象的扩展
	属性的简洁表示法以及属性名表达式
		// var foo = '123';
		// // var obj = {foo:foo};
		// var obj = {foo};

		// function fn(x,y) {
		// 	// return {x,y};
		// 	return {x:x,y:y};
		// }

		var obj = {
			name: 'xm',
			age: 18,
			// getMsg: function() {
			// 	console.log(this.name, this.age);
			// }
			getMsg() {
				console.log(this.name, this.age);
			}
		}

		var name = 'name',
			age = 'age';
		var obj = {
			[name]: 'xm',
			[age]: 18
		}

	属性的可枚举性以及属性的遍历

	Object.is()
		用来判断两个值是否相等
		console.log(Object.is('foo','foo'));//true
		console.log(Object.is(NaN,NaN));//true
		console.log(NaN === NaN);//false
		console.log(Object.is(+0,-0));//false
		console.log(+0 === -0);//true
	Object.assign()
		将多个对象的可枚举属性放到一个对象中
			var obj = {};
			var obj1 = {name: 'xm'};
			var obj2 = {age: 18};
			var obj3 = {getName() {console.log(this.name)}};
			var newObj = Object.assign(obj, obj1, obj2, obj3);
			// var newObj = Object.assign(obj);
			// console.log(newObj == obj);//true
			// var newObj = Object.assign(2);
			// var newObj = Object.assign(null);//报错
			// var newObj = Object.assign(undefined);//报错

	Object.keys()
	Object.values()
	Object.entries()

		// 属性遍历 (for key in obj)  Object.keys()

		// Object.getOwnPropertyDescriptor() 获取某个对象的某个属性的描叙
		// var obj = {
		// 	name: 'xm',
		// 	age: 18
		// }
		// console.log(Object.getOwnPropertyDescriptor(obj, 'age'));
		// {value: 18, writable: true, enumerable: true, configurable: true}

		var obj = {
			name: 'xm',
			age: 18,
			getMsg() {
				return this.name + this.age;
			}
		}
		var keys = Object.keys(obj);
		var values = Object.values(obj);
		var entries = Object.entries(obj);

	对象的扩展运算符
		var {a, b, ...c} = {a:123, b:234, c: 456, d:789};

		var obj = {name:'xm'};
		var obj1 = {age:18};
		var newObj = {...obj, ...obj1};

		let merge = (...source) => Object.assign({}, ...source);
		console.log(merge(obj,obj1));

7.class的基本用法

	基本使用
		constructor 实例属性 实例方法

			class Person {
				constructor(name = 'xiaoming') {
					this.name = name;
				}
				showMsg() {
					console.log(this.name);
				}
			}

			var p1 = new Person('zhangsan');
			var p2 = new Person('lisi');
			p1.showMsg();

			// console.log(typeof Person);//function
			// console.log(Person.prototype.constructor == Person);//true
			// console.log(Person.prototype.showMsg);
			// console.log(p1.__proto__ == p2.__proto__);//true
			// Person();//报错

			// var fn = function(){}
			// var A = class{}

			// (function(){})();
			// let a = new class{}

			// 报错 
			// var a = new A();
			// class A{}

			class A{
				constructor(name){
					this.name = name;//实例属性
				}
				toString(){//实例方法
					console.log(this.name);
				}
			}

		this指向
			var name = 'xz';
			var obj = {
				name:'xm',
				showMsg: function() {
					console.log(this.name);
				}
			}
			obj.showMsg();//'xm'
			// var showMsg = obj.showMsg;
			// showMsg();//'xz' this => window

			var showMsg = obj.showMsg.bind(obj);
			showMsg();//'xm' this => obj

			class Person{
				constructor(name, age) {
					this.name = name;
					this.age = age;
					// this.showName = this.showName.bind(this);
					this.showName = () =>this.show(`hi ${this.name}`);
				}
				showName() {
					this.show(`hi ${this.name}`);
				}
				show(name) {
					console.log(name);
				}
			}
			// var p = new Person('xiaoming', 18);
			var { showName } = new Person('xm', 18);
			showName();//报错 bind之后 hi xm


			var name = 'xm';
			var obj = {
				name:'lmj',
				show: () => console.log(this.name)
			}
			obj.show();//'xm' 箭头函数中this指向父级

		静态属性 静态方法
			绑定在类上 通过类来获取
			class Person{
				// static sex
				constructor(name, age) {
					this.name = name;
					this.age = age;
				}
				static newShow() {

				}
				showName() {
					this.show(`hi ${this.name}`);
				}
				show(name) {
					console.log(name);
				}
			}
			Person.newShow;
			Person.sex = 'male';
	继承
		extends super
			class A {
				constructor(name) {
					this.name = name;
				}
				toString() {
					console.log(this.name);
				}
			}
			class B extends A {
				// constructor(name, age) {
				// 	super(name);//此时super必须
				// 	this.age = age;
				// }
				// constructor(...arg) {
				// 	super(...arg);
				// }
				toString() {
					console.log('aaa');
					super.toString();
				}
			}
			var b = new B('xm');
			console.log(B.__proto__ === A);//true
			console.log(B.prototype.__proto__ === A.prototype);//true

			// function Person(){}
			// var p = new Person();
			// console.log(p.__proto__ === Person.prototype);//true

8.promise对象
	含义
		定义未来会发生的情况
	3种状态
		pending   就绪
		resolved  成功
		rejected  失败
	实例方法 Promise.prototype.then()
		var promise = new Promise(function(resolve , reject) {
			if(){
				resolve()
			}else{
				reject()
			}
		})

		const loadImg = url => new Promise((resolve, reject) => {
			let img = new Image();
			img.onload = () => resolve(img);
			img.onerror = () => reject('can not load image at' + url);
			img.url = url;
		})

		const myPromise = (type='GET', url) => new Promise((resolve, reject) => {
			$.ajax({
				type,
				url,
				success: data => resolve(data),
				error: err => reject(err)
			})
		})

		myPromise('xxxx').then(function(){

		},function() {

		});

		//执行顺序 promise 1  hello 3   resolve 2
		let promise = new Promise(function(resolve, reject){
			console.log('promise 1');
			resolve();
		})
		promise.then(function(){
			console.log('resolve 2');
		})
		console.log('hello 3');

	Promise.all
	Promise.race
	Promise.resolve
	Promise.reject
		const myPromise = (type='GET', url) => new Promise((resolve, reject) => {
			$.ajax({
				type,
				url,
				success: data => resolve(data),
				error: err => reject(err)
			})
		})

		var promiseArr = [1,2,3,4,5].map(function(item){
			return myPromise(item);
		})

		Promise.all(promiseArr);//所有请求都成功后执行resolve
		Promise.race(promiseArr);//有一个成功就执行resolve

		// (new Promise()).then(function() {})       Promise.resolve
		// (new Promise()).then(null, function(){})  Promise.reject

		myPromise.then(function(){
			console.log('xxxx');
		}).then(function(){
			console.log('xxxx');
		})

	1.状态 pending -> resolve / reject
	2.状态 一旦变化了 就不能改变了
	3.then 返回promise对象 进行链式调用
		var p = new Promise((resolve, reject) => {
			var num = Math.random() * 100;
			if(num < 50) {
				resolve(num);
			}else {
				reject('太大了，要不起');
			}
		})

		// p.then(function(data){
		// 	console.log(data);
		// },function(err) {
		// 	console.log(err);
		// })
		p.then(data => data, err => err).then(data => console.log('data' + data), err => console.log('err' + err));

	手动封装myPromise
		function myPromise(fn) {
			if(typeof fn !== 'function') {
				throw Error(`Promise resolver ${fn} is not a function`);
			}
			var self = this;
			this.status = 'pending';
			this.data = null;
			this.resolvedArr = [];
			this.rejectedArr = [];
			function resolved(data) {
				if(self.status == 'pending'){
					setTimeout(function(){
						self.status = 'resolved';
						self.data = data;
						self.resolvedArr.forEach(fn => fn());
					},0)
				}
			}
			function rejected(err) {
				if(self.status == 'pending'){
					setTimeout(function(){
						self.status = 'rejected';
						self.err = err;
						self.rejectedArr.forEach(fn => fn());
					},0)
				}
			}
			fn(resolved, resolved);
		}
		myPromise.prototype.then = function(onResolved, onRejected) {
			var self = this;
			if(this.status == 'resolved') {
				return new myPromise(function(resolve, reject) {
					var res = onResolved(self.data);
					if(res instanceof myPromise) {
						res.then(resolve,reject);
					}else{
						resolve(res);
					}
				})
			}
			if(this.status == 'rejected') {
				return new myPromise(function(resolve, reject) {
					var res = onRejected(self.data);
					if(res instanceof myPromise) {
						res.then(resolve,reject);
					}else{
						resolve(res);
					}
				})
			}
			if(this.status == 'pending') {
				return new myPromise(function(resolve,reject){
					self.resolvedArr.push((function(onResolved){
						return function(){
							var res = onResolved(self.data);
							if(res instanceof myPromise) {
								res.then(resolve,reject);
							}else{
								resolve(res);
							}
						};
					})(onResolved));

					self.rejectedArr.push((function(onRejected){
						return function(){
							var res = onRejected(self.data);
							if(res instanceof myPromise) {
								res.then(resolve,reject);
							}else{
								resolve(res);
							}
						};
					})(onRejected))
				})
			}
		}
		// var p = new myPromise(function(resolve, reject) {
		// 	resolve(10);
		// 	// reject('error');
		// })
		// p.then(data => data).then(data => console.log(data));
		// p.then(data => new myPromise((resove,reject) => reject(data))).then((data) => console.log(data));

		// var p = new myPromise(function(resolve, reject) {
		// 	setTimeout(function(){
		// 		resolve(123);
		// 	},1000)
		// })
		// p.then(data => console.log(data));
		// console.log(p)

		var p = new myPromise(function(resolve) {
			console.log(1);
			resolve(2);
		});
		p.then(data => console.log(data));
		console.log(3);


9.fetch 新一代的ajax
	// fetch(url).then(res => res)
	fetch('http://127.0.0.1:8888').then(res => console.log(res));
	fetch('http://127.0.0.1:8888').then(res => res.text()).then(text => console.log(text));

	fetch('http://127.0.0.1:8888',{
		method:'POST',
		headers:new Headers({
			'Content-Type':'application/x-www-form-urlencoded'
		}),
		credentials: 'include',//可接受cookie
		body: new URLSearchParams([['name','xm'],['age',18]]).toString()
	}).then(res => console.log(res));







