在线babel工具  https://babeljs.io/repl

babel官网  https://www.babeljs.cn/

npm init -y  //跳过所有询问创建package.json
npm install @babel/core @babel/preset-env @babel/cli
.babelrc //babel编译的配置文件
npx babel xxx.js -o xxx.js --watch //监控执行babel编译

对比学习
新特性是如何实现的

一、变量声明 let & const

    1、var 变量声明:
        变量声明提升，可重复定义，全局变量挂载到window
    2、作用域（变量生命周期）
        全局作用域、函数作用域
    3、let 块级变量声明
        没有变量声明提升、不能重复定义、不挂载到window
        声明的变量和{}配合产生块级作用域，声明在{}内部的变量不能在外部使用
        产生临时死区
            let a = 10;
            {
                console.log(a);//报错
                let a = 20;
            }
        解决闭包问题
            let arr = [];
            for(let i = 0; i < 10; i ++) {
                arr[i] = function() {
                    console.log(i);
                }
            }
            arr[0]();//0
            arr[4]();//4
            arr[7]();//7

            for(let i = 0; i < 10; i ++) {
                setTimeout(function() {
                    console.log(i);//0 1 2 3 4 5 6 7 8 9
                }, 0);
            }

    4、const 声明常量
        声明时必须初始化，声明后不能被改变（存储常量的空间里面的值不能发生改变）

    console.log(a);//undefined
    {
        function a() {

        }
    }
    =>
    console.log(a);
    {
        var a = function() {

        }
    }

二、...运算符，展开&收集

    1、写  --》收集作用
        function test(...arg) {
            console.log(arg);
        }
        test(1,2,3);//[1,2,3]
    2、读  --》展开作用
        var arg = [1,2,3];
        console.log(...arg);//1 2 3

    function sum() {
        let sumNumber = 0;
        let arg = [].slice().call(arguments, 0);
        // arg.sort pop shift 排序 去除最大值和最小值
        for(let i = 0; i < arguments.length; i ++) {
            sumNumber += auguments[i];
        }
        return sumNumber;
    }
    sum(1,2,3);
    sum(1,2,3,4,5,6);

    function sum(...arg) {
        let sumNumber = 0;
        arg.forEach(function(ele) {
            sumNumber += ele;
        });
        return sumNumber;
    }

    function mySort(...arg) {
        arg.sort(function(a,b) {
            return a - b;
        });
        console.log(arg);
    }
    mySort(2,1,4,3,5,6);//1 2 3 4 5 6

    let arr1 = [1,2,3];
    let arr2 = [4,5,6];
    let newArr = [...arr1,...arr2];
    =>
    let newArr = [].concat(arr1,arr2);

    3、es7中的...运算符

        let obj1 = {
            name: "lmj",
            age: 20,
        };
        let obj2 = {
            sex: "male",
            height: 165,
            family: {
                name: "lsj",
                age: 22
            }
        }
        // 浅度克隆
        let newObj = {
            ...obj1,
            ...obj2
        }
        newObj.family.age = 25;
        console.log(obj2.family.age);//25

        //========================================
        let obj1 = {
            name: "lmj",
            age: 20,
        };
        let family = {
            name: "lsj",
            age: 22
        };
        let obj2 = {
            sex: "male",
            height: 165,
            family: {
                ...family
            }
        }
        // 深度克隆
        let newObj = {
            ...obj1,
            ...obj2,
            family: {
                ...family
            }
        }
        newObj.family.age = 25;
        console.log(obj2.family.age);//22

        //==============================
        //深度克隆
        let obj = JSON.parse(JSON.stringify(obj2));

    4、Object.assign()
        浅层克隆，相当于$.extend()
        let newObj = Object.assign({}, obj1, obj2);

三、解构（结构化赋值）
    把=左右长的相似的两个东西内部的值取出来
    作用于： 数组&对象
    功能：赋值和变量声明

    let obj = {
        name: "lmj",
        age: 10,
        sex: "female"
    };
    let name, age;
    ({name, age} = obj);
    =>
    let {name, age} = obj;
    console.log(name, age);
    let {name: oName, age: oAge, sex = "male"} = obj;
    console.log(oName, oAge, sex);

    //================================
    function sum(a = 10, b = 20) {
        return a + b;
    }
    sum(1);//21

    //===================================
    let arr = [1,2,3];
    let {0:x, 1: y, 2: z} = arr;
    let [x, y, z] = arr;
    console.log(x, y, z);//1 2 3
    let {length} = arr;
    console.log(length);//3

    let arr = [1,2,3,{name: "lmj"}];
    let [,,,{name}] = arr;
    console.log(name);//lmj

四、箭头函数

    函数目的指向性更强，可读性更好，简化代码，提升开发效率
    特点：
        不用写function关键字
        只能作为函数使用不能new，没有原型
        参数不能重复命名
        返回值可以不写return，但是有时需要配合{}
        内部arguments this 由(定义)时外围最接近一层的非箭头函数的arguments和this决定其值
    function sum(a, b) {
        return a + b;
    }
    let sum = function(a, b) {
        return a + b;
    }
    let sum = (a, b) => {
        return a + b;
    }
    let sum = (a, b) => a + b;
    let sum = (a, b) => ({a: a, b: b})

    //========================================
    function sum(x) {
        return function(y) {
            return function(z) {
                return x + y + z;
            }
        }
    }
    let sum = x => y => z => x + y + z;
    sum(1)(2)(3);//6

    //================================
    function outer() {
        // arguments 1 2
        return (a, b) => {
            // arguments 1 2
            console.log(arguments, a, b);
        }
    }
    outer(1,2)('a', 'b');

    //===================================
    let a = "outerObj";
    let sum = () => {
        //this window
        console.log(this.a);
    };
    let obj = {
        a: "innerObj",
        fn: sum
    };
    obj.fn();// outerObj
    //====================================
    let a = "outerObj";
    let obj = {
        a: "innerObj",
        fn(){
            // this obj
            let sum = () => {
                //this obj
                console.log(this.a);
            };
            sum();
        }
    };
    obj.fn();// innerObj

    //=============================
    let obj = {
        a: "abc",
        fn() {
            setTimeout(function(){
                // this window
                console.log(this.a);
            }, 500);
        }
    };
    obj.fn();// undefined

    //==============================
    let obj = {
        a: "abc",
        fn() {
            //this obj
            setTimeout(() => {
                console.log(this.a);
            }, 500);
        }
    };
    obj.fn();// "abc"

