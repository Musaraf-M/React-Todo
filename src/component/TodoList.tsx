import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <VStack
      divider={<StackDivider />}
      borderColor='grey.100'
      borderWidth='2px'
      padding='4'
      borderRadius='lg'
      width="100%"
      maxW={{base: '90vw', sm: '80vw', lg:'50vw', xl:'40vw'}}
      alignItems="stretch"
    >
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />;
      })}
    </VStack>
  );
};
