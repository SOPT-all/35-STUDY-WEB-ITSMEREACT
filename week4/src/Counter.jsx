import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Before setCount:", count); // 기존 상태 출력
    setCount(count + 1);
    console.log("After setCount:", count); // 여전히 기존 상태 출력
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
