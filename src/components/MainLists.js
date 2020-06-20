import React from "react";

function MainLists({ todoLists }) {
  console.log(todoLists);

  const oneLists = todoLists.map((oneOfList) => (
    <li key={oneOfList.id}>{oneOfList.mainTitle}</li>
  ));

  return (
    <>
      <ul className="OneList">
        {oneLists}
        button for delete
      </ul>
    </>
  );
}

export default MainLists;
