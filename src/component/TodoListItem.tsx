import React from "react";
import "./TodoListItem.css";

interface todoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FunctionComponent<todoListItemProps> = ({
  todo,
  toggleTodo
}) => {
  return (
    <div>
      <label className={todo.complete ? "complete" : undefined}>
        <input type='checkbox' checked={todo.complete} onChange={() => toggleTodo(todo)}/>
        {todo.text}
      </label>
    </div>
  );
};
