1. geolocation 地理位置信息

window.navigator.geolocation

getCurrentPosition(success, error, options) 获取当前位置信息
error回调：
code:1  用户拒绝
code:2  获取不到
code:3  链接超时

watchPosition(success, error, options) 监视位置变化
clearWatch(id) 清除位置监视

2. devicemotion 监听加速度的变化  微信摇一摇

   deviceorientation 监听设备在方向上的变化

   webkitCompassHeading  指北针  与正北方向的角度差值  正北0  正东90 正南180  正西270 iOS上兼容
   webkitCompassAccuracy  指北针的精准度 


https://papaverice.github.io/html5-lession4/pin.html
https://papaverice.github.io/html5-lession4/yaoyiyao.html
https://papaverice.github.io/html5-lession4/textPhone.html
https://papaverice.github.io/html5-lession4/demo.html
