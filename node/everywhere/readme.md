1. nodemon 让我们的node 支持热更新  nodemon修改了还是要刷新  只是不用 ctrl + c退出了？

2. 如何不写死端口号， 可以让我们在运行时， 环境来得到？
  设置 
  cross-env  跨平台，  window mac  linux  然后cross是可以跨mac，window，和Linux平台获取env

  process.env 是兼容性问题
  PORT=123  SET PORT=1234  系统变量
