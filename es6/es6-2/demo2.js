let fs = require('fs');

//回调地狱
fs.readFile('./data/number.txt', 'utf-8', (err, data) => {
    if(data) {
        fs.readFile(data, 'utf-8', (err, data) => {
            if(data) {
                fs.readFile(data, 'utf-8', (err, data) => {
                    console.log(data);
                });
            }
        });
    }
});

//try catch不能捕获异步代码中出现的异常
try{
    fs.readFile('./data/number.txt', 'utf-8', (err, data) => {
        throw new Error("error");
    });
}catch(e) {
    console.log("捕获error: " + e);
}

//捕获错误
process.on("uncaughtException", (err) => {
    console.log(err);
});


//并发多个异步操作
function show(data) {
    console.log(data);
}
function show2(data) {
    console.log(data);
}
let oStudent = {};
fs.readFile('./data/number.txt', 'utf-8', (err, data) => {
    if(data) oStudent.number = data;
    // Object.keys(oStudent).length == 3 && show(oStudent);

    // newShow(oStudent);

    Store.fire(oStudent);
});
fs.readFile('./data/name.txt', 'utf-8', (err, data) => {
    if(data) oStudent.name = data;
    // Object.keys(oStudent).length == 3 && show(oStudent);

    // newShow(oStudent);

    Store.fire(oStudent);
});
fs.readFile('./data/score.txt', 'utf-8', (err, data) => {
    if(data) oStudent.score = data;
    // Object.keys(oStudent).length == 3 && show(oStudent);

    // newShow(oStudent);

    Store.fire(oStudent);
});

// function after(times, cb) {
//     return function() {
//         --times ==0 && cb.apply(null, arguments);
//     }
// }
// let newShow = after(3, show);

//扩展 发布订阅
let Store = {
    list: [],
    times: 3,
    subscribe(func) {
        this.list.push(func);
    },
    fire(...arg) {
        --this.times == 0 && this.list.forEach((ele) => {
            ele.apply(null, arg);
        });
    }
};
Store.subscribe(show);
Store.subscribe(show2);

//更好的优化 Promise.all
