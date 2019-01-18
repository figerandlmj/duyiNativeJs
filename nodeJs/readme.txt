一、学习方法
    1. 学会提问
    2. 科学思考

    （1）为什么学nodeJs？
    nodeJs火啊， 很多公司招聘都要求
    很多公司要求会nodeJs

    （2）公司为什么要用nodeJs？
    优点
        高性能
        事件驱动 省事，无阻塞IO
        轻量级 只做web

    （3）nodeJs和javascript有什么区别？
    nodeJs是平台，javascript是语言（运行在不同环境语义不同）

    （4）语言都有哪些？
    客户端
        浏览器 html css js
        pc软件 c c++ VB
        安卓软件 Java python c++ c#
        ios软件 c++ objective-c
    服务器
        java c++ nodeJs python php c ...

    （5）什么是计算机语言，什么是编程语言？
    console.log("hello world");

    （6）编译过程
        词法分析
            关键字
                var function if else for break continue
            标识符
                var a = 1;  //a
                function run(){} //run
            分界符
                var a = 1;
                var b = 2;//;
                function run(a, b){return a+b;} // () {}
            运算符
                + - * / & | ! ^(异或)
        语法分析
            console.log("hello world");
            三元式
            四元式
            指令 参数 地址 运算方式
            定义 hello world ox12306 存储
            输出 地址 ox12306 打印
            翻译成短语或命令语句
        语义分析
            程序运行在操作系统
            生成一个操作系统能执行的程序
            操作系统暴露出来的接口
            操作系统的命令

    （7）x和y词法相同，是同一种语言吗？
    不相同
    （8）x和y词法和语法都相同，是同一种语言吗？
    不相同
    （9）世界上最早的浏览器？
    计算机科学之父 图灵
    计算机之父  冯诺依曼
    NCSA Mosaic 伊利诺伊大学 香槟分校 NCSA组织 NCSA_Mosaic/2.0(windows3.1)
    Netscape     Mosaic netscape0.9
    Mozilla = Mosaic + Killer
    Mozilla = Mosaic + Godzilla

    微软 IE 和Windows98捆绑销售

    Mozilla重生  Gecko优秀的渲染引擎  Mozilla5.0

    konqueror
    Linux KHTML like Gecko
    Mozilla/5.0(compatible;konqueror/3.2;FreBSD)(KHTML,like Gecko)

    Opera 自定义user-agent

    chrome  V8 js执行效率大大提高
    快 渲染引擎和js引擎

    nodeJs之父 Ryan Dahl 写c c++
    要做一个适合写web服务的高级语言 瞄准js （v8引擎）
    垃圾回收机制 多线程 线程池

    （10）学习的本质
    网络
    系统 Linux
    设计模式
    设计思想
    算法

