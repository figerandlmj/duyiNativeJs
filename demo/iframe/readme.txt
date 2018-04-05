应用：

Tab页导航；
在线编辑器；
广告植入；
历史记录管理，解决ajax历史回退问题 (h5的history)；
跨域通信
1. 脚本中设置document.domain相同

2. window.location.hash()  子页面访问父页面数据
   window.location.href()

3. window.name   父页面访问子页面数据

4. H5 PostMessage  


利弊：

阻塞页面加载，可以动态添加iframe的src来解决
