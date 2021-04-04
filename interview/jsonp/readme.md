# 跨域 
 - 后端跨域解决方案 中间件 设置属性


 - JSONP  json with padding
    `fetch('https://photo.sina.cn/aj/index?page=1&cate=recommend')
        .then((data) => {
            console.log(data);
        })`
    同源策略  为了安全   端口、协议、域名 不同就会跨域  同源策略  为了安全会让一个域的js无法和另外一个域的内容进行交互
 1. 通过 script/img（标签自带跨域能力） scr 向服务器 xxx.com 发送请求（规避js代码的xhr） 
     参数带了一个 &callback= xxxx 参数  来指定返回参数的名字（缺点：由于参数原因，只能用get请求）
 2. xxx.com 从 &callback= xxxx 参数  获知页面上有一个xxx函数有一个函数等待调用   把 xxx作为函数     function xxx（data）{ console.log(data)}

 3. xhr/fetch 因js 的同源机制  无法请求跨域 的数据 资源
     迂回到使用script  有跨域能力  在http请求中带上 &callback=callback  这个padding，sina服务器就在json数据中包一层xxxx函数 当资源到达后 把带有padding的数据 就是可以找script得到运行的函数  页面上已经准备好了函数 从而想过一样