import React, { useState, useEffect, useRef } from "react";
import Input from "./components/Input/Input";
import "./App.css";
import Form from "./components/form/Form";
import TodoList from "./components/todoList/TodoList";
import Button from "./components/Button/Button";
import Notification from "./components/Notification/Notification";

const initialTodos = [
  { name: "Learn React", id: "23189", status: "WIP" },
  { name: "Add todo", id: "123123", status: "expired" },
  { name: "Play football", id: "nzkjxvnaf", status: "expired" },
  { name: "Make hw", id: "zxzvxmvzx", status: "WIP" },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState("");
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const titleRef = useRef(null);

  const handleInputChanges = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos((prevState) => [
      ...prevState,
      { name: inputValue, id: new Date(), status: "WIP" },
    ]);
    setInputValue("");
    setIsShowPopUp(true);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  useEffect(() => {
    console.log(todos);
    return () => {};
  }, [todos]);
  //  [] - componentDidMount(){}
  //  [value] - componentDidUpdate(){}
  //  return () => {} | componentWillUnMount(){}
  return (
    <Form>
      <div className="App">
        <header ref={titleRef} className="App-header">
          <h3>Todo app</h3>
          <Input value={inputValue} handleInputChanges={handleInputChanges} />
          <Button
            style={{ marginTop: "10px" }}
            text="Add todo"
            onClick={handleAddTodo}
          />
          <TodoList
            deleteTodo={handleDeleteTodo}
            todos={todos}
            itemsStatusToShow="WIP"
          />
          <Notification
            isShowPopUp={isShowPopUp}
            setIsShowPopUp={setIsShowPopUp}
          />
        </header>
      </div>
    </Form>
  );
};

export default App;
