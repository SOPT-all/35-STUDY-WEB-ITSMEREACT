import React, { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

function BatchingBlocked() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [renderCount, setRenderCount] = useState(0);

  const handleClick = () => {
    console.log('Before updates:', count, name);

    // 배칭을 막고 상태를 업데이트 (각각 렌더링을 강제로 발생시킴)
    flushSync(() => {
      setCount(count + 1);
    });
    flushSync(() => {
      setName('GaHyeon');
    });

    console.log('After updates:', count, name);
  };

  useEffect(() => {
    console.log('Updated:', count, name); 
  }, [count, name]); 

  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <p>Render Count: {renderCount}</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default BatchingBlocked;
