(function($, root) {
	var $scope = $(document.body);
	var curDuration;
	var frameId;
	var lastPercent = 0;
	var startTime;
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
	function renderAllTime(duration){
		lastPercent = 0;
		curDuration = duration;
		var allTime = formatTime(duration);
		$scope.find('.all-time').html(allTime);
	}
	function updata(percent) {
		var curTime = percent * curDuration;
		curTime = formatTime(curTime);
		$scope.find('.cur-time').html(curTime);
		var percentage = (percent - 1) * 100 + '%';
		$scope.find('.pro-top').css({
			transform: 'translateX('+ percentage +')'
		});
	}
	function start(percentage) {
		// console.log(percentage);
		lastPercent = percentage === undefined ? lastPercent : percentage;
		cancelAnimationFrame(frameId);
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