二、Linux基本操作
    1. 历史
    最早的计算机是批处理
    多路信息计算系统 (Multics)
    Bell  c语言
    MIT
    GE

    Ken Thompson 太空大战
    Uniplexed imformation and computing service  (Unics ->Unix 1970 Unix元年)

    Richard Stallman 自由软件之父

    Unix 第5版 -> 衍生版BSD (Berkeley software distribution)

    1991 Linus  linux  开源免费
    2. 种类
    Ubantu
        漂亮界面的linux
        很完善的包管理
        强大的软件源支持
        丰富的技术社区
    Centos  相当于Red Hat的免费版本
        常做大公司服务器操作系统
        Centos6.5
        人性交互的命令行
        硬盘空间大 内存占用小时用
    Debian
        固若金汤  稳定性
        大系统性能不是特别好
        硬盘空间小 内存（128M）占用小时用
        命令行操作起来费劲
    RedHat 出自linux
        商业 付费
        Red Hat -> fork Centos 分支
    REHL red hat 的一个interprace 的Linux
        商业的

    3. 安装
    mac 自带linux
    windows系统  需要装虚拟机

    CPU虚拟化 （默认是关闭的）
    重启电脑 界面中不停按f2/f8/f10/f12 进入主板界面 (百度搜windows 开启vt-x)

    虚拟机：
    VM Ware 收费
    Virtual Box （Oracle）
    下载安装 Oracle VM VirtualBox：
    新建 -> linux 版本选择other linux (64-bit)  -》 内存大小512 -》 存放在d盘vm文件夹下
    设置 -》 存储 没有盘片 选择磁盘d盘vm文件夹下iso文件夹下的iso镜像文件
        -》 网络 选择桥接网卡
    双击启动新建的虚拟机

    下载Centos：www.centos.org  下载 DVD ISO （4G）
    d盘  -》 vm 文件夹 -》 iso 存放下载的镜像/ back 做备份/

    4. 命令
    用户名默认 root
    密码
    ll 当前路径
    ping www.baidu.com  测试网
    开启网络：
        cd /etc/sysconfig/network-scripts/  进入路径
        vi ifcfg-enp0s3 打开文件
        按i变成可编辑状态 最后一行ONBOOT修改成yes
        按esc :wq 回车 保存退出
        reboot 重启
    ip addr  ip地址
    5. 下载安装nodejs
    linux 64bit   复制下载的链接地址

    Xshell：在命令行中能复制粘贴
    安装一个Xshell
    新建会话 输入上面获取的ip 端口22

    yum install -y wget
    wget 复制的nodejs下载的链接地址

    解压文件
    xz -d node-v8.11.3-linux-x64.tar.xz
    tar -xf node-v8.11.3-linux-x64.tar

    cd node-v8.11.3-linux-x64 进入文件夹
    cd ..  返回上一层目录
    创建快捷方式:
    ln -s ~/node-v8.11.3-linux-x64/bin/node /user/bin/node    ~表示home路径
    ln -s ~/node-v8.11.3-linux-x64/bin/npm /user/bin/npm

    cd /bin 根路径下的bin文件夹
    ll  列出此文件夹下有的命令

    6. 文字层次化标准协议
    bin 可执行文件
    etc 配置文件
    root 管理员文件
    usr 软件安装相关
    var 系统运行过程相关
    boot 系统开机相关的目录，存放开机会使用到的文件
    dev linux上所有的接口都是以文件形式存在的
    home 存放各个用户的用户文件
    lib linux系统函数库
    media 可删除的设备
    mnt 类似media
    opt 第三方软件存放库
    root 管理员目录
    sbin 管理员的可执行文件
    tmp 临时文件 需要定时删除
    proc 虚拟文件系统
    sys 虚拟文件系统，内核模块
    lost+found 当文件系统发生错误时，可以将丢失的数据片段放在此目录

    cd ~  进入~文件夹里了
    pwd  管理员用户在/root

    7. linux 命令
    cd ~
    cd ..
    ll -> ls -l
    ls
    ls -al 可看到隐藏文件
    pwd  查看当前路径
    mkdir test  创建文件 当前路径下
    mkdir /test 根目录下
    mkdir -p test/abc 没有时不报错，新创建
    rmdir test 安全删除
    rm -rf test 删除

    vi test.txt  创建文件 未保存
    i 进入编辑状态
    esc 返回命令状态
    :q 退出
    :wq 保存并退出
    :q! 强制退出不保存
    rm -f test.txt 删除文件

    tail test.txt  看文件后10行
    tail -200 test.txt 看文件后200行
    tail -f test.txt 浮动 二屏文件内容变化了一屏会自动变化
    tail test.txt |grep "user"

    ssh root@192.168.7.1 连接root用户
    vi add.sh  创建一个代码执行文件
    chmod 777 add.sh  赋权
    ./add.sh  执行

    cat test.txt  打印出文件所有内容
    cat test.txt |grep "panda" 过滤出所有带"panda"行

    第1位：
        - 文件
        d 路径
        l 连接
        前3  当前所属用户权限 rw- 可读可写不可执行
            r 可读   4
            w 可写   2
            x 可执行 1
        中3  当前所属组权限
        后3  其他用户权限

    chmod 数字数字数字 文件
          rw- r-w -wx
    chmod 6    5    3   文件名

    配置：
    内存 16G  proxy 512M service 1G cache 2G database 1G release 2G
        8G内存 proxy 512M service 1024M cache 1024M database 512/1024 release 1024（发不软件）/512(自己写脚本)
    cpu i3/i5
    机械硬盘（慢）/固态硬盘

    用户、用户组的增删改查：
    useradd panda  创建账户
    cat /etc/passwd 列出所有用户
    panda:x:1000:1000::/home/panda:/bin/bash
    用户名 密码 用户id 用户所在组id 备注 用户目录 shell命令所在目录
    passwd panda 设置密码
    ssh panda@192.168.0.120 连接panda用户
    cat /etc/group 列出用户组  创建用户时系统会自动生成一个跟用户名一样的用户组
    groupadd animals 创建用户组
    useradd -G animals monkey 创建用户monkey属于用户组animals, 并且会生成一个monkey用户组
    groupdel test 删除组
    userdel monkey 删除用户
    groups panda 看用户属于哪个组
    whoami panda 看用户属于哪个组
    usermod -g animals dog 修改用户dog的主要组为animals
    id dog 查看dog信息
    su panda 切换用户
    exit 退出用户

    lscpu 查看机器cpu类型
    df 查看磁盘空间或 df -h
    df -i 查看磁盘索引
    ps aux 查看系统上启动的服务
    ps aux |grep "node"
    top 系统资源占用情况
        系统时间 系统启动时间 几个用户在登录 1分钟 5分钟 15分钟cpu负载情况
        系统里正进行的进程数 运行 休眠 停止 阻塞
        用户空间暂用cpu百分比 系统空间... 改变过优先级的... 空闲cpu io等待...
        内存使用情况
        内存交换情况
        ctrl c  退出

    一个node程序：
    vi test.js
    var http = require("http");
    function hello (req, res){
        res.writeHead(200, "Content-Type":"text/plain");
        res.end("hello,world");
    }
    http.createServer(hello).listen(12306, "192.168.7.167");
    console.log(hello,world);
    node test.js 执行文件代码
    http://192.168.7.167:12306  浏览器访问输出 hello,world
    systemctl disable firewalld 关闭防火墙
    reboot 重启

