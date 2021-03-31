import React, { useState } from "react";
import { AddTodoForm } from "./component/AddTodoForm";
import { TodoList } from "./component/TodoList";

import { Box, Container, Heading, VStack } from "@chakra-ui/react";

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
      <VStack spacing={0}>
        <Heading
          bgGradient='linear-gradient(to right, pink.800,pink.400,pink.200,blue.100)'
          bgClip='text'
          m='5'
        >
          Todo Application
        </Heading>
        <Container maxW='container.md' centerContent>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </Container>
        <AddTodoForm addTodo={addTodo} />
      </VStack>
    </React.Fragment>
  );
};

export default App;
