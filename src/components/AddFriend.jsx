import React from "react";

export default function AddFriend() {
  return (
    <>
      <div>
        <form className="form-add-friend">
          <label>Friend Name</label>
          <input type="text" />
          <label htmlFor="">Image URL</label>
          <input type="text" />
          <button className="button">Add</button>
        </form>
        <button className="button">Close</button>
      </div>
    </>
  );
}
