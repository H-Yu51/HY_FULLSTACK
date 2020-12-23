# TwoSum leetcode 必考题



1. node 安装
    - node.exe programfiles/
    - node 全局可访问
ss
- node 是让js 运行在服务器端的环境
   开发速度快    没有java 稳定     
   Server   Linux 服务器                pwd  当前文件位置
   node  1.js



- 读题
    整数数组 nums , target   参数  
    返回下标
    
    const nums = [2,7,11,15] 
    
- 前期 leetcode刷题 先暴力 再调优 
    1. 时间复杂度
        一次循环  O(n)
        两次循环  O(n*n)

    2. 空间复杂度



- 提供一个算法 
    O(n*n) -> O(n)

    算法！！  实际上是找一个适合的数据结构

    Array   数组是最基本的数据结构     是一个数据集合    数字索引 空间为连续的
    JSON Object 对象字面量  也是一个数据集合    在C中没有原生的  HashMap  
    O(n*n) -> O(n) + 空间多花 





#  forEach 
    nums.forEach((e,i) => {
        console.log(e,i);
    });     //  用于调用数组的每个元素，并将元素传递给回调函数
 }
 twoSun([2,7,11,15],9);

2 0
7 1
11 2
15 3



# 箭头函数 function(e,i){}  ====>>>     (e,i) => {}
- const cb = numbers =>    return numbers >70 
箭头函数  当一个参数时可以省略括号  ，一句代码时可以省略花括号

# 过滤器 filter  内置函数 的布尔值为真 则筛选出来   为假则不管

