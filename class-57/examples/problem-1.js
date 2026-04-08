// Author : Muliri Shebirongo Jonathan <Joshebirongo>
// Request the user Input
const dayNumber = parseInt(prompt("Enter the day number:"));
let day = "";

switch (dayNumber) {
  case 1:
    day = "Monday";
    break;

  case 2:
    day = "Tuesday";
    break;

  case 3:
    day = "Wednesday";
    break;

  case 4:
    day = "Thursday";
    break;

  case 5:
    day = "Friday";
    break;

  case 6:
    day = "Saturday";
    break;

  case 7:
    day = "Sunday";
    break;

  default:
    day = "Invalid input.";
    break;
}

alert("The day number: " + dayNumber + " It's equivalent to: " + day);
