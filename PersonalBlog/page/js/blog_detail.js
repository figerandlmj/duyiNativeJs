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

var sendComments = new Vue({
    el: "#send_comments",
    data: {
        vcode: "",
        codeText: ""
    },
    computed: {
        changeCode() {
            return () => {
                axios({
                    method: "get",
                    url: "/queryRandomCode"
                }).then((resp) => {
                    console.log(resp);
                    this.vcode = resp.data.data.data;
                    this.codeText = resp.data.data.text;
                }).catch((resp) => {
                    console.log("请求报错：" + resp);
                })
            }
        },
        sendComment() {
            return () => {
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
                var reply = document.getElementById("comment_reply").value;
                var name = document.getElementById("comment_name").value;
                var email = document.getElementById("comment_email").value;
                var content = document.getElementById("comment_content").value;
                var code = document.getElementById("comment_code").value;
                if(code != this.codeText) {
                    alert("请输入正确的验证码");
                    return;
                }
                axios({
                    method: "get",
                    url: "/addComment?bid=" + bid + "&parent=" + reply + "&userName=" + name + "&email=" + email + "&content=" + content
                }).then((resp) => {
                    console.log(resp);
                    alert(resp.data.msg);
                    document.getElementById("comment_name").value = "";
                    document.getElementById("comment_email").value = "";
                    document.getElementById("comment_content").value = "";
                    document.getElementById("comment_code").value = "";
                }).catch((resp) => {
                    console.log("请求出错：" + resp);
                })
            }
        }
    },
    created() {
        this.changeCode();
    }
})

var blogComments = new Vue({
    el: "#blog_comments",
    data: {
        total: 0,
        comments: [
            {
                id: "1",
                name: "figer",
                ctime: "2018年06月26日 12:37",
                content: "wordpress是后台管理框架吧？",
                options: ""
            }
        ]
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
            url: "/queryCommentsByBlogId?bid=" + bid
        }).then((resp) => {
            console.log(resp);
            var list = resp.data.data;
            var result = [];
            for(var i = 0; i < list.length; i ++) {
                var temp = {
                    id: list[i].id,
                    name: list[i].user_name,
                    ctime: list[i].ctime,
                    content: list[i].comments,
                    options: list[i].id,
                };
                result.push(temp);
            }
            this.comments = result;
        }).catch((resp) => {
            console.log("请求错误：" + resp);
        })
    }
})