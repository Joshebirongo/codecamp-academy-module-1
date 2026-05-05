/*      Author: Muliri Shebirongo Jonathan <Joshebirongo>
        Problem: Loan Monthly Payment
*/

/**
 *
 * @param {number} principal
 * @param {number} annualRate
 * @param {number} years
 * @returns
 */
function calculateMonthlyPayment(principal, annualRate, years) {
  const monthlyRate = annualRate / 12;
  const numberOfPayements = years * 12;

  const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayements);

  const denominator = Math.pow(1 + monthlyRate, numberOfPayements) - 1;

  const monthlpayement = principal * (numerator / denominator);
  return monthlpayement;
}

// Test
const test1 = calculateMonthlyPayment(10000, 0.12, 1);

console.log(`
*****************************************
Monthly Payment: ${test1.toFixed(2)}
*****************************************
`);
