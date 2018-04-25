(function($, root) {
	var $scope = $(document.body);
	var curDuration;
	var frameId;
	var lastPercent = 0;
	var startTime;
	// 时间s转换成00:00格式
	function formatTime(duration) {
		duration = Math.round(duration);
		var minute = Math.floor(duration / 60);
		var second = duration - minute * 60;
		if(minute < 10) {
			minute = '0' + minute;
		}
		if(second < 10) {
			second = '0' + second;
		}
		return minute + ':' + second;
	}
	// 渲染歌曲总时间
	function renderAllTime(duration){
		lastPercent = 0;
		curDuration = duration;
		var allTime = formatTime(duration);
		$scope.find('.all-time').html(allTime);
	}
	// 渲染当前时间和当前进度条
	function updata(percent) {
		var curTime = percent * curDuration;
		curTime = formatTime(curTime);
		$scope.find('.cur-time').html(curTime);
		var percentage = (percent - 1) * 100 + '%';
		$scope.find('.pro-top').css({
			transform: 'translateX('+ percentage +')'
		});
	}
	// 循环计算播放的进度比percent
	function start(percentage) {
		// console.log(percentage);
		// percentage有值 lastPercent=percentage  手动改变进度时
		// percentage没值 lastPercent=lastPercent
		lastPercent = percentage === undefined ? lastPercent : percentage;
		cancelAnimationFrame(frameId);
		// 循环计算播放的进度比percent
		startTime = new Date().getTime();
		function frame() {
			var curTime = new Date().getTime();
			var percent = lastPercent + (curTime - startTime) / (curDuration * 1000);
			if(percent < 1) {
				frameId = requestAnimationFrame(frame);//16ms执行一次
				updata(percent);
			}else{
				cancelAnimationFrame(frameId);
			}
			// console.log(percent);
		}
		frame();
	}
	// 结束播放进度
	function stop() {
		var stopTime = new Date().getTime();
		lastPercent = lastPercent + (stopTime - startTime) / (curDuration * 1000);
		cancelAnimationFrame(frameId);
	}
	root.processor = {
		renderAllTime: renderAllTime,
		start: start,
		stop: stop,
		updata: updata
	};
})(window.Zepto, window.player || (window.player = {}));