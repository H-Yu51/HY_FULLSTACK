var name = 'Wisen';
function sayHello() {
  console.log('Hello ', this.name);
}
sayHello.call();  // 
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    console.log(this);//Food {}
    console.log(this.name);
    Product.call(this, name, price);
    console.log(this);//Food { name: 'cheese', price: 5 }
    console.log(this.name);
    this.category = 'food';
    console.log(this);//Food { name: 'cheese', price: 5, category: 'food' }
}
const chess = new Food('cheese', 5)
console.log(chess);// Food { name: 'cheese', price: 5, category: 'food' }