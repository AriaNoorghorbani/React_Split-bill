import React from "react";

export default function FriendList({ friendList }) {
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
      <button className="button">Add Friend</button>
    </div>
  );
}
