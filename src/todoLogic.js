const toDoItem = (title, description, dueDate, priority, done, uniqueID) => ({
  title,
  description,
  dueDate,
  priority,
  done,
  uniqueID,
});

const Projects = () => {
  const list = [];
  const generateUniqueID = () => {
    let newID = Math.floor(Math.random() * 9999);
    while (list.some((element) => element.uniqueID === newID)) {
      newID = Math.floor(Math.random() * 9999);
    }
    return newID;
  };
  const addToDoList = (toDoList) => {
    list.push(toDoList);
  };
  const getTaskListIndex = (toDoListName) => list.findIndex((element) => element.name === toDoListName);
  const getTaskListIndexfromUniqueID = (toDoListUniqueID) => list.findIndex((element) => element.uniqueID === toDoListUniqueID);
  return {
    list,
    addToDoList,
    getTaskListIndex,
    getTaskListIndexfromUniqueID,
    generateUniqueID,
  };
};

const toDoList = (name, uniqueID) => {
  const list = [];
  const generateUniqueID = () => {
    let newID = Math.floor(Math.random() * 9999);
    while (list.some((element) => element.uniqueID === newID)) {
      newID = Math.floor(Math.random() * 9999);
    }
    return newID;
  };
  const addToDoItem = (toDoItem) => {
    list.push(toDoItem);
  };
  const getToDoItemIndexfromUniqueID = (toDoItemUniqueID) => list.findIndex((element) => element.uniqueID === toDoItemUniqueID);
  const removeToDoItem = (uniqueID) => {
    list.splice(getToDoItemIndexfromUniqueID(uniqueID), 1);
  };
  return {
    name,
    uniqueID,
    list,
    addToDoItem,
    getToDoItemIndexfromUniqueID,
    generateUniqueID,
    removeToDoItem,
  };
};

export { toDoItem, Projects, toDoList };
