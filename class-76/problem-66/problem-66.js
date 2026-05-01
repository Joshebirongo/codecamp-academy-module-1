/*
    Author: Muliri Shebirongo Jonathan <Joshebirongo>
    Problem: Sensor Alert Detection
*/

const readings = [22, 25, 27, 31, 29, 35, 28, 26];

let alertCount = 0;

for (let i = 0; i < readings.length; i++) {
  const temperature = readings[i];

  if (temperature >= 30) {
    alertCount++;
    console.log(`Hour: ${i} -> ${temperature}°C`);
  }
}

console.log(`Alerts detected: ${alertCount}`);
