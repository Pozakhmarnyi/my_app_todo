import React from "react";

function MainLists({ todoLists }) {
  console.log(todoLists);

  const oneLists = todoLists.map((oneOfList) => (
    <li key={oneOfList.id}>
      {oneOfList.mainTitle}
      <button>
        <i className="fas fa-trash-alt"></i>
      </button>
    </li>
  ));

  return (
    <>
      <ul className="OneList">{oneLists} </ul>
    </>
  );
}

export default MainLists;
