# 字节H5 面试题  Drag and  Drop

1. 基础扎实  细节 能力增长
2. 比较复杂的特效

#  github 拖拽上传功能


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
   - dragenter   进入
   border dashed 
   - dragover 多次
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

