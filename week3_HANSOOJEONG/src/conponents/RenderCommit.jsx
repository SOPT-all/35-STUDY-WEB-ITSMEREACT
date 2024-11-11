import React, { useState } from 'react';

const RenderCommit = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1); // 상태 변경 후 다시 렌더링
  };

  console.log('렌더링 후 DOM에 반영 전'); // 렌더링과 커밋의 차이

  return (
    <div>
      <button onClick={handleIncrement}>증가</button>
      <p>현재 값: {value}</p>
    </div>
  );
};

export default RenderCommit;
