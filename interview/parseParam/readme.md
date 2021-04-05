 
http://localhost:8080?a=1&b=2&c=3&a=4&keyword=%E6%89%8B%E6%9C%BA

1. {} url 所有的数据
2. ？ split
3. = 切割
4. 放到json  {}  key：value
5. a出现两次？
6. keyword  被编码后的 原因是中文

- 围绕url的考题  很多
    1. 从输入URL到看到页面   发生了什么  ？
    2. 跨域   由协议：域名/路径：端口？查询字符串组成
    3. http/https http2 的区别
    4. 如何解析字符串为对象

- 如何解析字符串为对象
    1. 如何得到问好后面的查询字符 
    ```
     /.+\?(.+)$/.exec(url)[0]
     // 结果 a=1&b=2&c=3&a=4&keyword=%E6%89%8B%E6%9C%BA
    ```
     正则 ()    括号代表匹配单元  .+ 匹配所有   ？ 后面的都是需要的   问号需要转义  \?
      exec()  执行正则 表达式  $1  就是结果[0]

- 切割=后面形成的 key：value  使用es6的数组解构   
   用test 验证 正确性

   1. a = 1  a = 4  两项 重复   a = [1,4]  
    ```
    // if(key in paramsObj)
            if(paramsObj.hasOwnProperty(key)){
                paramsObj[key] = [].concat(paramsObj[key],val);
                // 有图有真相
                ！[]()
            }else{
                paramsObj[key] = val
            }
    ```

   2. encodeURLComponent  编码     decodeURLComponent  解码

  - 解析参数的过程 有几个规则
    值需要decode  重复出现的key组成数组    只有key 没有值的 默认为true
