import React, { useState } from 'react';
{/* useState를 이용해서 바뀌는 값을 관리할 수 있다 */}

function Counter() {
    const [number, setNumber] = useState(0);
    {/* number를 만들건데 기본값은 0이고 setNumber는 number을 바꿔주는 함수 */}
    const onIncrease = () => {
        setNumber(number + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
        {/* 함수형으로 업데이트(최적화와 관련이 있다) */}
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            {/* react에서는 onIncrease()로 입력하면 함수가 호출됨, 함수를 넣어줘야지 함수를 호출하면 안된다*/}
        </div>
    );
}

export default Counter;