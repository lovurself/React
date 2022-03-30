import React, { useState } from 'react';
import styled from 'styled-components';
import GameBoard from './GameBoard';
import WordSelect from './WordSelect';

const Wrapper = styled.div`
  width: 60%;
  margin: 100px auto;
  text-align: center;
`;

function App() {
  const [secretWord, setSecretWord] = useState('');
  const wordSelected = val => setSecretWord(val);

  return (
    <Wrapper>
      <div>
        <h1>Welcome to Hangman!</h1>
        <p>Do you want to play the game?</p>
      </div>
      <WordSelect
        isShown={!secretWord}
        wordSelected={wordSelected}
      />
      <GameBoard 
        secretWord={secretWord}
        maxErrors={6}
        isShown={secretWord}
      />
    </Wrapper>
  );
}

export default App;
