import { Badge, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme='green' p='4' m='4' borderRadius="lg">
        No Todos, yah !
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor='grey.100'
      borderWidth='2px'
      padding='4'
      borderRadius='lg'
      width='100%'
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems='stretch'
    >
      {todos.map((todo) => {
        return (
          <TodoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        );
      })}
    </VStack>
  );
};
