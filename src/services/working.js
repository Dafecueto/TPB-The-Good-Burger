const order = [
  {
    name: 'Burger Simple',
    price: 4,
  },
  {
    name: 'Chicken Burger',
    price: 4,
  },
];

/* const totalprice = order.reduce(
    (totalprice, {price}) =>  totalprice += price, 0);

    console.log(totalprice) */

const name = 'Burger Simple';

const selectedProduct = order.find(product => product.name === name);
console.log(selectedProduct);
selectedProduct.price = selectedProduct.price + 1;
console.log(selectedProduct);
