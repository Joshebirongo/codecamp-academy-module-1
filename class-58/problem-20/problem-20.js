// Author : Muliri Shebirongo Jonathan <Joshebirongo>

// Simulated server response code
const statusCode = 123;

switch (statusCode) {
  case 200:
    console.log("Request successful.");
    break;

  case 400:
    console.log("Bad request.");
    break;

  case 401:
    console.log("Unauthorised access.");
    break;

  case 404:
    console.log("Resource not fons.");
    break;

  case 500:
    console.log("Internal server error.");
    break;

  default:
    console.log("Unknow status code.");
}
