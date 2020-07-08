import React from "react";
import "./style_todo.css";
import MainLists from "./components/MainLists";
import { useState } from "react";
import WrapperTodoList from "./WrapperTodoList";
import AddOneList from "./components/AddOneList";

function ToDo() {
  const [todoLists, setTodoLists] = useState([
    {
      id: 5,
      mainTitle: "Список №1 ",
      pageOfItem: [
        {
          id: 1,
          completed: true,
          title: "добратись сюди і вивести у список",
        },
        {
          id: 2,
          completed: false,
          title: "Зрозуміти як задавати кожному обєкту ключ",
        },
        {
          id: 3,
          completed: false,
          title: "Надати різні стани до різних списків",
        },
      ],
    },
    {
      id: 6,
      mainTitle: "Справи на тиждень",
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
    { id: 7, mainTitle: "Домашні справи", pageOfItem: [] },
  ]);

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
          // vkladenist: [
          //   {
          //     title,
          //     id: Date.now(),
          //     completed: false,
          //   },
          // ],
        },
      ])
    );
    setHide(false);
  }

  // let sendName = todoLists[0].mainTitle;

  return (
    <div className="mainbox">
      <div className="lists_left_side">
        <i
          className="fas fa-plus-circle PlusLists"
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
          />
        ) : (
          <p className="DoYouHaveAnyPlans">
            Click <i className="fas fa-arrow-up"></i> here
            {/* You are a happy man because you don't have any plans{" "} */}
            {/* <i className="far fa-thumbs-up"></i> */}
          </p>
        )}
      </div>
      {/* <WrapperTodoList sendTodos={todoLists} /> */}
      {todoLists.length ? (
        <WrapperTodoList sendTodos={todoLists} />
      ) : (
        // <WrapperTodoList />
        <p className="SurpriseYourself">
          {" "}
          Surprise yourself, create your to-do list!
        </p>
      )}
    </div>
  );
}

export default ToDo;
