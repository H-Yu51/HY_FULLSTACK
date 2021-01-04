# 电商是  2021 的主题

 1. 得物APP  目的
   新的细分领域的电商在上市过程中
   - 得到： 知识电商
   - 得物： 潮牌电商
      群体  25岁一下的潮牌群体 
      阿里电商：商家/女性电商
      腾讯电商：趋于互联网关系链

      拼多多 / 京东

 2. 功能细分 商品卡片设计
    - 难点是半圆   -> 更大半径的⚪  圆的中心改变
    - 鞋
       两个运动  向上  转角   animation

    - 文字部分  
        由  0 -> 1
        container

 3. 良好的结构
    .dw  项目代号
    .container 
        容器 宽度 + margin auto
        定位
        弹性布局 水平居中

 4. stylus 用法

    stylus -w *.stylus -o *.css
    watch 监听
    output 向外输出
    - 用tab  缩进
    - 用tab进行嵌套css
      .dw_card
        &:hover
        &:after
        .dw_card__imgBx

     & 代表 不是下级  是引用上级
      
