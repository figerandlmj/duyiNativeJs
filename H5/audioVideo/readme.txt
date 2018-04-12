audio 音频

video 视频

属性：
autoplay  自动播放
controls  展示控件
preload   none metadata auto 预加载
loop      是否循环播放
poster    video中 当视频不可用时用一张图片代替

多类型资源：
<audio id="music">
	<source src="./src/song.ogg" type="audio/ogg">
	<source src="./src/song.mp3" type="audio/mpeg">
</audio>

脚本化：
var audio = document.getElementById('audio');

var audio = new Audio('./src/song.ogg');//video不可用
audio.controls = true;
audio.loop = 'loop';
audio.preload = 'auto';
audio.autoplay = true;
document.body.appendChild(audio);
window.onload = function() {
	console.log(audio.currentSrc);//资源路径
}

var audio = document.createElement('audio');


方法：
play() 播放
pause() 暂停
load() 重新加载视频/音频文件

属性：
volume  音量  0-1 
muted true 静音  false 恢复之前指定音量

playbackRate  播放速率

>1  快进
1   正常
0-1 慢放
<0  回放  浏览器不支持

currentSrc 资源路径

currentTime 播放当前位置

duration 时长  s

played  已经播放的时间段
buffered 当前已经缓冲的时间段
seekable 用户可以跳转的时间段

audio.played.length;//多少段
audio.played.start(0);//第0段开始时间 s
audio.played.end(0);//第0段结束时间 s

当前缓存内容的百分比:
var percentLoaded = Math.floor(audio.played.end(0) / audio.duration * 100);

paused  播放状态 true 播放暂停
seeking true 播放器正在调到一个新的播放点
ended true  播放器播放完并且停下来

canPlayType()  支持资源的格式判断

onplay
onpause
onloadedmetadata 浏览器获取完媒体的元数据触发
onloadeddata   浏览器已经加载完当前帧数据，准备播放时触发
onended 当前播放结束后触发

readyState   音频就绪状态
0 
1 
2 
3 
4 可用数据足以开始播放

networkState  音频当前网络状态
0 1 2 3

error事件  加载发生错误时触发
MediaError code  1 2 3 4
