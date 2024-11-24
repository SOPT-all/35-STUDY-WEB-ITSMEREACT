import { useRef } from "react";

export default function UncontrolledComponent() {
  const inputRef = useRef(); // DOM 요소를 직접 참조

  const onSubmit = () => {
    console.log(inputRef.current.value); // DOM 요소에서 값 읽기
  };

  return (
    <div>
      <h3>비제어 컴포넌트</h3>
      <input type="text" ref={inputRef} /> {/* 값은 DOM이 관리 */}
      <button type="button" onClick={onSubmit}>
        제출
      </button>
    </div>
  );
}
