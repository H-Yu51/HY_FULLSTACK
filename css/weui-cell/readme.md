##  css的程序性


- BEM
    Block weui-cell   项目名字   


- stylus 
  css 规则太多  
  stylus  是css 的 超集   可以编译成css

  - 省去了 {：；}  高速完成

  - stlus -w cell.styl -o cell.css
      写的是stly文件， html 无法显示，
      -o  编译成 cell.css文件
      -w 边写边编译 

- 弹性布局 flex
  1. 如何启用？
    display: flex|inline|block|inline-block
    弹性布局设置在 父元素上，  启动了新的空间 
    原有的盒子属性被打破了， 
    .weui-cell(display:flex)>新的空间，原有的块级能力被干掉 .weui-cell__bd(flex:1 主元素)+.weui-cell__hd(辅)

- 伪元素
  Css 高级使用技巧 ， 唯一一个可以在css中声明的html元素，箭头，边框等高级特性


    content 属性为必须属性！！

    定位 pos：r pos：a

