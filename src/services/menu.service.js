class MenuService {
    constructor() {
        this.order = {}
    }


    getTotalPrice(orderObject) {
        const totalprice = order.reduce(
            (totalprice, {price}) => {
               totalprice = totalprice + price
               return totalprice
            }, 0);
            return totalprice;
        }


}