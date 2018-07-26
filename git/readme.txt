版本控制系统

集中式 svn
分布式 git

初始化本地仓库
git init

远程仓库  github 注册登录 新建项目

秘钥SSH配置
	ssh-Keygen 生成秘钥 
	将.ssh文件夹下的id_rsa.pub文件的内容复制到
	github ->setting ->SSH and GPG keys ->new SSH -> key

本地环境配置
	git config --global user.name 'figerandlmj'
	git config --global user.email 2270200373@qq.com

	git config --list 查看配置

本地分支与远程分支建立关联
git remote add origin https://github.com/figerandlmj/duyiNativeJs.git


git clone https://github.com/figerandlmj/duyiNativeJs.git

工作目录  暂存区    git本地仓库  git远程仓库

git add index.html
git add .
git status
git commit -m 'add'

撤销工作区修改
	git checkout -- index.html 回退到最近的add（暂存区）点 
本地仓库文件修改（不覆盖工作区）
	git reset Head^  回退到上一个commit版本
	git reset Head~4 
	git reset Head 675af09（指定commit）

git reset --hard HEAD^  工作区文件被撤销到上一个commit

--hard  回退全部    工作区文件被撤销
--mixed 回退部分    add点
--soft  只回退HEAD  commit点

git status 查看状态
git log    查看日志
git reflog 查看历史操作记录

git diff  比较工作区与暂存区
git diff HEAD  比较工作区与本地仓库中最近一次commit的内容
git diff -cached  比较暂存区与本地仓库中最近一次commit的内容
git diff commit-id commit-id  比较两个commit之间的差异

git branch 查看分支
	master 默认分支
git branch dev 创建分支dev

git remote -v  查看远程仓库

git checkout dev 跳到dev分支
git checkout -b dev2   创建dev2分支并跳转到此分支

git merge dev  合并当前分支与dev分支

添加源仓库地址为远程仓库
git remote add origin https://github.com/figerandlmj/duyiNativeJs.git

git pull

git push origin master

git remote rename origin jQuery  改变名origin为jQuery
git push jQuery master

文件暂存
git stash save -a 'msg' 添加改动到stash
git stash list  查看stash列表
git stash pop   恢复改动
git stash drop  删除暂存
git stash clear 删除全部暂存


博客框架 hexo
https://hexo.io/

npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server

部署到git
docs -> deployment -> git
npm install hexo-deployer-git --save

修改配置文件_config.yml
deploy:
  type: git
  repo: https://github.com/figerandlmj/blog.git
  branch: master

# URL -> root: /blog  修改资源路径

hexo g == hexo generate#生成
hexo d == hexo deploy#部署

blog.git -> setting -> github pages ->source-> master branch
https://figerandlmj.github.io/blog/

hexo n "我的博客" == hexo new "我的博客" #新建文章
hexo s == hexo server #启动服务预览

git报错 Unknown SSL protocol error in connection to github.com:443
git config http.sslVerify "false"  
git config --global http.postBuffer 524288000
git config http.postBuffer 1048576000
git报错 The remote end hung up unexpectedly
[http]
	postBuffer = 1048576000


解决github 下载慢即无法下载的情况
https://blog.csdn.net/qq_38977097/article/details/80770987
error: RPC failed; curl 56 OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054
fatal: The remote end hung up unexpectedly
fatal: early EOF
fatal: index-pack failed

解决http方式clone下来的代码push时每次需要输入用户名密码
配置本地ssh添加到github  
创建密钥ssh-keygen -t rsa -C "youremail@example.com"
git remote rm origin
git remote add origin git@github.com:whbing147/learngit.git
git push -u origin master





