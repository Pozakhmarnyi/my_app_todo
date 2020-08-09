import React from "react";

function MainLists({ todoLists, removeOneMainList, setIndex }) {
  const oneList = todoLists.map((oneOfList, index) => (
    <li className="lists_left_side__OneMainList" key={oneOfList.id}>
      <div onClick={() => setIndex(index)}>{oneOfList.mainTitle}</div>

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
