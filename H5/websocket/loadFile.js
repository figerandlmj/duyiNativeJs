var FileLoader = function(file, events) {
	this.reader = new FileReader();
	this.file = file;//上传的文件
	this.total = file.size;//文件大小
	this.loaded = 0;//已读取文件大小
	this.events = events || {};//回调事件
	this.step = 1024 * 1024;// 每次读取1M
	this.readBlod(0);// 读取第一块
	this.bindEvent();//绑定事件
};

FileLoader.prototype = {
	bindEvent: function(events) {
		var _this = this,
			reader = this.reader;
		reader.onprogress = function(e) {
			_this.onProgress(e.loaded);
		};
		reader.onload = function() {
			_this.onLoad();
		};
	},
	onProgress: function(loaded) {
		var percent,
			handler = this.events.progress;
		this.loaded += loaded;
		percent = this.loaded / this.total * 100;//读取文件的百分比
		handler && handler(percent);//绘制进度条
	},
	onLoad: function() {
		var handler = this.events.load;

		handler && handler(this.reader.result);// 向后台上传读取的数据

		if(this.loaded < this.total) {//未读取完
			this.readBlod(this.loaded);
		}else{
			this.loaded = this.total;
			this.events.success && this.events.success();//执行上传成功函数
		}
	},
	readBlod: function(start) {//读取文件内容
		var blob,
			file = this.file;
		if(file.slice) {//是否可分块读取
			blob = file.slice(start, start + this.step);
		}else{
			blob = file;
		}
		this.reader.readAsText(blob);//将文件读取为文本
	}
}