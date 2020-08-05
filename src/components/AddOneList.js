import React, { useState } from "react";

function AddOneList({ onCreateList }) {
  const [value, setValue] = useState("");

  let styleInput = "inputAddList";

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreateList(value);
      setValue("");
    }
  }

  return (
    <form className="wrapper__form noPad" onSubmit={submitHandler}>
      <input
        className="wrapper__input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button className="wrapper__button" type="submit">
        Add
      </button>
    </form>
  );
}

export default AddOneList;
