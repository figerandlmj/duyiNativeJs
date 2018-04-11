1. requestAnimationFrame 优化动画 

计时器 掉帧 

浏览器刷新前自动执行 
1000ms 60fps  约为 16ms/fps
cancelAnimationFrame 取消
用法类似setTimeout
ie10 以上浏览器

encodeURIComponent()  编码
decodeURIComponent()  解码

2.客户端存储

cookie：

4k左右
navigator.cookieEnabled 是否启用了cookie

storage：ie8以后浏览器兼容

sessionStorage              localStorage
临时存储，窗口关闭消失      永久存储,可手动删除
同源 + 窗口                 同源

localStorage.name = 'figer';
localStorage.info = JSON.Stringify({name:'figer',age:18});

localStorage API
localStorage.setItem(name, value);
localStorage.getItem(name);
localStorage.removeItem(name);
localStorage.clear();//清除属性


cookie                                      localStorage             sessionStorage
一般由服务器生成，可设置失效时间            除非清除，否则永久保存   关闭页面或浏览器后被清除 
在浏览器生成，默认关闭浏览器后失效   

4k左右                                       一般5M

每次请求都在http头中，若过大会有性能问题    仅在客户端存储

自己封装存取方法                             有原生接口供存取


3. history

history.back();
history.forward();
history.go(n);

管理历史记录

history.pushState(state, title, url);//添加一条历史记录
history.replaceState(state, title, url);//替换当前历史记录

注：改变历史记录，但是不刷新页面

popstate事件  历史记录发生改变是触发（不包括pushState和replaceState的改变）

hashchange事件  页面hash值发生改变时触发，用于构建单页面应用


4. worker 异步操作

var worker = new Worker(worker.js);

worker文件与主文件要满足同源策略

worker与主线程之间的通信：

postMessage(n)方法  发送数据
message事件 接收数据

结束worker:

close()  在worker.js作用域中调用
terminate()  在主线程的worker对象上调用

其他特性：

1. importScripts('./math1.js', 'math2.js');
worker是window子集，不能获取到window,document,不能引入jquery,可以引入一些计算类的库

2.作用域globalWorkerScope：

可以继续生成worker对象，兼容性不好，chrome不支持
navigator
XMLHttpRequest
setTimeout/setInterval














