// Author Muliri Shebirongo Jonathan <joshebirongo>
var age = prompt("Enter your age:");

// Conditionals
if (age <= 12) {
  alert("Child Discount");
} else if (age >= 13 && age <= 59) {
  alert("Regular Ticket");
} else if (age >= 60) {
  alert("Senior Discount");
} else {
  alert("The input is invalid. Try again...");
}

/*
    ---------------------
    Desktop test
    ---------------------
    age = 10  => Child Discount
    age = 25  => Regular Ticket
    age = 65  => Senior Discount
    ---------------------
*/
