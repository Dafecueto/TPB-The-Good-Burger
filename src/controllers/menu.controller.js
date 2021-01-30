class Controller {
    constructor(menuService, menuView) {
        this.menuService = menuService;
        this.menuView = menuView;

        menuView.bindClickProduct(this.updateOrderTable);
        menuView.bindRemoveClick(this.removeProduct);
        menuView.bindCustomizeButton(this.updateCustomizedTable);
        menuView.bindRemoveIngredientClick(this.removeIngredient);
        menuView.bindFinishCustomize(this.finishCustomizedBurger)
    }


    updateOrderTable = (name) => {
        this.menuService.addQuantityProductOrder(name)
        this.menuView.updateOrderTableView(this.menuService.reduceOrderByQuantity());
        this.menuView.setTotalPrice(this.menuService.getTotalPrice())
    }

    updateCustomizedTable = (base, ingredients) => {
        this.menuService.createBurger(base, ingredients)
        this.menuView.updateCustomizedTableView(this.menuService.getBurger(),this.menuService.reduceIngredientsByQuantity());
        this.menuView.setCustomizedPrice(this.menuService.getTotalCustomizedPrice());
    }

    finishCustomizedBurger = () => {
        //this.menuView.addCustomizedBurgerToTable(this.menuService.getTotalCustomizedPrice());
        //this.menuService.saveCustomizedPrice();
        this.menuService.addCustomBurger();
        console.log(this.menuService.getOrder())
        this.menuView.updateOrderTableView(this.menuService.reduceOrderByQuantity());
        this.menuView.setTotalPrice(this.menuService.getTotalPrice())
        //this.menuView.setTotalPrice(this.menuService.getTotalTotal())
        this.menuService.resetIngredients();
        this.menuView.resetTable();
    }

    removeProduct = (name) => {
        try{
        this.menuService.subtractQuantityProductOrder(name);
        } catch(exception) {}
        console.log(name)
        this.menuView.updateOrderTableView(this.menuService.reduceOrderByQuantity());
        this.menuView.setTotalPrice(this.menuService.getTotalPrice())
    }

    removeIngredient = (name) => {
        try {
        this.menuService.subtractQuantityIngredient(name);
        } catch (exception) {}
        this.menuView.updateCustomizedTableView(this.menuService.getBurger(), this.menuService.reduceIngredientsByQuantity());
        this.menuView.setCustomizedPrice(this.menuService.getTotalCustomizedPrice());
    }
}