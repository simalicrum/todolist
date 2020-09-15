const toDoItem = (title, description, dueDate, priority, done) => {
  return { title, description, dueDate, priority, done };
};

const Projects = () => {
  let list = [];
  const addToDoList = (toDoList) => {list.push(toDoList)};
  return {list, addToDoList}
}

const toDoList = (name) => {
  let list = [];
  const addToDoItem = (toDoItem) => {list.push(toDoItem)};
  return {name, list, addToDoItem}
}

export { toDoItem, Projects, toDoList };
