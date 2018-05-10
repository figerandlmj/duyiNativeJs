var jsUtil = {
	// 通用继承方法
	extends:function(parent){
		var result = function(){
			parent.apply(this,arguments);
		}
		var Super = function(){}
		Super.prototype = parent.prototype;
		result.prototype = new Super();
		return result;
	},
	// 单例模式
	single:function(origin){
		if(typeof origin === 'function'){
			var result = function(){
				if(typeof origin.instance === 'object'){
					return origin.instance;
				}
				origin.instance = this;
				return this;
			};
		}else{
			var result = function(){
				if(typeof result.instance === 'object'){
					return result.instance;
				}
				result.instance = this;
				return this;
			};
		}
		return result;
	},
	// [min,max]随机数
	random:function(min, max){
		var result = Math.floor(Math.random() * (max - min + 1)) + min;
		return result;
	}
}
