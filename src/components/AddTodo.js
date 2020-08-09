import React, { useState } from "react";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

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
