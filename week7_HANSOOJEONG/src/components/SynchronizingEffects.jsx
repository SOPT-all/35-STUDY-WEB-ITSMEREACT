import { useState, useEffect } from 'react';

export default function SynchronizingEffects() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    setInterval(onTick, 1000);
  }, []);

  return(
    <>
      <h3>Effect로 동기화하기 챌린징</h3>
      <h3>{count}</h3>
    </>
  );
}
