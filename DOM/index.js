// 返回某个节点node的元素子节点，不使用child
function retElementChild(node){
	// var arr = [],
	// 	child = node.childNodes,
	// 	len = child.length;
	// for(var i = 0; i < len; i++){
	// 	if(child[i].nodeType === 1){
	// 		arr.push(child[i]);
	// 	}
	// }
	// return arr;

	// 使用类数组方法
	var temp = {
			length: 0,
			push: Array.prototype.push,
			splice: Array.prototype.aplice
		},
		child = node.childNodes,
		len = child.length;
	for(var i = 0; i < len; i++){
		if(child[i].nodeType === 1){
			temp.push(child[i]);
		}
	}
	return arr;
}

// 返回元素elem的第n成祖先元素节点
function retParent(elem, n){
	while(elem && n){
		elem = elem.parentElement;
		n--;
	}
	return elem;
}

// 返回元素e的第n个兄弟节点。n为正，返回后面的兄弟节点；n为负，返回前面的；n为0返回自己
function retSibling(e, n){
	while(e && n){
		if(n > 0){
			if(e.nextElementSibling){
				e = e.nextElementSibling;
			}else{
				for(e = e.nextSibling; e && e.nodeType != 1; e.nextSibling);
			}
			n--;
		}else{
			if(e.previousElementSibling){
				e = e.previousElementSibling;
			}else{
				for(e = e.previousSibling; e && e.nodeType != 1; e.previousSibling);
			}
			n++;
		}
	}
}

// 在原型链上封装函数myChildren，返回children,解决非分浏览器的兼容性问题
Element.prototype.myChildren = function(){
	var child =this.childNodes,
		len = child.length,
		arr = [];
	for(var i = 0; i < len; i ++){
		if(child[i].nodeType === 1){
			arr.push(child[i]);
		}
	}
	return arr;
}

// 在原型链上封装函数hasChildren，返回true/false
Element.prototype.hasChildren = function(){
	var child =this.childNodes,
		len = child.length,
		arr = [];
	for(var i = 0; i < len; i ++){
		if(child[i].nodeType === 1){
			return true;
		}
	}
	return false;
}

// 封装insertAfter,功能类似insertBefore
Element.prototype.insertAfter = function(targetNode, afterNode){
	var beforeNode = afterNode.nextElementSibling;
	if(beforeNode){
		this.insertBefore(targetNode, beforeNode);
	}else{
		this.appendChild(targetNode);
	}
}

// 计时器，3分钟后停止
function setTimer(){
	var minutesNode = document.getElementsByTagName('input')[0],
		secondsNode = document.getElementsByTagName('input')[1];

	var minutes = 0,
		seconds = 0;

	var timer = setInterval(function(){
		seconds++;
		if(seconds == 60){
			seconds = 0;
			minutes++;
		}
		secondsNode.value = seconds;
		minutesNode.value = minutes;
		if(minutes == 3){
			clearInterval();
		}
	}, 1000);
}

// 封装getScrollOffset获取滚动条的滚动距离
function getScrollOffset(){
	if(window.pageXOffset){
		return {
			x: window.pageXOffset,
			y: window.pageYOffset
		};
	}else{
		return {
			x: document.body.scrollLeft + document.documentElement.scrollLeft,
			y: document.body.scrollTop + document.documentElement.scrollTop
		};
	}
}

// 获取可视区窗口的尺寸
function getViewportOffset(){
	if(window.innerWidth){
		return {
			w: window.innerWidth,
			h: window.innerHeight
		};
	}else{
		if(document.compatMode === "BackCompat"){//怪异模式
			return {
				w: document.body.clientWidth,
				h: document.body.clientHeight
			};
		}else{
			return {
				w: document.documentElement.clientWidth,
				h: document.documentElement.clientHeight
			}
		}
	}
}

// 自动阅读
function autoRead(){
	var start = document.getElementsByTagName("input")[0];
		stop = document.getElementsByTagName("input")[1];
	var timer,
		key = true;
	start.onclick = function(){
		if(key){
			key = false;
			timer = setInterval(function(){
				window.scrollBy(0,10);
			},1000);
		}
	};
	stop.onclick = function(){
		clearInterval(timer);
		key = true;
	}
}

