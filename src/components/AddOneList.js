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
    <form className={styleInput} onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddOneList;
