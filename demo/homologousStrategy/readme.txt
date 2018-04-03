同源策略：

针对浏览器

协议         域名            端口
http/https   www.baidu.com   http默认80 https默认443
ws/wss

顶级域名
国际  .com商业机构  .org非盈利组织  .net从事互联网服务的机构
国家  .cn   .hk

.com（一级域名）.cn（顶级域名）  国内商业机构
.net.cn  国内互联网机构
.org.cn  国内非盈利性组织

baidu.com  （一）二级域名

www.baidu.com  特殊的三级域名   以前的服务（万维网www 文件传输ftp 邮件e-mail  远程登录telnet）

zhidao.baidu.com  （二）三级域名

裸域名 只能绑定dns 的a记录（指定域名的ip地址），不能绑定别名

www 可以绑定别名  如果服务器搬迁了，用户的a记录不需要更新，只需要把服务器绑定新的别名


ajax 受同源策略限制

h5中ajax允许跨域  但是需要后台配置响应头

https://www.baidu.com

1.浏览器通过DNS域名解析到服务IP
dns客户端  读取url，抽取域名字段  发送主机名给  dns服务器   解析域名并返回ip地址给 dns客户端 然后向ip地址发送http请求

2.浏览器通过TCP协议建立服务器的TCP连接
三次握手：
浏览器发送syn包请求    服务器发送ack包       浏览器发送确认数据包   

3.浏览器向服务器发送HTTP协议包，请求服务器的资源文档

4.服务器向浏览器发送HTTP应答包

5.浏览器和服务器断开，客户端开始解释处理HTML文档
四次挥手：
浏览器发送中断请求fin  服务器收到请求发送处理中的消息    服务器处理完发送断开消息  客户端等待确定服务器没有再次发送消息后断开连接   


传输层协议：
TCP  更加可靠
UDP  面向非链接

应用层协议：
http
https

http请求报文
头  行   主体

http响应报文
头  行   主体

get  请求数据  数据长度限制  数据在url中
post  提交数据  数据在主体中

状态码：
1   信息    接到请求继续处理
2   成功
	200
3   重定向
	301/302 临时/永久重定向
	304 上次缓存资源没有改变过
4   客户端错误    
	404 请求内容不存在
5   服务器错误
	500 服务器暂时不可用
	503 服务器内部错误

浏览器自带缓存机制：

304 上次缓存资源没有改变过   
请求头 if-none-match   if-modifined-since
响应头 etag  last-modified

Date:服务器响应内容日期

cache-control:内容缓存时间
no-cache
no-store
max-age
min-fresh
max-stale

expires：内容保质期

expires 和 cache-control 同时存在 ，以cache-control为准

referrer  统计用户从何点击
















