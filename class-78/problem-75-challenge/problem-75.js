/*      Author: Muliri Shebirongo Jonathan <Joshebirongo>
        Problem: Temperature Converter (Celsius to Fahrenheit)
*/

/**
 * Convert Celcius to Fahrenheit
 * @param {number} C
 * @returns {number}
 */
function convertToFahrenheit(C) {
  const F = (C * 9) / 5 + 32;

  return {
    F: F,
  };
}

const fahrenheit = convertToFahrenheit(0);
console.log(`
fahrenheit = ${fahrenheit.F}`);
