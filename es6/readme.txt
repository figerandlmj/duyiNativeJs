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
		class Person {
			constructor(name = 'xiaoming') {
				this.name = name;
			}
			showMsg() {
				console.log(this.name);
			}
		}

		var p1 = new Person('zhangsan');
		p1.showMsg();
	继承



