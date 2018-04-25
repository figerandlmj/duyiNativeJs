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




