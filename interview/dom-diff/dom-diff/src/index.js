import { createElement,render,renderDOM ,diff} from './element'

//  把dom  -> virtual dom
// 模拟真实dom 的层次 结点  属性  子结点
// 树  递归 最后是文本结点时 退出 相同的操作 1.创建节点 2. 设置属性  3. 子结点



// dom树的表达转换形式
let virtualDOM = createElement('ul',{
  class:'list',
  id:'dd',
  src:''
},[
  createElement('li',{class:'item'},['bai敬亭']),
  createElement('li',{class:'item'},['ting婷'])
])  

// console.log(virtualDOM);

let el = render(virtualDOM);



let virtualDOM2 = createElement('ul',{
  class:'list-group'
},[
  createElement('li',{class:'item active'} ,['七里香']),
  createElement('li',{class:'item'} ,['菊花台']),
  createElement('li',{class:'item'} ,['一千年以后']),
])

console.log(el,'-----------');

renderDOM(el,document.getElementById('root'))

// 补丁

// let patches = diff(virtualDOM,virtualDOM2);
// console.log(patches);