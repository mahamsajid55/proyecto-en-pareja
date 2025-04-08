// Get DOM elements
const taskForm = document.getElementById('addTaskForm');
const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const taskList = document.getElementById('taskList');

// Event Listener for form submission
taskForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const title = taskTitle.value;
    const description = taskDescription.value;

    if (title.trim()) {
        addTask(title, description);
        taskTitle.value = '';  // Clear the input field
        taskDescription.value = '';  // Clear the textarea
    }
});

// Function to add a task to the list
function addTask(title, description) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <div>
            <strong>${title}</strong>
            <p>${description}</p>
        </div>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);
}

// Function to delete a task
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}
