var randomTags = new Vue({
	el: "#random_tags",
	data: {
		tags: ["蛋疼", "游戏", "selenium数据结构分区", "macwin7独立博客", "摄像头模拟", "css+div", "五笔", "蛋疼", "游戏", "selenium数据结构分区", "macwin7独立博客", "摄像头模拟", "css+div", "五笔"]
	},
	computed: {
		randomColor() {
			return function() {
				var red = Math.random() *255;
				var green = Math.random() *255;
				var blue = Math.random() *255;
				return "rgb(" + red + ", " + green + ", " + blue + ")";
			}
		},
		randomSize() {
			return function() {
				var size = (Math.random() * 20 + 12) + "px";
				return size;
			}
		}
	}
});

var newHot = new Vue({
	el: "#new_hot",
	data: {
		hotList: [
			{
				title: "查看你的AWS服务器已使用流量",
				link: "http://www.baidu.com"
			},
			{
				title: "查看你的AWS服务器已使用流量",
				link: "http://www.baidu.com"
			},
			{
				title: "查看你的AWS服务器已使用流量",
				link: "http://www.baidu.com"
			}
		]
	}
});

var newComments = new Vue({
	el: "#new_comments",
	data: {
		commentList: [
			{
				name: "阿杰学长" ,
				date: "2018-10-20",
				comment: "你好，启用ssl代理是SSL Pro赵晨阳"
			},
			{
				name: "阿杰学长" ,
				date: "2018-10-20",
				comment: "你好，启用ssl代理是SSL Pro赵晨阳"
			},
			{
				name: "阿杰学长" ,
				date: "2018-10-20",
				comment: "你好，启用ssl代理是SSL Pro赵晨阳"
			}
		]
	}
})