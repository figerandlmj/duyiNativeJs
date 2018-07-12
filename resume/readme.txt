五百丁
http://www.500d.me/
乔布简历
http://cv.qiaobutang.com/

现在技术能力 未来可能性 团队合作性
小公司怕人员流动
大公司创造力，符合企业文化，核心价值观

拉钩 各大公司招聘官网 boss直聘 猎聘 


一、响应式开发方式
1.head头部设置 meta viewport
2.媒体查询 media 根据不同屏幕大小给予不同的样式
3.flex弹性盒子布局，容器和项目
4.百分比
5.bootstrap框架
6.vw vh
7.rem
8.取分辨率两倍的图片，手机物理像素与实际像素不一致，显示屏固定时，分辨率越大越清晰
标准设备一位图像素对应的就是一设备像素
Retina屏幕

四、重复提交
1.cookie记录提交表单的状态
2.设置disabled为false
3.在数据库里添加唯一约束或唯一索引，防止出现重复数据
4.beforeSend函数， $("#submit").attr({ disabled: "disabled" });$("loading").show();向服务器发送请求前执行一些动作
complete  $("#submit").removeAttr("disabled"); $("loading").hide();方法执行完后调用

abort()这个方法把 XMLHttpRequest 对象重置为 readyState 为 0 的状态，并且取消所有未决的网络活动。例如，如果请求用了太长时间，而且响应不再必要的时候，可以调用这个方法


	JS获取宽高

	1.  dom.style.width/height 

	　　这种方式只能取到dom元素内联样式所设置的宽高，也就是说如果该节点的样式是在style标签中或外联的CSS文件中设置的话，通过这种方法是获取不到dom的宽高的。

	2. dom.currentStyle.width/height 

	　　这种方式获取的是在页面渲染完成后的结果，就是说不管是哪种方式设置的样式，都能获取到。

	　　但这种方式只有IE浏览器支持。

	3. window.getComputedStyle(dom).width/height

	　　这种方式的原理和2是一样的，这个可以兼容更多的浏览器，通用性好一些。

	4. dom.getBoundingClientRect().width/height

	　　这种方式是根据元素在视窗中的绝对位置来获取宽高的

	5.dom.offsetWidth/offsetHeight

	　　这个就没什么好说的了，最常用的，也是兼容最好的。

	边距重叠
	父元素没有设置margin-top，而子元素设置了margin-top：20px;可以看出，父元素也一起有了边距


	解决方案
	BFC  块级格式化上下文

	1.给父元素设置边框

	2.给父元素添加padding

	3.在子元素上方加一个有宽高的兄弟元素，记住是有宽高的

	4.给父元素设置 overflow: hidden; 属性

	5.给子元素设置 display: inline-block；

	6.使子元素脱离文档流这个实现的方法有很多，浮动，绝对定位等

七、定位position
1.static:   默认值，即标准流

2.relative:   相对定位，相对于元素原始位置进行定位，可以通过 left 、right、top、bottom 	属性来确定元素相对正常文档流位置的偏移的定位，后写的元素默认大于先写的元素的层级； 设置 left 元素右移（相对于窗口），设置 right 元素左移，设置 top 元素下移，设置 bottom 元素上移 ，或者说 left top x轴在右，y轴在下，right、bottom x轴在左，y轴在上。

3.absolute :  绝对定位，相对于祖先元素，若祖先元素没有定位属性，则子元素会相对于当前窗口定位，可以通过 left、 right、bottom、top属性来确定元素相对于祖先元素或当前界面的偏移定位，脱离了标准文档流，即文档流中没有这个元素，

4.fixed:固定定位，不收任何元素的影响

5.inherit:继承，继承父元素的定位属性，若父元素是relative 则其也是relative

z-index 大的元素会覆盖 小的元素，z-index 为负值，元素被普通流中的元素覆盖


八、jquery原理
强悍的dom元素查找能力，以及随心所欲的方法扩展，这两点正是jQuery的核心所在！
jQuery的本质就是向函数传入一个dom对象，返回一个拥有更多，更好用方法的新对象。

