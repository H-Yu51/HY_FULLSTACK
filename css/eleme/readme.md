# 
  - stylus 模块化
    @import "./base.styl"    引入模块

  - vertical-align:top
    兄弟元素的对齐方式 ，有图片的时候

    inline-block + font-size 0   既不换行 也不inline

  - brand 图标  60*36 
    30*18 手机大部分是 retina屏  
    三倍retina屏  90*54
    前端别打包，图片要搞好
    css像素  物理像素   30*18
    3倍 retina  90*54
    @media (-webkit-min-device-pixel-ratio: 3)

  - bg-image($url) 函数 mixin 混合
    函数运行后有一个返回值
    mixin 是所有的代码都混在调用它的位置上去
    完成这部分代码的复用

  - stylus 让css 变成了编程语言
    1. 嵌套 tab 缩进let {} 代码块  方便管理
        不用的就集体下线   很干净 好管理
    2. 函数能力  代码复用
    3. 变量
