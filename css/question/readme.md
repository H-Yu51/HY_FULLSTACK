- 动手实战

 1. 做小程序
    1.1 组队
    1.2 直播写项目

 2. 写文章
    2.1 codewars 刷题总结
    2.2 leetcode 每日一题
    2.3 js

 3. 模仿项目 视频讲解


 -  三列式布局方案

  1. main 自动分配宽度的, 左右固定，  三列
    淘宝页面很复杂， 用户快一点看到最重要的内容， 只要网页显示提快0.1秒， 每天可以多一千万的收入。 
  2. main 元素放到最前面 

- 经典的PC圣杯式布局 
  container padding-left|right 把左右留出来， main 自动的分配 100%
  #left #right 归位 
  .column 三个元素的公共类 float:left 
  从块级元素变成浮动元素
  #left margin-left:-100%