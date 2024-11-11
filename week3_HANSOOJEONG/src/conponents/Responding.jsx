import React, { useState } from 'react';

const Responding = () => {
  const [response, setResponse] = useState(false);

  const handleClick = () => {
    setResponse(!response);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {response ? '응답 완료' : '응답하기'}
      </button>
      <p>{response ? '이벤트에 응답하셨습니다!' : '아직 응답하지 않았습니다.'}</p>
    </div>
  );
};

export default Responding;
