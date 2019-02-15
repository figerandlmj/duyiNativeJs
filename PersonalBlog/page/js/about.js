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
                var bid = "-1";
                var reply = document.getElementById("comment_reply").value;
                var replyName = document.getElementById("comment_reply_name").value;
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
                    url: "/addComment?bid=" + bid + "&parent=" + reply + "&userName=" + name + "&email=" + email + "&content=" + content + "&parentName=" + replyName
                }).then((resp) => {
                    console.log(resp);
                    alert(resp.data.msg);
                    location.reload();
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
        reply() {
            return (commentId, userName) => {
                document.getElementById("comment_reply").value = commentId;
                document.getElementById("comment_reply_name").value = userName;
                location.href = "#send_comments";
            }
        }
    },
    created() {
        var bid = "-1";
        axios({
            method: "get",
            url: "/queryCommentsByBlogId?bid=" + bid
        }).then((resp) => {
            console.log(resp);
            var result = resp.data.data;
            var list = [];
            for(var i = 0; i < result.length; i ++) {
                var temp = {
                    id: result[i].id,
                    name: result[i].user_name,
                    ctime: result[i].ctime,
                    content: result[i].comments,
                    options: result[i].parent > -10 ? "回复@" + result[i].parent_name : "",
                };
                list.push(temp);
            }
            this.comments = list;
            this.total = list.length;
        }).catch((resp) => {
            console.log("请求错误：" + resp);
        })
    }
})