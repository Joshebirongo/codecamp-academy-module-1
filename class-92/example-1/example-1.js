// Author: Muliri Shebirongo Jonathan <Joshebirongo>

// Select HTML elements
const clickButton = document.getElementById("clickButton");
const counterText = document.getElementById("counter");
const message = document.getElementById("message");

// Counter variable
let counter = 0;

// Event listenner
clickButton.addEventListener("click", function () {
  // Increase the counter
  counter++;

  // Upadate counter on webpage
  counterText.textContent = counter;

  // Update message
  message.textContent = "Button clicked successfuly!";
});
