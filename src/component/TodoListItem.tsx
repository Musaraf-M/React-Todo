import React from "react";
import "./TodoListItem.css";

interface todoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FunctionComponent<todoListItemProps> = ({
  todo,
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input type='checkbox' checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};
