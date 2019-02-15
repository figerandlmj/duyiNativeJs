bootstrap 富文本编辑器 wysiwyg
https://github.com/mindmup/bootstrap-wysiwyg


linux发布:

关闭防火墙 systemctl disable firewalld
重启 reboot

将数据库改成任何一台机器都可访问
show databases ;
use mysql;
select host,user from user;
show create table user;
update user set host="%" where host = "localhost" and user="root";

数据库连接地址改成服务器ip
重启mysql服务

git clone 项目地址  //在虚拟机上下载git项目地址
npm install //安装依赖
node index.js //启动服务

C:\Windows\System32\drivers\etc
修改hosts文件
新增  服务器ip www.myBlog.com
若要不写端口，则将其改成80

ps aux |grep "node"  //杀掉进程

