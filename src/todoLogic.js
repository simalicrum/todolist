const toDoItem = (title, description, dueDate, priority, done, uniqueID) => {
  return { title, description, dueDate, priority, done, uniqueID };
};

const Projects = () => {
  let list = [];
  const generateUniqueID = () => {
    let newID = Math.floor(Math.random() * 9999);
    while (list.some((element) => element.uniqueID == newID)) {
      newID = Math.floor(Math.random() * 9999);
    }
    return newID;
  };
  const addToDoList = (toDoList) => {
    list.push(toDoList);
  };
  const getTaskListIndex = (toDoListName) => {
    return list.findIndex((element) => element.name == toDoListName);
  };
  return { list, addToDoList, getTaskListIndex, generateUniqueID };
};

const toDoList = (name, uniqueID) => {
  let list = [];
  const generateUniqueID = () => {
    let newID = Math.floor(Math.random() * 9999);
    while (list.some((element) => element.uniqueID == newID)) {
      newID = Math.floor(Math.random() * 9999);
    }
    return newID;
  };
  const addToDoItem = (toDoItem) => {
    list.push(toDoItem);
  };
  return { name, uniqueID, list, addToDoItem, generateUniqueID };
};

export { toDoItem, Projects, toDoList };