五、es5  Object.defineProperty

    在一个对象上定义一个新的具有详细描述的属性，并返回这个对象
    Object.defineProperty(对象，属性，描述符)
    数据描述符：
        value: 属性值，默认""
        writable: 是否可写，默认false  obj.name
        configurable: 是否可配置，默认false  delete obj.name
        enumerable: 是否可枚举，默认false for in
    存取描述符：
        set: function(){} 属性访问器，进行写操作时调用此方法
        get: function(){} 属性访问器，进行读操作时调用此方法
    作用：
        双向数据绑定的核心方法，主要做数据劫持操作（监控属性变化）
        同时是es6中许多语法糖底层实现的核心方法

    Function.prototype  //writable false
    delete window.a   //configurable false
    for(var prop in Object.prototype) {   //enumerable false
        console.log(prop);
    }
    //======================================
    var obj = {
        name: "lmj"  //可读可写可配置可枚举
    }
    //=========value,writable 和get,set不能同时使用=======================================
    var obj = {};
    var tempValue = "";
    Object.defineProperty(obj, "name", {
        // value: "lmj",
        // writable: false, //不可写
        configurable: true, //可配置
        enumerable: true, //可枚举
        get: function() {
            // return "lmj";
            return tempValue;
        },
        set: function(newValue) {
            tempValue = newValue;
        }
    });
    //===================================
    var obj = {
        tempValue: "lmj",
        get name () {
            return this.tempValue;
        },
        set name (newValue) {
            this.tempValue = newValue;
        }
    }

六、es5 数据劫持

    vue 双向数据绑定核心功能由observer compile watcher 三部分实现，
    其中observer功能实现由Object.defineProperty实现
    observer：监测数据变化进行相应回调（数据劫持）
    eg: demo.html

七、es6新增 兼容性不好  proxy & reflect  (代理 & 映射)

    植入代理模式的思想，以简洁易懂的方式控制对外部对象的访问

    利用内置的set,get方法控制属性的读写功能
    其余has,deleteProperty,...等方法不太使用到

    解决了数组还有新增属性的监控问题

    let oData = {
        val: "hello",
        _val: "haha"
    };
    let oProxyData = new Proxy(oData, {
        set(target, key, value, receiver) {
            console.log(target, key, value, receiver);
            Reflect.set(target, key, value);
            upDate();
        },
        get(target, key, receiver) {
            console.log(target, key, receiver);
            // return target[key];
            return Reflect.get(target, key);
        },
        has(target, key) {
            return key.indexOf("_") != -1 ? false : key in oData;//是私有属性返回false
        },
        deleteProperty() {

        }
    });
    function upDate() {
        console.log("更新了");
    }
    //读写控制
    console.log(oProxyData.val);
    oProxyData.val = 10;
    oProxyData.name = "lmj";//新增属性也能被检测到

    console.log("_val" in oProxyData);//调用has false
    console.log(delete oProxyData.val);

