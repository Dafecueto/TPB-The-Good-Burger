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

    addRowToOrder(name, price) {
        const selectedProduct = order.find(product => product.name === name);
        const htmlOrderTable = order.reduce((table, product) => {
          if (product.name === selectedProduct.name && product.quantity >= 0 && product.quantity <= 2) {
            table += `<tr><td>${product.name}</td><td>${product.price}</td>
                <td>${product.quantity + 1}
                <td><input type='button' id='remove' name='${name}' value='-' onclick='remove()'></td></tr>`;
          }
          return table;
        }, '');
        console.log(htmlOrderTable);

        $tableOrder.innerHTML += htmlOrderTable;
      }

    

    setQuantity(name) {
        const selectedProduct = this.order.find(product => product.name === name);
        selectedProduct.quantity = selectedProduct.quantity + 1;
        
    }

    bindClickProduct(handler) {
        $images.addEventListener("click", event => {
            const name = event.target.value;
            const price = event.target.dataset.price;
            addRowToOrder(name, price)
            console.log(tableToObject());
            console.log($tableOrder)
        })
    }
}