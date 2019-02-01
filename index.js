let todos = [];
let nextID = 0;

const todoApp = {
  displayTodo: () => {
    if (todos.length === 0) {
      console.log('You have no todo');
    } else {
      todos.forEach(todo => {
        console.log(todo);
      });
    }
  },

  addTodo: todoText => {
    todos.push({
      id: nextID,
      todoText: todoText,
      date: undefined
    });

    nextID++;
  },

  deleteTodo: idNumber => {
    const deleted = todos.filter(todo => {
      return todo.id !== idNumber;
    });
    todos = deleted;
  }
};

todoApp.addTodo('Learn HTML');
todoApp.addTodo('Learn CSS');
