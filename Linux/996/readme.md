

- 文件系统  输出怎么做
  cat     输出
  cat -n  输出行号
  cat > index.html <<EOF  创建编辑
  cat 
- git bash 是一个小型的linux 
- seq 序列


- 基于 996 文件 找到以 996开头的这行内容
     
     grep  正则表达式 查找  
     grep -rn '996'

     | 管道 实际上是一段共享内存区，进程把共享消息放在那里。并通过一些 API 提供信息交换。
      cat 996   |         grep -E ^996
      打印966 管道传送      查找       -E 正则

- 匹配到 icu icuuuuu
     cat 996 | grep -E icu+

- 匹配数字

     cat 996 | grep -E ^[\^0-9]
     [^0-9]   中括号内 ^ 代表否定  非   [^0-9]不要匹配 0-9 为开始
     [\^0-9]   \ 转义

     cat 996 | grep -E [0-9]{3}  次数

     cat 996 | grep -E  -v [0-9]{3}   -v  查找反向条件

