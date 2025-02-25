function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Bitte eine Aufgabe eingeben!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML =
    taskInput.value +
    ' <button class="delete-btn" onclick="removeTask(this)">Löschen</button>';
  taskList.appendChild(li);

  taskInput.value = "";
}

function removeTask(button) {
  let li = button.parentElement;
  li.remove();
}
