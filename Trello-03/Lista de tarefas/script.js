function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var taskText = taskInput.value;
    var taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    taskItem.onclick = function() {
        taskItem.classList.toggle("done");
    };

    taskList.appendChild(taskItem);
    taskInput.value = "";
}
