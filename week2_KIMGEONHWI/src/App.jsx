import { useState } from "react";
import List from "./List.jsx";

import { member } from "./constants/member.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>로그인</h1>
      {isLoggedIn ? (
        <p>로그인 되었습니다. 로그아웃을 원할시 버튼을 클릭해주세요.</p>
      ) : (
        <p>로그아웃 되엇습니다. 로그인을 원할시 버튼을 클릭해주세요!</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>

      {!isLoggedIn && <button>회원가입</button>}

      <section>
        <h1>스터디원 정보</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          {member.map((person, id) => {
            return <List st person={person} key={id} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
