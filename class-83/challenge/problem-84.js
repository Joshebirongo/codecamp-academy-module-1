// Muliri Shebirongo Jonathan <Joshebirongo>

class ShoppingCart {
  constructor(customerName, productName, productPrice, stock) {
    this.customerName = customerName;
    this.productName = productName;
    this.productPrice = productPrice;
    this.stock = stock;

    this.quantity = 0;

    this.taxRate = 16;
  }
  addProduct(quantity) {
    if (quantity <= this.stock) {
      this.quantity = quantity;

      console.log("Product added successfully.");
    } else {
      console.log("Not enough stock available.");
    }
  }

  GetSubtotal() {
    return this.productPrice * this.quantity;
  }

  // Discount
  DiscountSystem() {
    const subtotal = this.GetSubtotal();

    let discountRate = 0;

    if (subtotal >= 500) {
      discountRate = 10;
    }

    const discount = (subtotal * discountRate) / 100;

    return discount;
  }

  GetTax() {
    const subtotal = this.GetSubtotal();
    const discount = this.DiscountSystem();

    const amountAfterDiscount = subtotal - discount;

    return (amountAfterDiscount * this.taxRate) / 100;
  }

  // Final total
  calculateTotal() {
    const subtotal = this.GetSubtotal();
    const discount = this.DiscountSystem();
    const tax = this.GetTax();

    return subtotal - discount + tax;
  }

  // Summary
  showSummary() {
    console.log(`
==================================
         PURCHASE SUMMARY
==================================
Customer Name : ${this.customerName}
Product Name  : ${this.productName}
Quantity      : ${this.quantity}
Product Price : ${this.productPrice}

Subtotal      : ${this.GetSubtotal()}
Discount      : ${this.DiscountSystem()}
Tax           : ${this.GetTax()}
Final Total   : ${this.calculateTotal()}
==================================
        `);
  }
}

const cart = new ShoppingCart("Jonathan", "Washing machine", 350, 5);

cart.addProduct(4);

cart.showSummary();
