import React, { useContext } from "react";

import Context from "../context";

//  function ToDoItem({ todo, index,  onChange  ==    довільна назва ф-ції})
// подію в батьківський елемент  передаю так в метод-> <input type="checkbox"  ПОДІЯ onChange={() => МЕТОД onChange(todo.id)} />

function ToDoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);

  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="ToDoItem">
      {/* оскільки className має бути сткорою 
      щоб треба перевести масив до СТРОКИ використовую метод join
       join - об"єднує кожен ЕЛЕМЕНТ масиву через " " */}
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong> {index + 1} </strong>
        {todo.title}
      </span>
      <span className="space_for_button">
        <button className="edit_title" onClick={() => removeTodo(todo.id)}>
          <i className="fas fa-pen"></i>
        </button>
        <button onClick={() => removeTodo(todo.id)}>&times;</button>
      </span>
    </li>
  );
}

export default ToDoItem;
