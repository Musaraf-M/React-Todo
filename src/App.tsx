import React, { useState } from "react";
import { TodoListItem } from "./component/TodoListItem";

const intialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "Write app", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(intialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  return(
  <React.Fragment>
    <TodoListItem todo={todos[0]} toggleTodo= {toggleTodo}/>
    <TodoListItem todo={todos[1]} toggleTodo= {toggleTodo}/>
  </React.Fragment>
  );
};

export default App;
