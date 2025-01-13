let editingTask = null;

const handlePopUp = (task = null) => {
  const popup = document.getElementById("popup");
  const noteInput = document.getElementById("note-input");

  if (task) {
    editingTask = task;
    noteInput.value = task.querySelector(".note-text").innerText;
  } else {
    editingTask = null;
    noteInput.value = "";
  }

  popup.style.display = "block";
  document.querySelector(".black_bg").style.display = "block";
};

const handleClosePopUp = () => {
  document.getElementById("popup").style.display = "none";
  document.querySelector(".black_bg").style.display = "none";
};

const saveTasks = () => {
  const tasks = [];
  const taskListItems = document.querySelectorAll("#task-list li");
  const noContent = document.querySelector(".no_content");

  taskListItems.forEach((item) => {
    const noteText = item.querySelector(".note-text").innerText;
    const isChecked = item.querySelector("input[type='checkbox']").checked;

    tasks.push({ noteText, isChecked });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));

  noContent.style.display = tasks.length > 0 ? "none" : "block";
};

const loadTasks = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (savedTasks.length > 0) {
    const taskList = document.getElementById("task-list");
    const noContent = document.querySelector(".no_content");

    noContent.style.display = "none";

    savedTasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <div class="value">
          <input type="checkbox" ${
            task.isChecked ? "checked" : ""
          } onclick="handleCheckBox(this)" />
          <p class="note-text" style="${
            task.isChecked
              ? "text-decoration: line-through; color: #cdcdcd;"
              : ""
          }">
            ${task.noteText}
          </p>
          <div class="icons">
            <i class="fa-solid fa-pen" onclick="handlePopUp(this.closest('li'))"></i>
            <i class="fa-solid fa-trash" onclick="deleteTask(this)"></i>
          </div>
        </div>
      `;

      taskList.appendChild(listItem);
    });
  }
};

const deleteTask = (icon) => {
  const listItem = icon.closest("li");
  listItem.remove();
  saveTasks();
};

const handleApply = () => {
  const noteInput = document.getElementById("note-input");
  const noteText = noteInput.value.trim();

  if (noteText) {
    if (editingTask) {
      // Update existing task
      editingTask.querySelector(".note-text").innerText = noteText;
      editingTask = null;
    } else {
      // Add new task
      const taskList = document.getElementById("task-list");
      const noContent = document.querySelector(".no_content");

      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <div class="value">
          <input type="checkbox" onclick="handleCheckBox(this)" />
          <p class="note-text">${noteText}</p>
          <div class="icons">
            <i class="fa-solid fa-pen" onclick="handlePopUp(this.closest('li'))"></i>
            <i class="fa-solid fa-trash" onclick="deleteTask(this)"></i>
          </div>
        </div>
      `;

      taskList.appendChild(listItem);
      noContent.style.display = "none";
    }

    noteInput.value = "";
    saveTasks();
    handleClosePopUp();
  } else {
    alert("Please enter a note!");
  }
};

const handleColor = () => {
  const colorDiv = document.querySelector(".color");
  const moonIcon = colorDiv.children[0];
  const sunIcon = colorDiv.children[1];
  const noContent = document.querySelector(".no_content");
  const lightImage = noContent.children[0];
  const darkImage = noContent.children[1];

  if (moonIcon.style.display !== "none") {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline-block";
    document.body.classList.add("darkmode");
    darkImage.style.display = "inline-block";
    lightImage.style.display = "none";
  } else {
    moonIcon.style.display = "inline-block";
    sunIcon.style.display = "none";
    document.body.classList.remove("darkmode");
    lightImage.style.display = "inline-block";
    darkImage.style.display = "none";
  }
};

const handleCheckBox = (checkbox) => {
  const note = checkbox.nextElementSibling;

  if (checkbox.checked) {
    note.style.textDecoration = "line-through";
    note.style.color = "#cdcdcd";
  } else {
    note.style.textDecoration = "none";
    note.style.color = "var(--clr-text)";
  }
  saveTasks();
};

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();

  const colorDiv = document.querySelector(".color");
  const moonIcon = colorDiv.children[0];
  const sunIcon = colorDiv.children[1];

  moonIcon.style.display = "inline-block";
  sunIcon.style.display = "none";
});
