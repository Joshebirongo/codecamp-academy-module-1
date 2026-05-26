// Author: Muliri Shebirongo Jonathan <Joshebirongo>

// Parent class
class Person {
  constructor(data) {
    this.fullName = data.fullName;
    this.customerId = data.customerId;
    this.country = data.country;
  }

  // Protectde method (convention)
  _generateShipmentCode() {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return `SHP-${randomNumber}`;
  }
}

// Child class
class Customer extends Person {
  constructor(data) {
    super(data);
    this.membershipLevel = data.membershipLevel;
    this.shipments = [];
  }

  // Private methods
  #validateShipment(shipment) {
    return (
      shipment.packageName &&
      shipment.weight > 0 &&
      shipment.distance > 0 &&
      shipment.basePricePerKm > 0
    );
  }

  // Private method
  #calculateDiscount(total) {
    const discounts = {
      standard: 0,
      premium: 0.1,
      vip: 0.2,
    };

    const discount = discounts[this.membershipLevel] || 0;
    return total - total * discount;
  }

  // Public method
  createShipment(shipmentData) {
    const shipmentToValidate = {
      packageName: shipmentData.packageName,
      weight: shipmentData.weight,
      distance: shipmentData.distance,
      basePricePerKm: shipmentData.basePricePerKm,
      shippingPriority: shipmentData.shippingPriority,
      insured: shipmentData.insured,
    };
    if (!this.#validateShipment(shipmentToValidate)) {
      return "Invalid shipment information";
    }

    const distanceCost = shipmentData.distance * shipmentData.basePricePerKm;

    const weightCost = shipmentData.weight * 2;

    const priorityCosts = {
      standard: 0,
      express: 50,
      urgent: 100,
    };

    const priorityCost = priorityCosts[shipmentData.shippingPriority] || 0;

    const subTotal = distanceCost + weightCost + priorityCost;

    let insurance = 0;
    if (shipmentData.insured) {
      insurance = subTotal * 0.1;
    }

    const totalCost = subTotal + insurance;

    const finalTotal = this.#calculateDiscount(totalCost);

    const shipment = {
      shipmentCode: this._generateShipmentCode(),
      customerName: this.fullName,
      packageName: shipmentData.packageName,
      weight: shipmentData.weight,
      distance: shipmentData.distance,
      shippingPriority: shipmentData.shippingPriority,
      insured: shipmentData.insured,
      subTotal,
      insurance,
      finalTotal,
    };

    this.shipments.push(shipment);

    return shipment;
  }

  // Public method
  reportLateDelivery(shipmentCode, daysLate) {
    const shipment = this.shipments.find(
      (shipment) => shipment.shipmentCode === shipmentCode,
    );
    if (!shipment) {
      return "Shipment not found";
    }

    const penalty = daysLate * 25;

    return {
      shipmentCode,
      daysLate,
      penalty,
    };
  }

  // Public method
  showShipmentHistory() {
    return this.shipments;
  }

  // Static method
  static convertKilogramsToPounds(kg) {
    return kg * 2.20462;
  }

  // Static method
  static calculateAverageShippingCost(costs) {
    const total = costs.reduce((sum, value) => sum + value, 0);
    return total / costs.length;
  }
}

// Object creation

const customer1 = new Customer({
  fullName: "Jonathan Shebirongo",
  customerId: 5647383972,
  country: "DRC",
  membershipLevel: "vip",
});

const customer2 = new Customer({
  fullName: "John Sherki",
  customerId: 123456789,
  country: "USA",
  membershipLevel: "premium",
});

// Create shipments

const shipment1 = customer1.createShipment({
  packageName: "Microwave",
  weight: 20,
  distance: 500,
  basePricePerKm: 3,
  shippingPriority: "express",
  insured: true,
});

const shipment2 = customer2.createShipment({
  packageName: "Books",
  weight: 10,
  distance: 300,
  basePricePerKm: 2,
  shippingPriority: "urgent",
  insured: false,
});
console.log("====================================");
console.log("Shipment 1:");
console.log(shipment1);
console.log("====================================");
console.log("Shipment 2:");
console.log(shipment2);
console.log("====================================");
// Late delivery
console.log("====================================");
console.log("Late Delivery Report:");
console.log(customer1.reportLateDelivery(shipment1.shipmentCode, 4));
console.log("====================================");
// Shipment history
console.log("====================================");
console.log("Customer 1 History:");
console.log(customer1.showShipmentHistory());
console.log("====================================");
// Static methods
console.log("====================================");

console.log("Kg to Pounds:");
console.log(Customer.convertKilogramsToPounds(10));
console.log("====================================");
console.log("Average Shipping Cost:");
console.log(
  Customer.calculateAverageShippingCost([
    shipment1.finalTotal,
    shipment2.finalTotal,
  ]),
);
