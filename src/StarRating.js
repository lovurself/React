import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

// 자동으로 별을 만들어내는 컴포넌트
const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
);

// 원하는 길이의 배열 만들기
const createArray = length => [...Array(length)];


function StarRating({ totalStars = 5 }) {
  // 선택된 별점을 저장하는 useState
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n,i) => (
        <Star
          key={i}
          selected = {selectedStars > i}
          onSelect = {() => i >= 0 ? setSelectedStars(i + 1) : setSelectedStars(i)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} Stars
      </p>
    </>
  );
};

export default StarRating;