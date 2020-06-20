import React from "react";
import "./style_todo.css";
import MainLists from "./components/MainLists";
import { useState } from "react";
import WrapperTodoList from "./WrapperTodoList";

function ToDo() {
  const [todoLists, setTodoLists] = useState([
    { id: 5, mainTitle: "Make ToDo app" },
    { id: 6, mainTitle: "Справи на тиждень" },
    { id: 7, mainTitle: "Домашні справи" },
  ]);

  function removeOneMainList(id) {
    setTodoLists(todoLists.filter((oneOfList) => oneOfList.id !== id));
  }
  return (
    <div className="mainbox">
      <div className="lists_left_side">
        <MainLists
          todoLists={todoLists}
          removeOneMainList={removeOneMainList}
        />
      </div>

      <WrapperTodoList />
    </div>
  );
}

export default ToDo;
