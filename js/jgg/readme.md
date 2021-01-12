# grid 布局

-  元素居中的方式
 1. flex  body display : flex   justify-content: center  align-items: center   一代写法

 2. grid  二代写法   justify-content:centen
 3. 定位
 4. margin  负值
 5.  grid-template-rows|columns
    布局直接对二维名 声明

- 9 个元素  设置不同颜色  如何实现？  
 - 法一
    `<script>
        const boxes = document.querySelectorAll('.box');
        let i = 1 ;
        for(let box of boxes){
            // js可操作一切CSS
            // html document.createElment
            // css   ele.style
            i++;
            box.style.backgroundColor = `rgba(${i * 20}, ${i * 10}, ${i * 5})`;
        }
    </script>`

 - 法二
    - .box:nth-child
    - 选择器         `div:nth-child(1|odd|event){ background-color: red;}`   :last-child
    -  styl                 `for n in (1..9)
                            &:nth-child({n})
                                background-color rgba(n*20,n*5,n*9,n*0.1)`

