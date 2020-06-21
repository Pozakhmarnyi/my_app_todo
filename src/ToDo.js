import React from "react";
import "./style_todo.css";
import MainLists from "./components/MainLists";
import { useState } from "react";
import WrapperTodoList from "./WrapperTodoList";
import AddOneList from "./components/AddOneList";

function ToDo() {
  const [todoLists, setTodoLists] = useState([
    { id: 5, mainTitle: "Make ToDo app " },
    { id: 6, mainTitle: "Справи на тиждень" },
    { id: 7, mainTitle: "Домашні справи" },
  ]);

  const [visibleAddList, setHide] = useState(false);

  function VisibilitySwitch() {
    setHide(false);
  }

  function removeOneMainList(id) {
    setTodoLists(todoLists.filter((oneOfList) => oneOfList.id !== id));
  }

  function addTodoList(mainTitle) {
    setTodoLists(
      todoLists.concat([
        {
          mainTitle,
          id: Date.now(),
        },
      ])
    );
  }

  return (
    <div className="mainbox">
      <div className="lists_left_side">
        <i
          className="fas fa-plus-circle PlusLists"
          onClick={() => setHide(true)}
        ></i>
        {!visibleAddList && <></>}
        {visibleAddList && (
          <>
            <AddOneList
              VisibilitySwitch={VisibilitySwitch}
              onCreateList={addTodoList}
            />
          </>
        )}

        {todoLists.length ? (
          <MainLists
            todoLists={todoLists}
            removeOneMainList={removeOneMainList}
          />
        ) : (
          <p>
            You are a happy man because you don't have any plans{" "}
            <i className="far fa-thumbs-up"></i>
          </p>
        )}
      </div>

      <WrapperTodoList />
    </div>
  );
}

export default ToDo;
