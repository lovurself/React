import React from 'react';
import styled from 'styled-components';
import Button from './Button'

const ButtonsBlock = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
    button {
        background-color: #999;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 24px;
        margin: 2.5px;
        outline: none;
        border: none;
        box-shadow: 1.5px 1.5px 0 rgba(0,0,0,0.5);
        transition: all .3s;
        cursor: pointer;

        &:hover {
            background-color: #ccc;
        }

        &:active {
            background-color: #555;
            box-shadow: none;
        }
    }
`;

function ButtonGrid() {
  let letters = [
      'A','B','C','D','E','F','G','H',
      'I','J','K','L','M','N','O','P',
      'Q','R','S','T','U','V','W','X',
      'Y','Z'
  ];

  let buttons = letters.map((letter, index) => (
    <Button 
        value={letter}
        key={index}
    />
  ));
  return (
    <ButtonsBlock>
        {buttons}
    </ButtonsBlock>
  )
};

export default ButtonGrid;