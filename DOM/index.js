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

// 返回元素e的第n成祖先元素节点
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
