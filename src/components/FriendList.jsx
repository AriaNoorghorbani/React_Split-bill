import React, { useState } from "react";

export default function FriendList({ friendList, onAddFriend, buttonState }) {
  function handleToggle() {
    onAddFriend();
  }

  return (
    <div className="sidebar">
      <ul>
        {friendList.map((friend) => {
          return (
            <li key={friend.id}>
              <img src={friend.image} />
              <h3>{friend.name}</h3>
              <p className="green">Sarah owes you.</p>
              <button className="button">Select</button>
            </li>
          );
        })}
      </ul>
      {!buttonState && (
        <button className="button" onClick={handleToggle}>
          Add Friend
        </button>
      )}
    </div>
  );
}
