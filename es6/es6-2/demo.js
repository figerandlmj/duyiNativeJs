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

function _classCallCheck(_this, _constructor) {
    if(! (_this instanceof _constructor)) {
        throw "TypeError: Class constructor Plane cannot be invoked without 'new'";
    }
}

function _createClass(_constructor, _prototypeProperties, _staticProperties) {

}

var Plane = (function(){
    function Plane(name) {
        //判断是否以new的方式来执行
        _classCallCheck(this, Plane);
        this.name = name || "普通飞机";
        this.blood = 100;
    }
    return Plane;
})();
new Plane();
// Plane();//报错


