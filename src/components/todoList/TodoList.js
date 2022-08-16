import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos = [], deleteTodo, itemsStatusToShow }) => {
  return todos.map((todo) => {
    if (todo.status === itemsStatusToShow) {
      return (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          deleteTodo={deleteTodo}
        />
      );
    }
  });
};

export default TodoList;
