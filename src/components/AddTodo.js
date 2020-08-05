import React, { useState } from "react";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    // щоб сторінка не перегружалась
    event.preventDefault();

    // метод .trim видаляє пробіли
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }
  // style={{ marginBottom: `1rem` }}
  return (
    <form className="wrapper__form" onSubmit={submitHandler}>
      <input
        className="wrapper__input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="wrapper__button" type="submit">
        Add todo
      </button>{" "}
    </form>
  );
}

export default AddTodo;
