css3  css2升级版本 ie10

-webkit  chrome safari
-moz     firefox
-ms      ie
-o       opera

查看浏览器兼容
http://www.runoob.com/cssref/css3-browsersupport.html
https://www.caniuse.com/

	强大的选择器

	背景填充方案

	渐变颜色

	改变元素形状、角度

	阴影效果

	报纸布局

	弹性盒子

	ie6混杂模式盒模型

	新的计量单位

	动画效果

1.border-radius  圆角

	上左  上右  下右  下左

2.box-shadow   盒子阴影   影响性能

	x轴偏移量  y轴偏移量   模糊半径>=0  阴影扩展半径  阴影颜色  投影方式inset内投影

3.text-shadow   文本阴影

	x轴偏移量  y轴偏移量   模糊程度   阴影颜色

4.颜色值RGBA

	红0-255  绿  蓝  透明度0-1

5.gradient 渐变的背景颜色  

	linear-gradient   线性渐变


	radial-gradient   径向渐变

6.word-wrap   文字边界换行

	normal  break-word

7.font-face  引入自定义字体库

	@font-face {
	  	font-family: 'SingleMaltaRegular';
	  	src: url('../fonts/singlemalta-webfont.eot');/* ie9+ */
	  	src: url('../fonts/singlemalta-webfont.eot?#iefix') format('embedded-opentype'),/* ie6-ie8 */
	  		 url('../fonts/singlemalta-webfont.woff') format('woff'),/* chrome firefox */
	   		 url('../fonts/singlemalta-webfont.ttf') format('truetype'),/* chrome firefox opera safari android ios4.2+ */
	   		 url('../fonts/singlemalta-webfont.svg#SingleMaltaRegular') format('svg');/* ios4.1- */
	  	font-weight: normal;
	  	font-style: normal;
	}

	http://www.w3cplus.com/content/css3-font-face/

8.border-image  边框应用背景

	url   border图片四角切割尺寸  中间区域拉伸效果  

9.background-origin 背景图片起始位置

	border-box  padding-box默认  content-box

10.background-clip  剪裁背景

	border-box默认  padding-box  content-box no-clip

	文字设置背景 chrome支持
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

11. background-size  背景图片尺寸

	auto  200px 50px  0%-100%   cover   contain

12. background-position  背景图片位置  

	0px 50%  center


选择器 -》

	*  id  class  标签  父子  

	伪类：

		某一元素下的
			:first-child    第一个子元素
			:last-child     最后一个子元素

			:nth-child(n)      第n个子元素  odd奇2n+1 even偶2n
			:nth-last-child(n) 从后往前数第n个子元素

		某一类型下的
			:first-of-type   第一个子元素
			:last-of-type    最后一个子元素

			:nth-of-type()       第n个子元素
			:nth-last-of-type(n) 从后往前数第n个子元素

			:only-child   唯一子元素
			:only-of-type 同类型唯一

		:enabled   可用的元素
		:disabled  不可用的元素   input中

		:checked   被选中状态的元素 checkbox radio

		:read-only   只读的元素
		:read-write   非只读元素

		:root  根标签选择器
		:not 否定选择器
		:empty 空标签选择器

		动态伪类
			:hover
			:link  没有被访问过链接
			:active  被点击
			:visited  访问过链接
			:target 目标元素选择器  匹配被location.hash 选中的元素（锚点元素）


	伪元素：  
		::after  
		::before
		::first-letter  第一个字母
		::first-line  第一行

		::selection  匹配突出显示的文本
		-moz-::selection  火狐下

		user-select: none;/* 不允许进行选中 */

	属性选择器
		div[class^='item']
		div[class~='item']
		div[class$='item']
		div[class*='item']

	条件选择
		>  直接子元素
		+  后面紧挨着的兄弟节点
		~  后面的兄弟节点


高级动画

transform  形状、角度、位置变换

	rotate()   x/y/z默认  轴进行旋转  

		rotateX()  rotateY()  rotateZ()   rotate3d(x,y,z,angle)

	scale(x,y)    x/y轴进行缩放  y没有默认为x

		scaleX() scaleY() scaleZ()

		scale3d(sx,sy,sz)

	skew()  对元素进行倾斜扭曲

		skew(x,y)   y没有默认为0

		skewX()  skewY()

	translate() 相对自身移动

		translate(x,y)

		translateX()  translateY()  translateZ()  translate3d(x,y,z)

transform-origin  变换原点

transition 过渡动画

	transition-property          过渡或动态模拟的css属性
	transition-duration          过渡所需要的时间
	transition-timing-function   过渡函数
	transition-delay             开始出现的延迟时间

