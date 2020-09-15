import { toDoItem, Projects, toDoList } from "./todoLogic.js";
import { renderToDoItem, renderAddForm, showForm, hideForm, renderTaskList, renderListOfProjects, renderProjectForm } from "./todoDOM.js"

let projects = Projects();

projects.addToDoList(toDoList("Default"));
projects.addToDoList(toDoList("Build a Rocket Ship"));


projects.list[0].addToDoItem(toDoItem(
  "Vacuum the house",
  "Vacuuming the house means that you get out the vacuum cleaner and plug it in and push it around the floor.",
  "November 5, 2020",
  "high",
  false
));

projects.list[0].addToDoItem(toDoItem(
  "Do the dishes",
  "Put the dishes in the dishwasher and turn it on. Then put the clean dishes into the cupboards.",
  "September 10, 2020",
  "medium",
  false
));

projects.list[1].addToDoItem(toDoItem(
  "Hire Astronauts",
  "Check out indeed.com for good candidates.",
  "January 1, 2025",
  "high",
  false
));

projects.list[1].addToDoItem(toDoItem(
  "Buy Engines",
  "Buy the best thing on amazon.",
  "Febuary 15, 2023",
  "high",
  false
));

renderListOfProjects("lists", projects);

renderAddForm("add-task-ok", "add-task-form");

document.getElementById("add-task-button").addEventListener("click", function () {
  showForm("add-task-form");
});

document.getElementById("add-task-ok").addEventListener("click", function () {
  projects.list[0].addToDoItem(toDoItem(
    document.getElementById("form-title").value,
    document.getElementById("form-description").value,
    document.getElementById("form-date").value,
    document.getElementById("form-priority").value,
    false
  ));
  document.getElementById("form-title").value = "";
  document.getElementById("form-description").value = "";
  document.getElementById("form-date").value = "";
  document.getElementById("form-priority").value = "";
  renderToDoItem("content", projects.list[0].list[projects.list[0].list.length - 1]);
  hideForm("add-task-form");
});

projects.list.forEach(element => renderTaskList("content", element));
document.getElementById(projects.list[0].name + "-content").setAttribute("class", "shown-list");