// 多物体多值链式运动框架
function startMove(obj, json, callback) {
	clearInterval(obj.timer);
	var iSpeed,
		iCur,
		name;
	obj.timer = setInterval(function() {
		var bStop = true;
		for(var attr in json){
			if(attr == 'opacity'){
				name = attr;
				iCur = parseFloat(getStyle(obj, attr)) * 100;
			}else{
				iCur = parseInt(getStyle(obj, attr));
			}
			iSpeed = (json[attr] - iCur)/8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if(attr == 'opacity'){
				obj.style.opacity = (iCur + iSpeed) / 100;
			}else{
				obj.style[attr] = iCur + iSpeed +'px';
			}
			if(Math.floor(Math.abs(json[attr] - iCur)) != 0){
				bStop = false;
			}
		}
		if(bStop) {
			clearInterval(obj.timer);
			if(name === 'opacity'){
				obj.style.opacity = json[attr] / 100;
			}
			typeof callback == 'function' ? callback() : '';
		}
	}, 30);
}

// 获取元素的属性
function getStyle(elem, prop){
	if(window.getComputedStyle){
		return window.getComputedStyle(elem, null)[prop];
	}else{
		return elem.currentStyle[prop];
	}
}