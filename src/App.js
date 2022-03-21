import React from 'react';
import styled from 'styled-components';
import StarRating from './StarRating';

// css
const StarRatingBlock = styled.div`
  width: 60%;
  height: 500px;
  margin: 200px auto;
  font-size: 40px;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 50px;
  }
`;

function App() {
  return (
    <StarRatingBlock>
      <h1>별점을 매겨주세요!</h1>
      <StarRating />
    </StarRatingBlock>
  );
}

export default App;
