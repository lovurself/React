import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonStyle=styled.button`
  background-color: #999;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  margin: 2.5px;
  outline: none;
  border: none;
  box-shadow: 1.5px 1.5px 0 rgba(0, 0, 0, 0.5);
  transition: all .3s;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }

  &:active {
    background-color: #555;
    box-shadow: none;
  }

  &.guessed {
    display: none;
  }
`;

function Button({ value, onClick }) {
  const [isClicked, setIsClicked] = useState(false);
  
  let className = '';
  
  if (isClicked) {
    className += 'guessed';
  }
  
  const clickHandler = () => {
    setIsClicked(true);
    onClick(value);
  }

  return (
    <ButtonStyle
      className={className}
      onClick={clickHandler}
    >
      {value}
    </ButtonStyle>
  )
};

export default Button;