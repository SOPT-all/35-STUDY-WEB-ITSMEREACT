import { useState } from 'react';

function App() {
  const [votes, setVotes] = useState(0); // 현재 투표 수를 저장하는 상태
  const [message, setMessage] = useState(''); // 결과 메시지를 저장하는 상태

  // 투표 수를 증가시키는 함수
  const increaseVote = () => {
    setVotes(votes + 1);
    setMessage(`투표 수가 ${votes + 1}로 업데이트 되었습니다.`);
  };

  // 투표 수를 초기화하는 함수
  const resetVote = () => {
    setVotes(0);
    setMessage(`투표 수가 초기화되었습니다.`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>간단한 투표 시스템</h1>
      <p>현재 투표 수: {votes}</p>
      <p>{message}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={increaseVote}>투표하기</button>
        <button onClick={resetVote}>초기화</button>
      </div>
    </div>
  );
}

export default App;
