var $wrapper = $('.wrapper'),
	$slider = $('.slider'),
	sliderLen = $slider.length,
	activeIndex = 0,
	lastIndex,
	lock = true;
	
creacteDom(sliderLen);

var $prevBtn = $('.prev-btn'),
	$nextBtn = $('.next-btn'),
	$point = $('.slider-point li');

$prevBtn.on('click', function() {
	clickFun('prev');
})

$nextBtn.on('click', function() {
	clickFun('next');
})

$point.on('click', function() {
	var index = $(this).index();
	clickFun(index);
})

function clickFun(index){
	if(lock){
		$.getSliderIndex(index);
		if(lastIndex != activeIndex){
			lock = false;
			$slider.eq(lastIndex).trigger('go').end().eq(activeIndex).trigger('come');
			pointStyle();
		}
	}
}

$.extend({
	getSliderIndex: function(direction) {
		lastIndex = activeIndex;
		if(direction == 'prev' || direction == 'next') {
			if(direction == 'prev'){
				activeIndex = activeIndex == 0 ? sliderLen - 1 : activeIndex - 1;
			}else{
				activeIndex = activeIndex == sliderLen - 1 ? 0 : activeIndex + 1;
			}
		}else {
			activeIndex = direction;
		}
		// console.log(activeIndex);
	}
});

$slider.on('go', function() {
	$slider.eq(lastIndex).fadeOut(300).find('.slider-content').delay(300).animate({
		'fontSize':'10px'
	}).end().find('.slider-image').delay(300).animate({
		'width':'0%'
	});
})

$slider.on('come', function() {
	$slider.eq(activeIndex).delay(300).fadeIn(300).find('.slider-content').delay(300).animate({
		'fontSize':'20px'
	}).end().find('.slider-image').delay(300).animate({
		'width':'40%'
	},function() {
		lock = true;
	});
})

function pointStyle() {
	$('.active').removeClass('active');
	$point.eq(activeIndex).addClass('active');
}

function creacteDom(len) {
	if(len > 1) {
		var str = '';
		for(var i = 0; i < len; i ++) {
			if(i == 0) {
				str += '<li class="active"></li>';
			}else{
				str += '<li></li>';
			}
		}
		var pointStr = '<div class="slider-point"><ul>' + str + '</ul></div>';
		var btnStr = '<div class="slider-btn">\
			<span class="prev-btn">&lt;</span>\
			<span class="next-btn">&gt;</span>\
		</div>';
		$wrapper.append(btnStr);
		$wrapper.append(pointStr);
	}
}