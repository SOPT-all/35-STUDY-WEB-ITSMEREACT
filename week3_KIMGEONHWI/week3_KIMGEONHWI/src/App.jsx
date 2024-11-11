import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    e.stopPropagation();
    console.log("Div 클릭됨!");
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log("링크 클릭이 방지되었습니다!");
  };

  const incrementCount = (e) => {
    e.stopPropagation();
    setCount((prevCount) => prevCount + 1);
    console.log("카운트가 증가했습니다:", count + 1);
  };

  return (
    <div
      onClick={handleClick}
      style={{ padding: "20px", border: "1px solid black" }}
    >
      <p>이 div를 클릭해도 이벤트가 상위 요소로 전파되지 않습니다.</p>
      <a href="https://www.naver.com" onClick={handleLinkClick}>
        이 링크는 preventDefault 때문에 이동하지 않습니다.
      </a>
      <div style={{ marginTop: "10px" }}>
        <p>현재 카운트: {count}</p>
        <button onClick={(e) => incrementCount(e)}>카운트 증가</button>
      </div>
    </div>
  );
};

export default App;
