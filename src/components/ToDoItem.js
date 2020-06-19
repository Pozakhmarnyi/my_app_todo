import React, { useContext } from "react";
import { useState } from "react";
import Context from "../context";
// import ToDoList from "./ToDoList";

//  function ToDoItem({ todo, index,  onChange  ==    довільна назва ф-ції})
// подію в батьківський елемент  передаю так в метод-> <input type="checkbox"  ПОДІЯ onChange={() => МЕТОД onChange(todo.id)} />

function ToDoItem({ todo, index, onChange, toDoList }) {
  const { removeTodo } = useContext(Context);

  const [editor, setEditor] = useState(false);
  const [text, setText] = useState(todo.title);

  let styleDone = "";
  if (todo.completed) {
    styleDone += "done";
  }

  function actionEnableEditor() {
    setEditor(true);
  }

  function actionDisableEditor() {
    toDoList.map((element) => {
      if (element.id === todo.id) element.title = text;
    });
    console.log(toDoList);
    // console.log(text);

    setEditor(false);
  }
  function actionSaveEditor(event) {
    setText(event.target.value);
  }

  return (
    <>
      {!editor && (
        <>
          <li className="ToDoItem">
            <span className={styleDone}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onChange(todo.id)}
              />
              <strong> {index + 1} </strong>
              {todo.title}
            </span>
            <span className="space_for_button">
              <button
                className="edit_title"
                type="edit"
                onClick={actionEnableEditor}
              >
                <i className="fas fa-pen"></i>
              </button>
              <button onClick={() => removeTodo(todo.id)}>&times;</button>
            </span>
          </li>
        </>
      )}

      {editor && (
        <li className="ToDoItem">
          <span className={styleDone}>
            <input
              type="text"
              checked={todo.completed}
              value={text}
              onChange={actionSaveEditor}
            />
          </span>
          <span className="space_for_button">
            <button
              className="edit_title"
              type="edit"
              onClick={actionDisableEditor}
            >
              <i className="fas fa-pen"></i>
            </button>
            <button onClick={() => removeTodo(todo.id)}>&times;</button>
          </span>
        </li>
      )}
    </>
  );
}

export default ToDoItem;
