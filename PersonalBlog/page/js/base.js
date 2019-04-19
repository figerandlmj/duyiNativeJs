var randomTags = new Vue({
	el: "#random_tags",
	data: {
		tags: ["蛋疼", "游戏", "selenium数据结构分区", "macwin7独立博客", "摄像头模拟", "styles+div", "五笔", "蛋疼", "游戏", "selenium数据结构分区", "macwin7独立博客", "摄像头模拟", "styles+div", "五笔"]
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
	},
	created() {
		axios({
			method: "get",
			url: "/queryRandomTags"
		}).then((resp) => {
			console.log(resp);
			this.tags = resp.data.data;
		}).catch((resp) => {
			console.log("请求出错：" + resp);
		})
	}
});

var newHot = new Vue({
	el: "#new_hot",
	data: {
		hotList: [
			// {
			// 	title: "查看你的AWS服务器已使用流量",
			// 	link: "http://www.baidu.com"
			// },
			// {
			// 	title: "查看你的AWS服务器已使用流量",
			// 	link: "http://www.baidu.com"
			// },
			// {
			// 	title: "查看你的AWS服务器已使用流量",
			// 	link: "http://www.baidu.com"
			// }
		]
	},
	created() {
        axios({
            method: "get",
            url: "/queryHotBlog?size=5"
        }).then((resp) => {
            console.log(resp);
            this.hotList = resp.data.data;
        }).catch((resp) => {
            console.log("请求出错：" + resp);
        })
	}
});

var newComments = new Vue({
	el: "#new_comments",
	data: {
		commentList: [
			// {
			// 	name: "阿杰学长" ,
			// 	date: "2018-10-20",
			// 	comment: "你好，启用ssl代理是SSL Pro赵晨阳"
			// },
			// {
			// 	name: "阿杰学长" ,
			// 	date: "2018-10-20",
			// 	comment: "你好，启用ssl代理是SSL Pro赵晨阳"
			// },
			// {
			// 	name: "阿杰学长" ,
			// 	date: "2018-10-20",
			// 	comment: "你好，启用ssl代理是SSL Pro赵晨阳"
			// }
		]
	},
    created() {
        axios({
            method: "get",
            url: "/queryNewComment?size=5"
        }).then((resp) => {
            console.log(resp);
            this.commentList = resp.data.data;
        }).catch((resp) => {
            console.log("请求出错：" + resp);
        })
    }
})