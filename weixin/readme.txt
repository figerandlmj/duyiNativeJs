nativeApp  webApp  hybridApp

SPA 单页面应用

微信公共平台  AppID(小程序ID) wx9d8be0faad0c163f

数据绑定  单向的数据绑定
组件化
模板
视图层 

1M以内

简单 用完即走
低频
性能要求不高
投票 外卖 滴滴打车 网易 豆瓣 

知乎 社区 问答社交平台 不适合
映客 花椒 斗鱼  直播 不适合
游戏应用 不适合

豆瓣api
http://api.douban.com

微信小程序访问api 403解决
nginx 代理

http://nginx.org/en/download.html  	nginx/Windows-1.14.0

配置
conf/nginx.conf   http-》server-》location

location / {
    proxy_store off;
    proxy_redirect off;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Referer 'no-referrer-when-downgrade';
    proxy_set_header User-Agent 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36';
    proxy_connect_timeout 600;
    proxy_read_timeout 600;
    proxy_send_timeout 600;
    proxy_pass https://api.douban.com;
}

cmd控制台
cd 下载的nginx解压目录
nginx 开启服务命令

https://api.douban.com/v2/movie/search?q=x&start=0&count=10
https://localhost/v2/movie/search?q=x&start=0&count=10




 
