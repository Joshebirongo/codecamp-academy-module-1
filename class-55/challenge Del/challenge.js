// Author : Muhindo Kotya Delphin <Muhindokotya>

console.log("--------------------");
console.log("Exercise 1");

// Ternary Operator
let passwordLength = 10;
let validation = passwordLength >= 8 ? "Strong password" : "Password too short";
console.log("Ternary Operator:");
console.log(validation);
console.log("---------------------");

// If - Else statement
if (passwordLength >= 8) {
  validation = "Strong password";
} else {
  validation = "Password too short";
}
console.log("If - Else statement:");
console.log(validation);
console.log("----------------------");

console.log("----------------------");
console.log("Exercise 2");

// Ternary Operator
let purchaseAmount = 120;
let shipping =
  purchaseAmount >= 100 ? "Free shipping" : "Shipping cost applies";
console.log("Ternary Operator:");
console.log(shipping);
console.log("---------------------");

// If - Else statement
if (purchaseAmount >= 100) {
  shipping = "Free shipping";
} else {
  shipping = "Shipping cost applies";
}
console.log("If - Else statement:");
console.log(shipping);
console.log("---------------------");

console.log("********************");
console.log("Exercise 3");
// Ternary Operator
let hasPermission = false;
let access = hasPermission ? "Access granted" : "Access denied";
console.log("Ternary Operator:");
console.log(access);
console.log("--------------------");

// If - Else statement
if (hasPermission) {
  access = "Access granted";
} else {
  access = "Access denied";
}
console.log("If - Else statement:");
console.log(access);
console.log("---------------------");

console.log("--------------------");
console.log("Exercise 4");
// Ternary Operator
let batteryLevel = 15;
let status = batteryLevel <= 20 ? "Low battery" : "Battery level OK";
console.log("Ternary Operator:");
console.log(status);
console.log("-------------------");

// If - Else statement
if (batteryLevel <= 20) {
  status = "Low battery";
} else {
  status = "Battery level OK";
}
console.log("If - Else statement:");
console.log(status);
console.log("--------------------");

console.log("--------------------");
console.log("Exercise 5");
// Ternary Operator
let isOnline = false;
let connection = isOnline ? "User is online" : "User is offline";
console.log("Ternary Operator:");
console.log(connection);
console.log("--------------------");

// If -Else statement
if (isOnline) {
  connection = "User is online";
} else {
  connection = "User is offline";
}
console.log("If - Else statement:");
console.log(connection);
console.log("---------------------");
