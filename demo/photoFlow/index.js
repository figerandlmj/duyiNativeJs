
var oLi = document.getElementsByTagName('li');

var data = {
	cpage: 1
};

var lock = true;

ajaxFun();

window.onscroll = throttle(show, 500);

// 节流函数
function throttle(func, wait){
	var timer = null;
	return function(){
		var that = this,
			argus = arguments;
		if(!timer){
			timer = setTimeout(function(){
				func.apply(that, argus);
				timer = null;
			}, wait);
		}	
	}
}

function show() {
	var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop,
		clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
		minHeight = oLi[minListIndex(oLi)].offsetHeight;
	if(scrollHeight + clientHeight >= minHeight){
		ajaxFun();
	}
}

function ajaxFun() {
	if(lock) {
		lock = false;
		ajax('GET', './data.php', data, getData, true);
		data.cpage ++;
	}
}

// 渲染数据
function getData(data) {
	// console.log(data);
	var value = JSON.parse(data);
	value.forEach(function(ele, index) {
		var index = minListIndex(oLi);
		var oDiv = document.createElement('div'),
			oP = document.createElement('p'),
			oImg = new Image();
		oImg.src = ele.preview;
		oP.innerHTML = ele.title;
		oDiv.className = 'item';
		oImg.style.height = ele.height / ele.width * 200 + 'px';
		oDiv.appendChild(oImg);
		oDiv.appendChild(oP);
		oLi[index].appendChild(oDiv);
		oImg.onerror = function() {
			oImg.style.margin = '-1px';
			oImg.style.width = '202px';
		}
	});
	lock = true;
}

// 获取li最短的那一列的index
function minListIndex(dom){
	var minListHeight = dom[0].offsetHeight,
		index = 0,
		len = dom.length;
	for(var i = 1; i < len; i ++) {
		if(dom[i].offsetHeight < minListHeight){
			minListHeight = dom[i];
			index = i;
		}
	}
	return index;
}