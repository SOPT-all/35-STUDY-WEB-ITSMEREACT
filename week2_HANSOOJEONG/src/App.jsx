import './App.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { GlobalStyle } from './style/GlobalStyle';
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>나리스 2주차 실습</div>

      </ThemeProvider>
    </>
  )
}

export default App
