import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App() {
  // useState를 이용해서 새로운 항목을 넣을 수 있는 onChange 함수를 생성
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  // 배열 불변성을 유지하면서 새로운 항목을 추가하는 onCreate 함수를 생성
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "jully",
      email: "jully@example.com"
    },
    {
      id: 2,
      username: "poter",
      email: "poter@example.com"
    },
    {
      id: 3,
      username: "json",
      email: "json@example.com"
    }
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([...users, user]);
    // setUsers(users.concat(user)); 으로도 가능
    // push, splice sort 함수는 사용불가!

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  };
  // nextId.current 값에 1씩 더해서 변경해주는 것
  // useRef를 사용해서 값이 바뀌어도 컴포넌트는 리렌더링되지 않게
  // 값은 그대로 계속 기억됨

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
