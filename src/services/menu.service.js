class MenuService {
    constructor() {
        this.customizedBurger;
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

        this.ingredientsMenu = [
            {
                name: "Ternera",
                price: 2,
                quantity: 0,
            },
            {
                name: "Pollo",
                price: 2,
                quantity: 0,
            },
            {
                name: "Lentejas",
                price: 2.5,
                quantity: 0,
            },
            {
                name: "Lechuga",
                price: 0.5,
                quantity: 0
            },
            {
                name: "Tomate",
                price: 0.5,
                quantity: 0,
            },
            {
                name: "Queso",
                price: 1,
                quantity: 0
            },
            {
                name: "Mayonesa",
                price: 0.2,
                quantity: 0
            },
            {
                name: "Ketchup",
                price: 0.2,
                quantity: 0
            }
        ]
    }
    

    createBurger(baseOfBurger, ingredients) {
        this.customizedBurger = new Burger(baseOfBurger);
        for (const ingredient of ingredients){
            this.addQuantityIngredient(ingredient);
        }
        this.customizedBurger.setIngredients(this.reduceIngredientsByQuantity())
    }

    addIngredientToOrder(ingredients) {
        for (const ingredient of ingredients) {
            addQuantityIngredient(ingredient);
        }
    }


    getBurger() { return this.customizedBurger }


    getTotalPrice() {
        const totalprice = this.order.reduce(
            (totalprice, {price, quantity}) => {
               totalprice = totalprice + price*quantity;
               return totalprice
            }, 0);
            return totalprice;
        }

    getTotalCustomizedPrice() {
        const totalprice = this.ingredientsMenu.reduce(
            (totalprice, {price, quantity}) => {
                totalprice = totalprice + price*quantity;
                return totalprice
            }, 0
        );
        return totalprice;
    }

    addQuantityIngredient(name) {
        const selectedIngredient = this.findIngredient(name);
        selectedIngredient.quantity < 2 ? selectedIngredient.quantity += 1 : selectedIngredient.quantity;
    }
    subtractQuantityIngredient(name) {
        const selectedIngredient = this.findIngredient(name);
        selectedIngredient.quantity > 0 ? selectedIngredient.quantity-- : selectedIngredient.quantity;
    }

    addQuantityProductOrder(name) {
        const selectedProduct = this.findProduct(name);
        selectedProduct.quantity < 2 ? selectedProduct.quantity += 1 : selectedProduct.quantity;
    }

    subtractQuantityProductOrder(name) {
        const selectedProduct = this.findProduct(name);
        selectedProduct.quantity > 0 ? selectedProduct.quantity-- : selectedProduct.quantity;
    }

    findProduct(name) { return this.order.find(product => product.name === name);}
    findIngredient(name) { return this.ingredientsMenu.find(product => product.name === name)}

    reduceOrderByQuantity() { return this.order.filter(product => product.quantity > 0);}    

    reduceIngredientsByQuantity() { return this.ingredientsMenu.filter(product => product.quantity > 0);}


 }




