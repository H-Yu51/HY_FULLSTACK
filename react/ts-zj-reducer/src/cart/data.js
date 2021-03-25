const cartData=Array(5)
    .fill(undefined)
    .map((e,index)=>(
        {id:index+1,name:`商品${index+1}`,price:Math.round(Math.random()*100)}
    ))
// console.log(cartData);
export default cartData;
