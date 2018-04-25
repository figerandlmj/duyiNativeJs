(function($, root) {
	// 记录当前歌曲的index
	function ControlManager(len) {
		this.index = 0;
		this.len = len;
	}
	ControlManager.prototype = {
		// 获取上一首的index
		prev: function() {
			return this.getIndex(-1);
		},
		// 获取下一首的index
		next: function() {
			return this.getIndex(1);
		},
		getIndex: function(val) {
			var index = this.index,
				len = this.len;
			var curIndex = (index + val + len) % len;
			this.index = curIndex;
			return curIndex;
		}
	}
	root.ControlManager = ControlManager;
})(window.Zepto, window.player || (window.player = {}));