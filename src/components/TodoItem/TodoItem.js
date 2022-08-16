import React, { useEffect } from "react";
import Button from "../Button/Button";

const TodoItem = ({ id, name, deleteTodo }) => {
  return (
    <li key={id}>
      {name}
      <Button
        onClick={() => deleteTodo(id)}
        style={{ marginLeft: "15px" }}
        text="Delete todo"
      />
    </li>
  );
};

export default TodoItem;
