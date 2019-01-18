function ajax(method, url, data, callback, flag){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4){
            if(xhr.status == 200) {
                callback(xhr.responseText);
            }else{
                console.log('error:' + xhr.status);
            }
        }
    }
    method = method.toUpperCase();
    data = data && getParams(data);
    if(method == 'GET') {
        var timer = new Date().getTime();
        xhr.open(method, url + '?' + data + '&timer=' + timer, flag);
        xhr.send();
    }else if(method == 'POST') {
        xhr.open(method, url, flag);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
}
function getParams(data) {
    var arr = [];
    for (var param in data){
        arr.push(encodeURIComponent(param) + '=' +encodeURIComponent(data[param]));
    }
    return arr.join('&');
}

window.onload = function() {
    ajax("get", "/getData", {
        a: 1,
        b: 2
    },function(data) {
        console.log(typeof data);
        console.log(data);
    });
}