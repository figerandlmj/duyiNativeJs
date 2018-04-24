(function($, root) {
	var control;
	var $scope = $(document.body);
	var $playList = $('<div class="play-list">\
						<div class="play-header">播放列表</div>\
						<ul class="list-wrapper">\
						</ul>\
						<div class="play-close-btn">关闭</div>\
					</div>');
	
	function renderList(songList) {
		var html = '',
			len = songList.length;
		for(var i = 0; i < len; i ++) {
			html += '<li><h3>'+ songList[i].song +'-<span>'+ songList[i].singer +'</span></h3></li>';
		}
		$playList.find('ul').html(html);
		$scope.append($playList);
		bindEvent();
	}
	function show(controlManager) {
		control = controlManager;
		$playList.addClass('show');
		signSong(control.index)
	}
	function signSong(index) {
		$playList.find('.sign').removeClass('sign');
		$playList.find('li').eq(index).addClass('sign');
	}
	function close() {
		$playList.removeClass('show');
	}
	function bindEvent() {
		$scope.on('click', '.play-close-btn', function() {
			close();
		});
		$scope.find('li').on('click', function() {
			var index = $(this).index();
			signSong(index);
			control.index = index;

			$scope.trigger('play:change', [index, true]);
			setTimeout(function() {
				close();
			}, 200);
		});
	}
	root.playList = {
		renderList: renderList,
		show: show,
		signSong: signSong
	};
})(window.Zepto, window.player || (window.player = {}));