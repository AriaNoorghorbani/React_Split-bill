import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

import React, { useState } from "react";
import Form from "./components/Form";
import AddFriend from "./components/AddFriend";

export default function App() {
  const [toggleAddFriend, setToggleAddFriend] = useState();
  const [friendList, setFriendList] = useState(initialFriends);

  function onToggleAddFriend() {
    setToggleAddFriend((prevState) => !prevState);
  }

  function generateRandomNum() {
    const min = 100000;
    const max = 999999;
    const num = Math.floor(Math.random(max - min + 1) * min);
    return num;
  }

  function addFriend(name) {
    const newFriendId = Math.random();
    const newFriendImage = `https://i.pravatar.cc/48?u=${generateRandomNum()}`;
    const newFriend = {
      id: newFriendId,
      name,
      image: newFriendImage,
      balance: 0,
    };
    setFriendList((prevState) => [...prevState, newFriend]);
    console.log(friendList);
  }

  return (
    <div className="app">
      <FriendList
        friendList={friendList}
        onAddFriend={onToggleAddFriend}
        buttonState={toggleAddFriend}
      />
      <Form />
      {toggleAddFriend && (
        <AddFriend
          onAddToggleFriend={onToggleAddFriend}
          onAddFriend={addFriend}
        />
      )}
    </div>
  );
}
