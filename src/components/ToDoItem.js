import React, { useContext } from "react";
import { useState } from "react";
import Context from "../context";

function ToDoItem({ todo, index, onChange, toDoList }) {
  const { removeTodo } = useContext(Context);

  const [editor, setEditor] = useState(false);
  const [text, setText] = useState(todo.title);

  let styleToDoItem = "ToDoItem ";
  if (todo.completed) {
    styleToDoItem += "done";
  }

  function actionEnableEditor() {
    setEditor(true);
  }

  function actionDisableEditor() {
    let newList = [];
    toDoList.map((element) => {
      if (element.id === todo.id) element.title = text;
      return newList;
    });

    setEditor(false);
  }
  function actionSaveEditor(event) {
    setText(event.target.value);
  }

  return (
    <>
      {!editor && (
        <>
          <li className={styleToDoItem}>
            <span>
              <input
                id={todo.id}
                type="checkbox"
                checked={todo.completed}
                onChange={() => onChange(todo.id)}
              />
              <strong> {index + 1} </strong>

              <label htmlFor={todo.id}>{todo.title}</label>
            </span>
            <span className="space_for_button">
              <button
                className="edit_title"
                type="edit"
                onClick={actionEnableEditor}
              >
                <i className="fas fa-pen"></i>
              </button>
              <button onClick={() => removeTodo(todo.id)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </li>
        </>
      )}

      {editor && (
        <li className={styleToDoItem}>
          <span>
            <input
              className="imput_editor"
              type="text"
              checked={todo.completed}
              value={text}
              onChange={actionSaveEditor}
            />
          </span>
          <span className="space_for_button">
            <button
              className="ToDoItem__edit_title"
              type="edit"
              onClick={actionDisableEditor}
            >
              <i className="fas fa-check"></i>
            </button>
            <button onClick={() => removeTodo(todo.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </span>
        </li>
      )}
    </>
  );
}

export default ToDoItem;
