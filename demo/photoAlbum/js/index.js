var $wrapper = $('.wrapper'),
	$showImage = $('.show-image');
var total = 10,
	activeIndex,
	h_w = $(window).height() / $(window).width();

rander(total);

$wrapper.on('tap', 'li', function() {
	activeIndex = $(this).index();
	loadImage(activeIndex);
})

$showImage
	.on('tap', function() {
		$(this).hide();
	})
	.on('swipeLeft', function() {
		activeIndex ++;
		if(activeIndex > total - 1){
			activeIndex = total - 1;
		}else{
			loadImage(activeIndex);
		}
	})
	.on('swipeRight', function() {
		activeIndex --;
		if(activeIndex < 0){
			activeIndex = 0;
		}else{
			loadImage(activeIndex);
		}
	})

function loadImage(index){
	var oImage = new Image();
	oImage.src = '../photoAlbum/img/' + index + '.jpg';
	oImage.onload = function() {
		var w = this.width,
			h = this.height;
		if(h / w > h_w){
			$(this).css('height', '100%').animate({opacity:1}, 500);
		}else{
			$(this).css('width', '100%').animate({opacity:1}, 500);
		}
		$showImage.html('').append(this).show();
	}
}

function rander(total){
	var str = '';
	for(var i = 0; i < total; i ++) {
		str += '<li>\
					<img src="./img/' + i + '.jpg" alt="">\
				</li>';
	}
	$(str).appendTo($wrapper).animate({
		opacity: 1
	}, 500);
}