八、class 构造函数

    面向对象：
        面向过程在于把功能拆分成步骤，一环扣一环的完成，但是需求复杂到一定程度后，
        对开发者能力的挑战也是越来越强。
        面向对象在于前期把功能拆分并抽象成不同的对象，聚焦于每个对象的能力和他们之间的配合，
        项目复杂后相对于面向过程较为轻松一些。
        面向对象： 继承、封装、多态
        js: 基于对象，一切皆对象

    es5 构造函数
        构造对象，私有属性、公有属性，私有属性继承、公有属性继承

        Plane.prototype.fly = function() {
            console.log("fly");
        };
        function Plane(name) {
            this.name = name || "普通飞机";
            this.blood = 100;
            // this.fly = function() {
            //     console.log("fly");
            // };
        }
        var oPlane = new Plane();
        oPlane.fly();

        // 继承 继承原型&继承私有属性
        // AttackPlane.prototype = new Plane();

        // var temp = function() {};
        // temp.prototype = Plane.prototype;
        // AttackPlane.prototype = new temp();

        // AttackPlane.prototype = Object.create(Plane.prototype, {
        //     constructor: AttackPlane
        // });

        // AttackPlane.prototype.__proto__ = Plane.prototype;
        //=>
        Object.setPrototypeOf(AttackPlane.prototype, Plane.prototype);

        AttackPlane.prototype.dan = function(){
            console.log("biubiubiu");
        };
        function AttackPlane(name) {
            // this.name = "攻击机";
            // this.blood = 100;
            //借用构造函数的方式继承私有属性
            Plane.call(this, name);
        }
        var oAP = new AttackPlane("攻击机");
        oAP.fly();
        oAP.dan();

    es6 class语法糖
        class constructor static extends super

        //私有属性 公有属性（原型属性） 静态属性（函数）
        class Plane {
            //es7
            // static alive = true;
            //es6
            static alive() {//静态属性（函数）
                return true;
            }
            constructor(name) {//构造函数 私有属性
                this.name = name || "普通飞机";
                this.blood = 100;
            }
            fly() {//原型上的方法 公有属性
                console.log("fly");
            }
            //es7 私有属性
            //name = "hello";
        };
        var oPlane = new Plane();
        console.log(oPlane);
        oPlane.fly();
        Plane.alive();

        class AttackPlane extends Plane{
            constructor(name) {
                // Plane.call();
                super(name);
                this.logo = "duyi";
            }
            dan() {
                console.log("biubiubiu");
            }
        }
        var oAP = new AttackPlane("攻击机");
        oAP.fly();
        oAP.dan();
        AttackPlane.alive();

        //class 定义的类Plane只能通过new方式执行
        //class定义的类Plane的prototype不能被枚举
        //静态属性放在类Plane上,而非原型,且静态属性也不能被枚举

    es5模拟实现class
        //判断是否以new的方式来执行
        function _classCallCheck(_this, _constructor) {
            if(!(_this instanceof _constructor)) {
                throw "TypeError: Class constructor Plane cannot be invoked without 'new'";
            }
        }

        // 处理公有属性和静态属性
        function _defineProperty(target, props) {
            props.forEach(function(ele) {
                Object.defineProperty(target, ele.key, {
                    value: ele.value,
                    writable: true,
                    configurable: true
                })
            })
        }
        function _createClass(_constructor, _prototypeProperties, _staticProperties) {
            // 给原型上赋值
            if(_prototypeProperties) {
                _defineProperty(_constructor.prototype, _prototypeProperties);
            }
            if(_staticProperties) {
                _defineProperty(_constructor, _staticProperties);
            }
        }

        var Plane = (function(){
            function Plane(name) {
                //判断是否以new的方式来执行
                _classCallCheck(this, Plane);
                this.name = name || "普通飞机";
                this.blood = 100;
            }
            _createClass(Plane, [{
                key: "fly",
                value: function() {
                    console.log("fly");
                }
            }], [{
                key: "alive",
                value: function() {
                    return true;
                }
            }])
            return Plane;
        })();

        new Plane();
        // Plane();//报错

        // 继承
        function _inherit(sub, sup) {
            Object.setPrototypeOf(sub.prototype, sup.prototype);
        }

        var AttackPlane = (function(Plane){
            _inherit(AttackPlane, Plane);
            function AttackPlane(name) {
                _classCallCheck(this, AttackPlane);
                this.logo = "duyi";
                Plane.call(this, name);
                
                // 若是constructor返回一个对象
                // var _this = this;
                // var that = Plane.call(_this, name);
                // if(typeof that == "object") {
                //     _this = that;
                // }
                // _this.logo = "duyi";
                // return _this;
            }
            _createClass(AttackPlane, [{
                key: "dan",
                value: function() {
                    console.log("biubiubiu");
                }
            }], [{
                key: "alive",
                value: function() {
                    return true;
                }
            }])
            return AttackPlane;
        })(Plane);

    es7 class提案属性
        新特性：
            static property = xxx;//静态属性
            property = xxx;//私有属性
            @decorator //装饰器
        提案属性需下载插件：
            npm install @babel/plugin-proposal-class-properties
            npm install @babel/plugin-proposal-decorators
        配置：
            {
                "plugins": [
                    ["@babel/plugin-proposal-decorators", {"legacy": true}],
                    ["@babel/plugin-proposal-class-properties": {"loose": true}]
                ]
            }

        class Search {
            //es7 静态属性
            sttaic num = 10;

            // es6 静态属性
            // static num() {
            //     return 6;
            // }
            constructor() {
                this.keyValue = "";
            }
            
            // es7 私有属性定义方式
            url = "urlA";

            getCount() {
                console.log("发送请求");
            }
        }
        var search = new Search();

        eg: demo2.html

