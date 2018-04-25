(function($, root) {
	var $scope = $(document.body);
	//渲染当前这首歌的信息
	function renderInfo(info) {
		var html = '<div class="song-name">'+ info.song +'</div>\
					<div class="singer-name">'+ info.singer +'</div>\
					<div class="album-name">'+ info.album +'</div>';
		$scope.find('.song-info').html(html);			
	}
	//渲染当前这首歌的图片
	function renderImg(src) {
		var img = new Image();
		img.onload = function() {
			root.blurImg(img, $scope);//背景高斯模糊图
			$scope.find('.song-img img').attr('src', src);
		}
		img.src = src;
	}
	// 渲染是否喜欢歌曲的状态
	function renderIsLike(isLike) {
		if(isLike) {
			$scope.find('.like-btn').addClass('liking');
		}
	}
	root.render = function(data) {
		renderInfo(data);
		renderImg(data.image);
		renderIsLike(data.isLike);
	}
})(window.Zepto, window.player || (window.player = {}));