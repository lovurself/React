import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');
    {/* text의 기본값은 공백으로 설정하고 setText 함수를 설정해준다. */}

    const onChange = (e) => {
        setText(e.target.value);
    };
    {/* onChange이벤트는 요소의 값이 변경되었을 때 발생 */}
    {/* 이벤트 객체(e)는 수정 이벤트가 발생했을 때 수정된 내용이 이벤트 객체(e) 파라미터로 받아와서 사용할 수 있게 되는 것 */}

    const onReset = () => {
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={text} />
            {/* input의 값과 아래 내용의 값을 다 변경해주기 위해서 value값을 꼭 입력해주어야 함 */}
            <button onClick={onReset}>초기화</button>
            <div>
                <b>입력값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;