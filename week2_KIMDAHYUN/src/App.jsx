import PropTypes from 'prop-types';

// 조건부 렌더링 실습
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>다현이의 할 일</h1> : <h1>로그인을 해주세요</h1>}
    </div>
  );
}

Greeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

// 리스트 렌더링 실습
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function App() {
  const isLoggedIn = true; // 로그인 상태를 바꿔가며 테스트 가능
  const todos = [
    { id: 1, text: '나리스 댓글 달기' },
    { id: 2, text: '3주차 과제 끝내기...' },
    { id: 3, text: '알고리즘 문제 풀기...' },
  ];

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn && <TodoList todos={todos} />}
    </div>
  );
}
