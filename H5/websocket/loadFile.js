var FileLoader = function(file, events) {
	this.reader = new FileReader();
	this.file = file;
	this.loaded = 0;
	this.total = file.size;
	// 每次读取1M
	this.step = 1024 * 1024;
	this.events = events || {};
	// 读取第一块
	this.readBlod(0);
	this.bindEvent();
};

FileLoader.prototype = {
	bindEvent: function(events) {
		var _this = this，
			reader = this.reader;
		reader.onprogress = function(e) {
			_this.onProgress(e.loaded);
		};
		reader.onload = function(e) {
			_this.onLoad();
		};
	},
	onProgress: function(loaded) {
		var percent,
			handler = this.events.progress;
		this.loaded += loaded;
		percent = (this.loaded / this.total) * 100;
		handler && handler(percent);
	},
	onLoad: function() {
		var handler = this.events.load;
		// 发送读取数据
		handler && handler(this.reader.result);

		if(this.loaded < this.total) {//未读取完
			this.readBlod(this.loaded);
		}else{
			this.loaded = this.total;
			this.events.success && this.events.success();
		}
	},
	readBlod: function(start) {//读取文件内容
		var blob,
			file = this.file;
		if(file.slice) {
			blob = file.slice(start, start + this.step);
		}else{
			blob = file;
		}
		this.reader.readAsText(blob);
	}
}