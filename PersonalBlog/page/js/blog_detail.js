var blogDetail = new Vue({
    el: "#blog_detail",
    data: {
        title: "",
        content: "",
        ctime: "",
        tags: "",
        views: ""
    },
    computed: {

    },
    created() {
        var searchUrlParams = location.search.indexOf("?") > -1 ? location.search.split("?")[1] : "";
        if(searchUrlParams == "") {
            return;
        }
        searchUrlParams = searchUrlParams.split("&");
        var bid = "";
        for(var i = 0; i < searchUrlParams.length; i ++) {
            var temp = searchUrlParams[i];
            if(temp.indexOf("=") > -1 && temp.split("=")[0] == "bid") {
                bid = parseInt(temp.split("=")[1]);
            }
        }
        axios({
            method: "get",
            url: "/queryBlogById?bid=" + bid
        }).then((resp) => {
            console.log(resp);
            var data = resp.data.data[0];
            this.title = data.title;
            this.content = data.content;
            this.ctime = data.ctime;
            this.views = data.views;
            this.tags = data.tags;
        }).catch((resp) => {
            console.log("请求错误：" + resp);
        })
    }
})