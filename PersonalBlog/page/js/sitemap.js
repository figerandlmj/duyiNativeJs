var blogList = new Vue({
    el: "#blog_list",
    data: {
        blogList: []
    },
    computed: {

    },
    created() {
        axios({
            method: "get",
            url: "/queryAllBlog"
        }).then((resp) => {
            console.log(resp);
            this.blogList = resp.data.data;
        }).catch((resp) => {
            console.log("请求出错：" + resp);
        })
    }
})