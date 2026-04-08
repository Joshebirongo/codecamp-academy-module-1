// Author Muliri Shebirongo Jonathan <Joshebirongo>

// Request user inputs
const age = parseInt(prompt("Enter your age:"));
const accessCard = prompt(
  "Do you have an access card? (yes or no):",
).toLowerCase();

// Data validation
if (isNaN(age)) {
  alert("Age must be a number.");
} else if (age < 0 || age > 120) {
  alert("Age must be between 0 and 120.");
} else if (accessCard !== "yes" && accessCard !== "no") {
  alert("Access card must be yes or no.");
} else {
  // Nested conditionals logic
  if (age >= 18) {
    if (accessCard === "yes") {
      alert("Access granted.");
    } else {
      alert("Access denied. Access card required.");
    }
  } else {
    alert("Access denied. Minimum age required.");
  }
}
