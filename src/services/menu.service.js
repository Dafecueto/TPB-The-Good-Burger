class MenuService {
    constructor() {
        this.order = [
            {
                name: "Burger Simple",
                price : 4,
                quantity: 0
            },
            {
                name: "Burger Doble",
                price: 5,
                quantity: 0
            },
            {
                name: "Chicken Burger",
                price: 4,
                quantity: 0
            },
            {
                name: "Coca Cola",
                price: 2,
                quantity: 0
            },
            {
                name: "Café",
                price: 1,
                quantity: 0
            }
        ]   
    }
    


    getTotalPrice(orderObject) {
        const totalprice = order.reduce(
            (totalprice, {quantity}) => {
               totalprice = totalprice + price
               return totalprice
            }, 0);
            return totalprice;
        }


    reduceOrderByQuantity() { return this.order.filter(product => product.quantity > 0);}    

    addQuantityProductOrder(name) {
        const selectedProduct = order.find(product => product.name === name);
        selectedProduct.quantity < 2 ? selectedProduct.quantity += 1 : selectedProduct.quantity;
    }

 }