jQuery实质上是一个构造函数，该构造函数接受一个参数，jQuery通过这个参数利用原生API找到节点，之后返回一个方法对象，该方法对象上的方法对节点进行操作(方法使用了闭包)。

对原生函数的封装，然后链式调用。就是把函数都挂在jquery对象的prototype下，然后每个函数结尾都会
return this，这样就可以一直在后边调用函数

九、闭包原理及使用场景

闭包就是能够读取其他函数内部变量的函数

可以读取父函数内部的变量
可以在父函数执行完之后还保留其内部变量
在定义时只取得变量的引用，在执行时才会实际取值

闭包就是由函数创造的一个词法作用域，里面创建的变量被引用后，可以在这个词法环境之外自由使用。
闭包通常用来创建内部变量，使得这些变量不能被外部随意修改，同时又可以通过指定的函数接口来操作。

闭包主要用于保留住局部变量，不让它被改变或者被垃圾回收
a.缓存数据提高计算速度
b.惰性函数
c.函数柯里化
把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术

function outer(){
    var n = 1;
    return {
        get_n:function (){
            return n;
        },
        set_n:function (s){
            n = s;
        }
    }
}
var o = outer();
console.log(o.get_n());//1
o.set_n(2);
console.log(o.get_n());//1


function outer(){
    var result = [];
    for(var i = 0;i < 3;i++){
        result[i] = (function (i){
             return function (){
                console.log(i);
            }
        })(i);
    }
    return result;
}
var o = outer();
o[0]();
o[1]();
o[2]();


十、JS字符串转成驼峰

function tranformStr1(str){
    var strArr=str.split('-');
    for(var i=1;i<strArr.length;i++){
        strArr[i]=strArr[i].charAt(0).toUpperCase()+strArr[i].substring(1);
    }
    return strArr.join('');
}

function tranformStr2(str){
    var strArr=str.split('');
    for(var i=1;i<strArr.length;i++){
        if(strArr[i]=='-'){
            //删除'-'
            strArr.splice(i,1);
            //转大写
            if(i<strArr.length){
                strArr[i]=strArr[i].toUpperCase();
            }
        }
    }
    return strArr.join('');
}

function transformStr3(str){
    var re=/-(\w)/g;
    return str.replace(re,function ($0,$1){
        return $1.toUpperCase();
    });
}

十一、遍历


1.用for循环遍历数组
用for-in遍历对象
用for-of遍历类数组对象（ES6）
用Object.keys()获取对象属性名的集合

	/****js原生遍历****/
	//for循环遍历数组
	for(var i=0;i<arrTmp.length;i++){
	    console.log(i+": "+arrTmp[i])
	}
	 

	//forEach遍历数组，三个参数依次是数组元素、索引、数组本身，ie9+
	for循环和for-in能正确响应break、continue和return语句，但forEach不行。
	arrTmp.forEach(function(value,index,array){
	    console.log(value+","+index+","+array[index])
	})

	//for-in遍历对象属性,i指代属性名
	for-in循环是为了遍历对象而设计的，事实上for-in也能用来遍历数组，但定义的索引i是字符串类型的。如果数组具有一个可枚举的方法，也会被for-in遍历到

	for(var i in objTmp){
	    console.log(i+": "+objTmp[i])
	}

ES6中，新增了for-of遍历方法。它被设计用来遍历各种类数组集合，例如DOM NodeList对象、Map和Set对象，甚至字符串也行

	// for-of遍历数组，不带索引，i即为数组元素
	for(let i of arrTmp){
	    console.log(i)
	}
	//输出 "value1" "value2" "value3"
	 
	// for-of遍历Map对象
	let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);
	for (let [key, value] of iterable) {
	  console.log(value);
	}
	//输出 1 2 3
	 
	// for-of遍历字符串
	let iterable = "china中国";
	for (let value of iterable) {
	  console.log(value);
	}
	//输出 "c" "h" "i" "n" "a" "中" "国"

