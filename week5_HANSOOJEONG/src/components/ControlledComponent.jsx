import { useState } from "react";

export default function ControlledComponent() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = () => {
    console.log(input);
  };

  return (
    <div>
      <h3>제어 컴포넌트</h3>
      <input
        type="text"
        value={input}
        onChange={onChange}
      />
      <button type="button" onClick={onSubmit} style={{marginLeft: '5.5px'}}>
        제출
      </button>
    </div>
  );
}
