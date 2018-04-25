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





