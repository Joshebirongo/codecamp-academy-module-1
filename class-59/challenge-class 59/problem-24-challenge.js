// Author : Muhindo Kotya Delphin

// Rating
const rating = "PG";

switch (rating) {
  case "G":
    console.log("General audiences.");
    break;

  case "PG":
    console.log("Parental guidance suggested.");
    break;

  case "PG-13":
    console.log("Parents strongly cautioned.");
    break;

  case "R":
    console.log("Restricted.");
    break;

  case "NC-17":
    console.log("Adult only.");

  default:
    console.log("Rating is invalid");
}
