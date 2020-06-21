import React, { useState } from "react";

function AddOneList({ VisibilitySwitch }) {
  function submitHandler(event) {
    // щоб сторінка не перегружалась
    event.preventDefault();
  }

  return (
    <form style={{ marginBottom: `1rem` }} onSubmit={submitHandler}>
      <input tipe="text" />
      <button type="submit" onClick={VisibilitySwitch}>
        Add
      </button>{" "}
    </form>
  );
}

export default AddOneList;
