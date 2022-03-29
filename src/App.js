import React from 'react';
import styled from 'styled-components';
import GameBoard from './GameBoard';

const Wrapper = styled.div`
  width: 60%;
  margin: 100px auto;
  text-align: center;
`;

function App() {
  return (
    <Wrapper>
      <div>
        <h1>Welcome to Hangman!</h1>
        <p>Do you want to play the game?</p>
      </div>
      <GameBoard secretWord='React'/>
    </Wrapper>
  );
}

export default App;
