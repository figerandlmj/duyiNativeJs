// 数字键盘绑定
var oKeyboard = document.getElementById("keyboard"),
	oPayMoney = document.getElementById("pay-money"),
	pointNum = 2;//保留小数位数

keyBoard(oKeyboard, oPayMoney, pointNum);

// 付款
var uuid = '$uuid',
    authtoken = '$token';
// var socketUrl = "115.236.90.3";//开发环境
var socketUrl = "120.26.222.55";//测试环境
// var socketUrl = "120.27.167.232";//生产环境

var webSocketUrl="ws://" + socketUrl + ":9998/websocket";
var socketPing = {
        code: 'ping'
    },
    socketLogin = {
        code: 'login',
        authtoken: authtoken
    },
    socketPay = {
        code: 'pay',
        amt: '$amt',
        paymentCode: '$paymentCode',
        uuid: uuid,
        authtoken: authtoken
    };

var oPayBtn = document.getElementById("pay-btn"),
    oRadio = document.getElementsByName("payType"),
    oPayCode = document.getElementById("pay-code"),
    oPayStatus = document.getElementById("pay-status");

oPayBtn.onclick = function(){
    pay();
}

document.onkeydown = function(e){
    var event = e || window.event;
    if ((event.keyCode || event.which) == 13){
        pay();
    }
}

function pay(){
    var payMoney = oPayMoney.value,
        payType = getRadioValue(oRadio),
        payCode = oPayCode.value;
    socketPay.amt = payMoney;
    socketPay.paymentCode = payCode;
    // if(!payMoney){
    //     alert("请输入支付金额！");
    // }else if(!payCode){
    //     alert("请输入收款条码！");
    // }else{
        webSocket(webSocketUrl);
    // }
}
// 获取radio选中的值
function getRadioValue(obj){ 
    for(var i = 0; i < obj.length; i ++){
        if(obj[i].checked){ 
            return obj[i].value;
        } 
    }        
}

// webSocket连接
function webSocket(webSocketUrl){
    var ws = null;
    if ('WebSocket' in window) {
        ws = new WebSocket(webSocketUrl);
    }else {
        alert('当前浏览器不支持WebSocket');
    }
    ws.onopen = function(){
        console.log("open");
        ws.send(JSON.stringify(socketPing));
    };
    ws.onmessage = function(evt){
        console.log(evt.data);
    };
    ws.onclose = function(evt){
        console.log("WebSocketClosed!");
    };
    ws.onerror = function(evt){
        console.log("WebSocketError!");
    };
}