如果单纯的想获取对象的属性名，js有原生的Object.keys()方法（低版本IE不兼容）,返回一个由对象的可枚举属性名组成的数组

	/****Object.keys()返回键名数组****/
	//数组类型
	let arr = ["a", "b", "c"];
	console.log(Object.keys(arr));
	// (3) ['0', '1', '2']
	 
	// 类数组对象
	let anObj = { 100: 'a', 2: 'b', 7: 'c' };
	console.log(Object.keys(anObj));
	// (3) ['2', '7', '100']
	 
	//一般对象
	let xyz = {z: "zzz", x: "xxx", y: "yyy"};
	console.log(Object.keys(xyz));
	// (3) ["z", "x", "y"]


2.jQuery的遍历方法通常被用来遍历DOM元素，用于数组和对象的是$.each()方法，它接受两个参数，分别指代属性名/数组索引和属性值/数组元素

	/****$.each()遍历对象和数组****/
	$.each(arrTmp,function(index,value){
	    console.log(index+": "+value)
	});
	 
	$.each(objTmp,function(key,value){
	    console.log(key+": "+value)
	});

3.underscore.js是一个较流行的插件库，它封住了一些对数组和对象的处理方法。_.each()就用来遍历

	var arrTmp = ["value1", "value2", "value3"];
	var objTmp = {
	    aa: "value1",
	    bb: "value2",
	    cc: function () {
	        console.log("value3")
	    }
	};
	 
	//_.each()接受三个参数，分别指代键值、键名和被遍历的对象本身
	_.each(arrTmp,function(value,index,array){
	    console.log(index +","+ value +","+ array[index])
	})
	_.each(objTmp,function(value,key,obj){
	    console.log(key +","+ value +","+ obj[key])
	})

indexOf()方法 返回根据给定元素找到的第一个索引值，否则返回-1。

	var arr = ["a", "b", "c"];
	alert(arr.indexOf("b")); // 1

forEach() 方法让数组的每一项都执行一次给定的函数。forEach()方法会修改原数组。
	var arr = ["a", "b", "c", "a", "d", "a"];
	arr.forEach(function(ele, index, array){
	    if(ele == "a") {
	        array[index] = "**";
	    }
	});
	alert(newArr); // ["**", "b", "c", "**", "d", "**"]

map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。

	var arr = ["a", "b", "c"];
	var newArr = arr.map(function(ele, index, array){
	    ele += "12";
	    return ele;
	});
	alert(newArr); // ["a12", "b12", "c12"]


filter() 方法利用所有通过指定函数测试的元素创建一个新的数组，并返回。

	var arr = [1, 2, 3, 4, 3, 2, 5];
	var newArr = arr.filter(function(ele, index, array){
	    if(ele < 3) {
	        return true;
	    }else {
	        return false;
	    }
	});
	alert(newArr); // [1, 2, 2]

some() 方法测试数组中的某些元素是否通过了指定函数的测试。返回布尔值。some() 被调用时不会改变数组。

	var arr = [1, 2, 3, 4, 3, 2, 5];
	var newArr = arr.some(function(ele, index, array){
	    if(ele < 2) {
	        return true;
	    }else {
	        return false;
	    }
	});
	alert(newArr); // true

every() 方法测试数组的所有元素是否都通过了指定函数的测试。every() 不会改变原数组。

	var arr = [1, 2, 3, 4, 3, 2, 5];
	var newArr = arr.every(function(ele, index, array){
	    if(ele < 3) {
	        return true;
	    }else {
	        return false;
	    }
	});
	alert(newArr); // false


十二、http请求响应头的内容，http状态码

TCP/IP协议
	为什么要三次握手
		为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。
	为什么要四次分手
		TCP协议是一种面向连接的、可靠的、基于字节流的运输层通信协议。TCP是全双工模式，这就意味着，当主机1发出FIN报文段时，只是表示主机1已经没有数据要发送了，主机1告诉主机2，它的数据已经全部发送完毕了；但是，这个时候主机1还是可以接受来自主机2的数据；当主机2返回ACK报文段时，表示它已经知道主机1没有数据发送了，但是主机2还是可以发送数据到主机1的；当主机2也发送了FIN报文段时，这个时候就表示主机2也没有数据要发送了，就会告诉主机1，我也没有数据要发送了，之后彼此就会愉快的中断这次TCP连接。

