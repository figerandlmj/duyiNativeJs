(function($, root) {
	var $lyric = $('.lyric-wrapper');
	function renderLyric(data) {
		var html = '',
			len = data.length;
		for(var i = 0; i < len; i ++) {
			html += '<li>' + data[i].lyric + '</li>';
		}
		$lyric.html(html).css({
			top: 0
		});
	}
	root.lyric = {
		renderLyric: renderLyric
	};
})(window.Zepto, window.player || (window.player = {}));