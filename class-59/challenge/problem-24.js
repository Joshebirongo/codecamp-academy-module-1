// Author : Muliri Shebirongo Jonathan <Joshebirongo>

// Rating
const rating = "PG";

// message variage
let message = "";

switch (rating) {
  case "G":
    message = "General audiences.";
    break;

  case "PG":
    message = "Parental guidance suggested.";
    break;

  case "PG-13":
    message = "Parents strongly cautioned.";
    break;

  case "R":
    message = "Restricted.";
    break;

  case "NC-17":
    message = "Adult only.";

  default:
    message = "Rating is invalid";
}
console.log("Description:", message);
