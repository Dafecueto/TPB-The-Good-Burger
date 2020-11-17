class MenuView {
    constructor () {
        this.$images = document.getElementById("images-menu");
        this.$tableOrder = document.getElementById("order-tbody");
        this.order = [
            {
                name: "Burger Simple",
                price : 4,
                quantity = 0
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
                quantity: 0,
            },
            {
                name: "Café",
                price: 1,
                quantity: 0,
            }
        ]   
    }

    addQuantityObject (name) {
        const selectedProduct = order.find(product => product.name === name);
        selectedProduct.quantity < 2 ? selectedProduct.quantity += 1 : selectedProduct.quantity;
      }

    updateOrderTable() {
        const orderTable = order.reduce(
          (stringTable, product) => {
            product.quantity > 0 ? 
              stringTable += `<tr><td>${product.name}</td><td>${product.price}</td> 
                <td id=${product.id}>${product.quantity}
                <td><input type='button' id='remove' name='${name}' value='-' onclick='remove()'></td></tr>`
                : stringTable;
                return stringTable;
          }, "")
          $tableOrder.innerHTML = orderTable;
      }

    removeProduct() {
        const name = event.target.id;
        console.log(name)
        const selectedProduct = order.find(product => product.name === name);
        selectedProduct.quantity--;
        updateOrderTable();
        $tableTotalPrice.innerHTML = getTotalPrice();
      }

      setTotalPrice(totalPrice) {
          $tableTotalPrice.innerHTML = totalPrice;
      }


    


    bindClickProduct(handler) {
        $images.addEventListener("click", event => {
            const name = event.target.value;
            const price = event.target.dataset.price;
            addRowToOrder(name, price)
        })
    }
}