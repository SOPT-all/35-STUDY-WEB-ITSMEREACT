import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);

  console.log("랜더링");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={handleCountUpdate}>State 올려</button>
      <button onClick={handleCountRef}>Ref 올려</button>
    </div>
  );
}

export default App;
