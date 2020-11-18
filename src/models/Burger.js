class Burger {
    constructor(base) {
        this.base = base;
        this.baseprice = 2;
        this.ingredients = {}
    }

    setIngredients(orderIngredients) {
        this.ingredients = orderIngredients
    }
}