九、es6新增  set & map
    Set 构造函数，能够造出一种新的存储数据的结构
        只有属性值，成员值唯一
        可以转成数组，本身具备去重、交集、并集、差集的作用

        //[] '' arguments NodeList 具有迭代接口的参数（其原型上有Symbol.iterator）
        let oS = new Set([1, 2, 3, true, [1,2], {name: 'lnj'}, 1,2,3]);
        let oS2 = new Set("abcabd");//"abcd"

        oS.add(1);//增加
        oS.add([1,2]);
        oS.add(true);
        oS.delete(1);//删除
        oS.clear();//清空
        oS.has(1);//false 是否有值
        //遍历取值
        oS.forEach(val => {
            console.log(val);
        })
        //es6 for of(具备迭代接口) 遍历取值
        for(let prop of oS) {
            console.log(prop);
        }
        //[] => Set
        let arr = [1,2,3];
        let oS = new Set(arr);
        //Set => []  Array.from  || ... 将具有迭代接口的数据转换成数组
        console.log(Array.from(oS));
        console.log([...oS]);
        //=============================================
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
        let newArr = [...oS1].filter(ele => oS2.has(ele));
        //差集 1,2,5
        let oS1 = new Set(arr1);
        let oS2 = new Set(arr2);
        let newArr1 = [...oS1].filter(ele => !oS2.has(ele));
        let newArr2 = [...oS2].filter(ele => !oS1.has(ele));
        console.log([...newArr1, ...newArr2]);

    Map 构造函数，能够造出一种新的存储数据的结构，本质上是键值对的集合
        特点：key对应value,key和value唯一，任何值都可以当属性
        用途：可以让对象当属性，去重等
        实现原理：链接链表、hash算法、桶

        //初始化
        let oMp = new Map([['name', 'lmj'], ['age', 18], ['sex', true], [{}, '-----']]);
        console.log(oMp);
        //或者api
        let oMp = new Map();
        oMp.set('name', 'lmj');
        oMp.set('age', 18);
        oMp.set({}, '----------');
        oMp.set({}, '==========');
        let obj = {};
        oMp.set(obj, "------");
        //取值
        oMp.get('name');
        oMp.get(obj);
        //删除
        oMp.delete('name');
        //清空
        oMp.clear();
        //大小
        console.log(oMp.size);
        //所有属性
        oMp.keys();
        //键值对
        oMp.entries();
        //遍历
        oMp.forEach((ele, key, self) => {
            console.log(ele, key, self);
        });
        for(let val of oMp) {
            console.log(val);
        }
        //has
        oMp.has('name');
        //======实现原理=========================
        //链表
        let node3= {
            key: 'name3',
            value: '3',
            next: null
        }
        let node2 = {
            key: 'name2',
            value: '2',
            next: node3
        }
        let node1 = {
            key: 'name1',
            value: '1',
            next: node2
        }
        //===总结================
        //1.不重复
        //2.属性 字符串 对象  NaN null [] function(){} 10
        //3.set get delete has clear
        function myMap() {
            this.bucketLength = 8;
            this.init();
        }
        myMap.prototype.init = function() {
            //初始化桶
            this.bucket = new Array(this.bucketLength);
            for(let i = 0; i < this.bucketLength; i ++) {
                this.bucket[i] = {
                    type: "bucket" + i,
                    next: null
                };
            }
        };
        //[0,8)
        //重复算值固定
        myMap.prototype.makeHash = function(key) {
            let hash = 0;
            // string  number NaN  null {} []  boolean  undefined function(){}
            if(typeof key != "string") {
                //number NaN
                if(typeof key == "number") {
                    hash = Object.is(key, NaN) ? 0 : key;
                }else if(typeof key == "object") {
                    //null {} []
                    hash = 1;
                }else if(typeof key == "boolean") {
                    //boolean true false
                    hash = +key;
                }else{
                    //undefined function(){}
                    hash = 2;
                }
            }else{
                //string 长度>=3  前3个字符 Ascii 累加
                for(let i = 0; i < 3; i ++) {
                    hash += key[i] ? key[i].charCodeAt(0) : 0;
                }
            }
            return hash % 8;
        };
        myMap.prototype.set = function(key, value) {
            let hash = this.makeHash(key);
            let oTempBucket = this.bucket[hash];
            while(oTempBucket.next) {
                if(oTempBucket.next.key == key) {
                    oTempBucket.next.value = value;
                    return;
                }else{
                    oTempBucket = oTempBucket.next;
                }
            }
            oTempBucket.next = {
                key: key,
                value: value,
                next: null
            };
        };
        myMap.prototype.get = function(key) {
            let hash = this.makeHash(key);
            let oTempBucket = this.bucket[hash];
            while(oTempBucket) {
                if(oTempBucket.key == key) {
                    return oTempBucket.key;
                }else{
                    oTempBucket = oTempBucket.next;
                }
            }
        };
        myMap.prototype.delete = function(key) {
            let hash = this.makeHash(key);
            let oTempBucket = this.bucket[hash];
            while(oTempBucket.next) {
                if(oTempBucket.next.key == key) {
                    oTempBucket.next = oTempBucket.next.next;
                    return true;
                }else {
                    oTempBucket = oTempBucket.next;
                }
            }
            return false;
        };
        myMap.prototype.has = function(key) {
            let hash = this.makeHash(key);
            let oTempBucket = this.bucket[hash];
            while(oTempBucket) {
                if(oTempBucket.next && oTempBucket.next.key == key) {
                    return true;
                }else {
                    oTempBucket = oTempBucket.next;
                }
            }
            return false;
        };
        myMap.prototype.clear = function() {
            this.init();
        };

