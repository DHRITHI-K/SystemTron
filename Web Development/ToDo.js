function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const actionButtons = document.createElement('div');
    actionButtons.className = 'action-buttons';

    const checkButton = document.createElement('button');
    checkButton.textContent = 'Check';
    checkButton.className = 'check';
    checkButton.onclick = function () {
        li.classList.add('completed');
    };

    const uncheckButton = document.createElement('button');
    uncheckButton.textContent = 'Uncheck';
    uncheckButton.className = 'uncheck';
    uncheckButton.onclick = function () {
        li.classList.remove('completed');
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete';
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    actionButtons.appendChild(checkButton);
    actionButtons.appendChild(uncheckButton);
    actionButtons.appendChild(deleteButton);

    li.appendChild(actionButtons);
    taskList.appendChild(li);

    taskInput.value = '';
}