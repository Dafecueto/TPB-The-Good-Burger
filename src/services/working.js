const order = 
[
    {
        name: "Burguer Simple",
        price: 4
},
    {
        name: "Chicken Burger",
        price: 4
    }
]

const totalprice = order.reduce(
    (totalprice, {price}) => {
       //totalprice = totalprice + Number(price);
       totalprice = totalprice + price
       return totalprice
    }, 0);

    console.log(totalprice)