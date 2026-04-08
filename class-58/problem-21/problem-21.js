// Author Muliri Shebirongo Jonathan <Joshebirongo>

// Request the traffic Light state
const trafficLight = prompt("Enter the traffic light state:").toLowerCase();
let message = "";

// Switch statement
switch (trafficLight) {
  case "red":
    message = "Stop the vehicle.";
    break;

  case "yellow":
    message = "Prepare to stop/go.";
    break;

  case "green":
    message = "You can go.";
    break;

  default:
    message = "Invalid traffic ligth color.";
}

alert(message);

/*
--------------------------------------------------------------------------
Desktop Test
--------------------------------------------------------------------------

trafficLight = "red"        =>      "Stop the vehicle."
trafficLight = "yellow"     =>      "prepare to stop/go."
trafficLight = "green"      =>      "You can go."
trafficLight = "blue"       =>      "Invalid traffic light color."
trafficLight = 123          =>      "Invalid traffic light color."

--------------------------------------------------------------------------
*/
