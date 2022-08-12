import React from "react";
import Button from "../Button/Button";

class TodoList extends React.Component {
  render() {
    return this.props.todos.map((todo) => {
      if (todo.status === this.props.itemsStatusToShow) {
        return (
          <li key={todo.id}>
            {todo.name}
            <Button
              onClick={() => this.props.deleteTodo(todo.id)}
              style={{ marginLeft: "15px" }}
              text="Delete todo"
            />
          </li>
        );
      }
    });
  }
}

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
