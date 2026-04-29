// Author: Muliri Shebirongo Jonathan <Joshebirongo>

// Challenge: Daily Task Scheduler

// Initial dataset
let tasks = ["Check emails", "Write report", "Attend meeting", "Review code"];

// 1. Print total number of tasks in the list
console.log(`\nTotal tasks: ${tasks.length}`);

// 2. Add a new task to the end of the list
tasks.push("Plan tomorrow's work");

// 3. Add a new stak at the beginning of the list
tasks.unshift("Morning exercise");

// 4. Find the position of the task "Attend meeting"
const position = tasks.indexOf("Attend meeting");

console.log(`position of the task "Attend meeting": ${position}`);

// 5. Mark "Attend meeting" as completed by replacing it with "Attend meeting (Completed)"

// Find index of "Attend meeting"
const findIndex = tasks.indexOf("Attend meeting");

// Replace "Attend meeting" with "Attend meeting (completed)"
tasks.splice(findIndex, 1, "Attend meeting (completed)");

// 6. Remove the task "Check emails"
const removedtask = tasks.indexOf("Check emails");
if (removedtask !== -1) {
  tasks.splice(removedtask, 1);
}
// 7. Print all remaining tasks
console.log("\nTasks for today:");
for (let i = 0; i < tasks.length; i++) {
  console.log(`\nTask ${i + 1} : ${tasks[i]}`);
}

// 8. Check if the task "Review code" still exist
if (tasks.includes("Review code")) {
  console.log("\nTask still pending.");
} else {
  console.log("\nTask completed or removed.");
}
