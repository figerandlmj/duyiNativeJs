let a = "hello world";
console.log(a);

switch (a) {
    case "hello": {
        console.log("hello");
        break;
    }
    case "world": {
        console.log("world");
        break;
    }
    case "hello world": {
        console.log("hello world");
        break;
    }
}

//去重
let arr = [1,2,3,4,5,1,2];
let obj = {};
let newArr = [];
for(let i = 0; i < arr.length; i ++) {
    if(!obj[arr[i]]) {
        newArr.push(arr[i]);
        obj[arr[i]] = true;
    }
}
console.log(arr);
//当数组中有对象时去重有误
let o = {name: "lmj"};
let arr = [1,2,3,o,4,o,2,3,{name:"lmj"}];//最后只剩一个{name:"lmj"}
//Set去重
let oS = new Set(arr);
//Set 并集、交集、差集
let arr1 = [1,2,3,2,3,4];
let arr2 = [3,4,5,4,5];
//并集 1,2,3,4,5
let oS = new Set([...arr1, ...arr2]);
//交集 3,4
let oS1 = new Set(arr1);
let oS2 = new Set(arr2);
let newArr = [...oS1].filter(ele => {
    return oS2.has(ele);
});
//差集

