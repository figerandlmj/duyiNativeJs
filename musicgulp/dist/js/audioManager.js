(function($, root) {
	var $scope = $(document.body);
	var $lyric = $('.lyric-wrapper');
	var lyricData,
		lyricIndex = 1;
	function AudioManager() {
		this.audio = new Audio();
		this.status = 'pause';
		this.bindEvent();
	}
	AudioManager.prototype = {
		bindEvent: function() {
			// 监听歌曲是否播放完成事件
			$(this.audio).on('ended', function() {
				$scope.find('.next-btn').trigger('click');
				lyricIndex = 1;
			});
			$(this.audio).on('timeupdate', function(e) {
				// console.log(this.currentTime);
				var currentTime = this.currentTime * 1000;
				// console.log(lyricIndex)
				if(lyricIndex < lyricData.length && currentTime >= lyricData[lyricIndex].time) {
					$lyric.css({
						top: -30 * lyricIndex + 'px'
					});
					lyricIndex ++;
				}
			});
		},
		play: function() {
			this.audio.play();
			this.status = 'play';
		},
		pause: function() {
			this.audio.pause();
			this.status = 'pause';
		},
		setAudioSource: function(src, data) {
			lyricData = data;
			lyricIndex = 1;
			this.audio.src = src;
			this.audio.load();
		},
		jumpToplay: function(time) {
			this.audio.currentTime = time;
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