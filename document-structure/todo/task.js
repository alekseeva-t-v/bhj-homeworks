const tasksInput = document.querySelector('.tasks__input');
const tasksAddButton = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');
let tasks;
!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem('tasks')));

function createNewElement(tag, className, parentElement) {
  const element = document.createElement(tag);
  element.className = className;
  parentElement.append(element);

  return element;
}

function createTaskElement(text) {
  const task = createNewElement('div', 'task', tasksList);
  const taskTitle = createNewElement('div', 'task__title', task);
  taskTitle.textContent = text;
  const taskRemove = createNewElement('a', 'task__remove', task);
  taskRemove.href = '#';
  taskRemove.innerText = '×';
  taskRemove.addEventListener('click', (event) => {
    event.preventDefault();
    const currentTask = taskRemove.closest('.task');
    const taskElem = currentTask.querySelector('.task__title').textContent;
    const searchIndex = tasks.findIndex((task) => {
      return task === taskElem;
    });
    tasks.splice(searchIndex, 1);
    updateLocal();

    currentTask.remove();
  });
}

function addTask() {
  createTaskElement(tasksInput.value.trim());
  tasks.push(tasksInput.value.trim());
  tasksInput.value = '';
  updateLocal();
}

function updateLocal() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function fillHtmlList() {
  if (tasks.length > 0) {
    tasks.forEach((item) => {
      createTaskElement(item);
    });
  }
}

fillHtmlList();

tasksAddButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (tasksInput.value.trim()) {
    addTask()
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter' && tasksInput.value.trim()) {
    addTask()
  }
});
