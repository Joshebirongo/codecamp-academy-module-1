// Author : Muliri Shebirongo Jonathan <Joshebirongo>
let level = parseInt(prompt("Enter player level:"));
let vip = prompt("Is the player VIP? (yes or no):").toLowerCase();

if (isNaN(level)) {
  alert("The player level should be a number.");
} else if (vip !== "yes" && vip !== "no") {
  alert("Invalid VIP status.");
} else if (level < 1) {
  alert("Invalid player level.");
} else if (level > 10 && vip === "yes") {
  alert("Access granted.");
} else {
  alert("Access denied.");
}
