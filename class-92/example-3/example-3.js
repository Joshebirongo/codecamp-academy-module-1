// Author: Muliri Shebirongo Jonathan <Joshebirongo>

// Select DOM element
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add click listener
addTaskBtn.addEventListener("click", function () {
  // Read input value
  const task = taskInput.value;

  // Prevent empty task
  if (task.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  // Create List Item
  const newTask = document.createElement("li");

  // Add task text
  newTask.textContent = task;

  // Add task to List
  taskList.appendChild(newTask);

  // Clesr input
  taskInput.value = "";
});
