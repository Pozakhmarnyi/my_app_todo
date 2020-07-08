import React from "react";

import ToDoList from "./components/ToDoList";
import Context from "./context";
import AddTodo from "./components/AddTodo";

function WrapperTodoList({ sendTodos }) {
  // console.log(sendTodos[0].vkladenist);

  let getTodos = [
    {
      id: 15,
      completed: true,
      title: "You have created your first list!",
    },
  ];

  // Здається так не працює
  if (sendTodos[0].pageOfItem !== undefined) {
    getTodos = sendTodos[0].pageOfItem;
  }

  let pageName = sendTodos[0].mainTitle;

  const [todos, setTodos] = React.useState(getTodos);

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
    // метод  filter --> на кожній інтерації получаємо об"єкт todo
    // а далі порівнюю todo.id == !id -- \це той що отримуємо\ не такий самий
    // тоді залишаємо елемент в масиві

    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // .concat об"єднує масиви \ і все що в них \ в один новий масив
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
  }

  return (
    // <Context.Provider value={{ КЛЮЧ : ЗНачення  }}>
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>{pageName}</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default WrapperTodoList;
