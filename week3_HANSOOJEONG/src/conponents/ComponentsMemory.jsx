import React, { useState } from 'react';

const ComponentsMemory = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>카운트 증가</button>
      <p>현재 카운트: {counter}</p>
    </div>
  );
};

export default ComponentsMemory;
