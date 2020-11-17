const order = [
  {
    name: 'Burger Simple',
    price: 4,
    quantity: 1,
  },
  {
    name: 'Chicken Burger',
    price: 4,
    quantity: 0,
  },
  {
    name: "Coca Cola",
    price: 2,
    quantity: 1,
  }
];

/* const totalprice = order.reduce(
    (totalprice, {price}) =>  totalprice += price, 0);

    console.log(totalprice) */

const name = 'Burger Simple';

const selectedProduct = order.find(product => product.name === name);
console.log(selectedProduct);
selectedProduct.price = selectedProduct.price + 1;
console.log(selectedProduct);

function reduceOrderByQuantity() { return this.order.filter(product => product.quantity > 0);}   

console.log(reduceOrderByQuantity());