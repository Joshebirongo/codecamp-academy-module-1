/*      Author: Muliri Shebirongo Jonathan <Joshebirongo>
        Problem: Calculates the final grade base on weight scores
*/

/**
 * Calculate the final grade based on wighted scores
 * @param {number} examScore
 * @param {number} projectScore
 * @param {number} participationScore
 * @returns {number}
 */
function calculateFinalGrade(examScore, projectScore, participationScore) {
  const finalGrade =
    examScore * 0.5 + projectScore * 0.3 + participationScore * 0.2;

  return finalGrade;
}

/**
 * Determines if the student passed or failed
 * @param {number} finalGrade
 * @returns {string}
 */
function getStudentStatus(finalGrade) {
  if (finalGrade >= 60) {
    return "Passed";
  }

  return "Failed";
}

/**
 * Determines if the student passed or failed
 * @param {number} studentGrade
 * @param {string} studentStatus
 */
function displaysStudentData(studentGrade, studentStatus) {
  console.log(`
\n*******************************
    Final grade:   ${studentGrade}
    Status:        ${studentStatus}
*******************************
`);
}

// Example usage
const examScore = 80;
const projectScore = 70;
const participationScore = 90;

const finalGrade = calculateFinalGrade(
  examScore,
  projectScore,
  participationScore,
);

const status = getStudentStatus(finalGrade);
displaysStudentData(finalGrade, status);

const student2Grade = calculateFinalGrade(78, 55, 30);
const student2Status = getStudentStatus(student2Grade);
displaysStudentData(student2Grade, student2Status);

const student3Grade = calculateFinalGrade(38, 65, 50);
const student3Status = getStudentStatus(student3Grade);
displaysStudentData(student3Grade, student3Status);
