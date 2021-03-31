import React, { useEffect, useState } from "react";
import { AddTodoForm } from "./component/AddTodoForm";
import { TodoList } from "./component/TodoList";

import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { FaMoon, FaSun } from "react-icons/fa";

interface todo {
  todos?: Todo;
}

const App: React.FC<todo> = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, id: nanoid() }]);
  };

  const deleteTodo: DeleteTodo = (id) => {
    const newTodos = todos.filter((todos: Todo) => {
      return todos.id !== id;
    });
    setTodos(newTodos);
  };

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <React.Fragment>
      <VStack spacing={6}>
        <IconButton
          icon={colorMode ==='light' ? <FaSun />: <FaMoon />}
          isRound={true}
          size='lg'
          alignSelf='flex-end'
          aria-label='color mode'
          m='5'
          onClick={toggleColorMode}
        />
        <Heading
          bgGradient='linear-gradient(to right, pink.800,pink.400,pink.200,blue.400)'
          bgClip='text'
          mb='8'
        >
          Todo Application
        </Heading>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <AddTodoForm addTodo={addTodo} />
      </VStack>
    </React.Fragment>
  );
};

export default App;
