class MenuView {
    constructor () {
        this.$images = document.getElementById("images-menu");
        this.$tableOrder = document.getElementById("order-tbody");
        this.$tableTotalPrice = document.getElementById("total-price")
    
    }

      updateOrderTableView(order) {
        const orderTable = order.reduce(
            (stringTable, product) => {
                stringTable += `<tr><td>${product.name}</td><td>${product.price}</td> 
                  <td id=${product.id}>${product.quantity}
                  <td><input type='button' id='${product.name}' value='-'></td></tr>`
                  return stringTable;
            }, "")
            this.$tableOrder.innerHTML = orderTable;
      }

 

      setTotalPrice(totalPrice) {
          this.$tableTotalPrice.innerHTML = totalPrice;
      }


      remove() {
        const name = event.target.id;
        console.log(name)
        const selectedProduct = order.find(product => product.name === name);
        selectedProduct.quantity--;
        updateOrderTable();
        this.$tableTotalPrice.innerHTML = getTotalPrice();
      }

       bindRemoveClick(handler) {
           this.$tableOrder.addEventListener("click", event => {
               const name = event.target.id;
               handler(name)
           })
         
        } 
          

    bindClickProduct(handler) {
        this.$images.addEventListener("click", event => {
            const name = event.target.value;
            handler(name);
        })
    }
}