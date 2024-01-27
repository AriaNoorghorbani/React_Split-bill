import React, { useState } from "react";

export default function Form({ selectedFriend, onUpdateList }) {
  const [bill, setBill] = useState(0);
  const [youExpense, setYouExpense] = useState(0);
  const [whoPay, setWhoPay] = useState("you");
  let antonyExpense = 0;

  if (
    !selectedFriend ||
    !Array.isArray(selectedFriend) ||
    selectedFriend.length === 0
  ) {
    return <p>No friend selected</p>;
  }

  function handleChangeBill(event) {
    setBill(() => +event.target.value);
  }

  function handleChangeYouExpense(event) {
    setYouExpense(() => +event.target.value);
  }

  function handleWhoPay(event) {
    setWhoPay(() => event.target.value);
  }

  function handleSplit(event) {
    console.log(whoPay);
    event.preventDefault();
    let balance = 0;
    if (whoPay !== "you") {
      balance = -(bill - antonyExpense);
    } else if (whoPay === "you") {
      balance = bill - antonyExpense;
    }

    onUpdateList(selectedFriend[0].id, balance);
    setBill(0);
    setYouExpense(0);
  }

  antonyExpense = bill - youExpense;

  return (
    <>
      <form className="form-split-bill">
        <h2>Split a bill with {selectedFriend[0].name}</h2>
        <label>bill value</label>
        <input type="text" value={bill} onChange={handleChangeBill} />
        <label>Your expense</label>
        <input
          type="text"
          value={youExpense}
          onChange={handleChangeYouExpense}
        />
        <label>X's expense</label>
        <input type="text" disabled value={antonyExpense} />
        <label htmlFor="">Who is paying the bill?</label>
        <select value={whoPay} onChange={handleWhoPay}>
          <option value="you">You</option>
          <option value={selectedFriend[0].name}>
            {selectedFriend[0].name}
          </option>
        </select>
        <button className="button" onClick={handleSplit}>
          Split Bill
        </button>
      </form>
    </>
  );
}