有时需要对用户之前的HTTP通信状态进行保存，比如执行一次登陆操作，在30分钟内所有的请求都不需要再次登陆。于是引入了Cookie技术。

HTTP/1.1想出了持久连接（HTTP keep-alive）方法。其特点是，只要任意一端没有明确提出断开连接，则保持TCP连接状态，在请求首部字段中的Connection: keep-alive即为表明使用了持久连接。

一个HTTP请求报文由请求行（request line）、请求头部（header）、空行和请求数据4个部分组成
	POST 　/index.php　HTTP/1.1 　　 请求行
	Host: localhost
	User-Agent: Mozilla/5.0 (Windows NT 5.1; rv:10.0.2) Gecko/20100101 Firefox/10.0.2　　请求头
	Accept: text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8
	Accept-Language: zh-cn,zh;q=0.5
	Accept-Encoding: gzip, deflate
	Connection: keep-alive
	Referer: http://localhost/
	Content-Length：25
	Content-Type：application/x-www-form-urlencoded
	　　空行
	username=aa&password=1234　　请求数据

	1.请求行分为三个部分：请求方法、请求地址和协议版本

		HTTP/1.1 定义的请求方法有8种：GET、POST、PUT、DELETE、PATCH、HEAD、OPTIONS、TRACE。

	2.请求头部为请求报文添加了一些附加信息，由“名/值”对组成，每行一对，名和值之间使用冒号分隔。

		host 接收请求的服务器地址
		user-agent 发送请求的用用程序名称
		connection 指定与连接相关的属性 keep-alive
		accept-charset 通知服务器可以发送的编码格式
		accept-encoding 通知服务器可以发送的数据压缩格式
		accept-language 通知服务器可以发送的语言
		Referer的作用？表示一个来源 指示一个请求是从哪里链接过来
			直接在浏览器的地址栏中输入一个资源的URL地址，那么这种请求是不会包含 Referer  字段的，因为这是一个“凭空产生”的 HTTP  请求，并不是从一个地方链接过去的。
			1.防盗链。
			将这个http请求发给服务器后，如果服务器要求必须是某个地址或者某几个地址才能访问，而你发送的referer不符合他的要求，就会拦截或者跳转到他要求的地址，然后再通过这个地址进行访问。
			那么在防盗链设置中，允许空Referer和不允许空Referer有什么区别？
			允许 Referer  为空，意味着你允许比如浏览器直接访问，就是空。
			2.防止恶意请求。
			比如静态请求是*.html结尾的，动态请求是*.shtml，那么由此可以这么用，所有的*.shtml请求，必须 Referer  为我自己的网站。
		Content-Length用于描述HTTP消息实体的传输长度
			1、在Http 1.0及之前版本中，content-length字段可有可无。
			2、在http1.1及之后版本。如果是keep alive，则content-length和chunk必然是二选一。若是非keep alive，则和http1.0一样。content-length可有可无。
		Content-Type
  			互联网媒体类型；也叫做MIME类型，在Http协议消息头中，使用Content-Type来表示具体请求中的媒体类型信息。
			例如： Content-Type: text/html;charset:utf-8;
			常见的媒体格式类型如下：
			    text/html ： HTML格式
			    text/plain ：纯文本格式      
			    text/xml ：  XML格式
			    image/gif ：gif图片格式    
			    image/jpeg ：jpg图片格式 
			    image/png：png图片格式
   			以application开头的媒体格式类型：
			   application/xhtml+xml ：XHTML格式
			   application/xml     ： XML数据格式
			   application/atom+xml  ：Atom XML聚合格式    
			   application/json    ： JSON数据格式
			   application/pdf       ：pdf格式  
			   application/msword  ： Word文档格式
			   application/octet-stream ： 二进制流数据（如常见的文件下载）
			   application/x-www-form-urlencoded ： <form encType=””>中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）
   			另外一种常见的媒体格式是上传文件之时使用的：
   			   multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式
	3.请求数据 可选部分，比如GET请求就没有请求数据。

