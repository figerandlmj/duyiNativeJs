var root = window.player;
var $ = window.Zepto;
var $scope = $(document.body);
var songList;//歌曲列表
var controlManager;//控制当前歌曲的index
var audio = new root.AudioManager();//控制音频的播放

// 进度条改变事件
function bindTouch() {
	var $slidePoint = $scope.find('.slider-point');
	var offset = $('.pro-wrapper').offset();
	var left = offset.left;
	var width = offset.width;
	$slidePoint.on('touchstart', function() {
		// 停止进度条移动
		root.processor.stop();
	}).on('touchmove', function(e) {
		// 计算进度条百分比
		var x = e.changedTouches[0].clientX;
		var percent = (x - left) / width;
		if(percent > 1 || percent < 0) {
			percent = 0;
		}
		// 改变进度条显示
		root.processor.updata(percent);
	}).on('touchend', function(e) {
		// 计算进度条百分比
		var x = e.changedTouches[0].clientX;
		var percent = (x - left) / width;
		if(percent > 1 || percent < 0) {
			percent = 0;
		}
		// 当前歌曲总时间
		var curDuration = songList[controlManager.index].duration;
		// 歌曲播放时间点
		var curTime = curDuration * percent;
		audio.jumpToplay(curTime);
		// 开启进度条
		root.processor.start(percent);
		$scope.find('.play-btn').addClass('playing');
	})
}

function bindClick() {
	// 控制歌曲播放改变
	$scope.on('play:change', function(event, index, flag) {
		// 播放列表中当前歌曲标记
		root.playList.signSong(index);
		// 渲染当前歌曲歌词
		root.lyric.renderLyric(songList[index].lyric);
		// 发送音频src,发送歌词数据
		audio.setAudioSource(songList[index].audio, songList[index].lyric);
		// 如果当前歌曲是播放状态或者点击了播放列表数据
		if(audio.status == 'play' || flag) {
			audio.play();
			// 开启播放进度
			root.processor.start();
			$scope.find('.play-btn').addClass('playing');
		}
		// 渲染当前歌曲数据
		root.render(songList[index]);
		// 渲染时间进度
		root.processor.renderAllTime(songList[index].duration);
		root.processor.updata(0);
	});
	// 点击上一首歌曲
	$scope.on('click', '.prev-btn', function() {
		var index = controlManager.prev();
		$scope.trigger('play:change', index);
	});
	// 点击下一首歌曲
	$scope.on('click', '.next-btn', function() {
		var index = controlManager.next();
		$scope.trigger('play:change', index);
	});
	// 点击播放/暂停
	$scope.on('click', '.play-btn', function() {
		if(audio.status == 'play') {
			audio.pause();
			// 暂停播放进度
			root.processor.stop();
		}else{
			audio.play();
			root.processor.start();
		}
		$scope.find('.play-btn').toggleClass('playing');
	});
	// 点击歌曲列表
	$scope.on('click', '.list-btn', function() {
		root.playList.show(controlManager);
	});
	// 点击喜欢按钮
	$scope.on('click', '.like-btn', function() {
		$scope.find('.like-btn').toggleClass('liking');
	});
}

// 获取歌曲列表数据
function getData(url) {
	$.ajax({
		type: 'GET',
		url: url,
		success: function(data) {
			// console.log(data);
			songList = data;
			bindClick();
			bindTouch();

			controlManager = new root.ControlManager(data.length);
			// 渲染歌曲播放列表
			root.playList.renderList(data);

			$scope.trigger('play:change', 0);
		},
		error: function() {
			alert('get data error');
		}
	})
}
getData('./mock/data.json');