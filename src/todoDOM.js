const renderToDoItem = (element, toDoItemObj) => {
  const content = document.getElementById(element);
  const todoItem = document.createElement('div');
  todoItem.setAttribute('id', `${toDoItemObj.uniqueID}-task`);
  todoItem.setAttribute('class', 'to-do-item');
  const todoItemToggle = document.createElement('input');
  todoItemToggle.setAttribute('type', 'checkbox');
  todoItemToggle.setAttribute('id', `${toDoItemObj.uniqueID}-toggle-done`);
  todoItemToggle.setAttribute('name', `${toDoItemObj.uniqueID}-toggle-done`);
  const todoItemTitle = document.createElement('label');
  todoItemTitle.setAttribute('class', 'to-do-item-title');
  todoItemTitle.setAttribute('for', `${toDoItemObj.uniqueID}-toggle-done`);
  todoItemTitle.innerHTML = toDoItemObj.title;
  const todoItemDesc = document.createElement('p');
  todoItemDesc.setAttribute('class', 'to-do-item-desc');
  todoItemDesc.innerHTML = toDoItemObj.description;
  const todoItemDate = document.createElement('div');
  todoItemDate.innerHTML = `Due Date: ${toDoItemObj.dueDate}`;
  const todoItemPriority = document.createElement('select');
  todoItemPriority.setAttribute('name', `${toDoItemObj.uniqueID}-priority`);
  todoItemPriority.setAttribute('id', `${toDoItemObj.uniqueID}-priority`);
  const priorityHigh = document.createElement('option');
  priorityHigh.setAttribute('value', 'high');
  priorityHigh.innerHTML = 'High';
  const priorityMedium = document.createElement('option');
  priorityMedium.setAttribute('value', 'medium');
  priorityMedium.innerHTML = 'Medium';
  const priorityLow = document.createElement('option');
  priorityLow.setAttribute('value', 'low');
  priorityLow.innerHTML = 'Low';
  const todoDelete = document.createElement('button');
  todoDelete.setAttribute('id', `${toDoItemObj.uniqueID}-delete-button`);
  todoDelete.innerHTML = 'Delete Task';
  todoDelete.addEventListener('click', () => {
    document
      .querySelector('.shown-list')
      .removeChild(document.getElementById(`${toDoItemObj.uniqueID}-task`));
  });
  if (toDoItemObj.done === true) {
    todoItem.style.textDecoration = 'line-through';
    todoItemToggle.checked = true;
  }
  todoItemPriority.appendChild(priorityHigh);
  todoItemPriority.appendChild(priorityMedium);
  todoItemPriority.appendChild(priorityLow);
  todoItem.appendChild(todoItemToggle);
  todoItem.appendChild(todoItemTitle);
  todoItem.appendChild(todoItemDesc);
  todoItem.appendChild(todoItemDate);
  todoItem.appendChild(document.createElement('br'));
  todoItem.appendChild(todoItemPriority);
  todoItem.appendChild(document.createElement('br'));
  todoItem.appendChild(document.createElement('br'));
  todoItem.appendChild(todoDelete);
  content.appendChild(todoItem);
};

