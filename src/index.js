import { toDoItem, Projects, toDoList } from "./todoLogic.js";
import {
  renderToDoItem,
  renderAddForm,
  showForm,
  hideForm,
  renderTaskList,
  renderProject,
  renderListOfProjects,
  renderProjectForm,
} from "./todoDOM.js";

function addDeleteButtonLogic(uniqueID) {
  document
    .getElementById(uniqueID + "-delete-button")
    .addEventListener("click", function () {
      projects.list[
        projects.getTaskListIndexfromUniqueID(
          document.querySelector(".shown-list").id.slice(0, -8)
        )
      ].removeToDoItem(uniqueID);
      console.log(projects);
    });
}

function returnTaskItem(uniqueID) {
  return projects.list[
    projects.getTaskListIndexfromUniqueID(
      document.querySelector(".shown-list").id.slice(0, -8)
    )
  ].list[
    projects.list[
      projects.getTaskListIndexfromUniqueID(
        document.querySelector(".shown-list").id.slice(0, -8)
      )
    ].getToDoItemIndexfromUniqueID(uniqueID)
  ];
}

function addDoneToggleLogic(uniqueID) {
  let toggleElement = document.getElementById(uniqueID + "-toggle-done");
  toggleElement.addEventListener("click", function () {
    let taskItemFound =
      projects.list[
        projects.getTaskListIndexfromUniqueID(
          document.querySelector(".shown-list").id.slice(0, -8)
        )
      ].list[
        projects.list[
          projects.getTaskListIndexfromUniqueID(
            document.querySelector(".shown-list").id.slice(0, -8)
          )
        ].getToDoItemIndexfromUniqueID(uniqueID)
      ];
    if (toggleElement.checked == true) {
      taskItemFound.done = true;
      console.log("This is toggled on too");
      console.log(taskItemFound);

    } else {
      taskItemFound.done = false;
      console.log("This is toggled off too");
      console.log(taskItemFound);
    }
  });
}

let projects = Projects();

// Add demo projects and tasks

projects.addToDoList(toDoList("Default", projects.generateUniqueID()));
projects.addToDoList(
  toDoList("Build a Rocket Ship", projects.generateUniqueID())
);

projects.list[projects.getTaskListIndex("Default")].addToDoItem(
  toDoItem(
    "Vacuum the house",
    "Vacuuming the house means that you get out the vacuum cleaner and plug it in and push it around the floor.",
    "November 5, 2020",
    "high",
    false,
    projects.list[projects.getTaskListIndex("Default")].generateUniqueID()
  )
);

projects.list[projects.getTaskListIndex("Default")].addToDoItem(
  toDoItem(
    "Do the dishes",
    "Put the dishes in the dishwasher and turn it on. Then put the clean dishes into the cupboards.",
    "September 10, 2020",
    "medium",
    false,
    projects.list[projects.getTaskListIndex("Default")].generateUniqueID()
  )
);

projects.list[projects.getTaskListIndex("Build a Rocket Ship")].addToDoItem(
  toDoItem(
    "Hire Astronauts",
    "Check out indeed.com for good candidates.",
    "January 1, 2025",
    "high",
    false,
    projects.list[
      projects.getTaskListIndex("Build a Rocket Ship")
    ].generateUniqueID()
  )
);

projects.list[projects.getTaskListIndex("Build a Rocket Ship")].addToDoItem(
  toDoItem(
    "Buy Engines",
    "Buy the best thing on amazon.",
    "Febuary 15, 2023",
    "high",
    false,
    projects.list[
      projects.getTaskListIndex("Build a Rocket Ship")
    ].generateUniqueID()
  )
);

renderListOfProjects("lists", projects);

renderProjectForm("new-project-ok", "new-project-form");

document
  .getElementById("new-project-button")
  .addEventListener("click", function () {
    document.getElementById("new-project-button").style.display = "none";
    showForm("new-project-form");
  });

document
  .getElementById("new-project-ok")
  .addEventListener("click", function () {
    projects.addToDoList(
      toDoList(
        document.getElementById("project-name").value,
        projects.generateUniqueID()
      )
    );
    document.getElementById("project-name").value = "";
    renderProject("lists", projects.list[projects.list.length - 1]);
    renderTaskList("content", projects.list[projects.list.length - 1]);
    document.getElementById("new-project-button").style.display = "block";
    hideForm("new-project-form");
  });

renderAddForm("add-task-ok", "add-task-form");

document
  .getElementById("add-task-button")
  .addEventListener("click", function () {
    document.getElementById("add-task-button").style.display = "none";
    showForm("add-task-form");
  });

document.getElementById("add-task-ok").addEventListener("click", function () {
  let newUniqueID = projects.list[
    projects.getTaskListIndexfromUniqueID(
      document.querySelector(".shown-list").id.slice(0, -8)
    )
  ].generateUniqueID();
  projects.list[
    projects.getTaskListIndexfromUniqueID(
      document.querySelector(".shown-list").id.slice(0, -8)
    )
  ].addToDoItem(
    toDoItem(
      document.getElementById("form-title").value,
      document.getElementById("form-description").value,
      document.getElementById("form-date").value,
      document.getElementById("form-priority").value,
      false,
      newUniqueID
    )
  );
  document.getElementById("form-title").value = "";
  document.getElementById("form-description").value = "";
  document.getElementById("form-date").value = "";
  document.getElementById("form-priority").value = "";
  renderToDoItem(
    document.querySelector(".shown-list").id,
    projects.list[
      projects.getTaskListIndexfromUniqueID(
        document.querySelector(".shown-list").id.slice(0, -8)
      )
    ].list[
      projects.list[
        projects.getTaskListIndexfromUniqueID(
          document.querySelector(".shown-list").id.slice(0, -8)
        )
      ].list.length - 1
    ]
  );
  addDeleteButtonLogic(newUniqueID);
  document.getElementById("add-task-button").style.display = "block";
  hideForm("add-task-form");
});

projects.list.forEach((element) => renderTaskList("content", element));
document
  .getElementById(
    projects.list[projects.getTaskListIndex("Default")].uniqueID + "-content"
  )
  .setAttribute("class", "shown-list");

// add delete button logic to demo entries

projects.list.forEach((i) => {
  i.list.forEach((j) => {
    addDeleteButtonLogic(j.uniqueID);
    addDoneToggleLogic(j.uniqueID);
  });
});
