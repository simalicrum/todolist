console.log("Hello, World");

const toDoItem = (title, description, dueDate, priority) => {
  return {title, description, dueDate, priority}
}

let vacuuming = toDoItem("Vacuum the house", "Vacuuming the house means that you get out the vacuum cleaner and plug it in and push it around the floor.", "November 5, 2020", "High");

console.log(vacuuming);