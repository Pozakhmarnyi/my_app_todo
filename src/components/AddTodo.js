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

  return (
    <form style={{ marginBottom: `1rem` }} onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">Add todo</button>{" "}
    </form>
  );
}

export default AddTodo;
