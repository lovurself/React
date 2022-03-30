import React from 'react';
import styled from 'styled-components';
import Button from './Button'

const ButtonsBlock = styled.div`
    width: 38%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    &.hidden {
        display: none;
    }
`;

function ButtonGrid({ letterGuessed, isShown }) {
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
        onClick={letterGuessed}
    />
  ));

  let className = '';
  if (!isShown) {
    className += 'hidden'
  }

  return (
    <ButtonsBlock className={className}>
        {buttons}
    </ButtonsBlock>
  )
};

export default ButtonGrid;