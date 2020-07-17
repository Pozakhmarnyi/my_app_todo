import React from "react";

function MainLists({ todoLists, removeOneMainList, getIndex }) {
  const oneList = todoLists.map((oneOfList, index) => (
    <li
      className="lists_left_side__OneMainList"
      key={oneOfList.id}
      onClick={() => getIndex(index)}
    >
      {oneOfList.mainTitle}
      <button
        className="button"
        onClick={() => removeOneMainList(oneOfList.id)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </li>
  ));

  return (
    <>
      <ul className="lists_left_side__AllMainList">{oneList} </ul>
    </>
  );
}

export default MainLists;
