import React from "react";

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  return (
    <div>
      <b style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer'
        }}
        onClick={() => onToggle(id)}
      >
          {username}
      </b>
      &nbsp;
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
  // 특정 id값을 가진 객체를 삭제하겠다.
  // onClick={onRemove(id)} 라고 적으면 컴포넌트가 렌더링될 때 onRemove가 호출되는 시점에 삭제가 됨
  // 함수를 호출하는 함수를 만들어서 적용
}
// user를 가져와야 하는데 user은 UserList에 return값에서 가져옴

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
            user={user}
            key={user.id} 
            onRemove={onRemove}
            onToggle={onToggle}
        />
      ))}
    </div>
    // 각 객체마다 고유값을 가지고 않을 경우
    // (user, index) => (<User user={user} key={index} />)
    // 웬만하면 key에 index 사용을 자제
  );
}

export default UserList;
