import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { GlobalStyle } from './style/GlobalStyle';
import PackingList from './components/PackingList';
import ItemList from './components/ItemList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="title-container">
        <span className="title-text">나리스 2주차 실습</span>
      </div>
      <PackingList />
      <ItemList />
    </ThemeProvider>
  );
}

export default App;
