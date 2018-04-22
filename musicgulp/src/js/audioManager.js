(function($, root) {
	var $scope = $(document.body);
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
			});
			$(this.audio).on('timeupdate', function(e) {
				console.log(this.currentTime);
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
		setAudioSource: function(src) {
			this.audio.src = src;
			this.audio.load();
		},
		jumpToplay: function(time) {
			this.audio.currentTime = time;
			this.play();
		}
	}
	root.AudioManager = AudioManager;
})(window.Zepto, window.player || (window.player = {}));