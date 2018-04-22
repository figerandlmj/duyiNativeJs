var $ = window.Zepto;
var root = window.player;

var $scope = $(document.body);
var songList;
var controlManager;
var audio = new root.AudioManager();

function bindTouch() {
	var $slidePoint = $scope.find('.slider-point');
	var offset = $('.pro-wrapper').offset();
	var left = offset.left;
	var width = offset.width;
	$slidePoint.on('touchstart', function() {
		root.processor.stop();
	}).on('touchmove', function(e) {
		var x = e.changedTouches[0].clientX;
		var percent = (x - left) / width;
		if(percent > 1 || percent < 0) {
			percent = 0;
		}
		root.processor.updata(percent);
	}).on('touchend', function(e) {
		var x = e.changedTouches[0].clientX;
		var percent = (x - left) / width;
		if(percent > 1 || percent < 0) {
			percent = 0;
		}
		var curDuration = songList[controlManager.index].duration;
		var curTime = curDuration * percent;
		audio.jumpToplay(curTime);
		root.processor.start(percent);
		$scope.find('.play-btn').addClass('playing');
	})
}

function bindClick() {
	$scope.on('play:change', function(event, index, flag) {
		audio.setAudioSource(songList[index].audio);
		if(audio.status == 'play' || flag) {
			audio.play();
			root.processor.start();
			$scope.find('.play-btn').addClass('playing');
		}
		root.render(songList[index]);
		root.processor.renderAllTime(songList[index].duration);
		root.processor.updata(0);
	});
	$scope.on('click', '.prev-btn', function() {
		var index = controlManager.prev();
		// root.render(songList[index]);
		$scope.trigger('play:change', index);
	});
	$scope.on('click', '.next-btn', function() {
		var index = controlManager.next();
		// root.render(songList[index]);
		$scope.trigger('play:change', index);
	});
	$scope.on('click', '.play-btn', function() {
		if(audio.status == 'play') {
			audio.pause();
			root.processor.stop();
		}else{
			audio.play();
			root.processor.start();
		}
		$scope.find('.play-btn').toggleClass('playing');
	});
	$scope.on('click', '.list-btn', function() {
		root.playList.show(controlManager);
	});
}

function getData(url) {
	$.ajax({
		type: 'GET',
		url: url,
		success: function(data) {
			console.log(data);
			bindClick();
			bindTouch();
			root.playList.renderList(data);
			controlManager = new root.ControlManager(data.length);
			songList = data;
			// root.render(data[0]);
			audio.setAudioSource(songList[0].audio);
			$scope.trigger('play:change', 0);
		},
		error: function() {
			alert('get data error');
		}
	})
}

getData('./mock/data.json');