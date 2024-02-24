const novoTenis = {
    id: 3,
    name: "Tenis",
    quantity: 1,
    value: 10000
};

const novaBermuda = {
    id: 2,
    name: "Bermuda",
    quantity: 3,
    value: 5000
};

const shoppingCart = {
    nameClient: "Guido Bernal",
    products: [
        {
            id: 1,
            name: "Camisa",
            quantity: 3,
            value: 3000
        },
        {
            id: 2,
            name: "Bermuda",
            quantity: 2,
            value: 5000
        }
    ],
    addItemtoCart: function (product) {
        let id = product.id;
        for (let i = 0;i < shoppingCart.products.length;i++) {
            if (product.id === this.products[i].id) {
                shoppingCart.products[i].quantity++
            } else if (i === (shoppingCart.products.length - 1)) {
                this.products.push(product);
            }
        }
    },
    CalculateCart: function () {
        let totalPayable = 0;
        for (const sum of this.products) {
            totalPayable += sum.value;
        }
        console.log(`-------RESUME CART-------\nClient: ${this.nameClient}\nTotal items: ${this.products.length}\nTotal payable: R$${(totalPayable / 100).toFixed(2)}\n--- * ---\n`);
        return totalPayable;
    },
    printDetails: function () {
        let itemNumber = 0;
        for (const print of this.products) {
            itemNumber++
            console.log(`-------DETAILS CART-------\nItem ${itemNumber} - ${print.name} - ${print.quantity} und - ${print.value}\n--- * ---\n`);
        }
    },
    calculateDiscount: function () {
        let sumTotalCart = 0;
        let totalPayable = 0;
        let itemCheap = shoppingCart.products[0].value;
        for (const product of shoppingCart.products) {
            totalPayable += product.value;
            if (product.value < itemCheap) {
                itemCheap = product.value;
            }
        }
        if (this.products.length > 4) {
            sumTotalCart = totalPayable - itemCheap;
        } else if (totalPayable > 10000) {
            sumTotalCart = totalPayable - (totalPayable * 0.1);
        } else {
            sumTotalCart = totalPayable;
        }
    
        return sumTotalCart;
    }
};

shoppingCart.CalculateCart();
shoppingCart.addItemtoCart(novaBermuda);
shoppingCart.CalculateCart();
shoppingCart.printDetails();
console.log(`O valor a ser pago com desconto deverá ser de R$${(shoppingCart.calculateDiscount() / 100).toFixed(2)}`);