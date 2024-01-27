import React from "react";

export default function Form() {
  return (
    <>
      <form className="form-split-bill">
        <h2>Split a bill with X</h2>
        <label>bill value</label>
        <input type="text" />
        <label>Your expense</label>
        <input type="text" />
        <label>X's expense</label>
        <input type="text" disabled />
        <label htmlFor="">Who is paying the bill?</label>
        <select name="" id="">
          <option value="you">You</option>
          <option value="x">X</option>
        </select>
      </form>
    </>
  );
}
