# DOM-DIFF  阿里级别 公司发offer 的前奏题 

- 读源码的方法
1.  边写边读  聚焦主题 
    React 不用dom   而是 MVVM

    原因是 dom性能不行  对dom操作 不能太频繁
    react  提供虚拟 dom   virtual dom   重绘 重排   浏览器渲染机制 
    组件树  =>  dom树  内存中的操作 相比于浏览器的操作更快
    n叉树  内存树的修改  完成后  一次性在真实dom 中修改   提高效率
o
    内存中的两棵树进行比较  的算法  DOM_DIFF  preState  newState
2. 通俗理解 
  状态是在改变的 ， useState  状态驱动界面   不是用dom操作来驱动 
  
  内存中 创建一个虚拟dom   是一个树状结构  经过状态改变后 会新建一颗新的状态Virtual dom 树

  通过算法对这两棵树进行比较（树的查找、结点的比对） 把修改的集合 一次性同步到真实dom中

- 如何把dom 用virtual dom 表示

    <ul>
        <li class='item'>白敬亭</li>
        <li class='item'>婷婷</li>
    <ul>
    <ul>
        <li class='item'>白敬亭</li>
        <li class='item'>婷婷</li>
        <li></li>
    <ul>
    [
        {
            attr:'current'
        }
        {
            appendChild: document.createElement('li')
        }
    ]

- dom 树的表现形式  递归json
- ```
  tag :'ul',
  props:{
      class:'list'
  },
  children:[
      {
          tag:'li',
          props:{
              class:'item'
          },
          children:['白敬亭]
      }
  ]

- 利用 createElement\setAttribute\appendChild  将内存中生成虚拟dom树