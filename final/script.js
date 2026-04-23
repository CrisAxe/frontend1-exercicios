function getTask() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTask(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTask() {
    const input = document.getElementById("taskInput");
    const title = input.value.trim();

    if (!title) return;


    const tasks = getTask();

    tasks.push({ id: Date.now(), title, done: false });
    saveTask(tasks);
    input.value = "";

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task created successfully!",
        showConfirmButton: false,
        timer: 1500
    });

    renderTasks();
}

function renderTasks() {
    const tasks = getTask();
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="validate.gif" alt="validate" width="20" height="20"onclick="toggleDone(${task.id})">

            <span class="task-title"
                style="text-decoration: ${task.done ? "line-through" : "none"}"
                onclick="editTask(${task.id}, this)">
                ${task.title}
            </span>

            <small>
                Created at: ${new Date(task.id).toLocaleString()}
            </small>
            <img src="edit.gif" alt="edit" width="20" height="20" style="cursor: pointer;"onclick="editTask(${task.id}, this.parentElement.querySelector('.task-title'))">
            <img src="delete.gif" alt="delete" width="20" height="20" style="cursor: pointer;"onclick="deleteTask(${task.id})">
        `;
        taskList.appendChild(li);
    });
}

function toggleDone(id) {
    const tasks = getTask();

    const updatedTasks = tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
    );

    saveTask(updatedTasks);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task updated successfully!",
        showConfirmButton: false,
        timer: 1500
    });
    renderTasks();
}

function editTask(id, edited) {
    const tasks = getTask();
    const task = tasks.find(task => task.id === id);

    const input = document.createElement("input");
    input.type = "text";
    input.value = task.title;
    input.className = "edit-input";


    edited.replaceWith(input);
    input.focus();

    input.addEventListener("blur", saveEdit);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            saveEdit();
        }
    });
    function saveEdit() {
        const newTitle = input.value.trim();
        if (newTitle === "") return;

        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, title: newTitle } : task
        );
        saveTask(updatedTasks);

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task edited successfully!",
            showConfirmButton: false,
            timer: 1500
        });
        renderTasks();
    }
}

function deleteTask(id) {
    const tasks = getTask().filter(task => task.id !== id);
    saveTask(tasks);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task deleted successfully!",
        showConfirmButton: false,
        timer: 1500
    });
    renderTasks();
}

renderTasks();

