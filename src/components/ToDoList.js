import React from "react";

import ToDoItem from "./ToDoItem";

const slyles = {
  ul: { listStyle: "none", margin: 0, padding: 0 },
};

function ToDoList(props) {
  return (
    <ul style={slyles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <ToDoItem
            todo={todo}
            key={todo.id}
            id={todo.id}
            title={todo.title}
            index={index}
            onChange={props.onToggle}
            toDoList={props.todos}
          />
        );
      })}
    </ul>
  );
}

// Валідація (служить, як доказ, що те що потрібно нам, являється сами тим...  ) масива todos - (а точніше, об"єкта в масиві  ) щоб не було в подальшому помилок
// isRequired = означає нам необідний для роботи ДАНОГО компонента

export default ToDoList;
