import React from "react";
import Input from "./components/Input/Input";
import "./App.css";
import Form from "./components/form/Form";
import TodoList from "./components/todoList/TodoList";
import Button from "./components/Button/Button";
class App extends React.Component {
  state = {
    todos: [
      { name: "Learn React", id: "23189", status: "WIP" },
      { name: "Add todo", id: "123123", status: "expired" },
      { name: "Play football", id: "nzkjxvnaf", status: "expired" },
      { name: "Make hw", id: "zxzvxmvzx", status: "WIP" },
    ],
    inputValue: "",
  };
  handleInputChanges = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTodo = () => {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          { name: prevState.inputValue, id: new Date() },
        ],
        inputValue: "",
      };
    });
  };

  handleDeleteTodo = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    return (
      <Form>
        <div className="App">
          <header ref={this.titleRef} className="App-header">
            <h3>Todo app</h3>
            <Input
              value={this.state.inputValue}
              handleInputChanges={this.handleInputChanges}
            />
            <Button
              style={{ marginTop: "10px" }}
              text="Add todo"
              onClick={this.handleAddTodo}
            />
            <TodoList
              deleteTodo={this.handleDeleteTodo}
              todos={this.state.todos}
              itemsStatusToShow="expired"
            />
          </header>
        </div>
      </Form>
    );
  }
}

export default App;
