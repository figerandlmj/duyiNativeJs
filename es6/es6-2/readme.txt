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
    //==value,writable 和get,set不能同时使用=======================================
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
            Reflect.get(target, key, value);
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

    console.log("_val" in oProxyData);//false
    console.log(delete oProxyData.val);