HTTP响应报文主要由状态行、响应头部、空行以及响应数据组成。
	HTTP/1.1 200 OK　　状态行
	Date: Sun, 17 Mar 2013 08:12:54 GMT　　响应头部
	Server: Apache/2.2.8 (Win32) PHP/5.2.5
	X-Powered-By: PHP/5.2.5
	Set-Cookie: PHPSESSID=c0huq7pdkmm5gg6osoe3mgjmm3; path=/
	Expires: Thu, 19 Nov 1981 08:52:00 GMT
	Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0
	Pragma: no-cache
	Content-Length: 4393
	Keep-Alive: timeout=5, max=100
	Connection: Keep-Alive
	Content-Type: text/html; charset=utf-8
	　　空行

	<html>　　响应数据
	<head>
	<title>HTTP响应示例<title>
	</head>
	<body>
	Hello HTTP!
	</body>
	</html>
	1.状态行
		由3部分组成，分别为：协议版本，状态码，状态码描述。
		其中协议版本与请求报文一致，状态码描述是对状态码的简单描述，所以状态代码为3位数字。
		1xx：指示信息--表示请求已接收，继续处理。
		2xx：成功--表示请求已被成功接收、理解、接受。
		3xx：重定向--要完成请求必须进行更进一步的操作。
		4xx：客户端错误--请求有语法错误或请求无法实现。
		5xx：服务器端错误--服务器未能实现合法的请求。

		200 响应成功
		302 跳转，跳转地址通过响应头中的location指定
		400 客户端请求有语法错误，不被服务器识别
		403 服务器收到请求，但是拒绝服务（认证失败）
		404 请求资源不存在
		500 服务器内部错误

	2.响应头部

	与请求头部类似，为响应报文添加了一些附加信息
	server 服务器应用程序软件的名称和版本
	content-type 响应正文的类型（是图片还是二进制字符串）
	content-length 响应正文长度
	content-charset 响应正文使用的编码
	content-encoding 响应正文使用的数据压缩格式
	centent-language 响应正文使用的语言

	3.响应数据

	用于存放需要返回给客户端的数据信息。



十三、浏览器端的九种缓存机制
http://www.techweb.com.cn/network/system/2016-01-05/2252395.shtml
打开浏览器的调试模式->resources左侧就有浏览器的8种缓存机制
	frames
	web sql
	indexedDB
	local storage
	session storage
	cookies
	application cache
	cache storage
1.http缓存 基于HTTP协议的浏览器文件级缓存机制

	◆判断expires，如果未过期，直接读取http缓存文件，不发http请求，否则进入下一步。
	◆判断是否含有etag，有则带上if-none-match发送请求，未修改返回304，修改返回200，否则进入下一步。
	◆判断是否含有last-modified，有则带上if-modified-since发送请求，无效返回200，有效返回304，否则直接向服务器请求。
2.websql  websql这种方式只有较新的chrome浏览器支持，并以一个独立规范形式出现
	◆Web Sql 数据库API 实际上不是HTML5规范的组成部分;
	◆在HTML5之前就已经存在了，是单独的规范;
	◆它是将数据以数据库的形式存储在客户端，根据需求去读取;
	◆跟Storage的区别是： Storage和Cookie都是以键值对的形式存在的;
	◆Web Sql 更方便于检索，允许sql语句查询;
	◆让浏览器实现小型数据库存储功能;
	◆这个数据库是集成在浏览器里面的，目前主流浏览器基本都已支持;
	websql API主要包含三个核心方法：
		◆openDatabase : 这个方法使用现有数据库或创建新数据库创建数据库对象。
		◆transaction : 这个方法允许我们根据情况控制事务提交或回滚。
		◆executeSql : 这个方法用于执行真实的SQL查询。 
3.indexDB  一个为了能够在客户端存储可观数量的结构化数据，并且在这些数据上使用索引进行高性能检索的 API

	IndexedDB 分别为同步和异步访问提供了单独的 API 。同步 API 本来是要用于仅供 Web Workers 内部使用，但是还没有被任何浏览器所实现。异步 API 在 Web Workers 内部和外部都可以使用，另外浏览器可能对indexDB有50M大小的限制，一般用户保存大量用户数据并要求数据之间有搜索需要的场景。

