let todos = ['item 1', 'item 2', 'item 3']

function displayTodos() {
  console.log('My todos:', todos);
}

function addTodos(todo) {
  todos.push(todo);
  displayTodos();
}
