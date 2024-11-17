import React, { useState } from 'react';

const RenderCommit = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  console.log('렌더링 후 DOM에 반영 전');

  return (
    <div>
      <button onClick={handleIncrement}>증가</button>
      <p>현재 값: {value}</p>
    </div>
  );
};

export default RenderCommit;
