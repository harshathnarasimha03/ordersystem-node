const {
    calculateTax,
    calculateDiscount,
    calculateFinalAmount
} = require("./tax");

class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getAmount() {
        return this.price * this.quantity;
    }
}

class Order {
    constructor(customer) {
        this.customer = customer;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getSubtotal() {
        let subtotal = 0;

        for (const product of this.products) {
            subtotal += product.getAmount();
        }

        return subtotal;
    }

    getDiscount(discountRate) {
        return calculateDiscount(this.getSubtotal(), discountRate);
    }

    getTax(discountRate, taxRate) {
        const subtotal = this.getSubtotal();
        const discount = calculateDiscount(subtotal, discountRate);
        const amountAfterDiscount = subtotal - discount;

        return calculateTax(amountAfterDiscount, taxRate);
    }

    getFinalAmount(discountRate, taxRate) {
        return calculateFinalAmount(
            this.getSubtotal(),
            discountRate,
            taxRate
        );
    }

    printInvoice(discountRate, taxRate) {
        console.log("Customer:", this.customer);
        console.log("----------------------------");

        for (const product of this.products) {
            console.log(
                product.name,
                "x",
                product.quantity,
                "=",
                product.getAmount()
            );
        }

        console.log("----------------------------");
        console.log("Subtotal:", this.getSubtotal());
        console.log("Discount:", this.getDiscount(discountRate));
        console.log("Tax:", this.getTax(discountRate, taxRate));
        console.log("Final Amount:", this.getFinalAmount(discountRate, taxRate));
    }
}

function createSampleOrder() {
    const order = new Order("Harsha");

    order.addProduct(new Product(1, "Keyboard", 1200, 1));
    order.addProduct(new Product(2, "Mouse", 800, 2));
    order.addProduct(new Product(3, "USB Cable", 300, 3));

    return order;
}

const order = createSampleOrder();
order.printInvoice(10, 18);
