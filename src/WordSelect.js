import React, { useState } from 'react';
import styled from 'styled-components';

const WordSelectBlock = styled.div`
  input {
      height: 25px;
      outline: none;
      border: 1px solid #999;
      border-radius: 10px;
      padding-left: 5px;
      margin: 10px 5px 0 0;
      box-sizing: border-box;
  }

  button {
      outline: none;
      border: 1px solid #999;
      border-radius: 10px;
      padding: 3px;
      cursor: pointer;
  }

  &.hidden {
      display: none;
  }  
`;

function WordSelect({ isShown, wordSelected }) {
  const [secretWord, setSecretWord] = useState('');
  const onChange = e => setSecretWord(e.target.value);
  const onClick = e => wordSelected(secretWord);

  return (
    <WordSelectBlock className={isShown ? '' : 'hidden'}>
        <input
            type="text"
            onChange={onChange}
        />
        <button onClick={onClick}>Set Word</button>
    </WordSelectBlock>
  )
};

export default WordSelect;