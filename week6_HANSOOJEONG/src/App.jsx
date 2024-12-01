import { useRef } from 'react';
import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';
import CatFriends from "./components/CatFriends";
import Stopwatch from "./components/Stopwatch";

function App() {
  const inputRef = useRef(null);

  return (
    <>
      <p>week6 실습 세팅</p>
      <h3> 챌린징 - 이미지 캐러셀 스크롤링</h3>
      <CatFriends />
      <hr />
      <h3>스톱워치</h3>
      <Stopwatch />
      <hr />

      <div>
        <nav>
          <h3> 챌린징 - 별개의 컴포넌트에서 검색 필드에 포커스 이동하기</h3>
          <SearchButton onClick={() => {
            inputRef.current.focus();
          }} />
        </nav>
        <SearchInput ref={inputRef} />
      </div>
    </>
  );
}

export default App;
