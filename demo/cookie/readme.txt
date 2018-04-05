浏览器标识特殊用户技术：

1.承载用户身份信息的http首部
firm   请求头   用户的email地址
user-agent  请求头 浏览器信息
referer  请求头  标记链接从何处跳转过来的 

2.客户端IP地址跟踪

3.url重置（胖url）

4.用户登录

5.cookie

临时存储：             永久存储：
页面关闭时失效         有时间限制

cookie由服务器来设置
4k左右

browser                 server						 
cookie: id='01'			set-cookie:  id='01'

获取cookie:
console.log(document.cookie);

设置cookie：(一般由服务器来设置)
document.cookie = 'name=dg;path=/';
document.cookie = 'age=30';


