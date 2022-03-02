import React from 'react';

// onChange함수(input값이 바뀔 때 호출하는 이벤트 처리 함수), onCreate함수(버튼을 눌렀을 때 새로운 항목을 등록해주는 함수)
// 필요한 값들을 props로 받아와서 사용
// 내부에서 상태관리는 따로 하지 않을 경우
function CreateUser({ username, email, onChange, onCreate }) {
    return (
        <div>
            <input 
                name='username'
                placeholder='계정명'
                onChange={onChange}
                value={username}
            />
            <input
                name='email'
                placeholder='이메일'
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate} >등록</button>
        </div>
    );
}

export default CreateUser;