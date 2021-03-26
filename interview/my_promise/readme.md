# https://www.jb51.net/article/193871.htm
# 探究一道价值25k的蚂蚁金服异步串行面试题

// Promise 

const delay = (ms) => new Promise((resolve) => setTimeout(resolve,msg));


1. 递归的高级套路  
   数组的length + shift  
   run 只要调用这一个api
   区分 flow 和普通函数 delay 标志 isFlow：true 
   slice 
   flat
   
