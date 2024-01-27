export default function FriendList({
  friendList,
  onAddFriend,
  buttonState,
  onSelectFriend,
}) {
  function handleToggle() {
    onAddFriend();
  }

  function handleSelectFriend(friendId) {
    onSelectFriend(friendId);
  }

  return (
    <div className="sidebar">
      <ul>
        {friendList.map((friend) => {
          return (
            <li key={friend.id}>
              <img src={friend.image} />
              <h3>{friend.name}</h3>
              {friend.balance > 0 && (
                <p className="green">
                  {friend.name} owes you ${friend.balance}.
                </p>
              )}
              {friend.balance < 0 && (
                <p className="red">
                  You owe {friend.name} ${friend.balance}
                </p>
              )}
              {friend.balance === 0 && <p>{friend.name} and you are even</p>}
              <button
                className="button"
                onClick={() => handleSelectFriend(friend.id)}
              >
                Select
              </button>
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
