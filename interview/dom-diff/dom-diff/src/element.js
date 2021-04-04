class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }

}
const createElement = (type, props, children) => {
    return new Element(type, props, children);
}

// jsx 的本质是创建 虚拟dom 的过程
const render = (domObj) => {
    console.log(domObj,'domObj');
    let el = document.createElement(domObj.type); // ul 
    for (let key in domObj.props) {
        console.log(domObj.props,'props');
        setAttr(el, key, domObj.props[key]);
    }
    domObj.children.forEach(child => {
        child = (child instanceof Element) ? render(child) : document.createTextNode(child)
        // console.log(el,'666666666666666');
        el.appendChild(child)
    })
    return el
}

function setAttr(node,key,value){
    switch (key) {
        case 'value':
            if(node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea'){
                node.value = value;
            }
            else {
                node.setAttribute(key,value)
            }
            break;
        case 'style':
            // node.setAttribute('style',value)
            node.style.cssText = value
        default:
            node.setAttribute(key,value)
            break;
    }
    console.log(node,'node');

}

const renderDOM = (el, target) => {
    target.appendChild(el);
  }
  export {
    createElement,
    render,
    renderDOM
}
