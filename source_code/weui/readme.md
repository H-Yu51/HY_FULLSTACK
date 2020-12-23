# 源码分析



## 国际化的命名规范  BEM


  1. 取类名
    - .weui-btn
        btn 组件名 70%由框架提供， 基础类
        weui 项目前缀  tb tm 项目组 
    
  2. CSS知识点
   - 元素分为行内元素和块级元素    inline  如<a>标签（方便 用于作按钮）    block inline_block(行内块级元素)  只要块级元素可以设置margin（left/ringht）设置居中  行级元素margin不生效  块级元素 会把其他元素挤走
   - 元素 在页面上的占位， 由 内容（w h） padding（内边距） border（边框） margin（外边距） position（定位）line-height（文字高度）
  3. 面向对象的CSS
   - 一个元素有多个类  
     .weui-btn      Block   基础类
     .weui-btn_rimary       Modifier   多态  
  4. npm i -g live-server
    live-server    web 服务器  
  
  5. 结构 
      结构套路  移动端页面    超越项目的架构
       .page>.page__hd+.page__bd
       weui  项目组
       BEM 搭积木
       Block  块
       Element 子元素   ___
       Modifier  装饰   _
       

