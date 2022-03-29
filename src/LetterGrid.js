import React from 'react';
import styled from 'styled-components';
import Letter from './Letter'

const WordBlock = styled.div`
    width: 60%;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        border: 1px solid gray;
        width: 34px;
        height: 34px;
        text-align: center;
        line-height: 34px;
        font-size: 24px;
        margin: 0 2.5px;
    }
`;

function LetterGrid({ secretWord, guessedLetters }) {
  // secretWord를 하나씩 떼어주는 작업
  const letters = secretWord
                    .split('')
                    .map((letter, index) => {
                        let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                        return (
                            <Letter
                                value={letter}
                                isShown={isShown}
                                key={index}
                            />
                        )
                    });
    return (
        <WordBlock>
            {letters}
        </WordBlock>
    )
};

export default LetterGrid;