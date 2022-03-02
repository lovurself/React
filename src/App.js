import React, { useRef, useState, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}
// 리렌더링 될때마다 호출됨 (예:input에 뭔가를 입력할 때마다 호출되는 것)
// useMemo를 사용하면 input에 뭔가를 입력해도 호출되지 않음

function App() {
  // useState를 이용해서 새로운 항목을 넣을 수 있는 onChange 함수를 생성
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);
  // useCallback를 감싸주어 inputs가 변화가 있을 때만 함수가 만들어지고
  // 변화가 없을 때는 기존의 함수를 그대로 재사용한다.


  // 배열 불변성을 유지하면서 새로운 항목을 추가하는 onCreate 함수를 생성
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "jully",
      email: "jully@example.com",
      active: true
    },
    {
      id: 2,
      username: "poter",
      email: "poter@example.com",
      active: false

    },
    {
      id: 3,
      username: "json",
      email: "json@example.com",
      active: false
    }
  ]);
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers(users => users.concat(user));
    // setUsers(users.concat(user)); 으로도 가능
    // push, splice sort 함수는 사용불가!

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  }, [username, email]);
  // nextId.current 값에 1씩 더해서 변경해주는 것
  // useRef를 사용해서 값이 바뀌어도 컴포넌트는 리렌더링되지 않게
  // 값은 그대로 계속 기억됨

  const onRemove = useCallback((id) => {
    setUsers(users => users.filter(user => user.id !== id));
    // 각 객체를 확인해서 객체의 id와 파라미터로 가져온 id가 같이 않으면 추출하여 새로운 배열에 넣겠다.
  }, []);

  const onToggle = useCallback((id) => {
    setUsers(users => users.map(
      user => user.id === id 
        ? { ...user, active: !user.active }
        : user
    ));
    // 조건이 맞는다면 active의 반대가 호출될 것
    // 배열 안에 있는 원소를 수정하기 위해서는 map 함수 사용
    // 특정 객체를 업데이트해야 할 때도 map 함수를 사용하여 새로운 배열에 기존 배열을 가져온 후 특정 값을 덮어씌우는 방식
  }, []);
  // 변경되는 항목에 따라 리렌더링되도록 useCallback 함수의 의존값을 변경해줌...

  const count = useMemo(() => countActiveUsers(users), [users]);
  // useMemo는 필요한 연산을 필요한 때만 사용할 수 있게 해줌
  // 컴포넌트 성능을 최적화할 때 유용하게 사용

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
