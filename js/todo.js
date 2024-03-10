document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const tasksList = document.getElementById("tasks");
    const removeCheckedBtn = document.getElementById("remove-checked-btn");

    // Load tasks from localStorage if available
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to render tasks
    function renderTasks() {
        tasksList.innerHTML = "";
        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                <label for="task-${index}" class="${task.completed ? "completed" : ""}">${task.text}</label>
            `;
            tasksList.appendChild(listItem);
        });
    }

    // Initial render
    renderTasks();

    // Function to save tasks to localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to handle form submission
    todoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const text = todoInput.value.trim();
        if (text !== "") {
            tasks.push({ text, completed: false });
            renderTasks();
            saveTasks();
            todoInput.value = "";
        }
    });

    // Function to handle checkbox change
    tasksList.addEventListener("change", function(event) {
        if (event.target.type === "checkbox") {
            const index = parseInt(event.target.id.split("-")[1]);
            tasks[index].completed = event.target.checked;
            renderTasks();
            saveTasks();
        }
    });

    // Function to handle remove checked tasks button click
    removeCheckedBtn.addEventListener("click", function() {
        for (let i = tasks.length - 1; i >= 0; i--) {
            if (tasks[i].completed) {
                tasks.splice(i, 1);
            }
        }
        renderTasks();
        saveTasks();
    });
});