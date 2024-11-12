import { useState } from 'react';

function App() {
  // count라는 state 변수와 이를 업데이트하는 setCount 함수 생성
  const [count, setCount] = useState(0);

  // 숫자를 증가시키는 함수
  const increaseCount = () => {
    setCount(count + 1);
  };

  // 숫자를 감소시키는 함수
  const decreaseCount = () => {
    setCount(count - 1);
  };

  // 숫자를 초기화하는 함수
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      flexDirection: 'column'
    }}>
      <h1>Counter</h1>
      <p>현재 숫자: {count}</p>
      <div style={{
        display: 'flex', 
        gap: '10px' 
      }}>
        <button onClick={increaseCount}>증가</button>
        <button onClick={decreaseCount}>감소</button>
        <button onClick={resetCount}>초기화</button>
      </div>
    </div>
  );
}


export default App;
