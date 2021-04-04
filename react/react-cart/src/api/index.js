const goods = [
    {
        name:'iphone',
        price:5000,
        inventory:5,
        id:1
    },
    {
        name:'华为折叠屏',
        price:17300,
        inventory:2,
        id:2
    },
    {
        name:'car',
        price:50000,
        inventory:3,
        id:3
    },
    {
        name:'apple',
        price:50,
        inventory:30,
        id:4
    },

]


export　default　{
    // cb  给action 调用  同步修改状态的action
    getProducts:(cb) => setTimeout(cb(goods),1000)
}


