const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');

    const taskTextElement = document.createElement('span');
    taskTextElement.classList.add('task-text');
    taskTextElement.textContent = taskText;

    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      const newText = prompt('Edit task:', taskTextElement.textContent);
      if (newText !== null) {
        taskTextElement.textContent = newText;
      }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskItem.remove();
    });

    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
});