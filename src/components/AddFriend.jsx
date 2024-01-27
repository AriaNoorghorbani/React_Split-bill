import React, { useRef } from "react";

export default function AddFriend({ onAddToggleFriend, onAddFriend }) {
  const nameRef = useRef();

  function handleCloseForm() {
    onAddToggleFriend();
  }

  function handleAddFriend(event) {
    event.preventDefault();
    onAddFriend(nameRef.current.value);
  }

  return (
    <>
      <div>
        <form className="form-add-friend">
          <label>Friend Name</label>
          <input type="text" ref={nameRef} />
          <label htmlFor="">Image URL</label>
          <input type="text" />
          <button className="button" onClick={handleAddFriend}>
            Add
          </button>
        </form>
        <button className="button" onClick={handleCloseForm}>
          Close
        </button>
      </div>
    </>
  );
}
