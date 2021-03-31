import React, { useState } from "react";
import { AddTodoForm } from "./component/AddTodoForm";
import { TodoList } from "./component/TodoList";

import { Heading, VStack } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const intialTodos: Array<Todo> = [
  { text: "walk the dog", id: "1" },
  { text: "Write app", id: "2" },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(intialTodos);

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, id: nanoid() }]);
  };

  const deleteTodo: DeleteTodo = (id) => {
    const newTodos = todos.filter((todos) => {
      return todos.id !== id;
    });
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <VStack spacing={6}>
        <Heading
          bgGradient='linear-gradient(to right, pink.800,pink.400,pink.200,blue.100)'
          bgClip='text'
          mb='8'
        >
          Todo Application
        </Heading>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
        <AddTodoForm addTodo={addTodo} />
      </VStack>
    </React.Fragment>
  );
};

export default App;
