import React, { useState } from 'react';
import styled from 'styled-components';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';

const GameBoardBlock = styled.div`
  &.hidden {
    display: none;
  }
`;

function GameBoard({ secretWord, maxErrors, isShown }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);

  const letterGuessedHandler = (letter) => {
    let val = letter.toLowerCase();
    setGuessedLetters(prev => [...prev, val]);

    if (secretWord.toLowerCase().indexOf(val) === -1) {
      setErrorCount(errorCount + 1);
    }
  }
  return (
    <GameBoardBlock className={isShown ? '' : 'hidden'}>
        <p>남은 횟수 : {maxErrors - errorCount}</p>
        <LetterGrid 
            secretWord={secretWord}
            guessedLetters={guessedLetters}
        />
        <ButtonGrid 
          letterGuessed={letterGuessedHandler} 
          isShown={errorCount < maxErrors}
        />
    </GameBoardBlock>
  );
}

export default GameBoard;