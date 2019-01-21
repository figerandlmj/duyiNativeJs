function appendChat(text, type) {
    var chat = document.createElement("div");
    var content = document.createElement("p");
    var img = document.createElement("img");
    var clearfix = document.createElement("div");
    content.innerHTML = text;
    if (type == 1) {
        img.src = "./panda.jpeg";
        img.classList.add("myChatImg");
        content.classList.add("myChat");
        chat.appendChild(content);
        chat.appendChild(img);
        chat.classList.add("fr");
    } else {
        img.src = "./xiaodu.jpeg";
        img.classList.add("robotChatImg");
        content.classList.add("robotChat");
        chat.appendChild(img);
        chat.appendChild(content);
        chat.classList.add("fl");
    }
    chat.classList.add("chatWrap");
    clearfix.classList.add("clearfix");
    document.getElementsByClassName("content")[0].appendChild(chat);
    document.getElementsByClassName("content")[0].appendChild(clearfix);
}

function send(event) {
    if (event instanceof KeyboardEvent && event.key != "Enter") {
        return;
    }
    var val = document.getElementById("chatArea").value;
    if (val == null || val == "") {
        return;
    }
    appendChat(val, 1);

    var ajax = new XMLHttpRequest();
    //直接访问图灵机器人api，跨域
    // var data = {
    //     "reqType":0,
    //     "perception": {
    //         "inputText": {
    //             "text": val
    //         }
    //     },
    //     "userInfo": {
    //         "apiKey": "b968d586e09a4bca9c846939872f45ef",
    //         "userId": "123456"
    //     }
    // };
    // ajax.open("post","http://openapi.tuling123.com/openapi/api/v2");
    // ajax.send(JSON.stringify(data));

    // 借助nodeJs代理
    // ajax.open("get","http://data.duyiedu.com/api/chat?text=" + val);
    ajax.open("get","http://127.0.0.1:12306/api/chat?text=" + val);
    ajax.send();

    ajax.onreadystatechange = function () {
        if (ajax.readyState==4 &&ajax.status==200) {
            appendChat(JSON.parse(ajax.responseText).text, 2);
            document.getElementById("chatArea").value = "";
        }
    }
}

