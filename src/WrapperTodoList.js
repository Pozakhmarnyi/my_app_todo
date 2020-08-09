import React, { useState, useEffect } from "react";
import ToDoList from "./components/ToDoList";
import Context from "./context";
import AddTodo from "./components/AddTodo";

function WrapperTodoList({ sendTodos, ind, getNewOneList }) {
  let getTodos = [
    {
      id: 15,
      completed: true,
      title: "You have created your first list!",
    },
  ];

  if (sendTodos[ind].pageOfItem !== undefined) {
    getTodos = sendTodos[ind].pageOfItem;
  }

  const [todos, setTodos] = useState(getTodos);
  useEffect(() => {
    // Обновляем
    setTodos(getTodos);
  }, [ind]);

  let pageName = sendTodos[ind].mainTitle;

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
    getNewOneList(getTodos);
  }

  useEffect(() => {
    getNewOneList(todos);
  }, [todos]);

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1 className="wrapper__title">
          <span className="wrapper__title--font">{pageName} </span>{" "}
        </h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos !</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default WrapperTodoList;