4.cookie
	Cookie(或者Cookies)，指一般网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据(通常经过加密)。cookie一般通过http请求中在头部一起发送到服务器端。一条cookie记录主要由键、值、域、过期时间、大小组成，一般用户保存用户的认证信息。cookie最大长度和域名个数由不同浏览器决定

	不同域名之间的cookie信息是独立的，如果需要设置共享可以在服务器端设置cookie的path和domain来实现共享。浏览器端也可以通过document.cookie来获取cookie，并通过js浏览器端也可以方便地读取/设置cookie的值

5.localstorage

	localStorage是html5的一种新的本地缓存方案，目前用的比较多，一般用来存储ajax返回的数据，加快下次页面打开时的渲染速度。
	值得注意的是，localstorage大小有限制，不适合存放过多的数据，如果数据存放超过最大限制会报错，并移除最先保存的数据。

6.sessionstorage
	sessionStorage和localstorage类似，但是浏览器关闭则会全部删除，api和localstorage相同，实际项目中使用较少。

7.application cache

	application cahce是将大部分图片资源、js、css等静态资源放在manifest文件配置中。当页面打开时通过manifest文件来读取本地文件或是请求服务器文件。

	离线访问对基于网络的应用而言越来越重要。虽然所有浏览器都有缓存机制，但它们并不可靠，也不一定总能起到预期的作用。HTML5 使用ApplicationCache 接口可以解决由离线带来的部分难题。前提是你需要访问的web页面至少被在线访问过一次

	◆离线浏览 – 用户可在离线时浏览您的完整网站。
	◆速度 – 缓存资源为本地资源，因此加载速度较快。
	◆服务器负载更少 – 浏览器只会从发生了更改的服务器下载资源。

8.cacheStorage

	CacheStorage是在ServiceWorker的规范中定义的。CacheStorage 可以保存每个serverWorker申明的cache对象，cacheStorage有open、match、has、delete、keys五个核心方法，可以对cache对象的不同匹配进行不同的响应。
9.flash缓存
	这种方式基本不用，这一方法主要基于flash有读写浏览器端本地目录的功能，同时也可以向js提供调用的api，则页面可以通过js调用flash去读写特定的磁盘目录，达到本地数据缓存的目的。



十四、react基础、生命周期和渲染

实例化
	页面首次进入，渲染触发的生命周期是：

	初始化
	componentWillMount
	render
	componentDidMount
	render函数执行以后，DOM结构已经生成，此时在componentDidMount这个周期中可以有些DOM 上的操作。页面渲染完成后，执行完componentDidMount周期，从此以后，这四个周期就结束了。只要不是初次渲染，这几个周期就不在执行了。接下来的周期才是react重点

存在期
	实例化后，当props或者state发生变化时，下面方法依次被调用：

	componentWillReceiveProps
	每当我们通过父组件更新子组件props时（这个也是唯一途径），这个方法就会被调用。

	componentWillReceiveProps(nextProps){}
	shouldComponentUpdate
	字面意思，是否应该更新组件，默认返回true。当返回false时，后期函数就不会调用，组件不会在次渲染。shouldComponentUpdate这个生命周期，是一个比较重要的生命周期，可以优化性能。它是如何优化性能的呢？

	shouldComponentUpdate(nextProps,nextState){}
	nextProps：参数表示从父级传过来的字段或者函数(下一个)
	nextState：表示当前组件存在的字段（即初始化时的变量）（就是下一个state,要是不变就是当前的）
	return false 则不执行render函数，
	return true 则执行render函数，DOM结构会发生变化
	为啥说shouldComponentUpdate 可以优化性能呢，因为react是从上向下的一个数据流的形式改变DOM结构的，只要数据发生变化，相应的组件就会触发render函数。有些不必要的组件可以不用触发render函数，此时可以在这里优化。

	componentWillUpdate
	字面意思组件将会更新，props和state改变后必调用。

	render
	跟实例化时的render一样，不多说

	componentDidUpdate
	这个方法在更新真实的DOM成功后调用，当我们需要访问真实的DOM时，这个方法就也经常用到。