const renderAddForm = (okButton, formTarget) => {
  const target = document.getElementById(formTarget);
  const todoNewItemForm = document.createElement('form');
  const todoItemTitle = document.createElement('input');
  todoItemTitle.setAttribute('id', 'form-title');
  const todoItemTitleLabel = document.createElement('label');
  todoItemTitleLabel.innerHTML = 'Title';
  const todoItemDescription = document.createElement('input');
  todoItemDescription.setAttribute('id', 'form-description');
  const todoItemDescriptionLabel = document.createElement('label');
  todoItemDescriptionLabel.innerHTML = 'Description';
  const todoItemDate = document.createElement('input');
  todoItemDate.setAttribute('type', 'date');
  todoItemDate.setAttribute('id', 'form-date');
  const todoItemDateLabel = document.createElement('label');
  todoItemDateLabel.innerHTML = 'Due Date';
  const todoItemPriority = document.createElement('select');
  todoItemPriority.setAttribute('id', 'form-priority');
  todoItemPriority.setAttribute('name', 'priority');
  const todoItemPriorityLabel = document.createElement('label');
  todoItemPriorityLabel.innerHTML = 'Priority:';
  const priorityHigh = document.createElement('option');
  priorityHigh.setAttribute('value', 'high');
  priorityHigh.innerHTML = 'High';
  const priorityMedium = document.createElement('option');
  priorityMedium.setAttribute('value', 'medium');
  priorityMedium.innerHTML = 'Medium';
  const priorityLow = document.createElement('option');
  priorityLow.setAttribute('value', 'low');
  priorityLow.innerHTML = 'Low';
  const todoItemAdd = document.createElement('button');
  todoItemAdd.setAttribute('id', okButton);
  todoItemAdd.innerHTML = 'Add';
  todoNewItemForm.appendChild(todoItemTitleLabel);
  todoNewItemForm.appendChild(document.createElement('br'));
  todoNewItemForm.appendChild(todoItemTitle);
  todoNewItemForm.appendChild(document.createElement('br'));
  todoNewItemForm.appendChild(todoItemDescriptionLabel);
  todoNewItemForm.appendChild(document.createElement('br'));
  todoNewItemForm.appendChild(todoItemDescription);
  todoNewItemForm.appendChild(document.createElement('br'));
  todoNewItemForm.appendChild(todoItemDateLabel);
  todoNewItemForm.appendChild(document.createElement('br'));
  todoNewItemForm.appendChild(todoItemDate);
  todoNewItemForm.appendChild(document.createElement('br'));
  todoNewItemForm.appendChild(todoItemPriorityLabel);
  todoNewItemForm.appendChild(document.createElement('br'));
  todoItemPriority.appendChild(priorityHigh);
  todoItemPriority.appendChild(priorityMedium);
  todoItemPriority.appendChild(priorityLow);
  todoNewItemForm.appendChild(todoItemPriority);
  todoNewItemForm.appendChild(document.createElement('br'));
  target.appendChild(todoNewItemForm);
  target.appendChild(todoItemAdd);
};

const showForm = (formId) => {
  document.getElementById(formId).style.display = 'block';
};

const hideForm = (formId) => {
  document.getElementById(formId).style.display = 'none';
};

const renderTaskList = (element, taskList) => {
  const target = document.getElementById(element);
  const listDiv = document.createElement('div');
  listDiv.setAttribute('id', `${taskList.uniqueID}-content`);
  listDiv.setAttribute('class', 'hidden-list');
  target.appendChild(listDiv);
  taskList.list.forEach((i) => renderToDoItem(`${taskList.uniqueID}-content`, i));
};

const renderProject = (element, project) => {
  const target = document.getElementById(element);
  const projectDiv = document.createElement('div');
  projectDiv.innerHTML = project.name;
  projectDiv.setAttribute('id', project.uniqueID);
  projectDiv.setAttribute('class', 'project');
  projectDiv.addEventListener('click', () => {
    document.querySelector('.shown-list').setAttribute('class', 'hidden-list');
    document.getElementById(`${project.uniqueID}-content`).setAttribute('class', 'shown-list');
    document.querySelectorAll('.project').forEach((i) => {
      i.style.background = 'white';
    });
    projectDiv.style.background = 'lightgrey';
  });
  target.appendChild(projectDiv);
};

const renderListOfProjects = (element, projects) => {
  projects.list.forEach((project) => {
    renderProject(element, project);
  });
  document.getElementById(projects.list[0].uniqueID).style.background = 'lightgrey';
};

const renderProjectForm = (okButton, formTarget) => {
  const target = document.getElementById(formTarget);
  const newProjectForm = document.createElement('form');
  const newProjectName = document.createElement('input');
  newProjectName.setAttribute('id', 'project-name');
  const newProjectNameLabel = document.createElement('label');
  newProjectNameLabel.innerHTML = 'Project Name:';
  const newProjectAdd = document.createElement('button');
  newProjectAdd.setAttribute('id', okButton);
  newProjectAdd.innerHTML = 'Add';
  newProjectForm.appendChild(newProjectNameLabel);
  newProjectForm.appendChild(document.createElement('br'));
  newProjectForm.appendChild(newProjectName);
  target.appendChild(newProjectForm);
  target.appendChild(newProjectAdd);
};

export {
  renderToDoItem,
  renderAddForm,
  showForm,
  hideForm,
  renderTaskList,
  renderProject,
  renderListOfProjects,
  renderProjectForm,
};
