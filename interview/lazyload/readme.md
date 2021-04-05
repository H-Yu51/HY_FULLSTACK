- 先了解清晰的思路
 1. 因为网页加载速度的性能优化
     img请求http并发数太多  会影响网页打开速度    http/2


 2. 真实的地址放在 data-src上  开始时候不加载
 3. scroll  监听， 利用 getBoundingClientRect 方法判断 图片是否到可以显示的范围
 4. 加防抖 

 - 手写代码