十、es6  Promise

    异步编程
        无论在浏览器环境中还是在node环境中，我们都会使用js完成各种异步操作。
        在浏览器中的定时器、事件、ajax等
        在node环境中的文件读取、事件等
        伴随着异步编程的就是回调机制
    异步编程问题
        产生回调地狱，难于维护和扩展
        try catch只能捕获同步代码中出现的异常
            try{
                setTimeout(() => {
                    console.log(a);
                }, 1000);
            }catch(e) {
                console.log(e);
            }
            //window中捕获错误
            window.onerror = function() {
                console.log('error');
            }
            //node中捕获错误
            process.on("uncaughtException", (err) => {
                console.log(err);
            })
        同步并发的异步存在一定问题

    解决方案
        es6 promise 可以解决回调地狱，以及同步并发的异步问题
        es6的generator、es7的async await 能让异步代码看起来像同步一样
    回调回顾
        当做某件事满足一定条件后，在做另一件事
        jquery: Callbacks 管理回调
        Lodash: js工具库，提供各种方法提升工作效率，提供after高阶函数辅助回调函数
        eg: demo3.html
    node环境里异步场景
        eg: demo2.js

    Promise使用
        内置构造函数
            //传递一个参数 executor 执行器函数 同new Promise同步执行
            // Promise 承诺
            //相当于jquery deferred
            //done     fail    progress
            //resolve  reject  notify
            //Promise
            //pending  onFulfilled  onRejected
            // let oP = new Promise(() => {
            //     console.log(0);
            // });
            // console.log(1);

            let oP = new Promise((resolve, reject) => {
                //异步操作
                setTimeout(() => {
                    Math.random * 100 > 60 ? resolve('ok') : reject('no');
                }, 1000);
            });
        then 注册函数返回值
            //成功  失败
            //异步执行
            //执行队列
            //宏任务 setTimeout
            //微任务  有优先执行权
            //then返回值作为下一个then注册函数的执行参数
            //1.链式调用时，如果上一个不抛出错误的话，那下一个then执行成功的函数
            //2.如果上一个then抛出错误的话，那下一个then执行失败的函数
            //3.返回值为Promise对象时,那下一个then成功与否取决于返回值Promise对象的成功与否
            oP.then((val) => {
                console.log(val);
                // return 20;
                // throw new Error("error");
                return new Promise((resolve, reject) => {
                   resolve("new Promise ok");
                });
            }, (reason) => {
                console.log(reason);
                return 30;
            }).then((val) => {//链式调用
                console.log("ok then2:" + val);//20
            },(reason) => {
                console.log("no then2:" + reason);//30
            });

            //node中使用Promise
            let fs = require("fs");
            function readFile(path) {
                return new Promise((res, rej) => {
                    fs.readFile(path, 'utf-8', (err, data) => {
                        if(data) {
                            res(data);
                        }
                    });
                })
            }
            readFile('./data/number.txt').then((data) => {
               return readFile(data);
            }).then((data) => {
                return readFile(data);
            }).then((data) => {
                console.log(data);
            });
        catch 异常捕获
        finally 最后处理函数
            let oP = new Promise((res, rej) => {
                // throw new Error("error");
                res();
            });
            oP.then(() => {
                throw new Error("error");
            }, (reason) => {
                console.log(reason);
            }).then(() => {

            }).then(null, (reason) => {
                console.log(reason);
            });

            //链式调用的时候如果写一个空then，其实相当于不存在，可忽视
            oP.then(() => {
                throw new Error("error");
            }, (reason) => {
                console.log(reason);
            }).then().then(() => {

            }).catch((err) => {
                console.log("catch", err);
            }).then((val) => {
                console.log("catch after ok:" + val);
            },(reason) => {
                console.log("catch after no:" + reason);
            }).finally(() => {
                console.log("over");
            });
        Promise.all 同步并发异步的结果
            将多个Promise实例包装成一个新的Promise实例
            成功时返回的是一个结果数组
            失败时返回的最先被reject失败状态的值
            function test(x){
                return new Promise((res, rej) => {
                    setTimeout(() =>{
                        Math.random() * 100 > 50 ? res(x) : rej(x);
                    }, 100);
                });
            }
            let oP = Promise.all([test('a'), test('b'), test('c')]);
            oP.then((val) => {
                console.log(val);
            }, (reason) => {
                console.log(reason);
            });
        Promise.race 谁先成功就先处理谁
            不管结果本身是失败还是成功状态，哪个结果获得的快就返回哪个结果
            function test(x){
                return new Promise((res, rej) => {
                    setTimeout(() =>{
                        Math.random() * 100 > 50 ? res(x) : rej(x);
                    }, 100);
                });
            }
            let oP = Promise.race([test('a'), test('b'), test('c')]);
            oP.then((val) => {
                console.log(val + 'ok');
            }, (reason) => {
                console.log(reason + 'no');
            });

            let fs = require("fs");
            function readFile(path) {
                return new Promise((res, rej) => {
                    fs.readFile(path, 'utf-8', (err, data) => {
                        if(data) {
                            res(data);
                        }
                    });
                })
            }
            Promise.all([readFile('./data/number.txt'), readFile('./data/name.txt'), readFile('./data/score.txt')]).then((val) => {
                console.log(val);
            });
            Promise.race([readFile('./data/number.txt'), readFile('./data/name.txt'), readFile('./data/score.txt')]).then((val) => {
                console.log(val);
            });
    //Promise原理
        //1节
        function MyPromise(executor) {
            var self = this;
            self.status = pending;
            self.resolveValue = null;
            self.rejectReason = null;
            function resolve(value) {
                if(self.status === 'pending') {
                    self.status = 'Fulfilled';
                    self.resolveValue = value;
                }
            }
            function reject(reason) {
                if(self.status === 'pending') {
                    self.status = 'Rejected';
                    self.rejectReason = reason;
                }
            }
            try{
                executor(resolve, reject);
            }catch(e) {
                reject(e);
            }
        }
        MyPromise.prototype.then = function(onFulfilled, onRejected) {
            var self = this;
            if(self.status === 'Fulfilled') {
                onFulfilled(self.resolveValue);
            }
            if(self.status === 'Rejected') {
                onRejected(self.rejectReason);
            }
        }

        let oP = new MyPromise((res, rej) => {
            //throw new Error('error');
            // res(0);
            rej(0);
        });
        oP.then((val) => {
            console.log(val + 'ok');
        }, (reason) => {
            console.log(reason + 'no');
        });
        //2节 异步操作
        function MyPromise(executor) {
            var self = this;
            self.status = pending;
            self.resolveValue = null;
            self.rejectReason = null;
            self.ResolveCallbackList = [];
            self.RejectCallbackList = [];
            function resolve(value) {
                if(self.status === 'pending') {
                    self.status = 'Fulfilled';
                    self.resolveValue = value;
                    self.ResolveCallbackList.forEach(function(ele) {
                        ele();
                    });
                }
            }
            function reject(reason) {
                if(self.status === 'pending') {
                    self.status = 'Rejected';
                    self.rejectReason = reason;
                    self.RejectCallbackList.forEach(function(ele) {
                        ele();
                    });
                }
            }
            try{
                executor(resolve, reject);
            }catch(e) {
                reject(e);
            }
        }
        MyPromise.prototype.then = function(onFulfilled, onRejected) {
            var self = this;
            if(self.status === 'Fulfilled') {
                onFulfilled(self.resolveValue);
            }
            if(self.status === 'Rejected') {
                onRejected(self.rejectReason);
            }
            if(self.status === 'pending') {
                self.ResolveCallbackList.push(function() {
                    onFulfilled(self.resolveValue);
                });
                self.RejectCallbackList.push(function() {
                    onRejected(self.rejectReason);
                });
            }
        }

        let oP = new MyPromise((res, rej) => {
            //异步操作
            setTimeout(() => {
                // res(0);
                rej(0);
            }, 2000);
        });
        oP.then((val) => {
            console.log(val + 'ok');
        }, (reason) => {
            console.log(reason + 'no');
        })
        //3节 链式操作
        function MyPromise(executor) {
            var self = this;
            self.status = pending;
            self.resolveValue = null;
            self.rejectReason = null;
            self.ResolveCallbackList = [];
            self.RejectCallbackList = [];
            function resolve(value) {
                if(self.status === 'pending') {
                    self.status = 'Fulfilled';
                    self.resolveValue = value;
                    self.ResolveCallbackList.forEach(function(ele) {
                        ele();
                    });
                }
            }
            function reject(reason) {
                if(self.status === 'pending') {
                    self.status = 'Rejected';
                    self.rejectReason = reason;
                    self.RejectCallbackList.forEach(function(ele) {
                        ele();
                    });
                }
            }
            try{
                executor(resolve, reject);
            }catch(e) {
                reject(e);
            }
        }
        MyPromise.prototype.then = function(onFulfilled, onRejected) {
            var self = this;
            var nextPromise = new MyPromise(function(res, rej) {
                if(self.status === 'Fulfilled') {
                    var nextResolveValue = onFulfilled(self.resolveValue);
                    res(nextResolveValue);
                }
                if(self.status === 'Rejected') {
                    var nextRejectValue = onRejected(self.rejectReason);
                    rej(nextRejectValue);
                }
                if(self.status === 'pending') {
                    self.ResolveCallbackList.push(function() {
                        var nextResolveValue = onFulfilled(self.resolveValue);
                        res(nextResolveValue);
                    });
                    self.RejectCallbackList.push(function() {
                        var nextRejectValue = onRejected(self.rejectReason);
                        res(nextRejectValue);
                    });
                }
            })

            return nextPromise;
        }

        let oP = new MyPromise((res, rej) => {
            setTimeout(() => {
                // res(0);
                rej(0);
            }, 2000);
        });
        oP.then((val) => {
            console.log(val + 'ok');
            return 1;
        }, (reason) => {
            console.log(reason + 'no');
            return 2;
        }).then((val) => {
            console.log(val + 'ok2');
        }, (reason) => {
            console.log(reason + 'no2');
        })
        //4节 then异步执行/上一个then抛出错误下一个then能接受到/空then被忽视
        function MyPromise(executor) {
            var self = this;
            self.status = pending;
            self.resolveValue = null;
            self.rejectReason = null;
            self.ResolveCallbackList = [];
            self.RejectCallbackList = [];
            function resolve(value) {
                if(self.status === 'pending') {
                    self.status = 'Fulfilled';
                    self.resolveValue = value;
                    self.ResolveCallbackList.forEach(function(ele) {
                        ele();
                    });
                }
            }
            function reject(reason) {
                if(self.status === 'pending') {
                    self.status = 'Rejected';
                    self.rejectReason = reason;
                    self.RejectCallbackList.forEach(function(ele) {
                        ele();
                    });
                }
            }
            try{
                executor(resolve, reject);
            }catch(e) {
                reject(e);
            }
        }
        MyPromise.prototype.then = function(onFulfilled, onRejected) {
            var self = this;
            if(!onFulfilled) {
                onFulfilled = function(val) {
                    return val;
                }
            }
            if(!onRejected) {
                onRejected = function(reason) {
                    throw new Error(reason);
                }
            }
            var nextPromise = new MyPromise(function(res, rej) {
                if(self.status === 'Fulfilled') {
                    setTimeout(function() {
                        try{
                            var nextResolveValue = onFulfilled(self.resolveValue);
                            res(nextResolveValue);
                        }catch(e) {
                            rej(e);
                        }
                    }, 0);
                }
                if(self.status === 'Rejected') {
                    setTimeout(function() {
                        try{
                            var nextRejectValue = onRejected(self.rejectReason);
                            res(nextRejectValue);
                        }catch(e) {
                            rej(e);
                        }
                    }, 0);
                }
                if(self.status === 'pending') {
                    self.ResolveCallbackList.push(function() {
                        setTimeout(function() {
                            try{
                                var nextResolveValue = onFulfilled(self.resolveValue);
                                res(nextResolveValue);
                            }catch(e) {
                                rej(e);
                            }
                        }, 0);
                    });
                    self.RejectCallbackList.push(function() {
                        setTimeout(function() {
                            try{
                                var nextRejectValue = onRejected(self.rejectReason);
                                res(nextRejectValue);
                            }catch(e) {
                                rej(e);
                            }
                        }, 0);
                    });
                }
            })

            return nextPromise;
        }

        let oP = new MyPromise((res, rej) => {
            console.log(0);
            res(1);
        });
        oP.then((val) => {
            console.log(val + 'ok');
            throw new Error('error');
        }, (reason) => {
            console.log(reason + 'no');
        }).then().then((val) => {
            return val;
        }, (reason) => {
            throw new Error(reason);
        }).then((val) => {
            console.log(val + '空then after');
        }, (reason) => {
            console.log(reason + '空then after');
        })
        console.log(2);

        //5节 then返回值为Promise的处理
        function MyPromise(executor) {
            var self = this;
            self.status = pending;
            self.resolveValue = null;
            self.rejectReason = null;
            self.ResolveCallbackList = [];
            self.RejectCallbackList = [];
            function resolve(value) {
                if(self.status === 'pending') {
                    self.status = 'Fulfilled';
                    self.resolveValue = value;
                    self.ResolveCallbackList.forEach(function(ele) {
                        ele();
                    });
                }
            }
            function reject(reason) {
                if(self.status === 'pending') {
                    self.status = 'Rejected';
                    self.rejectReason = reason;
                    self.RejectCallbackList.forEach(function(ele) {
                        ele();
                    });
                }
            }
            try{
                executor(resolve, reject);
            }catch(e) {
                reject(e);
            }
        }
        function ResolutionReturnPromise(nextPromise, returnValue, res, rej) {
            if(returnValue instanceof MyPromise) {
                returnValue.then((val) => {
                    res(val);
                }, (reason) => {
                    rej(reason);
                });
            }else{
                res(returnValue);
            }
        }
        MyPromise.prototype.then = function(onFulfilled, onRejected) {
            var self = this;
            if(!onFulfilled) {
                onFulfilled = function(val) {
                    return val;
                }
            }
            if(!onRejected) {
                onRejected = function(reason) {
                    throw new Error(reason);
                }
            }
            var nextPromise = new MyPromise(function(res, rej) {
                if(self.status === 'Fulfilled') {
                    setTimeout(function() {
                        try{
                            // var nextResolveValue = onFulfilled(self.resolveValue);
                            // res(nextResolveValue);
                            var nextResolveValue = onFulfilled(self.resolveValue);
                            ResolutionReturnPromise(nextPromise, nextResolveValue, res, rej);
                        }catch(e) {
                            rej(e);
                        }
                    }, 0);
                }
                if(self.status === 'Rejected') {
                    setTimeout(function() {
                        try{
                            // var nextRejectValue = onRejected(self.rejectReason);
                            // res(nextRejectValue);
                            var nextRejectValue = onRejected(self.rejectReason);
                            ResolutionReturnPromise(nextPromise, nextRejectValue, res, rej);
                        }catch(e) {
                            rej(e);
                        }
                    }, 0);
                }
                if(self.status === 'pending') {
                    self.ResolveCallbackList.push(function() {
                        setTimeout(function() {
                            try{
                                // var nextResolveValue = onFulfilled(self.resolveValue);
                                // res(nextResolveValue);
                                var nextResolveValue = onFulfilled(self.resolveValue);
                                ResolutionReturnPromise(nextPromise, nextResolveValue, res, rej);
                            }catch(e) {
                                rej(e);
                            }
                        }, 0);
                    });
                    self.RejectCallbackList.push(function() {
                        setTimeout(function() {
                            try{
                                // var nextRejectValue = onRejected(self.rejectReason);
                                // res(nextRejectValue);
                                var nextRejectValue = onRejected(self.rejectReason);
                                ResolutionReturnPromise(nextPromise, nextRejectValue, res, rej);
                            }catch(e) {
                                rej(e);
                            }
                        }, 0);
                    });
                }
            })

            return nextPromise;
        }

        let oP = new MyPromise((res, rej) => {
            res(1);
        });
        oP.then((val) => {
            console.log(val + 'ok');
            return new MyPromise((res, rej) => {
                rej(0);
            })
        }, (reason) => {
            console.log(reason + 'no');
        }).then((val) => {
            console.log(val + 'then after');
        }, (reason) => {
            console.log(reason + 'then after');
        });
        MyPromise.race = function(promiseArr) {
            return new MyPromise(function(resolve, reject) {
                promiseArr.forEach(function(promise, index) {
                    promise.then(resolve, reject);
                })
            })
        }
        MyPromise.all = function(promiseArr) {
            return new MyPromise(function(resolve, reject) {
                var successNum = 0;
                promiseArr.forEach(function(promise, index) {
                    promise.then(function() {
                        ++successNum == promiseArr.length ? promise.then(resolve, reject) : "";
                    }, function() {
                        promise.then(resolve, reject);
                    });
                })
            })
        }

