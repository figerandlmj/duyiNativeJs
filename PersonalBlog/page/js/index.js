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
		}).then(function(resp) {
			console.log(resp.data.data[0].content);
			this.content = resp.data.data[0].content;
		}).catch(function(resp) {
			console.log("请求失败：" + resp);
		})
	}
});

var articleList = new Vue({
	el: "#article_list",
	data: {
		articleList: [
			{
				title: "四联杀幽门螺杆菌第三天",
				content: "前段时间总是干呕嗳气，吃饭很容易饱，饭后恶心想吐，喝咖啡后更剧烈。首次医院门诊，医生说是可能是胃动力不足消化不良，给开了点儿中成药，没要。问医生是否可以做一下钡餐或胃镜检查一下，于是预约了第二天的胃镜。第一次做胃镜，很顺利。胃镜报告显示胃角C2慢性萎缩性胃炎。几天后活检的病理结果显示慢性萎缩性胃炎，中度萎缩，中度炎症，中度活动，中度肠上皮化生，HP++……好...",
				data: "2018-10-30",
				views: "578",
				tags: "幽门螺杆菌 萎缩性胃炎",
				id: "1",
				link: ""
			},
			{
				title: "四联杀幽门螺杆菌第三天",
				content: "前段时间总是干呕嗳气，吃饭很容易饱，饭后恶心想吐，喝咖啡后更剧烈。首次医院门诊，医生说是可能是胃动力不足消化不良，给开了点儿中成药，没要。问医生是否可以做一下钡餐或胃镜检查一下，于是预约了第二天的胃镜。第一次做胃镜，很顺利。胃镜报告显示胃角C2慢性萎缩性胃炎。几天后活检的病理结果显示慢性萎缩性胃炎，中度萎缩，中度炎症，中度活动，中度肠上皮化生，HP++……好...",
				data: "2018-10-30",
				views: "578",
				tags: "幽门螺杆菌 萎缩性胃炎",
				id: "2",
				link: ""
			}
		]
	},
	computed: {

	},
	created(){

	}
})