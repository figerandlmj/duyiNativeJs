(function($, root) {
	var $scope = $(document.body);
	var $lyric = $('.lyric-wrapper');
	var lyricData,//歌词列表
		lyricIndex = 1;//当前歌词的index
	// 记录音频播放的状态
	function AudioManager() {
		this.audio = new Audio();
		this.status = 'pause';
		this.bindEvent();
	}
	AudioManager.prototype = {
		bindEvent: function() {
			// 监听歌曲是否播放完成
			$(this.audio).on('ended', function() {
				// 播放下一首歌曲
				$scope.find('.next-btn').trigger('click');
				lyricIndex = 1;
			});
			// 监听歌曲播放时间
			$(this.audio).on('timeupdate', function(e) {
				var currentTime = this.currentTime * 1000;
				// console.log(currentTime);
				// 根据歌曲当前时间获取歌词的index
				if(lyricIndex < lyricData.length && currentTime >= lyricData[lyricIndex].time) {
					$lyric.css({
						top: -30 * lyricIndex + 'px'
					});
					lyricIndex ++;
				}
			});
		},
		// 播放
		play: function() {
			this.audio.play();
			this.status = 'play';
		},
		// 暂停
		pause: function() {
			this.audio.pause();
			this.status = 'pause';
		},
		// 更改音频src,接收歌词数据
		setAudioSource: function(src, data) {
			lyricData = data;
			lyricIndex = 1;
			this.audio.src = src;
			this.audio.load();
		},
		// 改变歌曲播放时段
		jumpToplay: function(time) {
			this.audio.currentTime = time;
			// 根据歌曲当前时间获取歌词的index
			var lyricLen = lyricData.length;
			if(lyricLen > 0 && time * 1000 >= lyricData[lyricLen - 1].time){
				lyricIndex = lyricLen - 1;
			}else{
				for(var i = 1; i < lyricLen; i ++) {
					if(lyricData[i].time >= time * 1000) {
						lyricIndex = i;
						break;
					}
				}
				$lyric.css({
					top: -30 * (lyricIndex - 1) + 'px'
				});
			}
			// console.log(lyricIndex);
			this.play();
		}
	}
	root.AudioManager = AudioManager;
})(window.Zepto, window.player || (window.player = {}));