1.drag 拖拽  ie9兼容

事件
dragstart   开始被拖拽时触发
dragend     拖拽完成时触发
dragenter   拖拽元素进入目标元素
dragover    拖拽元素在目标元素上移动

drop        拖拽元素在目标元素上，鼠标放开时触发
			需要阻止dragover的默认行为才会触发drop事件

dragEvent 事件对象：
e.dataTransfer.setData("data", e.target.id);  传值
e.dataTransfer.getData("data");  取值

2.FileReader  读取文件  ie10兼容

abort() 终止读取
readAsBinaryString(file) 将文件读取为二进制编码
readAsDataURL(file) 将文件读取为DataURL编码
readAsText(file, [encoding]) 将文件读取为文本
readAsArrayBuffer(file) 将文件读取为arraybuffter

事件
onloadstart  读取开始时触发
onprogress    读取中
onloadend  读取完成触发 无论成功失败
onload  读取成功时触发
fr.onload = function() {
	this.result;//读取结果
}
onabort  中断时触发
onerror  出错时触发

3.webSocket  新协议  ie9兼容

服务器和客户端均可主动发送数据
不用频繁创建TCP请求及销毁请求，减少网络带宽资源的占用，同时节省服务器资源

HTTP 1.0   TCP长链接  设置keepAlive
HTTP 1.1   默认 TCP长链接

HTTP协议中 服务器不能主动联系客户端，只有客户端请求才有响应








