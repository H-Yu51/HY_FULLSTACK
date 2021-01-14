#  水果电商小程序

 shop（店） -> 水果

 1. 首页设计店营业/打烊的 需要
 2. 页面功能  搜索、swiper、列表 组件化思想
 3. isShow?  false 不展示没准备好
 4. 搜索
 5. application -> pages -> components -> 组标
    - 小程序由页面构成  
    - 页面由组件组成
    - 组件 由组标构成

 6. tab切换
    1. 设置数据 和 tab 状态相关  activeTypeId 

    2. 多个type 
      - css flex 1/4 位置
 7. 数据库设计
    - fruit-board 
       支持where操作
       myClass 0 1 2 3 (属于哪个 bandtap)