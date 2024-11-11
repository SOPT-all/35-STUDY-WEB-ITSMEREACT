import React, { useState } from 'react';

const ComponentsMemory = () => {
  const [counter, setCounter] = useState(0); // 컴포넌트의 상태를 기억

  const increment = () => {
    setCounter(counter + 1); // 상태값을 증가시키는 함수
  };

  return (
    <div>
      <button onClick={increment}>카운트 증가</button>
      <p>현재 카운트: {counter}</p>
    </div>
  );
};

export default ComponentsMemory;
