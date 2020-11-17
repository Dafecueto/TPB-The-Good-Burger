class MenuView {
    constructor () {
        $images = document.getElementById("images-menu");
        $tableOrder = document.getElementById("order-tbody");
    }

    addRowToOrder(elementProduct) {
        const tableRow = $tableOrder.insertRow(0);
        tableRow.insertCell(0) = elementProduct.value;
        tableRow.insertCell(1) = elementProduct.dataset.price;
        tableRow.insertCell(2) = 1;
    }
}