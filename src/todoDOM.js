const renderToDoItem = (element, toDoItemObj) => {
  let content = document.getElementById(element);
  let todoItem = document.createElement("div");
  todoItem.setAttribute("id", toDoItemObj.uniqueID + "-task");
  todoItem.setAttribute("class", "to-do-item");
  let todoItemToggle = document.createElement("input");
  todoItemToggle.setAttribute("type", "checkbox");
  todoItemToggle.setAttribute("id", toDoItemObj.uniqueID + "-toggle-done");
  todoItemToggle.setAttribute("name", toDoItemObj.uniqueID + "-toggle-done");
  let todoItemTitle = document.createElement("label");
  todoItemTitle.setAttribute("class", "to-do-item-title");
  todoItemTitle.setAttribute("for", toDoItemObj.uniqueID + "-toggle-done");
  todoItemTitle.innerHTML = toDoItemObj.title;
  let todoItemDesc = document.createElement("p");
  todoItemDesc.setAttribute("class", "to-do-item-desc");
  todoItemDesc.innerHTML = toDoItemObj.description;
  let todoItemDate = document.createElement("div");
  todoItemDate.innerHTML = "Due Date: " + toDoItemObj.dueDate;
  let todoItemPriority = document.createElement("select");
  todoItemPriority.setAttribute("name", toDoItemObj.uniqueID + "-priority");
  todoItemPriority.setAttribute("id", toDoItemObj.uniqueID + "-priority");
  let priorityHigh = document.createElement("option");
  priorityHigh.setAttribute("value", "high");
  priorityHigh.innerHTML = "High";
  let priorityMedium = document.createElement("option");
  priorityMedium.setAttribute("value", "medium");
  priorityMedium.innerHTML = "Medium";
  let priorityLow = document.createElement("option");
  priorityLow.setAttribute("value", "low");
  priorityLow.innerHTML = "Low";
  let todoDelete = document.createElement("button");
  todoDelete.setAttribute("id", toDoItemObj.uniqueID + "-delete-button");
  todoDelete.innerHTML = "Delete Task";
  todoDelete.addEventListener("click", function () {
    document
      .querySelector(".shown-list")
      .removeChild(document.getElementById(toDoItemObj.uniqueID + "-task"));
  });
  todoItemPriority.appendChild(priorityHigh);
  todoItemPriority.appendChild(priorityMedium);
  todoItemPriority.appendChild(priorityLow);
  todoItem.appendChild(todoItemToggle);
  todoItem.appendChild(todoItemTitle);
  todoItem.appendChild(todoItemDesc);
  todoItem.appendChild(todoItemDate);
  todoItem.appendChild(document.createElement("br"));
  todoItem.appendChild(todoItemPriority);
  todoItem.appendChild(document.createElement("br"));
  todoItem.appendChild(document.createElement("br"));
  todoItem.appendChild(todoDelete);
  content.appendChild(todoItem);
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
  todoItemDate.setAttribute("type", "date");
  todoItemDate.setAttribute("id", "form-date");
  let todoItemDateLabel = document.createElement("label");
  todoItemDateLabel.innerHTML = "Due Date";
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
  listDiv.setAttribute("id", taskList.uniqueID + "-content");
  listDiv.setAttribute("class", "hidden-list");
  target.appendChild(listDiv);
  taskList.list.forEach((i) =>
    renderToDoItem(taskList.uniqueID + "-content", i)
  );
};

const renderProject = (element, project) => {
  let target = document.getElementById(element);
  let projectDiv = document.createElement("div");
  projectDiv.innerHTML = project.name;
  projectDiv.setAttribute("id", project.uniqueID);
  projectDiv.setAttribute("class", "project");
  projectDiv.addEventListener("click", function showTaskList() {
    document.querySelector(".shown-list").setAttribute("class", "hidden-list");
    document
      .getElementById(project.uniqueID + "-content")
      .setAttribute("class", "shown-list");
    document.querySelectorAll(".project").forEach(element => {element.style.background = "white"});
    projectDiv.style.background = "lightgrey";
  });
  target.appendChild(projectDiv);
};

const renderListOfProjects = (element, projects) => {
  projects.list.forEach((project) => {
    renderProject(element, project);
  });
  document.getElementById(projects.list[0].uniqueID).style.background = "lightgrey";
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
