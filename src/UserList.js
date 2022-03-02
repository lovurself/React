import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
    </div>
  );
}
// user를 가져와야 하는데 user은 UserList에 return값에서 가져옴

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
    // 각 객체마다 고유값을 가지고 않을 경우
    // (user, index) => (<User user={user} key={index} />)
    // 웬만하면 key에 index 사용을 자제
  );
}

export default UserList;
