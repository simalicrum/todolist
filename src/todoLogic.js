const toDoItem = (title, description, dueDate, priority, done) => {
  return { title, description, dueDate, priority, done };
};

const Projects = () => {
  let list = [];
  const addToDoList = (toDoList) => {
    list.push(toDoList);
  };
  const getTaskListIndex = (toDoListName) => {
    return list.findIndex((element) => element.name == toDoListName);
  };
  return { list, addToDoList, getTaskListIndex };
};

const toDoList = (name) => {
  let list = [];
  const addToDoItem = (toDoItem) => {
    list.push(toDoItem);
  };
  return { name, list, addToDoItem };
};

export { toDoItem, Projects, toDoList };
