/*      Author: Muliri Shebirongo Jonathan <Joshebirongo>
        Problem: Delivery Cost Calculator 
*/

function calculateDeliveryCost(distance) {
  const baseFee = 5;
  const costPerKm = 2;

  const totalCost = baseFee + costPerKm * distance;
  return totalCost;
}

// Example
let distance = 10;

const totalCost = calculateDeliveryCost(distance);

console.log(`totalCost: ${totalCost}`);
