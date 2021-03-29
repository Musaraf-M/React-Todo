import React, { useState } from "react";
import { AddTodoForm } from "./component/AddTodoForm";
import { TodoList } from "./component/TodoList";

const intialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "Write app", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(intialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
