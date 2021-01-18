# 字节H5 面试题  Drag and  Drop

1. 基础扎实  细节 能力增长
2. 比较复杂的特效

#  github 拖拽上传功能
第一件事 先给元素添加 draggable
第二件事   执行drag  三个事件  通过css优化用户体验
第三件事

1. 给拖拽元素  加dragable
   cursor： move

2. 拖拽元素在上空

3. drag  三个事件
   js基于事件的语言   Event机制
   on + 495 DOM Event level
   - dragstart
   - drag
   - dragend
   
   drop  异步
   - enter   进入
   - over   在容器上方     执行多次  容器的边框变化 border dashed 
   - leave  离开

 4. - 在拖动目标上触发事件 (源元素):
        ondragstart - 用户开始拖动元素时触发
        ondrag - 元素正在拖动时触发
        ondragend - 用户完成元素拖动后触发

    - 释放目标时触发的事件:
        ondragenter - 当被鼠标拖动的对象进入其容器范围内时触发此事件
        ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
        ondragleave - 当被鼠标拖动的对象离开其容器范围内时触发此事件
        ondrop - 在一个拖动过程中，释放鼠标键时触发此事件
  5. - 在进行拖放操作的时候，dataTransfer对象可以用来保存被拖动的数据。它可以保存一项或多项数据、一种或多数数据类型。通谷一点讲，就是可以通过它来传输被拖动的数据，以便在拖拽结束的时候，对数据进行其他的操作。

