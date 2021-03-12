#  网易面试题  产品


    css3  clock 逻辑思维  基础考题准备

    transform-origin: top center;  基点
    animation: swing 5s infinite linear;  动画效果



    禁止拉伸
    textarea{
                resize: none;
            }


    滚动条
    .box {
    height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

# -webkit-overflow-scrolling 属性控制元素在移动设备上是否使用滚动回弹效果.
auto: 使用普通滚动, 当手指从触摸屏上移开，滚动会立即停止。
touch: 使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文。

#  自定义滚动条
    ::-webkit-scrollbar { /*选择整个滚动条*/
    border-radius: 3px;
    background: rgb(0,0,0);   
    box-shadow: inset 0 0 5px rgba(0,0,0,.8);  
  }
  ::-webkit-scrollbar-thumb { /*滚动条上的滑动块*/
    border-radius:3px;
    background: rgba(255, 0,0);
    box-shadow: inset 0 0 10px rgba(0,0,0,.2);
  }

#  js 原始数据类型有哪些？  引用数据类型有哪些？

    原始数据类型有哪些
    boolean
    null
    undefined
    number
    string
    symbol
    bigint


    object  复杂数据类型  什么是引用数据类型？  指针