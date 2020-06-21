import React, { useState } from "react";

function AddOneList({ VisibilitySwitch, onCreateList }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreateList(value);
      setValue("");
    }
  }

  return (
    <form style={{ marginBottom: `1rem` }} onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">
        {/* onClick={VisibilitySwitch} */}
        Add
      </button>{" "}
    </form>
  );
}

export default AddOneList;
