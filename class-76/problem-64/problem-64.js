/*
    Author: Muliri Shebirongo Jonathan <Joshebirongo>
    Problem: Daily Expense Analysis
*/

const expenses = [45, 20, 35, 90, 15, 80, 25];

let totalSpent = 0;
let highestExpense = -Infinity;
let highestDayIndex = -1;

for (let i = 0; i < expenses.length; i++) {
  const currentExpense = expenses[i];

  // Aggregate total
  totalSpent += currentExpense;

  // Track highest expense and its index
  if (currentExpense > highestExpense) {
    highestExpense = currentExpense;
    highestDayIndex = i;
  }
}

// Calculate average after traversal
const averageExpense = totalSpent / expenses.length;
let dayName = "";

switch (highestDayIndex) {
  case 0:
    dayName = "Monday";
    break;
  case 1:
    dayName = "Tuesday";
    break;
  case 2:
    dayName = "Wednesday";
    break;
  case 3:
    dayName = "Thursday";
    break;
  case 4:
    dayName = "Friday";
    break;
  case 5:
    dayName = "Saturday";
    break;
  case 6:
    dayName = "Sunday";
    break;
}

// Output results
console.log(`
Total spent: ${totalSpent}
Average expense: ${averageExpense.toFixed(2)}
Highest expense on day: ${dayName}
Amount: ${highestExpense}    
`);