三、http协议（HyperText Transfer Protocol）超文本传出协议
    1.协议层次
    五层网络协议
        应用层 浏览器 app HTTP FTP（文件传输）DNS（域名解析） SMTP(邮箱) Telnet（天王盖地虎--邓哥）
        传输层 交换机上 TCP（告诉我送到了，我在睡觉） UDP（你去送吧，我睡觉去了）
        网络层 ip ICMP RIP BGP （送行地址）
        数据链路层 ATM FDDI 如何传输 PPP SLIP（搭乘什么样的交通工具过去）
        物理层 OSI的物理层规范 电流 编码 频率 ISO2110 IEEE802（搭乘工具的时候，是什么速度）
        200： 收到信了
        404: 没找到这个人
        302: 人搬家了
        502：地方找到了，人也在，不开门
        304： 还看刚才那封信就行
    七层网络协议
        应用层
        表示层
            加密，格式转换（摩斯电码）
        会话层
            解除或者建立其他节点的联系
        传输层
        网络层
        数据链路层
        物理层
    2.http协议
    yum install curl
    curl www.baidu.com  获取网页http代码
    curl -i www.baidu.com 包括返回头里面的信息

    request
        请求头
        请求体
            文本格式
            二进制格式 （有分隔符）
    response
        返回头
        数据体
        cache control
            可否缓存
                public 可被任何中间层缓存，包括服务器、代理服务器
                private 只能被一个东西缓存，优先服务器缓存
                nocache 不要相信缓存，使用缓存前要向服务器验证一下
                only-if-cached 只要有缓存，就不请求服务器
            到期时间
                max-age 缓存的最大周期（s）
                max-stale 表示客户端愿意接受一个过期的资源，但是响应不能超过设置的过时时间
                min-fresh 表示客户端希望在指定的时间内获得最新的响应
            重新验证加载
                must-revalidate 在使用缓存之前验证资源的状态，如果资源过期则不能使用
                proxy-revalidate 和上面的作用相同，适用于共享资源（比如代理服务器）
            no-store 不许使用缓存
            no-transform 不许对缓存资源进行转换

    3.环境变量
        在电脑-属性-高级设置-环境变量 里面设置 path 时可以直接用命令打开应用


四、nodeJs
    1.后端的规范与思想
    1.1 分层
        web层/controller层 （接收和发送http请求，封装）
            LoginController （接收参数，判断是否非法，传给服务器）
        业务逻辑层（服务层，***Service）
            LoginService （尝试获取用户的密码，进行比较）
        DAO层（数据访问对象）
            DataBase(DB)： 存数据
            业务：对对象进行操作
            如果要存储：对象转为数据
            如果要读取：数据转为对象
            LoginDAO （从数据库获取数据，并转换为对象）
            Domain：对象
                User
        持久层
            存在磁盘上
            文件、数据库

        设计模式：单一职责原则
    1.2 模块化
        es6导入和导出;es3、es5缺点 缺少模块化概念
        js规范缺乏管理机制 bootstrap jquery
            NPM 下载的中央仓库
    1.3 nodeJs模块化
        require
        module.exports
    2.基础的API
       http https  应用层

       net:
       tcp         运输层/传输层
       ip          网络层

       http协议是基于tcp/ip协议的
    3.常用的框架

    4.web项目
        接收web请求
        处理业务逻辑
        文件操作
        数据库
            关系型   mysql
                mySql官网 下载mySql
                mySql 小海豚
                mySql navicat
                mySql dataGrip   (jetbrains公司)
            非关系型 mongoDB

        反向代理服务器
            ip哈希
            轮询
    5.大项目




















