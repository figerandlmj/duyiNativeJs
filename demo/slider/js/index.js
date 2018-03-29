HTMLUListElement.prototype.createTurnPage = function(arr) {
	var len = arr.length;
	var oFrag = document.createDocumentFragment();
	for(var i = 0; i < len; i ++) {
		var oLi = document.createElement("li");
		oLi.innerHTML = '<img src="' + arr[i] + '" alt="">';
		oFrag.appendChild(oLi);
	}
	var oLi = document.createElement("li");
	oLi.innerHTML = '<img src="' + arr[0] + '" alt="">';
	oFrag.appendChild(oLi);
	this.appendChild(oFrag);
}
var sliderPage = document.getElementsByClassName('slider-page')[0];
sliderPage.createTurnPage(['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg']);

var moveWidth = sliderPage.children[0].offsetWidth;
var num = sliderPage.children.length - 1;
var leftBtn = document.getElementsByClassName('left-btn')[0],
	rightBtn = document.getElementsByClassName('right-btn')[0];
var oSpanArray = document.getElementsByClassName('slider-index')[0].getElementsByTagName('span');
var spanLen = oSpanArray.length;
var timeInterval = 1500;
var lock = true;
var index = 0;
var timer = null;

timer = setTimeout(autoMove, timeInterval);

// 点击左右按钮
leftBtn.onclick = function() {
	autoMove('right->left');
}
rightBtn.onclick = function() {
	autoMove('left->right');
}

// 点击span
for(var i = 0; i < spanLen; i ++) {
	(function(myIndex){
		oSpanArray[i].onclick = function(){
			// console.log(myIndex)
			lock = false;
			clearTimeout(timer);
			index = myIndex;
			startMove(sliderPage, {left: -index * moveWidth}, function() {
				changeIndex(index);
				lock = true;
				timer = setTimeout(autoMove, timeInterval);
			});
		}
	}(i));
}

// 默认方向/right按钮 'left->right'/undefined
// left按钮  'right->left'
function autoMove(direction){
	if(lock) {
		lock = false;
		clearTimeout(timer);
		if(!direction || direction == 'left->right'){
			index ++;
			startMove(sliderPage, {left: sliderPage.offsetLeft - moveWidth}, function() {
				if(sliderPage.offsetLeft == -moveWidth * num){
					index = 0;
					sliderPage.style.left = 0;
				}
				changeIndex(index);
				lock = true;
				timer = setTimeout(autoMove, timeInterval);
			});
		}else if(!direction || direction == 'right->left') {
			if(sliderPage.offsetLeft == 0){
				index = num;
				sliderPage.style.left = -moveWidth * num + 'px';
			}
			index --;
			startMove(sliderPage, {left: sliderPage.offsetLeft + moveWidth}, function() {
				changeIndex(index);
				lock = true;
				timer = setTimeout(autoMove, timeInterval);
			});
		}
	}
}

// 改变当前span的样式
function changeIndex(_index) {
	for(var i = 0; i < spanLen; i ++){
		oSpanArray[i].className = '';
	}
	oSpanArray[_index].className = 'active';
}
