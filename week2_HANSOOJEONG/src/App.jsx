import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { GlobalStyle } from './style/GlobalStyle';
import PackingList from './components/conditional-rendering/PackingList';
import ItemList from './components/rendering-lists/ItemList';
import Counter from './components/keeping-components-pure/Counter';
import Button from './components/keeping-components-pure/Button';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1); // 이전 카운트 값을 기반으로 업데이트
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="title-container">
        <span className="title-text">나리스 2주차 실습</span>
      </div>
      <div>
        <Counter count={count} />
        <Button onClick={increment} label="Increment" />
      </div>
      <PackingList />
      <ItemList />
    </ThemeProvider>
  );
}

export default App;
