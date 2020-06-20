import React, { useContext } from "react";
import { useState } from "react";
import Context from "../context";
import ToDoList from "./ToDoList";

//  function ToDoItem({ todo, index,  onChange  ==    довільна назва ф-ції})
// подію в батьківський елемент  передаю так в метод-> <input type="checkbox"  ПОДІЯ onChange={() => МЕТОД onChange(todo.id)} />

function ToDoItem({ todo, index, onChange, toDoList }) {
  const { removeTodo } = useContext(Context);

  const [editor, setEditor] = useState(false);
  const [text, setText] = useState(todo.title);
  const [editID, setEditID] = useState(null);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }

  function actionEnableEditor() {
    setEditor(true);
  }

  function actionDisableEditor() {
    let newList = [];
    newList = toDoList.map((element) => {
      if (element.id === todo.id) element.title = text;
    });
    console.log(toDoList);
    // console.log(text);
    setEditID(todo.id);
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
          {/* оскільки className має бути сткорою 
  щоб треба перевести масив до СТРОКИ використовую метод join
   join - об"єднує кожен ЕЛЕМЕНТ масиву через " " */}
          <span className={classes.join(" ")}>
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