十一、es6 Iterator

    迭代模式：
        提供一种方法可以顺序获得聚合对象中的各个元素，是一种最简单且最常见的设计模式。
        它可以让用户通过特定的接口巡访集合中每一个元素而不用了解底层的实现。
    迭代器：
        依照迭代模式的思想而实现，分为内部迭代器和外部迭代器
    内部迭代器：
        本身是函数，该函数内部定义好迭代规则，完全接手整个迭代过程，
        外部只需要一次初始调用
        Array.prototype.forEach、jQuery.each
    外部迭代器:
        本身是函数，执行返回迭代对象，迭代下一个元素必须显示调用，调用复杂度增加，但灵活性增强。
        function OuterIterator(o) {
            let curIndex = 0;
            let next = () => {
                return {
                    value: o[curIndex],
                    done: ++curIndex == o.length
                };
            };
            return {
                next
            }
        }
        let arr = [1,2,3];
        let oIt = OuterIterator(arr);
        oIt.next();
    迭代器目的：
        标准化迭代操作
    eg:
        服务端提供数组数据给前端，前端for循环遍历，但由于业务变化，使得数据结构发生变化，返回对象或是Set Map,导致前端代码大量重写。
    解决：
        es6引入Iterator,部署在NodeList、arguments、Array、Set、Map、字符串
        等数据Symbol.iterator属性，使得这些数据是Iterator可迭代的，
        能进行for of 、... 、Array.from等操作

    Symbol数据结构：
        第7种数据结构
        特点：
            唯一，可作为对象的属性，有静态属性Symbol.iterator
        let os = Symbol('abc');
        console.log(os);//Symbol(abc)
        let os1 = Symbol('abc');
        os == os1;//false
        let os2 = Symbol({
            name: 'lmj'
        });
        console.log(os2);//Symbol([object Object])
        let os3 = Symbol({
            name: 'lmj',
            toString(){
                return 'duyi';
            }
        });
        console.log(os3);//Symbol(duyi)

        let obj = {
            [os2]: 'hello'
        }

        console.log(Symbol.iterator, Symbol('Symbol.iterator'));
        //Symbol(Symbol.iterator) Symbol(Symbol.iterator)

        let obj = {
            0:'a',
            1: 'b',
            2: 'c'
        };
        console.log(...obj);//报错 obj不能被迭代
        let obj = {
            0:'a',
            1: 'b',
            2: 'c',
            length: 3,
            [Symbol.iterator]: function() {
                let curIndex = 0;
                let next = () => {
                    return {
                        value: this[curIndex],
                        done: ++curIndex == this.length
                    };
                };
                return {
                    next
                }
            }
        };
        console.log([...obj]);//['a','b']
        for(let p of obj) {
            console.log(p);// a b
        }