animation  动画铺垫

	animation-name  帧名
	animation-duration  动画执行时间
	animation-timing-function 过渡函数速率
	animation-delay    执行延迟时间
	animation-direction    normal reverse反向  alternate奇数次正向偶数次反向 alternate-reverse 奇数次反向偶数次正向
	animation-iteration-count    infinite无限次 number次数
	animation-play-state   running播放  paused暂停
	animation-fill-mode  动画开始和结束时维持的状态 forwards保留最后关键帧  backwards在0%的位置停留delay  both兼容前两者  none

	@keyframes demoMove{
		0%{
			background: red;
		}
		10%{
			background: green;
		}
		20%{
			background: orange;
		}
		50%{
			background: yellow;
		}
		100%{
			background: blue;
		}
	}


columns   多列布局

	columns-width  每一列的宽度  根据容器宽度自适应
	columns-count  规定的列数

	列间的宽度受font-size影响
	column-width = (width - (n-1) * font-size) / n

	column-gap  设置列间宽度

	column-rule  列间距样式  不占列宽
		column-rule-width
		column-rule-style
		column-rule-color

	column-span  设置标题  1 / all


盒模型

	标准盒模型
		空间宽度 = width内容宽度 + padding + border
	ie6混杂模型
		width空间宽度 = 内容宽度 + padding + border

	box-sizing
		border-box混杂模型  content-box标准盒模型

弹性盒子

	主轴        x轴
	侧轴/交叉轴 y轴

	容器  
	display:flex
	flex-flow 
		flex-direction 主轴方向  
			row默认             row-reverse      column    column-reverse
			水平方向起点左端    水平方向起点右端

		flex-wrap 是否换行
			nowrap默认  wrap换行  wrap-reverse 换行，第一行在下方

	justify-content 项目在主轴上的对齐方式
		flex-start默认左对齐  flex-end右对齐  center居中 
		space-between两端对齐间隔相等 
		space-around 每个项目两侧间隔相等，项目间间隔比边框间隔大一倍
	align-items     项目在侧轴对齐方式
		flex-start  flex-end  center  baseline  stretch
	align-content   多根轴线的对齐方式
		flex-start  flex-end  center space-between space-around stretch轴线占满整个交叉轴

	项目 
	flex
		flex:1;  flex: 1 1 0%;
		flex:3;  flex: 3 1 0%;
	flex-grow  放大比例  把剩余空间按比例分配  默认值为0
	flex-shrink  缩小比例  超出空间按比例砍掉  默认值1
	flex-basis  伸缩基准值  项目占据主轴flex-direction的空间  权重比width和height高

	order:number; 
		项目排列顺序  number可正可负 从小到大排列
	align-self 
		单个项目在侧轴对齐方式 可覆盖align-items  默认为auto继承父元素，父元素没有则等同为stretch

		auto flex-start  flex-end  center  baseline  stretch跟父元素同高


transparent  透明色颜色值  画三角

响应式布局

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	media type  媒体类型 css2
	media query 媒体查询 媒体类型的增强 css3


	媒体类型
	all  screen print  speech ...
	媒体特性
	width渲染区宽度  device-width 设备宽度  max-width min-width color ...
	逻辑操作符
	and  ,或   not否定 only还有向早期浏览器隐藏媒体查询的作用

	媒体查询的引用:
	link
	<link rel="stylesheet" media="screen and (max-width: 800px)" href="./index.css">
	@import
	@media  css3

	@media (max-width: 800px) {
		div{
			width: 100px;
			height: 100px;
			background: red;
		}
	}


物理像素  显示器上最小的物理显示单元

设备独立像素  虚拟像素 一个设备独立像素对应一个物理像素 1:1

设备像素比  物理像素 / 设备独立像素  

	视网膜屏 dpr 2  1个独立像素对应4个物理像素

	位图像素  就近取色   模糊

	解决dpr为2方法 取分辨率两倍的图片   

	此时 普通屏下 就是4个独立像素对应1个物理像素 会根据计算公式取值 缺少锐利度但不影响显示效果


浏览器渲染原理

	dom树        css树

		render渲染树

		 布局计算

		  绘制

重排   重绘

优化性能 
	减少网络请求
	js代码精简
	减少重排重绘
		多个读操作或多个写操作放在一起
		document.createDocumentFragment()文档碎片  cloneNode() 离线操作dom
		修改样式时通过添加类名的方式


css3  3d动画  元素在转，坐标轴也在转

	transform-style
		flat 默认 子元素将不保留其3d位置
		preserve-3d  子元素将保留其3d位置

	perspective 景深  物体距离人眼的距离  设置在舞台或元素上
		none 默认
		600px  要大于3d物理的值

	perspective-origin  眼睛视觉点
		50% 50%  默认

	backface-visibility  翻面是否可见  设置在元素上
		visible  hidden

动画性能优化
	translate3d(x,y,z)
	rotate3d(0,0,0,deg) x,y,z合力方向的deg
	动画过程有闪烁
		backface-visibility: hidden;
		perspective: 1000;
	尽量避免用box-shadow和gradient 页面性能杀手
	尽量让动画元素不在文档流中，减少重排  fixed absolute
	优化dom




























