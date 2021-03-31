import { HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import React from "react";

import { FaTrash } from 'react-icons/fa';

interface todoListItemProps {
  todo: Todo;

}

export const TodoListItem: React.FunctionComponent<todoListItemProps> = ({
  todo,
  
}) => {
  return (
    <HStack>
          <Text>{todo.text}</Text>
          <Spacer />
          <IconButton aria-label="Delete" icon={<FaTrash />} isRound={true} />
    </HStack>
  );
};