十二、es6 Generator
    生成器，本身是函数，执行后返回迭代对象，函数内部要配合yield（产出）使用，
    Generator函数会分段执行，遇到yield即暂停
    特点：
        function 和函数名之间要带*
        函数体内部yield表达式，产出不同的内部状态（值）

    function *test() {
        yield 'a';
        console.log(1);
        yield 'b';
        console.log(2);
        yield 'c';
        console.log(3);
        return 'd';
    }
    let oG = test();
    oG.next();//{value: 'a', done: false}
    //============================================
    function *test() {
        let a = yield 'a';
        console.log(a);
        let b = yield 'b';
        console.log(b);
        let c = yield 'c';
        console.log(c);
        return 'd';
    }
    let oG = test();
    oG.next();//{value: 'a', done: false}
    oG.next('lmj');//a为lmj {value: 'b', done: false}
    oG.next('lmj2');//b为lmj2 {value: 'c', done: false}
    oG.next('lmj3');//c为lmj3 {value: 'd', done: true}
    //==================================================
    let obj = {
        0:'a',
        1: 'b',
        2: 'c',
        length: 3,
        [Symbol.iterator]: function *() {
            let curIndex = 0;
            while(curIndex != this.length) {
                yield this[curIndex];
                curIndex ++;
            }
        }
    };
    console.log([...obj]);//['a','b', 'c']
    //===================================================
    let fs = require("fs");
    function readFile(path) {
        return new Promise((res, rej) => {
            fs.readFile(path, 'utf-8', (err, data) => {
                if(data) {
                    res(data);
                }
            });
        })
    }
    // readFile('./data/number.txt').then((data) => {
    //     return readFile(data);
    // }).then((data) => {
    //     return readFile(data);
    // }).then((data) => {
    //     console.log(data);
    // });

    // Generator改写
    function *read(url) {
        let val1 = yield readFile(url);
        let val2 = yield readFile(val1);
        let val3 = yield readFile(val2);
        return val3;
    }
    // let oG = read('./data/number.txt');
    // let {value, done} = oG.next();
    // value.then((val) => {
    //     let {value, done} = oG.next(val);
    //     value.then((val) => {
    //         let {value, done} = oG.next(val);
    //         value.then((val) => {
    //             console.log(val);
    //         })
    //     })
    // });
    //用递归优化 优雅的解决回调地狱问题
    // function Co(oIt) {
    //     return new Promise((res, rej) => {
    //         let next = (data) => {
    //             let {value, done} = oIt.next(data);
    //             if(done) {
    //                 res(value);
    //             }else{
    //                 value.then((val) => {
    //                     next(val);
    //                 }, rej);
    //             }
    //         }
    //         next();
    //     });
    // }
    // Co(read()).then((val) => {
    //     console.log(val);
    // }, () => {
    //
    // });
    //Co 库
    //npm install co --save
    let co = require('co');
     co(read()).then((val) => {
         console.log(val);
     });
     //=====promise优化=================================================
     let fs = require('fs');
     //error first
     //fs.readDir fs.writeFile 异步方法
     //node单线程
     fs.readFile('./data/number.txt', 'utf-8', (err, data) => {
         fs.readFile(data, 'utf-8', (err, data) => {
             fs.readFile()
         })
     })
     //Promise优化 高阶函数
     function promisify(func) {
         return function(...arg) {
             return new Promise((res, rej) => {
                 func(...arg, (err, data) => {
                     if(err) {
                         rej(err);
                     }else{
                         res(data);
                     }
                 })
             })
         }
     }
     //promise化异步操作
     let readFile = promisify(fs.readFile);
     let writeFile = promisify(fs.writeFile);
     let readDir = promisify(fs.readDir);
     readFile('./data/number.txt', 'utf-8').then((val) => {
         console.log(val);
     });
     //===============================================
     function promisifyAll(obj) {
         for(let key in obj) {
             let fn = obj[key];
             if(typeof fn === 'function') {
                 obj[key + 'Async'] = promisify(fn);
             }
         }
     }
     promisifyAll(fs);
     // fs.readFile => fs.readFileAsync
     //fs.writeFile => fs.writeFileAsync
     //fs.readDir => fs.readDirAsync
     fs.readFileSync('./data/number.txt', 'utf-8').then((val) => {
        console.log(val);
     });

     //bluebird p 库
     //npm install bluebird --save
     let bluebird = require('bluebird');
     bluebird.promisify(fs.readFile());