销毁期

	销毁阶段，只有一个函数被调用：

	componentWillUnmount
	每当组件使用完成后，这个组件就需要从DOM中销毁，此时该方法就会被调用。当我们在组件中使用了setInterval，那我们就需要在这个方法中调用clearTimeout。

十五、兼容性问题
	1在ios8系统中，用h5与APP通信不能传带有复杂链接符的字符串。

	在移动端开发中，经常需要h5与APP进行交互。这时就需要前端和APP开发人员双方规定一种传输协议。在协议中可以添加与APP交互需要的参数。但是在IOS8系统中，不支持参数中有复杂链接符，比如JSON格式的字符串、&等等。目前为止，下划线是唯一支持的连接符。

	2safari中伪元素不支持CSS3动画。

	在项目中肯定有很多前端开发人员使用css的伪元素属性进行页面构建。虽然这种方式很方便，但是在safari中并不支持伪元素的CSS3动画效果。

	3safari中当一个元素的高度为零时，下边的同级元素的上外边距会覆盖这个元素。

	在IE、chromet、FF中，即使一个元素的高度为0，也会把它当作块级元素看待，在页面中占据相应的位置。但是在safari中，高度为0的元素会被直接忽略。

	4ios系统中在移动浏览器的页面中给按钮加JS事件，其按钮必须是原生HTML按钮或者由<a>标签自定义构成。

	这个问题当时困扰了小编很久，经过一番盘查，终于解决。原来在IOS系统中，浏览器只支持给原生HTML按钮或<a>标签加JS事件。

	5在移动浏览器中给根元素（例如：html）添加overflow:hidden，只有在某些安卓自带浏览器（例如华为的自带浏览器）中才有效。

	overflow:hidden这个CSS样式是大家常用到的。大家用这个样式可以实现很多目的。其中一个常用的就是隐藏内容溢出，把浏览器的滚动条隐藏。这个在PC端浏览中毫无问题。但是除了少数安卓自带浏览器，在大多数移动浏览器中，给根元素（例如：html）添加这个样式就会失效。除非给根元素同时添加有实际数值的高度。为了适应移动端频幕的多种尺寸，只能运用JS动态获取视窗的高度，然后给根元素设置相同的高度，方可把移动浏览器的滚动条隐藏。

	6在某些安卓系统手机自带浏览器（例如：华为手机）中，当父级元素是弹性盒子布局时（含有-webkit-box-flex属性），其子元素的margin-bottom失效，不能撑开父级元素。

	这个问题是小编在某个移动项目开发中碰到的。直接将外边距（margin）改为内边距(padding)就可解决。

	7在safair中使用Date.parse()解析时间字符串，其格式必须是YYYY/MM/DD HH:MM:SS。

	Date.parse() 方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数，如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），则返回值为NaN。

	上述是JavaScript 参考文档的说明。严格来说，其解析的时间字符串必须是YYYY/MM/DD HH:MM:SS。但是，在IE、chrome、FF中，也可以解析YYYY-MM-DD HH:MM:SS或者YYYY.MM.DD HH:MM:SS这两种非标准格式的时间字符串。而safari只能解析标准格式。因此，开发人员在使用这个方法时，最好先把非标准格式转换成标准格式，这样就可以避免兼容问题。

	8在IOS系统中H5播放器不支持自动播放。

	在iphone和ipad上用HTML5播放器时，不能自动播放，apple的解释说是为用户节省流量，我觉得这个考虑有点多余。

	当时为了解决这个问题，做了些调研，最好的方法就是在IOS系统的浏览器中给页面根元素绑定一次touchstart事件播放流媒体文件，模拟自动播放。

	9标准浏览器是只认识documentElement.scrollTop的，但chrome却不认识这个，在有文档声明时，chrome也只认识document.body.scrollTop。

	document.body.scrollTop与document.documentElement.scrollTop两者有个特点，就是同时只会有一个值生效。比如document.body.scrollTop能取到值的时候，document.documentElement.scrollTop就会始终为0；反之亦然。所以，如果要得到网页的真正的scrollTop值，可以这样：

	任选上述其中一种方式都可以解决。

	10我们常说的事件处理时的event属性，在标准浏览器其是传入的，IE下由window.event获取的。并且获取目标元素的方法也不同，标准浏览器是event.target，而IE下是event.srcElement

	https://segmentfault.com/a/1190000013983120



