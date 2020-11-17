class Controller {
    constructor(menuService, menuView) {
        this.menuService = menuService;
        this.menuView = menuView;

        menuView.bindClickProduct(this.updateOrderTable);
    }


    getTotalPrice = () => this.menuView.setTotalPrice(this.menuService.getTotalPrice())

    updateOrderTable = (name) => {
        this.menuService.addQuantityProductOrder(name)
        this.menuView.updateOrderTableView(this.menuService.reduceOrderByQuantity());
        this.menuView.setTotalPrice(this.menuService.getTotalPrice())
    }
    
}