const renderToDoItem = (element, toDoItemObj) => {
  content = document.getElementById(element);
  let todoItem = document.createElement("div");
  todoItem.setAttribute("class", "todoitem");
  let todoItemToggle = document.createElement("input");
  todoItemToggle.setAttribute("type", "checkbox");
  let todoItemTitle = document.createElement("h2");
  todoItemTitle.setAttribute("class", "todoitemtitle");
  todoItemTitle.innerHTML = toDoItemObj.title;
  let todoItemDesc = document.createElement("p");
  todoItemDesc.setAttribute("class", "todoitemdesc");
  todoItemDesc.innerHTML = toDoItemObj.description;
  let todoItemPriority = document.createElement("select");
  todoItemPriority.setAttribute("name", "priority");
  todoItemPriority.setAttribute("id", "priority");
  let priorityHigh = document.createElement("option");
  priorityHigh.setAttribute("value", "high");
  priorityHigh.innerHTML = "High";
  let priorityMedium = document.createElement("option");
  priorityMedium.setAttribute("value", "medium");
  priorityMedium.innerHTML = "Medium";
  let priorityLow = document.createElement("option");
  priorityLow.setAttribute("value", "low");
  priorityLow.innerHTML = "Low";
  todoItemTitle.appendChild(todoItemToggle);
  todoItemPriority.appendChild(priorityHigh);
  todoItemPriority.appendChild(priorityMedium);
  todoItemPriority.appendChild(priorityLow);
  content.appendChild(todoItemTitle);
  content.appendChild(todoItemDesc);
  content.appendChild(todoItemPriority);
};

const renderAddForm = (okButton, formTarget) => {
  let target = document.getElementById(formTarget);
  let todoNewItemForm = document.createElement("form");
  let todoItemTitle = document.createElement("input");
  todoItemTitle.setAttribute("id", "form-title");
  let todoItemTitleLabel = document.createElement("label");
  todoItemTitleLabel.innerHTML = "Title";
  let todoItemDescription = document.createElement("input");
  todoItemDescription.setAttribute("id", "form-description");
  let todoItemDescriptionLabel = document.createElement("label");
  todoItemDescriptionLabel.innerHTML = "Description";
  let todoItemDate = document.createElement("input");
  todoItemDate.setAttribute("id", "form-date");
  let todoItemDateLabel = document.createElement("label");
  todoItemDateLabel.innerHTML = "Date";
  let todoItemPriority = document.createElement("select");
  todoItemPriority.setAttribute("id", "form-priority");
  todoItemPriority.setAttribute("name", "priority");
  let todoItemPriorityLabel = document.createElement("label");
  todoItemPriorityLabel.innerHTML = "Priority:";
  let priorityHigh = document.createElement("option");
  priorityHigh.setAttribute("value", "high");
  priorityHigh.innerHTML = "High";
  let priorityMedium = document.createElement("option");
  priorityMedium.setAttribute("value", "medium");
  priorityMedium.innerHTML = "Medium";
  let priorityLow = document.createElement("option");
  priorityLow.setAttribute("value", "low");
  priorityLow.innerHTML = "Low";
  let todoItemAdd = document.createElement("button");
  todoItemAdd.setAttribute("id", okButton);
  todoItemAdd.innerHTML = "Add";
  todoNewItemForm.appendChild(todoItemTitleLabel);
  todoNewItemForm.appendChild(document.createElement("br"));
  todoNewItemForm.appendChild(todoItemTitle);
  todoNewItemForm.appendChild(document.createElement("br"));
  todoNewItemForm.appendChild(todoItemDescriptionLabel);
  todoNewItemForm.appendChild(document.createElement("br"));
  todoNewItemForm.appendChild(todoItemDescription);
  todoNewItemForm.appendChild(document.createElement("br"));
  todoNewItemForm.appendChild(todoItemDateLabel);
  todoNewItemForm.appendChild(document.createElement("br"));
  todoNewItemForm.appendChild(todoItemDate);
  todoNewItemForm.appendChild(document.createElement("br"));
  todoNewItemForm.appendChild(todoItemPriorityLabel);
  todoNewItemForm.appendChild(document.createElement("br"));
  todoItemPriority.appendChild(priorityHigh);
  todoItemPriority.appendChild(priorityMedium);
  todoItemPriority.appendChild(priorityLow);
  todoNewItemForm.appendChild(todoItemPriority);
  todoNewItemForm.appendChild(document.createElement("br"));
  target.appendChild(todoNewItemForm);
  target.appendChild(todoItemAdd);
};

const showForm = (formId) => {
  document.getElementById(formId).style.display = "block";
};

const hideForm = (formId) => {
  document.getElementById(formId).style.display = "none";
};

const renderTaskList = (element, taskList) => {
  let target = document.getElementById(element);
  let listDiv = document.createElement("div");
  listDiv.setAttribute("id", taskList.name + "-content");
  listDiv.setAttribute("class", "hidden-list");
  target.appendChild(listDiv);
  taskList.list.forEach((i) => renderToDoItem(taskList.name + "-content", i));
};

const renderProject = (element, project) => {
  let target = document.getElementById(element);
  let projectDiv = document.createElement("div");
  projectDiv.innerHTML = project.name;
  projectDiv.setAttribute("id", project.name);
  projectDiv.addEventListener("click", function showTaskList() {
    document.querySelector(".shown-list").setAttribute("class", "hidden-list");
    document
      .getElementById(project.name + "-content")
      .setAttribute("class", "shown-list");
  });
  target.appendChild(projectDiv);
};

const renderListOfProjects = (element, projects) => {
  projects.list.forEach((project) => {
    renderProject(element, project);
  });
};

const renderProjectForm = (okButton, formTarget) => {
  let target = document.getElementById(formTarget);
  let newProjectForm = document.createElement("form");
  let newProjectName = document.createElement("input");
  newProjectName.setAttribute("id", "project-name");
  let newProjectNameLabel = document.createElement("label");
  newProjectNameLabel.innerHTML = "Project Name:";
  let newProjectAdd = document.createElement("button");
  newProjectAdd.setAttribute("id", okButton);
  newProjectAdd.innerHTML = "Add";
  newProjectForm.appendChild(newProjectNameLabel);
  newProjectForm.appendChild(document.createElement("br"));
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
