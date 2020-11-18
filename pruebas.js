const ingredientsMenu = [
    {
        name: "Ternera",
        price: 2
    },
    {
        name: "Pollo",
        price: 2
    },
    {
        name: "Lentejas",
        price: 2.5
    },
    {
        name: "Lechuga",
        price: 0.5
    },
    {
        name: "Tomate",
        price: 0.5
    },
    {
        name: "Queso",
        price: 1
    },
    {
        name: "Mayonesa",
        price: 0.2
    },
    {
        name: "Ketchup",
        price: 0.2
    }
]

const ingredients = ["Tomate", "Queso", "Ketchup"];

function fun() {
    for (const ingredient of ingredients){
    const ingredientObject = ingredientsMenu.find(product => product.name == ingredient);
    console.log(ingredientObject);
    //this.customizedBurger.addIngredient(ingredientObject);
    }
}


fun();
