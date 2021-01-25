- 图片性能优化， 减少http请求数，  lazyload throttle

- 每一个图片相当于一次http请求，图片多了的话，耗性能比较严重。而将jpg转化成base64格式的图片，则极大地减少了请求数，因为base64是文本格式，可以直接放在body里。
- 优点 (1)base64格式的图片是文本格式,占用内存小,转换后的大小比例大概为1/3,降低了资源服务器的消耗; (2)网页中使用base64格式的图片时,不用再请求..

- data:img/jpg;base64,   编码格式     /9j/ 文件内容

- webp   体积更小


1. 网页性能优化
 - 历史  lazyload scroll + API  减少执行次数  throttle
 - 现在   base64  
 - 大图  比如 头图 banner图  商品详情页的图片
    webp 大小减少25%+   清晰度不受损     再加上  lazyload   进行优化


 - js多线程  worker   没有成为主流
   new Worker('js文件')  单独运行，不会阻塞主线程 
   1. 跟dom 相关的事情不能做
      js 是css/html 之间的第三者   极耗性能 
      worker 不能和主线程去同时操作同一个元素
