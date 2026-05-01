/*
    Author: Muliri Shebirongo Jonathan <Joshebirongo>
    Problem: Low Stock Inventory Checker
*/

const inventory = [12, 3, 25, 0, 7, 2, 18];

let lowStockcount = 0;

for (let i = 0; i < inventory.length; i++) {
  const quantity = inventory[i];

  if (quantity < 5) {
    lowStockcount++;
    console.log(`Product ID: ${i} -> ${quantity} units.`);
  }
}

console.log(`Low Stock items: ${lowStockcount}`);
