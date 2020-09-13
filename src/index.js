import { toDoItem } from "./todoLogic.js";
import { renderToDoItem } from "./todoDOM.js"

let vacuuming = toDoItem(
  "Vacuum the house",
  "Vacuuming the house means that you get out the vacuum cleaner and plug it in and push it around the floor.",
  "November 5, 2020",
  "High",
  false
);

renderToDoItem("content", vacuuming);