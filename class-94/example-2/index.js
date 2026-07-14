const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const archivedTask = document.getElementById("ArchievedTask");

// Create title for archived section
const archivedTitle = document.createElement("h2");
archivedTitle.innerText = "Archived Tasks";
archivedTitle.style.margin = "40px 0 20px";
archivedTask.appendChild(archivedTitle);

// Add Task
addBtn.addEventListener("click", addTask);

// Add task with Enter key
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Main task container
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  // Task text
  const text = document.createElement("p");
  text.classList.add("task-text");
  text.innerText = taskText;

  // Buttons container
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");

  // DONE BUTTON
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.classList.add("done-btn");

  doneBtn.addEventListener("click", function () {
    text.classList.toggle("completed");

    if (text.classList.contains("completed")) {
      doneBtn.innerText = "Undo";
    } else {
      doneBtn.innerText = "Done";
    }
    //
    console.log("Task marked as done : " + taskText);
  });

  // ARCHIVE BUTTON
  const archiveBtn = document.createElement("button");
  archiveBtn.innerText = "Archive";
  archiveBtn.classList.add("archieve-btn");

  archiveBtn.addEventListener("click", function () {
    // Create archived task container
    const archivedDiv = document.createElement("div");
    archivedDiv.classList.add("task");
    // add a class : "archieved" to the div
    archivedDiv.classList.add("archieved");

    // Archived task text
    const archivedText = document.createElement("p");
    archivedText.classList.add("task-text");
    archivedText.innerText = taskText;

    // Add completed style automatically
    archivedText.classList.add("completed");

    // Archived buttons container
    const archivedButtons = document.createElement("div");
    archivedButtons.classList.add("buttons");

    // Restore button
    const restoreBtn = document.createElement("button");
    restoreBtn.innerText = "Restore";
    restoreBtn.classList.add("done-btn");

    // Delete button
    const archivedDeleteBtn = document.createElement("button");
    archivedDeleteBtn.innerText = "Delete";
    archivedDeleteBtn.classList.add("delete-btn");

    // Restore functionality
    restoreBtn.addEventListener("click", function () {
      archivedDiv.remove();

      taskList.appendChild(taskDiv);
    });

    // Delete archived task
    archivedDeleteBtn.addEventListener("click", function () {
      archivedDiv.remove();
    });

    archivedButtons.appendChild(restoreBtn);
    archivedButtons.appendChild(archivedDeleteBtn);

    archivedDiv.appendChild(archivedText);
    archivedDiv.appendChild(archivedButtons);

    // Move to archived section
    archivedTask.appendChild(archivedDiv);

    // Remove from active tasks
    taskDiv.remove();
    console.log("Task marked as archived : " + taskText);
  });

  // DELETE BUTTON
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    taskDiv.remove();
  });

  // Append buttons
  buttonsDiv.appendChild(doneBtn);
  buttonsDiv.appendChild(archiveBtn);
  buttonsDiv.appendChild(deleteBtn);

  // Append elements
  taskDiv.appendChild(text);
  taskDiv.appendChild(buttonsDiv);

  // Add task to list
  taskList.appendChild(taskDiv);

  // Clear input
  taskInput.value = "";
}
