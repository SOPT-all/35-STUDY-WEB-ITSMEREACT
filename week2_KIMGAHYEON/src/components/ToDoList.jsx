import { useState } from 'react';
import styled from '@emotion/styled';
import { todos as initialTodos } from '../constants/todo';

const ToDoList = () => {
  const [todos, setTodos] = useState(
    initialTodos.map((text, index) => ({ id: index + 1, text, completed: false }))
  );

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos([...updatedTodos.filter(todo => !todo.completed), ...updatedTodos.filter(todo => todo.completed)]);
  };

  return (
    <Container>
      <Title>To do list 🧎🏻‍♀️ ...</Title>
      <ul>
        {todos.map(todo => (
          <ListItem key={todo.id} completed={todo.completed}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.text}
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
`;


const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#888' : '#000')};
`;

export default ToDoList;
