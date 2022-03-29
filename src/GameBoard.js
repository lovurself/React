import React from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';

function GameBoard({ secretWord }) {
  return (
    <div>
        <LetterGrid 
            secretWord={secretWord}
            guessedLetters={['a','r']}
        />
        <ButtonGrid />
    </div>
  )
};

export default GameBoard;