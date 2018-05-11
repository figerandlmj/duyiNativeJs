// 计算2的n次幂
function power(n){
	var mul = 1;
	for(var i = 0; i < n; i++){
		mul *= 2;
	}
	return mul;
}

// 计算n的阶乘
function factorial(n){
	// var mul = 1;
	// for(var i = 1; i <= n; i++){
	// 	mul *= i;
	// }
	// return mul;

	// 递归的写法
	if(n == 0 || n == 1){
		return 1;
	}
	return n * factorial(n-1);
}

// 计算第n项的菲波那切数列(1 1 2 3 5 8 13 21)
function fbnq(n){
	// if(n > 2){
	// 	var a = 1,b = 1,c;
	// 	for(var i = 0; i < n - 2; i++){
	// 		c = a + b;
	// 		a = b;
	// 		b = c;
	// 	}
	// 	return c;
	// }else{
	// 	return 1;
	// }

	// 递归的写法
	if(n == 1 || n == 2){
		return 1;
	}
	return fbnq(n - 1) + fbnq(n - 2);
}

// 输入456，输出654
function reverse(n){
	var a = n % 100;//56
	var b = a % 10;//6
	var c = a - b;//50
	var d = (n - a)/100;//4
	return b * 100 + c + d;
}

// a,b,c输出最大值
function max(a, b, c){
	if(a > b){
		if(a > c){
			return a;
		}else{
			return c;
		}
	}else{
		if(b > c){
			return b;
		}else{
			return c;
		}
	}
}

// 100以内的质数（素数）只能被1和自身两个数整除
function primeNum(n){
	var arr = [],
		count = 0;
	// for(var i = 1; i < n; i++){
	// 	for(var j = 1; j <= i; j++){
	// 		if(i % j == 0){
	// 			count++;
	// 		}
	// 	}
	// 	if(count == 2){
	// 		arr.push(i);
	// 	}
	// 	count = 0;
	// }
	for(var i = 2; i < n; i++){
		for(var j = 1; j <= Math.sqrt(i); j++){
			if(i % j == 0){
				count++;
			}
		}
		if(count == 1){
			arr.push(i);
		}
		count = 0;
	}
	return arr;
}

// arguments应用：任意个数求和
function sum(){
	var result = 0;
	for(var i = 0; i < arguments.length; i++){
		result += arguments[i];
	}
	return result;
}

// 输入一串数字，逆转，然后输出汉字形式
function transfer(target){
	switch(target){
		case "1":
			return "壹";
		case "2":
			return "贰";
		case "3":
			return "叁";
		default:
			return "其他";
	}
}
function reverse(num){
	var str = "";
	num += "";
	for(var i = num.length-1; i >= 0; i--){
		str += transfer(num[i]);
	}
	return str;
}

// 求一个字符串的字节长度,charCodeAt()求unicode编码
function codeLength(str){

	var codeLen = 0;
	for(var i = 0; i < str.length; i ++){
		if(str.charCodeAt(i) <= 255){//英文
			codeLen ++;
		}else{//中文
			codeLen += 2;
		}
	}
	return codeLen;
}

// 继承的圣杯模式的封装
var inherit = (function(){
	var F = function(){};
	return function(target, origin){
		F.prototype = origin.prototype;
		target.prototype = new F();
		target.prototype.constructor = target;
		target.prototype.uber = origin.prototype;
	};
}());

// 浅度克隆
function clone(origin, target){
	var target = target || {};
	for(var prop in origin){
		target[prop] = origin[prop];
	}
	return target;
}

// 深度克隆
// 1.判断是不是原始值 typeof
// 2.若是引用值，判断是数组还是对象 instanceof toString constructor
// 3.建立相应的数组[]或对象{}
// 4.循环重复判断（递归）
function deepClone(origin, target){
	var target = target || {},
		toStr = Object.prototype.toString,
		arrStr = "[object Array]";
	for(var prop in origin){
		if(origin.hasOwnProperty(prop)){
			if(origin[prop] !== null && typeof(origin[prop]) == 'object'){
				// if(toStr.call(origin[prop]) == arrStr){
				// 	target[prop] = [];
				// }else{
				// 	target[prop] = {};
				// }
				target[prop] = toStr.call(origin[prop]) == arrStr ? [] : {};
				deepClone(origin[prop], target[prop]);
			}else{
				target[prop] = origin[prop];
			}
		}
	}
	return target;
}

// 封装type
// 1.分两类，原始值和引用值
// 2.区分引用值
// Object.prototype.toString.call(new Number(123));//"[object Number]"
// Object.prototype.toString.call(123);//"[object Number]"
// typeof(new Number(123))//"object"
// typeof 123;//"number"
function type(target){
	var ret = typeof target,
		template = {
			"[object Array]": "array",
			"[object Object]": "object",
			"[object Number]": "number-object",
			"[object Boolean]": "boolean-object",
			"[object String]": "string-object"
		};
	if(target === null){
		return "null";
	}else if(ret == "function"){
		return "function";
	}else if(ret == "object"){//数组、对象、包装类
		var str = Object.prototype.toString.call(target);
		return template[str];
	}else{
		return ret;
	}
}

// 数组去重
// 把数组的值当做对象的属性，看其有没有值，没值的话将其加到返回的数组中
// 字符串去重 str.split() -> arr -> 数组去重 -> arr.join("") -> str
Array.prototype.unique = function(){
	var temp = {},
		arr = [],
		len = this.length;
	for(var i = 0; i < len; i ++){
		if(!temp[this[i]]){
			temp[this[i]] = "abc";//不为false的值
			arr.push(this[i]);
		}
	}
	return arr;
}