十三、es7 async & await

    async 函数是Generator语法糖，通过babel编译后可以看出它就是
    Generator + Promise + Co思想实现的，配合await使用
    优雅的解决异步操作问题

    let fs = require("fs");
    function readFile(path) {
        return new Promise((res, rej) => {
            fs.readFile(path, 'utf-8', (err, data) => {
                if(err) {
                    rej(err);
                }else{
                    res(data);
                }
            });
        });
    }
    async function read(url) {
        try{
            let val1 = await readFile(url);
            let val2 = await readFile(val1);
            let val3 = await readFile(val2);
            return val3;
        }catch(e) {
            console.log(e);
        }
    }
    read('./data/number.txt').then((val) => {
        console.log(val);
    });
    //同步并发异步结果
    //Promise.all
    // 有一个错误时不影响其他异步的操作
    async function read1() {
        let val1 = null;
        try{
            val1 = await readFile('./data/number1.txt');
            console.log(val1);
        }catch(e) {
            console.log(e);
        }
    }
    async function read2() {
        let val2 = null;
        try{
            val2 = await readFile('./data/number2.txt');
            console.log(val2);
        }catch(e) {
            console.log(e);
        }
    }
    async function read3() {
        let val3 = null;
        try{
            val3 = await readFile('./data/number3.txt');
            console.log(val3);
        }catch(e) {
            console.log(e);
        }
    }
    function readAll(...arg) {
        arg.forEach((ele) => {
            ele();
        });
    }
    readAll(read1, read2, read3);