bt3内部构成 
js基础


有一个负责通讯的iframe，我们通过修改这个iframe的url，来让native来监控一系列特殊的url地址请求，再在native中调用对应的功能，比如摄像头，特殊交互，呼起，或者提供接口数据。数据的提供方式类似jsonp的原理，在执行函数的参数中传回来

一个做划屏活动页的组件
https://github.com/xiaojue/EasySlide

// Javascript:
网页可见区域宽： document.body.clientWidth
网页可见区域高： document.body.clientHeight
网页可见区域宽： document.body.offsetWidth (包括边线的宽)
网页可见区域高： document.body.offsetHeight (包括边线的高)
网页正文全文宽： document.body.scrollWidth
网页正文全文高： document.body.scrollHeight
网页被卷去的高： document.body.scrollTop
网页被卷去的左： document.body.scrollLeft
网页正文部分上： window.screenTop
网页正文部分左： window.screenLeft
屏幕分辨率的高： window.screen.height
屏幕分辨率的宽： window.screen.width
屏幕可用工作区高度： window.screen.availHeight
屏幕可用工作区宽度： window.screen.availWidth

// Jquery：
$(document).ready(function(){
　　alert($(window).height()); //浏览器当前窗口可视区域高度
　　alert($(document).height()); //浏览器当前窗口文档的高度
　　alert($(document.body).height());//浏览器当前窗口文档body的高度
　　alert($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin
　　alert($(window).width()); //浏览器当前窗口可视区域宽度
　　alert($(document).width());//浏览器当前窗口文档对象宽度
　　alert($(document.body).width());//浏览器当前窗口文档body的宽度
　　alert($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin
})


Element.scrollIntoViewIfNeeded(opt_center)，
故名思意，就是在需要的时候将元素滚动到可视区域。
https://juejin.im/post/59d74afe5188257e8267b03f


1. Media Query（媒体查询）
用于查询设备是否符合某一特定条件，这些特定条件包括屏幕尺寸，是否可触摸，屏幕精度，横屏竖屏等信息。

2. 使用em或rem做尺寸单位

用于文字大小的响应和弹性布局。

3. 禁止页面缩放

[html]view plaincopy

<meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no" />
4. 屏幕尺寸响应

a) 固定布局：页面居中，两边留白，他能适应大于某个值一定范围的宽度，但是如果太宽就会有很多留白，太窄会出现滚动条，在PC页面上很常见。

b) 流动布局：屏幕尺寸在一定范围内变化时，不改变模块布局，只改变模块尺寸比例。比固定布局更具响应能力，两边不留白，但是也只能适应有限的宽度变化范围，否则模块会被挤（拉）得不成样子。

c) 自定义布局：上面几种布局方式都无法跨域大尺寸变化，所以适当时候我们需要改变模块的位置排列或者隐藏一些次要元素。

d) 栅格布局：这种布局方式使得模块之间非常容易对齐，易于模块位置的改变用于辅助自定义布局。


this指向详解及改变它的指向的方法,call/apply/bind
https://blog.csdn.net/qq_37467034/article/details/78311591



function getUserPromise(promiseX, promiseY){
 return Promise.all([promiseX, promiseY])
 .then(values =>
 // 返回的values由 promiseX 与 promiseY返回的值所构成的数组。
  values
 )
}
function getUserName(){
 let data = 'superman';
 return new Promise((resolve, reject) => {
  setTimeout(resolve(data), 1000);
 })
}
function getUser(){
 let data = {
 id:1,
 username: 'superman',
 gender: 'male'
 }
 return new Promise((resolve, reject) => {
 setTimeout(resolve(data), 2000);
 })
}
getUserPromise(getUserName(), getUser())
.then(data => {
 // 这里的data就是包含了getUserName 和 getUser返回值所组成的数组
 console.log(data); // [ 'superman', { id: 1, username: 'superman', gender: 'male' } ]
 })




