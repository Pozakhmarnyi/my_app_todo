import React from "react";
import "./style_todo.css";
import MainLists from "./components/MainLists";
import { useState, useEffect } from "react";
import WrapperTodoList from "./WrapperTodoList";
import AddOneList from "./components/AddOneList";

function ToDo() {
  const [todoLists, setTodoLists] = useState([
    {
      id: 5,
      mainTitle: "My list #1 ",
      pageOfItem: [
        {
          id: 1,
          completed: true,
          title: "Make good style",
        },
        {
          id: 2,
          completed: true,
          title: "Wonderful font",
        },
        {
          id: 3,
          completed: false,
          title:
            "Коректно передавати новий список( з новою кулькістю поінтів) до головної тудушки",
        },
      ],
    },
    {
      id: 6,
      mainTitle: "Second list",
      pageOfItem: [
        {
          id: 12,
          completed: false,
          title: "Зрозуміти як задавати кожному обєкту ключ",
        },
        {
          id: 13,
          completed: false,
          title: "Надати різні стани до різних списків",
        },
      ],
    },
    { id: 7, mainTitle: "2", pageOfItem: [] },
  ]);

  // // Add to local storage
  // useEffect(() => {
  //   let row = localStorage.getItem("todoLists") || [];
  //   setTodoLists(JSON.parse(row));
  // });

  // useEffect(() => {
  //   localStorage.setItem("todoLists", JSON.stringify(todoLists));
  //   console.log("Hello ! I use - useEffect");
  // }, [todoLists]);

  // // ==================================

  const [visibleAddList, setHide] = useState(false);

  function removeOneMainList(id) {
    setTodoLists(todoLists.filter((oneOfList) => oneOfList.id !== id));
  }

  function addTodoList(mainTitle) {
    setTodoLists(
      todoLists.concat([
        {
          mainTitle,
          id: Date.now(),
          pageOfItem: [],
        },
      ])
    );
    setHide(false);
  }

  const [ind, setInd] = useState(0);

  function getIndex(index) {
    setInd(index);
  }

  function getNewOneList(getTodos) {
    const clonedLists = [...todoLists];
    clonedLists[ind].pageOfItem = getTodos;
    setTodoLists(clonedLists);
  }

  return (
    <div className="mainbox">
      <div className="lists_left_side">
        <i
          className="fas fa-plus-circle lists_left_side__PlusLists"
          onClick={() => setHide(true)}
        ></i>

        {visibleAddList && (
          <>
            <AddOneList onCreateList={addTodoList} />
          </>
        )}

        {todoLists.length ? (
          <MainLists
            todoLists={todoLists}
            removeOneMainList={removeOneMainList}
            getIndex={getIndex}
          />
        ) : (
          <p className="lists_left_side__Click_here">
            Click <i className="fas fa-arrow-up"></i> here
          </p>
        )}
      </div>

      {todoLists.length ? (
        <WrapperTodoList
          sendTodos={todoLists}
          ind={ind}
          getNewOneList={getNewOneList}
        />
      ) : (
        <p className="SurpriseYourself">
          {" "}
          Surprise yourself, create your to-do list!
        </p>
      )}
    </div>
  );
}

export default ToDo;
