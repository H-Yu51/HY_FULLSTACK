# 当你在浏览器输入了一个url后   看到页面发生了啥？
#  当你有了一台服务器后，可以干什么？


    docker  一台物理主机 虚拟出很多云服务器
    - ip
        121.37.168.95  华为云 弹性公网  ？  应如何提供服务？  可以看到网页？
        浏览器域名或IP访问，https
        centos 8   ？  web 服务器

        Nginx  是一个高性能的http和反向代理的web服务器
   - putty  远程 SSH  链接  华为云服务器
        root password

   - web服务  ngnix 安装
    安装依赖

    yum -y install gcc  gcc-c++ autoconf pcre-devel make automake

    yum -y install wget httpd-tools vim
    yum list

    yum install nginx

    nginx -v
    nginx  启动服务器