// 获取元素的属性
function getStyle(elem, prop){
	if(window.getComputedStyle){
		return window.getComputedStyle(elem, null)[prop];
	}else{
		return elem.currentStyle[prop];
	}
}

// 方块加速运动
function speedUp(){
	// <div style="width:100px;height:100px;background-color:red;position:absolute;top:0;left:0"></div>
	var div = document.getElementsByTagName("div")[0];
	var speed = 2;
	var timer = setInterval(function(){
		speed += speed/7;
		div.style.left = parseInt(getStyle(div,"left")) + speed +"px";
		console.log(div.style.left)
		if(parseInt(div.style.left) > 500){
			clearInterval(timer);
		}
	},100);
}

// 输出li顺序
function addLiClick(){
	// ul>li{a}*4
	var li = document.getElementsByTagName("li");
	var len = li.length;
	for(var i = 0; i < len; i++){
		// li[i].addEventListener('click', function(){
		// 	console.log(i);//4 含有闭包问题
		// }, false);

		(function(i){
			li[i].addEventListener('click', function(){
				console.log(i);
			}, false);
		}(i));
	}
}

// 封装监听事件
function addEvent(elem, type, handle){
	if(elem.addEventListener){
		elem.addEventListener(type, handle, false);
	}else if(elem.attachEvent){
		elem.attachEvent('on' + type, function(){
			handle.call(elem);
		});
	}else{
		elem['on' + type] = handle;
	}
}

// 解除事件处理函数
function removeEvent(elem, type, handle){
	if(elem.removeEventListener){
		elem.removeEventListener(type, handle, false);
	}else if(elem.detachEvent){
		elem.detachEvent('on' + type, function(){
			handle.call(elem);
		});
	}else{
		elem['on' + type] = null;
	}
}

// 取消冒泡
function stopBubble(event){
	if(event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancelBubble = true;
	}
}

// 阻止默认事件
function cancelHandler(event){
	if(event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}
}

// 事件委托，给li间接绑定事件
function eventEntrust(){
	// 事件委托，利用冒泡原理
	// 优点：性能 不需要循环所有的元素一个个绑定事件
	// 	  灵活 当有新的子元素时不需要重新绑定事件
	// ul>li{$}*10
	var ul = document.getElementsByTagName("ul")[0];
	ul.onclick = function(e){
		var event = e || window.event;//兼容ie
		var target = event.target || event.srcElement;
		console.log(target.innerText);
	}
}

// 拖拽
function drag(elem){
	// <div style="width:100px;height:100px;background-color:red;position:absolute;top:0;left:0;"></div>
	// var div = document.getElementsByTagName('div')[0];
	// drag(div);
	var disX,
		disY;
	addEvent(elem, 'mousedown', function(e){
		var event = e || window.event;
		disX = event.clientX - parseInt(getStyle(elem, 'left'));
		disY = event.clientY - parseInt(getStyle(elem, 'top'));
		addEvent(document, 'mousemove', mouseMove);
		addEvent(document, 'mouseup', mouseUp);
		stopBubble(event);
		cancelHandler(event);
	});
	function mouseMove(e){
		var event = e || window.event;
		elem.style.left = event.clientX - disX +'px';
		elem.style.top = event.clientY - disY +'px';
	}
	function mouseUp(e){
		removeEvent(document, 'mousemove', mouseMove);
		removeEvent(document, 'mouseup', mouseUp);
	}
}

// js异步加载
// 1. loadScript("tools.js", function(){
// 	test();
// })
// callback();

// 2.loadScript("tools.js", "test()");
// eval(callback);

// 3.loadScript("tools.js", "test");
// tools[callback]();

// tools.js =>
// var tools = {
// 	test:function(){}
// }
function loadScript(url, callback){
	var script =document.createElement("script");
	script.type = "text/javascript";
	if(script.readyState){
		script.onreadystatechange = function(){
			if(script.readyState == "complete" || script.readyState == "loaded"){
				callback();
			}
		}
	}else{
		script.onload = function(){
			callback();
		}
	}
	script.src = url;
	document.appendChild(script);
}


