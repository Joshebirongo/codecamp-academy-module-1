/*      Author: Muliri Shebirongo Jonathan <Joshebirongo>
        Problem: Rectangle Area Calculator
*/

/**
 * Calculate Rectangular Area
 * @param {number} width
 * @param {number} height
 * @returns {number}
 */
function calculateArea(width, height) {
  const area = width * height;

  return {
    area: area,
  };
}
let result = calculateArea(5, 3);
console.log(`
area = ${result.area}`);
