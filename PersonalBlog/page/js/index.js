var everyDay = new Vue({
	el: "#every_day",
	data: {
		content: `
			It's been my experience that you can nearly always enjoy something if you make up your mind firmly that you will.<br>

					我的经验是，事情只要下定决心去享受，就基本都能享受。———— 《小小安妮》
		`
	},
	computed: {
		getContent() {
			return this.content;
		}
	},
	created() {
		// 请求数据，给content赋值
		axios({
			method: "get",
			url: "/queryEveryDay",
		}).then((resp) => {
			console.log(resp);
			console.log(resp.data.data[0].content);
			this.content = resp.data.data[0].content;
		}).catch((resp) => {
			console.log("请求失败：" + resp);
		})
	}
});

var articleList = new Vue({
	el: "#article_list",
	data: {
		page: 1,
		pageSize: 2,
		count: 0,
		pageNumList: [],
		articleList: [
			// {
			// 	title: "四联杀幽门螺杆菌第三天",
			// 	content: "前段时间总是干呕嗳气，吃饭很容易饱，饭后恶心想吐，喝咖啡后更剧烈。首次医院门诊，医生说是可能是胃动力不足消化不良，给开了点儿中成药，没要。问医生是否可以做一下钡餐或胃镜检查一下，于是预约了第二天的胃镜。第一次做胃镜，很顺利。胃镜报告显示胃角C2慢性萎缩性胃炎。几天后活检的病理结果显示慢性萎缩性胃炎，中度萎缩，中度炎症，中度活动，中度肠上皮化生，HP++……好...",
			// 	data: "2018-10-30",
			// 	views: "578",
			// 	tags: "幽门螺杆菌 萎缩性胃炎",
			// 	id: "1",
			// 	link: ""
			// }
		]
	},
	computed: {
		getPage() {
            var searchUrlParams = location.search.indexOf("?") > -1 ? location.search.split("?")[1] : "";
            searchUrlParams = searchUrlParams.split("&");
            var tagId = "";
            for(var i = 0; i < searchUrlParams.length; i ++) {
                var temp = searchUrlParams[i];
                if(temp.indexOf("=") > -1 && temp.split("=")[0] == "tagId") {
                    tagId = parseInt(temp.split("=")[1]);
                }
            }

			if(tagId == "") {
                return function(page, pageSize) {
                    axios({
                        method: "get",
                        url: "/queryBlogByPage?page=" + (page - 1) + "&pageSize=" + pageSize
                    }).then((resp) => {
                        console.log(resp);
                        var result = resp.data.data;
                        var list = [];
                        for(var i = 0; i < result.length; i ++) {
                            var temp = {};
                            temp.title = result[i].title;
                            temp.content = result[i].content;
                            temp.date = result[i].ctime;
                            temp.views = result[i].views;
                            temp.tags = result[i].tags;
                            temp.id = result[i].id;
                            temp.link = "/blog_detail.html?bid=" + result[i].id;
                            list.push(temp);
                        }
                        this.articleList = list;
                        this.page = page;
                    }).catch((resp) => {
                        console.log("请求错误：" + resp);
                    });
                    axios({
                        method: "get",
                        url: "/queryBlogCount"
                    }).then((resp) => {
                        console.log(resp);
                        this.count = resp.data.data[0].count;
                        this.generatePageTool();
                    }).catch((resp) => {
                        console.log("请求错误：" + resp);
                    })
                };
			}else{
                return function(page, pageSize) {
                    axios({
                        method: "get",
                        url: "/queryBlogByTag?page=" + (page - 1) + "&pageSize=" + pageSize + "&tagId=" + tagId
                    }).then((resp) => {
                        console.log(resp);
                        var result = resp.data.data;
                        var list = [];
                        for(var i = 0; i < result.length; i ++) {
                            var temp = {};
                            temp.title = result[i].title;
                            temp.content = result[i].content;
                            temp.date = result[i].ctime;
                            temp.views = result[i].views;
                            temp.tags = result[i].tags;
                            temp.id = result[i].id;
                            temp.link = "/blog_detail.html?bid=" + result[i].id;
                            list.push(temp);
                        }
                        this.articleList = list;
                        this.page = page;
                    }).catch((resp) => {
                        console.log("请求错误：" + resp);
                    });
                    axios({
                        method: "get",
                        url: "/queryBlogCountByTag?tagId=" + tagId
                    }).then((resp) => {
                        console.log(resp);
                        this.count = resp.data.data[0].count;
                        this.generatePageTool();
                    }).catch((resp) => {
                        console.log("请求错误：" + resp);
                    })
                };
			}
		},
		generatePageTool() {
			return function() {
                var nowPage = this.page;
                var pageSize = this.pageSize;
                var totalCount = this.count;
                var result = [];
                result.push({text: "<<", page: 1});
                if(nowPage > 2) {
                    result.push({text: nowPage - 2, page: nowPage - 2});
                }
                if(nowPage > 1) {
                    result.push({text: nowPage - 1, page: nowPage - 1});
                }
                result.push({text: nowPage, page: nowPage});
                if((nowPage + 1) <= (totalCount + pageSize - 1) / pageSize) {
                    result.push({text: nowPage + 1, page: nowPage + 1});
                }
                if((nowPage + 2) <= (totalCount + pageSize - 1) / pageSize) {
                    result.push({text: nowPage + 2, page: nowPage + 2});
                }
                result.push({text: ">>", page: parseInt((totalCount + pageSize - 1) / pageSize)});
                this.pageNumList = result;
			};
		},
        jumpTo() {
			return function(pageText, page) {
                var nowPage = this.page;
				if(pageText == "<<" && nowPage == 1) {
                    return;
				}else if(pageText == ">>" && nowPage == parseInt((this.count + this.pageSize - 1) / this.pageSize)) {
                    return;
                }
                if(pageText == "<<") {
                    this.getPage(nowPage - 1, this.pageSize);
				}else if(pageText == ">>") {
                    this.getPage(nowPage + 1, this.pageSize);
                }else {
                    this.getPage(page, this.pageSize);
				}
			};
		}
	},
	created(){
		this.getPage(this.page, this.pageSize);
	}
})