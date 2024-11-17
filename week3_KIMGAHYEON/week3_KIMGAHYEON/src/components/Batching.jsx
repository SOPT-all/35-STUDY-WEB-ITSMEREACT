import React, { useState, useEffect } from 'react';

function Batching() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [renderCount, setRenderCount] = useState(0);

  const handleClick = () => {
    console.log('Before updates:', count, name);

    setCount(count + 1);
    setName('GaHyeon');

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

export default Batching;
